---
description: >-
  路由是指应用程序的端点 (URI) 是如何响应客户端的请求。
---

# 🔌 路由

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

## 参数

路由参数是 **命名的 URL 部分** ，用于捕获他们在 URL 位置中指定的值。 可以使用 [Params](https://fiber.wiki/context#params) 函数获取捕获的值。 这包含路径中指定的路由参数的名称作为其各自的键。

{% hint style="info" %}
路由参数的名称必须由 **字符 characters** 所构成 \(`[A-Za-z0-9_]`\)。
{% endhint %}

{% hint style="danger" %}
连线 \(`-`\)  **尚未** 能够当成字符直接处理。 Planned for **Fiber** v1.11.
{% endhint %}

**定义路由参数的示例**

```go
// 参数
app.Get("/user/:name/books/:title", func(c *fiber.Ctx) {
  c.Write(c.Params("name"))
  c.Write(c.Params("title"))
})
// 通配符
app.Get("/user/*", func(c *fiber.Ctx) {
  c.Send(c.Params("*"))
})
// 可选参数
app.Get("/user/:name?", func(c *fiber.Ctx) {
  c.Send(c.Params("name"))
})
```

## Middleware

用于更改请求或响应的函数被称为 **中间件函数**。 [Next](https://github.com/gofiber/docs/tree/34729974f7d6c1d8363076e7e88cd71edc34a2ac/context/README.md#next) 函数是 **Fiber** 的一个路由函数, 被调用时, 会执行 **下一个** 函数现在所 **对应** 的路由。

**中间件函数示例**

```go
app.Use(func(c *fiber.Ctx) {
  // 设置一下安全类的头字段:
  c.Set("X-XSS-Protection", "1; mode=block")
  c.Set("X-Content-Type-Options", "nosniff")
  c.Set("X-Download-Options", "noopen")
  c.Set("Strict-Transport-Security", "max-age=5184000")
  c.Set("X-Frame-Options", "SAMEORIGIN")
  c.Set("X-DNS-Prefetch-Control", "off")

  // 调用下一个中间件:
  c.Next()
})

app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})
```

`Use` 方法路径是 **挂载** 或 **前缀** 路径，并限制中间件仅应用于以它开头的任何请求路径。 这意味着您不能在 `Use` 方法中使用 `:params` 。

## Grouping

如果您有许多端点，您可以使用 `Group` 来分组安排您的路由。

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

