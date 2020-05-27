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
basicauth.New(config ...Config) func(*fiber.Ctx)
```

**Config**

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| Filter | `func(*fiber.Ctx) bool` | Defines a function to skip middleware | `nil` |
| Users | `map[string][string]` | Users defines the allowed credentials | `nil` |
| Realm | `string` | Realm is a string to define the realm attribute | `"Restricted"` |
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
cors.New(config ...Config) func(*fiber.Ctx)
```

**Config**

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| Filter | `func(*Ctx) bool` | Defines a function to skip middleware | `nil` |
| AllowOrigins | `[]string` | AllowOrigin defines a list of origins that may access the resource. | `[]string{"*"}` |
| AllowMethods | `[]string` | AllowMethods defines a list methods allowed when accessing the resource. This is used in response to a preflight request. | `[]string{"GET", "POST", "HEAD", "PUT", "DELETE", "PATCH"}` |
| AllowCredentials | `bool` | AllowCredentials indicates whether or not the response to the request can be exposed when the credentials flag is true. When used as part of a response to a preflight request, this indicates whether or not the actual request can be made using credentials. | `false` |
| ExposeHeaders | `[]string` | ExposeHeaders defines a whitelist headers that clients are allowed to access. | `[]string{}` |
| MaxAge | `int` | MaxAge indicates how long \(in seconds\) the results of a preflight request can be cached. | `0` |

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

## Compression

This middleware allows dynamic compression for gzip & deflate if you your responses are bigger than 4kb. If you want to enable compression for static files only, please use the [**Compression** ](application.md#static)setting inside the [**Static** ](application.md#static)method.

**Installation**

```bash
go get -u github.com/gofiber/compression
```

**Signature**

```go
compression.New(config ...Config) func(*fiber.Ctx)
```

**Config**

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| Filter | `func(*Ctx) bool` | Defines a function to skip middleware | `nil` |
| Level | `int` | Level of compression, `0`, `1`, `2`, `3`, `4` | `0` |

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/compression"
)

func main() {
  app := fiber.New()

  app.Use(compression.New())

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Welcome!")
  })

  app.Listen(3000)
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
limiter.New(config ...Config) func(*Ctx)
```

**Config**

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| Filter | `func(*fiber.Ctx) bool` | Defines a function to skip middleware | `nil` |
| Timeout | `int` | Timeout in seconds on how long to keep records of requests in memory | `60` |
| Max | `int` | Max number of recent connections during `Timeout` seconds before sending a 429 response | `10` |
| Message | `string` | Response body | `"Too many requests, please try again later."` |
| StatusCode | `int` | Response status code | `429` |
| Key | `func(*Ctx) string` | A function that allows to create custom keys. By default `c.IP()` is used. | `nil` |
| Handler | `func(*Ctx)` | Handler is called when a request hits the limit | `nil` |

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
logger.new(config ...Config) func(*Ctx)
```

**Config**

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| Filter | `func(*fiber.Ctx) bool` | Defines a function to skip middleware | `nil` |
| Format | `string` | Possible values: `time, ip, url, host, method, path, route, protocol, referer, ua, bytesSent, bytesReceived, header:<key>, query:<key>, form:<key>, cookie:<key>` | `"${time} - ${ip} - ${method} ${path}\t${ua}\n"` |
| TimeFormat | `string` | TimeFormat [read more here](https://programming.guide/go/format-parse-string-time-date-example.html) | `15:04:05` |
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
recover.New(config ...Config) func(*Ctx)
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

## Session

The session middleware is a session implementation; a feature that allows Fiber to maintain user identity and to store user-specific data during multiple request/response interactions between a browser and Fiber. By default the Session middleware uses the `memory` provider as a session key:value store, however we provide support for memcache, MySQL, Postgres, Redis and SQLite3 a additional session providers.

**Installation**

```bash
go get -u github.com/gofiber/session
```

**Signature**

```go
session.New(config ...session.Config) *Session
```

**Config**

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| Lookup | `string` | Where to look for the session id `<source>:<name>`, possible values: `cookie:key`, `header:key` or `query:key` | `"cookie:session_id"` |
| Domain | `string` | Cookie domain | `""` |
| Expiration | `time.Duration` | Session expiration time, possible values: `0` means no expiry \(24 years\), `-1` means when the browser closes, `>0` is the time.Duration which the session cookies should expire. | `12 * time.Hour` |
| Secure | `bool` | If the cookie should only be send over HTTPS | `false` |
| Provider | `Provider` | Holds the provider interface | `memory.Provider` |
| Generator | `func() []byte` | Generator is a function that generates an unique id | `uuid` |
| GCInterval | `time.Duration` | Interval for the garbage collector | `uuid` |

**Example**

```go
package main

import (
  "fmt"

  "github.com/gofiber/fiber"
  "github.com/gofiber/session"
)

func main() {
  app := fiber.New()

  // create session handler
  sessions := session.New()

  app.Get("/", func(c *fiber.Ctx) {
    store := sessions.Get(c)    // get/create new session
    defer store.Save()

    store.ID()                   // returns session id
    store.Destroy()              // delete storage + cookie
    store.Get("john")            // get from storage
    store.Regenerate()           // generate new session id
    store.Delete("john")         // delete from storage
    store.Set("john", "doe")     // save to storage
  })

  app.Listen(3000)
}
```

## Template

This middleware package contains `8 template engines` that can be used with [Fiber v1.10.0](https://github.com/gofiber/fiber) using Go version `1.13` or higher is required.

**Installation**

```bash
go get -u github.com/gofiber/template
```

**Signature**

```go
<engine>.New(directory, extension string, funcmap ...map[string]interface{}) *Engine
```

**Template Engines**

| Engines | Repo |
| :--- | :--- |
| `ace` | [https://github.com/yosssi/ace](https://github.com/yosssi/ace) |
| `amber` | [https://github.com/eknkc/amber](https://github.com/eknkc/amber) |
| `django` | [https://github.com/flosch/pongo2](https://github.com/flosch/pongo2) |
| `handlebars` | [https://github.com/aymerick/raymond](https://github.com/aymerick/raymond) |
| `jet` | [https://github.com/CloudyKit/jet](https://github.com/CloudyKit/jet) |
| `mustache` | [https://github.com/cbroglie/mustache](https://github.com/cbroglie/mustache) |
| `pug` | [https://github.com/Joker/jade](https://github.com/Joker/jade) |
| `html` | [https://golang.org/pkg/html/template/](https://golang.org/pkg/html/template/) |

**Example**

```go
package main

import (
    "github.com/gofiber/fiber"

    // "github.com/gofiber/template/ace"
    // "github.com/gofiber/template/amber"
    // "github.com/gofiber/template/django"
    // "github.com/gofiber/template/handlebars"
  // "github.com/gofiber/template/jet"
    // "github.com/gofiber/template/mustache"
    // "github.com/gofiber/template/pug"
    "github.com/gofiber/template/html"
)

func main() {
    app := fiber.New()

    // app.Settings.Templates = ace.New("./views", ".ace")
    // app.Settings.Templates = amber.New("./views", ".amber")
    // app.Settings.Templates = django.New("./views", ".django")
    // app.Settings.Templates = handlebars.New("./views", ".hbs")
  // app.Settings.Templates = jet.New("./views", ".jet")
    // app.Settings.Templates = mustache.New("./views", ".mustache")
    // app.Settings.Templates = pug.New("./views", ".pug")
    app.Settings.Templates = html.New("./views", ".html")

    app.Get("/", func(c *fiber.Ctx) {
        c.Render("index", fiber.Map{
            "Title": "Hello, World!",
        })
    })

    app.Listen(3000)
}
```

## WebSocket

Fiber supports a websocket upgrade middleware. The `*Conn` struct has all the functionality from the [**gorilla/websocket**](https://github.com/gorilla/websocket) library.

**Installation**

```bash
go get -u github.com/gofiber/websocket
```

**Signature**

```go
websocket.New(handler func(*Conn), config ...Config) func(*Ctx)
```

**Config**

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| HandshakeTimeout | `time.Duration` | Specifies the duration for the handshake to complete. | `0` |
| Subprotocols | `[]string` | specifies the server's supported protocols in order of preference. If this field is not nil, then the Upgrade method negotiates a subprotocol by selecting the first match in this list with a protocol requested by the client. | `nil` |
| Origins | `[]string` | Origins is a string slice of origins that are acceptable, by default all origins are allowed. | `[]string{"*"}` |
| ReadBufferSize | `int` | ReadBufferSize specify I/O buffer sizes in bytes. | `1024` |
| WriteBufferSize | `int` | WriteBufferSize specify I/O buffer sizes in bytes. | `1024` |
| EnableCompression | `bool` | EnableCompression specify if the server should attempt to negotiate per message compression \(RFC 7692\) | `false` |

**Example**

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/websocket"
)

func main() {
  app := fiber.New()

  app.Use(func(c *fiber.Ctx) {
    c.Locals("Hello", "World")
    c.Next()
  })

  app.Get("/ws", websocket.New(func(c *websocket.Conn) {
    fmt.Println(c.Locals("Hello")) // "World"
    // Websocket logic...
    for {
      mt, msg, err := c.ReadMessage()
      if err != nil {
        log.Println("read:", err)
        break
      }
      log.Printf("recv: %s", msg)
      err = c.WriteMessage(mt, msg)
      if err != nil {
        log.Println("write:", err)
        break
      }
    }
  }))

  app.Listen(3000) // ws://localhost:3000/ws
}
```

## Request ID

Request ID adds an identifier to the request using the `X-Request-ID` header

**Installation**

```bash
go get -u github.com/gofiber/requestid
```

**Signature**

```go
requestid.New(config ...Config) func(*Ctx)
```

**Config**

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| Filter | `func(*fiber.Ctx) bool` | Defines a function to skip middleware | `nil` |
| Generator | `func(*fiber.Ctx) string` | Generator defines a function to generate an ID. | `return uuid.New().String()` |

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
    c.Send(requestid.Get(c))
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
helmet.New(config ...Config) func(*Ctx)
```

**Config**

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| Filter | `func(*fiber.Ctx) bool` | Defines a function to skip middleware | `nil` |
| XSSProtection | `string` | XSSProtection provides protection against cross-site scripting attack \(XSS\) by setting the `X-XSS-Protection` header. | `1; mode=block"` |
| ContentTypeNosniff | `string` | ContentTypeNosniff provides protection against overriding Content-Type header by setting the `X-Content-Type-Options` header. | `"nosniff"` |
| XFrameOptions | `string` | XFrameOptions can be used to indicate whether or not a browser should be allowed to render a page in a ,  or . Sites can use this to avoid clickjacking attacks, by ensuring that their content is not embedded into other sites.provides protection against clickjacking. Possible values: `SAMEORIGIN, DENY, ALLOW-FROM uri` | `"SAMEORIGIN"` |
| HSTSMaxAge | `int` | HSTSMaxAge sets the `Strict-Transport-Security` header to indicate how long \(in seconds\) browsers should remember that this site is only to be accessed using HTTPS. This reduces your exposure to some SSL-stripping man-in-the-middle \(MITM\) attacks. | `0` |
| HSTSExcludeSubdomains | `bool` | HSTSExcludeSubdomains won't include subdomains tag in the `Strict Transport Security` header, excluding all subdomains from security policy. It has no effect unless HSTSMaxAge is set to a non-zero value. | `false` |
| ContentSecurityPolicy | `string` | ContentSecurityPolicy sets the `Content-Security-Policy` header providing security against cross-site scripting \(XSS\), clickjacking and other code injection attacks resulting from execution of malicious content in the trusted web page context | `""` |
| CSPReportOnly | `bool` |  | `false` |
| HSTSPreloadEnabled | `bool` |  | `false` |
| ReferrerPolicy | `string` |  | `""` |

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

## Redirect

Redirects middleware provides an HTTP redirect to the URL derived from the specified path, with specified status, a positive integer that corresponds to an HTTP status code.

**Installation**

```bash
go get -u github.com/gofiber/redirect
```

**Signature**

```go
redirect.New(config ...Config) func(*Ctx)
```

**Example**

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/redirect"
)

func main() {
  app := fiber.New()

  app.Use(redirect.New(redirect.Config{
    Rules: map[string]string{
      "/old":   "/new",
      "/old/*": "/new/$1",
    },
    StatusCode: 301,
  }))

  app.Get("/new", func(c *fiber.Ctx) {
    c.Send("Hello, World!")
  })
  app.Get("/new/*", func(c *fiber.Ctx) {
    c.Send("Wildcard: ", c.Params("*"))
  })

  app.Listen(3000)
}
```

