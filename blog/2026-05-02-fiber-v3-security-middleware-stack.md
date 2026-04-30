---
slug: fiber-v3-security-middleware-stack
title: Security Middleware Stack
authors: [fiber-team]
tags: [fiber, v3, security, helmet, cors, csrf, middleware, go]
description: "Helmet + CORS + CSRF: the security stack nobody gets right on the first try  -  and the default settings that leave you exposed."
---

You add `helmet.New()`, `cors.New()`, and `csrf.New()` to your Fiber app. Three lines of code, three middleware, done. Your app is secure.

Except it is not. The default Helmet config does not set HSTS. The default CORS config allows every origin. The default CSRF config uses insecure cookies. And the order you register them in? That matters more than you think.

Most Fiber applications in production run with at least one of these misconfigured. Here is how to set them up so they actually protect your users.

<!-- truncate -->

## Why Order Matters

Middleware in Fiber executes in registration order. For security middleware, this creates dependencies:

1. **Helmet** should come first  -  it sets response headers on every request regardless of outcome.
2. **CORS** should come next  -  it handles preflight OPTIONS requests and may short-circuit before your routes run.
3. **CSRF** should come after CORS  -  it needs the Origin header that CORS validates, and it should not interfere with preflight requests.

```go
app := fiber.New()

// 1. Security headers on every response
app.Use(helmet.New(helmet.Config{
    // Config below
}))

// 2. CORS for cross-origin access
app.Use(cors.New(cors.Config{
    // Config below
}))

// 3. CSRF protection for state-changing requests
app.Use(csrf.New(csrf.Config{
    // Config below
}))
```

If you put CSRF before CORS, preflight OPTIONS requests will fail CSRF validation and your frontend will get 403 errors before the actual request is even sent.

## Helmet: The Defaults That Leave Gaps

Helmet adds security headers to every response. The default configuration is reasonable, but it misses two critical settings for production.

### Missing: HSTS

HTTP Strict Transport Security tells browsers to always use HTTPS. The default `HSTSMaxAge` is `0`, which means the header is not sent at all:

```go
app.Use(helmet.New(helmet.Config{
    HSTSMaxAge:         63072000, // 2 years in seconds
    HSTSPreloadEnabled: true,
    // include subdomains by default (HSTSExcludeSubdomains is false)
}))
```

Without HSTS, a user who types `http://yoursite.com` makes an unencrypted request before the redirect to HTTPS. An attacker on the same network can intercept that request.

### Missing: Content Security Policy

The default `ContentSecurityPolicy` is an empty string  -  no CSP header is sent. CSP is your primary defense against XSS:

```go
app.Use(helmet.New(helmet.Config{
    HSTSMaxAge:            63072000,
    HSTSPreloadEnabled:    true,
    ContentSecurityPolicy: "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'",
}))
```

Start strict and loosen as needed. `default-src 'self'` blocks everything from external sources by default. You add exceptions for what your app actually needs.

### What You Get for Free

The defaults do include useful protections:

- `X-Content-Type-Options: nosniff`  -  prevents MIME sniffing
- `X-Frame-Options: SAMEORIGIN`  -  blocks clickjacking
- `Referrer-Policy: no-referrer`  -  prevents leaking URLs to third parties
- `Cross-Origin-Embedder-Policy: require-corp`  -  isolates your origin
- `X-DNS-Prefetch-Control: off`  -  prevents DNS prefetching leaks

These are solid defaults. Do not change them unless you have a specific reason.

## CORS: The Wildcard Trap

The default CORS configuration allows all origins with `AllowOrigins: []string{"*"}`. For a public API with no authentication, that might be fine. For anything with cookies, sessions, or tokens, it is a security hole.

### For an API with Authentication

```go
app.Use(cors.New(cors.Config{
    AllowOrigins:     []string{"https://app.example.com", "https://admin.example.com"},
    AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
    AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization", "X-Csrf-Token"},
    AllowCredentials: true,
    MaxAge:           3600,
}))
```

Key points:
- **AllowOrigins** lists the exact domains that need access. No wildcards when using credentials.
- **AllowHeaders** must include `X-Csrf-Token` if you are using CSRF with header extraction.
- **AllowCredentials** is `true` because your frontend sends cookies.
- **MaxAge** is `3600` (1 hour) so browsers cache preflight results instead of making an OPTIONS request before every POST.

### The Wildcard + Credentials Panic

If you try to set `AllowOrigins: []string{"*"}` with `AllowCredentials: true`, Fiber will panic at startup. This is intentional  -  the combination would let any website make authenticated requests to your API.

### Subdomain Patterns

For apps with multiple subdomains:

```go
AllowOrigins: []string{"https://*.example.com"},
```

This matches `app.example.com`, `admin.example.com`, and even `deep.nested.example.com`. Use this when you control the parent domain.

## CSRF: The Cookie Nobody Configures

The default CSRF configuration works for development but is insecure in production. The cookie is not marked as secure, not scoped to HTTPS, and uses a generic name.

### Production Configuration for SPAs

```go
app.Use(csrf.New(csrf.Config{
    CookieName:        "__Host-csrf_",
    CookieSecure:      true,
    CookieHTTPOnly:    false, // SPAs need JavaScript access
    CookieSameSite:    "Lax",
    CookieSessionOnly: true,
    Extractor:         extractors.FromHeader("X-Csrf-Token"),
}))
```

Why these settings:

- **`__Host-` prefix**: Browsers enforce that `__Host-` cookies are secure, have no domain, and have a path of `/`. This prevents cookie injection attacks.
- **`CookieSecure: true`**: The cookie is only sent over HTTPS.
- **`CookieHTTPOnly: false`**: Your JavaScript needs to read the cookie to send the token in a header. This is the necessary trade-off for SPAs.
- **`CookieSameSite: "Lax"`**: The cookie is sent with top-level navigations but not with cross-site requests. This is the baseline CSRF protection.
- **Extractor from header**: The CSRF token comes from the `X-Csrf-Token` header, not from the cookie itself. This is the Double Submit Cookie pattern.

### Production Configuration for Server-Rendered Apps

```go
app.Use(csrf.New(csrf.Config{
    CookieName:        "__Host-csrf_",
    CookieSecure:      true,
    CookieHTTPOnly:    true, // No JavaScript access needed
    CookieSameSite:    "Lax",
    CookieSessionOnly: true,
    Extractor:         extractors.FromForm("_csrf"),
    Session:           sessionStore, // More secure with sessions
}))
```

For server-rendered apps, the token goes in a hidden form field, so `CookieHTTPOnly: true` is correct  -  JavaScript should not need the token.

## The Complete Stack

Here is the full security middleware stack for a typical SPA backend:

```go
import (
    "github.com/gofiber/fiber/v3"
    "github.com/gofiber/fiber/v3/extractors"
    "github.com/gofiber/fiber/v3/middleware/cors"
    "github.com/gofiber/fiber/v3/middleware/csrf"
    "github.com/gofiber/fiber/v3/middleware/helmet"
)

app := fiber.New()

// Security headers
app.Use(helmet.New(helmet.Config{
    HSTSMaxAge:            63072000,
    HSTSPreloadEnabled:    true,
    ContentSecurityPolicy: "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'",
}))

// CORS
app.Use(cors.New(cors.Config{
    AllowOrigins:     []string{"https://app.example.com"},
    AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
    AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization", "X-Csrf-Token"},
    AllowCredentials: true,
    MaxAge:           3600,
}))

// CSRF
app.Use(csrf.New(csrf.Config{
    CookieName:        "__Host-csrf_",
    CookieSecure:      true,
    CookieHTTPOnly:    false,
    CookieSameSite:    "Lax",
    CookieSessionOnly: true,
    Extractor:         extractors.FromHeader("X-Csrf-Token"),
}))
```

## The Checklist

Before deploying, verify:

- [ ] Helmet HSTS is set with a max-age of at least 6 months
- [ ] Helmet CSP is set and tested with your frontend
- [ ] CORS AllowOrigins lists specific domains, not `"*"`
- [ ] CORS AllowHeaders includes `X-Csrf-Token`
- [ ] CSRF cookie uses the `__Host-` prefix
- [ ] CSRF CookieSecure is `true`
- [ ] CSRF extraction is from header or form, never from cookie
- [ ] Middleware order is Helmet → CORS → CSRF

Getting one of these wrong is common. Getting all of them right is what makes the difference.

## Internal References

- [Helmet Middleware](/middleware/helmet)
- [CORS Middleware](/middleware/cors)
- [CSRF Middleware](/middleware/csrf)
- [Extractors Guide](/guide/extractors)
