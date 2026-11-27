# Static files and error handling {#static-files-and-error-handling}



## Serving static files {#serving-static-files}


The static middleware serves files from a directory:

```go
package main

import (
    "log"

    "github.com/gofiber/fiber/v3"
    "github.com/gofiber/fiber/v3/middleware/static"
)

func main() {
    app := fiber.New()

    // Serve static files from the "./public" directory
    app.Get("/*", static.New("./public"))
    // => http://localhost:3000/js/script.js
    // => http://localhost:3000/css/style.css

    app.Get("/prefix*", static.New("./public"))
    // => http://localhost:3000/prefix/js/script.js
    // => http://localhost:3000/prefix/css/style.css

    // Serve a single file for any unmatched routes
    app.Get("*", static.New("./public/index.html"))
    // => http://localhost:3000/any/path/shows/index.html

    log.Fatal(app.Listen(":3000"))
}
```


## Custom 404 response {#custom-404-response}


A catch-all middleware registered after all routes handles unmatched paths:

```go
package main

import (
    "log"

    "github.com/gofiber/fiber/v3"
    "github.com/gofiber/fiber/v3/middleware/static"
)

func main() {
    app := fiber.New()

    // Define routes
    app.Get("/", static.New("./public"))

    app.Get("/demo", func(c fiber.Ctx) error {
        return c.SendString("This is a demo page!")
    })

    app.Post("/register", func(c fiber.Ctx) error {
        return c.SendString("Registration successful!")
    })

    // Middleware to handle 404 Not Found
    app.Use(func(c fiber.Ctx) error {
        return c.SendStatus(fiber.StatusNotFound) // => 404 "Not Found"
    })

    log.Fatal(app.Listen(":3000"))
}
```

(The project's README shows this example without the `static` import; the import above is required for the code to compile.)


## JSON response {#json-response}


`c.JSON` serializes a struct or a map:

```go
package main

import (
    "log"

    "github.com/gofiber/fiber/v3"
)

type User struct {
    Name string `json:"name"`
    Age  int    `json:"age"`
}

func main() {
    app := fiber.New()

    // Route that returns a JSON object
    app.Get("/user", func(c fiber.Ctx) error {
        return c.JSON(&User{"John", 20})
        // => {"name":"John", "age":20}
    })

    // Route that returns a JSON map
    app.Get("/json", func(c fiber.Ctx) error {
        return c.JSON(fiber.Map{
            "success": true,
            "message": "Hi John!",
        })
        // => {"success":true, "message":"Hi John!"}
    })

    log.Fatal(app.Listen(":3000"))
}
```

`fiber.Map` is a `map[string]any` shorthand. Status codes are constants such as `fiber.StatusNotFound` (404) and `fiber.StatusOK` (200) — see the constants in the [Go API](https://docs.gofiber.io/sourcey/api.md).
