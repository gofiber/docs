---
description: Instancja aplikacji standardowo stanowi aplikacje Fiber.
---

# 🚀 Aplikacja

## New

Ta metoda tworzy nową instancję **App**.   
Możesz przekazać opcjonalne [ustawienia](application.md#settings) podczas tworzenia nowej instancji

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

Możesz ustanowić ustawienia aplikacji przy wywoływaniu `New`.

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

Lub zmień ustawienia po zainicjalizowaniu instancji `app`.

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

**Właściwości** **ustawień**

| Właściwość                | Typ                                                  | Opis                                                                                                                                                                                                                                             | Domyślna wartość  |
|:------------------------- |:---------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:----------------- |
| Prefork                   | `bool`                                               | Włącza opcję gniazd [`SO_REUSEPORT`](https://lwn.net/Articles/542629/). Uruchamia wiele procesów Go nasłuchujących na tym samym porcie. dowiedz się więcej o [socket sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/). | `false`           |
| ServerHeader              | `string`                                             | Ustawia nagłówek HTTP `Server` z daną wartością.                                                                                                                                                                                                 | `""`              |
| StrictRouting             | `bool`                                               | Przełącza traktowanie `/foo` i `/foo/` jako innych routeów. Gdy wartość jest fałszywa, router traktuje `/foo` oraz `/foo/` jako takie same.                                                                                                      | `false`           |
| CaseSensitive             | `bool`                                               | Gdy włączone, `/Foo` i `/foo` są innymi routeami. W przeciwnym razie `/Foo` i `/foo` są traktowane jako identyczne.                                                                                                                              | `false`           |
| Immutable                 | `bool`                                               | Gdy włączone, wszystkie wartości zwrócone przez context są niezmienne. Domyślnie są prawidłowe dopóki ich nie zwrócisz z handlera, zobacz [\#185](https://github.com/gofiber/fiber/issues/185).                                                | `false`           |
| BodyLimit                 | `int`                                                | Ustawia maksymalny dozwolony rozmiar body żądania, jeżeli rozmiar przekroczy ustawiony limit, wysyła `413 - Request Entity Too Large`.                                                                                                           | `4 * 1024 * 1024` |
| Concurrency               | `int`                                                | Maksymalna liczba jednoczesnych połączeń.                                                                                                                                                                                                        | `256 * 1024`      |
| DisableKeepalive          | `bool`                                               | Wyłącza utrzymywanie połączeń keep-alive, serwer będzie zamykał przychodzące połączenia po wysłaniu odpowiedzi do klienta                                                                                                                        | `false`           |
| DisableDefaultDate        | `bool`                                               | Gdy ustawione na true, domyślny nagłówek z datą nie będzie załączany w odpowiedzi.                                                                                                                                                               | `false`           |
| DisableDefaultContentType | `bool`                                               | Gdy ustawione na true, domyślny nagłówek Content-Type nie będzie uwzględniany w odpowiedzi.                                                                                                                                                      | `false`           |
| DisableStartupMessage     | `bool`                                               | Gdy ustawione na true, Fiber nie będzie wyświetlał ASCII arta i wiadomości o nasłuchiwaniu                                                                                                                                                       | `false`           |
| ETag                      | `bool`                                               | Wyłącza lub włącza generowanie nagłówków ETag, ponieważ zarówno słabe, jak i mocne ETagi są generowane tą samą metodą hashowania \(CRC-32\). Słabe ETagi są domyślnie ustawione, gdy włączone.                                                 | `false`           |
| TemplateEngine            | `func(raw string, bind interface{}) (string, error)` | Możesz ustawić niestandardową funkcję szablonów, aby przetwarzać inne języki templatowania. Zobacz [**Template Middleware**](middleware.md#template)_\*\*_dla presetów.                                                                    | `nil`             |
| TemplateFolder            | `string`                                             | Katalog na viewy do aplikacji. Jeżeli katalog jest ustawiony, będzie on prefixem dla wszystkich ścieżek dla szablonów. `c.Render("home", data) -> ./views/home.pug`                                                                           | `""`              |
| TemplateExtension         | `string`                                             | Jeżeli wstępnie ustawisz rozszerzenie używane przez szablony, nie będzie potrzeby podawania pełnej nazwy z rozszerzeniem w funkcji Render: `c.Render("home", data) -> home.pug`                                                               | `""`              |
| ReadTimeout               | `time.Duration`                                      | Dozwolona ilość czasu na przeczytanie pełnego requestu razem z jego body. Domyślnie jest nieograniczona.                                                                                                                                         | `nil`             |
| WriteTimeout              | `time.Duration`                                      | Maksymalny czas trwania przed przedawnieniem zapisywania odpowiedzi. Domyślnie jest nieograniczona.                                                                                                                                              | `nil`             |
| IdleTimeout               | `time.Duration`                                      | Maksymalna długość czasu dla czekania na następny request, kiedy keep-alive jest włączone. Jeżeli IdleTimeout ma wartość zerową, wartość ReadTimeout jest używana.                                                                               | `nil`             |

## Static

Użyj metody **Static**, żeby serwować statyczne pliki takie jak **zdjęcia**, **arkusze CSS** czy **JavaScript**.

{% hint style="info" %}
Domyślnie **Static** serwuje `index.html` w odpowiedzi na zapytanie na katalog.
{% endhint %}

{% code title="Signature" %}
```go
app.Static(prefix, root string, config ...Static) // => z prefixem
```
{% endcode %}

Użyj poniższego kodu, aby serwowac pliki znajdujące się w katalogu `./public`

{% code title="Example" %}
```go
app.Static("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```
{% endcode %}

Aby serwować z wielu katalogów, po prostu możesz użyć metody **Static** wiele razy.

{% code title="Example" %}
```go
// Serve files from "./public" directory:
app.Static("/", "./public")

// Serve files from "./files" directory:
app.Static("/", "./files")
```
{% endcode %}

{% hint style="info" %}
Warto używać reverse proxy cache jak [**NGINX**](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/), aby poprawić wydajność serwowania statycznych assetsów.
{% endhint %}

Można użyć dowolnego wirtualnego prefixu dla ścieżek \(_gdzie ścieżka nie istnieje w żadnym systemie plików_\) dla plików, które są serwowane przez metodę **Static**, określając ścieżkę prefixu dla katalogu statycznych plików, jak pokazano poniżej:

{% code title="Example" %}
```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```
{% endcode %}

Jeżeli chcesz mieć trochę więcej kontroli nad ustawieniami serwowania assetsów. Możesz użyć structa `fiber.Static`, aby ustanowić konkretne ustawienia.

{% code title="fiber.Static{}" %}
```go
// Static represents settings for serving static files
type Static struct {
    // Transparently compresses responses if set to true
    // This works differently than the github.com/gofiber/compression middleware
    // The server tries minimizing CPU usage by caching compressed files.
    // It adds ".fiber.gz" suffix to the original file name.
    // Optional. Default value false
    Compress bool
    // Enables byte range requests if set to true.
    // Optional. Default value false
    ByteRange bool
    // Enable directory browsing.
    // Optional. Default value false.
    Browse bool
    // Index file for serving a directory.
    // Optional. Default value "index.html".
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

Przekierowuje zapytanie HTTP, gdzie **METHOD** jest [metodą HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) zapytania.

{% code title="Signatures" %}
```go
// HTTP methods support :param, :optional? and *wildcards
// You are required to pass a path to each method
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

// Use() will only match the beggining of each path
// i.e. "/john" will match "/john/doe", "/johnnnn"
// Use() does not support :param & :optional? in path
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
app.Get("/api/list", func(c *fiber.Ctx) {
  c.Send("I'm a GET request!")
})
app.Post("/api/register", func(c *fiber.Ctx) {
  c.Send("I'm a POST request!")
})
```
{% endcode %}

## Group

Możesz grupować routy tworząc structy `*Group`.

**Signature**

```go
app.Group(prefix string, handlers ...func(*Ctx)) *Group
```

**Przykład**

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
}
```

## Listen

Binduje i nasłuchuje połączeń na podanym adresie. Może być `int` dla portu lub `string` dla adresu.

{% code title="Signature" %}
```go
app.Listen(address interface{}, tls ...*tls.Config) error
```
{% endcode %}

{% code title="Przykłady" %}
```go
app.Listen(8080)
app.Listen("8080")
app.Listen(":8080")
app.Listen("127.0.0.1:8080")
```
{% endcode %}

Aby włączyć **TLS/HTTPS**, możesz dołączyć [**config TLS**](https://golang.org/pkg/crypto/tls/#Config).

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

Możesz również przekazywać swój własny [`net.Listener`](https://golang.org/pkg/net/#Listener) używając metody `Serve`.

{% code title="Signature" %}
```go
app.Serve(ln net.Listener, tls ...*tls.Config) error
```
{% endcode %}

{% hint style="warning" %}
**Serve** nie wspiera ****[**Prefork**](application.md#settings).
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

Testowanie aplikacji odbywa się z uzyciem metody **Test**. Użyj tej metody w tworzeniu plików `_test.go` lub gdy potrzebujesz zdebugować logikę routingu. Domyślnie timeout ma wartość `200ms`. Jeżeli chcesz wyłączyć timeout całkowicie, przekaż `-1` jako drugi argument.

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
{% endcode %}

