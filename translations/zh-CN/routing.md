---
description: 路由是指应用程序的端点（URI）如何响应客户端请求。
---

# 🔌 路由

## 路径

路由路径与请求方法结合，定义了可以发出请求的端点。路由路径可以是**字符串** ， **字符串模式**或**正则表达式**。

**特殊的字符**

- 字符`?` ， `+` ， `&`和`()`是其**正则表达式**对应项的子集。
- 连字符（ `-` ）和点（ `.` ）由**基于字符串的**路径按字面意义解释。

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

**基于字符串模式的路由路径示例**

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

## 参数

路由参数被**命名为URL段** ，用于捕获URL中在其位置处指定的值。可以使用[Params](https://fiber.wiki/context#params)函数检索捕获的值，并将路径中指定的route参数的名称作为其各自的键。

{% hint style="info" %}
route参数的名称必须由**字符**（`[A-Za-z0-9_]`）组成。
{% endhint %}

{% hint style="danger" %}
连字符(`-`)和(`.`) 暂时**不**支持。
针对**Fibre** v2进行了规划。
{% endhint %}

**使用路径参数定义路径的示例**

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

## 中间件

意在更改请求或响应的**功能**被称为**中间件功能**。 [Next](https://github.com/gofiber/docs/tree/34729974f7d6c1d8363076e7e88cd71edc34a2ac/context/README.md#next)是**Fiber**路由器功能，在调用时，将执行**next**路由**匹配**的功能。

**中间件功能示例**

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

{% hint style="info" %}
如果**不确定**何时使用**All**或**Use** ：请在[此处](https://fiber.wiki/application#methods)阅读[Methods API](https://fiber.wiki/application#methods)。
{% endhint %}
