---
description: Una documentación de API para que puedas empezar a crear aplicaciónes web con Fiber.
---

# Primeros Pasos

 [![](https://img.shields.io/github/release/gofiber/fiber?style=flat-square)](https://github.com/gofiber/fiber/releases)  [![](https://img.shields.io/badge/go.dev-007d9c?logo=go&logoColor=white&style=flat-square)](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc)   [![](https://goreportcard.com/badge/github.com/gofiber/fiber?style=flat-square)](https://goreportcard.com/report/github.com/gofiber/fiber)  [![](https://img.shields.io/badge/coverage-91%25-brightgreen?style=flat-square)](https://gocover.io/github.com/gofiber/fiber)  [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Test?label=tests&style=flat-square)](https://github.com/gofiber/fiber/actions?query=workflow%3ATest)  [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Gosec?label=gosec&style=flat-square)](https://github.com/gofiber/fiber/actions?query=workflow%3AGosec)

**Fiber** es un **framework web** inspirado en [Express](https://github.com/expressjs/express) desarollado sobre [Fasthttp](https://github.com/valyala/fasthttp), el motor HTTP **más rápido** para [Go](https://golang.org/doc/). Diseñado para **facilitar** las cosas logrando un **desarrollo rápido** con **cero asignación de memoria** y **rendimiento** en mente.

## Installation

En primer lugar, [descargue](https://golang.org/dl/) e instale Go. `1.11` o superior es requerido.

La instalación se realiza utilizando el comando [`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them):

```bash
go get -u github.com/gofiber/fiber
```

## Hello, World!

Insertado a continuación es esencialmente la aplicación **Fiber** más simple, que puedes crear.

```go
package main

import "github.com/gofiber/fiber"

func main() {
  app := fiber.New()

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Hola, Mundo!")
  })

  app.Listen(3000)
}
```

```text
go run server.go
```

Navega a `http://localhost:3000` y deberías ver `¡Hola, Mundo!` en la página.

## Basic routing

La ruta se refiere a determinar cómo responde una aplicación a una solicitud de cliente a un punto final (endpoint) en particular, que es una URI \(o ruta\) y un método específico de petición HTTP \(GET, PUT, POST y así sucesivamente\).

{% hint style="info" %}
Cada ruta puede tener **múltiples funciones de manejador**, que se ejecutan cuando la ruta es igualada.
{% endhint %}

La definición de ruta toma las siguientes estructuras:

```go
// Firma de la función
app.Method(path string, ...func(*fiber.Ctx))
```

* `app` es una instancia de **Fiber**.
* `Method` es un [método de solicitud HTTP](https://fiber.wiki/application#methods), en mayúsculas: `Obtener`, `Poner`, `Post`, etc.
* `path` es una ruta virtual en el servidor.
* `func(*fiber.Ctx)` es una función de devolución de llamada que contiene el [Context](https://fiber.wiki/context) ejejecutado cuando la ruta es igualada.

**Ruta simple**

```go
// Responde con "Hola, Mundo!" en la ruta raíz, "/"
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hola, Mundo!")
})
```

**Parámetros**

```go
// Get http://localhost:8080/hello%20world

app.Get("/:valor", func(c *fiber.Ctx) {
  c. end("Pedido Get con el valor: " + c.Params("valor"))
  // => Pedido Get con el valor: hola mundo
})
```

**Parámetros opcionales**

```go
// GET http://localhost:3000/john

app.Get("/:nombre?", func(c *fiber.Ctx) {
  if c.Params("nombre") != "" {
    c.Send("Hola " + c.Params("nombre"))
    // => Hola john
  } else {
    c.Send("¿Dondé está John??")
  }
})
```

**Caracteres comodín**

```go
// GET http://localhost:3000/api/user/john

app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("Ruta API: " + c.Params("*"))
  // => Ruta API: user/john
})
```

## Static files

Para servir archivos estáticos como archivos de **imágenes**, **CSS** y **JavaScript**, reemplaza tu manejador de funciones con un string de archivo o directorio.

Function signature:

```go
app.Static(prefix, root string)
```

Usa el siguiente código para servir archivos en un directorio llamado `./public`:

```go
app := fiber.New()

app.Static("/", "./public") 

app.Listen(8080)
```

Ahora, puedes cargar los archivos que están en el directorio `./public`:

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```

