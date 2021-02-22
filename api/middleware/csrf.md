# CSRF

CSRF middleware for [Fiber](https://github.com/gofiber/fiber) that provides [Cross-site request forgery](https://en.wikipedia.org/wiki/Cross-site_request_forgery) protection by passing a csrf token via cookies. This cookie value will be used to compare against the client csrf token on requests, other than those defined as "safe" by RFC7231 (GET, HEAD, OPTIONS, or TRACE). When the csrf token is invalid, this middleware will return the `fiber.ErrForbidden` error. When the CSRF request is valid or has expired a new token will be generated and a cookie set.

## Table of Contents

* [Signatures](csrf.md#signatures)
* [Examples](csrf.md#examples)
* [Config](csrf.md#config)
* [Default Config](csrf.md#default-config)

## Signatures

```go
func New(config ...Config) fiber.Handler
```

## Examples

Import the middleware package that is part of the Fiber web framework

```go
import (
    "github.com/gofiber/fiber/v2"
    "github.com/gofiber/fiber/v2/middleware/csrf"
)
```

After you initiate your Fiber app, you can use the following possibilities:

```go
// Initialize default config
app.Use(csrf.New())

// Or extend your config for customization
app.Use(csrf.New(csrf.Config{
    KeyLookup:      "header:X-Csrf-Token",
    CookieName:     "csrf_",
    CookieSameSite: "Strict",
    Expiration:     1 * time.Hour,
    KeyGenerator:   utils.UUID,
}))
```

## Config

```go
// Config defines the config for middleware.
type Config struct {
    // Next defines a function to skip this middleware when returned true.
    //
    // Optional. Default: nil
    Next func(c *fiber.Ctx) bool

    // KeyLookup is a string in the form of "<source>:<key>" that is used
    // to extract token from the request.
    // Possible values:
    // - "header:<name>"
    // - "query:<name>"
    // - "param:<name>"
    // - "form:<name>"
    // - "cookie:<name>"
    //
    // Optional. Default: "header:X-CSRF-Token"
    KeyLookup string

    // Name of the session cookie. This cookie will store session key.
    // Optional. Default value "_csrf".
    CookieName string

    // Domain of the CSRF cookie.
    // Optional. Default value "".
    CookieDomain string

    // Path of the CSRF cookie.
    // Optional. Default value "".
    CookiePath string

    // Indicates if CSRF cookie is secure.
    // Optional. Default value false.
    CookieSecure bool

    // Indicates if CSRF cookie is HTTP only.
    // Optional. Default value false.
    CookieHTTPOnly bool

    // Indicates if CSRF cookie is HTTP only.
    // Optional. Default value "Strict".
    CookieSameSite string

    // Expiration is the duration before csrf token will expire
    //
    // Optional. Default: 1 * time.Hour
    Expiration time.Duration

    // Store is used to store the state of the middleware
    //
    // Optional. Default: memory.New()
    Storage fiber.Storage

    // Context key to store generated CSRF token into context.
    // If left empty, token will not be stored in context.
    //
    // Optional. Default: ""
    ContextKey string

    // KeyGenerator creates a new CSRF token
    //
    // Optional. Default: utils.UUID
    KeyGenerator func() string
}
```

## Default Config

```go
var ConfigDefault = Config{
    KeyLookup:      "header:X-Csrf-Token",
    CookieName:     "csrf_",
    CookieSameSite: "Strict",
    Expiration:     1 * time.Hour,
    KeyGenerator:   utils.UUID,
}
```

