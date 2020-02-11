---
description: Roteamento refere-se a como os pontos de extremidade (URIs) de um aplicativo respondem às solicitações do cliente.
---

# 🔌 Roteamento

## Caminhos

Os caminhos de rota, em combinação com um método de solicitação, definem os pontos de extremidade nos quais as solicitações podem ser feitas. Os caminhos da rota podem ser **cadeias** , **padrões de cadeias** ou **expressões regulares** .

**Caracteres especiais**

- Os personagens `?` , `+` , `&` e `()` são subconjuntos de seus equivalentes de **expressão regular** .
- O hífen ( `-` ) e o ponto ( `.` ) São interpretados literalmente por caminhos **baseados** em **string** .

**Exemplos de caminhos de rota baseados em strings**

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

**Exemplos de caminhos de rota com base em padrões de sequência**

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

## Parâmetros

Os parâmetros de rota são **denominados segmentos de URL** que são usados para capturar os valores especificados em sua posição no URL. Os valores capturados podem ser recuperados usando a função [Params](https://fiber.wiki/context#params) , com o nome do parâmetro de rota especificado no caminho como suas respectivas chaves.

{% hint style = "info"%} O nome do parâmetro da rota deve ser composto de **caracteres** da **palavra** ( `[A-Za-z0-9_]` ). {% endhint%}

{% hint style = "danger"%} O hífen ( `-` ) e o ponto ( `.` ) ainda **não foram** interpretados literalmente.
 Planejado para o **Fiber** v2. {% endhint%}

**Exemplo de definição de rotas com parâmetros de rota**

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

## Middleware

As funções projetadas para fazer alterações na solicitação ou resposta são chamadas de **funções de middleware** . A [próxima](https://github.com/gofiber/docs/tree/34729974f7d6c1d8363076e7e88cd71edc34a2ac/context/README.md#next) é uma função de roteador de **fibra** , quando chamada, executa a **próxima** função que **corresponde** à rota atual.

**Exemplo de função de middleware**

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

`Use` method path é um caminho de **montagem** ou **prefixo** e limita o middleware a aplicar-se apenas a todos os caminhos solicitados que começam com ele. Isso significa que você não pode usar `:params` no método `Use` .

{% hint style = "info"%} Se você **não tiver certeza de** quando usar **Tudo** ou **Usar** : leia aqui sobre a [API de métodos](https://fiber.wiki/application#methods) . {% endhint%}
