---
description: >-
  Маршрутизация относится к тому, как конечные точки (endpoints) приложения отвечают на запросы клиентов.
---

# 🔌 Маршрутизация

## Paths

Пути маршрутов в комбинации с методом запроса определяют конечные точки, в которых могут быть сделаны запросы. Пути маршрутов могут быть **strings** или **string patterns**.

**Примеры путей маршрута на основе строк**

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

## Параметры

Параметры маршрута — это **именованные сегменты URL**, которые используются для записи значений, указанных в их позиции в URL. Перехваченные значения можно получить с помощью функции [Params](https://fiber.wiki/context#params), с именем параметра маршрута, указанным в пути в качестве соответствующих ключей.

{% hint style="info" %}
Имя параметра маршрута должно состоять из **символов** \(`[A-Za-z0-9_]`\).
{% endhint %}

{% hint style="danger" %}
Дефис \(`-`\) еще **не** интерпретируется буквально. Запланировано в **Fiber** версии 1.10.
{% endhint %}

**Пример определения маршрутов с параметрами маршрута**

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

Функции, предназначенные для внесения изменений в запрос или ответ, называются **функциями middleware**. [Next](https://github.com/gofiber/docs/tree/34729974f7d6c1d8363076e7e88cd71edc34a2ac/context/README.md#next) — это функция маршрутизации в **Fiber**, при вызове которой, происходит исполнение **следующей** функции, что **соответствует** текущему маршруту.

**Пример функции middleware**

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

`Use` method path is a **mount** or **prefix** path and limits middleware to only apply to any paths requested that begin with it. Это означает, что вы не можете использовать `:params` в методе `Use`.

## Grouping

Если у вас много конечных точек (endpoints), то вы можете организовать свои маршруты с помощью `Group`

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

