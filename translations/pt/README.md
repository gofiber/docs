---
description: Uma documentação hospedada para que você possa começar a criar aplicativos da Web com o Fiber.
---

# 📖 Introdução

[![](https://img.shields.io/github/release/gofiber/fiber?style=flat-square)](https://github.com/gofiber/fiber/releases) [![](https://img.shields.io/badge/api-documentation-blue?style=flat-square)](https://fiber.wiki) ![](https://img.shields.io/badge/goreport-A%2B-brightgreen?style=flat-square) [![](https://img.shields.io/badge/coverage-91%25-brightgreen?style=flat-square)](https://gocover.io/github.com/gofiber/fiber) [![](https://img.shields.io/travis/gofiber/fiber/master.svg?label=linux&style=flat-square)](https://travis-ci.org/gofiber/fiber) [![](https://img.shields.io/travis/gofiber/fiber/master.svg?label=windows&style=flat-square)](https://travis-ci.org/gofiber/fiber)

**O Fiber** é uma [estrutura da](https://github.com/expressjs/express) **Web** inspirada no [Expressjs](https://github.com/valyala/fasthttp) , construída sobre o [Fasthttp](https://github.com/valyala/fasthttp) , o mecanismo HTTP **mais rápido** do [Go](https://golang.org/doc/) . Projetado para **facilitar** o desenvolvimento **rápido** , com **zero de alocação de memória** e **desempenho** em mente.

## Instalando

Primeiro de tudo, faça o [download](https://golang.org/dl/) e instale o Go.

{% hint style = "success"%} É necessário **1,11** (com os [módulos de ativação](https://golang.org/doc/go1.11#modules) ativados) ou superior. {% endhint%}

A instalação é feita usando o comando [`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them) :

```bash
go get -u github.com/gofiber/fiber
```

## Olá Mundo!

Incorporado abaixo está o aplicativo **Fibre** essencialmente mais simples, que você pode criar.

```text
touch server.go
```

```go
package main

import "github.com/gofiber/fiber"

func main() {
  // Create new Fiber instance:
  app := fiber.New()
  
  // Create route on root path, "/":
  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Hello, World!")
    // => "Hello, World!"
  })
  
  // Start server on "localhost" with port "8080":
  app.Listen(8080)
}
```

```text
go run server.go
```

Navegue para `http://localhost:8080` e você verá `Hello, World!` na página.

## Roteamento básico

O roteamento refere-se à determinação de como um aplicativo responde a uma solicitação do cliente para um terminal específico, que é um URI (ou caminho) e um método de solicitação HTTP específico (GET, PUT, POST e assim por diante).

{% hint style = "info"%} Cada rota pode ter **uma função de manipulador** , que é executada quando a rota é correspondida. {% endhint%}

A definição de rota utiliza as seguintes estruturas:

```go
// Function signature
app.Method(func(*fiber.Ctx))
app.Method(path string, func(*fiber.Ctx))
```

- `app` é uma instância do **Fiber** .
- `Method` é um [método de solicitação HTTP](https://fiber.wiki/application#methods) , em maiúsculas: `Get` , `Put` , `Post` , etc.
- `path` é um caminho no servidor.
- `func(*fiber.Ctx)` é uma função de retorno de chamada que contém o [contexto](https://fiber.wiki/context) executado quando a rota é correspondida.

### Rota simples

```go
// Respond with "Hello, World!" on root path, "/":
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})
```

### Rota com parâmetro

```go
// GET http://localhost:8080/hello%20world

app.Get("/:value", func(c *fiber.Ctx) {
  c.Send("Get request with value: " + c.Params("value"))
  // => Get request with value: hello world
})
```

### Rota com parâmetro opcional

```go
// GET http://localhost:8080/hello%20world

app.Get("/:value?", func(c *fiber.Ctx) {
  if c.Params("value") != "" {
    c.Send("Get request with value: " + c.Params("Value"))
    // => Get request with value: hello world
    return
  }
  
  c.Send("Get request without value")
})
```

### Rota com curinga

```go
// GET http://localhost:8080/api/user/john

app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("API path with wildcard: " + c.Params("*"))
  // => API path with wildcard: user/john
})
```

## Arquivos estáticos

Para veicular arquivos estáticos, como **imagens** , arquivos **CSS** e **JavaScript** , substitua o manipulador de funções por uma sequência de arquivos ou diretórios.

Assinatura da função:

```go
app.Static(root string)         // => without prefix
app.Static(prefix, root string) // => with prefix
```

Use o código a seguir para servir arquivos em um diretório chamado `./public` :

```go
app := fiber.New()

app.Static("./public") // => Serve all files into ./public

app.Listen(8080)
```

Agora, você pode carregar os arquivos que estão no diretório `./public` :

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```
