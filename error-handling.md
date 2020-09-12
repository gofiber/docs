---
description: >-
  Fiber supports centralized error handling by passing an error argument into
  the Next method which allows you to log errors to external services or send a
  customized HTTP response to the client.
---

# 🐛 Error Handling

## Catching Errors

It’s essential to ensure that Fiber catches all errors that occur while running route handlers and middleware. You must pass them to the `ctx.Next()` function, where Fiber will catch and process them.

{% tabs %}
{% tab title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
    err := c.SendFile("file-does-not-exist")

    if err != nil {
        return err // Pass error to Fiber
    }
})
```
{% endtab %}
{% endtabs %}

Fiber does not handle [panics](https://blog.golang.org/defer-panic-and-recover) by default. To recover from a panic thrown by any handler in the stack, you need to include the `Recover` middleware below:

{% code title="Example" %}
```go
package main

import (
    "github.com/gofiber/fiber"
    "github.com/gofiber/fiber/recover"
)

func main() {
    app := fiber.New()

    app.Use(recover.New())

    app.Get("/", func(c *fiber.Ctx) error {
        panic("This panic is catched by the ErrorHandler")
    })

    log.Fatal(app.Listen(":3000"))
}
```
{% endcode %}

Because `ctx.Next()` accepts an `error` interface, you could use Fiber's custom error struct to pass an additional `status code` using `fiber.NewError()`. It's optional to pass a message; if this is left empty, it will default to the status code message \(`404` equals `Not Found`\).

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) error {
    return fiber.ErrServiceUnavailable // 503 Service Unavailable

    return fiber.NewError(503, "On vacation!")
    // 503 On vacation!
})
```
{% endcode %}

## Default Error Handler

Fiber provides an error handler by default. For a standard error, the response is sent as **500 Internal Server Error**. If error is of type [fiber\*Error](https://godoc.org/github.com/gofiber/fiber#Error), response is sent with the provided status code and message.

{% code title="Example" %}
```go
// Default error handler
var DefaultErrorHandler = func(c *Ctx, err error) {
	code := StatusInternalServerError
	if e, ok := err.(*Error); ok {
		code = e.Code
	}
	c.Set(HeaderContentType, MIMETextPlainCharsetUTF8)
	_ = c.Status(code).SendString(err.Error())
}
```
{% endcode %}

## Custom Error Handler

A custom error handler can be set via `app.Settings.ErrorHandler`

In most cases, the default error handler should be sufficient. However, a custom error handler can come in handy if you want to capture different types of errors and take action accordingly e.g., send a notification email or log an error to the centralized system. You can also send customized responses to the client e.g., error page or just a JSON response.

The following example shows how to display error pages for different types of errors.

{% code title="Example" %}
```go
app := fiber.New()

// Custom error handler
app.Errors(func(ctx *fiber.Ctx, err error) {
    // Statuscode defaults to 500
    code := fiber.StatusInternalServerError

    // Retreive the custom statuscode if it's an fiber.*Error
    if e, ok := err.(*fiber.Error); ok {
        code = e.Code
    }

    // Send custom error page
    err = ctx.Status(code).SendFile(fmt.Sprintf("./%d.html", code))
    if err != nil {
        ctx.Status(500).SendString("Internal Server Error")
    }
})
```
{% endcode %}

> Special thanks to the [Echo](https://echo.labstack.com/) & [Express](https://expressjs.com/) framework for inspiration regarding error handling.

