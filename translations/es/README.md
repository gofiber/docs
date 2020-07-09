---
description: >-
  ¡Una documentación de API en línea con ejemplos para que puedas comenzar a construir aplicaciones web con Fiber de inmediato!
---

# 📖 Primeros Pasos

**Fiber** es un **framework web** inspirado en [Express](https://github.com/expressjs/express) desarollado sobre [Fasthttp](https://github.com/valyala/fasthttp), el motor HTTP **más rápido** para [Go](https://golang.org/doc/). Diseñado para **facilitar** las cosas logrando un **desarrollo rápido** teniendo en mente la **cero asignación de memoria** y el **rendimiento**.

## Installation

En primer lugar, [descargue](https://golang.org/dl/) e instale Go. Es necesaria la version `1.11` o superior.

La instalación se realiza utilizando el comando [`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them):

```bash
go get -u github.com/gofiber/fiber
```

## Sin asignación de memoria

{% hint style="warning" %}
Some values returned from [**fiber.Ctx**](ctx.md) are **not** immutable by default
{% endhint %}

Because fiber is optimized for  **high-performance**, values returned from [**fiber.Ctx**](ctx.md) are **not** immutable by default and **will** be re-used across requests. Como regla general, **solo debe** usar valores de contexto dentro del manejador, y **no debe** mantener ninguna referencia. Tan pronto como regreses del manejador, cualquier valor que hayas obtenido del contexto será reutilizado en futuras peticiones y cambiará sin que te des cuenta. Aquí tienes un ejemplo:

```go
func handler(c *fiber.Ctx) {
    result := c.Param("foo") // el resultado sólo es válido dentro de este método
}
```

Si necesita persistir estos valores fuera del manejador, haga copias de su **búfer subyacente** usando la [función copy](https://golang.org/pkg/builtin/#copy) del lenguaje. Este es un ejemplo para persistir una cadena:

```go
func handler(c *fiber.Ctx) {
    result := c. aram("foo") // el resultado sólo es válido dentro de este método
    newBuffer := make([]byte, len(result))
    copy(newBuffer, result)
    newResult := string(newBuffer) // newResult es inmutable y válido para siempre
}
```

We created a custom `ImmutableString` function that does the above and is available in the [gofiber/utils](https://github.com/gofiber/utils) package.

```go
app.Get("/:foo", func(c *fiber.Ctx) {
    result := utils.ImmutableString(c.Param("foo")) 
    // result is now immutable
}
```

Alternatively, you can also use the[ **Immutable setting**](app.md#settings). It will make all values returned from the context immutable, allowing you to persist them anywhere. Of course, this comes at the cost of performance.

For more information, please check **\*\*\[**\#426**\]\(**[https://github.com/gofiber/fiber/issues/426](https://github.com/gofiber/fiber/issues/426)**\) and \*\***[**\#185**](https://github.com/gofiber/fiber/issues/185).

## Hola mundo!

Embedded below is essentially the most straightforward **Fiber** app, which you can create.

```go
package main

import "github.com/gofiber/fiber"

func main() {
  app := fiber.New()

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Hello, World!")
  })

  app.Listen(3000)
}
```

```text
go run server.go
```

Browse to `http://localhost:3000,` and you should see `Hello, World!` on the page.

## Enrutamiento básico

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI \(or path\) and a specific HTTP request method \(GET, PUT, POST and so on\).

{% hint style="info" %}
Each route can have **multiple handler functions**, that is executed when the route is matched.
{% endhint %}

Route definition takes the following structures:

```go
// Function signature
app.Method(path string, ...func(*fiber.Ctx))
```

* `app` es una instancia de **Fiber**.
* `Method` es un [método de solicitud HTTP](https://fiber.wiki/application#methods), en mayúsculas: `Obtener`, `Poner`, `Post`, etc.
* `path` es una ruta virtual en el servidor.
* `func(*fiber.Ctx)` es una función de devolución de llamada que contiene el [Context](https://fiber.wiki/context) ejejecutado cuando la ruta es igualada.

**Simple route**

```go
// Respond with "Hello, World!" on root path, "/"
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})
```

**Parámetros**

```go
// GET http://localhost:8080/hello%20world

app.Get("/:value", func(c *fiber.Ctx) {
  c.Send("Get request with value: " + c.Params("value"))
  // => Get request with value: hello world
})
```

**Optional parameter**

```go
// GET http://localhost:3000/john

app.Get("/:name?", func(c *fiber.Ctx) {
  if c.Params("name") != "" {
    c.Send("Hello " + c.Params("name"))
    // => Hello john
  } else {
    c.Send("Where is john?")
  }
})
```

**Wildcards**

```go
// GET http://localhost:3000/api/user/john

app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("API path: " + c.Params("*"))
  // => API path: user/john
})
```

## Archivos estáticos

To serve static files such as **images**, **CSS**, and **JavaScript** files, replace your function handler with a file or directory string.

Function signature:

```go
app.Static(prefix, root string)
```

Use the following code to serve files in a directory named `./public`:

```go
app := fiber.New()

app.Static("/", "./public") 

app.Listen(8080)
```

Now, you can load the files that are in the `./public` directory:

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```

## Note

For more information on how to build APIs in Go with Fiber, please check out this excellent article [on building an express-style API in Go with Fiber](https://blog.logrocket.com/express-style-api-go-fiber/)

