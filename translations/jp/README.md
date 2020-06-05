---
description: Fiber を使用して Web アプリを構築するための API ドキュメントです。
---

# 📖 さあ、はじめよう

[![](https://img.shields.io/github/release/gofiber/fiber?style=flat-square)](https://github.com/gofiber/fiber/releases) [![](https://img.shields.io/badge/go.dev-007d9c?logo=go&logoColor=white&style=flat-square)](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc) [![](https://goreportcard.com/badge/github.com/gofiber/fiber?style=flat-square)](https://goreportcard.com/report/github.com/gofiber/fiber) [![](https://img.shields.io/badge/coverage-91%25-brightgreen?style=flat-square)](https://gocover.io/github.com/gofiber/fiber) [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Test?label=tests&style=flat-square)](https://github.com/gofiber/fiber/actions?query=workflow%3ATest) [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Gosec?label=gosec&style=flat-square)](https://github.com/gofiber/fiber/actions?query=workflow%3AGosec)

**Fiber**は[Express](https://github.com/expressjs/express)に触発された**web framework**です。[Go](https://golang.org/doc/)の**最速**なHTTP engineである[Fasthttp](https://github.com/valyala/fasthttp)によって作られています。 **ゼロメモリアロケーション**と**パフォーマンス** を念頭に置いて設計されており、迅速な開発をサポートします。

## Installation

まず、 [ここ](https://golang.org/dl/)をダウンロードしてGoをインストールします。 `1.11` 以降が必要です。

そして、[`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them) コマンドを使用してインストールします。

```bash
go get -u github.com/gofiber/fiber
```

## ゼロアロケーション

{% hint style="warning" %}
[**fiber.Ctx**](context.md) から返される値は デフォルトで**不変ではありません**
{% endhint %}

Fiber はハイパフォーマンスのために最適化されているため、 fiber.Ctx から返される値はデフォルトでは不変ではなく、リクエスト間で再利用されます。 経験則として、ハンドラ内ではコンテキスト値のみを使用**するべきであり**、参照を保持**するべきではありません**。 ハンドラから戻るとすぐに、コンテキストから取得した値は今後のリクエストで再利用され、手元で変化します。 以下に例を示します:

```go
func handler(c *fiber.Ctx) {
    result := c.Param("foo") // result はこのメソッド内でのみ有効です。
}
```

このような値をハンドラの外部に永続化する必要がある場合は、[組み込みのコピー機能](https://golang.org/pkg/builtin/#copy)を使用して、その**基礎となるバッファ**のコピーを作成してください。ここでは、文字列を永続化する例を示します。 Here is an example for persisting a string:

```go
func handler(c *fiber.Ctx) {
    result := c.Param("foo") // result is only valid within this method
    newBuffer := make([]byte, len(result))
    copy(newBuffer, result)
    newResult := string(newBuffer) // newResult is immutable and valid forever
}
```

Alternatively, you can also use the[ **Immutable setting**](application.md#settings). It will make all values returned from the context immutable, allowing you to persist them anywhere. Of course, this comes at the cost of performance.

For more information, please check ****[**\#426**](https://github.com/gofiber/fiber/issues/426) and ****[**\#185**](https://github.com/gofiber/fiber/issues/185).

## Hello, World!

Embedded below is essentially simplest **Fiber** app, which you can create.

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

Browse to `http://localhost:3000` and you should see `Hello, World!` on the page.

## Basic routing

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI \(or path\) and a specific HTTP request method \(GET, PUT, POST and so on\).

{% hint style="info" %}
Each route can have **multiple handler functions**, that are executed when the route is matched.
{% endhint %}

Route definition takes the following structures:

```go
// Function signature
app.Method(path string, ...func(*fiber.Ctx))
```

* `app`は**Fiber**のインスタンスです。
* `Method`は[HTTP request method](https://fiber.wiki/application#methods)であり、`Get`, `Put`, `Post`などを大文字で表記します。
* `path` はサーバ上の仮想パスです。
* `func(*fiber.Ctx)` は、ルートが一致したときに実行される [コンテキスト](https://fiber.wiki/context) を含むコールバック関数です。

**Simple route**

```go
// Respond with "Hello, World!" on root path, "/"
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})
```

**パラメータの表記**

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

To serve static files such as **images**, **CSS** and **JavaScript** files, replace your function handler with a file or directory string.

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

