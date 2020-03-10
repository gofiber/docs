---
description: >-
  Middleware is a function chained in the HTTP request cycle with access to the
  Context which it uses to perform a specific action, for example, logging every
  request or enabling CORS.
---

# 🧬 Middleware

## Basic Auth

Basic auth middleware provides an HTTP basic authentication. It calls the next handler for valid credentials and `401 Unauthorized` for missing or invalid credentials.

**Installation**

```bash
go get -u github.com/gofiber/basicauth
```

**Signature**

```go
basicauth.New(config ...basicauth.Config) func(*fiber.Ctx)
```

**Config**

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| Skip | `func(*fiber.Ctx) bool` | Defines a function to skip middleware | `nil` |
| Users | `map[string][string]` | Users defines the allowed credentials | `nil` |
| Realm | `string` | Realm is a string to define the realm attribute | `Restricted` |
| Authorizer | `func(string, string) bool` | A function you can pass to check the credentials however you want. | `nil` |
| Unauthorized | `func(*fiber.Ctx)` | Custom response body for unauthorized responses | `nil` |

**Example**

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/basicauth"
)

func main() {
  app := fiber.New()

  cfg := basicauth.Config{
    Users: map[string]string{
      "john":   "doe",
      "admin":  "123456",
    },
  }
  app.Use(basicauth.New(cfg))

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Welcome!")
  })

  app.Listen(3000)
}
```

## CORS

CORS middleware implements CORS specification. CORS gives web servers cross-domain access controls, which enable secure cross-domain data transfers.

**Installation**

```bash
go get -u github.com/gofiber/cors
```

**Signature**

```go
cors.New(config ...cors.Config) func(*fiber.Ctx)
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
  "github.com/gofiber/cors"
)

func main() {
  app := fiber.New()

  app.Use(cors.New())

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Welcome!")
  })

  app.Listen(3000)
  // curl -H "Origin: http://example.com" --verbose http://localhost:3000
}
```

## Limiter

Use to limit repeated requests to public APIs and/or endpoints such as password reset. This middleware does not share state with other processes/servers.

**Installation**

```bash
go get -u github.com/gofiber/limiter
```

**Signature**

```go
limiter.New(config ...limiter.Config) func(*Ctx)
```

**Config**

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| Skip | `func(*Ctx) bool` | Defines a function to skip middleware | `nil` |
| Timeout | `int` | Timeout in seconds on how long to keep records of requests in memory | `60` |
| Max | `int` | Max number of recent connections during `Timeout` seconds before sending a 429 response | `10` |
| Message | `string` | Response body | `"Too many requests, please try again later."` |
| StatusCode | `int` | Response status code | `429` |
| Key | `func(*Ctx) string` | Key allows to use a custom handler to create custom keys | `func(c *fiber.Ctx) string {  return c.IP() }` |
| Handler | `func(*Ctx)` | &gt;Handler is called when a request hits the limit | `func(c *fiber.Ctx) string {  c.Status(cfg.StatusCode).SendString(cfg.Message)}` |

**Example**

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/limiter"
)

func main() {
  app := fiber.New()

  // 3 requests per 10 seconds max
  cfg := limiter.Config{
    Timeout: 10,
    Max: 3,
  }

  app.Use(limiter.New(cfg))

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Welcome!")
  })

  app.Listen(3000)
}
```

## Logger

Logger middleware logs the information about each HTTP request.

**Installation**

```bash
go get -u github.com/gofiber/logger
```

**Signature**

```go
logger.new(config ...logger.Config) func(*Ctx)
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
  "github.com/gofiber/logger"
)

func main() {
  app := fiber.New()

  app.Use(logger.New())

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Welcome!")
  })

  app.Listen(3000)
}
```

## Recover

You can recover from panic errors within any route. By default the Recover middleware will respond with `500 Internal Server Error` when a panic occurs. You can also provide your own error handler.

**Installation**

```bash
go get -u github.com/gofiber/recover
```

**Signature**

```go
recover.New(config ...recover.Config) func(*Ctx)
```

**Example**

```go
package main

import (
    "github.com/gofiber/fiber"
    "github.com/gofiber/recover"
)

func main() {
    app := fiber.New()

  // Optional
    cfg := recover.Config{
        Handler: func(c *fiber.Ctx, err error) {
            c.SendString(err.Error())
            c.SendStatus(500)
        },
    }

    app.Use(recover.New(cfg))

    app.Get("/", func(c *fiber.Ctx) {
        panic("Hi, I'm a error!")
    })

    app.Listen(3000)
}
```

## Request ID

Request ID adds an indentifier to the request using the `X-Request-ID` header

**Installation**

```bash
go get -u github.com/gofiber/requestid
```

**Signature**

```go
requestid.New(config ...requestid.Config) func(*Ctx)
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
  "github.com/gofiber/requestid"
)

func main() {
  app := fiber.New()

  app.Use(requestid.New())

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Hello, World!")
  })

  app.Listen(3000)
}
```

## Helmet

Helmet middleware provides protection against cross-site scripting \(XSS\) attack, content type sniffing, clickjacking, insecure connection and other code injection attacks.

**Installation**

```bash
go get -u github.com/gofiber/helmet
```

**Signature**

```go
helmet.New(config ...helmet.Config) func(*Ctx)
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
| CSPReportOnly | `bool` |  | \`\` |
| HSTSPreloadEnabled | `bool` |  | \`\` |
| ReferrerPolicy | `string` |  | \`\` |

**Example**

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/helmet"
)

func main() {
  app := fiber.New()

  app.Use(helmet.New())

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Welcome!")
  })

  app.Listen(3000)
  // curl -I http://localhost:3000
}
```

