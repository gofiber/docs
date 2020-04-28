---
description: >-
  La ruta se refiere a cómo los extremos (endpoints) de una aplicación (URIs) responden a las peticiones del cliente.
---

# 🔌 Routing

## Paths

Las direcciones de la ruta, en combinación con un método de solicitud, definen los extremos en los que se pueden realizar las solicitudes. Las rutas pueden ser **cadenas (strings)** o **patrones de cadenas**.

**Ejemplos de rutas basadas en cadenas**

```go
// Esta ruta coincidirá con las solicitudes de la ruta raíz, "/":
app.Get("/", func(c *fiber.Ctx) {
  c. end("root")
})

// Esta ruta coincidirá con las solicitudes a "/about":
app. et("/about", func(c *fiber.Ctx) {
  c.Send("about")
})

// Esta ruta de ruta coincidirá con las solicitudes a "/random.txt":
app.Get("/random.txt", func(c *fiber.Ctx) {
  c.Send("random.txt")
})
```

## Parámetros

Los parámetros de ruta son **segmentos URL nombrados** que se utilizan para capturar los valores especificados en su posición en la URL. Los valores capturados pueden ser recuperados usando la función [Params](https://fiber.wiki/context#params) con el nombre del parámetro de ruta especificado en la dirección como sus claves respectivas.

{% hint style="info" %}
El nombre del parámetro de ruta debe estar compuesto de **caracteres** \(`[A-Za-z0-9_]`\).
{% endhint %}

{% hint style="danger" %}
El guión \\(`-`\\) no está **interpretado literalmente**. Planeado para **Fiber** v1.10.
{% endhint %}

**Ejemplo de definir rutas con parámetros de ruta**

```go
// Parámetros
app.Get("/user/:name/books/:title", func(c *fiber.Ctx) {
  c.Write(c.Params("name"))
  c.Write(c.Params("title"))
})
// Comodín
app. et("/user/*", func(c *fiber.Ctx) {
  c.Send(c.Params("*"))
})
// Parámetro opcional
app.Get("/user/:name?", func(c *fiber.Ctx) {
  c.Send(c.Params("name"))
})
```

## Middleware

Las funciones, diseñadas para hacer cambios en la solicitud o respuesta, se llaman **funciones de middleware**. La función de ruta [Next](https://github.com/gofiber/docs/tree/34729974f7d6c1d8363076e7e88cd71edc34a2ac/context/README.md#next) de **Fiber**, cuando se llama, ejecuta la **siguiente** función que **coincida** con la ruta actual.

**Ejemplo de una función middleware**

```go
app se(func(c *fiber.Ctx) {
  // Establece algunos encabezados de seguridad:
  c.Set("X-XSS-Protection", "1; mode=block")
  c.Set("X-Content-Type-Options", "nosniff")
  c.Set("X-Download-Options", "noopen")
  c.Set("Strict-Transport-Security", "max-age=5184000")
  c.Set("X-Frame-Options", "SAMEORIGIN")
  c.Set("X-DNS-Prefetch-Control", "off")

  // Ir al siguiente middleware:
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

