---
description: A instância do aplicativo denota convencionalmente o aplicativo Fiber.
---

# 🚀 Aplicação

## Novo

O método cria uma nova instância denominada **Fiber** .

```go
app := fiber.New()
```

## Estático

Servir arquivos estáticos, como **imagens** , arquivos **CSS** e **JavaScript** , você pode usar o método **Static** .

{% hint style = "info"%} Por padrão, esse método envia arquivos `index.html` em resposta a uma solicitação em um diretório. {% endhint%}

#### Assinatura

```go
app.Static(root string)         // => without prefix
app.Static(prefix, root string) // => with prefix
```

#### Exemplos

Use o código a seguir para veicular arquivos em um diretório chamado `./public`

```go
app.Static("./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```

Para servir a partir de vários diretórios, você pode usar o **Static** várias vezes.

```go
// Serve files from "./public" directory:
app.Static("./public")

// Serve files from "./files" directory:
app.Static("./files")
```

{% hint style = "info"%} Use um cache de proxy reverso como o [NGINX](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/) para melhorar o desempenho da veiculação de ativos estáticos. {% endhint%}

Para criar um prefixo de caminho virtual ( *onde o caminho realmente não existe no sistema* de arquivos) para arquivos atendidos pelo método **Static** , especifique um caminho de prefixo para o diretório estático, conforme mostrado abaixo:

```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```

## Métodos

Encaminha uma solicitação HTTP, em que **METHOD** é o [método HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) da solicitação.

#### Assinatura

```go
app.METHOD(handler func(*Ctx))              // match any path
app.METHOD(path string, handler func(*Ctx)) // match specific path
```

#### Exemplo

```go
// Single method
app.Connect(...)
app.Delete(...)
app.Get(...)
app.Head(...)
app.Options(...)
app.Patch(...)
app.Post(...)
app.Put(...)
app.Trace(...)

// Matches all methods & complete path
app.All(...)

// Matches all methods & URLs starting with a specified path
app.Use(...)
```

## Ouço

Vincula e escuta conexões no endereço especificado. Pode ser um `int` para porta ou `string` de `string` para endereço.

#### Assinatura

```go
app.Listen(address interface{}, tls ...string)
```

#### Exemplo

```go
app.Listen(8080)
app.Listen("8080")
app.Listen(":8080")
app.Listen("127.0.0.1:8080")
```

Para ativar o **TLS / HTTPS,** você pode anexar seu **certificado** e caminho da **chave** .

```go
app.Listen(443, "server.crt", "server.key")
```

## Configurações

### Motor

Você pode alterar as [configurações](https://github.com/valyala/fasthttp/blob/master/server.go#L150) padrão do [servidor](https://github.com/valyala/fasthttp/blob/master/server.go#L150) **Fasthttp** através da instância do **Fiber** . Essas configurações precisam ser definidas **antes do** método [Listen](application.md#listen) .

{% hint style = "danger"%} Apenas altere essas configurações se você souber o **que** está fazendo. {% endhint%}

```go
app.Engine.Concurrency = 256 * 1024
app.Engine.DisableKeepAlive = false
app.Engine.ReadBufferSize = 4096
app.Engine.WriteBufferSize = 4096
app.Engine.ReadTimeout = 0
app.Engine.WriteTimeout = 0
app.Engine.IdleTimeout = 0
app.Engine.MaxConnsPerIP = 0
app.Engine.MaxRequestsPerConn = 0
app.Engine.TCPKeepalive = false
app.Engine.TCPKeepalivePeriod = 0
app.Engine.MaxRequestBodySize = 4 * 1024 * 1024
app.Engine.ReduceMemoryUsage = false
app.Engine.GetOnly = false
app.Engine.DisableHeaderNamesNormalizing = false
app.Engine.SleepWhenConcurrencyLimitsExceeded = 0
app.Engine.NoDefaultContentType = false
app.Engine.KeepHijackedConns = false
```

### Prefork

A opção Prefork permite o uso da opção de soquete [**SO_REUSEPORT**](https://lwn.net/Articles/542629/) , disponível em versões mais recentes de muitos sistemas operacionais, incluindo o **DragonFly BSD** e **Linux** (kernel versão **3.9** e posterior). Isso gerará vários processos Go ouvindo na mesma porta.

**A NGINX** tem um ótimo artigo sobre o [Socket Sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/) , essas fotos são tiradas do mesmo artigo.

![Schema, when Prefork disabled (by default)](https://cdn.wp.nginx.com/wp-content/uploads/2015/05/Slack-for-iOS-Upload-1-e1432652484191.png)

![Schema, when Prefork enabled](https://cdn.wp.nginx.com/wp-content/uploads/2015/05/Slack-for-iOS-Upload-e1432652376641.png)

Você pode ativar o recurso Prefork adicionando o sinalizador `-prefork` :

```bash
./server -prefork
```

Ou defina a opção `Prefork` como `true` :

```go
app.Prefork = true // Prefork enabled

app.Get("/", func(c *fiber.Ctx) {
  msg := fmt.Sprintf("Worker #%v", os.Getpid())
  c.Send(msg)
  // => Worker #16858
  // => Worker #16877
  // => Worker #16895
})
```

### Servidor

Por padrão, a fibra não envia um [cabeçalho do servidor](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server) , mas você pode habilitá-lo alterando o valor do servidor.

```go
app.Server = "Windows 95" // => Server: Windows 95
```

### Bandeira

Quando você inicia o aplicativo Fiber, o console imprime um banner contendo a versão do pacote e a porta de atendimento. *Isso é ativado por padrão.*

![](../../.gitbook/assets/screenshot-2020-02-08-at-13.18.27.png)

Para desativá-lo, defina `Banner` como `false` :

```go
app.Banner = false // Hide banner
```

## Teste

O teste do seu aplicativo é feito com o método **Test** .

O método {% hint style = "info"%} é usado principalmente para arquivos `_test.go` e depuração de aplicativos. {% endhint%}

#### Assinatura

```go
app.Test(req *http.Request) (*http.Response, error)
```

#### Exemplo

```go
// Create route with GET method for test:
app.Get("/", func(c *Ctx) {
  fmt.Println(c.BaseURL())              // => http://google.com
  fmt.Println(c.Get("X-Custom-Header")) // => hi
  
  c.Send("hello, World!")
})

// http.Request
req, _ := http.NewRequest("GET", "http://google.com", nil)
req.Header.Set("X-Custom-Header", "hi")

// http.Response
resp, _ := app.Test(req)

// Do something with results:
if resp.StatusCode == 200 {
  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println(string(body)) // => Hello, World!
}
```
