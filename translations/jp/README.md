---
description: An API documentation so you can start building web apps with Fiber.
---

# 📖 さあ、はじめよう

 [![](https://img.shields.io/github/release/gofiber/fiber?style=flat-square)](https://github.com/gofiber/fiber/releases)  [![](https://img.shields.io/badge/go.dev-007d9c?logo=go&logoColor=white&style=flat-square)](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc)   [![](https://goreportcard.com/badge/github.com/gofiber/fiber?style=flat-square)](https://goreportcard.com/report/github.com/gofiber/fiber)  [![](https://img.shields.io/badge/coverage-91%25-brightgreen?style=flat-square)](https://gocover.io/github.com/gofiber/fiber)  [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Test?label=tests&style=flat-square)](https://github.com/gofiber/fiber/actions?query=workflow%3ATest)  [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Gosec?label=gosec&style=flat-square)](https://github.com/gofiber/fiber/actions?query=workflow%3AGosec)

**Fiber**は[Express](https://github.com/expressjs/express)に触発された**web framework**です。[Go](https://golang.org/doc/)の**最速**なHTTP engineである[Fasthttp](https://github.com/valyala/fasthttp)によって作られています。 **ゼロメモリアロケーション**と**パフォーマンス** を念頭に置いて設計されており、迅速な開発をサポートします。

## Installation

まず、 [ここ](https://golang.org/dl/)をダウンロードしてGoをインストールします。 `1.11` 以降が必要です。

そして、[`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them) コマンドを使用してインストールします。

```bash
go get -u github.com/gofiber/fiber
```

## Hello, World!

以下に埋め込まれているのは、基本的かつ最もシンプルな **Fiber** アプリです。

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

`http://localhost:3000` にアクセスすると、 `Hello, World!` がページに表示されます。

## Basic routing

ルーティングとは、特定のエンドポイントに対するクライアント要求に対してアプリケーションがどのように応答するかを決定することです。 これは、URI \(またはパス) と、特定の HTTP リクエストメソッド \(GET、PUT、POST など) です。

{% hint style="info" %}
各ルートは **複数のハンドラ関数**を持つことができ、そのルートが一致するときに実行されます。
{% endhint %}

ルート定義は以下のような構造をとります：

```go
// Function signature
app.Method(path string, ...func(*fiber.Ctx))
```

* `app`は**Fiber**のインスタンスです。
* `Method`は[HTTP request method](https://fiber.wiki/application#methods)であり、`Get`, `Put`, `Post`などを大文字で表記します。
* `path` はサーバ上の仮想パスです。
* `func(*fiber.Ctx)` は、ルートが一致したときに実行される [コンテキスト](https://fiber.wiki/context) を含むコールバック関数です。

**シンプルなルート**

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

**省略可能なパラメーターの表記**

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

**ワイルドカード**

```go
// GET http://localhost:3000/api/user/john

app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("API path: " + c.Params("*"))
  // => API path: user/john
})
```

## Static files

**画像**、 **CSS** および **JavaScript** ファイルなどの静的ファイルを扱うためには、 関数ハンドラをファイルまたはディレクトリの文字列に置き換えます。

Function signature:

```go
app.Static(prefix, root string)
```

`./public` というディレクトリ内のファイルを扱うには、次のコードを使用します。

```go
app := fiber.New()

app.Static("/", "./public") 

app.Listen(8080)
```

これで、`./public` ディレクトリにあるファイルを読み込むことができます。

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```

