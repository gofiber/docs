---
slug: fiber-v3-dns-rebinding-host-authorization
title: "Localhost Is Not a Boundary: DNS Rebinding and Host Authorization in Fiber v3"
authors: [fiber-team]
tags:
    [fiber, v3, security, dns-rebinding, hostauthorization, mcp, middleware, go]
description: "A Fiber server on 127.0.0.1 can still be reached by any website your browser opens. How DNS rebinding works, why CORS and the CSRF check do not see it, and how the hostauthorization middleware stops it on local tools and public servers alike."
---

Somebody on your team writes a small helper for the editor. It is a Fiber app
on `127.0.0.1:7777` that lists and reads files from the current project, so an
editor plugin or a coding agent can ask it for context. It has no
authentication, because it only listens on loopback and "nothing outside this
machine can reach it". That sentence is half true. Nothing outside the machine
can open a connection to it. But the browser on the same machine can, and the
browser runs code from every website its user visits.

Over the past months, several
[Model Context Protocol](https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/streamable-http)
servers received advisories for exactly this setup, among them
[genieacs-mcp](https://osv.dev/vulnerability/CVE-2026-55637), whose
Streamable HTTP transport listened on `127.0.0.1:8080` without checking `Host`
or `Origin`. The attack behind them is called DNS rebinding, and it is older
than most of the tools it now hits. This post shows how it works, why the usual
browser defenses do not notice it, and how the
[hostauthorization middleware](/middleware/hostauthorization) that shipped in
[Fiber v3.3.0](https://github.com/gofiber/fiber/releases/tag/v3.3.0) closes the
hole, for local tools and for public servers. Everything was built and tested
against [Fiber v3.6.1](https://github.com/gofiber/fiber/releases/tag/v3.6.1),
which needs Go 1.26. The example also uses `c.Origin()`, which arrived in
v3.6.0.

<!-- truncate -->

## How a Website Reaches 127.0.0.1

The browser's same-origin policy is built on names, not on addresses. An origin
is a scheme, a hostname and a port. Which IP address that hostname resolves to
is not part of it, and DNS rebinding exploits exactly that gap.

The attacker controls a domain, say `attacker.example`, and runs its DNS server.
The steps look like this:

1. The victim opens `http://rebind.attacker.example:7777/`. The attacker's DNS
   server answers with the IP of the attacker's web server and a time to live of
   a few seconds. The browser loads a page with some JavaScript.
2. The DNS server switches its answer for `rebind.attacker.example` to
   `127.0.0.1`.
3. The script keeps calling `fetch("/api/files")` until the browser looks the
   name up again. Browsers keep their own DNS cache and reuse open connections,
   so this can take a while despite the short TTL. Eventually the lookup
   returns `127.0.0.1` and the browser connects to your helper on port 7777.
4. From the browser's point of view nothing unusual happened. The page asked
   for a resource on its own origin, so the request is same-origin, and the
   script is allowed to read the response. It can send the file list and any
   file contents back to the attacker over a different connection.

Open-source frameworks such as NCC Group's
[Singularity](https://www.nccgroup.com/research/singularity-of-origin/)
automate the timing. The point that matters for us is the request that arrives
at your server in step 3. It comes from `127.0.0.1`, over
loopback, from the user's own browser. The only trace of the attack is one
header:

```text
GET /api/files HTTP/1.1
Host: rebind.attacker.example:7777
Sec-Fetch-Site: same-origin
```

A `POST` would also carry `Origin: http://rebind.attacker.example:7777`, but
browsers leave `Origin` off a same-origin `GET`, so you cannot count on it.
`Host` is always there, because HTTP/1.1 requires it and the browser fills it in
from the URL. Script cannot change it, since `Host` is a forbidden header name
for `fetch` and `XMLHttpRequest`. So the browser will always tell your server
which name it thinks it is talking to, and that name is the attacker's.

## Why the Usual Defenses Stay Quiet

Binding to `127.0.0.1` instead of `0.0.0.0` is still right, it just answers a
different question. CORS does not help either. It decides whether a page on one
origin may read responses from another origin. In the rebinding attack there
is no second origin. The page and your API share
`http://rebind.attacker.example:7777`, the browser never sends a preflight, and
your `cors.New` config is never asked.

The tokenless CSRF check from v3.6.0, `csrf.NewCrossOriginProtection`, which we
covered in [CSRF Without Tokens](/blog/fiber-v3-csrf-without-tokens), is also
blind here, and that surprised me the first time I tested it. It trusts
`Sec-Fetch-Site: same-origin`, and that is precisely what the browser sends
for a rebound request. The check is doing its job: it stops other sites from
making requests to yours. During a rebinding attack, the browser treats the
attacker's site as yours. The test at the end of this post pins that behavior
down so nobody on your team relies on it by accident.

Chrome 142 added a
[Local Network Access](https://developer.chrome.com/blog/local-network-access)
permission prompt that a public website has to pass before it can reach
addresses on the local network or loopback. That is a real improvement, but it
is one browser engine, it is a prompt that users can accept, and it protects
nothing the day a user runs a different browser. Your server should not depend
on it.

Authentication does help. If every endpoint demands a secret that the
attacker's page cannot learn, the rebound request fails with a `401`. Many
local tools have no such secret, though, and the ones that have one often serve
a small web UI that fetches the token from an unauthenticated endpoint on
startup. A rebound page can call that endpoint as well.

## Check the Name, Not the Address

The fix has been known for years, and other ecosystems ship it as a standard
part of the framework. Rails has
[`ActionDispatch::HostAuthorization`](https://api.rubyonrails.org/classes/ActionDispatch/HostAuthorization.html),
which allows only `localhost` and IP addresses in development, and Django
refuses requests whose `Host` is not in `ALLOWED_HOSTS`. The idea is always the
same: the server knows its own names, so it rejects every request that was
addressed to some other name. A rebound request is addressed to
`rebind.attacker.example`, which is not one of them.

In Fiber that is `hostauthorization.New`. It reads the host with `c.Host()`,
normalizes it, compares it with an allowlist and calls `ErrorHandler` with
`hostauthorization.ErrForbiddenHost` when nothing matches. The default response
is a plain `403`.

## A Local Tool That Knows Its Own Name

Here is the helper from the introduction, written so that a rebound request
never reaches a handler. It serves two routes under `/api` for the editor and a
health check, and it layers three checks: the `Host` allowlist, an `Origin`
allowlist for browser clients, and a bearer token.

```go
package main

import (
    "crypto/rand"
    "crypto/subtle"
    "errors"
    "io/fs"
    "log"
    "os"
    "slices"
    "strings"

    "github.com/gofiber/fiber/v3"
    "github.com/gofiber/fiber/v3/middleware/cors"
    "github.com/gofiber/fiber/v3/middleware/hostauthorization"
    "github.com/gofiber/fiber/v3/middleware/keyauth"
)

// The only Host values a browser sends when it really talks to this machine.
var loopbackHosts = []string{"localhost", "127.0.0.1", "::1"}

func hostDenied(c fiber.Ctx, err error) error {
    log.Printf("devtool: rejected Host %q for %s %s: %v",
        c.Host(), c.Method(), c.Path(), err)
    return c.Status(fiber.StatusForbidden).JSON(fiber.Map{
        "error": "unknown host",
    })
}

// originAllowlist rejects browser requests from pages we do not know.
// Requests without an Origin header (curl, editors, agents) pass.
func originAllowlist(allowed []string) fiber.Handler {
    return func(c fiber.Ctx) error {
        origin := c.Origin()
        if origin == "" || slices.Contains(allowed, origin) {
            return c.Next()
        }
        log.Printf("devtool: rejected Origin %q for %s %s",
            origin, c.Method(), c.Path())
        return c.Status(fiber.StatusForbidden).JSON(fiber.Map{
            "error": "unknown origin",
        })
    }
}

func newApp(root *os.Root, token string, allowedOrigins []string) *fiber.App {
    app := fiber.New()

    // First middleware: nothing below runs for a foreign Host.
    app.Use(hostauthorization.New(hostauthorization.Config{
        AllowedHosts: loopbackHosts,
        ErrorHandler: hostDenied,
    }))
    app.Use(originAllowlist(allowedOrigins))
    // Lets the trusted UI pass the preflight for its Authorization header.
    // AllowOriginsFunc instead of AllowOrigins: an empty AllowOrigins list
    // would allow every origin.
    app.Use(cors.New(cors.Config{
        AllowOriginsFunc: func(origin string) bool {
            return slices.Contains(allowedOrigins, origin)
        },
        AllowHeaders: []string{fiber.HeaderAuthorization},
    }))

    app.Get("/healthz", func(c fiber.Ctx) error {
        return c.SendString("ok")
    })

    api := app.Group("/api", keyauth.New(keyauth.Config{
        Validator: func(_ fiber.Ctx, key string) (bool, error) {
            if subtle.ConstantTimeCompare([]byte(key), []byte(token)) == 1 {
                return true, nil
            }
            return false, keyauth.ErrMissingOrMalformedAPIKey
        },
    }))

    api.Get("/files", func(c fiber.Ctx) error {
        var files []string
        walk := func(p string, d fs.DirEntry, err error) error {
            if err != nil {
                return err
            }
            if !d.IsDir() {
                files = append(files, p)
            }
            return nil
        }
        if err := fs.WalkDir(root.FS(), ".", walk); err != nil {
            return err
        }
        return c.JSON(fiber.Map{"files": files})
    })

    api.Get("/files/*", func(c fiber.Ctx) error {
        name := c.Params("*")
        info, err := fs.Stat(root.FS(), name)
        if errors.Is(err, fs.ErrNotExist) || errors.Is(err, fs.ErrInvalid) ||
            (err == nil && info.IsDir()) {
            return fiber.ErrNotFound
        }
        if err != nil {
            return err
        }
        data, err := fs.ReadFile(root.FS(), name)
        if err != nil {
            return err
        }
        return c.Send(data)
    })

    return app
}

func main() {
    root, err := os.OpenRoot(".")
    if err != nil {
        log.Fatal(err)
    }
    defer root.Close()

    token := os.Getenv("DEVTOOL_TOKEN")
    if token == "" {
        token = rand.Text()
        log.Printf("devtool: token for this session: %s", token)
    }

    // A browser UI that may call the API, e.g. http://localhost:5173.
    var origins []string
    if v := os.Getenv("DEVTOOL_ORIGINS"); v != "" {
        origins = strings.Split(v, ",")
    }

    app := newApp(root, token, origins)
    if err := app.Listen("127.0.0.1:7777"); err != nil {
        log.Fatal(err)
    }
}
```

The host check is the first `app.Use`. Fiber runs `Use` middleware for every
request, including those that end in a `404`, so a foreign `Host` never sees a
route, a static file or an error page that might leak something. If you add an
embedded UI later with the [static middleware](/middleware/static), register it
after the host check, not before.

The allowlist names all three spellings of loopback. Browsers send `localhost`
or the literal address the user typed, and IPv6 literals arrive in brackets
(`[::1]:7777`). The middleware strips the port and the brackets, lowercases the
name and removes a trailing dot before comparing, so `LOCALHOST.:7777` matches
`localhost` as well. If you open the tool under other local names, such as
`devtool.localhost` or a name from `/etc/hosts`, those go into the list too.

The `Origin` allowlist is the second layer, and the MCP specification asks for
it explicitly: a Streamable HTTP server must check `Origin` and answer `403`
when it is present and not acceptable. Here it is a small custom middleware
because the rule is simple. A request without `Origin` passes, which covers
`curl`, the editor plugin and agents that are not browsers. A request with
`Origin` must name a page you trust, such as a dev UI on `http://localhost:5173`
that you list in `DEVTOOL_ORIGINS`.

The host check already stops rebinding, so this layer is for the classic case:
a page on `https://evil.example` calls `fetch("http://localhost:7777/api/files")`
directly. That request carries a perfectly valid `Host: localhost:7777`, and
only `Origin` gives it away. The token adds a second obstacle here, because a
cross-origin `fetch` with an `Authorization` header needs a CORS preflight. The
`OPTIONS` request runs through the same `Use` middleware, gets the `403` from
the `Origin` check, and the browser never sends the real request.

A trusted UI needs that preflight to succeed, so the example adds
[`cors.New`](/middleware/cors) behind the `Origin` check. It answers the
`OPTIONS` request with `204 No Content`, names the origin in
`Access-Control-Allow-Origin` and allows the `Authorization` header. Take care
with the configuration: an empty `AllowOrigins` list allows every origin, and
when `DEVTOOL_ORIGINS` is unset the list would be empty. `AllowOriginsFunc`
with the same slice avoids that, because with the function set and no static
list, an origin is only allowed when the function says so.

Note that the `Origin` check compares against a fixed list and not against
`Host`, which is the difference to the CSRF check. During rebinding, `Origin`
and `Host` agree with each other, and both are wrong.

The token comes last and protects the actual data. `crypto/rand.Text` returns
a random string with at least 128 bits of randomness, and the keyauth
middleware reads it from `Authorization: Bearer ...` by default. Compare the
token in constant time with `subtle.ConstantTimeCompare`, as above, rather than
with `==`. Reading files through `os.Root` keeps a request for
`../../.ssh/id_ed25519` inside the project directory, which is a separate
problem, but one that every file-serving helper has.

### Trying It

Start the helper with a fixed token so the commands are reproducible, then play
both clients with curl from a second shell that has the same `DEVTOOL_TOKEN`
exported. curl lets you set any `Host` you like, which is
exactly what a rebound browser request looks like from the server's side:

```bash
export DEVTOOL_TOKEN=local-dev-token
go run .
curl -i -H 'Host: rebind.attacker.example:7777' http://127.0.0.1:7777/api/files
```

```text
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
...
{"error":"unknown host"}
```

The log names the host, which is what you want to see when someone reports a
`403` that should not have happened:

<!-- markdownlint-disable MD013 -->

```text
2026/10/25 12:03:57 devtool: rejected Host "rebind.attacker.example:7777" for GET /api/files: hostauthorization: forbidden host
```

<!-- markdownlint-enable MD013 -->

The legitimate client uses a loopback name and the token:

```bash
curl -s -H "Authorization: Bearer $DEVTOOL_TOKEN" http://localhost:7777/api/files
```

```text
{"files":["go.mod","go.sum","main.go"]}
```

Without the token the request gets past the host check and fails at keyauth
with `401 Unauthorized`, a `WWW-Authenticate: Bearer realm="Restricted"` header
and the body `missing or invalid API Key`. A request with the right token but an
`Origin` of `http://localhost:5173` gets `{"error":"unknown origin"}`, unless
you started the helper with `DEVTOOL_ORIGINS=http://localhost:5173`. With that
setting, the browser's preflight passes:

```bash
curl -si -X OPTIONS -H 'Origin: http://localhost:5173' \
  -H 'Access-Control-Request-Method: GET' \
  -H 'Access-Control-Request-Headers: authorization' \
  http://localhost:7777/api/files
```

```text
HTTP/1.1 204 No Content
...
Access-Control-Allow-Origin: http://localhost:5173
Access-Control-Allow-Methods: GET, POST, HEAD, PUT, DELETE, PATCH, QUERY
Access-Control-Allow-Headers: Authorization
```

The real `GET` that follows carries the token and gets the file list with
`Access-Control-Allow-Origin: http://localhost:5173`, so the UI can read it. The
preflight test further down pins this down for both a trusted and an unknown
origin.

## Details That Bite

These are the cases I tripped over while testing the middleware against
v3.6.1. All of them are configuration, not bugs in your handlers.

### Wildcards Use a Star

A subdomain wildcard is written `*.example.com` and matches `api.example.com`
and also `a.b.example.com`, but not `example.com` itself. List both if you serve
the apex and its subdomains. The leading-dot form that some other tools use,
`.example.com`, makes `hostauthorization.New` panic at startup. That matters
because the announcement in the v3.3.0 release notes shows an example with
`".myapp.com"` and a CIDR range `"10.0.0.0/8"`. Neither form was supported
by the released code. The dot entry panics, which you notice immediately. The
CIDR entry is accepted as a plain host name and never matches anything, which
you only notice when a request from `10.1.2.3` gets a `403`. The
[middleware documentation](/middleware/hostauthorization) describes the actual
syntax, and it does not filter by address at all. If you want to restrict
clients by IP, check `c.IP()` in your own middleware or do it at the firewall.

### An Empty Entry Rejects Everything

`New` panics when both `AllowedHosts` and `AllowedHostsFunc` are missing, so
you cannot forget the configuration completely. But
`strings.Split(os.Getenv("ALLOWED_HOSTS"), ",")` on an unset variable returns a
slice with one empty string. Empty entries are skipped, the slice is not empty,
so there is no panic, and every request is rejected with a `403`. That fails
closed, which is the right direction, but it looks like an outage. Check the
variable yourself before building the list, as the next example does.

### Ports Are Ignored

The port is stripped before matching, so `localhost:7777` and `localhost:9999`
are the same entry. For rebinding that is fine, since the attacker's name is
the part that gives the attack away. It does mean the middleware cannot tell
two local services on different ports apart. If several tools on one machine
must not talk to each other, the token is what separates them.

### IPv6 Literals Are Compared as Written

`[::1]` matches the entry `::1`. The same address written out in full,
`[0:0:0:0:0:0:0:1]`, is rejected in v3.6.1, because the middleware compares the
normalized text instead of the parsed address
([#4797](https://github.com/gofiber/fiber/issues/4797) tracks this). Browsers
send the short form, so in practice this only shows up with handwritten clients,
and it errs on the side of a `403`.

### Skipping Routes Makes Them Reachable

`Next` exempts routes from the check, and the documentation uses it for a
health endpoint. Everything you exempt is readable by a rebound page. A health
check that returns `ok` reveals almost nothing. One that returns the version,
the git commit and the database host reveals quite a bit. Keep exempted routes
boring, or set the right `Host` in the client that calls them.

## The Same Middleware on a Public Server

On a server with a public name, rebinding against your users' browsers is not
the main risk. A forged `Host` still is, for a different reason: anything that
builds absolute URLs from the request. `c.BaseURL()` combines `c.Scheme()` and
`c.Host()`, so a handler that puts `c.BaseURL()` into a password reset email
sends the user a link to whatever host the attacker put in the request. Without
a host check, a `POST` with `Host: evil.example` produced
`http://evil.example/reset?token=...` in my test. The user clicks it, and the
reset token goes to the attacker. This is the attack Django's documentation
names as the reason for `ALLOWED_HOSTS`.

```go
package main

import (
    "crypto/rand"
    "log"
    "os"
    "strings"

    "github.com/gofiber/fiber/v3"
    "github.com/gofiber/fiber/v3/middleware/hostauthorization"
)

func main() {
    raw := os.Getenv("ALLOWED_HOSTS")
    if raw == "" {
        log.Fatal("ALLOWED_HOSTS is not set")
    }

    app := fiber.New(fiber.Config{
        // The load balancer sits in 10.0.0.0/8 and sets X-Forwarded-Host.
        TrustProxy: true,
        TrustProxyConfig: fiber.TrustProxyConfig{
            Proxies: []string{"10.0.0.0/8"},
        },
    })

    app.Use(hostauthorization.New(hostauthorization.Config{
        AllowedHosts: strings.Split(raw, ","),
    }))

    app.Get("/healthz", func(c fiber.Ctx) error {
        return c.SendString("ok")
    })

    app.Post("/password-reset", func(c fiber.Ctx) error {
        email := c.FormValue("email")
        if email == "" {
            return fiber.ErrBadRequest
        }
        // c.BaseURL() is built from c.Host(), so the Host header
        // ends up in the email.
        link := c.BaseURL() + "/reset?token=" + rand.Text()
        log.Printf("mail to %s: %s", email, link)
        return c.SendStatus(fiber.StatusAccepted)
    })

    if err := app.Listen(":3000"); err != nil {
        log.Fatal(err)
    }
}
```

With `ALLOWED_HOSTS=shop.example.com,www.shop.example.com`, a request with
`Host: shop.example.com` gets `202 Accepted` and a link to
`http://shop.example.com/reset?...`. The same request with `Host: evil.example`
gets a `403` and never reaches the handler. A better fix for the email is to
take the base URL from configuration instead of the request. The host check is
still worth having, because the next handler that calls `c.BaseURL()` or
`c.Host()` is probably already written.

Three things change on a public server.

The proxy decides which header is checked. `c.Host()` returns the first value
of `X-Forwarded-Host` only when `TrustProxy` is on and the connection comes from
an address in `TrustProxyConfig`. In the example, a request from `127.0.0.1`
with `Host: shop.example.com` and `X-Forwarded-Host: evil.example` passes and
produces a link to `shop.example.com`, because loopback is not a trusted proxy
there, so the forwarded header is ignored. Get this configuration wrong in the
other direction, with `TrustProxy` on and an overly broad proxy list, and any
client can choose the host that the middleware checks. The
[reverse proxy guide](/guide/reverse-proxy) and our post on
[reverse proxy setup](/blog/fiber-v3-reverse-proxy-config) cover the details.

Health checks send unexpected hosts. A Kubernetes `httpGet` probe connects to
the pod IP and, unless told otherwise, uses that IP as the `Host` header. With
the example running, a probe-like request with `Host: 10.1.2.3:3000` gets a
`403`, and the pod never becomes ready. Rather than exempting `/healthz`, set
the header in the probe so it looks like any other client:

```yaml
readinessProbe:
    httpGet:
        path: /healthz
        port: 3000
        httpHeaders:
            - name: Host
              value: shop.example.com
```

Check the health checks of your load balancer the same way. Whatever `Host`
they send has to be in the list, or set explicitly in their configuration.

Internal callers need names too. Another service in the cluster that calls
`http://shop.default.svc.cluster.local:3000` sends that name as `Host`. Either
add it to the list or let those callers use the public name. For hosts you
cannot list at startup, such as custom domains of tenants, `AllowedHostsFunc`
receives the normalized hostname after the static entries failed to match.
It runs on every request with an unknown host, including all the scanners that
probe your IP with random names, so put a cache in front of any database lookup.

## Pin the Policy Down in a Test

A host allowlist is easy to break without noticing, for example by moving the
middleware below a static handler. A table test with `app.Test` catches that.
`httptest.NewRequest` lets you set `req.Host` directly, which is all a rebinding
request is from the server's point of view:

```go
package main

import (
    "net/http/httptest"
    "os"
    "testing"

    "github.com/gofiber/fiber/v3"
    "github.com/gofiber/fiber/v3/middleware/csrf"
)

func TestHostAndOriginPolicy(t *testing.T) {
    root, err := os.OpenRoot(t.TempDir())
    if err != nil {
        t.Fatal(err)
    }
    defer root.Close()

    app := newApp(root, "test-token", []string{"http://localhost:5173"})

    tests := []struct {
        name       string
        host       string
        origin     string
        token      string
        wantStatus int
    }{
        {"editor on localhost", "localhost:7777", "", "test-token", 200},
        {"IPv4 loopback", "127.0.0.1:7777", "", "test-token", 200},
        {"IPv6 loopback", "[::1]:7777", "", "test-token", 200},
        {"uppercase, trailing dot", "LOCALHOST.:7777", "", "test-token", 200},
        {"rebinding page", "rebind.attacker.example:7777",
            "http://rebind.attacker.example:7777", "", 403},
        {"rebinding page with token", "rebind.attacker.example:7777",
            "http://rebind.attacker.example:7777", "test-token", 403},
        {"lookalike host", "localhost.attacker.example", "", "test-token", 403},
        {"trusted dev UI", "localhost:7777",
            "http://localhost:5173", "test-token", 200},
        {"other page on localhost", "localhost:7777",
            "http://localhost:8080", "test-token", 403},
        {"no token", "localhost:7777", "", "", 401},
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            req := httptest.NewRequest(fiber.MethodGet, "/api/files", nil)
            req.Host = tt.host
            if tt.origin != "" {
                req.Header.Set(fiber.HeaderOrigin, tt.origin)
            }
            if tt.token != "" {
                req.Header.Set(fiber.HeaderAuthorization, "Bearer "+tt.token)
            }

            resp, err := app.Test(req)
            if err != nil {
                t.Fatal(err)
            }
            defer resp.Body.Close()
            if resp.StatusCode != tt.wantStatus {
                t.Errorf("status = %d, want %d", resp.StatusCode, tt.wantStatus)
            }
        })
    }
}

func TestTrustedUIPreflight(t *testing.T) {
    root, err := os.OpenRoot(t.TempDir())
    if err != nil {
        t.Fatal(err)
    }
    defer root.Close()

    app := newApp(root, "test-token", []string{"http://localhost:5173"})

    for origin, want := range map[string]string{
        "http://localhost:5173": "http://localhost:5173",
        "http://localhost:8080": "",
    } {
        req := httptest.NewRequest(fiber.MethodOptions, "/api/files", nil)
        req.Host = "localhost:7777"
        req.Header.Set(fiber.HeaderOrigin, origin)
        req.Header.Set(fiber.HeaderAccessControlRequestMethod, fiber.MethodGet)
        req.Header.Set(fiber.HeaderAccessControlRequestHeaders, "authorization")

        resp, err := app.Test(req)
        if err != nil {
            t.Fatal(err)
        }
        resp.Body.Close()
        got := resp.Header.Get(fiber.HeaderAccessControlAllowOrigin)
        if got != want {
            t.Errorf("%s: Access-Control-Allow-Origin = %q, want %q",
                origin, got, want)
        }
    }
}

// The tokenless CSRF check sees a rebinding page as same-origin.
func TestCrossOriginCheckAllowsRebinding(t *testing.T) {
    app := fiber.New()
    app.Use(csrf.NewCrossOriginProtection())
    app.Post("/api/run", func(c fiber.Ctx) error {
        return c.SendString("ran")
    })

    req := httptest.NewRequest(fiber.MethodPost, "/api/run", nil)
    req.Host = "rebind.attacker.example:7777"
    req.Header.Set(fiber.HeaderSecFetchSite, "same-origin")
    req.Header.Set(fiber.HeaderOrigin, "http://rebind.attacker.example:7777")

    resp, err := app.Test(req)
    if err != nil {
        t.Fatal(err)
    }
    defer resp.Body.Close()
    if resp.StatusCode != fiber.StatusOK {
        t.Fatalf("status = %d, want 200", resp.StatusCode)
    }
}
```

All cases pass against v3.6.1. The "lookalike host" row is there because a
prefix or substring check, which is what a hand-written version often turns
into, would accept `localhost.attacker.example`. The "rebinding page with
token" row shows that the host check holds even if the token has leaked. The
second test is the uncomfortable one. It documents that a `POST` from a rebound
page passes the tokenless CSRF check with a `200`. Keep it, so the next person
who wonders whether the CSRF middleware already covers this finds the answer in
the test suite and not in an incident report.

## When You Can Skip It

Not every Fiber process needs a host allowlist. A service that only receives
traffic through a gateway that already enforces host names, and that never
builds URLs from the request, gains little from a second check. A server that
only speaks to other servers, with mutual TLS or signed requests, is not reached
by browsers at all. And while you develop with tunnels like ngrok or custom
names in `/etc/hosts`, every new name has to be added to the list, which is
annoying enough that people turn the check off and forget to turn it back on. I
would rather read the list from configuration, as in the public example, so that
adding a name is a config change and nobody is tempted to remove the
middleware.

For anything that listens on a developer machine and does something useful, I
would not skip it. That includes MCP servers, editor helpers, local dashboards
and admin UIs of desktop apps. The check is one middleware and a three-entry
list, and it turns the most common way websites reach these tools into a `403`.

## Wrapping Up

The `Host` header is the one place where a rebinding attack shows, and
`hostauthorization.New` checks it before anything else runs. Put it first, list
every name your server really answers to, and on a public server make sure
`TrustProxy` only trusts your own proxies and your health checks send a real
name.

## Internal References

- [Host Authorization Middleware](/middleware/hostauthorization)
- [KeyAuth Middleware](/middleware/keyauth)
- [CSRF Middleware: Cross-Origin Protection Without
  Tokens](/middleware/csrf#cross-origin-protection-without-tokens)
- [Ctx: Host](/api/ctx#host), [Ctx: Origin](/api/ctx#origin) and
  [Ctx: BaseURL](/api/ctx#baseurl)
- [Fiber Config: TrustProxy](/api/fiber#trustproxy)
- [Reverse Proxy Guide](/guide/reverse-proxy)
- [CSRF Without Tokens](/blog/fiber-v3-csrf-without-tokens)
- [Reverse Proxy Setup](/blog/fiber-v3-reverse-proxy-config)
- [Fiber v3.3.0 release (hostauthorization)](https://github.com/gofiber/fiber/releases/tag/v3.3.0)
- [Fiber v3.6.0 release (Ctx.Origin, Go 1.26)](https://github.com/gofiber/fiber/releases/tag/v3.6.0)
- [Fiber v3.6.1 release](https://github.com/gofiber/fiber/releases/tag/v3.6.1)
- [IPv6 hosts compared by spelling in hostauthorization
  (#4797)](https://github.com/gofiber/fiber/issues/4797)
- [MCP Streamable HTTP transport, security
  warning](https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/streamable-http)
- [Local Network Access in Chrome](https://developer.chrome.com/blog/local-network-access)
