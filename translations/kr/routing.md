---
description: >-
  Routing은 어플리케이션의 엔드포인트 (URI)가 클라이언트의 요청에 어떻게 응답하는지를 나타냅니다.
---

# 🔌 Routing

## Paths

요청 메소드와 함께하는 라우트 경로는, 요청이 만들어질 수 있는 엔드포인트를 정의합니다. 라우트 경로는 **strings** 또는 **string patterns**입니다.

**문자열 기반의 라우트 경로 예제**

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

라우트 파라미터들은 URL에서 그들의 위치에 명시된 값을 저장하기 위해 사용되는 **지명된 URL 조각** 입니다. 저장된 값들은 경로에 명시된 라우트 파라미터의 이름을 각각 키로 삼아 [Params](https://fiber.wiki/context#params) 함수를 사용해 가져올 수 있습니다.

{% hint style="info" %}
라우트 파라미터의 이름은 **characters** \(`[A-Za-z0-9_]`\) 로 구성되어야 합니다.
{% endhint %}

{% hint style="danger" %}
하이픈 \(`-`\) 은 아직 문자로 해석되지 **않습니다**. **Fiber** v1.11 에서 계획 중입니다.
{% endhint %}

**라우트 파라미터를 사용한 라우트 정의 예제**

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

요청 또는 응답에 변화를 주기 위해 설계된 함수들을 **미들웨어 함수**라고 합니다. **Fiber** 라우터 함수인 [Next](https://github.com/gofiber/docs/tree/34729974f7d6c1d8363076e7e88cd71edc34a2ac/context/README.md#next) 는, 호출 시 현재 라우트에 **일치하는** **next** 함수를 실행합니다.

**미들웨어 함수 예제**

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

`Use` 메소드 경로는 경로의 **시작점** 또는 **접두사** 이고 미들웨어가 이것으로 시작하는 경로일 때에만 적용되게 제한합니다. 이것은 여러분이 `:params`를 `Use` 메소드에서 사용할 수 없음을 의미합니다.

## Grouping

만약 여러분이 많은 엔드포인트들을 가지고 있다면, 여러분은 라우트를 `Group`을 통해 조직화할 수 있습니다.

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

