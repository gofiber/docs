---
description: 托管文档，因此您可以开始使用Fiber构建Web应用程序。
---

# 📖入门

[![](https://img.shields.io/github/release/gofiber/fiber?style=flat-square)](https://github.com/gofiber/fiber/releases) [![](https://img.shields.io/badge/api-documentation-blue?style=flat-square)](https://fiber.wiki) ![](https://img.shields.io/badge/goreport-A%2B-brightgreen?style=flat-square) [![](https://img.shields.io/badge/coverage-91%25-brightgreen?style=flat-square)](https://gocover.io/github.com/gofiber/fiber) [![](https://img.shields.io/travis/gofiber/fiber/master.svg?label=linux&style=flat-square)](https://travis-ci.org/gofiber/fiber) [![](https://img.shields.io/travis/gofiber/fiber/master.svg?label=windows&style=flat-square)](https://travis-ci.org/gofiber/fiber)

**Fiber**是一个基于[Expressjs的](https://github.com/expressjs/express) **Web框架，**建立在[Fasthttp](https://github.com/valyala/fasthttp) （ [Go](https://golang.org/doc/) **最快的** HTTP引擎）的基础上。旨在**简化** **零内存分配**和**性能的**情况，以便**快速**开发。

## 正在安装

首先， [下载](https://golang.org/dl/)并安装Go。

需要{％hint style =“ success”％}必须达到**1.11** （具有启用的[Go Modules](https://golang.org/doc/go1.11#modules) ）。 {％endhint％}

使用[`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them)命令完成安装：

```bash
go get -u github.com/gofiber/fiber
```

## 你好，世界！

下面嵌入的是本质上最简单的**Fiber**应用程序，您可以创建它。

```text
touch server.go
```

```go
package main

import "github.com/gofiber/fiber"

func main() {
  // Create new Fiber instance:
  app := fiber.New()
  
  // Create route on root path, "/":
  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Hello, World!")
    // => "Hello, World!"
  })
  
  // Start server on "localhost" with port "8080":
  app.Listen(8080)
}
```

```text
go run server.go
```

浏览到`http://localhost:8080` ，您应该看到`Hello, World!`在页面上。

## 基本路由

路由是指确定应用程序如何响应客户端对特定端点的请求，该特定端点是URI（或路径）和特定的HTTP请求方法（GET，PUT，POST等）。

{％hint style =“ info”％}每个路由可以具有**一个处理函数** ，该**函数**在匹配该路由时执行。 {％endhint％}

路由定义采用以下结构：

```go
// Function signature
app.Method(func(*fiber.Ctx))
app.Method(path string, func(*fiber.Ctx))
```

- `app`是**Fiber的**一个实例。
- `Method`是一个[HTTP请求方法](https://fiber.wiki/application#methods) ，大写： `Get` ， `Put` ， `Post`等。
- `path`是服务器上的路径。
- `func(*fiber.Ctx)`是一个回调函数，其中包含匹配路由时执行的[Context](https://fiber.wiki/context) 。

### 简单路线

```go
// Respond with "Hello, World!" on root path, "/":
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})
```

### 带参数的路线

```go
// GET http://localhost:8080/hello%20world

app.Get("/:value", func(c *fiber.Ctx) {
  c.Send("Get request with value: " + c.Params("value"))
  // => Get request with value: hello world
})
```

### 使用可选参数进行路由

```go
// GET http://localhost:8080/hello%20world

app.Get("/:value?", func(c *fiber.Ctx) {
  if c.Params("value") != "" {
    c.Send("Get request with value: " + c.Params("Value"))
    // => Get request with value: hello world
    return
  }
  
  c.Send("Get request without value")
})
```

### 用通配符路由

```go
// GET http://localhost:8080/api/user/john

app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("API path with wildcard: " + c.Params("*"))
  // => API path with wildcard: user/john
})
```

## 静态文件

要提供静态文件（例如**图像** ， **CSS**和**JavaScript**文件），请用文件或目录字符串替换函数处理程序。

功能签名：

```go
app.Static(root string)         // => without prefix
app.Static(prefix, root string) // => with prefix
```

使用以下代码在名为`./public`的目录中提供文件：

```go
app := fiber.New()

app.Static("./public") // => Serve all files into ./public

app.Listen(8080)
```

现在，您可以加载`./public`目录中的文件：

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```
