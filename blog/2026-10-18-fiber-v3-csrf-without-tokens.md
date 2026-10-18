---
slug: fiber-v3-csrf-without-tokens
title: "CSRF Without Tokens: Cross-Origin Protection in Fiber v3.6"
authors: [fiber-team]
tags: [fiber, v3, csrf, security, middleware, cors, go]
description: "Fiber v3.6.0 can stop cross-site request forgery by reading two headers the browser already sends. How the check differs from tokens and SameSite cookies, how to exempt the callbacks that must accept cross-site posts, how to roll it out in report-only mode, and when to keep your tokens."
---

Most CSRF bugs I have seen in Fiber apps were not attacks. They were users who
left a form open over lunch, came back, clicked Save and got a `403` because the
token in the page had expired. Or an HTMX page where one fragment was rendered
without the `hx-headers` attribute that carries the token. Or a SPA that read
the token cookie on startup and kept sending a stale value after the session
rotated. The token itself was never the hard part. The plumbing was: every
template, every fetch wrapper and every cached page has to carry a value from
the server back to the server, and a single gap turns into a support ticket.

Browsers can tell a server where a request comes from. Every major browser
engine now sends the `Sec-Fetch-Site` header, and Go 1.25 used it to
add `http.CrossOriginProtection` to the standard library, a CSRF defense without
any token. [Fiber v3.6.0](https://github.com/gofiber/fiber/releases/tag/v3.6.0)
brings the same check to Fiber as
[`csrf.NewCrossOriginProtection`](/middleware/csrf#cross-origin-protection-without-tokens)
([#4596](https://github.com/gofiber/fiber/pull/4596)). It sets no cookie, needs
no storage and puts nothing in your templates.

This post protects a small notes service that has three kinds of clients: its
own pages, a dashboard on a sibling subdomain, and an identity provider that
posts back after login. We will exempt the one route that has to accept
cross-site posts, roll the check out in report-only mode next to the existing
tokens, pin the policy down in a test, and look at the cases where a token
remains the better tool. Everything was built and tested against Fiber v3.6.1.
The middleware needs v3.6.0 or later, which in turn requires Go 1.26.

<!-- truncate -->

## What the Browser Already Tells You

A CSRF attack works because the browser attaches cookies to a request no matter
which site triggered it. A page on `evil.example` submits a hidden form to
`https://notes.example.com/notes`, the browser sends the user's session cookie
along, and your handler sees a perfectly authenticated request. A token defends
against this by requiring a value that the attacker's page cannot read. The
tokenless approach asks a different question: did a page on your own origin
start this request?

Two headers answer it. `Origin` names the origin of the page that started the
request. It has been around for years, but browsers do not send it on every
request, and older ones were inconsistent about it. `Sec-Fetch-Site` is one of
the [Fetch
Metadata](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Fetch_metadata)
headers and states the relationship directly: `same-origin` for your own pages,
`same-site` for a page on another subdomain of the same registrable domain,
`cross-site` for everything else, and `none` when the user typed the URL or
opened a bookmark.

Both are forbidden header names. Script on the attacker's page cannot set or
change them, neither with `fetch` nor with a form. A non-browser client can send
anything it likes, but it does not hold your user's cookies, so there is nothing
for it to forge. The browser has to cooperate, though. According to
[caniuse](https://caniuse.com/mdn-http_headers_sec-fetch-site), Chromium-based
browsers sent `Sec-Fetch-Site` first, Firefox followed with version 90, and
Safari 16.4 closed the gap in March 2023. Browsers also send Fetch Metadata only
to secure origins, which means HTTPS in production and `localhost` while you
develop.

## How It Differs From What You Run Today

The [middleware
documentation](/middleware/csrf#cross-origin-protection-without-tokens) lists
the decision rules in detail. In short: `GET`, `HEAD` and `OPTIONS` always pass.
Other methods pass when `Sec-Fetch-Site` is `same-origin` or `none`, when the
request carries neither header, when an older browser sends only `Origin` and
its host equals the `Host` header, or when `Origin` is listed in
`TrustedOrigins`. Everything else is handed to `ErrorHandler` with
`csrf.ErrCrossOriginRequest`. A request without either header is let through on
purpose. It is either same-origin from a very old browser or not a browser at
all, so your `curl` scripts, mobile apps and webhook senders keep working
without configuration.

More interesting than the rules is how they compare with the two defenses most
Fiber apps already rely on.

### Compared With SameSite Cookies

A session cookie with `SameSite=Lax` is often treated as CSRF protection on its
own, and against a random attacker site it mostly is. But "site" in `SameSite`
means the registrable domain. A form on `blog.example.com` posting to
`notes.example.com` is same-site, so the browser attaches a `Lax` or even
`Strict` cookie. If the blog runs a vulnerable plugin, or a subdomain points at
a cloud bucket somebody else has claimed, that page can make authenticated
requests to your notes service and the cookie attribute will not object.

The cross-origin check closes that gap. It only accepts `same-origin`, so a
request marked `same-site` is denied unless its exact origin is in
`TrustedOrigins`. `csrf.New` denies it as well, because its origin check also
wants an exact match. So when you move from tokens to the header check, sibling
subdomains are just as blocked as before. When you move from "we have SameSite
cookies" to the header check, they become blocked for the first time, which is
the point.

### Compared With csrf.New

The token middleware keeps working as before and is still the right choice in
some places, which we will come to. When you switch, these differences change
behavior:

- `csrf.New` treats `TRACE` and the new `QUERY` method as safe. The tokenless
  check, like `net/http`, exempts only `GET`, `HEAD` and `OPTIONS`. A frontend
  on another origin that calls your [`QUERY`
  endpoints](/blog/fiber-v3-http-query-method) needs to be in `TrustedOrigins`.
- `Origin` and `TrustedOrigins` are compared as sent. The configured entries are
  normalized for case and trailing slash, but default ports are not folded:
  `https://dashboard.example.com:443` in the config does not match the
  `Origin: https://dashboard.example.com` that a browser sends. Write origins
  exactly as a browser serializes them, without the default port.
- `csrf.New` falls back to the `Referer` header on HTTPS when `Origin` is
  missing. The tokenless check never reads `Referer`.
- A request that repeats `Sec-Fetch-Site`, or repeats `Origin` where the
  decision depends on it, is denied. There is no single value to decide on, so
  the check fails closed.
- The default `ErrorHandler` returns `fiber.ErrForbidden`, so the response goes
  through your app's error handler. With Fiber's default handler, a SPA receives
  the plain text `Forbidden`, not your usual JSON error. Set `ErrorHandler` if
  your clients parse error bodies.

## The Notes Service

Here is the complete service. It renders a form on `/`, accepts the form on
`POST /notes`, offers a JSON API on `POST /api/notes` for a dashboard at
`https://dashboard.example.com`, and receives the login result from an identity
provider on `POST /auth/callback`. The in-memory store stands in for your
database.

```go
package main

import (
    "log"
    "strings"
    "sync"

    "github.com/gofiber/fiber/v3"
    "github.com/gofiber/fiber/v3/middleware/cors"
    "github.com/gofiber/fiber/v3/middleware/csrf"
)

// The dashboard is a separate SPA that calls the JSON API with credentials.
const dashboardOrigin = "https://dashboard.example.com"

type Note struct {
    Text string `json:"text" form:"text"`
}

type store struct {
    mu    sync.Mutex
    notes []Note
}

func (s *store) add(n Note) int {
    s.mu.Lock()
    defer s.mu.Unlock()
    s.notes = append(s.notes, n)
    return len(s.notes)
}

func crossOriginDenied(c fiber.Ctx, err error) error {
    log.Printf("csrf: denied %s %s (Sec-Fetch-Site=%q, Origin=%q): %v",
        c.Method(), c.Path(),
        c.Get(fiber.HeaderSecFetchSite), c.Get(fiber.HeaderOrigin), err)
    return c.Status(fiber.StatusForbidden).JSON(fiber.Map{
        "error": "cross-origin request blocked",
    })
}

func newApp() *fiber.App {
    app := fiber.New()
    notes := &store{}

    app.Use(cors.New(cors.Config{
        AllowOrigins:     []string{dashboardOrigin},
        AllowCredentials: true,
    }))
    app.Use(csrf.NewCrossOriginProtection(csrf.CrossOriginConfig{
        TrustedOrigins: []string{dashboardOrigin},
        ErrorHandler:   crossOriginDenied,
        Next: func(c fiber.Ctx) bool {
            if c.Method() != fiber.MethodPost {
                return false
            }
            route := c.Endpoint()
            return route != nil && route.Name == "oidc.callback"
        },
    }))

    app.Get("/", func(c fiber.Ctx) error {
        c.Type("html")
        return c.SendString(`<form method="post" action="/notes">
  <input name="text"> <button>Save</button>
</form>`)
    })

    app.Post("/notes", func(c fiber.Ctx) error {
        var n Note
        if err := c.Bind().Form(&n); err != nil {
            return err
        }
        notes.add(n)
        return c.Redirect().Status(fiber.StatusSeeOther).To("/")
    })

    app.Post("/api/notes", func(c fiber.Ctx) error {
        var n Note
        if err := c.Bind().JSON(&n); err != nil {
            return err
        }
        if strings.TrimSpace(n.Text) == "" {
            return fiber.NewError(fiber.StatusUnprocessableEntity,
                "text is required")
        }
        id := notes.add(n)
        return c.Status(fiber.StatusCreated).JSON(fiber.Map{"id": id})
    })

    // The identity provider posts the login result back from its own origin
    // (OIDC response_mode=form_post), so this one route must accept it.
    app.Post("/auth/callback", func(c fiber.Ctx) error {
        if c.FormValue("state") == "" {
            return fiber.ErrBadRequest
        }
        // Validate state and exchange the code here.
        return c.Redirect().Status(fiber.StatusSeeOther).To("/")
    }).Name("oidc.callback")

    return app
}

func main() {
    app := newApp()
    if err := app.Listen(":3000"); err != nil {
        log.Fatal(err)
    }
}
```

Compared with a token setup, the form on `/` has no hidden `_csrf` field, the
CORS config lists no `X-Csrf-Token` header, and there is no session store or
`__Host-` cookie for the token. If you are migrating, all of that can go once
the new check is enforced.

### Trying It

Start the service and play the different clients with curl. curl sends neither
header unless you ask it to, so a plain call is the server-to-server case:

```bash
curl -i -X POST -H 'Content-Type: application/json' \
  -d '{"text":"from curl"}' http://localhost:3000/api/notes
```

```text
HTTP/1.1 201 Created
...
{"id":1}
```

Now the attack: a hidden form on another site that posts to `/notes`. A browser
sends such a form without a CORS preflight, because
`application/x-www-form-urlencoded`, `multipart/form-data` and `text/plain`
bodies count as simple requests. That is why a strict CORS config never stopped
CSRF. The browser marks the request as `cross-site`:

```bash
curl -i -X POST -H 'Sec-Fetch-Site: cross-site' \
  -H 'Origin: https://evil.example' -d 'text=pwned' \
  http://localhost:3000/notes
```

```text
HTTP/1.1 403 Forbidden
...
{"error":"cross-origin request blocked"}
```

The custom `ErrorHandler` logs both headers the decision was based on:

<!-- markdownlint-disable MD013 -->

```text
2026/10/18 12:11:33 csrf: denied POST /notes (Sec-Fetch-Site="cross-site", Origin="https://evil.example"): csrf: cross-origin request denied
```

<!-- markdownlint-enable MD013 -->

The dashboard sends `Sec-Fetch-Site: same-site` together with its own origin and
gets a `201`, because that origin is trusted. The same request from
`https://blog.example.com`, also `same-site`, gets the `403`. When a legitimate
client is blocked in production, these log lines show which header was missing
or unexpected, which the default bare `403` does not.

## The Exceptions You Will Need

Real applications rarely stay at "only our own pages post to us". The example
contains the three exceptions I run into most often, and they need different
fixes.

### A Frontend on Another Origin

The dashboard lives on its own subdomain and calls the API with credentials. It
needs two entries: `AllowOrigins` in the CORS config, so the browser lets it
send JSON and read the response, and `TrustedOrigins`, so the cross-origin check
lets the write through. The two middleware answer different questions. CORS controls
what a page on another origin may read, the cross-origin check controls what it
may change.

Forgetting the second list is the typical migration bug, and local development
hides it if your frontend dev server proxies API calls. With a proxy setting in
Vite or a similar tool, the browser talks to `localhost:5173` for both the page
and the API, every request is `same-origin`, and nothing is ever denied. In
staging, the dashboard calls the API on its real origin and the first `POST`
gets a `403`. Without such a proxy you would see the same `403` locally, since
`localhost:5173` and `localhost:3000` are different origins. The example keeps
the origin in one constant and feeds it to both lists. With several frontends,
build both lists from the same slice.

Keep the list short. With `csrf.New`, a request from a trusted origin still
needs a valid token. Here the origin match is the entire check, so every origin
in `TrustedOrigins` can make any change your logged-in users can make. Wildcards
such as `https://*.example.com` are accepted, and they also trust the subdomain
that serves user uploads and the forgotten marketing microsite. List exact
origins. Entries must use `http` or `https`; a value like
`capacitor://localhost` makes the constructor panic at startup with
`[CSRF] Invalid origin format in configuration:[redacted]`. The redaction is
deliberate and cannot be turned off for this constructor, so when that panic
shows up, look through your origin list by hand.

### A Callback From Your Identity Provider

OpenID Connect with `response_mode=form_post` ends a login with an
auto-submitted form from the identity provider's origin to your callback.
Payment flows with 3-D Secure do the same. That `POST` is cross-site by design,
and you cannot fix it with `TrustedOrigins` alone. When the form is reached
through a redirect chain across several sites, the browser may send
`Origin: null` instead of the provider's origin. That value cannot be trusted, because
sandboxed iframes on any site send it too. The route has to be exempted.

The `Next` function does that. The documentation example compares `c.Path()`,
which works. The example ties the exemption to the route instead: the callback
is registered with `.Name("oidc.callback")`, and `Next` asks
[`c.Endpoint()`](/api/ctx#endpoint), also added in v3.6.0, which route will
handle the request. If someone moves the callback to another path, the exemption
moves with it, and spellings that reach the same handler are covered too, such
as a trailing slash under the default non-strict routing:

```bash
curl -s -o /dev/null -w '%{http_code}\n' -X POST \
  -H 'Sec-Fetch-Site: cross-site' -H 'Origin: https://id.example.org' \
  -d 'state=abc&code=x' http://localhost:3000/auth/callback/
```

```text
303
```

This has two costs. `c.Endpoint()` scans the remaining routes in the request's
tree bucket, which is a second router lookup. `Next` therefore returns early for
anything that is not a `POST`, but every `POST`, including those to
`/api/notes`, still pays for it. If that matters for your throughput, attach the
middleware to the groups that need it, such as `/api`, instead of the whole app,
and keep the callback outside of them. Route names are also not unique in Fiber.
A second route that someone else names `oidc.callback` is silently exempt as
well, so treat the name like a security setting and give it a distinctive value.

An exempted route has no CSRF protection, so it has to protect itself. For OIDC
that is the `state` parameter, which you compare with the value you stored
before redirecting to the provider. The example only checks that it is present,
which shows where the check goes and is not enough for production.

### Webhooks and Other Servers

Stripe, GitHub and your own backend services send neither `Sec-Fetch-Site` nor
`Origin`, so they pass without an exemption. That is correct, and it also means
the middleware does nothing for those routes. Verify webhook signatures as
before. The cross-origin check only defends against browsers that are tricked
into sending a request.

## Rolling It Out in Report-Only Mode

Switching an existing application from tokens to the header check carries one
real risk: a legitimate client you did not know about, such as a partner who
embeds your form or an old in-house tool. Before enforcing, run the check for a
while in a mode where it only reports. `ErrorHandler` can do that. It receives
the request context, and if it calls `c.Next()` instead of returning an error,
the request continues down the chain:

```go
// reportOnly logs requests the check would block and lets them through.
func reportOnly(c fiber.Ctx, err error) error {
    log.Printf("csrf report-only: would deny %s %s "+
        "(Sec-Fetch-Site=%q, Origin=%q, User-Agent=%q): %v",
        c.Method(), c.Path(),
        c.Get(fiber.HeaderSecFetchSite), c.Get(fiber.HeaderOrigin),
        c.Get(fiber.HeaderUserAgent), err)
    return c.Next()
}
```

Use `ErrorHandler: reportOnly` in the config and keep your existing `csrf.New`
registered after it, so the tokens still protect you while you watch. In a test
with both middleware in that order, a cross-site `POST` produced the report line
and was then rejected by `csrf.New`, exactly as before the change. The
middleware documentation does not describe calling `c.Next()` from
`ErrorHandler` as a feature. It works because the error handler runs inside the
middleware with the same context, which I verified against the v3.6.1 source,
so check it again when you upgrade.

During the overlap, `csrf.New` needs the same exemption for the identity
provider callback, through its own `Next` option, or logins break as soon as
both middleware run. And the report line contains the user agent and origin of
real users. Depending on where your logs go, that may count as personal data, so
set a retention period.

After a week of traffic the log tells you what to do. Entries with an origin you
recognize belong in `TrustedOrigins` or in an exemption. Entries from unknown
origins are either attacks, which the tokens still stop, or clients you need to
talk to. When the log is quiet, switch to the enforcing handler, remove
`csrf.New`, and delete the token plumbing from your templates and fetch
wrappers. If the handler is selected by an environment variable at startup, both
the switch and a rollback are configuration changes rather than deploys.

## Pin the Policy Down in a Test

Header-based checks are easy to break with an innocent refactoring, for example
by renaming a route. A table test against `app.Test` documents the policy and
catches that. Each row sets the headers a browser would send for one kind of
client:

```go
package main

import (
    "net/http/httptest"
    "strings"
    "testing"

    "github.com/gofiber/fiber/v3"
)

func TestCrossOriginProtection(t *testing.T) {
    app := newApp()

    const note = `{"text":"a"}`
    tests := []struct {
        name       string
        path, body string
        fetchSite  string
        origin     string
        wantStatus int
    }{
        {"curl or another server", "/api/notes", note,
            "", "", 201},
        {"own page", "/api/notes", note,
            "same-origin", "https://notes.example.com", 201},
        {"trusted dashboard", "/api/notes", note,
            "same-site", "https://dashboard.example.com", 201},
        {"sibling subdomain", "/api/notes", note,
            "same-site", "https://blog.example.com", 403},
        {"attacker form", "/notes", "text=a",
            "cross-site", "https://evil.example", 403},
        {"cross-site without Origin", "/notes", "text=a",
            "cross-site", "", 403},
        {"typed URL or bookmark", "/notes", "text=a",
            "none", "", 303},
        {"identity provider", "/auth/callback", "state=s&code=c",
            "cross-site", "https://id.example.org", 303},
        {"identity provider, trailing slash", "/auth/callback/",
            "state=s&code=c", "cross-site", "null", 303},
        {"old browser, same host", "/notes", "text=a",
            "", "http://example.com", 303},
        {"old browser, other host", "/notes", "text=a",
            "", "http://evil.example", 403},
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            req := httptest.NewRequest(fiber.MethodPost, tt.path,
                strings.NewReader(tt.body))
            contentType := fiber.MIMEApplicationForm
            if tt.body == note {
                contentType = fiber.MIMEApplicationJSON
            }
            req.Header.Set(fiber.HeaderContentType, contentType)
            if tt.fetchSite != "" {
                req.Header.Set("Sec-Fetch-Site", tt.fetchSite)
            }
            if tt.origin != "" {
                req.Header.Set("Origin", tt.origin)
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
```

`httptest.NewRequest` sets the `Host` header to `example.com`. The two "old
browser" rows rely on that to exercise the fallback for browsers that send
`Origin` but no `Sec-Fetch-Site`. All eleven cases pass against v3.6.1. The
table only covers `POST` because the service has no other unsafe routes; if
yours has `PUT`, `PATCH` or `DELETE` handlers, add a cross-site row for each
method. When you add a frontend or an exempt route later, add its row first and
watch it fail.

## Where Tokens Still Win

For most new applications on HTTPS, the tokenless check is the better default.
It is not a strict upgrade, though, and in these situations I would keep
`csrf.New` or think hard first.

Old browsers come first. A browser without `Sec-Fetch-Site` falls back to the
`Origin` comparison, and a very old one that sends no `Origin` on a form `POST`
is let through unchecked, like any non-browser client. For a consumer site that
group is small. If you serve kiosks, embedded devices or enterprise desktops
that are years behind, the report-only log tells you how many such requests you
actually get.

Plain HTTP is the second case. Browsers send no Fetch Metadata to a non-secure
origin other than `localhost`, so such a deployment depends on the
`Origin`-versus-`Host` comparison for every request. That comparison looks at
hosts, not schemes, so a page on `http://notes.example.com` passes a check on
`https://notes.example.com`. On HTTPS, current browsers send `Sec-Fetch-Site`
and never get there, which leaves only old ones exposed. HSTS closes that
remaining hole, because a browser that has seen the header no longer talks to
your host over plain HTTP. If you set it with the [helmet
middleware](/middleware/helmet), note that helmet sends
`Strict-Transport-Security` only when `HSTSMaxAge` is above zero, which is not
the default, and only when `c.Secure()` is true. Behind a TLS-terminating proxy
that requires `TrustProxy` and a `TrustProxyConfig` that trusts the proxy, so
Fiber believes its `X-Forwarded-Proto` header. Setting the header at the proxy
is often simpler.

Reverse proxies are the third. The `Origin`-versus-`Host` comparison reads the
`Host` header exactly as it arrives and ignores `X-Forwarded-Host`, even with
`TrustProxy` enabled. If your proxy rewrites `Host` to the upstream address, old
browsers are denied on your own forms. Current browsers are unaffected, since
they pass on `Sec-Fetch-Site: same-origin`. Either forward the original `Host`,
which [most proxy setups](/blog/fiber-v3-reverse-proxy-config) do anyway, or add
your public origin to `TrustedOrigins`.

Last, some things no CSRF defense covers. State changes behind `GET` are never
checked, so a `GET /notes/42/delete` link is as dangerous as before. An XSS bug
on your own origin turns the attacker's script into a `same-origin` request, and
an XSS bug on a trusted origin is just as bad. Tokens do not help there either,
since script on the page can read them.

## Wrapping Up

`csrf.NewCrossOriginProtection` replaces a token that has to travel through
every template with two headers the browser already sends and attackers cannot
forge. On HTTPS with current browsers, it removes a whole class of plumbing
bugs, and unlike `SameSite` cookies it also stops sibling subdomains. What
remains is configuration: trusted origins that match your CORS config exactly,
an exemption with its own protection for every route that must accept cross-site
posts, and a report-only phase before you switch off the tokens.

## Internal References

- [CSRF Middleware: Cross-Origin Protection Without
  Tokens](/middleware/csrf#cross-origin-protection-without-tokens)
- [Ctx: Endpoint](/api/ctx#endpoint)
- [CORS Middleware](/middleware/cors)
- [Helmet Middleware](/middleware/helmet)
- [Security Middleware Stack](/blog/fiber-v3-security-middleware-stack)
- [The HTTP QUERY Method in Fiber v3](/blog/fiber-v3-http-query-method)
- [Reverse Proxy Setup](/blog/fiber-v3-reverse-proxy-config)
- [Fiber v3.6.0 release](https://github.com/gofiber/fiber/releases/tag/v3.6.0)
- [Fiber v3.6.1 release](https://github.com/gofiber/fiber/releases/tag/v3.6.1)
- [Add csrf.NewCrossOriginProtection
  (#4596)](https://github.com/gofiber/fiber/pull/4596)
- [Fetch metadata
  (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Fetch_metadata)
- [A modern approach to preventing CSRF in Go (Alex
  Edwards)](https://alexedwards.net/blog/preventing-csrf-in-go)
