# Middleware {#middleware}



## Middleware and Next {#middleware-and-next}


`app.Use` registers middleware: handlers that run before the matched route. Call `c.Next()` to continue the chain; returning without it stops the request there.

```go
package main

import (
    "fmt"
    "log"

    "github.com/gofiber/fiber/v3"
)

func main() {
    app := fiber.New()

    // Middleware that matches any route
    app.Use(func(c fiber.Ctx) error {
        fmt.Println("🥇 First handler")
        return c.Next()
    })

    // Middleware that matches all routes starting with /api
    app.Use("/api", func(c fiber.Ctx) error {
        fmt.Println("🥈 Second handler")
        return c.Next()
    })

    // GET /api/list
    app.Get("/api/list", func(c fiber.Ctx) error {
        fmt.Println("🥉 Last handler")
        return c.SendString("Hello, World 👋!")
    })

    log.Fatal(app.Listen(":3000"))
}
```

A request to `GET /api/list` prints the first, second, then last handler, in order. Middleware registered with a prefix only runs for routes under that prefix.


## Logger {#logger}


The bundled logger middleware logs each request:

```go
package main

import (
    "log"

    "github.com/gofiber/fiber/v3"
    "github.com/gofiber/fiber/v3/middleware/logger"
)

func main() {
    app := fiber.New()

    // Use Logger middleware
    app.Use(logger.New())

    // Define routes
    app.Get("/", func(c fiber.Ctx) error {
        return c.SendString("Hello, Logger!")
    })

    log.Fatal(app.Listen(":3000"))
}
```


## CORS {#cors}


The bundled CORS middleware enables cross-origin requests with default settings:

```go
package main

import (
    "log"

    "github.com/gofiber/fiber/v3"
    "github.com/gofiber/fiber/v3/middleware/cors"
)

func main() {
    app := fiber.New()

    // Use CORS middleware with default settings
    app.Use(cors.New())

    // Define routes
    app.Get("/", func(c fiber.Ctx) error {
        return c.SendString("CORS enabled!")
    })

    log.Fatal(app.Listen(":3000"))
}
```

Check CORS by passing any domain in the `Origin` header:

```bash
curl -H "Origin: http://example.com" --verbose http://localhost:3000
```


## More middleware {#more-middleware}


Fiber ships internal middleware (adaptor, cache, CSRF, session, limiter, recover, SSE, static, WebSocket, and more under `middleware/`) and external middleware in separate repositories. `Recover` catches panics in handlers so one bad request does not take the server down. See the middleware packages in the [Go API](https://docs.gofiber.io/sourcey/api.md) and the project's documentation for the full list.
