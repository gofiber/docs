---
slug: fiber-v3-proxy-ssrf-policy
title: "Your Gateway Broke on v3.5.0: The Proxy Middleware's New SSRF Policy"
authors: [fiber-team]
tags: [fiber, v3, proxy, ssrf, security, gateway, middleware, go]
description: "Since v3.5.0, Fiber's proxy middleware refuses loopback and private upstreams by default. How to fix an internal gateway without switching the protection off for the one endpoint that needs it, and what else to lock down when you proxy user-supplied URLs."
---

You bump Fiber from v3.4.0 to v3.5.0, the tests pass, the deploy goes out, and
every request to `/api/users` comes back as a `500`. The body of that response
tells anyone who asks exactly what went wrong:

```text
proxy: upstream host resolves to a blocked address: localhost -> 127.0.0.1
```

In a Docker Compose or Kubernetes setup the hostname is `users` or
`users.default.svc` and the IP starts with `10.` or `172.`, but the message is
the same. If the upstream in your `proxy.Balancer` config is an IP literal, you
do not even get that far: the process panics at startup with `proxy: upstream
host resolves to a blocked address: 127.0.0.1`.

This is not a regression. [Fiber
v3.5.0](https://github.com/gofiber/fiber/releases/tag/v3.5.0) hardened the
[proxy middleware](/middleware/proxy)
([#4405](https://github.com/gofiber/fiber/pull/4405)), and its new default
policy rejects upstreams on loopback, private, link-local and similar addresses.
That default is right for code that forwards requests to URLs it did not choose,
and inconvenient for the most common use of the middleware, an API gateway in
front of internal services. This post shows how to give each kind of proxying
the policy it needs, with one gateway that does both, built and tested against
Fiber v3.5.0.

<!-- truncate -->

## What the Policy Protects Against

Server-side request forgery, SSRF for short, means an attacker gets your server
to send a request on their behalf. The interesting targets are the ones only
your server can reach. On AWS, the instance metadata service answers on the
link-local address `169.254.169.254` and can hand out the credentials of the
instance role. Other targets are an admin panel bound to `127.0.0.1`, a
database's HTTP interface on the private network, or an internal service that
trusts every request from inside the VPC.

A proxy is a natural tool for this, since forwarding requests is all it does. As
long as every upstream address comes from your own configuration, an attacker
has nothing to work with. The risk appears when some part of the address comes
from the request: an image proxy that loads `?url=...`, a webhook tester, a link
preview, a per-tenant upstream that a customer can edit in a settings page.

`proxy.DefaultSecurityPolicy()` returns four settings, all on the strict side:

- `AllowedSchemes` is `["http", "https"]`. Upstream URLs with any other scheme,
  such as `file` or `gopher`, are rejected.
- `AllowPrivateIPs` is `false`. Upstreams that resolve to loopback, RFC 1918
  private, link-local, multicast, unspecified or CGNAT addresses are rejected,
  and so are IPv6 unique local addresses and the IPv6 transition ranges that can
  carry an embedded IPv4 address.
- `AllowHTTPSDowngrade` is `false`. `DoRedirects` refuses to follow a redirect
  from `https` to plain `http`.
- `KeepHopByHopHeaders` is `false`. `Connection`, `Transfer-Encoding`, `Upgrade`
  and the other hop-by-hop headers are stripped in both directions.

The private-address check looks at what a hostname resolves to, not at how it is
spelled. `localhost`, a Docker service name and an IPv4-mapped IPv6 literal like
`[::ffff:127.0.0.1]` all end up as the same blocked loopback address. The check
also fails closed: when the DNS lookup fails, the upstream counts as blocked,
and the error is `ErrUpstreamHostBlocked` with the lookup error wrapped inside.

## Where the Check Runs Depends on the Helper

The middleware has two families of entry points, and they check at different
moments. That is why the same misconfiguration shows up as a startup panic in
one service and as a runtime `500` in another.

`proxy.Balancer` checks IP literals when it is constructed and panics on a
blocked one. It does not resolve hostnames at startup. Instead, it installs a
dialer on each upstream client that resolves the name and checks every returned
address whenever it opens a new connection. Checking at dial time is what
defeats DNS rebinding, where a hostname resolves to a public address when it is
validated and to a private one when it is used. It is also why `Servers:
[]string{"http://localhost:8081"}` starts without complaint and fails on the
first request.

The runtime helpers `Do`, `Forward`, `DoRedirects`, `DoTimeout` and `DoDeadline`
check the target on every call, which includes a DNS lookup for hostnames, and
`DoRedirects` checks every redirect target before following it.
`Forward("http://127.0.0.1:8081")` therefore constructs fine and returns a `500`
per request. `DomainForward` and `BalancerForward` do both: they check their
configured upstream at construction, resolving hostnames, and panic if it is
blocked, and they check again on every request. In a Compose file where the
gateway starts before the `users` container,
`BalancerForward([]string{"http://users:8081"})` panics with `users lookup
failed` because the name does not resolve yet.

The difference that decides how you fix things is where the policy comes from. A
`Balancer` takes `Config.SecurityPolicy` if you set it, and otherwise copies the
package-level policy when it is constructed. Every other helper has no
config struct and reads the package-level policy, which you change with
`proxy.WithSecurityPolicy`, on each request. So that policy is a setting for the
whole process.

In the v3.5.0 source, the clients the runtime helpers send through also get the
dial-time check, installed through fasthttp's `ConfigureClient` hook. The
caution box on the docs page still describes these helpers as unguarded at dial
time. If the difference matters for your threat model, read
`middleware/proxy/security.go` of the version you actually run.

## The Tempting Fix

The quickest way to make the `500`s go away is a single line in `main`:

```go
// Don't do this in a process that also proxies user-supplied URLs.
proxy.WithSecurityPolicy(proxy.SecurityPolicy{AllowPrivateIPs: true})
```

Every `Balancer` constructed after that call, and without a policy of its own,
accepts private upstreams again. So does every runtime helper in the process,
including any handler that forwards to a URL from the request. I tried it
against the gateway below: after that call, a request to
`/img?url=http://localhost:8081/api/users/7` went straight through to the
internal users service, and only the content-type check further down kept the
JSON away from the caller. A plain `proxy.Forward` to the same address returned
the user record outright. The [proxy docs](/middleware/proxy#examples) use
`WithSecurityPolicy` this way for local development, which is fine for a
throwaway dev server and wrong for anything that also fetches what a user names.

A `Balancer` only ever talks to the addresses in `Config.Servers`, and nothing
in the request can change them. If those addresses come from your own
configuration, allowing private IPs for that one balancer costs nothing. The
runtime helpers are where request data can reach the upstream address, and that
is where the strict default belongs.

## One Gateway, Two Policies

The gateway below forwards `/api/users/*` to an internal users service. It also
offers `/img`, an image proxy that loads a picture from a URL in the query
string, which is how chat apps and forums show remote images without exposing
their users' IP addresses to every image host. Both run in one process, so the
package-level policy would affect both. The example needs Go 1.25 or newer, the
minimum for Fiber v3.5.0.

```go
package main

import (
    "errors"
    "iter"
    "log"
    "mime"
    "net"
    "net/url"
    "os"
    "strings"
    "time"

    "github.com/gofiber/fiber/v3"
    "github.com/gofiber/fiber/v3/middleware/proxy"
    "github.com/valyala/fasthttp"
)

// Response types the image proxy passes through. SVG is missing on purpose:
// it can carry scripts.
var imageTypes = map[string]bool{
    "image/avif": true,
    "image/gif":  true,
    "image/jpeg": true,
    "image/png":  true,
    "image/webp": true,
}

// internalPolicy relaxes the SSRF check for one balancer whose upstreams come
// from our own configuration. Everything else keeps the package default.
func internalPolicy() *proxy.SecurityPolicy {
    p := proxy.DefaultSecurityPolicy()
    p.AllowPrivateIPs = true
    return &p
}

// newImageClient returns the dedicated client for fetching user-supplied URLs.
// Use it only here, so that no connection pool predates the SSRF guard.
func newImageClient() *fasthttp.Client {
    return &fasthttp.Client{
        NoDefaultUserAgentHeader: true,
        DisablePathNormalizing:   true,
        ReadTimeout:              5 * time.Second,
        WriteTimeout:             5 * time.Second,
        MaxResponseBodySize:      5 << 20, // 5 MiB
        MaxConnsPerHost:          64,
    }
}

func newGateway(usersUpstream string, imageClient *fasthttp.Client) *fiber.App {
    app := fiber.New(fiber.Config{ErrorHandler: errorHandler})

    users := proxy.Balancer(proxy.Config{
        Servers:        []string{usersUpstream},
        SecurityPolicy: internalPolicy(),
        Timeout:        2 * time.Second,
        // Balancer does not set X-Real-IP like Forward does. Overwrite it so
        // clients cannot spoof the address the users service sees.
        ModifyRequest: func(c fiber.Ctx) error {
            ip := c.IP()
            c.Request().Header.Del("X-Real-IP")
            c.Request().Header.Add("X-Real-IP", ip)
            return nil
        },
    })
    app.Use("/api/users", func(c fiber.Ctx) error {
        err := users(c)
        switch {
        case err == nil:
            return nil
        case errors.Is(err, fasthttp.ErrTimeout),
            errors.Is(err, fasthttp.ErrDialTimeout):
            log.Printf("users upstream: %v", err)
            return fiber.ErrGatewayTimeout
        default:
            log.Printf("users upstream: %v", err)
            return fiber.ErrBadGateway
        }
    })

    app.Get("/img", imageProxy(imageClient))

    return app
}

func imageProxy(client *fasthttp.Client) fiber.Handler {
    return func(c fiber.Ctx) error {
        target := c.Query("url")
        u, err := url.Parse(target)
        if err != nil || (u.Scheme != "http" && u.Scheme != "https") {
            return fiber.NewError(fiber.StatusBadRequest,
                "url must be an absolute http(s) URL")
        }
        // An image URL has no business carrying credentials, and refusing
        // them here keeps them out of the logs below.
        if u.User != nil {
            return fiber.NewError(fiber.StatusBadRequest,
                "url must not contain credentials")
        }

        // The incoming request is reused as the outgoing one, so drop
        // everything the third party has no business seeing: cookies,
        // Authorization, forwarding headers.
        keepOnly(&c.Request().Header, fiber.HeaderAccept,
            fiber.HeaderIfNoneMatch, fiber.HeaderIfModifiedSince)

        err = proxy.DoRedirects(c, target, 3, client)
        if err != nil {
            c.Response().Reset()
            var dnsErr *net.DNSError
            switch {
            case errors.As(err, &dnsErr):
                log.Printf("img: resolve %q: %v", target, err)
                if dnsErr.IsNotFound {
                    return fiber.NewError(fiber.StatusBadRequest,
                        "url host does not resolve")
                }
                return fiber.ErrBadGateway // resolver timeout or failure
            case isPolicyError(err):
                log.Printf("img: refused %q: %v", target, err)
                return fiber.NewError(fiber.StatusBadRequest, "url not allowed")
            }
            log.Printf("img: fetch %q: %v", target, err)
            return fiber.ErrBadGateway
        }

        res := c.Response()
        keepOnly(&res.Header,
            fiber.HeaderContentType, fiber.HeaderContentLength,
            fiber.HeaderContentEncoding, fiber.HeaderETag,
            fiber.HeaderLastModified, fiber.HeaderCacheControl,
            fiber.HeaderVary)

        switch res.StatusCode() {
        case fiber.StatusOK:
        case fiber.StatusNotModified:
            return nil
        default:
            log.Printf("img: %q answered %d", target, res.StatusCode())
            res.Reset()
            return fiber.ErrBadGateway
        }

        contentType := string(res.Header.ContentType())
        mediaType, _, err := mime.ParseMediaType(contentType)
        if err != nil || !imageTypes[mediaType] {
            log.Printf("img: %q is %q, not an image", target, contentType)
            res.Reset()
            return fiber.NewError(fiber.StatusBadGateway,
                "upstream did not return a supported image")
        }

        c.Set(fiber.HeaderXContentTypeOptions, "nosniff")
        c.Set(fiber.HeaderContentSecurityPolicy, "default-src 'none'; sandbox")
        return nil
    }
}

func isPolicyError(err error) bool {
    return errors.Is(err, proxy.ErrUpstreamHostBlocked) ||
        errors.Is(err, proxy.ErrUpstreamSchemeNotAllowed) ||
        errors.Is(err, proxy.ErrUpstreamHostInvalid) ||
        errors.Is(err, proxy.ErrRedirectDowngrade)
}

// keepOnly deletes every header except the allowed ones. It collects the
// names first because deleting while iterating the header store is not safe.
func keepOnly(h interface {
    All() iter.Seq2[[]byte, []byte]
    Del(key string)
}, allowed ...string,
) {
    var drop []string
    for k := range h.All() {
        name := string(k)
        keep := false
        for _, a := range allowed {
            if strings.EqualFold(name, a) {
                keep = true
                break
            }
        }
        if !keep {
            drop = append(drop, name)
        }
    }
    for _, name := range drop {
        h.Del(name)
    }
}

func errorHandler(c fiber.Ctx, err error) error {
    var fe *fiber.Error
    if errors.As(err, &fe) {
        return c.Status(fe.Code).JSON(fiber.Map{"error": fe.Message})
    }
    log.Printf("%s %s: %v", c.Method(), c.Path(), err)
    return c.Status(fiber.StatusInternalServerError).
        JSON(fiber.Map{"error": "internal error"})
}

func main() {
    usersUpstream := os.Getenv("USERS_UPSTREAM")
    if usersUpstream == "" {
        usersUpstream = "http://127.0.0.1:8081"
    }

    app := newGateway(usersUpstream, newImageClient())
    log.Fatal(app.Listen(":3000"))
}
```

`internalPolicy` starts from `proxy.DefaultSecurityPolicy()` and changes only
`AllowPrivateIPs`, so the scheme allowlist and the hop-by-hop stripping stay on
for the internal route. Building on the default instead of writing a
`SecurityPolicy` literal also means that a field added in a later release starts
with its safe value. Nothing touches the package-level policy, so `/img` keeps
the strict settings.

If your internal routes currently use `Forward`, `BalancerForward` or
`DomainForward`, moving them to `Balancer` is the only way to give them their
own policy, and the move changes three things. `Balancer` does not overwrite
`X-Real-IP` the way those helpers do, which is why the example sets it in
`ModifyRequest`; without that, a client could tell the users service any address
it likes. `Balancer` uses only the host and port of each entry in `Servers` and
ignores a path, so `http://users:8081/v1` no longer adds the `/v1` prefix. And
its `Timeout` defaults to one second, which may be shorter than what you had.

The wrapper around the balancer is the other half of the upgrade fix. Fiber's
default error handler writes `err.Error()` into the response, and that is how
the `500` at the top of this post published the gateway's upstream hostname and
IP address. The wrapper logs the error and answers with `502 Bad Gateway`, or
with `504 Gateway Timeout` when fasthttp reports a response or connect timeout.
With the users service stalled for longer than the two-second `Timeout`, a
request to `/api/users/slow` returns after two seconds with `{"error":"Gateway
Timeout"}` and nothing about the network behind the gateway.

Start a users service on `127.0.0.1:8081`, run the gateway, and the internal
route works as it did on v3.4.0:

```bash
curl -i http://localhost:3000/api/users/42
```

```text
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 24

{"id":"42","name":"Ada"}
```

The image proxy, still on the default policy, refuses everything that points
inward:

```bash
curl -i "http://localhost:3000/img?url=http://169.254.169.254/latest/meta-data/"
```

```text
HTTP/1.1 400 Bad Request
Content-Type: application/json; charset=utf-8
Content-Length: 27

{"error":"url not allowed"}
```

`http://localhost:8081/api/users/1` and `http://[::ffff:127.0.0.1]:8081/` get
the same answer. `http://0x7f000001:8081/`, a hex spelling of `127.0.0.1` that
browsers accept, gets `{"error":"url host does not resolve"}`. The server log
has the details:

<!-- markdownlint-disable MD013 -->

```text
img: refused "http://169.254.169.254/latest/meta-data/": proxy: upstream host resolves to a blocked address: 169.254.169.254
img: refused "http://localhost:8081/api/users/1": proxy: upstream host resolves to a blocked address: localhost -> 127.0.0.1
img: refused "http://[::ffff:127.0.0.1]:8081/": proxy: upstream host resolves to a blocked address: 127.0.0.1
img: resolve "http://0x7f000001:8081/": proxy: upstream host resolves to a blocked address: 0x7f000001 lookup failed: lookup 0x7f000001 on 8.8.8.8:53: no such host
```

<!-- markdownlint-enable MD013 -->

The hex address is blocked because Go's resolver on Linux finds no host by that
name, not because it is recognized as loopback. The system resolver on other
platforms may accept it and return `127.0.0.1`, which the check then rejects as
loopback. Either way, the request does not go out.

Because a failed lookup is reported as `ErrUpstreamHostBlocked`, the handler
first asks `errors.As` for a `*net.DNSError`. A name that does not exist,
`IsNotFound` in Go's terms, is the user's mistake and gets a `400` with a
message they can act on. A resolver timeout or any other DNS failure is the
gateway's problem and becomes a `502`, so clients know a retry may work. The
four policy errors become `400`, since they mean "we will not fetch that".
Everything else, from connection refused to an oversized body, is the remote
side's fault and becomes a `502`. The handler also refuses URLs with credentials
in them, such as `https://alice:secret@example.com/a.png`, before it does
anything else. No image URL needs them, and every log line in the handler prints
the target, so accepting them would write passwords into your logs.

## What the Policy Does Not Cover

The SSRF check decides which hosts the proxy may talk to. It has no say over
what the proxy sends there or passes back, and with user-supplied URLs both
matter.

### Request and Response Headers

`proxy.Do` and its siblings do not build a new request. They take the incoming
request, point it at the upstream URL, strip the hop-by-hop headers and send it.
Everything else the browser sent to your domain goes along: the session cookie,
an `Authorization` header, whatever your frontend adds. `DoRedirects` removes
`Cookie` and `Authorization` when a redirect crosses to another host, but the
first request carries all of it. For an internal service that is usually what
you want. For `http://203.0.113.10/cat.png`, it hands your user's session to
whoever runs that host.

The response has the mirror problem. The remote host's headers reach your client
as if your domain had sent them, so a `Set-Cookie` from the image host lands in
the cookie jar for your domain.

`keepOnly` handles both directions with an allowlist: `Accept` and the two
conditional headers go out, and seven headers come back. `Vary` is one of them,
because the request forwards `Accept`: an upstream that picks the image format
from `Accept` says so in `Vary`, and without it a cache in front of the gateway
could hand an AVIF to a client that asked for PNG. I prefer an allowlist over
deleting `Cookie` and `Authorization` by name, because the next custom header
your frontend adds should not leak just because nobody updated a list.
`keepOnly` deletes each name exactly as the header store holds it, so it also
works with `DisableHeaderNormalizing`. Dropping `User-Agent` has a cost: some
image hosts answer requests without one with a `403`. If yours do, send a fixed
`User-Agent` of your own instead of forwarding the browser's.

### Untrusted Content on Your Origin

Whatever `/img` returns is served from your domain. If a user can make it return
`text/html`, they get a page on your origin. The handler therefore checks the
media type and passes only the raster formats in `imageTypes`. The `nosniff`
header stops browsers from guessing a different type, and the `sandbox` content
security policy limits the damage if something slips through anyway.

Error paths need care too. Once a fetch got as far as a response, for example on
a redirect hop or a body that was too large, `c.Response()` already holds the
remote status, headers and body. Returning an error does not clear them: the
error handler sets a new status and body, and the remote headers stay. That is
why every error path in `imageProxy` calls `Reset()` on the response first.

### Size and Time

A user who can name a URL can name a 10 GB file or a server that sends one byte
per minute. `MaxResponseBodySize` caps the body at 5 MiB, which still means up
to 5 MiB in memory per request, and `ReadTimeout` bounds each response including
its body. `DoRedirects` gets a limit of three hops, and each hop goes through
the same check, which stops the old trick of a public URL that redirects to
`169.254.169.254`.

There is no overall deadline, though. `DoRedirects` has no timeout variant, the
policy allows up to five seconds for each DNS lookup, and every hop gets its own
read timeout, so one request can take well over the five seconds the client
config suggests. In production, I would put a concurrency limit and a [rate
limiter](/middleware/limiter) in front of `/img`, and cache the results, so that
slow or abusive URLs cannot tie up the gateway.

### Clients and Dialers

The image proxy gets its own `*fasthttp.Client`. A client passed to a helper as
the optional argument receives the dial-time check on first use. fasthttp keeps
one connection pool per host inside each client, and a pool created before the
check was installed keeps its unchecked dialer. A client created for this one
handler has no such pools, so every connection it makes is checked. The
alternative is `proxy.WithClient`, which replaces the client for every helper in
the process.

Two more limits follow from how the dial check works. It validates the address
and then calls your client's `Dial`, if you set one, with that address. A custom
`Dial` that connects somewhere else, such as through an egress proxy, makes the
check meaningless. The validation itself covers IPv6: every resolved address,
IPv4 or IPv6, has to pass. The dialer is a separate step, and unless
`DialDualStack` is set, it only tries the IPv4 addresses that passed and skips
the IPv6 ones, so an IPv6-only host is unreachable. Both behaviors come straight
from `security.go` in v3.5.0.

## Prove It With a Test

Protections like this one tend to disappear quietly in a refactor: someone calls
`WithSecurityPolicy` to fix a local setup, or swaps the image client for a
shared one. A test catches that. The obstacle is that the test needs a "public"
upstream, and everything a test can start listens on loopback, which the policy
blocks.

The custom `Dial` behavior from the previous section is the way out. The test
points the image proxy at `203.0.113.10`, an address reserved for documentation
that the policy treats as public, and gives the client a `Dial` that connects to
the local test server instead. Save it as `main_test.go` next to `main.go` and
run `go test -race`:

```go
package main

import (
    "io"
    "net"
    "net/http/httptest"
    "sync/atomic"
    "testing"

    "github.com/gofiber/fiber/v3"
    "github.com/valyala/fasthttp"
)

// startUpstream runs app on a loopback listener and returns its address.
func startUpstream(t *testing.T, app *fiber.App) string {
    t.Helper()
    ln, err := net.Listen("tcp", "127.0.0.1:0")
    if err != nil {
        t.Fatal(err)
    }
    go func() {
        _ = app.Listener(ln, fiber.ListenConfig{DisableStartupMessage: true})
    }()
    t.Cleanup(func() { _ = app.Shutdown() })
    return ln.Addr().String()
}

// pretendPublic returns an image client whose connections all land on addr.
// The SSRF guard still validates the IP from the URL (203.0.113.10 is a
// public documentation address) before it calls this Dial.
func pretendPublic(addr string) *fasthttp.Client {
    c := newImageClient()
    c.Dial = func(string) (net.Conn, error) { return net.Dial("tcp", addr) }
    return c
}

func TestGateway(t *testing.T) {
    var seenCookie atomic.Value // written by the remote server's goroutine
    seenCookie.Store("")
    remote := fiber.New()
    remote.Get("/cat.png", func(c fiber.Ctx) error {
        seenCookie.Store(c.Get(fiber.HeaderCookie))
        c.Cookie(&fiber.Cookie{Name: "tracker", Value: "1"})
        c.Set(fiber.HeaderContentType, "image/png")
        return c.Send([]byte("\x89PNG fake"))
    })
    remote.Get("/page", func(c fiber.Ctx) error {
        return c.Type("html").SendString("<script>alert(1)</script>")
    })
    remote.Get("/bounce", func(c fiber.Ctx) error {
        return c.Redirect().To("http://169.254.169.254/latest/meta-data/")
    })

    users := fiber.New()
    users.Get("/api/users/:id", func(c fiber.Ctx) error {
        if ip := c.Get("X-Real-IP"); ip == "198.51.100.7" {
            t.Errorf("users service saw spoofed X-Real-IP %q", ip)
        }
        return c.JSON(fiber.Map{"id": c.Params("id")})
    })

    usersAddr := startUpstream(t, users)
    remoteAddr := startUpstream(t, remote)
    app := newGateway("http://"+usersAddr, pretendPublic(remoteAddr))

    tests := []struct {
        path string
        want int
    }{
        {"/api/users/42", fiber.StatusOK},
        {"/img?url=http://203.0.113.10/cat.png", fiber.StatusOK},
        {"/img?url=http://203.0.113.10/page", fiber.StatusBadGateway},
        {"/img?url=http://203.0.113.10/bounce", fiber.StatusBadRequest},
        {"/img?url=http://169.254.169.254/latest/", fiber.StatusBadRequest},
        {"/img?url=http://localhost:8081/", fiber.StatusBadRequest},
        {"/img?url=http://u:pw@203.0.113.10/cat.png", fiber.StatusBadRequest},
    }
    for _, tt := range tests {
        req := httptest.NewRequest(fiber.MethodGet, tt.path, nil)
        req.Header.Set(fiber.HeaderCookie, "session=secret")
        req.Header.Set("X-Real-IP", "198.51.100.7")
        resp, err := app.Test(req)
        if err != nil {
            t.Fatalf("%s: %v", tt.path, err)
        }
        body, _ := io.ReadAll(resp.Body)
        if resp.StatusCode != tt.want {
            t.Errorf("%s: status %d, want %d (%s)",
                tt.path, resp.StatusCode, tt.want, body)
        }
        leaked := resp.Header.Get(fiber.HeaderSetCookie)
        if tt.want == fiber.StatusOK && leaked != "" {
            t.Errorf("%s: leaked Set-Cookie %q", tt.path, leaked)
        }
    }
    if got := seenCookie.Load().(string); got != "" {
        t.Errorf("remote host received Cookie %q", got)
    }
}
```

The test checks that the internal route reaches a loopback upstream and
overwrites a spoofed `X-Real-IP`, that a real image passes and an HTML page does
not, that a public URL redirecting to the metadata address is refused, and that
cookies flow in neither direction. To see whether it catches regressions, I
commented out the two `keepOnly` calls, and it failed on the cookie checks.
Without the `X-Real-IP` lines in `ModifyRequest`, it failed on the spoofed
address.

## Trade-offs

The strict policy costs DNS lookups. With it, every call to `Do`, `Forward`,
`DomainForward` or `BalancerForward` resolves the upstream hostname before the
request goes out, and every new connection resolves it again in the dialer. Go
does not cache DNS answers in the process, so this load goes to your resolver.
For an image proxy that is small next to the remote fetch. With
`AllowPrivateIPs` set, the validation skips the lookup.

If a single `Forward` to an internal service is all your process does with the
proxy middleware, setting the package-level policy is acceptable, as long as
everyone who later adds a user-facing helper knows it is there. If you pass your
own `*fasthttp.LBClient` as `Config.Client`, the balancer installs no check at
all, because it does not build the connections. And if you proxy user-supplied
URLs at any scale, an egress firewall that blocks the metadata address and your
private ranges still matters, as does IMDSv2 on AWS. A check in application code
protects only the code paths that go through it.

## Wrapping Up

For a gateway in front of internal services, set `Config.SecurityPolicy` on each
`Balancer`, built from `proxy.DefaultSecurityPolicy()` with only
`AllowPrivateIPs` changed, and leave the package-level policy strict. Map
upstream errors to `502` and `504` yourself so the error body does not describe
your network. When the URL comes from a user, the policy is only the first step:
decide which headers leave and which come back, which content types you serve
from your origin, and how large and slow a response may be.

## Internal References

- [Proxy Middleware: Security](/middleware/proxy#security)
- [Proxy Middleware: Default
  SecurityPolicy](/middleware/proxy#default-securitypolicy)
- [Limiter Middleware](/middleware/limiter)
- [Error Handling](/guide/error-handling)
- [Reverse Proxy Setup (Fiber behind Nginx or
  Traefik)](/blog/fiber-v3-reverse-proxy-config)
- [Security Middleware Stack](/blog/fiber-v3-security-middleware-stack)
- [Fiber v3.5.0 release](https://github.com/gofiber/fiber/releases/tag/v3.5.0)
- [Harden proxy middleware (#4405)](https://github.com/gofiber/fiber/pull/4405)
