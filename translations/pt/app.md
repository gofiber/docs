---
description: A instância app geralmente denota uma aplicação Fiber.
---

# 🚀 Aplicação

## New

This method creates a new **App** named instance. You can pass optional [settings ](app.md#settings)when creating a new instance

{% code title="Signature" %}
```go
fiber.New(settings ...*Settings) *App
```
{% endcode %}

{% code title="Example" %}
```go
package main

import "github.com/gofiber/fiber"

func main() {
    app := fiber.New()

    // ...

    app.Listen(3000)
}
```
{% endcode %}

## Settings

Você pode passar as configurações da sua aplicação quando chamar o método `New`.

{% code title="Example" %}
```go
func main() {
    // Pass Settings creating a new instance
    app := fiber.New(&fiber.Settings{
        Prefork:       true,
        CaseSensitive: true,
        StrictRouting: true,
        ServerHeader:  "Fiber",
    })

    // ...

    app.Listen(3000)
}
```
{% endcode %}

Ou você pode mudar as configurações da aplicação depois que inicializar um `app`.

{% code title="Example" %}
```go
func main() {
    app := fiber.New()

    // Or change Settings after creating an instance
    app.Settings.Prefork = true
    app.Settings.CaseSensitive = true
    app.Settings.StrictRouting = true
    app.Settings.ServerHeader = "Fiber"

    // ...

    app.Listen(3000)
}
```
{% endcode %}

**Campos** **de configuração**

| Propriedade               | Tipo            | Descrição                                                                                                                                                                                                                                                                 | Valor Predefinido |
|:------------------------- |:--------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------- |
| Prefork                   | `bool`          | Habilita o uso de socket com a opção [`SO_REUSEPORT`](https://lwn.net/Articles/542629/). Isso irá gerar multiplos processos Go que estarão escutando na mesma porta. Saiba mais sobre [socket sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/). | `false`           |
| ServerHeader              | `string`        | Habilita o header do `Server` HTTP com o valor atribuído.                                                                                                                                                                                                                 | `""`              |
| StrictRouting             | `bool`          | Quando habilitado, o roteador (router) tratará `/foo` e `/foo/` como rotas diferentes. Caso contrário, o roteador (router) tratará `/foo` e `/foo/` como se fosse a mesma rota.                                                                                           | `false`           |
| CaseSensitive             | `bool`          | Quando habilitado, `/Foo` e `/foo` serão tratadas como rotas diferentes. Quando desabilitado, `/Foo` e `/foo` serão tratadas com rotas iguais.                                                                                                                            | `false`           |
| Immutable                 | `bool`          | Quando habilitado, todos os valores retornados pelos métodos que usam o context são imutáveis. Por padrão eles são válidos até você retornar algo do handler, veja o issue [#185](https://github.com/gofiber/fiber/issues/185).                                           | `false`           |
| BodyLimit                 | `int`           | Define o tamanho máximo permitido no corpo (body) de uma requisição, se esse tamanho exceder o valor estabelecido, ele envia o código `413 - Request Entity Too Large` como resposta.                                                                                     | `4 * 1024 * 1024` |
| CompressedFileSuffix      | `string`        | Adds suffix to the original file name and tries saving the resulting compressed file under the new file name.                                                                                                                                                             | `".fiber.gz"`     |
| Concurrency               | `int`           | Define número máximo de conexões simultâneas.                                                                                                                                                                                                                             | `256 * 1024`      |
| DisableKeepalive          | `bool`          | Desabilita as conexões do tipo keep-alive, o servidor irá finalizar conexões que estão chegando depois que enviar a primeira resposta ao cliente.                                                                                                                         | `false`           |
| DisableDefaultDate        | `bool`          | Quando definido como `true`, faz com que o header padrão seja excluído da resposta.                                                                                                                                                                                       | `false`           |
| DisableDefaultContentType | `bool`          | Quando definido como `true`, faz com que o campo do header Content-Type seja excluido da resposta.                                                                                                                                                                        | `false`           |
| DisableStartupMessage     | `bool`          | Quando definido como true, não será escrito o símbolo ASCII do Fiber nem "listening" na mensagem                                                                                                                                                                          | `false`           |
| DisableHeaderNormalizing  | `bool`          | By default all header names are normalized: conteNT-tYPE -&gt; Content-Type                                                                                                                                                                                         | `false`           |
| ETag                      | `bool`          | Habilita ou desabilita o gerador de header ETag, desde que ambas as etags fracas e fortes sejam geradas usando o mesmo método de hashing \(CRC-32\). ETags fracas são por padrão habilitadas.                                                                           | `false`           |
| Templates                 | `Templates`     | Templates is the interface that wraps the Render function. See our [**Template Middleware**]() for supported engines.                                                                                                                                                     | `nil`             |
| ReadTimeout               | `time.Duration` | A quantidade de tempo permitida para ler a requisição completa, incluindo corpo (body). Tempo limite padrão é ilimitado.                                                                                                                                                  | `nil`             |
| WriteTimeout              | `time.Duration` | A duração máxima antes de expirar o tempo limite da resposta (response). Tempo limite padrão é ilimitado.                                                                                                                                                                 | `nil`             |
| IdleTimeout               | `time.Duration` | A quantidade máxima de tempo para esperar pela próxima requisição quando o keep-alive estiver ativado. Se IdleTimeout for zero, o valor do ReadTimeout será usado.                                                                                                        | `nil`             |

## Static

Use o método **Static** para levantar arquivos estáticos, como **imagens**, **CSS** e **JavaScript**.

{% hint style="info" %}
Por padrão, **Static** servirá o arquivo `index.html` em resposta a uma requisição em um diretório.
{% endhint %}

{% code title="Signature" %}
```go
app.Static(prefix, root string, config ...Static) // => with prefix
```
{% endcode %}

Use o seguinte código para levantar os arquivos no diretório chamado `./public`

{% code title="Example" %}
```go
app.Static("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```
{% endcode %}

Para levantar de diferentes diretórios, você pode usar **Static** várias vezes.

{% code title="Example" %}
```go
// Serve files from "./public" directory:
app.Static("/", "./public")

// Serve files from "./files" directory:
app.Static("/", "./files")
```
{% endcode %}

{% hint style="info" %}
Use um cache de proxy reverso como [**NGINX**](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/) para melhorar o desempenho do serviço de arquivos estáticos do assets.
{% endhint %}

Você pode usar qualquer prefixo de um caminho virtual \(_onde o caminho na verdade não existe no sistema de arquivos_\) para arquivos que são entregues pelo método **Static** , especifique um caminho de prefixo para o diretório estático, como mostrado abaixo:

{% code title="Example" %}
```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```
{% endcode %}

Se você quer ter um pouco mais de controle sobre as configurações para entregar os arquivos estáticos, You could use the `fiber.Static` struct to enable specific settings.

{% code title="fiber.Static{}" %}
```go
// Static represents settings for serving static files
type Static struct {
    // Transparently compresses responses if set to true
    // This works differently than the github.com/gofiber/compression middleware
    // The server tries minimizing CPU usage by caching compressed files.
    // Adicione o sufixo ".fiber.gz" para o nome original do arquivo.
    // Opcional. Valor padrão falso
    Compress bool
    // Ativa requisições de intervalos de bytes, se definido como true.
    // Opcional. Valor padrão falso
    ByteRange bool
    // Habilita a navegação em diretório.
    // Opcional. Padrão valor falso.
    Browse bool
    // Arquivo Index para entregar para um diretório.
    // Opcional. Valor padrão "index.html".
    Index string
}
```
{% endcode %}

{% code title="Example" %}
```go
app.Static("/", "./public", fiber.Static{
  Compress:   true,
  ByteRange:  true,
  Browse:     true,
  Index:      "john.html"
})
```
{% endcode %}

## HTTP Methods

Requisições das rotas HTTP, onde **METHOD** é o [método HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) da solicitação.

{% code title="Signatures" %}
```go
// Add allows you to specifiy a method as value
app.Add(method, path string, handlers ...func(*Ctx)) *Route

// All will register the route on all methods
app.All(path string, handlers ...func(*Ctx)) []*Route

// HTTP methods
app.Get(path string, handlers ...func(*Ctx)) *Route
app.Put(path string, handlers ...func(*Ctx)) *Route
app.Post(path string, handlers ...func(*Ctx)) *Route
app.Head(path string, handlers ...func(*Ctx)) *Route
app.Patch(path string, handlers ...func(*Ctx)) *Route
app.Trace(path string, handlers ...func(*Ctx)) *Route
app.Delete(path string, handlers ...func(*Ctx)) *Route
app.Connect(path string, handlers ...func(*Ctx)) *Route
app.Options(path string, handlers ...func(*Ctx)) *Route

// Use is mostly used for middleware modules
// These routes will only match the beggining of each path
// i.e. "/john" will match "/john/doe", "/johnnnn"
app.Use(handlers ...func(*Ctx)) *Route
app.Use(prefix string, handlers ...func(*Ctx)) *Route
```
{% endcode %}

{% code title="Example" %}
```go
app.Use("/api", func(c *fiber.Ctx) {
  c.Set("X-Custom-Header", random.String(32))
  c.Next()
})
app.Get("/api/list", func(c *fiber.Ctx) {
  c.Send("I'm a GET request!")
})
app.Post("/api/register", func(c *fiber.Ctx) {
  c.Send("I'm a POST request!")
})
```
{% endcode %}

## Group

Você pode agrupar as rotas criando uma estrutura chamada `*Group`.

**Assinatura**

```go
app.Group(prefix string, handlers ...func(*Ctx)) *Group
```

**Exemplo**

```go
func main() {
  app := fiber.New()

  api := app.Group("/api", handler)  // /api

  v1 := api.Group("/v1", handler)   // /api/v1
  v1.Get("/list", handler)          // /api/v1/list
  v1.Get("/user", handler)          // /api/v1/user

  v2 := api.Group("/v2", handler) // /api/v2
  v2.Get("/list", handler)          // /api/v2/list
  v2.Get("/user", handler)          // /api/v2/user

  app.Listen(3000)
}
```

## Routes

Routes returns all registered routes

{% code title="Signature" %}
```go
app.Routes() []*Route
```
{% endcode %}

{% code title="Example" %}
```go
app := fiber.New()

handler := func(c *fiber.Ctx) { }

app.Get("/sample", handler)
app.Post("/john", handler)
app.Put("/doe", handler)

for _, r := range app.Routes() {
    fmt.Printf("%s\t%s\n", r.Method, r.Path)
}
// GET      /sample
// POST     /john
// PUT      /doe
```
{% endcode %}

## Listen

Binds and listens for connections on the specified address. This can be a `int` for port or `string` for address.

{% code title="Signature" %}
```go
app.Listen(address interface{}, tls ...*tls.Config) error
```
{% endcode %}

{% code title="Examples" %}
```go
app.Listen(8080)
app.Listen("8080")
app.Listen(":8080")
app.Listen("127.0.0.1:8080")
```
{% endcode %}

To enable **TLS/HTTPS** you can append a [**TLS config**](https://golang.org/pkg/crypto/tls/#Config).

{% code title="Example" %}
```go
cer, err := tls.LoadX509KeyPair("server.crt", "server.key")
if err != nil {
    log.Fatal(err)
}
config := &tls.Config{Certificates: []tls.Certificate{cer}}

app.Listen(443, config)
```
{% endcode %}

## Serve

You can pass your own [`net.Listener`](https://golang.org/pkg/net/#Listener) using the `Serve` method.

{% code title="Signature" %}
```go
app.Serve(ln net.Listener, tls ...*tls.Config) error
```
{% endcode %}

{% hint style="warning" %}
**Serve** does not support the [**Prefork**](app.md#settings) feature.
{% endhint %}

{% code title="Example" %}
```go
if ln, err = net.Listen("tcp4", ":8080"); err != nil {
    log.Fatal(err)
}

app.Serve(ln)
```
{% endcode %}

## Test

Testing your application is done with the **Test** method. Use this method for creating `_test.go` files or when you need to debug your routing logic. The default timeout is `200ms` if you want to disable a timeout completely, pass `-1` as a second argument.

{% code title="Signature" %}
```go
app.Test(req *http.Request, msTimeout ...int) (*http.Response, error)
```
{% endcode %}

{% code title="Example" %}
```go
// Create route with GET method for test:
app.Get("/", func(c *Ctx) {
  fmt.Println(c.BaseURL())              // => http://google.com
  fmt.Println(c.Get("X-Custom-Header")) // => hi

  c.Send("hello, World!")
})

// http.Request
req := httptest.NewRequest("GET", "http://google.com", nil)
req.Header.Set("X-Custom-Header", "hi")

// http.Response
resp, _ := app.Test(req)

// Do something with results:
if resp.StatusCode == 200 {
  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println(string(body)) // => Hello, World!
}
```
{% endcode %}

