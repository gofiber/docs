---
description: A instância app geralmente denota uma aplicação Fiber.
---

# 🚀 Aplicação

## New

Esse método cria uma nova instância chamada **App**.  
Você pode passar uma configuração opcional chamada [settings](application.md#settings) ao criar uma nova instância

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
    // Passando as configurações criando uma nova instância
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

    // Ou mudar as configurações depois de criar uma instância
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

| Propriedade               | Tipo                                                 | Descrição                                                                                                                                                                                                                                                                 | Valor Predefinido |
|:------------------------- |:---------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------- |
| Prefork                   | `bool`                                               | Habilita o uso de socket com a opção [`SO_REUSEPORT`](https://lwn.net/Articles/542629/). Isso irá gerar multiplos processos Go que estarão escutando na mesma porta. Saiba mais sobre [socket sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/). | `false`           |
| ServerHeader              | `string`                                             | Habilita o header do `Server` HTTP com o valor atribuído.                                                                                                                                                                                                                 | `""`              |
| StrictRouting             | `bool`                                               | Quando habilitado, o roteador (router) tratará `/foo` e `/foo/` como rotas diferentes. Caso contrário, o roteador (router) tratará `/foo` e `/foo/` como se fosse a mesma rota.                                                                                           | `false`           |
| CaseSensitive             | `bool`                                               | Quando habilitado, `/Foo` e `/foo` serão tratadas como rotas diferentes. Quando desabilitado, `/Foo` e `/foo` serão tratadas com rotas iguais.                                                                                                                            | `false`           |
| Immutable                 | `bool`                                               | Quando habilitado, todos os valores retornados pelos métodos que usam o context são imutáveis. Por padrão eles são válidos até você retornar algo do handler, veja o issue [#185](https://github.com/gofiber/fiber/issues/185).                                           | `false`           |
| BodyLimit                 | `int`                                                | Define o tamanho máximo permitido no corpo (body) de uma requisição, se esse tamanho exceder o valor estabelecido, ele envia o código `413 - Request Entity Too Large` como resposta.                                                                                     | `4 * 1024 * 1024` |
| Concurrency               | `int`                                                | Define número máximo de conexões simultâneas.                                                                                                                                                                                                                             | `256 * 1024`      |
| DisableKeepalive          | `bool`                                               | Desabilita as conexões do tipo keep-alive, o servidor irá finalizar conexões que estão chegando depois que enviar a primeira resposta ao cliente.                                                                                                                         | `false`           |
| DisableDefaultDate        | `bool`                                               | Quando definido como `true`, faz com que o header padrão seja excluído da resposta.                                                                                                                                                                                       | `false`           |
| DisableDefaultContentType | `bool`                                               | Quando definido como `true`, faz com que o campo do header Content-Type seja excluido da resposta.                                                                                                                                                                        | `false`           |
| DisableStartupMessage     | `bool`                                               | Quando definido como true, não será escrito o símbolo ASCII do Fiber nem "listening" na mensagem                                                                                                                                                                          | `false`           |
| ETag                      | `bool`                                               | Habilita ou desabilita o gerador de header ETag, desde que ambas as etags fracas e fortes sejam geradas usando o mesmo método de hashing \(CRC-32\). ETags fracas são por padrão habilitadas.                                                                           | `false`           |
| TemplateEngine            | `func(raw string, bind interface{}) (string, error)` | Você pode especificar uma função para renderizar um template personalizado em diferentes idiomas. Veja nosso [**Template Middleware**](middleware.md#template) _\*\*_para predefinições.                                                                            | `nil`             |
| TemplateFolder            | `string`                                             | Um diretório para as views da aplicação. Se o diretório for definido, isso será um prefixo para todos os paths dos templates. `c.Render("home", data) -> ./views/home.pug`                                                                                             | `""`              |
| TemplateExtension         | `string`                                             | Se você predefinir o arquivo da extensão do template, você não precisa colocar o nome completo do arquivo na função que renderiza: `c.Render("home", data) -> home.pug`                                                                                                | `""`              |
| ReadTimeout               | `time.Duration`                                      | A quantidade de tempo permitida para ler a requisição completa, incluindo corpo (body). Tempo limite padrão é ilimitado.                                                                                                                                                  | `nil`             |
| WriteTimeout              | `time.Duration`                                      | A duração máxima antes de expirar o tempo limite da resposta (response). Tempo limite padrão é ilimitado.                                                                                                                                                                 | `nil`             |
| IdleTimeout               | `time.Duration`                                      | A quantidade máxima de tempo para esperar pela próxima requisição quando o keep-alive estiver ativado. Se IdleTimeout for zero, o valor do ReadTimeout será usado.                                                                                                        | `nil`             |

## Static

Use o método **Static** para levantar arquivos estáticos, como **imagens**, **CSS** e **JavaScript**.

{% hint style="info" %}
Por padrão, **Static** servirá o arquivo `index.html` em resposta a uma requisição em um diretório.
{% endhint %}

{% code title="Signature" %}
```go
app.Static(prefix, root string, config ...Static) // => com prefixo
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
// Arquivos serve do diretório "./public":
app.Static("/", "./public")

// Arquivos arquivos do diretório "./files":
app.Static("/", "./files")
```
{% endcode %}

{% hint style="info" %}
Use um cache de proxy reverso como [**NGINX**](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/) para melhorar o desempenho do serviço de arquivos estáticos do assets.
{% endhint %}

Você pode usar qualquer prefixo de um caminho virtual \(_onde o caminho na verdade não existe no sistema de arquivos_\) para arquivos que são entregues pelo método **Static** , especifique um caminho de prefixo para o diretório estático, como mostrado abaixo:

{% code title="Example" %}
```go
app.Static("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```
{% endcode %}

Se você quer ter um pouco mais de controle sobre as configurações para entregar os arquivos estáticos, você poderia usar o `fiber.Static` struct para ativar as configurações específicas.

{% code title="fiber.Static{}" %}
```go
// Static representa as configurações para entregar os arquivos estáticos
type Static struct {
    // Compactará as respostas de forma transparente se definido como true
    // Isso funciona de forma diferente do github.com/gofiber/compression middleware
    // O servidor tenta minimizar o uso do CPU armazenando arquivos compactados.
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
// Os métodos HTTP tem suporte a :param, :optional? e *curingas
// Você precisa passar um caminho para cada método
app.All(path string, handlers ...func(*Ctx)) *Fiber
app.Get
app.Put
app.Post
app.Head
app.Patch
app.Trace
app.Delete
app.Connect
app.Options

// Use() corresponderá apenas ao início de cada caminho
// por exemplo "/john" corresponderá a "/john/doe", "/johnnnn"
// Use() não tem suporte a :param & :optional? no caminho
app.Use(handlers ...func(*Ctx))
app.Use(prefix string, handlers ...func(*Ctx)) *Fiber
```
{% endcode %}

{% code title="Example" %}
```go
app.Use("/api", func(c *fiber.Ctx) {
  c.Set("X-Custom-Header", random.String(32))
  c.Next()
})
app.Get("/api/list", func(c *fiber. tx) {
  c.Send("Sou uma requisição GET!")
})
app.Post("/api/register", func(c *fiber.Ctx) {
  c.Send("Sou uma requisição POST!")
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

  api := app.Group("/api", cors())  // /api

  v1 := api.Group("/v1", mysql())   // /api/v1
  v1.Get("/list", handler)          // /api/v1/list
  v1.Get("/user", handler)          // /api/v1/user

  v2 := api.Group("/v2", mongodb()) // /api/v2
  v2.Get("/list", handler)          // /api/v2/list
  v2.Get("/user", handler)          // /api/v2/user

  app.Listen(3000)
```

## Listen

Para as conexões binds e listens nos endereços especificados. Isso pode ser um `int` para uma porta ou `string` para um endereço.

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

Para habilitar **TLS/HTTPS** você pode adicionar uma [**configuração TLS**](https://golang.org/pkg/crypto/tls/#Config).

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

Você pode passar o seu próprio [`net.Listener`](https://golang.org/pkg/net/#Listener) usando o método `Serve`.

{% code title="Signature" %}
```go
app.Serve(ln net.Listener, tls ...*tls.Config) error
```
{% endcode %}

{% hint style="warning" %}
**Serve** não possui suporte ao recurso ****[**Prefork** ](application.md#settings).
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

Teste a sua aplicação finalizada com o método **Test**. Use este método para criar arquivos `_test.go` ou quando você precisar depurar sua lógica de roteamento. O tempo limite padrão é de `200 ms` se você deseja desativar um tempo limite por completo, passe `-1` como um segundo argumento.

{% code title="Signature" %}
```go
app.Test(req *http.Request, msTimeout ...int) (*http.Response, error)
```
{% endcode %}

{% code title="Example" %}
```go
// Crie uma rota com o método GET para testar:
app.Get("/", func(c *Ctx) {
  fmt.Println(c.BaseURL())              // => http://google.com
  fmt.Println(c.Get("X-Custom-Header")) // => hi

  c.Send("Olá, Mundo!")
})

// http.Request
req, _ := http.NewRequest("GET", "http://google.com", nil)
req.Header.Set("X-Custom-Header", "hi")

// http.Response
resp, _ := app.Test(req)

// Faça algo com os resultados:
if resp.StatusCode == 200 {
  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println(string(body)) // => Hello, World!
}
```
{% endcode %}

