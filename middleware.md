---
description: >-
  Middleware is a function chained in the HTTP request cycle with access to the
  Context which it uses to perform a specific action, for example, logging every
  request or enabling CORS.
---

# 🧬 Middleware

## Fiber

These middleware functions are available within the official Fiber framework

{% code title="Example" %}
```go
package main

import (
	"github.com/gofiber/fiber"
	
	// Import the middleware package
	"github.com/gofiber/fiber/middleware"
)

func main() {
	app := fiber.New()
	
	// Register the middleware
	app.Use(middleware.Logger())

	app.Listen(3000)
}
```
{% endcode %}

### Logger

Logs the information about each HTTP request.

{% code title="Basic Usage" %}
```go
app.Use(middleware.Logger())
// 08:33:22 GET /hello - 127.0.0.1 - 200 - 0.23ms
```
{% endcode %}

{% code title="Custom Configuration" %}
```go
// Custom Format
app.Use(middleware.Logger("${ip} - ${path} - ${latency}\n"))

// Custom Format + Output
app.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
    Format: "${ip} - ${path} - ${latency}\n",
    Output: os.Stderr,
}))
```
{% endcode %}

{% code title="Config" %}
```go
type LoggerConfig struct {
    // Next defines a function to skip this middleware.
    Next func(ctx *fiber.Ctx) bool
    
    // Format defines the logging tags
    // 
    // - time
    // - ip
    // - ips
    // - url
    // - host
    // - method
    // - path
    // - protocol
    // - route
    // - referer
    // - ua
    // - latency
    // - status
    // - body
    // - error
    // - bytesSent
    // - bytesReceived
    // - header:<key>
    // - query:<key>
    // - form:<key>
    // - cookie:<key>
    // 
    // Optional. Default: ${time} ${method} ${path} - ${ip} - ${status} - ${latency}\n
    Format string
    
    // TimeFormat https://programming.guide/go/format-parse-string-time-date-example.html
    //
    // Optional. Default: 15:04:05
    TimeFormat string
    
    // Output is a writter where logs are written
    //
    // Default: os.Stderr
    Output io.Writer
}
```
{% endcode %}

### Recover

Recover middleware

### RequestID

RequestID middleware



## External

| Middleware | Description |
| :--- | :--- |
| [**adaptor**](https://github.com/gofiber/adaptor) | Converter for net/http handlers to/from Fiber request handlers, special thanks to @arsmn! |
| [**basicauth**](https://github.com/gofiber/basicauth) | Basic auth middleware provides an HTTP basic authentication. It calls the next handler for valid credentials and 401 Unauthorized for missing or invalid credentials. |
| [**compression**](https://github.com/gofiber/compression) |  |
| [**cors**](https://github.com/gofiber/cors) |  |
| [**csrf**](https://github.com/gofiber/csrf) |  |
| [**embed**](https://github.com/gofiber/embed) | FileServer middleware for Fiber, special thanks and credits to Alireza Salary |
| [**jwt**](https://github.com/gofiber/jwt) | JWT returns a JSON Web Token \(JWT\) auth middleware. |
| [**keyauth**](https://github.com/gofiber/keyauth) |  |
| [**limiter**](https://github.com/gofiber/limiter) |  |
| [**pprof**](https://github.com/gofiber/pprof) | Special thanks to Matthew Lee \(@mthli\) |
| [**rewrite**](https://github.com/gofiber/rewrite) |  |
| [**session**](https://github.com/gofiber/session) | This session middleware is build on top of fasthttp/session by @savsgio MIT. Special thanks to @thomasvvugt for helping with this middleware. |
| [**template**](https://github.com/gofiber/template) | This package contains 8 template engines that can be used with Fiber v1.10.0 Go version 1.13 or higher is required. |
| [**websocket**](https://github.com/gofiber/websocket) | Based on Fasthttp WebSocket for Fiber with Locals support! |

## Third-Party

| Middleware | Description |
| :--- | :--- |
| [**fiber-swagger**](https://github.com/arsmn/fiber-swagger) |  |
| [**fiber-casbin**](https://github.com/arsmn/fiber-casbin) |  |
| [**fiber-introspect**](https://github.com/arsmn/fiber-introspect) |  |
| [**fiber\_tracing**](https://github.com/shareed2k/fiber_tracing) |  |
| [**fiber\_limiter**](https://github.com/shareed2k/fiber_limiter) |  |
| [**fiber-boilerplate**](https://github.com/thomasvvugt/fiber-boilerplate) |  |
| [**gqlgen**](https://github.com/arsmn/gqlgen) |  |

## Guidelines

{% hint style="warning" %}
**Unfinished documentation**
{% endhint %}

