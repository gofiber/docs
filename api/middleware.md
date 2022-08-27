---
description: >-
  Middleware is a function chained in the HTTP request cycle with access to the
  Context which it uses to perform a specific action, for example, logging every
  request or enabling CORS.
---

# 🧬 Middleware

**Fiber ships with multiple middleware modules by default:**

* \*\*\*\*[**Compress**](middleware.md#compress) Compress middleware that supports `deflate`, `gzip` and `brotli` compression.
* \*\*\*\*[**FileSystem**](middleware.md#filesystem) FileSystem middleware for Fiber, special thanks and credits to Alireza Salary
* **Favicon** Ignore favicon from logs or serve from memory if a file path is provided.
* **Logger** HTTP request/response logger.
* **Pprof** HTTP server runtime profiling
* **Recover** Recover middleware recovers from panics anywhere in the stack chain and handles the control to the centralized[ ErrorHandler](../guide/error-handling.md).
* **RequestID** Request ID middleware generates a unique id for a request.
* **Timeout** A wrapper function for handlers which will raise an error if the handler takes longer than a set amount of time to return

**Fiber also maintains external middleware modules, these have to be installed separately:**

* **gofiber/adaptor** Converter for net/http handlers to/from Fiber request handlers.
* **gofiber/basicauth** Basic auth middleware provides an HTTP basic authentication. It calls the next handler for valid credentials and 401 Unauthorized for missing or invalid credentials.
* **gofiber/cors** Enable cross-origin resource sharing \(CORS\) with various options.
* **gofiber/csrf** Protect from CSRF exploits.
* **gofiber/envvar** This middleware enables to expose environment variables.
* **gofiber/helmet** Helps secure your apps by setting various HTTP headers.
* **gofiber/jwt** JWT returns a JSON Web Token \(JWT\) auth middleware.
* **gofiber/keyauth** Key auth middleware provides a key-based authentication.
* **gofiber/limiter** Rate-limiting middleware for Fiber. Use to limit repeated requests to public APIs and/or endpoints such as password reset.
* **gofiber/rewrite** Rewrite middleware rewrites the URL path based on provided rules. It can be helpful for backward compatibility or just creating cleaner and more descriptive links.
* **gofiber/session** This session middleware is built on top of fasthttp/session by @savsgio MIT. Special thanks to 
* **gofiber/template** This package contains 8 template engines
* **gofiber/websocket** Based on Gorilla WebSocket for Fiber

## Compress

Compress middleware for with support for `deflate`, `gzip` and `brotli`compression.  
It will use the fastest compression method depending on the request header `Accept-Encoding`value.

{% code title="Import" %}
```go
import (
  "github.com/gofiber/fiber/v2"
  "github.com/gofiber/fiber/middleware"
)
```
{% endcode %}

{% code title="Signature" %}
```go
func Compress(options ...interface{}) fiber.Handler {}
```
{% endcode %}


We maintain an simplified method initiation, this means we determine the arguments by type.
{% code title="Example" %}
```go
// Initiate default settings
app.Use(middleware.Compress())

// Custom config
var config = middleware.CompressConfig{
  // Next defines a function to skip this middleware.
  // Default: nil
  Next:  func(c *fiber.Ctx) bool {
    return c.Path() == "/dontcompress"
  },
  // Compression level that supports brotli, gzip and deflate
  // Accepts: -1 (Disabled), 0 (Default), 1 (BestSpeed), 2 (BestCompression)
  // Default: 0
  Level: 2,
}

// Specify a config
app.Use(middleware.Compress(config)

// Specify a custom compression level ( -1, 0, 1, 2 )
app.Use(middleware.Compress(config.Level))

// Specify a Next fn, if the conditions match it will be skipped
app.Use(middleware.Compress(config.Next))

// Specify multiple config options, order does not matter
app.Use(middleware.Compress(config.Next, config.Level))

```
{% endcode %}

## Skipping middleware execution

When adding middleware to your application, you can also specify when the middleware should be activated and when it should not through a function passed when initialising the middleware using a function passed in the configuration for the middleware.

{% code title="Signature" %}
```go
func (*fiber.Ctx) bool
```
{% endcode %}

This function should return `true` if the middleware should be deactivated. For example, if you would like admin users to be exempt from rate-limiting, you could do something like this:

{% code title="Example" %}
```go
app.Use(limiter.New(limiter.Config{
    Timeout: 10,
    Max: 3,
    Filter: func (c *fiber.Ctx) bool {
        var isUserAdmin bool
        // Your logic here
        return isUserAdmin
    }
}))
```
{% endcode %}

{% hint style="warning" %}
If you are using middleware that is included with Fiber by default \(for example Compress or Logger\), you should use the `Next` field instead of the `Filter` field. For example:

{% code title="Example" %}
```go
app.Use(middleware.Logger(middleware.LoggerConfig{
    Format:     "${time} ${method} ${path}",
    TimeFormat: "15:04:05",
    TimeZone:   "Asia/Chongqing",
    Next: func (c *fiber.Ctx) bool {
        var isUserAdmin bool
        // Your logic here
        return isUserAdmin
    }
}))
```
{% endcode %}
{% endhint %}

## FileSystem

## Favicon

## Logger

## Pprof

## Recover

## RequestID



## Adaptor

## BasicAuth

## Cors

## CSRF

## Helmet

## JWT

## KeyAuth

## Limiter

## Rewrite

## Session

## Template

## Websocket

