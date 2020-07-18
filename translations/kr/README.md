---
description: >-
  An online API documentation with examples so you can start building web apps with Fiber right away!
---

# 📖 시작하기

**Fiber**는 [Express](https://github.com/expressjs/express)에서 영감을 받고, [Go](https://golang.org/doc/)를 위한 가장 빠른 HTTP 엔진인 [Fasthttp](https://github.com/valyala/fasthttp)를 토대로 만들어진 **웹 프레임워크** 입니다. **비 메모리 할당**과 **성능**을 고려한 **빠른** 개발을 위해 **손쉽게** 사용되도록 설계되었습니다.

## Installation

우선, Go를 [다운로드](https://golang.org/dl/)하고 설치합니다. `1.11` 버전 이상이 요구됩니다.

[`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them) 명령어를 이용해 설치가 완료됩니다.

```bash
go get -u github.com/gofiber/fiber
```

## Zero Allocation

{% hint style="warning" %}
Some values returned from [**fiber.Ctx**](ctx.md) are **not** immutable by default
{% endhint %}

Because fiber is optimized for  **high-performance**, values returned from [**fiber.Ctx**](ctx.md) are **not** immutable by default and **will** be re-used across requests. As a rule of thumb, you **must** only use context values within the handler, and you **must not** keep any references. As soon as you return from the handler, any values you have obtained from the context will be re-used in future requests and will change below your feet. Here is an example:

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

We created a custom `ImmutableString` function that does the above and is available in the [gofiber/utils](https://github.com/gofiber/utils) package.

```go
app.Get("/:foo", func(c *fiber.Ctx) {
    result := utils.ImmutableString(c.Param("foo")) 
    // result is now immutable
}
```

Alternatively, you can also use the[ **Immutable setting**](app.md#settings). It will make all values returned from the context immutable, allowing you to persist them anywhere. Of course, this comes at the cost of performance.

For more information, please check [**\#426**](https://github.com/gofiber/fiber/issues/426) ****and ****[**\#185**](https://github.com/gofiber/fiber/issues/185).

## Hello, World!

Embedded below is essentially the most straightforward **Fiber** app, which you can create.

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

Browse to `http://localhost:3000,` and you should see `Hello, World!` on the page.

## Basic routing

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI \(or path\) and a specific HTTP request method \(GET, PUT, POST and so on\).

{% hint style="info" %}
Each route can have **multiple handler functions**, that is executed when the route is matched.
{% endhint %}

Route definition takes the following structures:

```go
// Function signature
app.Method(path string, ...func(*fiber.Ctx))
```

* `app` 은 **Fiber**의 인스턴스 입니다.
* `Method` 는 첫 글자가 대문자인 [HTTP request method](https://fiber.wiki/application#methods) 입니다: `Get`, `Put`, `Post` 등.
* `path` 는 서버의 가상 경로입니다.
* `func(*fiber.Ctx)` 는 라우트가 매치될 때 실행된 [Context](https://fiber.wiki/context) 를 가지고 있는 콜백 함수입니다.

**Simple route**

```go
// Respond with "Hello, World!" on root path, "/"
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})
```

**Parameters**

```go
// GET http://localhost:8080/hello%20world

app.Get("/:value", func(c *fiber.Ctx) {
  c.Send("Get request with value: " + c.Params("value"))
  // => Get request with value: hello world
})
```

**Optional parameter**

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

**Wildcards**

```go
// GET http://localhost:3000/api/user/john

app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("API path: " + c.Params("*"))
  // => API path: user/john
})
```

## Static files

To serve static files such as **images**, **CSS**, and **JavaScript** files, replace your function handler with a file or directory string.

Function signature:

```go
app.Static(prefix, root string)
```

Use the following code to serve files in a directory named `./public`:

```go
app := fiber.New()

app.Static("/", "./public") 

app.Listen(8080)
```

Now, you can load the files that are in the `./public` directory:

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```

## Note

For more information on how to build APIs in Go with Fiber, please check out this excellent article [on building an express-style API in Go with Fiber](https://blog.logrocket.com/express-style-api-go-fiber/)

