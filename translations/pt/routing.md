---
description: >-
  Roteamento refere-se a como os endpoints de um aplicativo (URIs) respondem requisições de clientes.
---

# 🔌 Routing

## Paths

Caminhos de rota, em combinação com os métodos de solicitação, definem os terminais em que as solicitações podem ser feitas. Caminhos de rota podem ser **strings** ou **string patterns**.

**Exemplos de caminhos de rota baseados em strings**

```go
// Este caminho de rota corresponde a solicitações à rota raiz, /.
app.Get("/", func(c *fiber.Ctx) {
  c.Send("root")
})

// Este caminho de rota irá corresponder a solicitações ao /about.
app.Get("/about", func(c *fiber.Ctx) {
  c.Send("about")
})

// Este caminho de rota irá corresponder a solicitações ao "/random.txt":
app.Get("/random.txt", func(c *fiber.Ctx) {
  c.Send("random.txt")
})
```

## Parâmetros

Parâmetros de rota são **nomeados segmentos de URL** que são usados para capturar os valores especificados em sua posição na URL. Os valores capturados podem ser recuperados usando a função [Params](https://fiber.wiki/context#params), com o nome do parâmetro de rota especificado no caminho como suas respectivas chaves.

{% hint style="info" %}
O nome do parâmetro de rota deve conter **caracteres** \(`[A-Za-z0-9_]`\).
{% endhint %}

{% hint style="danger" %}
O hífen \(`-`\) não é **** interpretado ainda. Planejado para o **Fiber** v1.11.x
{% endhint %}

**Exemplo de rotas de definição com parâmetros**

```go
// Parâmetros
app.Get("/user/:name/books/:title", func(c *fiber.Ctx) {
  c.Write(c.Params("name"))
  c.Write(c.Params("title"))
})
// Wildcard
app.Get("/user/*", func(c *fiber.Ctx) {
  c.Send(c.Params("*"))
})
// Parâmetros opcionais
app.Get("/user/:name?", func(c *fiber.Ctx) {
  c.Send(c.Params("name"))
})
```

## Middleware

Funções que são projetadas para fazer alterações na requisição ou resposta, são chamadas de **funções de middleware**. [Next](https://github.com/gofiber/docs/tree/34729974f7d6c1d8363076e7e88cd71edc34a2ac/context/README.md#next) é uma função de rotas **Fiber**, quando chamada, executa a a **próxima** função **correspondente** à rota atual.

**Exemplo de uma função middleware**

```go
app.Use(func(c *fiber.Ctx) {
  // Set some security headers:
  c.Set("X-XSS-Protection", "1; mode=block")
  c.Set("X-Content-Type-Options", "nosniff")
  c.Set("X-Download-Options", "noopen")
  c.Set("Strict-Transport-Security", "max-age=5184000")
  c.Set("X-Frame-Options", "SAMEORIGIN")
  c.Set("X-DNS-Prefetch-Control", "off")

  // Vai para próximo middleware:
  c.Next()
})

app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})
```

O caminho do método ` Use ` é um caminho de montagem ou prefixo e limita o middleware a aplicar-se apenas a todos os caminhos solicitados que começam com ele. Isso significa que você não pode usar `:params ` no método ` Use `.

## Grouping

Se você tem mutios endpoints, vocẽ pode organizar suas rotas usando `Group`

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
```

