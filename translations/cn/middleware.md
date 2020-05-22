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
| Format     | `string`                | 定义日志输出格式。可用的值： `time, ip, url, host, method, path, protocol, referer, ua, header:<key>, quer:<key>, form:<key>, cookie:<key>` | `"${time} - ${ip} - ${method} ${path}\t${ua}\n"` |
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

Session 中间件是 session 的 go 实现，该中间件可以让 Fiber 维护用户的 ID 信息，并且存储与之相关的数据，session 主要用于浏览器请求场景。 中间件默认使用 `memory` provider 来存储 session 信息，此外，我们还提供了 memcache、MySQL、Postgres、Redis 和 SQLite3 等这些 provider 作为候选方案。

**Installation**

```bash
go get -u github.com/gofiber/session
```

**Signature**

```go
session.New(config ...session.Config) *Session
```

**配置**

| 属性         | 类型              | 说明                                                                                             | 默认                    |
|:---------- |:--------------- |:---------------------------------------------------------------------------------------------- |:--------------------- |
| Lookup     | `string`        | 获取 session id 的方式，可以使用的值有：`cookie:key`、`header:key` 或 `query:key`                              | `"cookie:session_id"` |
| Domain     | `string`        | session id 一般通过 cookie 设置，该字段用于设置 cookie 的 domain 属性                                           | `""`                  |
| Expiration | `time.Duration` | 定义 session 过期时间，`0` 表示不会过期（实际上 24 年过期），`-1` 表示浏览器关闭后过期，`>0` 的值通过 time.Duration 设置，表示具体过期时间。 | `12 * time.Hour`      |
| Secure     | `bool`          | 设置 cookie 的 secure 属性，是否只在 HTTPS 环境下发送                                                         | `false`               |
| Provider   | `Provider`      | 传入要使用的 provider                                                                                | `memory.Provider`     |
| Generator  | `func() []byte` | 定义 session id 生成器                                                                              | `uuid`                |
| GCInterval | `time.Duration` | 定义 GC（垃圾回收）周期                                                                                  | `uuid`                |

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

  // 创建 session 处理函数
  sessions := session.New()

  app.Get("/", func(c *fiber.Ctx) {
    store := sessions.Get(c)    // 获取/新建一个 session
    defer store.Save()

    store.ID()                   // 返回 session id
    store.Destroy()              // 销毁 session，包括其关联的数据和 cookie
    store.Get("john")            // 从 session 中读取数据
    store.Regenerate()           // 新生成一个 session id
    store.Delete("john")         // 将数据从 session 中删除
    store.Set("john", "doe")     // 设置数据
  })

  app.Listen(3000)
}
```

## Template

Fiber 本身自带一个[**默认的 HTML 模板**](https://golang.org/pkg/html/template/)引擎，相比之下，这个中间件包含了第三方的模板渲染引擎

**安装**

```bash
go get -u github.com/gofiber/template
```

**Signature**

```go
template.Engine() func(raw string, bind interface{}) (out string, err error)
```

**模板引擎**

| 关键字            | 模板引擎                                                                 |
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

Fiber 支持 websocket 中间件。 `*Conn` 结构体包含了 [**gorilla/websocket**](https://github.com/gorilla/websocket) 里的所有功能

**安装**

```bash
go get -u github.com/gofiber/websocket
```

**Signature**

```go
websocket.New(handler func(*Conn), config ...Config) func(*Ctx)
```

**配置**

| 属性                | 类型              | 说明                                                                                      | 默认              |
|:----------------- |:--------------- |:--------------------------------------------------------------------------------------- |:--------------- |
| HandshakeTimeout  | `time.Duration` | 握手阶段超时设置                                                                                | `0`             |
| Subprotocols      | `[]string`      | 指定支持的协议，优先级按照定义顺序。 如果该设置不为空，在调用 Upgrade 方法时，会根据客户端指定的协议从列表中选出第一个符合的 subprotocol 作为协商结果。 | `nil`           |
| Origins           | `[]string`      | 指定哪些只允许接受哪些 origin 的 websocket 请求，默认不作限制。                                               | `[]string{"*"}` |
| ReadBufferSize    | `int`           | 指定“读缓存”的大小，单位为字节                                                                        | `1024`          |
| WriteBufferSize   | `int`           | 指定“写缓存”的大小                                                                              | `1024`          |
| EnableCompression | `bool`          | 是否尝试对每条消息进行压缩（依据 RFC 7692 规范）                                                           | `false`         |

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
    // Websocket 相关逻辑...
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

Request ID 为每个请求添加 `X-Request-ID` 首部，并赋予一个标识符

**安装**

```bash
go get -u github.com/gofiber/requestid
```

**Signature**

```go
requestid.New(config ...Config) func(*Ctx)
```

**配置**

| 属性        | 类型                        | 说明         | 默认                       |
|:--------- |:------------------------- |:---------- |:------------------------ |
| Filter    | `func(*fiber.Ctx) bool`   | 定义跳过中间件的函数 | `nil`                    |
| Generator | `func(*fiber.Ctx) string` | 定义 ID 生成策略 | `返回 uuid.New().String()` |

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

Helmet 中间件主要提供跨站脚本攻击（XSS）、内容嗅探（content type sniffing）、点击劫持（clickjacking）、非安全连接和其他代码注入攻击的防护。

**安装**

```bash
go get -u github.com/gofiber/helmet
```

**Signature**

```go
helmet.New(config ...Config) func(*Ctx)
```

**配置**

| 属性                    | 类型                      | 说明                                                                                                                                                                                                                                                     | 默认               |
|:--------------------- |:----------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:---------------- |
| Filter                | `func(*fiber.Ctx) bool` | 定义跳过中间件的函数                                                                                                                                                                                                                                             | `nil`            |
| XSSProtection         | `string`                | 通过设置 `X-XSS-Protection` 首部提供 XSS 防护                                                                                                                                                                                                                    | `1; mode=block"` |
| ContentTypeNosniff    | `string`                | 通过设置 `X-Content-Type-Options` 首部防护 Content-Type 首部篡改。                                                                                                                                                                                                  | `"nosniff"`      |
| XFrameOptions         | `string`                | XFrameOptions 设置是否允许页面被嵌入到 &ltframe&gt、&ltiframe&gt 或 &ltobject&gt 中。 网站可以设置此选项来防止点击劫持，主要通过防止网站页面被嵌入到其他站点。 可选值：`SAMEORIGIN、DENY、ALLOW-FROM uri`                                                                                                        | `"SAMEORIGIN"`   |
| HSTSMaxAge            | `int`                   | 设置 `Strict-Transport-Security` 首部，让浏览器记住在多长时间内（秒为单位）都要使用 HTTPS 来访问当前网站。 这可以减少 SSL-stripping 和中间人攻击（MITM）的风险。                                                                                                                                           | `0`              |
| HSTSExcludeSubdomains | `bool`                  | 设置为 true 将会排除 `Strict Transport Security` 首部中设置的子域名，将这些子域名排除在安全策略外。 如果 HSTSMaxAge 的值不为 0，那么此字段的设置无效。                                                                                                                                                   | `false`          |
| ContentSecurityPolicy | `string`                | ContentSecurityPolicy sets the `Content-Security-Policy` header providing security against cross-site scripting \(XSS\), clickjacking and other code injection attacks resulting from execution of malicious content in the trusted web page context | `""`             |
| CSPReportOnly         | `bool`                  |                                                                                                                                                                                                                                                        | `false`          |
| HSTSPreloadEnabled    | `bool`                  |                                                                                                                                                                                                                                                        | `false`          |
| ReferrerPolicy        | `string`                |                                                                                                                                                                                                                                                        | `""`             |

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

