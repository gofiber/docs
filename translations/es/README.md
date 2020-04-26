---
descipcion: Una documentación de API para que puedas empezar a crear aplicaciónes web con Fiber.
---

# 📖 Poniendose en marcha

 [![](https://img.shields.io/github/release/gofiber/fiber?style=flat-square)](https://github.com/gofiber/fiber/releases)  [![](https://img.shields.io/badge/go.dev-007d9c?logo=go&logoColor=white&style=flat-square)](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc)   [![](https://goreportcard.com/badge/github.com/gofiber/fiber?style=flat-square)](https://goreportcard.com/report/github.com/gofiber/fiber)  [![](https://img.shields.io/badge/coverage-91%25-brightgreen?style=flat-square)](https://gocover.io/github.com/gofiber/fiber)  [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Test?label=tests&style=flat-square)](https://github.com/gofiber/fiber/actions?query=workflow%3ATest)  [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Gosec?label=gosec&style=flat-square)](https://github.com/gofiber/fiber/actions?query=workflow%3AGosec)

**Fiber** es un **web framework** inspirado en [Express](https://github.com/expressjs/express) desarrolado sobre [Fasthttp](https://github.com/valyala/fasthttp), el motor HTTP **mas rápido** para [Go](https://golang.org/doc/). Diseñado para **facilitar** las cosas logrando un desarrollo **rápido** con **nula asignación de memoria** y **rendimiento** en mente.

## Instalación

Antes que nada, [descarga](https://golang.org/dl/) e instala Go. `1.11` o posterior es requerido.

La instalación se realiza usando el comando [`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them):

```bash
go get -u github.com/gofiber/fiber
```

## Hola, Mundo!

Lo incrustado debajo es la app **Fiber** mas simple que puedes crear.

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

Navega a `http://localhost:3000` y deberias ver `Hola, Mundo!` en la página.

## Enrutamiento básico

El enrutado hace referencia a determinar como una aplicación responde a los pedidos del cliente en un endpoint en particular, siendo este un URI (o ruta\) y un método de pedido HTTP especifico \(GET, PUT, POST y así\).

{% hint style="info" %}
Cara ruta puede tener **multiples funciones transportadoras**, que son ejecutadas cuando la ruta es igualada.
{% endhint %}

La deficion de la ruta acepta las siguientes estructuras: 

```go
// Firma de la función
app.Method(path string, ...func(*fiber.Ctx))
```

* `app` es la instancia de **Fiber**.
* `Method` es un [método de pedido HTTP](https://fiber.wiki/application#methods), usando mayúsculas: `Get`, `Put`, `Post`, etc.
* `path` es una ruta virtual en el servidor.
* `func(*fiber.Ctx)` es una función de devolución de llamada conteniendo el [Contexto](https://fiber.wiki/context) ejecutado cuando la ruta es igualada.

**Ruta simple**

```go
// Responde con "Hola, Mundo!" en la ruta raiz, "/"
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hola, Mundo!")
})
```

**Parametros**

```go
// GET http://localhost:8080/hola%20mundo

app.Get("/:valor", func(c *fiber.Ctx) {
  c.Send("Pedido Get con el valor: " + c.Params("valor"))
  // => Pedido Get con el valor: hola mundo
})
```

**Parametros opcionales**

```go
// GET http://localhost:3000/john

app.Get("/:nombre?", func(c *fiber.Ctx) {
  if c.Params("nombre") != "" {
    c.Send("Hola " + c.Params("nombre"))
    // => Hola john
  } else {
    c.Send("¿Dondé está john?")
  }
})
```

**Comodines**

```go
// GET http://localhost:3000/api/user/john

app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("Ruta API: " + c.Params("*"))
  // => Ruta API: user/john
})
```

## Archivos estáticos

Para servir archivos estáticos como **imágenes**, **CSS** y **Javascript**, reemplaza tu función transportadora con un archivo o directorio en formato string.

Firma de la función:

```go
app.Static(prefix, root string)
```

Usa el siguiente código para servir archivos en un directorio llamado `./public`:

```go
app := fiber.New()

app.Static("/", "./public") 

app.Listen(8080)
```

Ahora, puedes cargar los archivos que esten en la carpeta `./public`:

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```

