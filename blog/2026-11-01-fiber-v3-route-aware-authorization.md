---
slug: fiber-v3-route-aware-authorization
title: "Deny by Default: Route-Aware Authorization With c.Endpoint() in Fiber v3.6"
authors: [fiber-team]
tags: [fiber, v3, security, authorization, routing, middleware, go]
description: "Global middleware in Fiber could not see which route a request was headed for, so access rules ended up scattered across route definitions. Since v3.6.0, c.Endpoint() looks ahead. How to build one policy table that denies every route nobody thought about, check it at startup, and avoid the requests that never reach an endpoint."
---

A pull request adds `GET /api/admin/export`, a CSV download of every customer
record. The handler is fine, the test for the CSV format is fine, and the
reviewer approves it. Two weeks later somebody notices that the route was
registered on the `api` group instead of the `admin` group, so the only thing
it checked was a valid login. Every customer with an account could download
every other customer. Nobody wrote a wrong access rule. The route simply never
had one, and nothing in the app noticed.

This is the most ordinary way to end up in [A01 of the OWASP Top 10
2025](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control), broken
access control, whose first piece of advice is to deny by default. In a Fiber
app, "default" usually means "whatever middleware the route happens to inherit
from its group". That works until the day a route lands in the wrong place.
[Fiber v3.6.0](https://github.com/gofiber/fiber/releases/tag/v3.6.0) added
[`c.Endpoint()`](/api/ctx#endpoint), which lets global middleware see the route
that will handle a request before any handler runs. This post uses it to build a
single policy table keyed by route name, a middleware that rejects every route
the table does not mention, and a startup check that refuses to boot when the
table and the routes disagree. Everything was built and tested against [Fiber
v3.6.1](https://github.com/gofiber/fiber/releases/tag/v3.6.1). `c.Endpoint()`,
`c.Bearer()` and `c.SetLocal()` need v3.6.0 or later, which requires Go 1.26.

<!-- truncate -->

## Why Global Middleware Used to Be Blind

The usual way to protect routes in Fiber is to attach middleware where the
routes live. A group gets `api.Use(requireLogin)`, a sensitive route gets
`admin.Get("/users", requireRole("admin"), listUsers)`, and the public health
check sits on the app without any of it. This is explicit and easy to read
route by route. Its weakness is that the safe state depends on every author
putting every route in the right spot. A route that is missing a check looks
exactly like a route that is meant to be public.

The alternative is one middleware in front of everything that decides based on
the route. Before v3.6.0 that middleware had a problem: it ran before routing
had picked an endpoint, so it had no idea which one would win. The obvious
candidate, [`c.Route()`](/api/ctx#route), does not help. It returns the route
that is currently executing, and inside an `app.Use` handler that is the
middleware itself. I printed it for a request to `GET /api/x` in a global
middleware and got a `Path` of `"/"` and an empty `Name`, for every request.
People worked around this by matching on `c.Path()` with prefixes, which
quietly breaks when someone renames a group, or by moving the check into each
handler, which is the scattering we wanted to avoid.

`c.Endpoint()` closes that gap. It returns the `*fiber.Route` the router would
reach for this request, without advancing the handler chain. You get the
registered `Path` (`/api/notes/:id`, not the concrete URL), the `Method` and the
`Name` you gave the route with `.Name()`. It returns `nil` when no endpoint will
run: on a `404` or `405`, and while the error handler replays the chain for a
request that was rejected at the protocol level, for example one over
`BodyLimit`. ASP.NET Core's endpoint routing picks the endpoint first and lets
the authorization middleware read its metadata, and its
[`FallbackPolicy`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.authorization.authorizationoptions.fallbackpolicy)
applies to every endpoint that declares nothing. The design below is the same
idea in Fiber terms, with route names standing in for metadata.

## The Plan: Names as the Contract

Fiber routes do not carry arbitrary metadata, but they carry a name, and names
are already used for [`GetRoute`](/api/app#getroute) and URL generation. A
group can contribute a prefix: `app.Group("/api").Name("api.")` followed by
`.Name("notes.list")` on a route yields `api.notes.list`. So the policy table
is a plain `map[string]Policy`, and the route name is the key.

Three rules make this deny by default:

1. A request whose endpoint has no entry in the table gets a `403`. That
   includes routes nobody named, because their name is the empty string and the
   table never contains it.
2. At startup the app compares the table with `app.GetRoutes(true)`. Any route
   without a policy, any policy without a route, and any name shared by routes
   on different paths stops the process before it listens.
3. A test runs the same comparison, so the mistake shows up in the pull request
   and not at deploy time.

Without rules two and three, a forgotten policy would surface as a confused
user with a `403`. That beats a data leak, but it is still a bug report.

## A Notes Service With One Policy Table

The example is a small notes API. It has a public health check, three routes
for any signed-in user, and an admin route. Tokens are a hard-coded map so the
example runs without a database. In a real service `lookup` would validate a
session or a JWT; the shape of the middleware does not change.

```go
package main

import (
    "errors"
    "fmt"
    "log"
    "maps"
    "slices"
    "sort"
    "strings"
    "sync"

    "github.com/gofiber/fiber/v3"
)

// User is whoever presented a valid token.
type User struct {
    ID    string
    Roles []string
}

// Policy says who may call a route. The zero value means
// "any authenticated user".
type Policy struct {
    Public bool     // no token needed
    Roles  []string // if set, the user needs at least one of them
}

func (p Policy) allows(u User) bool {
    if len(p.Roles) == 0 {
        return true
    }
    return slices.ContainsFunc(u.Roles, func(r string) bool {
        return slices.Contains(p.Roles, r)
    })
}

var (
    public        = Policy{Public: true}
    authenticated = Policy{}
)

func role(names ...string) Policy { return Policy{Roles: names} }

// Policies maps route names to their access rule. A route that is
// missing here is denied, and checkPolicies refuses to start the app.
var policies = map[string]Policy{
    "health":           public,
    "api.notes.list":   authenticated,
    "api.notes.show":   authenticated,
    "api.notes.create": authenticated,
    "api.admin.users":  role("admin"),
}

type userKey struct{}

func currentUser(c fiber.Ctx) User {
    return fiber.Locals[User](c, userKey{})
}

// authorize looks ahead to the route that will handle the request
// and applies its policy before any handler runs.
func authorize(
    rules map[string]Policy,
    lookup func(token string) (User, bool),
) fiber.Handler {
    return func(c fiber.Ctx) error {
        route := c.Endpoint()
        if route == nil {
            // 404 or 405: no handler will run, let the router answer.
            return c.Next()
        }
        policy, ok := rules[route.Name]
        if !ok {
            log.Printf("authz: no policy for %s %s (name %q), denying",
                route.Method, route.Path, route.Name)
            return fiber.ErrForbidden
        }
        if policy.Public {
            return c.Next()
        }
        user, ok := lookup(c.Bearer())
        if !ok {
            c.Set(fiber.HeaderWWWAuthenticate, `Bearer realm="notes"`)
            return fiber.ErrUnauthorized
        }
        if !policy.allows(user) {
            return fiber.ErrForbidden
        }
        c.SetLocal(userKey{}, user)
        return c.Next()
    }
}

// checkPolicies fails when a route has no policy, a policy has no route,
// or one name is shared by routes on different paths.
func checkPolicies(app *fiber.App, rules map[string]Policy) error {
    // GetRoutes lists the routes of mounted sub-apps and the automatic
    // HEAD routes only once the app is prepared for serving. Handler
    // does that preparation now; Listen repeats it later.
    app.Handler()

    // A set, because GET and its automatic HEAD route report the same thing.
    problems := map[string]bool{}
    pathOf := map[string]string{} // route name -> first path that uses it
    for _, r := range app.GetRoutes(true) {
        if _, ok := rules[r.Name]; !ok {
            msg := fmt.Sprintf("%s has no policy (name %q)", r.Path, r.Name)
            problems[msg] = true
            continue
        }
        // Methods of one path (Add, All, automatic HEAD) may share a
        // name. Different paths must not, or one inherits the other's rule.
        if first, ok := pathOf[r.Name]; !ok {
            pathOf[r.Name] = r.Path
        } else if first != r.Path {
            problems[fmt.Sprintf("name %q is used by %s and %s",
                r.Name, first, r.Path)] = true
        }
    }
    for name := range rules {
        if _, ok := pathOf[name]; !ok {
            problems[fmt.Sprintf("policy %q matches no route", name)] = true
        }
    }
    if len(problems) > 0 {
        list := slices.Sorted(maps.Keys(problems))
        return errors.New("authz: " + strings.Join(list, "; "))
    }
    return nil
}

type Note struct {
    ID    string `json:"id"`
    Owner string `json:"owner"`
    Text  string `json:"text"`
}

type store struct {
    mu    sync.Mutex
    next  int
    notes map[string]Note
}

func newApp(tokens map[string]User) *fiber.App {
    app := fiber.New()
    db := &store{notes: map[string]Note{}}

    app.Use(authorize(policies, func(token string) (User, bool) {
        u, ok := tokens[token]
        return u, ok && token != ""
    }))

    app.Get("/healthz", func(c fiber.Ctx) error {
        return c.SendString("ok")
    }).Name("health")

    api := app.Group("/api").Name("api.")

    api.Get("/notes", func(c fiber.Ctx) error {
        me := currentUser(c)
        db.mu.Lock()
        defer db.mu.Unlock()
        mine := []Note{}
        for _, n := range db.notes {
            if n.Owner == me.ID {
                mine = append(mine, n)
            }
        }
        sort.Slice(mine, func(i, j int) bool { return mine[i].ID < mine[j].ID })
        return c.JSON(mine)
    }).Name("notes.list")

    api.Get("/notes/:id", func(c fiber.Ctx) error {
        me := currentUser(c)
        db.mu.Lock()
        n, ok := db.notes[c.Params("id")]
        db.mu.Unlock()
        // Route policy said "authenticated". Whether this user may
        // read this note is a question only the handler can answer.
        if !ok || n.Owner != me.ID {
            return fiber.ErrNotFound
        }
        return c.JSON(n)
    }).Name("notes.show")

    api.Post("/notes", func(c fiber.Ctx) error {
        var in struct {
            Text string `json:"text"`
        }
        if err := c.Bind().JSON(&in); err != nil {
            return fiber.ErrBadRequest
        }
        db.mu.Lock()
        db.next++
        n := Note{
            ID:    fmt.Sprintf("n%d", db.next),
            Owner: currentUser(c).ID,
            Text:  in.Text,
        }
        db.notes[n.ID] = n
        db.mu.Unlock()
        return c.Status(fiber.StatusCreated).JSON(n)
    }).Name("notes.create")

    api.Get("/admin/users", func(c fiber.Ctx) error {
        ids := make([]string, 0, len(tokens))
        for _, u := range tokens {
            ids = append(ids, u.ID)
        }
        sort.Strings(ids)
        return c.JSON(ids)
    }).Name("admin.users")

    return app
}

func main() {
    tokens := map[string]User{
        "alice-token": {ID: "alice", Roles: []string{"admin"}},
        "bob-token":   {ID: "bob"},
    }
    app := newApp(tokens)
    if err := checkPolicies(app, policies); err != nil {
        log.Fatal(err)
    }
    log.Fatal(app.Listen(":3000"))
}
```

The middleware does four things in order. It asks for the endpoint, and if
there is none, it calls `c.Next()` and lets the router produce its normal `404`
or `405`. It looks up the policy by name and denies with `403` if there is no
entry, logging the method, path and name so the person who added the route can
find it. Public routes pass without a token. Everything else needs a bearer
token, read with `c.Bearer()`, which returns the credentials of an
`Authorization: Bearer ...` header and an empty string for any other scheme. A
missing or unknown token is a `401` with a `WWW-Authenticate` header, a known
user without the right role is a `403`.

`c.Bearer()` returns a view into the request buffer, like most `Ctx` getters.
That is fine for a map lookup. A `lookup` that caches tokens or keeps them past
the request has to copy the string first, for example with `strings.Clone`.

Registration order matters as much as the code. Fiber runs handlers in the
order they were registered, so `app.Use(authorize(...))` has to come before the
first route. A route registered above it never passes through the middleware,
and `checkPolicies` cannot notice, because the route has a name and a policy.
Keep the `app.Use` call as the first thing `newApp` does after `fiber.New`.

The authenticated user ends up in the request locals with `c.SetLocal`, keyed by
an unexported struct type so no other package can collide with it. Handlers read
it back with the generic `fiber.Locals[User]`. Since a handler only runs after
`authorize` approved the request, protected handlers always find a user. On a
public route nobody stored one, and `currentUser` returns the zero `User` with
an empty ID, so do not call it there.

`checkPolicies` walks `app.GetRoutes(true)`, where `true` filters out `app.Use`
registrations, and collects every problem instead of stopping at the first, so
one failed start tells you everything. Besides missing entries it looks for a
name that two different paths share. Fiber does not reject duplicate names at
registration, and the middleware only sees the name, so a sensitive route that
reuses the name of a public one would quietly run under the public rule. Several
methods on the same path, as with `Add`, `All` or the automatic `HEAD` route,
may share a name, because they are one endpoint as far as the policy is
concerned. It calls `app.Handler()` before reading
the routes, and that line is easy to drop by accident. Before the app is
prepared for serving, `GetRoutes` does not yet contain the routes of mounted
sub-apps or the automatic `HEAD` routes, so a sub-app route without a policy
would slip through, and a correct policy for one would be reported as matching
nothing. `Handler` runs the same preparation that `Listen` runs, and `Listen`
repeating it later did no harm in my tests. The check runs after all routes are
registered and before `Listen`. If you register routes in several packages, call
it at the point where all of them have been added.

### Trying It

Start the server with `go run .` and use curl from a second shell. The health
check is public:

```bash
curl -i http://localhost:3000/healthz
```

```text
HTTP/1.1 200 OK
Content-Type: text/plain; charset=utf-8
...
ok
```

The notes list needs a token, and the response says which scheme it expects:

```bash
curl -i http://localhost:3000/api/notes
```

```text
HTTP/1.1 401 Unauthorized
Content-Type: text/plain; charset=utf-8
Www-Authenticate: Bearer realm="notes"
...
Unauthorized
```

Bob can create a note and read it back:

```bash
curl -s -X POST -H 'Authorization: Bearer bob-token' \
  -H 'Content-Type: application/json' -d '{"text":"buy milk"}' \
  http://localhost:3000/api/notes
curl -s -H 'Authorization: Bearer bob-token' http://localhost:3000/api/notes/n1
```

```text
{"id":"n1","owner":"bob","text":"buy milk"}
{"id":"n1","owner":"bob","text":"buy milk"}
```

Bob is not an admin, so `GET /api/admin/users` answers `403 Forbidden` for his
token and `["alice","bob"]` for Alice's. A path that does not exist still gets
a `404 Not Found`, and `DELETE /api/notes/n1` gets
`405 Method Not Allowed` with `Allow: GET, HEAD`. Both come from the router,
because `c.Endpoint()` returned `nil` and the middleware stepped aside.

Now break the contract on purpose. Add `app.Get("/debug/vars", ...)` without a
name, and rename the admin policy to `api.admin.user` with a typo. The process
refuses to start and lists all three problems:

<!-- markdownlint-disable MD013 -->

```text
authz: /api/admin/users has no policy (name "api.admin.users"); /debug/vars has no policy (name ""); policy "api.admin.user" matches no route
```

<!-- markdownlint-enable MD013 -->

The stale policy line matters more than it looks. A policy that matches no
route usually means a route was renamed, and the renamed route is then the one
without a rule.

## Route Policy Is Not Object Policy

Alice is an admin and Bob's note is `n1`, yet
`GET /api/notes/n1` with Alice's token returns `404`. The route policy only said
"authenticated", and Alice is. The question "may this user read this note" is
not about the route at all, it is about the record, and the middleware cannot
answer it because it does not load records. That check stays in the handler,
which compares `n.Owner` with the current user. I return `404` instead of `403`
there so the API does not confirm that a note with that ID exists.

The policy table answers "who may call this kind of endpoint". It does not
replace the ownership check that OWASP lists right after deny by default, and it
is easy to believe it does once the table looks complete.

## Pin It Down in a Test

The startup check catches drift on the next deploy. A test catches it in the
pull request that causes it. The test file below runs `checkPolicies` against
the real app, rejects a name that was copied onto a second path, proves that an
unnamed route gets a `403` even when the caller is an admin, and walks an access
matrix, including the automatic `HEAD` routes and the `404` and `405` paths.

```go
package main

import (
    "net/http"
    "net/http/httptest"
    "testing"

    "github.com/gofiber/fiber/v3"
)

var testTokens = map[string]User{
    "alice-token": {ID: "alice", Roles: []string{"admin"}},
    "bob-token":   {ID: "bob"},
}

func TestEveryRouteHasAPolicy(t *testing.T) {
    if err := checkPolicies(newApp(testTokens), policies); err != nil {
        t.Fatal(err)
    }
}

func TestSharedNameIsReported(t *testing.T) {
    app := newApp(testTokens)
    // Copy-pasted name: without the check, the export would be public.
    app.Get("/api/export", func(c fiber.Ctx) error {
        return c.SendString("all notes")
    }).Name("health")

    if err := checkPolicies(app, policies); err == nil {
        t.Fatal("checkPolicies accepted one name on two paths")
    }
}

func TestUnnamedRouteIsRejected(t *testing.T) {
    app := newApp(testTokens)
    app.Get("/debug/vars", func(c fiber.Ctx) error {
        return c.SendString("secrets")
    })

    if err := checkPolicies(app, policies); err == nil {
        t.Fatal("checkPolicies accepted a route without a policy")
    }

    req := httptest.NewRequest(http.MethodGet, "/debug/vars", nil)
    req.Header.Set("Authorization", "Bearer alice-token")
    resp, err := app.Test(req)
    if err != nil {
        t.Fatal(err)
    }
    if resp.StatusCode != fiber.StatusForbidden {
        t.Fatalf("status = %d, want 403", resp.StatusCode)
    }
}

func TestAccessMatrix(t *testing.T) {
    app := newApp(testTokens)
    tests := []struct {
        method, path, token string
        want                int
    }{
        {"GET", "/healthz", "", 200},
        {"HEAD", "/healthz", "", 200},
        {"GET", "/api/notes", "", 401},
        {"HEAD", "/api/notes", "", 401},
        {"GET", "/api/notes", "bob-token", 200},
        {"GET", "/api/admin/users", "bob-token", 403},
        {"GET", "/api/admin/users", "alice-token", 200},
        {"GET", "/api/nope", "", 404},
        {"DELETE", "/api/notes/n1", "", 405},
    }
    for _, tt := range tests {
        req := httptest.NewRequest(tt.method, tt.path, nil)
        if tt.token != "" {
            req.Header.Set("Authorization", "Bearer "+tt.token)
        }
        resp, err := app.Test(req)
        if err != nil {
            t.Fatal(err)
        }
        if resp.StatusCode != tt.want {
            t.Errorf("%s %s (%q) = %d, want %d",
                tt.method, tt.path, tt.token, resp.StatusCode, tt.want)
        }
    }
}
```

The `HEAD` rows guard against a quiet change. Fiber generates a `HEAD` route for
every `GET` route, and the generated route carries the same name as the `GET`
route, so `HEAD /api/notes` gets the same `401` as `GET`. If that ever changed,
an unauthenticated `HEAD` would hit the deny-by-default branch and return `403`,
and this test would tell you.

## Requests That Never Reach an Endpoint

`c.Endpoint()` only knows about endpoints, which are routes registered with
`Get`, `Post`, `Add`, `All` and the other method helpers. Anything registered
with `app.Use` is middleware to the router, even when it answers the request
itself. The most common example is the [static middleware](/middleware/static).
I registered `app.Use("/assets", static.New("./public"))` and requested
`/assets/a.txt`: `c.Endpoint()` returned `nil`, the authorization middleware
treated it like a `404`, called `c.Next()`, and the static middleware served the
file with `200`. No policy was consulted.

For public assets that is harmless. It becomes a hole when someone serves
exports or uploads that way, or mounts a handler on a prefix with `app.Use`
because it was the shortest way to catch every subpath. The fix is to register
such handlers as routes:

```go
app.Get("/assets/*", static.New("./public", static.Config{
    // A miss must end here. By default static calls c.Next() and the
    // request falls through to whatever route matches next.
    NotFoundHandler: func(c fiber.Ctx) error {
        return fiber.ErrNotFound
    },
})).Name("assets")
```

This serves the same files, `c.Endpoint()` returns the route with the name
`assets`, and the table can mark it public or not. The `NotFoundHandler` is not
decoration. Without it, the static middleware calls `c.Next()` when a file does
not exist, and the router continues with the next matching route. I tested that
with `assets` marked public and an admin-only `GET /assets/export` registered
after it: an anonymous request to `/assets/export` was authorized as `assets`,
the static middleware found no file, fell through, and the export handler
answered with `200`. With the `NotFoundHandler` the same request gets a `404`.

The general rule behind it: `authorize` checks the endpoint the router reaches
first, once. Any handler that calls `c.Next()` to pass the request on to a later
route, or that changes the routing target after the check, hands the request to
an endpoint nobody authorized. If you need that kind of fall-through, the second
endpoint has to check again, for example with route-level middleware. The
`GetRoutes(true)` check will not warn you about `app.Use` handlers, because it
filters them out on purpose, so this is a rule for code review: anything that
sends a response is a route, not a `Use`.

Mounted sub-apps behave better. With `app.Use("/v2", sub)`, `c.Endpoint()`
returns the flattened route, for example `/v2/items/:id`, and `GetRoutes` lists
it once the app has been prepared, which is why `checkPolicies` calls
`app.Handler()` first. The name, however, is the one given inside the sub-app,
without any prefix from the mount, so two sub-apps can both have a route called
`items.show`. `checkPolicies` reports that, because the two routes have
different paths, but it is better not to get there. Give each sub-app's names a
prefix of its own, either by hand or through a group inside the sub-app.

## Details That Bite

### Several Methods, One Name

`app.Add([]string{"GET", "POST"}, "/multi", h).Name("multi")` names both
routes `multi`, and they share one policy. That is fine when both methods need
the same rule. When reading and writing need different rules, register them
separately and give them separate names. If you prefer to keep them together,
key the table by method and name instead of name alone. The middleware has
`route.Method` right there. That only splits the methods of one path, though.
It does not help when two different paths carry the same name, which is why
`checkPolicies` treats that as an error.

### Naming a Group Too Late

`Group.Name` only sets the group prefix while the group has no routes. Called
after the first route, it renames the latest route instead. Name the group in
the same line that creates it, as in the example, and the problem never comes
up.

### Something Earlier Can Still Answer

The route `c.Endpoint()` returns is the one the router would reach, not a
promise that it runs. A middleware registered before `authorize` can end the
request on its own. That is what you want for CORS preflight requests, rate
limiting and the host check from the [DNS rebinding
post](/blog/fiber-v3-dns-rebinding-host-authorization), but it also means
nothing registered before `authorize` should hand out data. I put the
authorization middleware directly after the ones that only reject or annotate
requests.

### Routes Added at Runtime

Fiber can add and remove routes after start with `RebuildTree` and the
`RemoveRoute` family, which the routing guide recommends only for development.
`checkPolicies` runs once, so a route added later is not checked at startup.
The middleware still denies it until the table has an entry, which is the
behavior you want, but remember that the table itself is a plain map. If you
change it at runtime too, guard it with a lock or swap it atomically.

### The Second Router Scan

`c.Endpoint()` scans the remaining routes of the request's tree bucket, so a
global middleware that calls it pays for a second lookup on every request. The
Fiber docs call that cheap when routes are spread over many prefixes and
noticeable when a hundred or more share one, as with everything under
`/api/v1`. I wanted to know what "noticeable" means, so I wrote a small
benchmark. It registers `n` routes of the form `/api/v1/rN/:id`, puts a global
middleware in front that either only calls `c.Next()` or calls `c.Endpoint()`
first, and requests the last route, which is the worst case for the scan:

```go
package bench

import (
    "fmt"
    "testing"

    "github.com/gofiber/fiber/v3"
    "github.com/valyala/fasthttp"
)

func build(n int, lookAhead bool) fasthttp.RequestHandler {
    app := fiber.New()
    app.Use(func(c fiber.Ctx) error {
        if lookAhead {
            _ = c.Endpoint() // what the authorize middleware does
        }
        return c.Next()
    })
    for i := 0; i < n; i++ {
        app.Get(fmt.Sprintf("/api/v1/r%d/:id", i), func(c fiber.Ctx) error {
            return c.SendStatus(fiber.StatusNoContent)
        }).Name(fmt.Sprintf("r%d", i))
    }
    return app.Handler()
}

func BenchmarkEndpoint(b *testing.B) {
    for _, n := range []int{10, 150} {
        for _, la := range []bool{false, true} {
            h := build(n, la)
            ctx := &fasthttp.RequestCtx{}
            ctx.Request.Header.SetMethod("GET")
            ctx.Request.SetRequestURI(fmt.Sprintf("/api/v1/r%d/42", n-1))
            name := fmt.Sprintf("routes=%d/endpoint=%v", n, la)
            b.Run(name, func(b *testing.B) {
                b.ReportAllocs()
                for b.Loop() {
                    h(ctx)
                }
            })
            if ctx.Response.StatusCode() != 204 {
                b.Fatalf("status %d", ctx.Response.StatusCode())
            }
        }
    }
}
```

On a shared four-core cloud VM (Intel Xeon at 2.8 GHz, Go 1.26.0, Fiber v3.6.1,
two runs of `go test -bench . -count 5`), the numbers were noisy but the shape
was clear. With 10 routes a request took about 240 to 300 ns without the
look-ahead and about 380 to 610 ns with it. With 150 routes under the same
prefix it went from about 530 to 670 ns to about 2.8 to 4.8 microseconds.
Neither variant allocated. A few hundred nanoseconds is nothing next to a
database query, but with a large flat API the look-ahead can cost more than the
routing itself. If your routes are spread over several prefixes, you are closer
to the first numbers. Run the benchmark against your own route table before you
decide, and remember that group middleware costs nothing extra.

## When Group Middleware Is Enough

Not every app needs a policy table. If you have five routes, two groups and one
person who writes all of them, `api.Use(requireLogin)` is clear and fast, and a
table adds a layer that someone has to keep in sync. The table pays off when
many people add routes, when groups are reorganized, or when an auditor asks
for a list of every endpoint and who may call it. The policy map is that list,
and the startup check makes sure it matches the routes.

You also do not have to choose one or the other everywhere. Group middleware
can keep doing work that belongs to a group, such as loading a tenant, while
the table makes the final access decision. What I would avoid is splitting the
access decision itself between both, because then neither place tells the whole
story.

## Wrapping Up

`c.Endpoint()` lets one middleware see the route a request is headed for, so
access rules can live in one table instead of in the placement of routes. Deny
every name the table does not know, compare the table with `GetRoutes` at
startup and in a test, keep ownership checks in the handlers, and register
anything that sends data as a route rather than with `app.Use`.

## Internal References

- [Ctx: Endpoint](/api/ctx#endpoint), [Ctx: Route](/api/ctx#route) and
  [Ctx: Matched](/api/ctx#matched)
- [Ctx: Bearer](/api/ctx#bearer), [Ctx: SetLocal](/api/ctx#setlocal) and
  [Ctx: Locals](/api/ctx#locals)
- [App: Name](/api/app#name) and [App: GetRoutes](/api/app#getroutes)
- [Routing Guide: Automatic HEAD routes](/guide/routing#automatic-head-routes)
- [Static Middleware](/middleware/static)
- [Localhost Is Not a Boundary](/blog/fiber-v3-dns-rebinding-host-authorization)
- [Write Your Own Middleware](/blog/fiber-v3-write-your-own-middleware)
- [Fiber v3.6.0 release (Endpoint, Bearer, SetLocal, Go 1.26)](https://github.com/gofiber/fiber/releases/tag/v3.6.0)
- [Fiber v3.6.1 release](https://github.com/gofiber/fiber/releases/tag/v3.6.1)
- [Add Endpoint() for middleware look-ahead (#4601)](https://github.com/gofiber/fiber/pull/4601)
- [OWASP Top 10 2025: A01 Broken Access Control](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control)
