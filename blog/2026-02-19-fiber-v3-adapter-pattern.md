---
slug: fiber-v3-adapter-pattern
title: Handler Compatibility in the New Router
authors: [fiber-team]
tags: [fiber, v3, router, handler, compatibility, migration, go]
description: How Fiber's new router compatibility layer lets you use Fiber, net/http, and fasthttp handlers side by side.
---

One of the most underrated improvements in the v3 router is not a new method or fancy syntax. It is **handler compatibility**.

In plain terms: Fiber can now accept multiple handler styles directly, and the router compatibility layer adapts them for you. That sounds small until you are migrating a real codebase with hundreds of handlers, middleware functions, and utility packages in different styles. Then it becomes the feature that decides whether migration happens this quarter or gets postponed again.

<!-- truncate -->

## The Migration Problem This Solves

Most teams do not start from a greenfield codebase. They have `net/http` handlers written years ago, `fasthttp` handlers from performance-critical paths, middleware contracts in various styles, and helper functions that mix handler signatures.

Before this compatibility model, migration usually meant one of two painful paths:

- Rewrite all handler signatures upfront, even when business logic had not changed. This creates a large, risky PR that touches every endpoint.
- Maintain local custom adapters that wrap old handlers. These wrappers are inconsistent across modules, and nobody cleans them up after migration.

Both approaches increase risk and slow down migration. The v3 compatibility layer eliminates this tradeoff by accepting supported handler shapes directly in the router.

## Supported Handler Styles

The router adapter understands 17 handler signatures across four families:

**Native Fiber handlers** — the cleanest long-term choice:

```go
app.Get("/health", func(c fiber.Ctx) error {
    return c.SendString("ok")
})
```

**Standard library `net/http` handlers** — for legacy code and ecosystem packages:

```go
mux := http.NewServeMux()
mux.HandleFunc("/legacy", func(w http.ResponseWriter, r *http.Request) {
    w.WriteHeader(http.StatusOK)
    _, _ = w.Write([]byte("legacy route"))
})

app.Get("/legacy", mux.ServeHTTP)
```

This is especially useful when one route still depends on old middleware or legacy packages that only expose `http.Handler` interfaces.

**`fasthttp` handlers** — for existing performance-critical code:

```go
app.Get("/fast", func(ctx *fasthttp.RequestCtx) {
    ctx.SetStatusCode(fasthttp.StatusOK)
    _, _ = ctx.WriteString("fast path")
})
```

**Express-style `Req`/`Res` handlers** — for teams migrating from Express or who prefer that mental model:

```go
app.Use(func(req fiber.Req, res fiber.Res, next func() error) error {
    req.Headers().Set("X-Trace-Source", "compat-layer")
    return next()
})

app.Get("/hello", func(req fiber.Req, res fiber.Res) {
    _ = res.SendString("hello")
})
```

The Express-style callbacks support both two-argument (handler) and three-argument (middleware with `next`) forms, with or without error returns. The adapter also supports `next` callbacks that accept errors (`func(error)` or `func(error) error`), so middleware control flow works across all styles.

## How `next` Wiring Works

A subtle but important detail is how `next` is connected across handler styles. When you use optional `next` callbacks in Express-style handlers, Fiber wires them to `c.Next()` internally:

- Calling `next(nil)` (or `next()` for the no-argument variant) continues the middleware chain
- Passing a non-nil error to `next(err)` short-circuits and returns that error
- If your handler returns an `error`, the value returned from the injected `next()` bubbles straight back to the caller

This means middleware behavior follows expected control flow even when handlers use different signature styles. A `net/http` middleware and an Express-style middleware in the same chain will propagate errors consistently.

## RouteChain: Express-style Route Declaration

Beyond handler compatibility, the v3 router also adds `RouteChain`, a helper inspired by [Express's `app.route()`](https://expressjs.com/en/api.html#app.route) that lets you declare multiple HTTP methods on the same path without repeating it:

```go
app.RouteChain("/api").RouteChain("/user/:id?").
    Get(func(c fiber.Ctx) error {
        return c.JSON(fiber.Map{"action": "get user", "id": c.Params("id")})
    }).
    Post(func(c fiber.Ctx) error {
        return c.JSON(fiber.Map{"action": "create user"})
    }).
    Put(func(c fiber.Ctx) error {
        return c.JSON(fiber.Map{"action": "update user", "id": c.Params("id")})
    }).
    Delete(func(c fiber.Ctx) error {
        return c.JSON(fiber.Map{"action": "delete user", "id": c.Params("id")})
    })
```

This is particularly clean for resource-style APIs where GET, POST, PUT, and DELETE all operate on the same path.

## Automatic HEAD Routes

Fiber v3 auto-registers a `HEAD` route for every `GET` route. The generated handler chain matches the `GET` chain, so status codes and headers stay in sync while the response body remains empty:

```go
app.Get("/health", func(c fiber.Ctx) error {
    c.Set("X-Service", "api")
    return c.SendString("OK")
})

// HEAD /health automatically returns headers without body
```

You can still register explicit `HEAD` handlers to override the generated ones, and you can disable this entirely with `fiber.Config{DisableHeadAutoRegister: true}` if you prefer to manage HEAD routes yourself.

## Stricter Middleware Prefix Matching

The v3 router aligns middleware registration closer to Express. Prefix matching is now stricter: partial matches must end at a slash boundary or be an exact match. This prevents `/api` middleware from accidentally running on `/apiv1`:

```go
// This middleware only runs for /api and /api/... paths
// It does NOT run for /apiv1 or /api-internal
app.Use("/api", apiMiddleware)
```

You can also register middleware for multiple prefixes at once:

```go
app.Use(["/v1", "/v2"], func(c fiber.Ctx) error {
    return c.Next()
})
```

And sub-apps can be mounted with `app.Use()` instead of the old `app.Mount()`:

```go
api := fiber.New()
api.Get("/users", listUsers)

app.Use("/api", api)
```

## A Practical Migration Pattern

A migration pattern that works well in real teams:

1. **Keep legacy routes operational** using compatibility handlers. Register existing `net/http` or `fasthttp` handlers directly in the Fiber router. No wrappers needed.
2. **Migrate high-traffic routes first** to native Fiber handlers. These benefit most from Fiber-specific APIs like binding, custom context, and hooks.
3. **Remove compatibility paths** once ownership and test coverage are stable.

```mermaid
flowchart LR
    A["Legacy net/http handlers"] --> B["Register via compatibility layer"]
    B --> C["Run alongside native Fiber handlers"]
    C --> D["Migrate route by route"]
    D --> E["All native Fiber handlers"]
```

The important point is that compatibility is a **transition tool**, not a permanent architecture target. Native Fiber handlers are the right long-term choice for hot paths, new endpoints, and code that uses Fiber-specific context APIs.

## When to Prefer Native Fiber Immediately

Even with compatibility support, choose native Fiber handlers for:

- New endpoints (no legacy code to preserve)
- Performance-sensitive paths (native handlers avoid adapter overhead)
- Code that needs binding, custom context, or hooks

Use compatibility where it reduces migration risk, not where it increases long-term complexity.

## Internal References

- Official section: [What's New: Handler compatibility](/whats_new#handler-compatibility)
- API docs: [App Router Methods](/api/app)
- Middleware docs: [Adaptor Middleware](/middleware/adaptor)
