---
description: >-
  Middleware is a function chained in the HTTP request cycle with access to the
  Context which it uses to perform a specific action, for example, logging every
  request or enabling CORS.
---

# 🧬 Middleware

## BasicAuth

Basic auth middleware provides an HTTP basic authentication. It calls the next handler for valid credentials and "401 - Unauthorized" for missing or invalid credentials.

**Signature**

```go
middleware.BasicAuth(config ...BasicAuthConfig) func(*Ctx)
```

**Config**

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| Skip | `func(*Ctx) bool` | Defines a function to skip middleware | `nil` |
| Users | `map[string][string]` | Users defines the allowed credentials | `nil` |
| Realm | `string` | Realm is a string to define the realm attribute | `Restricted` |

**Example**

```go
package main

import (
    "github.com/gofiber/fiber"
    "github.com/gofiber/fiber/middleware"
)

func main() {
    app := fiber.New()

    // Config
    config := middleware.BasicAuthConfig{
        Users: map[string]string{
            "john":  "doe",
            "admin": "123456",
        },
    }

    // Middleware
    app.Use(middleware.BasicAuth(config))

    // Application
    app.Get("/", func(c *fiber.Ctx) {
        c.Send("You are authorized!")
    })

    app.Listen(3000)
    // Run: curl --user john:doe http://localhost:3000
}
```

## CORS

CORS middleware implements CORS specification. CORS gives web servers cross-domain access controls, which enable secure cross-domain data transfers.

**Signature**

```go
middleware.CORS(config ...CORSConfig) func(*Ctx)
```

**Config**

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| Skip | `func(*Ctx) bool` | Defines a function to skip middleware | `nil` |
| AllowOrigins | `[]string` | AllowOrigin defines a list of origins that may access the resource. | `[]string{"*"}` |
| AllowMethods | `[]string` | AllowMethods defines a list methods allowed when accessing the resource. This is used in response to a preflight request. | `[]string{"GET","POST","HEAD","PUT","DELETE","PATCH"}` |
| AllowHeaders | `[]string` | AllowHeaders defines a list of request headers that can be used when making the actual request. This in response to a preflight request. | `nil` |
| AllowCredentials | `string` | AllowCredentials indicates whether or not the response to the request can be exposed when the credentials flag is true. When used as part of a response to a preflight request, this indicates whether or not the actual request can be made using credentials. | `nil` |
| ExposeHeaders | `[]string` | ExposeHeaders defines a whitelist headers that clients are allowed to access. | `nil` |
| MaxAge | `int` | MaxAge indicates how long \(in seconds\) the results of a preflight request can be cached. | `0` |

**Example**

```go
package main

import (
    "github.com/gofiber/fiber"
    "github.com/gofiber/fiber/middleware"
)

func main() {
    app := fiber.New()

    // Middleware
    app.Use(middleware.CORS())

    // Application
    app.Get("/", func(c *fiber.Ctx) {
        c.Send("CORS is enabled!")
    })

    app.Listen(3000)
    // Run: curl -H "Origin: http://example.com" --verbose http://localhost:3000
}
```

## Limiter

Use to limit repeated requests to public APIs and/or endpoints such as password reset. This middleware does not share state with other processes/servers.

**Signature**

```go
middleware.Limiter(config ...LimiterConfig) func(*Ctx)
```

**Config**

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| Skip | `func(*Ctx) bool` | Defines a function to skip middleware | `nil` |
| Timeout | `int` | Users defines the allowed credentials | `60` |
| Max | `int` | Users defines the allowed credentials | `10` |
| Message | `string` | Users defines the allowed credentials | `"Too many requests, please try again later."` |
| StatusCode | `int` | Users defines the allowed credentials | `429` |
| Key | `func(*Ctx) string` | Users defines the allowed credentials | `return c.IP()` |
| Handler | `func(*Ctx)` | Realm is a string to define the realm attribute | `c.Status(StatusCode).SendString(Message)` |

**Example**

```go
package main

import (
    "github.com/gofiber/fiber"
    "github.com/gofiber/fiber/middleware"
)

func main() {
    app := fiber.New()

    // Max 2 requests per 10 seconds
    config := middleware.LimiterConfig{
        Timeout: 10,
        Max: 2,
    }

    // Middleware
    app.Use(middleware.Limiter(config))

    // Application
    app.Get("/", func(c *fiber.Ctx) {
        c.Send("This route can handle limited repeated requests!")
    })

    app.Listen(3000)
    // Run: curl --user john:doe http://localhost:3000
}
```

## Logger

Logger middleware logs the information about each HTTP request.

**Signature**

```go
middleware.Logger(config ...LoggerConfig) func(*Ctx)
```

**Config**

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| Format | `string` | Possible values: `time, ip, url, host, method, path, protocol, referer, ua, header:<key>, query:<key>, form:<key>, cookie:<key>` | `"${time} - ${ip} - ${method} ${path}\t${ua}\n"` |
| TimeFormat | `string` | TimeFormat [https://programming.guide/go/format-parse-string-time-date-example.html](https://programming.guide/go/format-parse-string-time-date-example.html) | `15:04:05` |
| Output | `io.Writer` | Output is a writter where logs are written | `os.Stderr` |

**Example**

```go
package main

import (
    "github.com/gofiber/fiber"
    "github.com/gofiber/fiber/middleware"
)

func main() {
    app := fiber.New()

    // Middleware
    app.Use(middleware.Logger())

    // Application
    app.Get("/", func(c *fiber.Ctx) {
        c.Send("You have been logged!")
    })

    app.Listen(3000)
}
```

## Recover

You can recover from panic errors within any route. By default the Recover middleware will respond with `500 Internal Server Error` when a panic occurs. You can also provide your own error handler.

**Signature**

```go
middleware.Recover(handle ...func(*Ctx, error)) func(*Ctx)
```

**Example**

```go
package main

import (
    "github.com/gofiber/fiber"
    "github.com/gofiber/fiber/middleware"
)

func main() {
  app := fiber.New()

  app.Use(middleware.Recover(func(c *fiber.Ctx, err error) {
    log.Println(err)  // "Something went wrong!"
    c.SendStatus(500) // Internal Server Error
  })))
  
  app.Get("/", func(c *fiber.Ctx) {
    panic("Something went wrong!")
  })

  app.Listen(3000)
}
```

## RequestID

RequestID adds an indentifier to the request using the `X-Request-ID` header

**Signature**

```go
middleware.RequestID(config ...RequestIDConfig) func(*Ctx)
```

**Config**

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| Skip | `func(*Ctx) bool` | Defines a function to skip middleware | `nil` |
| Generator | `func(*Ctx) bool` | Generator defines a function to generate an ID. | `return uuid.New().String()` |

**Example**

```go
package main

import (
    "github.com/gofiber/fiber"
    "github.com/gofiber/fiber/middleware"
)

func main() {
    app := fiber.New()

    // Middleware
    app.Use(middleware.RequestID())
    // => X-Request-ID: 6ba7b810-9dad-11d1-80b4-00c04fd430c8

    // Application
    app.Get("/", func(c *fiber.Ctx) {
        c.Send("You are authorized!")
    })

    app.Listen(3000)
    // Run: curl --user john:doe http://localhost:3000
}
```

## Helmet

Helmet middleware provides protection against cross-site scripting \(XSS\) attack, content type sniffing, clickjacking, insecure connection and other code injection attacks.

**Signature**

```go
middleware.Helmet(config ...HelmetConfig) func(*Ctx)
```

**Config**

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| Skip | `func(*Ctx) bool` | Defines a function to skip middleware | `nil` |
| XSSProtection | `string` | XSSProtection provides protection against cross-site scripting attack \(XSS\) by setting the `X-XSS-Protection` header. | `1; mode=block"` |
| ContentTypeNosniff | `string` | ContentTypeNosniff provides protection against overriding Content-Type header by setting the `X-Content-Type-Options` header. | `"nosniff"` |
| XFrameOptions | `string` | XFrameOptions can be used to indicate whether or not a browser should be allowed to render a page in a ,  or . Sites can use this to avoid clickjacking attacks, by ensuring that their content is not embedded into other sites.provides protection against clickjacking. Possible values: `SAMEORIGIN, DENY, ALLOW-FROM uri` | `"SAMEORIGIN"` |
| HSTSMaxAge | `int` | HSTSMaxAge sets the `Strict-Transport-Security` header to indicate how long \(in seconds\) browsers should remember that this site is only to be accessed using HTTPS. This reduces your exposure to some SSL-stripping man-in-the-middle \(MITM\) attacks. | \`\` |
| HSTSExcludeSubdomains | `bool` | HSTSExcludeSubdomains won't include subdomains tag in the `Strict Transport Security` header, excluding all subdomains from security policy. It has no effect unless HSTSMaxAge is set to a non-zero value. | \`\` |
| ContentSecurityPolicy | `string` | ContentSecurityPolicy sets the `Content-Security-Policy` header providing security against cross-site scripting \(XSS\), clickjacking and other code injection attacks resulting from execution of malicious content in the trusted web page context | \`\` |
| CSPReportOnly | `bool` | - | \`\` |
| HSTSPreloadEnabled | `bool` | - | \`\` |
| ReferrerPolicy | `string` | - | \`\` |

**Example**

```go
package main

import (
    "github.com/gofiber/fiber"
    "github.com/gofiber/fiber/middleware"
)

func main() {
    app := fiber.New()

    // Middleware
    app.Use(middleware.Secure())

    // Application
    app.Get("/", func(c *fiber.Ctx) {
        c.Send("You are authorized!")
    })

    app.Listen(3000)
    // Run: curl --user john:doe http://localhost:3000
}
```

