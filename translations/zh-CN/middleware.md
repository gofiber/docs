---
description: >-
    中间件是一个链接在HTTP请求周期中的函数，可以访问
    上下文，它用来执行特定的操作，例如，记录每一个
    请求或启用CORS。
---

# 🧬 中间件

## BasicAuth

基本身份验证中间件提供HTTP基本身份验证。它为有效凭证调用下一个处理程序，为丢失或无效凭证调用"401 - Unauthorized"。

**签名**

```go
middleware.BasicAuth(config ...BasicAuthConfig) func(*Ctx)
```

**配置**

| 属性 | 类型 | 描述 | 默认值 |
| :--- | :--- | :--- | :--- |
| Skip | `func(*Ctx) bool` | 定义要跳过中间件的函数 | `nil` |
| Users | `map[string][string]` | 定义允许的凭据 | `nil` |
| Realm | `string` | 是定义Realm属性的字符串 | `Restricted` |

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

CORS中间件实现CORS规范。CORS为web服务器提供跨域访问控制，从而支持安全的跨域数据传输。

**签名**

```go
middleware.CORS(config ...CORSConfig) func(*Ctx)
```

**配置**

| 属性 | 类型 | 描述 | 默认值 |
| :--- | :--- | :--- | :--- |
| Skip | `func(*Ctx) bool` | 定义要跳过中间件的函数 | `nil` |
| AllowOrigins | `[]string` | 定义了一个可以访问资源的源列表。 | `[]string{"*"}` |
| AllowMethods | `[]string` | 定义了访问资源时允许的列表方法。 | `[]string{"GET","POST","HEAD","PUT","DELETE","PATCH"}` |
| AllowHeaders | `[]string` | 定义了一个请求头列表，在发出实际请求时可以使用这个列表。 | `nil` |
| AllowCredentials | `string` | 指示在凭据标志为真时是否可以公开对请求的响应。 | `nil` |
| ExposeHeaders | `[]string` | 定义了一个允许客户访问的白名单头。 | `nil` |
| MaxAge | `int` | 请求的结果可以缓存多长时间(以秒为单位)。 | `0` |

**示例**

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

用于限制对公共api和/或端点(如密码重置)的重复请求。此中间件不与其他进程/服务器共享状态。

**Signature**

```go
middleware.Limiter(config ...LimiterConfig) func(*Ctx)
```

**配置**

<table>
  <thead>
    <tr>
      <th style="text-align:left">属性</th>
      <th style="text-align:left">类型</th>
      <th style="text-align:left">描述</th>
      <th style="text-align:left">默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Skip</td>
      <td style="text-align:left"><code>func(*Ctx) bool</code>
      </td>
      <td style="text-align:left">定义要跳过中间件的函数</td>
      <td style="text-align:left"><code>nil</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Timeout</td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">超时(秒):在内存中保存请求记录的时间</td>
      <td
      style="text-align:left"><code>60</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">Max</td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">在发送429个响应之前的超时内的最大连接数</td>
      <td style="text-align:left"><code>10</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Message</td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left">响应体内容</td>
      <td style="text-align:left"><code>&quot;Too many requests, please try again later.&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">StatusCode</td>
      <td style="text-align:left"><code>int</code>
      </td>
      <td style="text-align:left">响应状态码</td>
      <td style="text-align:left"><code>429</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Key</td>
      <td style="text-align:left"><code>func(*Ctx) string</code>
      </td>
      <td style="text-align:left">允许使用自定义处理程序来创建自定义Key</td>
      <td style="text-align:left"><code>func(c *fiber.Ctx) string { <br/>&nbsp&nbsp&nbsp&nbsp return c.IP()<br/> }</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Handler</td>
      <td style="text-align:left"><code>func(*Ctx)</code>
      </td>
      <td style="text-align:left">当请求达到限制时调用处理程序。</td>
      <td style="text-align:left"><code>func(c *fiber.Ctx) { <br/>&nbsp&nbsp&nbsp&nbsp c.Status(cfg.StatusCode).SendString(cfg.Message)<br/> }</code>
      </td>
    </tr>
  </tbody>
</table>

**示例**

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

日志中间件记录关于每个HTTP请求的信息。

**签名**

```go
middleware.Logger(config ...LoggerConfig) func(*Ctx)
```

**配置**

| 属性 | 类型 | 描述 | 默认值 |
| :--- | :--- | :--- | :--- |
| Format | `string` | 可能的值: `time, ip, url, host, method, path, protocol, referer, ua, header:<key>, query:<key>, form:<key>, cookie:<key>` | `"${time} - ${ip} - ${method} ${path}\t${ua}\n"` |
| TimeFormat | `string` | 时间格式化 [https://programming.guide/go/format-parse-string-time-date-example.html](https://programming.guide/go/format-parse-string-time-date-example.html) | `15:04:05` |
| Output | `io.Writer` | 写入日志的写入器 | `os.Stderr` |

**示例**

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

你可以从任何路由的panic错误中恢复。默认情况下，恢复中间件将在发生紧急情况时响应`500 Internal Server Error`。您还可以提供自己的错误处理程序。

**签名**

```go
middleware.Recover(handle ...func(*Ctx, error)) func(*Ctx)
```

**示例**

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

RequestID使用`X-Request-ID`头向请求添加一个标识符。

**签名**

```go
middleware.RequestID(config ...RequestIDConfig) func(*Ctx)
```

**配置**

| 属性 | 类型 | 描述 | 默认值 |
| :--- | :--- | :--- | :--- |
| Skip | `func(*Ctx) bool` | 定义要跳过中间件的函数 | `nil` |
| Generator | `func(*Ctx) bool` | 生成器定义一个函数来生成ID。 | `return uuid.New().String()` |

**示例**

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

Helmet中间件提供了对跨站点脚本攻击、内容类型嗅探、点击劫持、不安全连接和其他代码注入攻击的保护。

**签名**

```go
middleware.Helmet(config ...HelmetConfig) func(*Ctx)
```

**配置**

| 属性 | 类型 | 描述 | 默认值 |
| :--- | :--- | :--- | :--- |
| Skip | `func(*Ctx) bool` | 定义要跳过中间件的函数。 | `nil` |
| XSSProtection | `string` | 通过设置`X-XSS-Protection`标头来提供对跨站点脚本攻击的保护。 | `1; mode=block"` |
| ContentTypeNosniff | `string` | 通过设置`X-Content-Type-Options`头来提供对覆盖内容类型标头的保护。 | `"nosniff"` |
| XFrameOptions | `string` | 指示是否应允许浏览器在中呈现页面 网站可以利用这一点来避免点击劫持攻击，通过确保他们的内容没有嵌入到其他网站。 可能的值: `SAMEORIGIN, DENY, ALLOW-FROM uri` | `"SAMEORIGIN"` |
| HSTSMaxAge | `int` | 设置了 `Strict-Transport-Security` 标头，以指示浏览器应该多长时间(以秒为单位)记住只能使用HTTPS访问此站点。这减少了您受到一些 SSL-stripping man-in-the-middle (MITM)攻击的风险。 | \`\` |
| HSTSExcludeSubdomains | `bool` | 将所有子域从安全策略中排除。除非将HSTSMaxAge设置为非零值，否则它没有任何作用。 | \`\` |
| ContentSecurityPolicy | `string` | 设置`Content-Security-Policy`头 | \`\` |
| CSPReportOnly | `bool` |  | \`\` |
| HSTSPreloadEnabled | `bool` |  | \`\` |
| ReferrerPolicy | `string` |  | \`\` |

**示例**

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

