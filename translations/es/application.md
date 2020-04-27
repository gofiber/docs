---
description: Convencionalmente la instancia app denota la aplicación Fiber.
---

# 🚀 Application

## New

Este método crea una nueva instancia llamada **App**.  
Opcionalmente se puede invocar con [ajustes ](application.md#settings) cuando se crea una nueva instancia

{% code title="Signature" %}
```go
fiber.New(settings ...Settings) *App
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

Puedes enviar ajustes cuando se llama a `New`.

{% code title="Example" %}
```go
func main() {
    // Enviando Ajustes al crear una nueva instancia
    app := fiber.New(fiber.Settings{
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

Cambiando los ajustes luego de inicializar una `app`.

{% code title="Example" %}
```go
func main() {
    app := fiber.New()

    // Cambiando los Ajustes luego de crear una instancia
    app.Settings.Prefork = true
    app.Settings.CaseSensitive = true
    app.Settings.StrictRouting = true
    app.Settings.ServerHeader = "Fiber"

    // ...

    app.Listen(3000)
}
```
{% endcode %}

**Configuración de ** **ajustes**

| Propiedad                 | Tipo                                                 | Descripción                                                                                                                                                                                                                                               | Predeterminado    |
|:------------------------- |:---------------------------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------- |
| Prefork                   | `bool`                                               | Enables use of the[`SO_REUSEPORT`](https://lwn.net/Articles/542629/)socket option. This will spawn multiple Go processes listening on the same port. learn more about [socket sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/). | `false`           |
| ServerHeader              | `string`                                             | Enables the `Server` HTTP header with the given value.                                                                                                                                                                                                    | `""`              |
| StrictRouting             | `bool`                                               | When enabled, the router treats `/foo` and `/foo/` as different. Otherwise, the router treats `/foo` and `/foo/` as the same.                                                                                                                             | `false`           |
| CaseSensitive             | `bool`                                               | When enabled, `/Foo` and `/foo` are different routes. When disabled, `/Foo`and `/foo` are treated the same.                                                                                                                                               | `false`           |
| Immutable                 | `bool`                                               | When enabled, all values returned by context methods are immutable. By default they are valid until you return from the handler, see issue [\#185](https://github.com/gofiber/fiber/issues/185).                                                        | `false`           |
| BodyLimit                 | `int`                                                | Sets the maximum allowed size for a request body, if the size exceeds the configured limit, it sends `413 - Request Entity Too Large` response.                                                                                                           | `4 * 1024 * 1024` |
| Concurrency               | `int`                                                | Maximum number of concurrent connections.                                                                                                                                                                                                                 | `256 * 1024`      |
| DisableKeepalive          | `bool`                                               | Disable keep-alive connections, the server will close incoming connections after sending the first response to client                                                                                                                                     | `false`           |
| DisableDefaultDate        | `bool`                                               | When set to true causes the default date header to be excluded from the response.                                                                                                                                                                         | `false`           |
| DisableDefaultContentType | `bool`                                               | When set to true, causes the default Content-Type header to be excluded from the Response.                                                                                                                                                                | `false`           |
| DisableStartupMessage     | `bool`                                               | When set to true, it will not print out the fiber ASCII and "listening" on message                                                                                                                                                                        | `false`           |
| TemplateEngine            | `func(raw string, bind interface{}) (string, error)` | You can specify a custom template function to render different template languages. See our [**Template Middleware**](middleware.md#template) _\*\*_for presets.                                                                                     | `nil`             |
| TemplateFolder            | `string`                                             | A directory for the application's views. If a directory is set, this will be the prefix for all template paths. `c.Render("home", data) -> ./views/home.pug`                                                                                           | `""`              |
| TemplateExtension         | `string`                                             | If you preset the template file extension, you do not need to provide the full filename in the Render function: `c.Render("home", data) -> home.pug`                                                                                                   | `"html"`          |
| ReadTimeout               | `time.Duration`                                      | The amount of time allowed to read the full request including body. Default timeout is unlimited.                                                                                                                                                         | `nil`             |
| WriteTimeout              | `time.Duration`                                      | The maximum duration before timing out writes of the response. Default timeout is unlimited.                                                                                                                                                              | `nil`             |
| IdleTimeout               | `time.Duration`                                      | The maximum amount of time to wait for the next request when keep-alive is enabled. If IdleTimeout is zero, the value of ReadTimeout is used.                                                                                                             | `nil`             |

## Static

Utiliza el método **Static** para servir archivos estáticos como **imágenes**, **CSS** y **JavaScript**.

{% hint style="info" %}
Por defecto, **Static** servirá archivos `index.html` cuando haya solicitudes a un directorio.
{% endhint %}

{% code title="Signature" %}
```go
app.Static(prefix, root string, config ...Static) // => con prefix
```
{% endcode %}

Usa el siguiente código para servir archivos en un directorio llamado `./public`

{% code title="Example" %}
```go
app.Static("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```
{% endcode %}

Para responder desde multiples directorios, se puede usar **Static** varias veces.

{% code title="Example" %}
```go
// Servir archivos desde el directorio "./public":
app.Static("/", "./public")

// Servir archivos desde el directorio "./files":
app.Static("/", "./files")
```
{% endcode %}

{% hint style="info" %}
Usa un cache de proxy inverso como [**NGINX**](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/) para mejorar el rendimiento al servir recursos estáticos.
{% endhint %}

Puedes usar cualquier prefijo de ruta virtual \(_donde la ruta no existe actualmente en el sistema de archivos_\) para los archivos que son servidos por el método **Static**, especificando un prefijo de ruta para el directorio 'static', como se muestra abajo:

{% code title="Example" %}
```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```
{% endcode %}

Si desea tener un poco mas de control respecto a los ajustes para servir los archivos estáticos. Puedes usar el struct `fiber.Static` para habilitar ajustes específicos.

{% code title="fiber.Static{}" %}
```go
// Static representa ajustes para servir archivos estáticos
type Static struct {
    // Comprime transparentemente las respuestas si esta establecido a true
    // Esto funciona de manera distinta que en el middleware github.com/gofiber/compression
    // El servidor intenta minimizar el uso del CPU almacenando en cache los archivos comprimidos.
    // Agrega el sufijo ".fiber.gz" al nombre original del archivo.
    // Es opcional. Valor por defecto false 
    Compress bool
    // Habilita pedidos byte range si se establece a true.
    // Es opcional. Valor por defecto false.
    ByteRange bool
    // Habilita la navegación de directorios.
    // Es opcional. Valor por defecto false.
    Browse bool
    // archivo index para servir un directorio.
    // Es opcional. Valor por defecto "index.html".
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

Enruta una petición HTTP, donde **METHOD** es un [método HTTP](https://developer.m  ozilla.o  rg/en-US/docs/Web/HTTP/Methods) de la petición.

{% code title="Signatures" %}
```go
// Método HTTP admite :param, :optional? and *wildcards
// Es requerido enviar un path para cada método
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

// Use() solo coincidirá con el principio de cada ruta
// ṕ.e. /john" coincidirá "/john/doe", "/johnnnn"
// Use() no admite :param & :optional? en la ruta
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

Puedes agrupar rutas creando un struct `*Group`.

**Signature**

```go
app.Group(prefix string, handlers ...func(*Ctx)) *Group
```

**Ejemplo**

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

Enlaza y espera por conexiones en la dirección especificada. Esta puede ser `int` para puerto o `string` para dirección.

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

Para habilitar **TLS/HTTPS** puedes anexar <a ref="https://golang.org/pkg/crypto/tls/#Config"><strong x-id="1">configuración TLS</strong></a>.

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

Puedes pasar tu propio [`net.Listener`](https://golang.org/pkg/net/#Listener) usando el método `Serve`.

{% code title="Signature" %}
```go
app.Serve(ln net.Listener, tls ...*tls.Config) error
```
{% endcode %}

{% hint style="warning" %}
**Serve** no admite la propiedad [**Prefork**](application.md#settings).
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

Las pruebas en la aplicación es realizado a travez del método **Test**. Usa este método para crear archivos`_test.go` o cuando necesitas depurar tus lógica de enrutamiento. El tiempo de espera es `200ms` por defecto si deseas deshabilitarlo completamente, envía `-1` como segundo argumento.

{% code title="Signature" %}
```go
app.Test(req *http.Request, msTimeout ...int) (*http.Response, error)
```
{% endcode %}

{% code title="Example" %}
```go
// Crea una ruta con método GET para prueba:
app.Get("/", func(c *Ctx) {
  fmt.Println(c.BaseURL())              // => http://google.com
  fmt.Println(c.Get("X-Custom-Header")) // => hi

  c.Send("Hola, Mundo!")
})

// http.Request
req, _ := http.NewRequest("GET", "http://google.com", nil)
req.Header.Set("X-Custom-Header", "hi")

// http.Response
resp, _ := app.Test(req)

// Haz algo con el resultados:
if resp.StatusCode == 200 {
  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println(string(body)) // => Hola, Mundo!
}
```
{% endcode %}

