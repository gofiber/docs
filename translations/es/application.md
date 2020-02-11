---
description: La instancia de la aplicación denota convencionalmente la aplicación Fiber.
---

# 🚀 Aplicación

## Nuevo

El método crea una nueva instancia con nombre de **Fiber** .

```go
app := fiber.New()
```

## Estático

Sirva archivos estáticos como **imágenes** , archivos **CSS** y **JavaScript** , puede usar el método **estático** .

{% hint style = "info"%} De manera predeterminada, este método enviará archivos `index.html` en respuesta a una solicitud en un directorio. {% endhint%}

#### Firma

```go
app.Static(root string)         // => without prefix
app.Static(prefix, root string) // => with prefix
```

#### Ejemplos

Use el siguiente código para servir archivos en un directorio llamado `./public`

```go
app.Static("./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```

Para servir desde múltiples directorios, puede usar **Static** varias veces.

```go
// Serve files from "./public" directory:
app.Static("./public")

// Serve files from "./files" directory:
app.Static("./files")
```

{% hint style = "info"%} Use una memoria caché de proxy inverso como [NGINX](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/) para mejorar el rendimiento del servicio de activos estáticos. {% endhint%}

Para crear un prefijo de ruta virtual ( *donde la ruta no existe realmente en el sistema* de archivos) para los archivos que se sirven mediante el método **estático** , especifique una ruta de prefijo para el directorio estático, como se muestra a continuación:

```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```

## Métodos

Enruta una solicitud HTTP, donde **METHOD** es el [método HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) de la solicitud.

#### Firma

```go
app.METHOD(handler func(*Ctx))              // match any path
app.METHOD(path string, handler func(*Ctx)) // match specific path
```

#### Ejemplo

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

## Escucha

Vincula y escucha las conexiones en la dirección especificada. Esto puede ser un `int` para el puerto o una `string` para la dirección.

#### Firma

```go
app.Listen(address interface{}, tls ...string)
```

#### Ejemplo

```go
app.Listen(8080)
app.Listen("8080")
app.Listen(":8080")
app.Listen("127.0.0.1:8080")
```

Para habilitar **TLS / HTTPS** , puede agregar su **certificado** y ruta de **clave** .

```go
app.Listen(443, "server.crt", "server.key")
```

## Configuraciones

### Motor

Puede cambiar la configuración predeterminada del [servidor](https://github.com/valyala/fasthttp/blob/master/server.go#L150) **Fasthttp a** través de la instancia de **Fiber** . Estas configuraciones deben establecerse **antes del** método [Listen](application.md#listen) .

{% hint style = "danger"%} Solo cambia esta configuración, si sabes **lo que** estás haciendo. {% endhint%}

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

La opción Prefork permite el uso de la [**opción de**](https://lwn.net/Articles/542629/) socket [**SO_REUSEPORT**](https://lwn.net/Articles/542629/) , que está disponible en las versiones más recientes de muchos sistemas operativos, incluidos **DragonFly BSD** y **Linux** (versión de kernel **3.9** y posterior). Esto generará múltiples procesos Go escuchando en el mismo puerto.

**NGINX** tiene un gran artículo sobre [Socket Sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/) , estas imágenes están tomadas del mismo artículo.

![Schema, when Prefork disabled (by default)](https://cdn.wp.nginx.com/wp-content/uploads/2015/05/Slack-for-iOS-Upload-1-e1432652484191.png)

![Schema, when Prefork enabled](https://cdn.wp.nginx.com/wp-content/uploads/2015/05/Slack-for-iOS-Upload-e1432652376641.png)

Puede habilitar la función Prefork agregando el indicador `-prefork` :

```bash
./server -prefork
```

O establezca la opción `Prefork` en `true` :

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

La fibra por defecto no envía un [encabezado de servidor](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server) , pero puede habilitarlo cambiando el valor del servidor.

```go
app.Server = "Windows 95" // => Server: Windows 95
```

### Bandera

Cuando inicie su aplicación Fiber, la consola imprimirá un banner que contiene la versión del paquete y el puerto de escucha. *Esto está habilitado por defecto.*

![](../../.gitbook/assets/screenshot-2020-02-08-at-13.18.27.png)

Para deshabilitarlo, configure `Banner` en `false` :

```go
app.Banner = false // Hide banner
```

## Prueba

La prueba de su aplicación se realiza con el método de **prueba** .

El método {% hint style = "info"%} se utiliza principalmente para la depuración de aplicaciones y archivos `_test.go` . {% endhint%}

#### Firma

```go
app.Test(req *http.Request) (*http.Response, error)
```

#### Ejemplo

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
