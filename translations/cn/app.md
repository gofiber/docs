---
description: 用于表示Fiber应用程序的实例。
---

# 🚀 应用程序

## New

此方法创建一个新的 **App** 实例。 您可以在创建时传入可选的[配置项](app.md#settings)

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

## 配置

当调用 `New` 时，您可以传入应用设置。

{% code title="Example" %}
```go
func main() {
    // Pass Settings creating a new instance
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

| 属性                        | 类型              | 说明                                                                                                                                                                        | 默认                |
|:------------------------- |:--------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------- |
| Prefork                   | `bool`          | 启用[`SO_REUSEPORT`](https://lwn.net/Articles/542629/) socket 选项。 这将生成多个Go进程用于监听同一个端口。 了解更多关于 [socket 分片](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/)。 | `false`           |
| ServerHeader              | `string`        | 启用 `Server` HTTP 头字段并设置为传入的值。                                                                                                                                             | `""`              |
| StrictRouting             | `bool`          | 如果启用，路由器将区分 `/foo` 和 `/foo/` 为不同的路由。 否则，路由器将视 `/foo` 和 `/foo/` 为相同的路由。                                                                                                    | `false`           |
| CaseSensitive             | `bool`          | 启用时， `/Foo` 和 `/foo` 是不同的路由。 当禁用时， `/Foo` 和 `/foo` 将被视为同一个路由。                                                                                                             | `false`           |
| Immutable                 | `bool`          | 如果启用，上下文 context 方法返回的所有值都是不可变的。 默认情况下，直到您从处理器返回前，它们都是有效的，请查看问题 [\#185](https://github.com/gofiber/fiber/issues/185)。                                                   | `false`           |
| BodyLimit                 | `int`           | 设置请求实体的最大允许限制，如果大小超过配置的限制， 发送 `413 - Request Entity Too Large` 请求实体太大的响应。                                                                                                 | `4 * 1024 * 1024` |
| CompressedFileSuffix      | `string`        | 在原始文件名后添加指定后缀，并尝试用新的文件名保存生成的压缩文件。                                                                                                                                         | `".fiber.gz"`     |
| Concurrency               | `int`           | 设置并发联接的最大个数。                                                                                                                                                              | `256 * 1024`      |
| DisableKeepalive          | `bool`          | 禁用保持存活连接，服务器将在向客户端发送首次响应后关闭传入的连接。                                                                                                                                         | `false`           |
| DisableDefaultDate        | `bool`          | 当设置为 true 时，默认日期头字段 date header 将被排除在响应之外。                                                                                                                                | `false`           |
| DisableDefaultContentType | `bool`          | 当设置为 true时，默认内容类型头字段 Content-Type header 将被排除在响应之外。                                                                                                                       | `false`           |
| DisableStartupMessage     | `bool`          | 当设置为 true时，它将不会在日志中打印 fiber 的 ASCII 图像和信息“监听”。                                                                                                                            | `false`           |
| DisableHeaderNormalizing  | `bool`          | 默认情况下，会对所有的首部名进行标准化，例如：conteNT-tYPE -&gt; Content-Type                                                                                                              | `false`           |
| ETag                      | `bool`          | 启用或禁用 ETag 头字段，这是因为弱 Etags 和 强 Etags 都是使用相同的散列（哈希）方法 \(CRC-32\)。 启用时，默认使用弱 ETags。                                                                                       | `false`           |
| Templates                 | `Templates`     | 模板是用于包装渲染函数的接口。 查看我们的 [**模板中间件**](middleware.md#template) 获取支持的引擎。                                                                                                        | `nil`             |
| ReadTimeout               | `time.Duration` | 读取请求最大允许的时间 （包括读取 body）。 默认无超时限制。                                                                                                                                         | `nil`             |
| WriteTimeout              | `time.Duration` | 写出响应最大允许的时间。默认无超时限制。 默认无超时限制。                                                                                                                                             | `nil`             |
| IdleTimeout               | `time.Duration` | 开启保持存活时，等待下一次请求的最大允许时间。 如果IdleTimeout为零，则使用ReadTimeout的值。                                                                                                                 | `nil`             |

## 静态服务

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
// Serve files from "./public" directory:
app.Static("/", "./public")

// Serve files from "./files" directory:
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

如果您想要更多控制静态文件的设置， 您可以使用 `fiber.Static` 结构体进行具体配置。

{% code title="fiber.Static{}" %}
```go
// Static represents settings for serving static files
type Static struct {
    // Transparently compresses responses if set to true
    // This works differently than the github.com/gofiber/compression middleware
    // The server tries minimizing CPU usage by caching compressed files.
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

## HTTP 方法

路由一个 HTTP 请求，其中 **METHOD** 是请求的 [HTTP 方法](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

{% code title="Signatures" %}
```go
// Add allows you to specifiy a method as value
app.Add(method, path string, handlers ...func(*Ctx)) *Route

// All will register the route on all methods
app.All(path string, handlers ...func(*Ctx)) []*Route

// HTTP methods
app.Get(path string, handlers ...func(*Ctx)) *Route
app.Put(path string, handlers ...func(*Ctx)) *Route
app.Post(path string, handlers ...func(*Ctx)) *Route
app.Head(path string, handlers ...func(*Ctx)) *Route
app.Patch(path string, handlers ...func(*Ctx)) *Route
app.Trace(path string, handlers ...func(*Ctx)) *Route
app.Delete(path string, handlers ...func(*Ctx)) *Route
app.Connect(path string, handlers ...func(*Ctx)) *Route
app.Options(path string, handlers ...func(*Ctx)) *Route

// Use is mostly used for middleware modules
// These routes will only match the beggining of each path
// i.e. "/john" will match "/john/doe", "/johnnnn"
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

## 分组

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

## 路由

Routes 方法会返回所有已注册的路由

{% code title="Signature" %}
```go
app.Routes() []*Route
```
{% endcode %}

{% code title="Example" %}
```go
app := fiber.New()

handler := func(c *fiber.Ctx) { }

app.Get("/sample", handler)
app.Post("/john", handler)
app.Put("/doe", handler)

for _, r := range app.Routes() {
    fmt.Printf("%s\t%s\n", r.Method, r.Path)
}
// GET      /sample
// POST     /john
// PUT      /doe
```
{% endcode %}

## Listen

绑定监听地址，接受连接。 可以接受 `int` 类型参数指定监听端口，也可以传入 `string` 类型指定具体地址。

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

如果想要开启 **TLS/HTTPS**，可以在创建时追加一份 [**TLS 配置**](https://golang.org/pkg/crypto/tls/#Config)。

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

您可以传入自定义的 [`net.Listener`](https://golang.org/pkg/net/#Listener) using the `Serve` method.

{% code title="Signature" %}
```go
app.Serve(ln net.Listener, tls ...*tls.Config) error
```
{% endcode %}

{% hint style="warning" %}
**Serve** does not support the [**Prefork**](app.md#settings) feature.
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

Testing your application is done with the **Test** method. Use this method for creating `_test.go` files or when you need to debug your routing logic. The default timeout is `200ms` if you want to disable a timeout completely, pass `-1` as a second argument.

{% code title="Signature" %}
```go
app.Test(req *http.Request, msTimeout ...int) (*http.Response, error)
```
{% endcode %}

{% code title="Example" %}
```go
// Create route with GET method for test:
app.Get("/", func(c *Ctx) {
  fmt.Println(c.BaseURL())              // => http://google.com
  fmt.Println(c.Get("X-Custom-Header")) // => hi

  c.Send("hello, World!")
})

// http.Request
req := httptest.NewRequest("GET", "http://google.com", nil)
req.Header.Set("X-Custom-Header", "hi")

// http.Response
resp, _ := app.Test(req)

// Do something with results:
if resp.StatusCode == 200 {
  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println(string(body)) // => Hello, World!
}
```
{% endcode %}

