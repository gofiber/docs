---
description: A estrutura Ctx representa o contexto que contém a solicitação e resposta HTTP. Possui métodos para a sequência de consulta de solicitação, parâmetros, corpo, cabeçalhos HTTP e assim por diante.
---

# 🧠 Contexto

## Aceita

Verifica se as **extensões** ou **tipos de** **conteúdo** especificados são aceitáveis.

{% hint style = "info"%} Com base no cabeçalho [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTP da solicitação. {% endhint%}

**Assinatura**

```go
c.Accepts(types ...string) string
```

**Exemplo**

```go
// Accept: text/*, application/json

app.Get("/", func(c *fiber.Ctx) {
  c.Accepts("html")             // => "html"
  c.Accepts("text/html")        // => "text/html"
  c.Accepts("json", "text")     // => "json" "text"
  c.Accepts("application/json") // => "application/json"
  c.Accepts("image/png")        // => ""
  c.Accepts("png")              // => ""
})
```

## AcceptsCharsets

Verifica se o conjunto de **caracteres** especificado é aceitável.

{% hint style = "info"%} Com base no cabeçalho HTTP [Accept-Charset](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Charset) da solicitação. {% endhint%}

**Assinatura**

```go
c.AcceptsCharsets(charsets ...string) string
```

**Exemplo**

```go
// Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5

app.Get("/", func(c *fiber.Ctx) {
  c.AcceptsCharsets("utf-8")                // => "utf-8"
  c.AcceptsCharsets("utf-16", "iso-8859-1") // => "iso-8859-1"
  c.AcceptsCharsets("utf-16")               // => ""
})
```

## AcceptsEncodings

Verifica se a **codificação** especificada é aceitável.

{% hint style = "info"%} Com base no cabeçalho HTTP [Accept-Encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) da solicitação. {% endhint%}

**Assinatura**

```go
c.AcceptsEncodings(encodings ...string) string
```

**Exemplo**

```go
// Accept-Encoding: gzip, compress;q=0.2

app.Get("/", func(c *fiber.Ctx) {
  c.AcceptsEncodings("gzip")           // => "gzip"
  c.AcceptsEncodings("compress", "br") // => "compress"
  c.AcceptsEncodings("deflate")        // => ""
})
```

## AceitaIdiomas

Verifica se o **idioma** especificado é aceitável.

{% hint style = "info"%} Com base no cabeçalho HTTP do [idioma](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language) de [aceitação](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language) da solicitação. {% endhint%}

**Assinatura**

```go
c.AcceptsLanguages(languages ...string) string
```

**Exemplo**

```go
// Accept-Language: en;q=0.8, nl, ru

app.Get("/", func(c *fiber.Ctx) {
  c.AcceptsLanguages("en")             // => "en"
  c.AcceptsLanguages("pt", "nl", "ru") // => "nl" "ru"
  c.AcceptsLanguages("fr")             // => ""
})
```

## Acrescentar

Anexa o **valor** especificado ao campo de cabeçalho de resposta HTTP.

{% hint style = "warning"%} Se o cabeçalho ainda **não** estiver definido, ele será criado com o valor especificado. {% endhint%}

**Assinatura**

```go
c.Append(field, values ...string)
```

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Append("Link", "http://google.com", "http://localhost")
  // => Link: http://localhost, http://google.com

  c.Append("Link", "Test")
  // => Link: http://localhost, http://google.com, Test
})
```

## Anexo

Define o campo de cabeçalho [Content-Disposition da](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) resposta HTTP como `attachment` .

**Assinatura**

```go
c.Attachment(file ...string)
```

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Attachment()
  // => Content-Disposition: attachment

  c.Attachment("./upload/images/logo.png")
  // => Content-Disposition: attachment; filename="logo.png"
  // => Content-Type: image/png
})
```

## BaseURL

Retorna o URL base ( **protocolo** + **host** ) como uma `string` .

**Assinatura**

```go
c.BaseURL() string
```

**Exemplo**

```go
// GET https://example.com/page#chapter-1

app.Get("/", func(c *fiber.Ctx) {
  c.BaseURL() // => https://example.com
})
```

## BasicAuth

Retorna o **nome de usuário** e a **senha** fornecidos no cabeçalho da solicitação de [autorização](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) , se a solicitação usar [autenticação básica HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) .

**Assinatura**

```go
c.BasicAuth() (user, pass string, ok bool)
```

**Exemplo**

```go
// curl --user john:doe http://localhost:8080/auth

app.Get("/auth", func(c *fiber.Ctx) {
  user, pass, ok := c.BasicAuth()

  if !ok || user != "john" || pass != "doe" {
    c.Status(403).Send("Forbidden")
    return
  }

  c.Send("Welcome " + user)
})
```

## Corpo

Contém o **corpo bruto** enviado em uma solicitação **POST** .

**Assinatura**

```go
c.Body() string
c.Body(key string) string
c.Body(key []byte) string
c.Body(func(key, value string)) func(string, string)
```

**Exemplo**

```go
// curl -X POST http://localhost:8080 -d user=john

app.Post("/", func(c *fiber.Ctx) {
  // Get raw body from POST request:
  c.Body()
  // => user=john

  // Get body value by specific key:
  c.Body("user")
  // => "john"

  // Loop trough all body params:
  c.Body(func(key string, val string) {
    fmt.Printl(key, val)
    // => "user" "john"
  })
})
```

## ClearCookie

Limpa **todos os** cookies do cliente ou um cookie específico por **nome** ( *definindo a data de validade no passado* ).

**Assinatura**

```go
c.ClearCookie()
c.ClearCookie(key string)
```

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  // Clears all cookies:
  c.ClearCookie()

  // Expire specific cookie by name:
  c.ClearCookie("user")

  // Expire multiple cookies by names:
  c.ClearCookie("token", "session", "track_id", "version")
})
```

## Bolacha

Define cookie com **nome** e **valor** .

**Assinatura**

```go
c.Cookie(name, value string)
c.Cookie(name, value string, options *Cookie{})
```

**Estrutura do cookie**

{% hint style = "warning"%} A opção **Expirar** **não** será usada, se **MaxAge** estiver definido. {% endhint%}

```go
&fiber.Cookie{
  Expire   int64  // Unix timestamp
  MaxAge   int    // Seconds
  Domain   string
  Path     string
  HttpOnly bool
  Secure   bool
  SameSite string
}
```

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Cookie("name", "john")
  // => Cookie: name=john;

  c.Cookie("name", "john", &fiber.Cookie{
    MaxAge:   60,
    Domain:   "example.com",
    Path:     "/",
    HttpOnly: true,
    Secure:   true,
    SameSite: "lax",
  })
  // => name=john; max-age=60; domain=example.com; path=/;
  //    HttpOnly; secure; SameSite=Lax

})
```

## Biscoitos

Obtém cookies.

**Signature** s

```go
c.Cookies() string
c.Cookies(key string) string
c.Cookies(key []byte) string
c.Cookies(func(key, value string)) string
```

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  // Get raw cookie header:
  c.Cookies()
  // => name=john;

  // Get cookie by key:
  c.Cookies("name")
  c.Cookies([]byte("name"))
  // => "john"

  // Show all cookies:
  c.Cookies(func(key, val string) {
    fmt.Println(key, val)
    // => "name", "john"
  })
})
```

## Baixar

Transfere o arquivo do caminho como um `attachment` .

Normalmente, os navegadores solicitam o download do usuário. Por padrão, o cabeçalho [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) `filename=` parâmetro é path ( *normalmente aparece na caixa de diálogo do navegador* ).

Substitua esse padrão pelo parâmetro **filename** .

**Assinatura**

```go
c.Download(path, filename ...string)
```

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Download("./files/report-12345.pdf")
  // => Download report-12345.pdf

  c.Download("./files/report-12345.pdf", "report.pdf")
  // => Download report.pdf
})
```

## Fim

{% hint style = "danger"%} Planejado para o **Fiber** v2. {% endhint%}

## Fasthttp

Você ainda pode **acessar** e usar todos os métodos e propriedades do **Fasthttp** .

**Assinatura**

{% hint style = "info"%} Leia a [documentação](https://pkg.go.dev/github.com/valyala/fasthttp?tab=doc) do [Fasthttp](https://pkg.go.dev/github.com/valyala/fasthttp?tab=doc) para obter mais informações. {% endhint%}

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Fasthttp.Request.Header.Method()
  // => []byte("GET")

  c.Fasthttp.Response.Write([]byte("Hello, World!"))
  // => "Hello, World!"
})
```

## Formato

Executa negociação de conteúdo no cabeçalho [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTP. Ele usa [Aceita](context.md#accepts) para selecionar um formato adequado.

{% hint style = "info"%} Se o cabeçalho **não** for especificado ou se não **houver** um formato adequado, será usado **texto / sem formatação** . {% endhint%}

**Assinatura**

```go
c.Format(body interface{})
```

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  // Accept: text/plain
  c.Format("Hello, World!")
  // => Hello, World!

  // Accept: text/html
  c.Format("Hello, World!")
  // => <p>Hello, World!</p

  // Accept: application/json
  c.Format("Hello, World!")
  // => "Hello, World!"
})
```

## FormFile

Os arquivos MultipartForm podem ser recuperados por nome, o **primeiro** arquivo da chave fornecida é retornado.

**Assinatura**

```go
c.FormFile(name string) (*multipart.FileHeader, error)
```

**Exemplo**

```go
app.Post("/", func(c *fiber.Ctx) {
  // Get first file from form field "document":
  file, err := c.FormFile("document")

  // Check for errors:
  if err == nil {
    // Save file to root directory:
    c.SaveFile(file, fmt.Sprintf("./%s", file.Filename))
  }
})
```

## FormValue

Os valores MultipartForm podem ser recuperados por nome, o **primeiro** valor da chave fornecida é retornado.

**Assinatura**

```go
c.FormValue(name string) string
```

**Exemplo**

```go
app.Post("/", func(c *fiber.Ctx) {
  // Get first value from form field "name":
  c.FormValue("name")
  // => "john" or "", if not exist
})
```

## Fresco

{% hint style = "danger"%} Planejado para o **Fiber** v2. {% endhint%}

## Obter

Retorna o cabeçalho da solicitação HTTP especificado por campo. A correspondência não diferencia maiúsculas de minúsculas.

**Assinatura**

```go
c.Get(field string) string
```

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Get("Content-Type") // => "text/plain"
  c.Get("content-type") // => "text/plain"
  c.Get("something")    // => ""
})
```

## HeadersSent

{% hint style = "danger"%} Planejado para o **Fiber** v2. {% endhint%}

## nome de anfitrião

Contém o nome do host derivado do cabeçalho HTTP do [Host](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host) .

**Assinatura**

```go
c.Hostname() string
```

**Exemplo**

```go
// GET http://google.com/search

app.Get("/", func(c *fiber.Ctx) {
  c.Hostname() // => "google.com"
})
```

## IP

Retorna o endereço IP remoto da solicitação.

**Assinatura**

```go
c.IP() string
```

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.IP() // => "127.0.0.1"
})
```

## IPs

Retorna uma matriz de endereços IP especificados no cabeçalho da solicitação [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For) .

**Assinatura**

```go
c.IPs() []string
```

**Exemplo**

```go
// X-Forwarded-For: proxy1, 127.0.0.1", proxy3

app.Get("/", func(c *fiber.Ctx) {
  c.IPs() // => ["proxy1", "127.0.0.1", "proxy3"]
})
```

## É

Retorna o **tipo de conteúdo** correspondente, se o campo de cabeçalho HTTP do [Tipo](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) de [Conteúdo](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) da solicitação de entrada corresponder ao [tipo MIME](https://developer.mozilla.org/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types) especificado pelo parâmetro type.

{% hint style = "info"%} Se a solicitação **não** tiver **um** corpo, ela retornará **false** . {% endhint%}

**Assinatura**

```go
c.Is(t string) bool
```

**Exemplo**

```go
// Content-Type: text/html; charset=utf-8

app.Get("/", func(c *fiber.Ctx) {
  c.Is("html")  // => true
  c.Is(".html") // => true
  c.Is("json")  // => false
})
```

## JSON

Converte qualquer **interface** ou **string** em JSON usando o [Jsoniter](https://github.com/json-iterator/go) .

O método {% hint style = "info"%} também define o cabeçalho do conteúdo como **application / json** . {% endhint%}

**Assinatura**

```go
c.JSON(v interface{}) error
```

**Exemplo**

```go
type SomeStruct struct {
  Name string
  Age  uint8
}

app.Get("/json", func(c *fiber.Ctx) {
  // Create data struct:
  data := SomeStruct{
    Name: "Grame",
    Age:  20,
  }

  c.JSON(data)
  // => "{"Name": "Grame", "Age": 20}"

  c.JSON("Hello, World!")
  // => "Hello, World!"
})
```

## JSONBytes

Método JSON bruto.

{% hint style = "success"%} Use isso, se você **não precisar de** serialização JSON, recomendado ao trabalhar com entradas **brutas** . {% endhint%}

**Assinatura**

```go
c.JSONBytes(b []byte) error
```

**Exemplo**

```go
app.Get("/json", func(c *fiber.Ctx) {
  c.JSONBytes([]byte(`{"Name": "Grame", "Age": 20}`))
  // => "{"Name": "Grame", "Age": 20}"
})
```

## JSONString

Método JSON bruto.

{% hint style = "success"%} Use isso, se você **não precisar de** serialização JSON, recomendado ao trabalhar com entradas **brutas** . {% endhint%}

**Assinatura**

```go
c.JSONString(s string) error
```

**Exemplo**

```go
app.Get("/json", func(c *fiber.Ctx) {
  c.JSONString(`{"Name": "Grame", "Age": 20}`)
  // => "{"Name": "Grame", "Age": 20}"
})
```

## JSONP

Envia uma resposta JSON com suporte a JSONP. Este método é idêntico ao [JSON](context.md#json) , exceto pelo fato de optar pelo suporte ao retorno de chamada JSONP. Por padrão, o nome de retorno de chamada JSONP é simplesmente retorno de chamada.

Substitua isso passando uma **string nomeada** no método

**Assinatura**

```go
c.JSONP(v interface{}, callback ...string) error
```

**Exemplo**

```go
type SomeStruct struct {
  name string
  age  uint8
}

app.Get("/", func(c *fiber.Ctx) {
  // Create data struct:
  data := SomeStruct{
    name: "Grame",
    age:  20,
  }

  c.JSONP(data)
  // => callback({"name": "Grame", "age": 20})

  c.JSONP(data, "customFunc")
  // => customFunc({"name": "Grame", "age": 20})
})
```

## Ligações

Une os links seguidos pela propriedade para preencher o campo de cabeçalho HTTP do [Link](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Link) da resposta.

**Assinatura**

```go
c.Links(link ...string)
```

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Link(
    "http://api.example.com/users?page=2", "next",
    "http://api.example.com/users?page=5", "last",
  )
  // Link: <http://api.example.com/users?page=2>; rel="next",
  //       <http://api.example.com/users?page=5>; rel="last"
})
```

## Locals

Método que armazena variáveis de cadeia com escopo definido para a solicitação e, portanto, disponíveis apenas para as rotas que correspondem à solicitação.

{% hint style = "success"%} Isso é útil se você deseja passar alguns **valores específicos** para o próximo middleware. {% endhint%}

**Assinatura**

```go
c.Locals(key string, value ...interface{}) interface{}
```

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Locals("user", "admin")
  c.Next()
})

app.Get("/admin", func(c *fiber.Ctx) {
  if c.Locals("user") == "admin" {
    c.Status(200).Send("Welcome, admin!")
  } else {
    c.SendStatus(403)
    // => 403 Forbidden
  }
})
```

{% hint style = "info"%} Você pode colocar qualquer tipo nos **Locais** , mas não se esqueça de convertê-lo novamente quando estiver usando a variável. {% endhint%}

```go
type SomeStruct struct {
  Message string `json:"message"`
}

app.Get("/", func(c *fiber.Ctx) {
  c.Locals("user", SomeStruct{"Hello, World!"})
  // => user: {"message":"Hello, World!"}

  c.Next()
})

app.Get("/", func(c *fiber.Ctx) {
  if val, ok := c.Locals("user").(SomeStruct); ok {
    fmt.Println(val.Message)
    // => "Hello, World!"
  }
})
```

## Localização

Define o cabeçalho HTTP do [local de](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Location) resposta para o parâmetro do caminho especificado.

**Assinatura**

```go
c.Location(path string)
```

**Exemplo**

```go
app.Post("/", func(c *fiber.Ctx) {
  c.Location("http://example.com")
  c.Location("/foo/bar")
})
```

## Método

Contém uma sequência correspondente ao método HTTP da solicitação: GET, POST, PUT e assim por diante.

**Assinatura**

```go
c.Method() string
```

**Exemplo**

```go
app.Post("/", func(c *fiber.Ctx) {
  c.Method() // => "POST"
})
```

## MultipartForm

Para acessar entradas de formulário com várias partes, você pode analisar o binário com `MultipartForm()` . Isso retorna uma `map[string][]string` , de modo que, dada uma chave, o valor será uma fatia de string.

**Assinatura**

```go
c.MultipartForm() (*multipart.Form, error)
```

**Exemplo**

```go
app.Post("/", func(c *fiber.Ctx) {
  // Parse the multipart form:
  if form, err := c.MultipartForm(); err == nil {
    // => *multipart.Form

    if token := form.Value["token"]; len(token) > 0 {
      // Get key value:
      fmt.Println(token[0])
    }

    // Get all files from "documents" key:
    files := form.File["documents"]
    // => []*multipart.FileHeader

    // Loop trough files:
    for _, file := range files {
      fmt.Println(file.Filename, file.Size, file.Header["Content-Type"][0])
      // => "tutorial.pdf" 360641 "application/pdf"

      // Save the files to disk:
      c.SaveFile(file, fmt.Sprintf("./%s", file.Filename))
    }
  }
})
```

## Próximo

Quando **Next** é chamado, ele executa o próximo método na pilha que corresponde à rota atual.

**Assinatura**

```go
c.Next()
```

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  fmt.Printl("1st route!")
  c.Next()
})

app.Get("*", func(c *fiber.Ctx) {
  fmt.Printl("2nd route!")
  c.Next()
})

app.Get("/", func(c *fiber.Ctx) {
  fmt.Printl("3rd route!")
  c.Send("Hello, World!")
})
```

## OriginalURL

Contém o URL da solicitação original.

**Assinatura**

```go
c.OriginalURL() string
```

**Exemplo**

```go
// GET http://example.com/search?q=something

app.Get("/", func(c *fiber.Ctx) {
  c.OriginalURL() // => "/search?q=something"
})
```

## Params

O método pode ser usado para obter os parâmetros da rota.

{% hint style = "info"%} O padrão é string vazia ( `""` ), se o parâmetro **não** existir. {% endhint%}

**Assinatura**

```go
c.Params(param string) string
```

**Exemplo**

```go
// GET http://example.com/user/tj

app.Get("/user/:name", func(c *fiber.Ctx) {
  c.Params("name") // => "tj"
})
```

## Caminho

Contém a parte do caminho da URL da solicitação.

**Assinatura**

```go
c.Path() string
```

**Exemplo**

```go
// GET http://example.com/users?sort=desc

app.Get("/users", func(c *fiber.Ctx) {
  c.Path() // => "/users"
})
```

## Protocolo

Contém a sequência do protocolo de solicitação: `http` ou `https` para solicitações **TLS** .

**Assinatura**

```go
c.Protocol() string
```

**Exemplo**

```go
// GET http://example.com

app.Get("/", func(c *fiber.Ctx) {
  c.Protocol() // => "http"
})
```

## Inquerir

Esta propriedade é um objeto que contém uma propriedade para cada parâmetro de string de consulta na rota.

{% hint style = "info"%} Se não houver **uma** string de consulta, ela retornará uma **string vazia** . {% endhint%}

**Assinatura**

```go
c.Query(parameter string) string
```

**Exemplo**

```go
// GET http://example.com/shoes?order=desc&brand=nike

app.Get("/", func(c *fiber.Ctx) {
  c.Query("order") // => "desc"
  c.Query("brand") // => "nike"
})
```

## Alcance

{% hint style = "danger"%} Planejado para o **Fiber** v2. {% endhint%}

## Redirecionar

Redireciona para o URL derivado do caminho especificado, com status especificado, um número inteiro positivo que corresponde a um código de status HTTP.

{% hint style = "info"%} Se **não** especificado, o status será **302 Encontrado** . {% endhint%}

**Assinatura**

```go
c.Redirect(path string, status ...int)
```

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Redirect("/foo/bar")
  c.Redirect("../login")
  c.Redirect("http://example.com")
  c.Redirect("http://example.com", 301)
})
```

## Render

{% hint style = "danger"%} Planejado para o **Fiber** v2. {% endhint%}

## Rota

Contém a estrutura de [rota](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc#Route) atualmente correspondida.

{% hint style = "warning"%} Use este método **apenas** para depuração. {% endhint%}

**Assinatura**

```go
c.Route() *Route
```

**Exemplo**

```go
// http://localhost:8080/hello

app.Get("/hello", func(c *fiber.Ctx) {
  c.Route()
  // => {GET /hello false false <nil> [] 0x7b4ab0}
})

app.Post("/:api?", func(c *fiber.Ctx) {
  c.Route()
  // => {POST / false false ^(?:/([^/]+?))?/?$ [api] 0x7b49e0}
})
```

## Salvar Arquivo

O método é usado para salvar **qualquer** arquivo de várias partes no disco.

**Assinatura**

```go
c.SaveFile(fh *multipart.FileHeader, path string)
```

**Exemplo**

{% hint style = "success"%} Você pode ver um exemplo de trabalho no método [MultipartForm](https://fiber.wiki/context#multipartform) . {% endhint%}

## Seguro

Uma propriedade booleana, isso é `true` , se uma conexão **TLS** for estabelecida.

**Assinatura**

```go
c.Secure() bool
```

**Exemplo**

```go
// Secure() method is equivalent to:
c.Protocol() == "https"
```

## Mandar

Envia a resposta HTTP. O corpo de **envio** pode ser de qualquer tipo.

{% hint style = "warning"%} O método **não é** anexado como o método [Write](https://fiber.wiki/context#write) . {% endhint%}

**Assinatura**

```go
c.Send(body ...interface{})
```

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")         // => "Hello, World!"
  c.Send([]byte("Hello, World!")) // => "Hello, World!"
  c.Send(123)                     // => 123
})
```

## SendBytes

Método bruto.

{% hint style = "success"%} Use isso, se você **não precisar de** asserção de tipo, recomendada para **um** desempenho **mais rápido** . {% endhint%}

**Assinatura**

```go
c.SendBytes(b []byte)
```

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.SendByte([]byte("Hello, World!"))
  // => "Hello, World!"
})
```

## SendString

Método bruto.

{% hint style = "success"%} Use isso, se você **não precisar de** asserção de tipo, recomendada para **um** desempenho **mais rápido** . {% endhint%}

**Assinatura**

```go
c.SendString(s string)
```

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.SendString("Hello, World!")
  // => "Hello, World!"
})
```

## Enviar arquivo

Transfere o arquivo do caminho especificado. Define o campo de cabeçalho HTTP de resposta do [Tipo de conteúdo com](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) base na extensão de **nomes de arquivos** .

{% hint style = "info"%} O método usa **gzipping** por padrão, defina-o como **false** para desativar. {% endhint%}

**Assinatura**

```go
c.SendFile(path string, gzip ...bool)
```

**Exemplo**

```go
app.Get("/not-found", func(c *fiber.Ctx) {
  c.SendFile("./public/404.html")

  // Disable gzipping:
  c.SendFile("./static/index.html", false)
})
```

## SendStatus

Define o código de status e a mensagem de status correta no corpo, se o corpo da resposta estiver **vazio** .

{% hint style = "success"%} Você pode encontrar todos os códigos e mensagens de status usados [aqui](https://github.com/gofiber/fiber/blob/dffab20bcdf4f3597d2c74633a7705a517d2c8c2/utils.go#L183-L244) . {% endhint%}

**Assinatura**

```go
c.SendStatus(status int)
```

**Exemplo**

```go
app.Get("/not-found", func(c *fiber.Ctx) {
  c.SendStatus(415)
  // 415 "Unsupported Media Type"

  c.Send("Hello, World!")
  c.SendStatus(415)
  // 415 "Hello, World!"
})
```

## Conjunto

Define o campo do cabeçalho HTTP da resposta como `value` .

**Assinatura**

```go
c.Set(field, value string)
```

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Set("Content-Type", "text/plain")
  // => "Content-type: text/plain"
})
```

## Assinados

{% hint style = "danger"%} Planejado para o **Fiber** v2. {% endhint%}

## Velho

{% hint style = "danger"%} Planejado para o **Fiber** v2. {% endhint%}

## Status

Define o status HTTP para a resposta.

{% hint style = "info"%} O método é **capaz de** uma **cadeia** . {% endhint%}

**Assinatura**

```go
c.Status(status int)
```

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Status(200)
  c.Status(400).Send("Bad Request")
  c.Status(404).SendFile("./public/gopher.png")
})
```

## Subdomínios

Uma matriz de subdomínios no nome de domínio da solicitação.

O deslocamento do subdomínio da propriedade do aplicativo, cujo padrão é `2` , é usado para determinar o início dos segmentos do subdomínio.

**Assinatura**

```go
c.Subdomains(offset ...int) []string
```

**Exemplo**

```go
// Host: "tobi.ferrets.example.com"

app.Get("/", func(c *fiber.Ctx) {
  c.Subdomains()  // => ["ferrets", "tobi"]
  c.Subdomains(1) // => ["tobi"]
})
```

## Tipo

Define o cabeçalho HTTP do [tipo de conteúdo](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) como o tipo MIME listado [aqui](https://github.com/nginx/nginx/blob/master/conf/mime.types) especificado pela **extensão** do arquivo.

**Assinatura**

```go
c.Type(t string) string
```

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Type(".html") // => "text/html"
  c.Type("html")  // => "text/html"
  c.Type("json")  // => "application/json"
  c.Type("png")   // => "image/png"
})
```

## Variar

Adiciona o campo de cabeçalho fornecido ao cabeçalho de resposta [Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary) . Isso acrescentará o cabeçalho, se ainda não estiver listado, caso contrário, o deixará listado no local atual.

{% hint style = "info"%} Vários campos são **permitidos** . {% endhint%}

**Assinatura**

```go
c.Vary(field ...string)
```

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Vary("Origin")     // => Vary: Origin
  c.Vary("User-Agent") // => Vary: Origin, User-Agent

  // Checks for duplicates:
  c.Vary("Origin")
  // => Vary: Origin, User-Agent

  c.Vary("Accept-Encoding", "Accept")
  // => Vary: Origin, User-Agent, Accept-Encoding, Accept
})
```

## Escrever

Anexa **qualquer** entrada à resposta do corpo HTTP.

**Assinatura**

```go
c.Write(body ...interface{})
```

**Exemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Write("Hello, ")         // => "Hello, "
  c.Write([]byte("World! ")) // => "Hello, World! "
  c.Write(123)               // => "Hello, World! 123"
})
```

## XHR

Uma propriedade booleana, isso é `true` , se o campo de cabeçalho [X-Requested-With da solicitação](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) for [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) , indicando que a solicitação foi emitida por uma biblioteca cliente (como [jQuery](https://api.jquery.com/jQuery.ajax/) ).

**Assinatura**

```go
c.XHR() bool
```

**Exemplo**

```go
// X-Requested-With: XMLHttpRequest

app.Get("/", func(c *fiber.Ctx) {
  c.XHR() // => true
})
```

## XML

XML define o cabeçalho para `application/xml` e desmarca sua interface para XML.

**Assinatura**

```go
c.XML(xml interface{}) error
```

**Exemplo**

```go
type SomeStruct struct {
    Name  string `xml:"name"`
    Stars int    `xml:"stars"`
}

app.Get("/", func(c *fiber.Ctx) {
  // Create data struct:
  data := SomeStruct{
    "John",
    50,
  }

  c.XML(data)
  // => Content-Type: application/xml
  // => <some-struct><name>John</name><stars>50</stars></some-struct>
})
```
