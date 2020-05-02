---
description: >-
  路由是指应用程序的端点 (URI) 是如何响应客户端的请求。
---

# 🔌 Routing

## Paths

路由路径与请求方法相结合，可以定义请求的端点。 路由路径可以是 **strings 字符串** 或 **string patterns 字符串模式**。

**基于 strings 字符串的路由路径示例**

```go
// 此路由路径将匹配请求到根路由 "/":
app.Get("/", func(c *fiber.Ctx) {
  c.Send("root")
})

// 此路由路径将匹配请求到 "/about":
app.Get("/about", func(c *fiber.Ctx) {
  c.Send("about")
})

// 此路由路径将匹配请求到 "/random.txt":
app.Get("/random.txt", func(c *fiber.Ctx) {
  c.Send("random.txt")
})
```

## Parameters

路由参数是 **命名的 URL 部分** ，用于捕获他们在 URL 位置中指定的值。 可以使用 [Params](https://fiber.wiki/context#params) 函数获取捕获的值。 这包含路径中指定的路由参数的名称作为其各自的键。

{% hint style="info" %}
路由参数的名称必须由 **字符 characters** 所构成 \(`[A-Za-z0-9_]`\)。
{% endhint %}

{% hint style="danger" %}
连线 \(`-`\)  **尚未** 能够当成字符直接处理。 计划实现在 **Fiber** v1.10。
{% endhint %}

**定义路由参数的示例**

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

If you have many endpoints, you can organize your routes using `Group`

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

