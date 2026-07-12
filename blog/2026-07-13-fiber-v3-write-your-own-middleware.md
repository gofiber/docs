---
slug: fiber-v3-write-your-own-middleware
title: "Write Your Own Middleware"
authors: [fiber-team]
tags: [fiber, v3, middleware, patterns, architecture, go]
description: "A middleware is just a handler that calls c.Next() - the full pattern behind Fiber's official middleware, from Locals to the Config convention, in one post."
---

You use `logger`, `cors`, and `limiter` every day. Sooner or later you need something Fiber does not ship: tenant resolution from the hostname, an audit trail, a company-specific auth header. The instinct is to look for a plugin API or an interface to implement.

There is none, and that is the point. A Fiber middleware is an ordinary handler - `func(c fiber.Ctx) error` - that calls `c.Next()` to hand control to the rest of the chain. Everything else, including the polished config pattern the official middleware uses, is convention on top of that one idea.

This post walks through the whole ladder: the minimal middleware, short-circuiting, passing data downstream, and the official `Config` convention, ending with the one caveat that catches almost everyone.

<!-- truncate -->

## The Smallest Middleware That Works

```go
func Timing(c fiber.Ctx) error {
    start := time.Now()

    err := c.Next() // run the rest of the chain

    log.Printf("%s %s took %v", c.Method(), c.Path(), time.Since(start))
    return err
}

app.Use(Timing)
```

Read it as three phases. Everything before `c.Next()` runs on the way **in**, before any downstream handler. `c.Next()` executes the remaining middleware and the route handler. Everything after it runs on the way **out**, when the response is already produced - which is why the duration measurement works.

Returning the error from `c.Next()` matters: it keeps downstream errors flowing up the chain to Fiber's central error handler. Swallow it and you have silently broken error handling for every route behind your middleware.

## Short-Circuiting

Not calling `c.Next()` is how a middleware stops a request. Return an error or write a response, and nothing downstream runs:

```go
app.Use(func(c fiber.Ctx) error {
    if c.Get("X-API-Key") == "" {
        return fiber.ErrUnauthorized // chain stops here
    }
    return c.Next()
})
```

Note that the middleware does not format the 401 response itself. It returns the error and lets the [error handler](/guide/error-handling) turn it into a response. That keeps error formatting in one place instead of scattered across every middleware.

## Passing Data Downstream

Middleware often computes something the handlers need: the authenticated user, the resolved tenant, a request-scoped logger. `c.Locals` is the request-scoped storage for exactly this, and the generic `fiber.Locals[T]` helper gives you a typed read on the other side:

```go
app.Use(func(c fiber.Ctx) error {
    tenant := resolveTenant(c.Hostname())
    c.Locals("tenant", tenant)
    return c.Next()
})

app.Get("/dashboard", func(c fiber.Ctx) error {
    tenant := fiber.Locals[Tenant](c, "tenant")
    return c.Render("dashboard", fiber.Map{"Tenant": tenant.Name})
})
```

If you ship your middleware as a package for others, do not make callers guess the locals key. Follow what the official v3 middleware does and export a lookup helper:

```go
func TenantFromContext(c fiber.Ctx) Tenant {
    return fiber.Locals[Tenant](c, localsKey)
}
```

The key stays private, the API stays typed, and you can change the storage mechanism later without breaking anyone.

## The Official Config Pattern

Every official Fiber middleware follows the same skeleton: a `Config` struct, a variadic `New(config ...Config)` constructor, and defaults applied for anything the caller left zero-valued. Here is the complete pattern for an API-key middleware:

```go
package apikey

import "github.com/gofiber/fiber/v3"

type Config struct {
    // Next skips this middleware when it returns true
    Next func(c fiber.Ctx) bool

    // Header to read the key from
    Header string

    // Validator decides whether a key is accepted
    Validator func(key string) bool
}

var ConfigDefault = Config{
    Header: "X-API-Key",
}

func configDefault(config ...Config) Config {
    if len(config) < 1 {
        return ConfigDefault
    }
    cfg := config[0]
    if cfg.Header == "" {
        cfg.Header = ConfigDefault.Header
    }
    return cfg
}

func New(config ...Config) fiber.Handler {
    cfg := configDefault(config...)

    return func(c fiber.Ctx) error {
        if cfg.Next != nil && cfg.Next(c) {
            return c.Next()
        }

        if cfg.Validator == nil || !cfg.Validator(c.Get(cfg.Header)) {
            return fiber.ErrUnauthorized
        }

        return c.Next()
    }
}
```

Two details are worth copying exactly. The closure over `cfg` means all configuration work happens once at registration, not per request. And the `Next` field - present in virtually every official middleware - gives callers an escape hatch you did not have to anticipate:

```go
app.Use(apikey.New(apikey.Config{
    Validator: keys.Validate,
    Next: func(c fiber.Ctx) bool {
        return c.Path() == "/healthz" // health checks stay open
    },
}))
```

## Scoping and Order

Where you register a middleware decides what it sees:

```go
app.Use(Timing)                    // every request
app.Use("/api", apikey.New(cfg))   // everything under /api

admin := app.Group("/admin", requireRole("admin")) // the whole group
admin.Get("/stats", statsHandler)

// route-level: list middleware before the business handler
app.Get("/users/:id", requireAuth, loadUser, showUser)
```

Execution order is registration order. Put `requestid` before `logger` so log lines carry the ID; put `recover` first so it catches panics from everything behind it. If a middleware seems to have no effect, the first thing to check is whether something earlier in the chain short-circuited before reaching it.

## One Caveat: The Context Is Recycled

Fiber reuses context objects between requests - that is a big part of why it is fast. The values you get from `c.Path()`, `c.Params()`, `c.Body()` and friends are only valid until your handler returns. The classic mistake is a middleware that hands them to a goroutine:

```go
// BROKEN: by the time audit() runs, c may serve another request
app.Use(func(c fiber.Ctx) error {
    go audit(c.Method(), c.Path())
    return c.Next()
})

// CORRECT: copy what you need first
app.Use(func(c fiber.Ctx) error {
    method, path := strings.Clone(c.Method()), strings.Clone(c.Path())
    go audit(method, path)
    return c.Next()
})
```

If this bites you often, `fiber.Config{Immutable: true}` makes all context values safe to retain - at the cost of allocations on every request. Copying the two strings you actually need is almost always the better trade.

## Prove It Works

A middleware is trivially testable with `app.Test` - no server, no ports:

```go
func TestAPIKey(t *testing.T) {
    app := fiber.New()
    app.Use(apikey.New(apikey.Config{Validator: func(k string) bool { return k == "secret" }}))
    app.Get("/", func(c fiber.Ctx) error { return c.SendString("ok") })

    req := httptest.NewRequest("GET", "/", nil)
    resp, _ := app.Test(req)
    if resp.StatusCode != fiber.StatusUnauthorized {
        t.Fatalf("expected 401, got %d", resp.StatusCode)
    }
}
```

For the full testing toolbox - middleware chains, error handlers, route groups - see [Testing Fiber Apps](/blog/fiber-v3-testing-patterns).

## Internal References

- [Routing Guide](/guide/routing)
- [Error Handling Guide](/guide/error-handling)
- [Ctx API](/api/ctx)
- [Testing Patterns](/blog/fiber-v3-testing-patterns)
- [Extractors Guide](/blog/fiber-v3-extractors-guide)
