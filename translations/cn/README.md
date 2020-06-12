---
description: >-
  An online API documentation with examples so you can start building web apps with Fiber right away!
---

# 📖 入门指南

**Fiber** 是一个受 [Express](https://github.com/expressjs/express) 启发而生的 **网页框架**，基于 [Fasthttp](https://github.com/valyala/fasthttp)（**最快的**  [Go](https://golang.org/doc/) HTTP 引擎）而开发的。 设计初衷为 **简化** 一切以打造 **快速的** 开发环境并同时兼顾着 **零内存分配** 和 **性能为上** 的理念。

## Installation

首先， [下载](https://golang.org/dl/) 并安装 Go。 需要 `1.11` 或以上的版本。

使用 [`get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them) 命令以完成安装：

```bash
go get -u github.com/gofiber/fiber
```

## Zero Allocation

{% hint style="warning" %}
Some values returned from [**fiber.Ctx**](ctx.md) are **not** immutable by default
{% endhint %}

Because fiber is optimized for **high performance**, values returned from [**fiber.Ctx**](ctx.md) are **not** immutable by default and **will** be re-used across requests. As a rule of thumb, you **must** only use context values within the handler, and you **must not** keep any references. As soon as you return from the handler, any values you have obtained from the context will be re-used in future requests and will change below your feet. Here is an example:

```go
func handler(c *fiber.Ctx) {
    result := c.Param("foo") // result is only valid within this method
}
```

If you need to persist such values outside the handler, make copies of their **underlying buffer** using the [copy](https://golang.org/pkg/builtin/#copy) builtin. Here is an example for persisting a string:

```go
func handler(c *fiber.Ctx) {
    result := c.Param("foo") // result is only valid within this method
    newBuffer := make([]byte, len(result))
    copy(newBuffer, result)
    newResult := string(newBuffer) // newResult is immutable and valid forever
}
```

Alternatively, you can also use the[ **Immutable setting**](app.md#settings). It will make all values returned from the context immutable, allowing you to persist them anywhere. Of course, this comes at the cost of performance.

For more information, please check ****[**\#426**](https://github.com/gofiber/fiber/issues/426) and ****[**\#185**](https://github.com/gofiber/fiber/issues/185).

## Hello, World!

你可以参照以下示例创建一个最简单的 **Fiber** 应用程序。

```go
package main

import "github.com/gofiber/fiber"

func main() {
  app := fiber.New()

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Hello, World!")
  })

  app.Listen(3000)
}
```

```text
go run server.go
```

打开 `http://localhost:3000` ，您应该看到 `Hello, World!` 在页面上。

## Basic routing

路由是指应用程序应该如何响应客户端请求的。 例如一个 URI \(或路径\) 和特定的 HTTP 请求方法 \(GET, PUT, POST 等等)

{% hint style="info" %}
每个路由可以拥有 **多个处理器函数**，他们将在路由匹配时执行。
{% endhint %}

路由定义采用以下结构：

```go
// 函数签名
app.Method(path string, ...func(*fiber.Ctx))
```

* `app` 是 **Fiber** 的实例。
* `Method` 是 [HTTP 请求方法](https://fiber.wiki/application#methods),  以大写字母表示: `Get`, `Put`, `Post`, 等等。
* `path` 是服务器上的虚拟路径。
* `function(*fiberCtx)` 是一个包含 [Context](https://fiber.wiki/context) 上下文的回调函数，会在路由匹配时执行。

**一个简单的路由**

```go
// Respond with "Hello, World!" on root path, "/"
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})
```

**参数**

```go
// GET http://localhost:8080/hello%20world

app.Get("/:value", func(c *fiber.Ctx) {
  c.Send("Get request with value: " + c.Params("value"))
  // => Get request with value: hello world
})
```

**可选参数**

```go
// GET http://localhost:3000/john

app.Get("/:name?", func(c *fiber.Ctx) {
  if c.Params("name") != "" {
    c.Send("Hello " + c.Params("name"))
    // => Hello john
  } else {
    c.Send("Where is john?")
  }
})
```

**通配符**

```go
// GET http://localhost:3000/api/user/john

app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("API path: " + c.Params("*"))
  // => API path: user/john
})
```

## Static files

若要提供静态文件，例如 **图像**, **CSS** 和 **JavaScript** 等文件, 需要用文件或目录字符串来替换处理器函数。

Function signature:

```go
app.Static(prefix, root string)
```

使用以下代码提取在 `./public` 路径下的文件。

```go
app := fiber.New()

app.Static("/", "./public") 

app.Listen(8080)
```

现在，您可以加载在 `./public` 目录中的文件：

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```


## Note

For more information on how to build APIs in Go with Fiber, please check out this awesome article [on building an express-style API in Go with Fiber](https://blog.logrocket.com/express-style-api-go-fiber/)