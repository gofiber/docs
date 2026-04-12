---
slug: fiber-v3-express-style-handlers
title: "Express-Style Handlers in Go: Fiber's Adapter That Nobody Expected"
authors: [fiber-team]
tags: [fiber, v3, handlers, express, adapter, migration, go]
description: Fiber v3 accepts seventeen different handler signatures including Express-style, net/http, and fasthttp — here is when and why to use each.
---

If you have ever tried to migrate a project from Express.js to Go, you know the friction. It is not the language syntax or the type system. It is that every HTTP handler follows a completely different convention. Express gives you `(req, res, next)`. Go's standard library gives you `(w, r)`. Fiber gives you `(c) error`. The logic is the same, but the shape is different, and reshaping hundreds of handlers is tedious, error-prone work.

Fiber v3 decided to stop pretending this is not a problem. Its handler adapter accepts seventeen different function signatures — from Fiber-native to Express-style callbacks to raw `net/http` and `fasthttp` handlers. You can mix them in the same application without manual wrapping.

This sounds like magic. It is actually a carefully designed type switch in `adapter.go` that does at compile time what you would otherwise do by hand.

<!-- truncate -->

## The Fiber-Native Way

The canonical Fiber handler is a function that takes a context and returns an error:

```go
app.Get("/", func(c fiber.Ctx) error {
    return c.SendString("hello")
})
```

This is case 1 in the adapter. If you are writing a new Fiber application from scratch, this is the only handler shape you need to know. The error return is important — it flows to the central error handler, which means error handling is consistent across your entire application.

Case 2 is the error-less variant:

```go
app.Get("/", func(c fiber.Ctx) {
    c.SendString("hello")
})
```

Fiber runs the function and treats it as if it returned `nil`. This is convenient for handlers that cannot fail, like health checks, but you lose the ability to propagate errors. Use it sparingly.

## Express-Style Handlers: The Migration Bridge

This is where it gets interesting. Fiber v3 accepts handlers with `(req, res)` and `(req, res, next)` signatures that mirror Express.js patterns:

```go
// Like Express: app.get('/', (req, res) => { ... })
app.Get("/", func(req fiber.Req, res fiber.Res) error {
    return res.SendString("hello from Express-style")
})
```

The `fiber.Req` and `fiber.Res` types are views into the same underlying context, split into request and response concerns. This separation is natural for developers coming from Express, where `req` and `res` are distinct objects.

The middleware pattern translates directly too:

```go
// Like Express: app.use((req, res, next) => { ... })
app.Use(func(req fiber.Req, res fiber.Res, next func() error) error {
    start := time.Now()
    err := next()
    log.Printf("%s took %v", req.Path(), time.Since(start))
    return err
})
```

There are ten Express-style variants (cases 3 through 12), covering every combination of:
- With or without `next` callback
- `next` that takes no arguments, `next(error)`, or `next(error) error`
- Handler with or without error return

This means you can translate most Express middleware patterns directly without redesigning the error flow.

## Error Propagation in Next Callbacks

The different `next` signatures handle errors differently, and understanding this matters for middleware:

```go
// next() error — call next, get the downstream error back
app.Use(func(req fiber.Req, res fiber.Res, next func() error) error {
    err := next()
    if err != nil {
        log.Printf("downstream error: %v", err)
    }
    return err
})

// next(error) — pass an error to short-circuit the chain
app.Use(func(req fiber.Req, res fiber.Res, next func(error)) {
    if !isAuthorized(req) {
        next(fiber.ErrUnauthorized)
        return
    }
    next(nil) // continue the chain
})

// next(error) error — both send and receive errors
app.Use(func(req fiber.Req, res fiber.Res, next func(error) error) error {
    err := next(nil)
    if err != nil {
        // Post-processing after downstream error
        return res.Status(500).SendString("something went wrong")
    }
    return nil
})
```

If your handler returns an error *and* the next callback recorded an error, Fiber prioritizes the handler's return value. This prevents confusing situations where a downstream error silently overrides a handler's explicit response.

## Reusing net/http Handlers

Go's standard library ecosystem is enormous. There are handlers for Prometheus metrics, pprof profiling, OAuth callbacks, and hundreds of other things that accept `http.ResponseWriter` and `*http.Request`. Fiber can mount them directly:

```go
import "net/http"

// http.HandlerFunc works directly
app.Get("/metrics", http.HandlerFunc(metricsHandler))

// http.Handler interface works too
app.Get("/debug/*", pprofMux)

// Raw function signature
app.Get("/legacy", func(w http.ResponseWriter, r *http.Request) {
    w.WriteHeader(http.StatusOK)
    w.Write([]byte("from net/http"))
})
```

There is an important caveat: these handlers go through `fasthttpadaptor`, which adds overhead compared to native Fiber handlers. More importantly, they do not receive `fiber.Ctx`, so they cannot call `c.Next()` and always terminate the handler chain. They are meant for leaf handlers, not middleware.

If you need a `net/http` middleware to participate in the Fiber chain, use the [Adaptor middleware](/middleware/adaptor) instead, which provides full bidirectional conversion.

## Mounting fasthttp Handlers

Since Fiber runs on fasthttp internally, fasthttp handlers integrate with zero overhead:

```go
import "github.com/valyala/fasthttp"

app.Get("/fast", func(ctx *fasthttp.RequestCtx) {
    ctx.SetStatusCode(200)
    ctx.SetBody([]byte("zero overhead"))
})

// With error return
app.Get("/fast-err", func(ctx *fasthttp.RequestCtx) error {
    if ctx.QueryArgs().Peek("fail") != nil {
        return errors.New("intentional failure")
    }
    ctx.SetStatusCode(200)
    return nil
})
```

This is useful when you have existing fasthttp code that you are migrating into a Fiber application, or when you need direct access to fasthttp features that Fiber does not expose.

## A Real Migration: Express to Fiber

Suppose you have an Express.js application with middleware like this:

```javascript
// Express.js
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        console.log(`${req.method} ${req.path} - ${Date.now() - start}ms`);
    });
    next();
});

app.get('/users/:id', (req, res) => {
    const user = findUser(req.params.id);
    if (!user) {
        return res.status(404).json({ error: 'not found' });
    }
    res.json(user);
});
```

The Fiber v3 equivalent, using Express-style handlers, looks like this:

```go
// Fiber v3 with Express-style handlers
app.Use(func(req fiber.Req, res fiber.Res, next func() error) error {
    start := time.Now()
    err := next()
    log.Printf("%s %s - %v", req.Method(), req.Path(), time.Since(start))
    return err
})

app.Get("/users/:id", func(req fiber.Req, res fiber.Res) error {
    user := findUser(req.Params("id"))
    if user == nil {
        return res.Status(404).JSON(fiber.Map{"error": "not found"})
    }
    return res.JSON(user)
})
```

The structure is nearly identical. The shapes match. A developer who knows Express can read this code and understand what it does without learning Fiber's conventions first. Over time, as the team gets comfortable, they can gradually migrate to idiomatic `fiber.Ctx` handlers — or not, if the Express style works for them.

## When to Use Which

**Use `func(fiber.Ctx) error`** for new code. It is the most idiomatic, has the best tooling support, and gives you full access to Fiber's context API.

**Use Express-style `(req, res)` handlers** when migrating from Express.js or when your team thinks in terms of separate request and response objects. There is no performance penalty — the adapter resolves at application startup.

**Use `net/http` handlers** to mount existing Go ecosystem tools (Prometheus, pprof, OAuth libraries) without writing adapter code. Accept the overhead trade-off for leaf handlers.

**Use `fasthttp` handlers** for existing fasthttp code or when you need direct access to the underlying request context. This is an escape hatch, not a primary pattern.

**Avoid mixing styles within the same route group.** If your `/api/v1` group uses Fiber-native handlers, do not introduce Express-style handlers in the same group. Consistency within a module matters more than using the "best" handler type everywhere.

## Where to Start

If you are starting a new project, use Fiber-native handlers exclusively. There is no reason to use the adapter when you have no legacy code.

If you are migrating from Express, start by converting your route definitions and middleware using Express-style handlers. Get the application working first, then convert to idiomatic Fiber handlers one module at a time during regular refactoring.

If you are integrating Go ecosystem tools, mount them directly and move on. The adapter handles the complexity.

## Internal References

- [App Route Handlers](/api/app#route-handlers)
- [Adaptor Middleware](/middleware/adaptor)
- [What's New](/whats_new)
