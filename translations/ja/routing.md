---
description: ルーティングとは、アプリケーションのエンドポイント（URI）がクライアントの要求にどのように応答するかを指します。
---

# 🔌ルーティング

## パス

ルートパスは、リクエストメソッドと組み合わせて、リクエストを作成できるエンドポイントを定義します。ルートパスは、 **文字** **列** 、 **文字列パターン、**または**正規表現**です。

**特殊文字**

- キャラクター`?` 、 `+` 、 `&` 、 `()`は、対応する**正規表現の**サブセットです。
- ハイフン（ `-` ）とドット（ `.` ）は、 **文字列ベースの**パスによって文字通り解釈されます。

**文字列に基づくルートパスの例**

```go
// This route path will match requests to the root route, "/":
app.Get("/", func(c *fiber.Ctx) {
  c.Send("root")
})

// This route path will match requests to "/about":
app.Get("/about", func(c *fiber.Ctx) {
  c.Send("about")
})

// This route path will match requests to "/random.txt":
app.Get("/random.txt", func(c *fiber.Ctx) {
  c.Send("random.txt")
})
```

**文字列パターンに基づくルートパスの例**

```go
// This route path will match:
// only "/acd" and "/abcd"
app.Get("/ab?cd", func(c *fiber.Ctx) {
  c.Send("/ab?cd")
})

// This route path will match:
// "/abcd", "/abbcd", "/abbbcd" and so on
app.Get("/ab+cd", func(c *fiber.Ctx) {
  c.Send("ab+cd")
})

// This route path will match:
// "/abcd", "/abxcd", "/abRANDOMcd", "/ab123cd" and so on
app.Get("/ab*cd", func(c *fiber.Ctx) {
  c.Send("ab*cd")
})

// This route path will match:
// only "/abe" and "/abcde"
app.Get("/ab(cd)?e", func(c *fiber.Ctx) {
  c.Send("ab(cd)?e")
})
```

## パラメーター

ルートパラメータは、URL内の位置で指定された値をキャプチャするために使用される**名前付きURLセグメント**です。キャプチャされた値は、 [Params](https://fiber.wiki/context#params)関数を使用して取得でき、それぞれのキーとしてパスで指定されたルートパラメーターの名前を使用できます。

{％hint style = "info"％}ルートパラメータの名前は、 **単語文字** （ `[A-Za-z0-9_]` ）で構成する必要があります。 {％endhint％}

{％hint style = "danger"％}ハイフン（ `-` ）およびドット（ `.` ）は**、**文字通りまだ解釈されていません。
 **Fiber** v2を予定しています。 {％endhint％}

**ルートパラメータでルートを定義する例**

```go
app.Get("/user/:name/books/:title", func(c *fiber.Ctx) {
  c.Write(c.Params("name"))
  c.Write(c.Params("title"))
})

app.Get("/user/*", func(c *fiber.Ctx) {
  c.Send(c.Params("*"))
})

app.Get("/user/:name?", func(c *fiber.Ctx) {
  c.Send(c.Params("name"))
})
```

## ミドルウェア

要求または応答を変更するように設計された**関数**は、 **ミドルウェア関数**と呼ばれ**ます** 。 [Next](https://github.com/gofiber/docs/tree/34729974f7d6c1d8363076e7e88cd71edc34a2ac/context/README.md#next)は**ファイバー**ルーター機能で、呼び出されると、現在のルートに**一致**する**次の**機能を実行します。

**ミドルウェア機能の例**

```go
app.Use(func(c *fiber.Ctx) {
  // Set some security headers:
  c.Set("X-XSS-Protection", "1; mode=block")
  c.Set("X-Content-Type-Options", "nosniff")
  c.Set("X-Download-Options", "noopen")
  c.Set("Strict-Transport-Security", "max-age=5184000")
  c.Set("X-Frame-Options", "SAMEORIGIN")
  c.Set("X-DNS-Prefetch-Control", "off")

  // Go to next middleware:
  c.Next()
})

app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})
```

メソッドパスの`Use`は、 **マウント**パスまたは**プレフィックス**パスであり、ミドルウェアを、それで始まる要求されたパスのみに適用するように制限します。これは、 `Use`メソッドで`:params`を使用できないことを意味します。

{％hint style = "info"％} **All**または**Useを**いつ使用する**かわからない**場合は、 [Methods API](https://fiber.wiki/application#methods)について[こちらをご覧ください](https://fiber.wiki/application#methods) 。 {％endhint％}
