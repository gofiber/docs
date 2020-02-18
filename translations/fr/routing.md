---
description: >-
  Le routing désigne la manière avec laquelle les endpoints d'une application (URIs) répondent aux requêtes du client.
---

# 🔌  Routing

## Paths

Les route paths, combinés avec une request method, définissent les endpoints sur lesquels les requêtes peuvent être effectués. Ces route paths peuvent être des **strings**, **string patterns** ou **regular expressions**.

**Caractères spéciaux**

* Les caractères `?`, `+`, `&` et `()` sont des sous-ensembles de leurs homologues en **regular expressions**.

* Le trait d'union \(`-`\) et le point \(`.`\) sont interprétés littéralement dans des chemins "**string-based**".

**Exemples de route paths basés sur des strings**

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

**Exemples de route paths basés sur des string patterns**

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

## Parameters

Les route parameters sont des **segments d'URL nommés** qui sont utilisés pour capturer les valeurs spécifiées dans l'URL. Les valeurs capturées peuvent être récupérées via la fonction [Params](https://fiber.wiki/context#params), avec le nom du route parameter spécifié dans le chemin comme étant leurs clés respectives.

{% hint style="info" %}
Le nom du route parameter doit être constitué de **caractères alphanumériques** \(`[A-Za-z0-9_]`\).
{% endhint %}

{% hint style="danger" %}
Le trait d'union \(`-`\) et le point \(`.`\) ne sont pas encore littéralement interprétés.
Prévu pour **Fiber** v2.
{% endhint %}

**Exemple de route définie avec des route parameters**

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

Les fonctions qui sont mises en place pour altérer la requête ou la réponse, sont appelés **middleware functions**.

[Next](https://github.com/gofiber/docs/tree/34729974f7d6c1d8363076e7e88cd71edc34a2ac/context/README.md#next) est une router function de **Fiber** qui, quand appelée, execute la **next** fonction qui **match** la route actuelle.

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

Le method path `Use` est un "**mount** or **prefix**" path. Il limite les middleware à tout path qui commence avec. Cela veut donc dire, que vous ne pouvez pas utiliser `:params` dans la méthode `Use`.

{% hint style="info" %}
Si vous ne savez pas quand il faut utiliser **All** ou **Use**: jetez un coup d'oeil aux [API Methods](https://fiber.wiki/application#methods).
{% endhint %}