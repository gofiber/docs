---
slug: fiber-v3-adapter-pattern
title: Handler Compatibility in the New Router
authors: [fiber-team]
tags: [fiber, v3, router, handler, compatibility, migration]
description: How Fiber's new router compatibility layer lets you use Fiber, net/http, and fasthttp handlers side by side.
---

One of the most underrated improvements in the v3 router is not a new method or fancy syntax. It is **handler compatibility**.

In plain terms: Fiber can now accept multiple handler styles directly, and the router compatibility layer adapts them for you.

That sounds small until you are migrating a real codebase. Then it becomes one of the most practical features in the release.

<!-- truncate -->

## Why This Feature Is Actually Cool

Most teams do not start from a greenfield codebase. They already have old handlers, middleware contracts, and helper functions in different styles.

Before this compatibility model, migration usually meant either rewriting those handlers early or keeping awkward wrappers everywhere. Both approaches increase risk.

Now you can register handlers in familiar forms and move gradually:

- native Fiber handlers
- `net/http` handlers
- `fasthttp` handlers
- Express-like `Req`/`Res` function styles

That gives you a safer migration path with less throwaway code.

## What Was Harder Before

In v2-era migrations, teams often faced these tradeoffs:

- rewrite handler signatures early, even when business logic had not changed
- maintain local custom adapters that were inconsistent across modules
- delay migration because "the wrapper work is bigger than the value this sprint"

v3's compatibility layer reduces that friction by handling supported shapes directly in the router.

## Start with Native Fiber (Still the Ideal End State)

```go
app.Get("/health", func(c fiber.Ctx) error {
    return c.SendString("ok")
})
```

Native Fiber handlers remain the cleanest long-term choice for hot paths.

## Register `net/http` Handlers Without Manual Glue

```go
mux := http.NewServeMux()
mux.HandleFunc("/legacy", func(w http.ResponseWriter, r *http.Request) {
    w.WriteHeader(http.StatusOK)
    _, _ = w.Write([]byte("legacy route"))
})

app.Get("/legacy", mux.ServeHTTP)
```

This is especially useful when one route still depends on old middleware or legacy packages.

## Use Express-Style `Req`/`Res` Handlers

The new router also supports Express-like callbacks based on `fiber.Req` and `fiber.Res`.

```go
app.Use(func(req fiber.Req, res fiber.Res, next func() error) error {
    req.Headers().Set("X-Trace-Source", "compat-layer")
    return next()
})

app.Get("/hello", func(req fiber.Req, res fiber.Res) {
    _ = res.SendString("hello")
})
```

For teams moving from an Express-like mental model, this lowers the learning cliff significantly.

## `next` Semantics and Error Propagation

A subtle but important detail is how `next` is wired.

When you use optional `next` callbacks, Fiber connects them to `c.Next()` internally. Calling `next(nil)` continues the chain. Passing a non-nil error short-circuits and returns that error.

That means middleware behavior still follows expected control flow even across different handler styles.

## `fasthttp` Compatibility Also Exists

If you already have `fasthttp` handler functions, those can be registered as well.

```go
app.Get("/fast", func(ctx *fasthttp.RequestCtx) {
    ctx.SetStatusCode(fasthttp.StatusOK)
    _, _ = ctx.WriteString("fast path")
})
```

This is useful for specific integrations where `fasthttp` code already exists and is well-tested.

## Practical Migration Pattern

A migration pattern that works well in real teams is:

First, keep legacy routes operational using compatibility handlers. Then migrate high-traffic or frequently changing routes to native Fiber handlers. Finally, remove transitional compatibility paths once ownership and test coverage are stable.

The important point is that compatibility is a **transition tool**, not a permanent architecture target.

## When to Prefer Native Fiber Immediately

Even with compatibility support, choose native Fiber handlers for:

- new endpoints
- performance-sensitive paths
- code that needs deep Fiber-specific context APIs

Use compatibility where it reduces migration risk, not where it increases long-term complexity.

## Internal References

- Official section: [What's New: Handler compatibility](/whats_new#handler-compatibility)
- API docs: [App Router Methods](/api/app)
- Middleware docs: [Adaptor Middleware](/middleware/adaptor)
