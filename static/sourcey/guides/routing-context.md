# Routing and context {#routing-and-context}



## Basic routing {#basic-routing}


Routes match a method and a path. Paths support named parameters, wildcards, and optional segments:

```go
package main

import (
    "fmt"
    "log"

    "github.com/gofiber/fiber/v3"
)

func main() {
    app := fiber.New()

    // GET /api/register
    app.Get("/api/*", func(c fiber.Ctx) error {
        msg := fmt.Sprintf("✋ %s", c.Params("*"))
        return c.SendString(msg) // => ✋ register
    })

    // GET /flights/LAX-SFO
    app.Get("/flights/:from-:to", func(c fiber.Ctx) error {
        msg := fmt.Sprintf("💸 From: %s, To: %s", c.Params("from"), c.Params("to"))
        return c.SendString(msg) // => 💸 From: LAX, To: SFO
    })

    // GET /dictionary.txt
    app.Get("/:file.:ext", func(c fiber.Ctx) error {
        msg := fmt.Sprintf("📃 %s.%s", c.Params("file"), c.Params("ext"))
        return c.SendString(msg) // => 📃 dictionary.txt
    })

    // GET /john/75
    app.Get("/:name/:age/:gender?", func(c fiber.Ctx) error {
        msg := fmt.Sprintf("👴 %s is %s years old", c.Params("name"), c.Params("age"))
        return c.SendString(msg) // => 👴 john is 75 years old
    })

    log.Fatal(app.Listen(":3000"))
}
```

`c.Params` reads the captured values by name (`"*"` for the wildcard). A `?` suffix makes a segment optional.


## Route naming {#route-naming}


Routes can be named so handlers can build URLs to them instead of hard-coding paths. See `Route.Name` and the route-naming helpers in the [Go API](https://docs.gofiber.io/sourcey/api.md) (`App.Get` returns the registered `Route`).


## Grouping routes into chains {#grouping-routes-into-chains}


`App.Group` mounts a shared prefix (and shared middleware) for a set of routes:

```go
package main

import (
    "log"

    "github.com/gofiber/fiber/v3"
)

func middleware(c fiber.Ctx) error {
    log.Println("Middleware executed")
    return c.Next()
}

func handler(c fiber.Ctx) error {
    return c.SendString("Handler response")
}

func main() {
    app := fiber.New()

    api := app.Group("/api", middleware)
    api.Get("/hello", handler) // GET /api/hello runs middleware, then handler

    log.Fatal(app.Listen(":3000"))
}
```


## The context {#the-context}


Every handler receives a `fiber.Ctx`. It is the request-scoped API for reading parameters, headers, query values, and the request body, and for writing the response (`SendString`, `JSON`, `SendStatus`, `Render`, `Redirect`). See `Ctx` in the [Go API](https://docs.gofiber.io/sourcey/api.md).

One rule governs everything about `Ctx`: its values are **not** immutable and are reused across requests. Never keep references past the handler — see [Zero allocation](https://docs.gofiber.io/sourcey/guides/zero-allocation.md).
