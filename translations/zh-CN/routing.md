---
description: >-
  路由是指应用程序的端点(URIs)如何响应客户端请求。
---

# 🔌  路由

## 路径

路由路径与请求方法结合，定义了可以发出请求的端点。 路由路径可以是**字符串**或**字符串模式**。

**基于字符串的路由路径示例**

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

## Parameters

路由参数是**命名的URL段**，用于捕获在URL中的位置处指定的值。 可以使用[Params](https://fiber.wiki/context#params)函数检索捕获的值，并将路径中指定的route参数的名称作为其各自的键。

{% hint style="info" %}
路径参数的名称必须由**字符**组成 \(`[A-Za-z0-9_]`\).
{% endhint %}

{% hint style="danger" %}
连字符\(`-`\)尚未按字面意义进行解释。 计划用于**Fiber** v3。
{% endhint %}

**使用路径参数定义路径的示例**

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

## 中间件

意在更改请求或响应的**功能**被称为**中间件功能**。 [Next](https://github.com/gofiber/docs/tree/34729974f7d6c1d8363076e7e88cd71edc34a2ac/context/README.md#next)是**Fiber**路由器功能，在调用时，将执行**next**路由**匹配**的功能。

**示例**

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

`Use`方法是**挂载**路径或**前缀**路径，并且将中间件限制为仅应用于以其开头的任何请求路径。这意味着您不能在`Use`方法上使用`:params`。

## 组路由

如果端点很多，则可以使用`Group`来组织路由

**签名**

```go
app.Group(prefix string, handlers ...func(*Ctx)) *Group
```

**示例**

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