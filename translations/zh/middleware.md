---
description: >-
  中间件是一个作用于 HTTP 请求周期链中的一个函数，它可以访问用于执行特定操作的上下文. 例如，记录每个请求或启用 CORS。
---

# 🧬 中间件

## Basic Auth

基本验证中间件提供一个 HTTP 基本验证。 它调用了 next 处理器函数来验证凭据和 `401 Unauthorized 未授权` 缺少或无效凭据。

**安装**

```bash
go get -u github.com/gofiber/basicauth
```

**Signature**

```go
basicauth.New(config ...Config) func(*fiber.Ctx)
```

**配置**

| 属性           | 类型                          | 说明                | 默认             |
|:------------ |:--------------------------- |:----------------- |:-------------- |
| Filter       | `func(*fiber.Ctx) bool`     | 定义跳过中间件的函数        | `nil`          |
| Users        | `map[string][string]`       | 用户定义允许的凭据         | `nil`          |
| Realm        | `string`                    | Realm 是定义领域属性的字符串 | `"Restricted"` |
| Authorizer   | `func(string, string) bool` | 一个用以检查凭据的自定义函数    | `nil`          |
| Unauthorized | `func(*fiber.Ctx)`          | 未经授权响应的自定义响应体     | `nil`          |

**示例**

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

CORS 跨域中间件实现CORS 跨域规格。 CORS 提供网络服务器跨域访问控制，从而能够进行安全的跨域数据传输。

**Installation**

```bash
go get -u github.com/gofiber/cors
```

**Signature**

```go
cors.New(config ...Config) func(*fiber.Ctx)
```

**配置**

| 属性               | 类型                | 说明                                                                      | 默认                                                          |
|:---------------- |:----------------- |:----------------------------------------------------------------------- |:----------------------------------------------------------- |
| Filter           | `func(*Ctx) bool` | 定义跳过中间件的函数                                                              | `nil`                                                       |
| AllowOrigins     | `[]string`        | 定义一个可以访问资源的来源列表。                                                        | `[]string{"*"}`                                             |
| AllowMethods     | `[]string`        | 定义访问资源时允许的方法列表。 这用于回应 preflight 预检请求。                                   | `[]string{"GET", "POST", "HEAD", "PUT", "DELETE", "PATCH"}` |
| AllowCredentials | `bool`            | 允许凭据属性用以表示当标记为 true 时，是否可以将对请求的响应暴露。 当作为预检请求响应的一部分时，这表示是否可以使用凭据发出实际的请求。 | `false`                                                     |
| ExposeHeaders    | `[]string`        | 定义允许客户端访问的白名单头字段。                                                       | `[]string{}`                                                |
| MaxAge           | `int`             | MaxAge 表示预检请求的结果可以缓存多久  \(秒\)。                                        | `0`                                                         |

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

如果您的响应大于4kb，此中间件允许动态压缩至 gzip & deflate。 如果您只想启用对静态文件的压缩， 请使用 [**Compression 压缩** ](application.md#static)在 [**Static** ](application.md#static)方法内设置。

**安装**

```bash
go get -u github.com/gofiber/compression
```

**Signature**

```go
compression.New(config ...Config) func(*fiber.Ctx)
```

**配置**

| 属性     | 类型                | 说明                                    | 默认    |
|:------ |:----------------- |:------------------------------------- |:----- |
| Filter | `func(*Ctx) bool` | 定义跳过中间件的函数                            | `nil` |
| Level  | `int`             | 压缩级别， `0`</code> , `1`, `2`, `3`, `4` | `0`   |

```go
package main

import 
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

用来限制重复请求到公共API 和/或 端点，例如密码重置。 此中间件不与其他进程 或服务器共享状态。

**安装**

```bash
go get -u github.com/gofiber/limiter
```

**Signature**

```go
limiter.New(config ...Config) func(*Ctx)
```

**配置**

| 属性         | 类型                      | 说明                                          | 默认                                             |
|:---------- |:----------------------- |:------------------------------------------- |:---------------------------------------------- |
| Filter     | `func(*fiber.Ctx) bool` | 定义跳过中间件的函数                                  | `nil`                                          |
| Timeout    | `int`                   | 保存请求记录于内存的超时限制，以秒为单位。                       | `60`                                           |
| Max        | `int`                   | 在发送429超时响应之前 ，`Timeout 超时` 限制内（秒）所允许的最大连接数量 | `10`                                           |
| Message    | `string`                | 响应体                                         | `"Too many requests, please try again later."` |
| StatusCode | `int`                   | 响应状态码                                       | `429`                                          |
| Key        | `func(*Ctx) string`     | 允许创建自定义键的函数。 默认使用 `c.IP()`。                 | `nil`                                          |
| Handler    | `func(*Ctx)`            | 处理器函数将在请求达到限制时被调用                           | `nil`                                          |

**示例**

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/limiter"
)

func main() {
  app := fiber.New()

  // 每10秒内， 最多允许 3 个请求
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

日志中间件可以记录每个HTTP请求的信息。

**安装**

```bash
go get -u github.com/gofiber/logger
```

**Signature**

```go
logger.new(config ...Config) func(*Ctx)
```

**配置**

| 属性         | 类型                      | 说明                                                                                                                                                    | 默认                                                 |
|:---------- |:----------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------- |:-------------------------------------------------- |
| Filter     | `func(*fiber.Ctx) bool` | 定义跳过中间件的函数                                                                                                                                            | `nil`                                              |
| Format     | `string`                | 定义日志输出格式。可用的值： `time, ip, url, host, method, path, route, protocol, referer, ua, bytesSent, bytesReceived, header:<key>, quer:<key>, form:<key>, cookie:<key>` | `"${time} - ${ip} - ${method} ${path}\t${ua}\n"` |
| TimeFormat | `string`                | 时间格式 [在这里阅读更多](https://programming.guide/go/format-parse-string-time-date-example.html)                                                               | `15:04:05`                                         |
| Output     | `io.Writer`             | 写入日志的 writter                                                                                                                                         | `os.Stderr`                                        |

**示例**

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

您可以从任何路由中的 panic 错误中恢复。 默认情况下，当出现 panic 错误时，中间件将响应 `500 Internal Server Error` 内部服务器错误。 您也可以定义自己的错误处理器函数。

**安装**

```bash
go get -u github.com/gofiber/recover
```

**Signature**

```go
recover.New(config ...Config) func(*Ctx)
```

**示例**

```go
package main

import (
    "github.com/gofiber/fiber"
    "github.com/gofiber/recover"
)

func main() {
    app := fiber.New()

  // 可选
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

**配置**

| 属性         | 类型              | 说明                                                                                                                                                                                  | 默认                    |
|:---------- |:--------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:--------------------- |
| Lookup     | `string`        | Where to look for the session id `<source>:<name>`, possible values: `cookie:key`, `header:key` or `query:key`                                                          | `"cookie:session_id"` |
| Domain     | `string`        | Cookie domain                                                                                                                                                                       | `""`                  |
| Expiration | `time.Duration` | Session expiration time, possible values: `0` means no expiry (24 years), `-1` means when the browser closes, `>0` is the time.Duration which the session cookies should expire. | `12 * time.Hour`      |
| Secure     | `bool`          | If the cookie should only be send over HTTPS                                                                                                                                        | `false`               |
| Provider   | `Provider`      | Holds the provider interface                                                                                                                                                        | `memory.Provider`     |
| Generator  | `func() []byte` | Generator is a function that generates an unique id                                                                                                                                 | `uuid`                |
| GCInterval | `time.Duration` | Interval for the garbage collector                                                                                                                                                  | `uuid`                |

**示例**

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

By default Fiber comes with the [**default HTML template**](https://golang.org/pkg/html/template/) engine, but this middleware contains third party rendering engines.

**安装**

```bash
go get -u github.com/gofiber/template
```

**Signature**

```go
template.Engine() func(raw string, bind interface{}) (out string, err error)
```

**Template Engines**

| Keyword        | Engine                                                               |
|:-------------- |:-------------------------------------------------------------------- |
| `Amber()`      | [github.com/eknkc/amber](https://github.com/eknkc/amber)             |
| `Handlebars()` | [github.com/aymerick/raymond](https://github.com/aymerick/raymond)   |
| `Mustache()`   | [github.com/cbroglie/mustache](https://github.com/cbroglie/mustache) |
| `Pug()`        | [github.com/Joker/jade](https://github.com/Joker/jade)               |

**示例**

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/template"
)

func main() {
  app := fiber.New()

  app.Settings.TemplateEngine = template.Mustache()
  // app.Settings.TemplateEngine = template.Amber()
  // app.Settings.TemplateEngine = template.Handlebars()
  // app.Settings.TemplateEngine = template.Pug()

  app.Get("/", func(c *fiber.Ctx) {
    bind := fiber.Map{
      "name": "John",
      "age":  35,
    }
    if err := c.Render("./views/index.mustache", bind); err != nil {
      c.Status(500).Send(err.Error())
    }
    // <html><head><title>Template Demo</title></head>
    // <body>Hi, my name is John and im 35 years old
    // </body></html>
  })

  app.Listen(3000)
}
```

## WebSocket

Fiber supports a websocket upgrade middleware. The `*Conn` struct has all the functionality from the [**gorilla/websocket**](https://github.com/gorilla/websocket) library.

**安装**

```bash
go get -u github.com/gofiber/websocket
```

**Signature**

```go
websocket.New(handler func(*Conn), config ...Config) func(*Ctx)
```

**配置**

| 属性                | 类型              | 说明                                                                                                                                                                                                                               | 默认              |
|:----------------- |:--------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:--------------- |
| HandshakeTimeout  | `time.Duration` | Specifies the duration for the handshake to complete.                                                                                                                                                                            | `0`             |
| Subprotocols      | `[]string`      | specifies the server's supported protocols in order of preference. If this field is not nil, then the Upgrade method negotiates a subprotocol by selecting the first match in this list with a protocol requested by the client. | `nil`           |
| Origins           | `[]string`      | Origins is a string slice of origins that are acceptable, by default all origins are allowed.                                                                                                                                    | `[]string{"*"}` |
| ReadBufferSize    | `int`           | ReadBufferSize specify I/O buffer sizes in bytes.                                                                                                                                                                                | `1024`          |
| WriteBufferSize   | `int`           | WriteBufferSize specify I/O buffer sizes in bytes.                                                                                                                                                                               | `1024`          |
| EnableCompression | `bool`          | EnableCompression specify if the server should attempt to negotiate per message compression \(RFC 7692\)                                                                                                                       | `false`         |

**示例**

```go
package main

import 
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

**安装**

```bash
go get -u github.com/gofiber/requestid
```

**Signature**

```go
requestid.New(config ...Config) func(*Ctx)
```

**配置**

| 属性        | 类型                        | 说明                                              | 默认                           |
|:--------- |:------------------------- |:----------------------------------------------- |:---------------------------- |
| Filter    | `func(*fiber.Ctx) bool`   | 定义跳过中间件的函数                                      | `nil`                        |
| Generator | `func(*fiber.Ctx) string` | Generator defines a function to generate an ID. | `return uuid.New().String()` |

**示例**

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

**安装**

```bash
go get -u github.com/gofiber/helmet
```

**Signature**

```go
helmet.New(config ...Config) func(*Ctx)
```

**配置**

| 属性                    | 类型                      | 说明                                                                                                                                                                                                                                                                                                                             | 默认               |
|:--------------------- |:----------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:---------------- |
| Filter                | `func(*fiber.Ctx) bool` | 定义跳过中间件的函数                                                                                                                                                                                                                                                                                                                     | `nil`            |
| XSSProtection         | `string`                | XSSProtection provides protection against cross-site scripting attack \(XSS\) by setting the `X-XSS-Protection` header.                                                                                                                                                                                                      | `1; mode=block"` |
| ContentTypeNosniff    | `string`                | ContentTypeNosniff provides protection against overriding Content-Type header by setting the `X-Content-Type-Options` header.                                                                                                                                                                                                  | `"nosniff"`      |
| XFrameOptions         | `string`                | XFrameOptions can be used to indicate whether or not a browser should be allowed to render a page in a ,  or . Sites can use this to avoid clickjacking attacks, by ensuring that their content is not embedded into other sites.provides protection against clickjacking. Possible values: `SAMEORIGIN, DENY, ALLOW-FROM uri` | `"SAMEORIGIN"`   |
| HSTSMaxAge            | `int`                   | HSTSMaxAge sets the `Strict-Transport-Security` header to indicate how long \(in seconds\) browsers should remember that this site is only to be accessed using HTTPS. This reduces your exposure to some SSL-stripping man-in-the-middle \(MITM\) attacks.                                                                | `0`              |
| HSTSExcludeSubdomains | `bool`                  | HSTSExcludeSubdomains won't include subdomains tag in the `Strict Transport Security` header, excluding all subdomains from security policy. It has no effect unless HSTSMaxAge is set to a non-zero value.                                                                                                                    | `false`          |
| ContentSecurityPolicy | `string`                | ContentSecurityPolicy sets the `Content-Security-Policy` header providing security against cross-site scripting \(XSS\), clickjacking and other code injection attacks resulting from execution of malicious content in the trusted web page context                                                                         | `""`             |
| CSPReportOnly         | `bool`                  |                                                                                                                                                                                                                                                                                                                                | `false`          |
| HSTSPreloadEnabled    | `bool`                  |                                                                                                                                                                                                                                                                                                                                | `false`          |
| ReferrerPolicy        | `string`                |                                                                                                                                                                                                                                                                                                                                | `""`             |

**示例**

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

**示例**

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

