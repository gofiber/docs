---
description: A hosted documentation so you can start building web apps with Fiber.
---

# 📖  Getting started

[![](https://img.shields.io/github/release/gofiber/fiber)](https://github.com/gofiber/fiber/releases) ![](https://img.shields.io/github/languages/top/gofiber/fiber) [![](https://godoc.org/github.com/gofiber/fiber?status.svg)](https://godoc.org/github.com/gofiber/fiber) ![](https://goreportcard.com/badge/github.com/gofiber/fiber) [![GitHub license](https://img.shields.io/github/license/gofiber/fiber.svg)](https://github.com/gofiber/fiber/blob/master/LICENSE) [![Join the chat at https://gitter.im/gofiber/community](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/gofiber/community)

[**Fiber**](https://github.com/gofiber/fiber) is an [Express.js](https://expressjs.com/en/4x/api.html) styled HTTP web framework implementation running on [Fasthttp](https://github.com/valyala/fasthttp), the **fastest** HTTP engine for Go \(Golang\). The package make use of **similar framework convention** as they are in Express.

People switching from [Node.js](https://nodejs.org/en/about/) to [Go](https://golang.org/doc/) often end up in a bad learning curve to start building their web apps, this project is meant to **ease** things up for **fast** development, but with **zero memory allocation** and **performance** in mind.

## Installation

First of all, [download](https://golang.org/dl/) and install Go.

{% hint style="info" %}
Go **1.11** \(with enabled **Go Modules**\) or higher is required.
{% endhint %}

Installation is done using the [`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them) command:

```bash
go get -u github.com/gofiber/fiber
```

## Hello, World!

Embedded below is most simplest **Fiber** app you can create:

```go
// server.go

package main

import "github.com/gofiber/fiber"

func main() {
  // Create new Fiber instance
  app := fiber.New()
  
  // Define route for "/" path
  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Hello, World!") // Send "Hello, World!" text to page
  })
  
  // Start server on http://localhost:8080
  app.Listen(8080)
}
```

Run your **Fiber** app by command:

```text
go run server.go
```

Browse to `http://localhost:8080` and you should see **Hello, World!** on the page.

## Basic routing

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI \(or path\) and a specific HTTP request method \(GET, POST, and so on\).

Each route can have one handler function, that is executed when the route is matched.

Route definition takes the following structures:

```go
// Function signature
app.Method(func(*fiber.Ctx))
app.Method(path string, func(*fiber.Ctx))
```

* `app` is an instance of Fiber
* `Method` is an [HTTP request method](https://github.com/gofiber/docs/tree/34729974f7d6c1d8363076e7e88cd71edc34a2ac/application?id=methods/README.md), in capitalization: `Get`, `Put`, `Post` etc
* `path` is a path on the server.
* `func(*fiber.Ctx)` is a callback function containing the [Context](https://fiber.wiki/context) executed when the route is matched. often end up in a bad learning curve to start building their web apps, this project is meant to 

This tutorial assumes that an instance of fiber named app is created and the server is running. If you are not familiar with creating an app and starting it, see the **Hello world** example above.

The following examples illustrate defining simple routes.

```go
// Respond with Hello, World! on the homepage:
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})

// Parameter
// http://localhost:8080/hello%20world
app.Post("/:value", func(c *fiber.Ctx) {
  c.Send("Post request with value: " + c.Params("value"))
  // => Post request with value: hello world
})

// Optional parameter
// http://localhost:8080/hello%20world
app.Get("/:value?", func(c *fiber.Ctx) {
  if c.Params("value") != "" {
    c.Send("Get request with value: " + c.Params("Value"))
    return // => Get request with value: hello world
  }
  c.Send("Get request without value")
})

// Wildcard
// http://localhost:8080/api/user/john
app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("API path with wildcard: " + c.Params("*"))
  // => API path with wildcard: user/john
})
```

## Static files

To serve static files such as images, CSS files, and JavaScript files, replace your function handler with a file or directory string.

```go
// Function signature
app.Static(root string)
app.Static(prefix, root string)
```

For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:

Now, you can load the files that are in the public directory:

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```

