---
description: Documentação da API para que você possa começar a criar aplicações Web com o Fiber.
---

# 📖 Guia de Introdução

 [![](https://img.shields.io/github/release/gofiber/fiber?style=flat-square)](https://github.com/gofiber/fiber/releases)  [![](https://img.shields.io/badge/go.dev-007d9c?logo=go&logoColor=white&style=flat-square)](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc)   [![](https://goreportcard.com/badge/github.com/gofiber/fiber?style=flat-square)](https://goreportcard.com/report/github.com/gofiber/fiber)  [![](https://img.shields.io/badge/coverage-91-brightgreen?style=flat-square)](https://gocover.io/github.com/gofiber/fiber)  [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Test?label=tests&style=flat-square)](https://github.com/gofiber/fiber/actions?query=workflow%3ATest)  [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Gosec?label=gosec&style=flat-square)](https://github.com/gofiber/fiber/actions?query=workflow%3AGosec)

**Fiber** é um **framework web** inspirado em [Express](https://github.com/expressjs/express), construído sobre o [FastHttp](https://github.com/valyala/fasthttp),  ecanismo HTTP **mais rápida** para [Go](https://golang.org/doc/). Projetado para **facilitar** as coisas para desenvolvimento **rápido** com **zero alocação de memória** e **desempenho** em mente.

## Installation

Antes de tudo, [baixe](https://golang.org/dl/) e instale o Go. `1.11` ou superior é necessário.

A instalação é feita usando o comando[`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them):

```bash
go get -u github.com/gofiber/fiber
```

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
// Resposta com "Hello, World!" na rota principal, "/"
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

