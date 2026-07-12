---
slug: express-to-fiber-guide
title: "From Express to Fiber: A Translation Guide"
authors: [fiber-team]
tags: [fiber, v3, express, nodejs, migration, go]
description: "A phrasebook for Express developers - the req/res idioms you use daily and their exact Fiber v3 equivalents, plus the three differences that will actually bite you."
---

Fiber's API was inspired by Express, and it shows: routes look the same, parameters use the same `:name` syntax, middleware chains work the way you expect. If you know Express, you already know most of Fiber - you just do not know the spelling yet.

This post is the phrasebook. Express on the left, Fiber v3 on the right, organized by what you do all day: read requests, write responses, chain middleware, handle errors. At the end, the three differences that are not spelling - the ones that cause real bugs when Node instincts meet Go.

<!-- truncate -->

## Hello World

```javascript
// Express
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000);
```

```go
// Fiber v3
package main

import "github.com/gofiber/fiber/v3"

func main() {
    app := fiber.New()

    app.Get("/", func(c fiber.Ctx) error {
        return c.SendString("Hello, World!")
    })

    app.Listen(":3000")
}
```

Two structural differences carry through everything else. Fiber merges `req` and `res` into one context `c`, and handlers return an `error` instead of being void. Both will make sense by the end of this post.

## Routing

Parameter syntax is identical, including optional parameters and wildcards:

```go
app.Get("/users/:id", handler)          // req.params.id  -> c.Params("id")
app.Get("/files/*", handler)            // wildcard       -> c.Params("*")
app.Get("/posts/:slug?", handler)       // optional       -> c.Params("slug")
```

Where Express uses `express.Router()` for modular route groups, Fiber uses `Group`:

```javascript
// Express
const router = express.Router();
router.use(requireAuth);
router.get('/stats', statsHandler);
app.use('/admin', router);
```

```go
// Fiber
admin := app.Group("/admin", requireAuth)
admin.Get("/stats", statsHandler)
```

One thing Fiber adds that Express does not have: [route constraints](/blog/fiber-v3-route-constraints) like `/users/:id<int>`, which reject malformed parameters during matching.

## Reading the Request

| Express | Fiber v3 |
| --- | --- |
| `req.params.id` | `c.Params("id")` |
| `req.query.page` | `c.Query("page")` |
| `req.body` (with `express.json()`) | `c.Bind().Body(&dst)` |
| `req.get('X-Token')` | `c.Get("X-Token")` |
| `req.cookies.session` (with cookie-parser) | `c.Cookies("session")` |
| `req.ip` | `c.IP()` |
| `req.path`, `req.method` | `c.Path()`, `c.Method()` |
| `req.hostname` | `c.Hostname()` |

The body row deserves a closer look, because it is where Fiber removes ceremony rather than renaming it. There is no `express.json()`, no `express.urlencoded()`, no body-parser middleware at all. `Bind` looks at the Content-Type and decodes into your struct:

```go
type CreateUser struct {
    Name  string `json:"name" form:"name"`
    Email string `json:"email" form:"email"`
}

app.Post("/users", func(c fiber.Ctx) error {
    var in CreateUser
    if err := c.Bind().Body(&in); err != nil {
        return err // malformed input -> error handler -> 4xx
    }
    return c.Status(fiber.StatusCreated).JSON(store.Create(in))
})
```

The same request struct handles JSON and form submissions. See [Binding in Practice](/blog/fiber-v3-binding-in-practice) for validation on top.

## Writing the Response

| Express | Fiber v3 |
| --- | --- |
| `res.json(data)` | `c.JSON(data)` |
| `res.status(404).json(...)` | `c.Status(404).JSON(...)` |
| `res.send('hi')` | `c.SendString("hi")` |
| `res.sendStatus(204)` | `c.SendStatus(204)` |
| `res.set('X-Foo', 'bar')` | `c.Set("X-Foo", "bar")` |
| `res.redirect('/login')` | `c.Redirect().To("/login")` |
| `res.sendFile(path)` | `c.SendFile(path)` |
| `res.cookie('k', 'v', opts)` | `c.Cookie(&fiber.Cookie{...})` |

Status chaining reads the same as Express. Prefer the named constants - `fiber.StatusNotFound` instead of `404` - your editor autocompletes them and the intent is explicit.

## Middleware

The shape translates directly. Express calls `next()`, Fiber calls `c.Next()` - and because it returns an error, the "after" phase needs no `res.on('finish')` tricks:

```javascript
// Express
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        console.log(`${req.method} ${req.path} - ${Date.now() - start}ms`);
    });
    next();
});
```

```go
// Fiber
app.Use(func(c fiber.Ctx) error {
    start := time.Now()
    err := c.Next() // everything downstream runs here
    log.Printf("%s %s - %v", c.Method(), c.Path(), time.Since(start))
    return err
})
```

Code after `c.Next()` runs when the response exists. What Express solves with event listeners, Fiber solves with a function call returning.

## Error Handling

This is the biggest conceptual shift, and it is a shift for the better. Express propagates errors by calling `next(err)` and catching them in a special four-argument middleware:

```javascript
// Express
app.get('/users/:id', (req, res, next) => {
    const user = findUser(req.params.id);
    if (!user) return next(new NotFoundError('user not found'));
    res.json(user);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});
```

Fiber handlers return errors, and one central `ErrorHandler` in the app config formats them:

```go
// Fiber
app := fiber.New(fiber.Config{
    ErrorHandler: func(c fiber.Ctx, err error) error {
        code := fiber.StatusInternalServerError
        var e *fiber.Error
        if errors.As(err, &e) {
            code = e.Code
        }
        return c.Status(code).JSON(fiber.Map{"error": err.Error()})
    },
})

app.Get("/users/:id", func(c fiber.Ctx) error {
    user := findUser(c.Params("id"))
    if user == nil {
        return fiber.NewError(fiber.StatusNotFound, "user not found")
    }
    return c.JSON(user)
})
```

`fiber.NewError(code, message)` plays the role of your custom HTTP error classes, and the predefined errors (`fiber.ErrUnauthorized`, `fiber.ErrNotFound`, ...) cover the common cases. For production-grade patterns - hiding internals, structured error responses - see [Error Handling That Doesn't Embarrass You in Production](/blog/fiber-v3-error-handling-production).

## Static Files

```javascript
// Express
app.use(express.static('public'));
```

```go
// Fiber
import "github.com/gofiber/fiber/v3/middleware/static"

app.Use("/", static.New("./public"))
```

Same idea, same mount semantics. The [static middleware](/middleware/static) adds compression, byte ranges, and cache controls when you need them.

## The Incremental Path

If you are porting an existing Express codebase and the handler-by-handler rewrite feels risky, Fiber v3's handler adapter accepts Express-shaped signatures directly:

```go
app.Get("/users/:id", func(req fiber.Req, res fiber.Res) error {
    user := findUser(req.Params("id"))
    if user == nil {
        return res.Status(404).JSON(fiber.Map{"error": "not found"})
    }
    return res.JSON(user)
})
```

Separate `req` and `res`, familiar shape, zero manual wrapping. Port the routes mechanically first, get the application running, then migrate to idiomatic `fiber.Ctx` handlers module by module. The full story is in [Express-Style Handlers in Go](/blog/fiber-v3-express-style-handlers).

## The Differences That Bite

The phrasebook gets you productive. These three differences keep you out of trouble.

**The context is recycled.** Fiber reuses context objects between requests, which is a big part of its speed. Values from `c.Params()`, `c.Query()`, `c.Body()` are only valid until your handler returns. In Node, closures capture `req` and it lives as long as something references it; in Fiber, this is the classic bug:

```go
// BROKEN: the context may already serve another request
app.Get("/report", func(c fiber.Ctx) error {
    go generateReport(c.Query("month")) // captured value becomes garbage
    return c.SendString("started")
})

// CORRECT: copy before crossing the handler boundary
app.Get("/report", func(c fiber.Ctx) error {
    month := strings.Clone(c.Query("month"))
    go generateReport(month)
    return c.SendString("started")
})
```

**Errors are values, panics are crashes.** There is no `throw`/`catch` flow. Expected failures travel as returned errors into the error handler. A panic takes down the request (and without protection, the process) - mount the [recover middleware](/middleware/recover) first in your chain, and treat any panic it catches as a bug to fix, not a code path.

**The concurrency model is inverted.** Node gives you one thread and an event loop: blocking is forbidden, but shared state is safe. Go gives you a goroutine per request: blocking is fine - no `async`/`await`, just call the database - but anything shared between requests (caches, counters, maps) needs a mutex or a channel. Both models are fine; imported instincts are the problem. Do not fear blocking calls, do fear unsynchronized shared state.

## Internal References

- [Ctx API](/api/ctx)
- [Error Handling Guide](/guide/error-handling)
- [Static Middleware](/middleware/static)
- [Express-Style Handlers](/blog/fiber-v3-express-style-handlers)
- [What's New](/whats_new)
