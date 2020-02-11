---
description: ホストされたドキュメント。Fiberを使用してWebアプリの構築を開始できます。
---

# 📖はじめに

[![](https://img.shields.io/github/release/gofiber/fiber?style=flat-square)](https://github.com/gofiber/fiber/releases) [![](https://img.shields.io/badge/api-documentation-blue?style=flat-square)](https://fiber.wiki) ![](https://img.shields.io/badge/goreport-A%2B-brightgreen?style=flat-square) [![](https://img.shields.io/badge/coverage-91%25-brightgreen?style=flat-square)](https://gocover.io/github.com/gofiber/fiber) [![](https://img.shields.io/travis/gofiber/fiber/master.svg?label=linux&style=flat-square)](https://travis-ci.org/gofiber/fiber) [![](https://img.shields.io/travis/gofiber/fiber/master.svg?label=windows&style=flat-square)](https://travis-ci.org/gofiber/fiber)

**Fiber**は、 [Go](https://golang.org/doc/)用の**最速の** HTTPエンジンである[Fasthttpの](https://github.com/valyala/fasthttp)上に構築された[Expressjsに](https://github.com/expressjs/express)ヒントを得た**Webフレームワーク**です。 **ゼロのメモリ割り当て**と**パフォーマンス**を念頭に置いて、開発を**迅速**に**行える**ように設計されてい**ます** 。

## インストール中

まず、Goを[ダウンロード](https://golang.org/dl/)してインストールします。

{％hint style = "success"％} Go **1.11** （有効な[Goモジュール](https://golang.org/doc/go1.11#modules) ）以上が必要です。 {％endhint％}

インストールは[`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them)コマンドを使用して行われ[`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them) 。

```bash
go get -u github.com/gofiber/fiber
```

## こんにちは世界！

以下に埋め込まれているのは、基本的に最も簡単な**Fiber**アプリで、作成できます。

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

`http://localhost:8080`を参照すると、 `Hello, World!`が表示されます`Hello, World!`ページで。

## 基本的なルーティング

ルーティングとは、アプリケーションが特定のエンドポイントに対するクライアントリクエストに応答する方法を決定することです。クライアントリクエストは、URI（またはパス）および特定のHTTPリクエストメソッド（GET、PUT、POSTなど）です。

{％hint style = "info"％}各ルートには、ルートが一致したときに実行される**1つのハンドラー関数を含める**ことができます。 {％endhint％}

ルート定義は次の構造を取ります。

```go
// Function signature
app.Method(func(*fiber.Ctx))
app.Method(path string, func(*fiber.Ctx))
```

- `app`は**Fiberの**インスタンスです。
- `Method`は、大文字の`Get` [要求](https://fiber.wiki/application#methods) 、 `Put` 、 `Post`などの[HTTP要求](https://fiber.wiki/application#methods) `Method`です。
- `path`はサーバー上の`path`です。
- `func(*fiber.Ctx)`は、ルートが一致したときに実行される[コンテキスト](https://fiber.wiki/context)を含むコールバック関数です。

### 簡単なルート

```go
// Respond with "Hello, World!" on root path, "/":
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})
```

### パラメータ付きのルート

```go
// GET http://localhost:8080/hello%20world

app.Get("/:value", func(c *fiber.Ctx) {
  c.Send("Get request with value: " + c.Params("value"))
  // => Get request with value: hello world
})
```

### オプションのパラメーターを使用したルート

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

### ワイルドカードを使用したルート

```go
// GET http://localhost:8080/api/user/john

app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("API path with wildcard: " + c.Params("*"))
  // => API path with wildcard: user/john
})
```

## 静的ファイル

**画像** 、 **CSS** 、 **JavaScript**ファイルなどの静的ファイルを提供するには、関数ハンドラーをファイルまたはディレクトリの文字列に置き換えます。

関数シグネチャ：

```go
app.Static(root string)         // => without prefix
app.Static(prefix, root string) // => with prefix
```

次のコードを使用して、. `./public`という名前のディレクトリ内のファイルを提供します。

```go
app := fiber.New()

app.Static("./public") // => Serve all files into ./public

app.Listen(8080)
```

これで、。 `./public`ディレクトリにあるファイルをロードできます。

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```
