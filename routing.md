---
description: '- TODO: Add short description -'
---

# 🔌  Routing

## Paths

Route paths, in combination with a request method, define the endpoints at which requests can be made. Route paths can be **strings**, **string patterns** or **regular expressions**.

#### Special characters

* The characters `?`, `+`, `&` and `()` are subsets of their **regular expression** counterparts. 
* The hyphen \(`-`\) and the dot \(`.`\) are interpreted literally by **string-based** paths.

#### Examples of route paths based on strings

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

#### Examples of route paths based on string patterns

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

Route parameters are **named URL segments** that are used to capture the values specified at their position in the URL. The captured values can be retrieved using the [Params](https://fiber.wiki/context#params) function, with the name of the route parameter specified in the path as their respective keys.

{% hint style="info" %}
Name of the route parameter must be made up of **word characters** \(`[A-Za-z0-9_]`\).
{% endhint %}

{% hint style="danger" %}
The hyphen \(`-`\) and the dot \(`.`\) are **not** interpreted literally yet.  
Planned for **Fiber** v2.
{% endhint %}

#### Example of define routes with route parameters

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

Functions, that are designed to make changes to the request or response, are called **middleware functions**. The [Next](https://github.com/gofiber/docs/tree/34729974f7d6c1d8363076e7e88cd71edc34a2ac/context/README.md#next) is a **Fiber** router function, when called, executes the **next** function that **matches** the current route.

#### Example of a middleware function

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

{% hint style="info" %}
If you are **not sure** when to use **All** or **Use**: read about the [Methods API here](https://fiber.wiki/application#methods).
{% endhint %}

