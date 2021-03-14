# Session

Session middleware for [Fiber](https://github.com/gofiber/fiber)

## Table of Contents

* [Signatures](session.md#signatures)
* [Examples](session.md#examples)
* [Config](session.md#config)
* [Default Config](session.md#default-config)

## Signatures

```go
func New(config ...Config) fiber.Handler
```

## Examples

Import the middleware package that is part of the Fiber web framework

```go
import (
  "github.com/gofiber/fiber/v2"
  "github.com/gofiber/fiber/v2/middleware/session"
)
```

After you initiate your Fiber app, you can use the following possibilities:

```go
// Default middleware config
store := session.New()

// This panic will be catch by the middleware
app.Get("/", func(c *fiber.Ctx) error {
    // get session from storage
    sess, err := store.Get(c)
    if err != nil {
        panic(err)
    }

    // save session
    defer sess.Save()

    // Get value
    name := sess.Get("name")

    // Set key/value
    sess.Set("name", "john")

    // Delete key
    sess.Delete("name")

    // Destroy session
    if err := sess.Destroy(); err != nil {
        panic(err)
    }

    return fmt.Fprintf(ctx, "Welcome %v", name)
})
```

## Config

```go
// Config defines the config for middleware.
type Config struct {
    // Allowed session duration
    // Optional. Default value 24 * time.Hour
    Expiration time.Duration

    // Storage interface to store the session data
    // Optional. Default value memory.New()
    Storage fiber.Storage

    // Name of the session cookie. This cookie will store session key.
    // Optional. Default value "session_id".
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
    // Optional. Default value false.
    CookieSameSite string

    // KeyGenerator generates the session key.
    // Optional. Default value utils.UUID
    KeyGenerator func() string
}
```

## Default Config

```go
var ConfigDefault = Config{
    Expiration:   24 * time.Hour,
    CookieName:   "session_id",
    KeyGenerator: utils.UUID,
}
```

