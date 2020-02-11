---
description: El enrutamiento se refiere a cómo los puntos finales de una aplicación (URI) responden a las solicitudes de los clientes.
---

# 🔌 Enrutamiento

## Rutas

Las rutas de ruta, en combinación con un método de solicitud, definen los puntos finales en los que se pueden realizar solicitudes. Las rutas de ruta pueden ser **cadenas** , **patrones de cadena** o **expresiones regulares** .

**Caracteres especiales**

- Los personajes `?` , `+` , `&` y `()` son subconjuntos de sus equivalentes de **expresión regular** .
- El guión ( `-` ) y el punto ( `.` ) Se interpretan literalmente mediante rutas **basadas** en **cadenas** .

**Ejemplos de rutas de ruta basadas en cadenas**

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

**Ejemplos de rutas de ruta basadas en patrones de cadena**

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

## Parámetros

Los parámetros de ruta se **denominan segmentos de URL** que se utilizan para capturar los valores especificados en su posición en la URL. Los valores capturados se pueden recuperar utilizando la función [Params](https://fiber.wiki/context#params) , con el nombre del parámetro de ruta especificado en la ruta como sus respectivas claves.

{% hint style = "info"%} El nombre del parámetro de ruta debe estar compuesto por **caracteres** de **palabras** ( `[A-Za-z0-9_]` ). {% endhint%}

{% hint style = "danger"%} El guión ( `-` ) y el punto ( `.` ) aún **no se** interpretan literalmente.
 Planificado para **Fiber** v2. {% endhint%}

**Ejemplo de definir rutas con parámetros de ruta**

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

Las funciones, que están diseñadas para realizar cambios en la solicitud o respuesta, se denominan **funciones de middleware** . La [siguiente](https://github.com/gofiber/docs/tree/34729974f7d6c1d8363076e7e88cd71edc34a2ac/context/README.md#next) es una función de enrutador de **fibra** , cuando se llama, ejecuta la **siguiente** función que **coincide con** la ruta actual.

**Ejemplo de una función de middleware**

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

`Use` ruta del método de `Use` es una ruta de **montaje** o **prefijo** y limita el middleware para que solo se aplique a las rutas solicitadas que comienzan con él. Esto significa que no puede usar `:params` en el método `Use` .

{% hint style = "info"%} Si no está **seguro de** cuándo usar **All** o **Use** : lea sobre la [API de métodos aquí](https://fiber.wiki/application#methods) . {% endhint%}
