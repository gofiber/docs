---
description: 一个 API 文档，让您可以开始使用 Fiber 构建 Web 应用。
---

# 📖 入门指南

 [![](https://img.shields.io/github/release/gofiber/fiber?style=flat-square)](https://github.com/gofiber/fiber/releases)  [![](https://img.shields.io/badge/go.dev-007d9c?logo=go&logoColor=white&style=flat-square)](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc)   [![](https://goreportcard.com/badge/github.com/gofiber/fiber?style=flat-square)](https://goreportcard.com/report/github.com/gofiber/fiber)  [![](https://img.shields.io/badge/coverage-91%25-brightgreen?style=flat-square)](https://gocover.io/github.com/gofiber/fiber)  [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Test?label=tests&style=flat-square)](https://github.com/gofiber/fiber/actions?query=workflow%3ATest)  [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Gosec?label=gosec&style=flat-square)](https://github.com/gofiber/fiber/actions?query=workflow%3AGosec)

**Fiber** 是一个受 [Express](https://github.com/expressjs/express) 启发而生的 **网页框架**，基于 [Fasthttp](https://github.com/valyala/fasthttp)（**最快的**  [Go](https://golang.org/doc/) HTTP 引擎）而开发的。 设计初衷为 **简化** 一切以打造 **快速的** 开发环境并同时兼顾着 **零内存分配** 和 **性能为上** 的理念。

## Installation

首先， [下载](https://golang.org/dl/) 并安装 Go。 需要 `1.11` 或以上的版本。

使用 [`get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them) 命令以完成安装：

```bash
go get -u github.com/gofiber/fiber
```

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
// 在 root 路径, "/" 上打印"Hello, World!"响应
app.Get("/", func(c *fiberCtx) *
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

