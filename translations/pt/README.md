---
description: Uma documentação hospedada para que você possa começar a criar aplicativos Web com o Fiber.
---

# 📖 Introdução

[![](https://img.shields.io/github/release/gofiber/fiber?style=flat-square)](https://github.com/gofiber/fiber/releases) [![](https://img.shields.io/badge/api-documentation-blue?style=flat-square)](https://fiber.wiki) ![](https://img.shields.io/badge/goreport-A%2B-brightgreen?style=flat-square) [![](https://img.shields.io/badge/coverage-91%25-brightgreen?style=flat-square)](https://gocover.io/github.com/gofiber/fiber) [![](https://img.shields.io/travis/gofiber/fiber/master.svg?label=linux&style=flat-square)](https://travis-ci.org/gofiber/fiber) [![](https://img.shields.io/travis/gofiber/fiber/master.svg?label=windows&style=flat-square)](https://travis-ci.org/gofiber/fiber)

**Fiber** é um framework **web** inspirado no [Express](https://github.com/expressjs/express) e construído sobre o [Fasthttp](https://github.com/valyala/fasthttp), o engine HTTP **mais rápido** do [Go](https://golang.org/doc/). Projetado para **facilitar** o desenvolvimento **rápido**, com **zero de alocação de memória** e **performance** em mente.

## Instalando

Primeiro de tudo, faça o [download](https://golang.org/dl/) e instale o Go.

{% hint style = "success"%} É necessário o uso do Go **1.11** (com os [Go Modules](https://golang.org/doc/go1.11#modules) ativados) ou superior. {% endhint%}

A instalação é feita usando o comando [`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them) :

```bash
go get -u github.com/gofiber/fiber
```

## Olá Mundo!

Abaixo temos o app **Fiber** mais simples que você pode criar:

```text
touch server.go
```

```go
// server.go
package main

import "github.com/gofiber/fiber"

func main() {
  // Cria nova instância do Fiber
  app := fiber.New()

  // Cria rota no caminho raíz, "/":
  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Olá, Mundo!")
    // => "Olá, Mundo!"
  })

  // Inicia servidor no localhost e na porta 8080
  app.Listen(8080)
}
```

```text
go run server.go
```

Navegue para `http://localhost:8080` e você verá `Olá, Mundo!` na página.

## Roteamento básico

O roteamento refere-se à como uma aplicação responde a uma requisição para um _endpoint_ específico, que é formado por um [URI](https://pt.wikipedia.org/wiki/URI) (ou caminho) e um [método de requisição HTTP](https://pt.wikipedia.org/wiki/Hypertext_Transfer_Protocol#M%C3%A9todos_de_solicita%C3%A7%C3%A3o) específico (GET, PUT, POST e outros).

{% hint style = "info"%} Cada rota pode ter **várias funções _handler_**, que são executadas quando há uma correspondência da rota. {% endhint%}

A definição de rotas utiliza a seguinte estrutura:

```go
// Assinatura da função
app.Method(func(*fiber.Ctx))
app.Method(path string, func(*fiber.Ctx))
```

- `app` é uma instância do **Fiber** .
- `Method` é um [método de requisição HTTP](https://fiber.wiki/application#methods) , em maiúsculas: `Get` , `Put` , `Post` , etc.
- `path` é um caminho no servidor.
- `func(*fiber.Ctx)` é uma função _callback_ que recebe o [Context](https://fiber.wiki/context) executado quando a rota é correspondida.

### Rota simples

```go
// Responde com "Olá, Mundo!" na caminho raíz, "/":
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Olá, Mundo!")
})
```

### Rota com parâmetro

```go
// GET http://localhost:8080/ola%20mundo

app.Get("/:valor", func(c *fiber.Ctx) {
  c.Send("Requisição GET com valor: " + c.Params("valor"))
  // => Requisição GET com valor: ola mundo
})
```

### Rota com parâmetro opcional

```go
// GET http://localhost:8080/ola%20mundo

app.Get("/:valor?", func(c *fiber.Ctx) {
  if c.Params("valor") != "" {
    c.Send("Requisição GET com valor: " + c.Params("valor"))
    // => Requisição GET com valor: ola mundo
    return
  }

  c.Send("Requisição GET sem nenhum valor")
})
```

### Rota com _wildcard_

```go
// GET http://localhost:8080/api/usuario/joao

app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("Caminho na API com wildcard: " + c.Params("*"))
  // => Caminho na API com wildcard: usuario/joao
})
```

## Arquivos estáticos

Para servir arquivos estáticos, como **imagens**, arquivos **CSS** e **JavaScript**, substitua a função handler por strings de arquivos ou diretórios.

Assinatura da função:

```go
app.Static(raiz string)          // => sem prefixo
app.Static(prefixo, raiz string) // => com prefixo
```

Use o código a seguir para servir arquivos em um diretório chamado `./public` :

```go
app := fiber.New()

app.Static("./public") // => Serve todos os arquivos em ./public

app.Listen(8080)
```

Agora, você pode carregar os arquivos que estão no diretório `./public` :

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```
