---
description: >-
  ルーティングとは、アプリケーションのエンドポイント(URI) がクライアントリクエストにどのように応答するかを指します。
---

# 🔌 ルーティング

## Paths

ルートパスはリクエストメソッドと組み合わせて、リクエストを作成できるエンドポイントを定義します。 ルートパスは **文字列** または **文字列パターン** を使用できます。

**文字列ベースのルートパスの例**

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

## パラメータの表記

Route parameters are **named URL segments** that are used to capture the values specified at their position in the URL. The captured values can be retrieved using the [Params](https://fiber.wiki/context#params) function, with the name of the route parameter specified in the path as their respective keys.

{% hint style="info" %}
Route パラメータの名前は **文字** \(`[A-Za-z0-9_]` \) で構成されていなければなりません。
{% endhint %}

{% hint style="danger" %}
ハイフン\(`-`\) はまだ **解釈されません。** 対応は**Fiber** v1.11で予定されています。
{% endhint %}

**Example of define routes with route parameters**

```go
// Parameters
app.Get("/user/:name/books/:title", func(c *fiber.Ctx) {
  c.Write(c.Params("name"))
  c.Write(c.Params("title"))
})
// Wildcard
app.Get("/user/*", func(c *fiber.Ctx) {
  c.Send(c.Params("*"))
})
// Optional parameter
app.Get("/user/:name?", func(c *fiber.Ctx) {
  c.Send(c.Params("name"))
})
```

## Middleware

Functions, that are designed to make changes to the request or response, are called **middleware functions**. The [Next](https://github.com/gofiber/docs/tree/34729974f7d6c1d8363076e7e88cd71edc34a2ac/context/README.md#next) is a **Fiber** router function, when called, executes the **next** function that **matches** the current route.

**Example of a middleware function**

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

`Use` method path is a **mount** or **prefix** path and limits middleware to only apply to any paths requested that begin with it. This means you cannot use `:params` on the `Use` method.

## Grouping

エンドポイントが多い場合は、 `Group`を使用してルートを整理できます。

```go
func main() {
  app := fiber.New()

  api := app.Group("/api", cors())  // /api

  v1 := api.Group("/v1", mysql())   // /api/v1
  v1.Get("/list", handler)          // /api/v1/list
  v1.Get("/user", handler)          // /api/v1/user

  v2 := api.Group("/v2", mongodb()) // /api/v2
  v2.Get("/list", handler)          // /api/v2/list
  v2.Get("/user", handler)          // /api/v2/user

  app.Listen(3000)
}
```

