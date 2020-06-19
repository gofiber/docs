---
description: >-
  Fiber supports centralized error handling by passing an error argument into
  the Next method which allows you to log errors to external services or send a
  customized HTTP response to the client.
---

# 🐛 Error Handling

## Catching Errors

It’s important to ensure that Fiber catches all errors that occur while running route handlers and middleware. You must pass them to the `ctx.Next()` function, where Fiber will catch and process them. 

{% tabs %}
{% tab title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
	err := c.SendFile("file-does-not-exist")

	if err != nil {
		c.Next(err) // Pass error to Fiber
	}
})
```
{% endtab %}
{% endtabs %}

Fiber does not handle [panics](https://blog.golang.org/defer-panic-and-recover) by default. To recover from a panic thrown by any handler in the stack, you need to include the `Recover` middleware as shown below:

{% code title="Example" %}
```go
package main

import (
	"github.com/gofiber/fiber"
	"github.com/gofiber/fiber/middleware"
)

func main() {
	app := fiber.New()

	app.Use(middleware.Recover())

	app.Get("/", func(c *fiber.Ctx) {
		panic("This panic is catched by the ErrorHandler")
	})

	log.Fatal(app.Listen(3000))
}

```
{% endcode %}

Because `ctx.Next()` accepts an `error` interface, you could use Fiber's custom error struct to pass an additional `statuscode` using `fiber.NewError()`. It's optional to pass an message, if this is left empty it will default to the statuscode message \(`404` equals `Not Found`\).

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
    err := fiber.NewError(503)
    c.Next(err) // 503 Service Unavailable

    err := fiber.NewError(404, "Sorry, not found!")
    c.Next(err) // 404 Sorry, not found!
})
```
{% endcode %}

## Default Error Handler

Fiber provides a error handler by default. For a standard error, response is sent as **500 Internal Server Error**. If error is of type [fiber\*Error](https://godoc.org/github.com/gofiber/fiber#Error), response is sent with the provided status code and message.

{% code title="Example" %}
```go
// Default error handler
app.Settings.ErrorHandler = func(ctx *fiber.Ctx, err error) {
	// Statuscode defaults to 500
	code := fiber.StatusInternalServerError
	
	// Check if it's an fiber.Error type
	if e, ok := err.(*fiber.Error); ok {
		code = e.Code
	}
	
	// Return HTTP response
	ctx.Set(fiber.HeaderContentType, fiber.MIMETextPlainCharsetUTF8)
	ctx.Status(code).SendString(err.Error())
}
```
{% endcode %}

## Custom Error Handler

Custom error handler can be set via `app.Settings.ErrorHandler`

For most cases the default error handler should be sufficient. However, a custom error handler can come in handy if you want to capture different type of errors and take action accordingly e.g. send notification email or log error to a centralized system. You can also send customized response to the client e.g. error page or just a JSON response.

The following example shows how to display error pages for different type of errors.

{% code title="Example" %}
```go
app := fiber.New()

// Custom error handler
app.Settings.ErrorHandler = func(ctx *fiber.Ctx, err error) {
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
}
```
{% endcode %}

> Special thanks to the [Echo](https://echo.labstack.com/) & [Express](https://expressjs.com/) framework for inspiration regarding error handling.

