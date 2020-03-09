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

<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:left">Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Skip</td>
      <td style="text-align:left"><code>func(*Ctx) bool</code>
      </td>
      <td style="text-align:left">Defines a function to skip middleware</td>
      <td style="text-align:left"><code>nil</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Timeout</td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">Timeout in seconds on how long to keep records of requests in memory</td>
      <td
      style="text-align:left"><code>60</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">Max</td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">Max number of recent connections during <code>Timeout</code> seconds before
        sending a 429 response</td>
      <td style="text-align:left"><code>10</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Message</td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">Response body</td>
      <td style="text-align:left"><code>&quot;Too many requests, please try again later.&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">StatusCode</td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">Response status code</td>
      <td style="text-align:left"><code>429</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Key</td>
      <td style="text-align:left"><code>func(*Ctx) string</code>
      </td>
      <td style="text-align:left">Key allows to use a custom handler to create custom keys</td>
      <td style="text-align:left"><code>func(c *fiber.Ctx) string { <br />   return c.IP() <br />}</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Handler</td>
      <td style="text-align:left"><code>func(*Ctx)</code>
      </td>
      <td style="text-align:left">Handler is called when a request hits the limit</td>
      <td style="text-align:left">
        <p><code>func(c *fiber.Ctx) {</code>
        </p>
        <p><code> c.Status(cfg.StatusCode).SendString(cfg.Message) }</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>**Example**

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
| CSPReportOnly | `bool` |  | \`\` |
| HSTSPreloadEnabled | `bool` |  | \`\` |
| ReferrerPolicy | `string` |  | \`\` |

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
    app.Use(middleware.Helmet())

    // Application
    app.Get("/", func(c *fiber.Ctx) {
        c.Send("You are authorized!")
    })

    app.Listen(3000)
    // Run: curl --user john:doe http://localhost:3000
}
```

