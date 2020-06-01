---
description: 用于表示Fiber应用程序的实例。
---

# 🚀 应用程序

## New

This method creates a new **App** named instance. You can pass optional [settings ](application.md#settings)when creating a new instance

{% code title="Signature" %}
```go
fiber.New(settings ...*Settings) *App
```
{% endcode %}

{% code title="Example" %}
```go
package main

import "github.com/gofiber/fiber"

func main() {
    app := fiber.New()

    // ...

    app.Listen(3000)
}
```
{% endcode %}

## Settings

当调用 `New` 时，您可以传入应用设置。

{% code title="Example" %}
```go
func main() {
    // 在创建app实例时传入设置 Settings
    app := fiber.New(&fiber.Settings{
        Prefork:       true,
        CaseSensitive: true,
        StrictRouting: true,
        ServerHeader:  "Fiber",
    })

    // ...

    app.Listen(3000)
}
```
{% endcode %}

或者在初始化 `app` 后更改设置。

{% code title="Example" %}
```go
func main() {
    app := fiber.New()

    // Or change Settings after creating an instance
    app.Settings.Prefork = true
    app.Settings.CaseSensitive = true
    app.Settings.StrictRouting = true
    app.Settings.ServerHeader = "Fiber"

    // ...

    app.Listen(3000)
}
```
{% endcode %}

**设置** **字段**

| 属性                        | 类型              | 说明                                                                                                                                                                            | 默认                |
|:------------------------- |:--------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------- |
| Prefork                   | `bool`          | 启用[`SO_REUSEPORT`](https://lwn.net/Articles/542629/) socket 选项。 这将生成多个Go进程用于监听同一个端口。 了解更多关于 [socket 分片](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/)。     | `false`           |
| ServerHeader              | `string`        | 启用 `Server` HTTP 头字段并设置为传入的值。                                                                                                                                                 | `""`              |
| StrictRouting             | `bool`          | 如果启用，路由器将区分 `/foo` 和 `/foo/` 为不同的路由。 否则，路由器将视 `/foo` 和 `/foo/` 为相同的路由。                                                                                                        | `false`           |
| CaseSensitive             | `bool`          | 启用时， `/Foo` 和 `/foo` 是不同的路由。 当禁用时， `/Foo` 和 `/foo` 将被视为同一个路由。                                                                                                                 | `false`           |
| Immutable                 | `bool`          | 如果启用，上下文 context 方法返回的所有值都是不可变的。 默认情况下，直到您从处理器返回前，它们都是有效的，请查看问题 [\#185](https://github.com/gofiber/fiber/issues/185)。                                                       | `false`           |
| BodyLimit                 | `int`           | 设置请求实体的最大允许限制，如果大小超过配置的限制， 发送 `413 - Request Entity Too Large` 请求实体太大的响应。                                                                                                     | `4 * 1024 * 1024` |
| Concurrency               | `int`           | 设置并发联接的最大个数。                                                                                                                                                                  | `256 * 1024`      |
| DisableKeepalive          | `bool`          | 禁用保持存活连接，服务器将在向客户端发送首次响应后关闭传入的连接。                                                                                                                                             | `false`           |
| DisableDefaultDate        | `bool`          | 当设置为 true 时，默认日期头字段 date header 将被排除在响应之外。                                                                                                                                    | `false`           |
| DisableDefaultContentType | `bool`          | 当设置为 true时，默认内容类型头字段 Content-Type header 将被排除在响应之外。                                                                                                                           | `false`           |
| DisableStartupMessage     | `bool`          | 当设置为 true时，它将不会在日志中打印 fiber 的 ASCII 图像和信息“监听”。                                                                                                                                | `false`           |
| DisableHeaderNormalizing  | `bool`          | By default all header names are normalized: conteNT-tYPE -&gt; Content-Type                                                                                             | `false`           |
| ETag                      | `bool`          | Enable or disable ETag header generation, since both weak and strong etags are generated using the same hashing method \(CRC-32\). Weak ETags are the default when enabled. | `false`           |
| Templates                 | `Templates`     | Templates is the interface that wraps the Render function. See our [**Template Middleware**](middleware.md#template) for supported engines.                                   | `nil`             |
| ReadTimeout               | `time.Duration` | The amount of time allowed to read the full request including body. 默认无超时限制。                                                                                                  | `nil`             |
| WriteTimeout              | `time.Duration` | The maximum duration before timing out writes of the response. 默认无超时限制。                                                                                                       | `nil`             |
| IdleTimeout               | `time.Duration` | The maximum amount of time to wait for the next request when keep-alive is enabled. If IdleTimeout is zero, the value of ReadTimeout is used.                                 | `nil`             |

## Static

使用 **Static** 静态方法来为提供静态文件，例如 **图片**, **CSS** 和 **JavaScript**。

{% hint style="info" %}
默认情况下，**Static** 方法将自动以目录下的 `index.html` 文件作为请求某个目录的响应。
{% endhint %}

{% code title="Signature" %}
```go
app.Static(prefix, root string, config ...Static) // => with prefix
```
{% endcode %}

使用以下代码提供在 `./public` 路径下的文件。

{% code title="Example" %}
```go
app.Static("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```
{% endcode %}

您可以多次使用 **Static** 用于提取多个目录路径下的文件。

{% code title="Example" %}
```go
// 从 "./public" 路径提供文件：
app.Static("/", "./public")

// 从 "./files" 路径提供文件：
app.Static("/", "./files")
```
{% endcode %}

{% hint style="info" %}
使用反向代理缓存，如 [**NGINX**](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/) 来提高读取静态文件的性能。
{% endhint %}

您可以使用任意的虚拟路径前缀 \(_该路径实际上不存在于系统_\) 来提取通过  **Static** 方法提供的静态文件, 只需指定如下所示的静态文件目录路缀即可：

{% code title="Example" %}
```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```
{% endcode %}

如果您想要更多控制静态文件的设置， 您可以使用 `fiber.static` struct 来启用特定的设置。

{% code title="fiber.Static{}" %}
```go
// Static 表示提供静态文件的配置
type Static struct {
    // 自动压缩响应，如果设为 true
    // 原理实现和 github.com/gofiber/compression middleware 的不同
    // 伺服器会尝试通过缓存压缩的文件以减少 CPU 的使用。
    // 它会将“.fiber.gz”后缀添加到原文件名。
    // 可选的。 默认值 false
    Compress bool
    // 如果设置为 true，启用字节 byte 范围请求。
    // 可选的。 默认值 false
    ByteRange bool
    // 启用目录浏览。
    // 可选的。 默认值 false
    Browse bool
    // 目录路径的索引文件。
    // 可选的。 默认值"index.html"
    Index string
}
```
{% endcode %}

{% code title="Example" %}
```go
app.Static("/", "./public", fiber.Static{
  Compress:   true,
  ByteRange:  true,
  Browse:     true,
  Index:      "john.html"
})
```
{% endcode %}

## HTTP Methods

路由一个 HTTP 请求，其中 **METHOD** 是请求的 [HTTP 方法](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

{% code title="Signatures" %}
```go
// HTTP 方法支持 :param 参数, :optional？可选项 and *wildcards
// 您需要为每个HTTP方法传入一个路径
app.All(path string, handlers ...func(*Ctx)) []*Route
app.Get
app.Put
app.Post
app.Head
app.Patch
app.Trace
app.Delete
app.Connect
app.Options

// Use() 只会匹配前段路径
// 例如： "/john" 会匹配 "/john/doe", "/johnnnn"
// Use() 不支持参数（:param） & 可选项（:optional?） 在路径使用
app.Use(handlers ...func(*Ctx)) *Route
app.Use(prefix string, handlers ...func(*Ctx)) *Route
```
{% endcode %}

{% code title="Example" %}
```go
app.Use("/api", func(c *fiber.Ctx) {
  c.Set("X-Custom-Header", random.String(32))
  c.Next()
})
app.Get("/api/list", func(c *fiber.Ctx) {
  c.Send("I'm a GET request!")
})
app.Post("/api/register", func(c *fiber.Ctx) {
  c.Send("I'm a POST request!")
})
```
{% endcode %}

## Group

您可以通过创建 `*Group` struct 结构来为路由分组。

**Signature**

```go
app.Group(prefix string, handlers ...func(*Ctx)) *Group
```

**示例**

```go
func main() {
  app := fiber.New()

  api := app.Group("/api", handler)  // /api

  v1 := api.Group("/v1", handler)   // /api/v1
  v1.Get("/list", handler)          // /api/v1/list
  v1.Get("/user", handler)          // /api/v1/user

  v2 := api.Group("/v2", handler) // /api/v2
  v2.Get("/list", handler)          // /api/v2/list
  v2.Get("/user", handler)          // /api/v2/user

  app.Listen(3000)
}
```

## Listen

绑定和监听指定地址的连接。 可以是 `int` 类型（端口）或 `string` 类型（地址）。

{% code title="Signature" %}
```go
app.Listen(address interface{}, tls ...*tls.Config) error
```
{% endcode %}

{% code title="Examples" %}
```go
app.Listen(8080)
app.Listen("8080")
app.Listen(":8080")
app.Listen("127.0.0.1:8080")
```
{% endcode %}

要启用 **TLS/HTTPS** ，您可以添加一个 [**TLS 配置**](https://golang.org/pkg/crypto/tls/#Config)

{% code title="Example" %}
```go
cer, err := tls.LoadX509KeyPair("server.crt", "server.key")
if err != nil {
    log.Fatal(err)
}
config := &tls.Config{Certificates: []tls.Certificate{cer}}

app.Listen(443, config)
```
{% endcode %}

## Serve

您可以通过自己的 [`net.Listener`](https://golang.org/pkg/net/#Listener) 使用 `Serve` 方法。

{% code title="Signature" %}
```go
app.Serve(ln net.Listener, tls ...*tls.Config) error
```
{% endcode %}

{% hint style="warning" %}
**Serve** does not support the [**Prefork**](application.md#settings) feature.
{% endhint %}

{% code title="Example" %}
```go
if ln, err = net.Listen("tcp4", ":8080"); err != nil {
    log.Fatal(err)
}

app.Serve(ln)
```
{% endcode %}

## Test

通过 **Test** 方法可以测试您的应用程序。 使用此方法可以用于创建 `_test.go` 文件或当您需要调试路由逻辑也可使用。 默认超时限制是 `200ms` 如果您想要完全禁用超时限制，可以通过传入 `-1` 作为第二个参数。

{% code title="Signature" %}
```go
app.Test(req *http.Request, msTimeout ...int) (*http.Response, error)
```
{% endcode %}

{% code title="Example" %}
```go
// 创建GET方法的路由用以测试:
app.Get("/", func(c *Ctx) {
  fmt.Println(c.BaseURL())              // => http://google.com
  fmt.Println(c.Get("X-Custom-Header")) // => hi

  c.Send("hello, World!")
})

// http.Request 请求
req, _ := http.NewRequest("GET", "http://google.com", nil)
req.Header.Set("X-Custom-Header", "hi")

// http.Response 响应
resp, _ := app.Test(req)

// 处理返回结果:
if resp.StatusCode == 200 {
  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println(string(body)) // => Hello, World!
}
```
{% endcode %}

