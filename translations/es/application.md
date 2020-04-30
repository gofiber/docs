---
description: Convencionalmente la instancia app denota la aplicación Fiber.
---

# 🚀 Aplicación

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

| Propiedad                 | Tipo                                                 | Descripción                                                                                                                                                                                                                                                                     | Predeterminado    |
|:------------------------- |:---------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------- |
| Prefork                   | `bool`                                               | Habilita el uso de la opción socket [`SO_REUSEPORT`](https://lwn.net/Articles/542629/). Esto va a generar multiples procesos de Go escuchando en el mismo puerto. aprende más sobre [fragmentación de socket](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/). | `false`           |
| ServerHeader              | `string`                                             | Habilita el encabezado HTTP `del servidor` con el valor suminstrado.                                                                                                                                                                                                            | `""`              |
| StrictRouting             | `bool`                                               | Cuando está activado, el enrutador trata `/foo` y `/foo/` como diferente. De lo contrario, el enrutador trata a `/foo` y `/foo/` como igual.                                                                                                                                    | `false`           |
| CaseSensitive             | `bool`                                               | Cuando está activado, `/Foo` y `/foo` son rutas diferentes. Cuando se desactiva, `/Foo`y `/foo` son tratados como iguales.                                                                                                                                                      | `false`           |
| Immutable                 | `bool`                                               | Cuando se activa, todos los valores devueltos por métodos contextuales son inmutables. Por defecto, son válidos hasta que regreses del manejador, ver el problema [\#185](https://github.com/gofiber/fiber/issues/185).                                                       | `false`           |
| BodyLimit                 | `int`                                                | Establece el tamaño máximo permitido para un cuerpo de solicitud, si el tamaño excede el límite configurado, envía `413 - Request Entity Too Large` como respuesta.                                                                                                             | `4 * 1024 * 1024` |
| Concurrency               | `int`                                                | Número máximo de conexiones concurrentes.                                                                                                                                                                                                                                       | `256 * 1024`      |
| DisableKeepalive          | `bool`                                               | Desactivar las conexiones keep-alive, el servidor cerrará las conexiones entrantes después de enviar la primera respuesta al cliente                                                                                                                                            | `false`           |
| DisableDefaultDate        | `bool`                                               | Cuando se establece en true hace que la cabecera de fecha por defecto sea excluida de la respuesta.                                                                                                                                                                             | `false`           |
| DisableDefaultContentType | `bool`                                               | Cuando se establece en true, hace que la cabecera de tipo del contenido por defecto sea excluida de la respuesta.                                                                                                                                                               | `false`           |
| DisableStartupMessage     | `bool`                                               | Cuando se establece en verdadero, no imprimirá la fibra ASCII y "listening" en el mensaje                                                                                                                                                                                       | `false`           |
| ETag                      | `bool`                                               | Activar o desactivar la generación de cabeceras ETag, ya que etags débiles y fuertes se generan utilizando el mismo método de hashing \(CRC-32\). ETags débiles son los predeterminados cuando están habilitados.                                                             | `false`           |
| TemplateEngine            | `func(raw string, bind interface{}) (string, error)` | Puedes especificar una función de plantilla personalizada para representar diferentes idiomas de plantilla. Ve nuestro [**Middleware de Plantilla**](middleware.md#template) _\*\*_para encontrar preajustes.                                                             | `nil`             |
| TemplateFolder            | `string`                                             | Un directorio para las vistas de la aplicación. Si se establece un directorio, este será el usado por defecto para todas las rutas de plantillas. `c.Render("home", data) -> ./views/home.pug`                                                                               | `""`              |
| TemplateExtension         | `string`                                             | Si preestableces la extensión del archivo de plantilla, no necesita proporcionar el nombre completo del archivo en la función Render: `c.Render("home", data) -> home.pug`                                                                                                   | `"html"`          |
| ReadTimeout               | `time.Duration`                                      | La cantidad de tiempo permitido para leer la solicitud completa incluyendo el cuerpo. El tiempo de espera por defecto es ilimitado.                                                                                                                                             | `nil`             |
| WriteTimeout              | `time.Duration`                                      | La duración máxima antes de agotar el tiempo de espera para escribir la respuesta. El tiempo de espera por defecto es ilimitado.                                                                                                                                                | `nil`             |
| IdleTimeout               | `time.Duration`                                      | La cantidad máxima de tiempo para esperar a la siguiente petición cuando keep-alive está activada. Si IdleTimeout es cero, se usa el valor de ReadTimeout.                                                                                                                      | `nil`             |

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

