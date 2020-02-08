# Getting started

[![](https://camo.githubusercontent.com/7fefac9c50028ef3a33c1d3b15bc6290c4df50c3/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f72656c656173652f676f66696265722f6669626572)](https://github.com/gofiber/fiber/releases) [![](https://camo.githubusercontent.com/41183f85541d788c8d93353ded748619d2d95c21/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c616e6775616765732f746f702f676f66696265722f6669626572)](https://camo.githubusercontent.com/41183f85541d788c8d93353ded748619d2d95c21/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c616e6775616765732f746f702f676f66696265722f6669626572) [![](https://camo.githubusercontent.com/fa22b9d46e4fc46b3a39dc24e617c6848b3cf1c3/68747470733a2f2f676f646f632e6f72672f6769746875622e636f6d2f676f66696265722f66696265723f7374617475732e737667)](https://godoc.org/github.com/gofiber/fiber) [![](https://camo.githubusercontent.com/cc2e9485ef6d4febc5d5de35fd8eedd876e51d96/68747470733a2f2f676f7265706f7274636172642e636f6d2f62616467652f6769746875622e636f6d2f676f66696265722f6669626572)](https://camo.githubusercontent.com/cc2e9485ef6d4febc5d5de35fd8eedd876e51d96/68747470733a2f2f676f7265706f7274636172642e636f6d2f62616467652f6769746875622e636f6d2f676f66696265722f6669626572) [![GitHub license](https://camo.githubusercontent.com/cd3cf7095707e17d7b74aed843775b5a2ef8756b/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f676f66696265722f66696265722e737667)](https://github.com/gofiber/fiber/blob/master/LICENSE) [![Join the chat at https://gitter.im/gofiber/community](https://camo.githubusercontent.com/da2edb525cde1455a622c58c0effc3a90b9a181c/68747470733a2f2f6261646765732e6769747465722e696d2f4a6f696e253230436861742e737667)](https://gitter.im/gofiber/community)

[**Fiber**](https://github.com/gofiber/fiber) is an [Express.js](https://expressjs.com/en/4x/api.html) styled HTTP web framework implementation running on [Fasthttp](https://github.com/valyala/fasthttp), the **fastest** HTTP engine for Go \(Golang\). The package make use of **similar framework convention** as they are in Express.

People switching from [Node.js](https://nodejs.org/en/about/) to [Go](https://golang.org/doc/) often end up in a bad learning curve to start building their webapps, this project is meant to **ease** things up for **fast** development, but with **zero memory allocation** and **performance** in mind.

## Installing

Assuming you’ve already installed [Go](https://golang.org/doc/), install the [Fiber](https://github.com/gofiber/fiber) package by calling the following command:

```text
go get -u github.com/gofiber/fiber
```

## Hello world

Embedded below is essentially the simplest Fiber app you can create.

```text
create server.go
```

```go
package main

import "github.com/gofiber/fiber"

func main() {
  app := fiber.New()

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Hello, World!")
  })

  app.Listen(8080)
}
```

```text
go run server.go
```

Browse to [http://localhost:8080](http://localhost:8080/) and you should see Hello, World! on the page.

## Basic routing

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI \(or path\) and a specific HTTP request method \(GET, POST, and so on\).

Each route can have one handler function, that is executed when the route is matched.

Route definition takes the following structures:

```go
// Function signature
app.Method(func(*fiber.Ctx))
app.Method(path string, func(*fiber.Ctx))
```

* **app** is an instance of [**Fiber**]().
* **Method** is an [HTTP request method](https://github.com/gofiber/docs/tree/34729974f7d6c1d8363076e7e88cd71edc34a2ac/application?id=methods/README.md), in capitalization: Get, Put, Post etc
* **path string** is a path on the server.
* **func\(\*fiber.Ctx\)** is a function containing the [Context](https://github.com/gofiber/docs/tree/34729974f7d6c1d8363076e7e88cd71edc34a2ac/context/README.md) executed when the route is matched.

This tutorial assumes that an instance of fiber named app is created and the server is running. If you are not familiar with creating an app and starting it, see the [Hello world]() example.

The following examples illustrate defining simple routes.

```text
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

```text
// Function signature
app.Static(root string)
app.Static(prefix, root string)
```

For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:

Now, you can load the files that are in the public directory:

```text
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```

_Caught a mistake?_ [_Edit this page on GitHub!_]()

