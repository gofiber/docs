# Quickstart {#quickstart}


Fiber requires **Go version `1.26` or higher** to run. If you need to install or upgrade Go, visit the [official Go download page](https://go.dev/dl/).


## Install {#install}


Create a new directory for your project, initialize Go modules, then install Fiber:

```bash
go mod init github.com/your/repo
go get -u github.com/gofiber/fiber/v3
```


## Hello, World! {#hello-world}


Getting started with Fiber is easy. Here's a basic example to create a simple web server that responds with "Hello, World 👋!" on the root path:

```go
package main

import (
    "log"

    "github.com/gofiber/fiber/v3"
)

func main() {
    // Initialize a new Fiber app
    app := fiber.New()

    // Define a route for the GET method on the root path '/'
    app.Get("/", func(c fiber.Ctx) error {
        // Send a string response to the client
        return c.SendString("Hello, World 👋!")
    })

    // Start the server on port 3000
    log.Fatal(app.Listen(":3000"))
}
```

Run this Go program, and visit `http://localhost:3000` in your browser to see the message.


## Core concepts {#core-concepts}


This simple server introduces the core concepts of Fiber:

- **App** — `fiber.New()` creates the application. Optional `fiber.Config` tunes it (see `Config` in the [Go API](https://docs.gofiber.io/sourcey/api.md)).
- **Routes** — `app.Get`, `app.Post`, `app.Put`, `app.Delete`, and friends register handlers for a method + path. Paths support parameters (`:name`), wildcards (`*`), and optional segments (`:gender?`) — see [Routing and context](https://docs.gofiber.io/sourcey/guides/routing-context.md).
- **Handlers** — a handler receives a `fiber.Ctx` and returns an `error`. `c.SendString`, `c.JSON`, `c.SendStatus`, and `c.Render` write the response.
- **Middleware** — `app.Use` registers handlers that run before (or around) routes; call `c.Next()` to continue the chain — see [Middleware](https://docs.gofiber.io/sourcey/guides/middleware.md).
- **Listen** — `app.Listen(":3000")` starts the server. `log.Fatal` surfaces startup errors.


## Next steps {#next-steps}


- [Routing and context](https://docs.gofiber.io/sourcey/guides/routing-context.md) — parameters, wildcards, groups, route naming.
- [Middleware](https://docs.gofiber.io/sourcey/guides/middleware.md) — the `Next` chain, logger, CORS.
- [Static files and error handling](https://docs.gofiber.io/sourcey/guides/static-error-handling.md) — serving files, custom 404s, JSON responses.
