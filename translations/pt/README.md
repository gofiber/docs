---
description: >-
  An online API documentation with examples so you can start building web apps with Fiber right away!
---

# 📖 Guia de Introdução

**Fiber** é um **framework web** inspirado em [Express](https://github.com/expressjs/express), construído sobre o [FastHttp](https://github.com/valyala/fasthttp),  ecanismo HTTP **mais rápida** para [Go](https://golang.org/doc/). Projetado para **facilitar** as coisas para desenvolvimento **rápido** com **zero alocação de memória** e **desempenho** em mente.

## Installation

Antes de tudo, [baixe](https://golang.org/dl/) e instale o Go. `1.11` ou superior é necessário.

A instalação é feita usando o comando[`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them):

```bash
go get -u github.com/gofiber/fiber
```

## Zero Allocation

{% hint style="warning" %}
Some values returned from [**fiber.Ctx**](ctx.md) are **not** immutable by default
{% endhint %}

Because fiber is optimized for **high performance**, values returned from [**fiber.Ctx**](ctx.md) are **not** immutable by default and **will** be re-used across requests. As a rule of thumb, you **must** only use context values within the handler, and you **must not** keep any references. As soon as you return from the handler, any values you have obtained from the context will be re-used in future requests and will change below your feet. Here is an example:

```go
func handler(c *fiber.Ctx) {
    result := c.Param("foo") // result is only valid within this method
}
```

If you need to persist such values outside the handler, make copies of their **underlying buffer** using the [copy](https://golang.org/pkg/builtin/#copy) builtin. Here is an example for persisting a string:

```go
func handler(c *fiber.Ctx) {
    result := c.Param("foo") // result is only valid within this method
    newBuffer := make([]byte, len(result))
    copy(newBuffer, result)
    newResult := string(newBuffer) // newResult is immutable and valid forever
}
```

Alternatively, you can also use the[ **Immutable setting**](app.md#settings). It will make all values returned from the context immutable, allowing you to persist them anywhere. Of course, this comes at the cost of performance.

For more information, please check ****[**\#426**](https://github.com/gofiber/fiber/issues/426) and ****[**\#185**](https://github.com/gofiber/fiber/issues/185).

## Hello, World!

Abaixo temos o exemplo mais simples de um app **Fiber** que você pode criar.

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

Abrindo o navegador em `http://localhost:3000` você deveria ver `Hello, World!` na tela.

## Basic routing

Roteamento refere-se a determinar como uma aplicação responde a uma requisição do cliente para um endpoint específico, que é um URI \(ou caminho\) e um método de requisição HTTP específico \(GET, PUT, POST e assim por diante\).

{% hint style="info" %}
Cada rota pode ter **várias funções handler**, que são executadas quando a rota é combinada.
{% endhint %}

A definição de rota aceita as seguintes estruturas:

```go
// Assinatura da Função
app.Method(path string, ...func(*fiber.Ctx))
```

* `app` é uma instância de **Fiber**.
* `Method` is an [HTTP request method](https://fiber.wiki/application#methods), in capitalization: `Get`, `Put`, `Post`, etc.
* `path` é um caminho virtual no servidor.
* `func(*fiber.Ctx)` é uma função callback que contém o [Context](https://fiber.wiki/context) executando quando a rota é correspondente.

**Rota simples**

```go
// Respond with "Hello, World!" on root path, "/"
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})
```

**Parâmetros**

```go
// GET http://localhost:8080/hello%20world

app.Get("/:value", func(c *fiber.Ctx) {
  c.Send("Get request with value: " + c.Params("value"))
  // => Get request with value: hello world
})
```

**Parâmetros opcionais**

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

## Static files

Para servir arquivos estáticos como **imagens**, **CSS** e arquivos **JavaScript**, substituir sua função handler com por um arquivo ou string de diretório.

Assinatura da função:

```go
app.Static(prefix, root string)
```

Use o seguinte código para servir os arquivos do diretório chamado `./public`:

```go
app := fiber.New()

app.Static("/", "./public") 

app.Listen(8080)
```

Agora, você pode carregar os arquivos que estão no diretório `./public`:

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```

