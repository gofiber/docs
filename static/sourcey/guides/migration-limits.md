# Migration and limits {#migration-and-limits}



## Migrate from v2 {#migrate-from-v2}


Coming from Fiber `v2`? The [Fiber CLI](https://github.com/gofiber/cli) can migrate your project to `v3` for you. Install it, then run the `migrate` command in your project's directory:

```bash
go install github.com/gofiber/cli/fiber@latest
fiber migrate --to v3
```

Review the changes and run your tests afterwards. Run `fiber migrate --help` to see all options, and see the migration guide in the project's documentation for what changed in `v3`.


## Limits {#limits}


- Due to Fiber's usage of unsafe, the library may not always be compatible with the latest Go version. Fiber v3 has been tested with Go version 1.26 or higher.
- Fiber automatically adapts common `net/http` handler shapes when you register them on the router, and you can still use the adaptor middleware when you need to bridge entire apps or `net/http` middleware.


## net/http compatibility {#nethttp-compatibility}


Fiber can run side by side with the standard library. The router accepts existing `net/http` handlers directly and even works with native `fasthttp.RequestHandler` callbacks, so you can plug in legacy endpoints without wrapping them manually:

```go
package main

import (
    "log"
    "net/http"

    "github.com/gofiber/fiber/v3"
)

func main() {
    httpHandler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        if _, err := w.Write([]byte("served by net/http")); err != nil {
            panic(err)
        }
    })

    app := fiber.New()
    app.Get("/", httpHandler)

    // Start the server on port 3000
    log.Fatal(app.Listen(":3000"))
}
```

When you need to convert entire applications or reuse `net/http` middleware chains, rely on the adaptor middleware. It converts handlers and middlewares in both directions and even lets you mount a Fiber app in a `net/http` server.


## Express-style handlers {#express-style-handlers}


Fiber also adapts Express-style callbacks that operate on the lightweight `fiber.Req` and `fiber.Res` helper interfaces. This lets you port middleware and route handlers from Express-inspired codebases while keeping Fiber's router features:

```go
// Request/response handlers (2-argument)
app.Get("/", func(req fiber.Req, res fiber.Res) error {
    return res.SendString("Hello from Express-style handlers!")
})

// Middleware with an error-returning next callback (3-argument)
app.Use(func(req fiber.Req, res fiber.Res, next func() error) error {
    if req.IP() == "192.168.1.254" {
        return res.SendStatus(fiber.StatusForbidden)
    }
    return next()
})

// Middleware with a no-arg next callback (3-argument)
app.Use(func(req fiber.Req, res fiber.Res, next func()) {
    if req.Get("X-Skip") == "true" {
        return // stop the chain without calling next
    }
    next()
})
```

Adapted `net/http` handlers continue to operate with the standard-library semantics. They don't get access to `fiber.Ctx` features and incur the overhead of the compatibility layer, so native `fiber.Handler` callbacks still provide the best performance.
