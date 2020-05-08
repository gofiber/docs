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

| 属性           | 类型                          | 说明                | 默认           |
|:------------ |:--------------------------- |:----------------- |:------------ |
| Filter       | `func(*fiber.Ctx) bool`     | 定义跳过中间件的函数        | `nil`        |
| Users        | `map[string][string]`       | 用户定义允许的凭据         | `nil`        |
| Realm        | `string`                    | Realm 是定义领域属性的字符串 | `Restricted` |
| Authorizer   | `func(string, string) bool` | 一个用以检查凭据的自定义函数    | `nil`        |
| Unauthorized | `func(*fiber.Ctx)`          | 未经授权响应的自定义响应体     | `nil`        |

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
| AllowCredentials | `string`          | 允许凭据属性用以表示当标记为 true 时，是否可以将对请求的响应暴露。 当作为预检请求响应的一部分时，这表示是否可以使用凭据发出实际的请求。 | `nil`                                                       |
| ExposeHeaders    | `[]string`        | 定义允许客户端访问的白名单头字段。                                                       | `nil`                                                       |
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

## Template

默认情况下，Fiber 有 [**默认的 HTML 模版**](https://golang.org/pkg/html/template/) 引擎，但这个中间件包含第三方渲染引擎。

**Installation**

```bash
go get -u github.com/gofiber/template
```

**Signature**

```go
template.Engine() func(raw string, bind interface{}) (out string, err error)
```

**模板引擎**

| 关键词            | 引擎                                                                   |
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

Fiber 支持 Websocket 升级中间件。 `*Conn` 结构具有来自 [**gorilla/websocket**](https://github.com/gorilla/websocket) 库的所有功能。

**安装**

```bash
go get -u github.com/gofiber/websocket
```

**Signature**

```go
websocket.New(handler func(*Conn), config ...Config) func(*Ctx)
```

**配置**

| 属性                | 类型              | 说明                                                              | 默认              |
|:----------------- |:--------------- |:--------------------------------------------------------------- |:--------------- |
| HandshakeTimeout  | `time.Duration` | 指定完成握手的时间。                                                      | `0`             |
| Subprotocols      | `[]string`      | 指定服务器支持的协议按首选项顺序排列。 如果此字段不是nil, 升级方法将选择此列表中的第一个与客户端请求协议所匹配的子协议。 | `nil`           |
| Origins           | `[]string`      | 定义可接受的站点，默认允许所有站点。                                              | `[]string{"*"}` |
| ReadBufferSize    | `int`           | ReadBufferSize 读取缓冲以字节形式指定 I/O 缓冲区大小。                           | `1024`          |
| WriteBufferSize   | `int`           | WriteBufferSize 写入缓冲以字节形式指定 I/O 缓冲区大小。                          | `1024`          |
| EnableCompression | `bool`          | 表示服务器是否应尝试压缩每个消息 \(RFC 7692\)                                 | `false`         |

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
    // Websocket 逻辑...
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

使用 `X-Request-ID` 头字段为请求添加标识符。

**安装**

```bash
go get -u github.com/gofiber/requestid
```

**Signature**

```go
requestid.New(config ...Config) func(*Ctx)
```

**配置**

| 属性        | 类型                        | 说明             | 默认                           |
|:--------- |:------------------------- |:-------------- |:---------------------------- |
| Filter    | `func(*fiber.Ctx) bool`   | 定义跳过中间件的函数     | `nil`                        |
| Generator | `func(*fiber.Ctx) string` | 生成器定义了生成ID的函数。 | `return uuid.New().String()` |

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

头盔中间件提供保护以防止跨站脚本\(XSS\)攻击、内容类型嗅探攻击、点击劫持、不安全的连接和其他代码注入攻击。

**安装**

```bash
go get -u github.com/gofiber/helmet
```

**Signature**

```go
helmet.New(config ...Config) func(*Ctx)
```

**配置**

| 属性                    | 类型                      | 说明                                                                                                                                              | 默认               |
|:--------------------- |:----------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------- |:---------------- |
| Filter                | `func(*fiber.Ctx) bool` | 定义跳过中间件的函数                                                                                                                                      | `nil`            |
| XSSProtection         | `string`                | XSSProtection 通过设置 `X-XSS-Protection` 头字段来提供保护，免遭跨地点脚本攻击 \(XSS\)。                                                                             | `1; mode=block"` |
| ContentTypeNosniff    | `string`                | ContentTypeNosniff 通过设置 `X-Content-Type-Options` 头字段提供保护，免受覆盖Content-Type 头字段的影响。                                                               | `"nosniff"`      |
| XFrameOptions         | `string`                | XFrameworkOptions 可以用来表示是否允许浏览器在 `frame`, `iframe`, `embed` 或 `object ` 中渲染。 这可以避免点击劫持，确保内容不会被嵌入到其他站点。 允许的值： `SAMEORIGIN, DENY, ALLOW-FROM uri` | `"SAMEORIGIN"`   |
| HSTSMaxAge            | `int`                   | HSTSMaxAge 设置 `Strict-Transport-Security` 头字段来指示浏览器应该记住这个网站多久\(秒\) 以 HTTPS 访问。 这可以减少您暴露在 SSL 中间人攻击的风险\(MITM\)。                              | \`\`         |
| HSTSExcludeSubdomains | `bool`                  | HSTSExclusdeSubdomains 不会在 `Strict Transport Security` 头字段中包含子域标签，将从安全策略中排除所有子域。 除非HSTSMaxAge设置为非零值，否则它不会生效。                                    | \`\`         |
| ContentSecurityPolicy | `string`                | ContentSecurityPolicy 设置了 `Content-Security-Policy` 头字段来避免在受信任的网页环境中执行了恶意内容而导致的影响，可以防止跨网站脚本攻击 \(XSS\)，点击劫持和其他代码注入攻击。                          | \`\`         |
| CSPReportOnly         | `bool`                  |                                                                                                                                                 | \`\`         |
| HSTSPreloadEnabled    | `bool`                  |                                                                                                                                                 | \`\`         |
| ReferrerPolicy        | `string`                |                                                                                                                                                 | \`\`         |

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

