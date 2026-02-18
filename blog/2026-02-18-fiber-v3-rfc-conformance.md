---
slug: fiber-v3-rfc-conformance
title: RFC Conformance in Practice
authors: [fiber-team]
tags: [fiber, v3, rfc, http, security, go]
description: Why RFC-aligned behavior matters for interoperability, caching, and security.
---

RFC conformance can sound abstract until you run a real production stack.

Your service is not only interacting with one client. It is sitting behind load balancers, reverse proxies, CDNs, API gateways, browsers, mobile clients, and internal automation tools. A cookie that works in Chrome but breaks in Safari, a cache header that your CDN interprets differently than you intended, an authorization header that your proxy strips because it does not match the expected format — these are real incidents that happen because of small protocol deviations.

Fiber v3 addresses this with specific improvements to cookie handling, context behavior, response semantics, and connection management, each tied to concrete RFCs. This post walks through what changed and why it matters operationally.

<!-- truncate -->

## Cookie Security: SameSite=None and Automatic Secure Flag

Modern browsers (Chrome, Firefox, Safari) reject cookies that set `SameSite=None` without the `Secure` flag. This is required by RFC 6265bis and enforced by all major browsers since 2020.

In v2, teams had to remember to set both flags manually. Forgetting `Secure` on a cross-site cookie was a silent failure: the cookie just disappeared in the browser without any server-side error.

Fiber v3 enforces this automatically. When you set `SameSite=None`, Fiber sets `Secure=true` for you:

```go
c.Cookie(&fiber.Cookie{
    Name:     "session",
    Value:    token,
    HTTPOnly: true,
    SameSite: "None",
    // Secure is automatically set to true by Fiber
})
```

This eliminates an entire class of "cookies don't work in production but work locally" bugs, because local development typically uses HTTP while production uses HTTPS.

## CHIPS: Partitioned Cookies for Privacy

Fiber v3 also supports Partitioned cookies for [CHIPS](https://developers.google.com/privacy-sandbox/3pcd/chips) (Cookies Having Independent Partitioned State). This is a newer browser feature that partitions cookies by top-level site, preventing cross-site tracking while still allowing legitimate third-party cookie use.

```go
c.Cookie(&fiber.Cookie{
    Name:        "widget_session",
    Value:       token,
    HTTPOnly:    true,
    Secure:      true,
    SameSite:    "None",
    Partitioned: true,
})
```

If your service embeds widgets, authentication flows, or tracking pixels in third-party sites, partitioned cookies let you maintain session state without being blocked by third-party cookie restrictions. Without CHIPS support, these use cases break progressively as browsers roll out stricter cookie policies.

## Context Implements context.Context

One of the more subtle but impactful changes: `fiber.Ctx` now implements Go's standard `context.Context` interface. This means you can pass the Fiber context directly to functions that expect a `context.Context`, including database drivers, HTTP clients, and tracing libraries.

In v2, you had to use `c.UserContext()` and `c.SetUserContext()` to bridge between Fiber and the standard library:

```go
// v2: manual context bridging
ctx := c.UserContext()
rows, err := db.QueryContext(ctx, "SELECT ...")
```

In v3, the context is the context:

```go
// v3: Fiber context is a context.Context
rows, err := db.QueryContext(c, "SELECT ...")
```

This matters for deadline propagation, cancellation, and request-scoped values. Libraries that accept `context.Context` now get proper request lifecycle integration without boilerplate. If a request is cancelled, the context signals it. If a deadline is set, downstream calls respect it.

You can still set a base context with `c.SetContext()` if you need to inject values or deadlines before passing `c` to downstream code. And `c.Context()` returns a `context.Context` that is safe to use outside the handler scope.

## SendEarlyHints: HTTP 103 for Resource Preloading

Fiber v3 supports [HTTP 103 Early Hints](https://developer.chrome.com/docs/web-platform/early-hints), an informational response that lets the server send `Link` headers before the final response is ready. This allows browsers to start preloading critical assets while the server is still computing the response.

```go
app.Get("/dashboard", func(c fiber.Ctx) error {
    hints := []string{
        "<https://cdn.example.com/app.js>; rel=preload; as=script",
        "<https://cdn.example.com/style.css>; rel=preload; as=style",
    }
    if err := c.SendEarlyHints(hints); err != nil {
        return err
    }

    // expensive computation or DB query here
    data := loadDashboard()
    return c.JSON(data)
})
```

For pages with heavy asset loads, early hints can measurably improve perceived load time because the browser starts fetching CSS and JavaScript while the server is still preparing HTML or API data.

Note: older HTTP/1.1 clients may ignore or mishandle 103 responses. This is most effective with HTTP/2 and HTTP/3 deployments.

## Drop: Silent Connection Termination

The `Drop` method terminates a client connection without sending any HTTP response. No headers, no status code, no body. The client sees a connection reset.

```go
app.Use(func(c fiber.Ctx) error {
    if isBlocked(c.IP()) {
        return c.Drop()
    }
    return c.Next()
})
```

This is useful for DDoS mitigation and endpoint protection where you want to reveal as little information as possible to the attacker. A normal 403 or 429 response confirms the endpoint exists and tells the attacker their request reached the application layer. `Drop` gives them nothing.

This should complement, not replace, infrastructure-level protections like firewalls and rate limiters. But for application-layer blocking, it is a meaningful improvement over returning error responses.

## End: Immediate Connection Flush

The `End` method, modeled after Express.js `res.end()`, immediately flushes the response and closes the connection. Any middleware that runs after the handler cannot modify the response:

```go
app.Get("/webhook", func(c fiber.Ctx) error {
    c.SendString("accepted")
    return c.End() // response is sent, connection closed
    // downstream middleware cannot change the response
})
```

This is useful for webhook endpoints and fire-and-forget patterns where you want to acknowledge the request immediately without risking response modification from error-handling middleware.

## Non-ASCII Filenames in Downloads

Fiber v3 now uses `filename*` encoding per [RFC 6266](https://www.rfc-editor.org/rfc/rfc6266) and [RFC 8187](https://www.rfc-editor.org/rfc/rfc8187) for non-ASCII filenames in `Attachment` and `Download` responses. This means filenames with Unicode characters render correctly in all modern browsers instead of being garbled or replaced with fallback names.

## Where to Apply This After Upgrading

A practical first step after migrating to v3 is a response-policy audit:

1. **Cookies**: Review all `Set-Cookie` calls. Confirm that cross-site cookies use `SameSite=None` (v3 handles `Secure` automatically). Consider `Partitioned` for third-party contexts.
2. **Cache headers**: Verify cache behavior matches your CDN and proxy expectations. The [cache middleware](/middleware/cache) updates in v3 align more closely with standard semantics.
3. **Auth headers**: If you use the extractors package, the `FromAuthHeader` extractor now validates tokens per RFC 9110 and RFC 7235.
4. **Download endpoints**: Test with non-ASCII filenames to confirm proper encoding.

Teams that do this audit once usually prevent an entire class of "works in one client but not another" incidents.

## Internal References

- [What's New](/whats_new)
- [Ctx API](/api/ctx)
- [Cache Middleware](/middleware/cache)
- [Static Middleware](/middleware/static)
