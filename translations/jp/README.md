---
description: >-
  サンプルを含むオンライン API ドキュメントなので、すぐに Fiber で Web アプリを構築できます。
---

# 📖 さあ、はじめよう

**Fiber**は[Express](https://github.com/expressjs/express)に触発された**web framework**です。[Go](https://golang.org/doc/)の**最速**なHTTP engineである[Fasthttp](https://github.com/valyala/fasthttp)によって作られています。 **ゼロメモリアロケーション**と**パフォーマンス** を念頭に置いて設計されており、迅速な開発をサポートします。

## Installation

まず、 [ここ](https://golang.org/dl/)をダウンロードしてGoをインストールします。 `1.11` 以降が必要です。

そして、[`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them) コマンドを使用してインストールします。

```bash
go get -u github.com/gofiber/fiber
```

## ゼロアロケーション

{% hint style="warning" %}
Some values returned from [**fiber.Ctx**](ctx.md) are **not** immutable by default
{% endhint %}

Fiber は**ハイパフォーマンス**を求めて最適化されているために、 [fiber.Ctx</strong>](ctx.md) から返される値はデフォルトでは**不変ではなく**、リクエスト間で再利用されるでしょう。 経験則として、ハンドラ内ではコンテキスト値のみを使用**するべきであり**、参照を保持**するべきではありません**。 ハンドラから戻るとすぐに、コンテキストから取得した値は今後のリクエストで再利用され、手元で変化します。 以下に例を示します:

```go
func handler(c *fiber.Ctx) {
    result := c.Param("foo") // result is only valid within this method
}
```

このような値をハンドラの外部に永続化する必要がある場合は、[組み込みのコピー機能](https://golang.org/pkg/builtin/#copy)を使用して、その**基礎となるバッファ**のコピーを作成してください。ここでは、文字列を永続化する例を示します。 以下は文字列を永続化させるための例です:

```go
func handler(c *fiber.Ctx) {
    result := c.Param("foo") // result is only valid within this method
    newBuffer := make([]byte, len(result))
    copy(newBuffer, result)
    newResult := string(newBuffer) // newResult is immutable and valid forever
}
```

または、[ **イミュータブル設定**](app.md#settings) を使用することもできます。 コンテキストから返されるすべての値は変更不能になり、どこにでも永続化できます。 もちろん、これはパフォーマンスを犠牲にしています。

詳細については、 ****[**\#426**](https://github.com/gofiber/fiber/issues/426) と ****[**\#185**](https://github.com/gofiber/fiber/issues/185).をご確認ください

## Hello world!

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

## 基本的なルーティング

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

## 静的ファイル

**画像**、 **CSS** および **JavaScript** ファイルなどの静的ファイルを扱うためには、 関数ハンドラをファイルまたはディレクトリの文字列に置き換えます。

関数のシグネチャ:

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

