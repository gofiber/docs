---
description: L'instance app désigne conventionnellement l'application.
---

# 🚀  Application

## New

Cette méthode crée une nouvelle instance nommée **Fiber**.

```go
app := fiber.New()
```

## Static

Pour servir des fichiers statiques comme des **images**, du **CSS** ou encore du **JavaScript**, vous pouvez utiliser la méthode **Static**.

{% hint style="info" %}
Par défaut, cette méthode renverra `index.html` en réponse, lors d'une requête sur un dossier.
{% endhint %}

#### Signature

```go
app.Static(root string)         // => without prefix
app.Static(prefix, root string) // => with prefix
```

#### Examples

Utilisez le code suivant pour servir des fichiers contenus dans un dossier nommé `./public`.

```go
app.Static("./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```

Pour servir des fichiers provenant de multiples dossiers, vous pouvez utiliser **Static** plusieurs fois.

```go
// Serve files from "./public" directory:
app.Static("./public")

// Serve files from "./files" directory:
app.Static("./files")
```

{% hint style="info" %}
Utilisez un reverse proxy cache comme [NGINX](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/) pour améliorer les performances lors du rendu d'assets statiques.
{% endhint %}

Pour créer un path prefix virtuel \(_où le path n'existe pas dans le filesystem_\) pour des fichiers servis par la méthode **Static**, spécifiez un prefix path pour le dossier statique, comme ci-dessous:

```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```

## Methods
Route une requête HTTP, avec **METHOD** désignant l' [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) de la requête.

#### Signature

```go
app.METHOD(handler func(*Ctx))              // match any path
app.METHOD(path string, handler func(*Ctx)) // match specific path
```

#### Example

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

## Recover

Vous pouvez vous remettre de panic errors, dans n'importe quel handler, en ayant recours à la méthode `Recover`. Vous pouvez accéder au détail de l'erreur via [`Error()`](context#error).

{% hint style="info" %}
A moins que vous enregistrez un handler, `Recover` est désactivé par défaut.
{% endhint %}

#### Signature

```go
app.Recover(handler ...func(*Ctx))
```

#### Example

```go
func main() {
  app := fiber.New()

  app.Get("/", func(c *fiber.Ctx) {
    panic("Something went wrong!")
  })

  app.Recover(func(c *fiber.Ctx) {
    c.Status(500).Send(c.Error())
    // => 500 "Something went wrong!"
  })

  app.Listen(3000)
}
```

## Listen

Lie et écoute les connexions sur l'adresse spécifiée. Le premier argument peut être un `int` (port), ou une adresse (`string`).

#### Signature

```go
app.Listen(address interface{}, tls ...string)
```

#### Example

```go
app.Listen(8080)
app.Listen("8080")
app.Listen(":8080")
app.Listen("127.0.0.1:8080")
```

Pour activer le **TLS/HTTPS**, vous pouvez ajouter en argument les paths menant à votre clé et certificat.

```go
app.Listen(443, "server.crt", "server.key")
```

## Settings

### Engine

Vous pouvez changer les paramètres serveurs de **Fasthttp** via l'instance **Fiber**. Ces paramètres ont besoin d'être défini **avant** la méthode [Listen](application.md#listen).

{% hint style="danger" %}
Ne changez ces paramètres que si vous **savez ce que vous faites**.
{% endhint %}

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

L'option Prefork active l'utilisation de la socket option [**SO\_REUSEPORT**](https://lwn.net/Articles/542629/), qui est disponible dans les versions récentes de plusieurs OS, dont **DragonFly BSD** et **Linux** \(kernel version **3.9** et supérieur\).
Cette option lancera de nombreux processus Go, écoutant sur le même port.

**NGINX** a un excellent article traitant du [Socket Sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/). Ces images sont tirés dudit article.

![Schema, when Prefork disabled \(by default\)](https://cdn.wp.nginx.com/wp-content/uploads/2015/05/Slack-for-iOS-Upload-1-e1432652484191.png)

![Schema, when Prefork enabled](https://cdn.wp.nginx.com/wp-content/uploads/2015/05/Slack-for-iOS-Upload-e1432652376641.png)

Vous pouvez activer la feature Prefork, en ajoutant le flag `-prefork`.

```bash
./server -prefork
```

Ou en définissant l'option `Prefork` à `true`.

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

### Server

Par défaut, Fiber n'envoie pas de [Server header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server), mais vous pouvez activer cela en modifiant la valeur `Server`.

```go
app.Server = "Windows 95" // => Server: Windows 95
```

### Banner

Quand vous lancez votre application Fiber, la console affiche une bannière contenant la version du package, et le port écouté. _Ceci est activé par défaut._

![](.gitbook/assets/screenshot-2020-02-08-at-13.18.27.png)

Pour désactiver la bannière, définissez la valeur de `Banner` à `false` :

```go
app.Banner = false // Hide banner
```

## Test

Vous pouvez tester votre application via la méthode **Test**.

{% hint style="info" %}
Cette méthode est principalement utilisée pour les fichiers `_test.go`, ainsi que le débogage de l'application.
{% endhint %}

#### Signature

```go
app.Test(req *http.Request) (*http.Response, error)
```

#### Example

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
