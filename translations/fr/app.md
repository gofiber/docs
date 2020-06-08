---
description: L'instance app représente habituellement une application Fiber.
---

# 🚀 Application

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

Vous pouvez indiquer des options lorsque vous appelez `New`.

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

Ou changer les paramètres après initialisation d'une `app`.

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

**Liste** **des paramètres**

| Propriété                 | Type            | Description                                                                                                                                                                                                                                                                 | Défaut            |
|:------------------------- |:--------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------- |
| Prefork                   | `bool`          | Active l'option [`SO_REUSEPORT`](https://lwn.net/Articles/542629/) au niveau du socket. Plusieurs processus Go seront démarrés et écouteront sur le même port. En apprendre plus sur le [socket sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/). | `false`           |
| ServerHeader              | `string`        | Active l'en-tête HTTP `Server` avec la valeur donnée.                                                                                                                                                                                                                       | `""`              |
| StrictRouting             | `bool`          | Quand activé, le routeur gère `/foo` et `/foo/` comme étant différent. Sinon, le routeur gèrera `/foo` et `/foo/` comme étant identique.                                                                                                                                    | `false`           |
| CaseSensitive             | `bool`          | Quand activé, `/Foo` et `/foo` sont différentes routes. Quand désactivé, `/Foo` et `/foo` sont traités de la même façon.                                                                                                                                                    | `false`           |
| Immutable                 | `bool`          | Quand activé, toutes les valeurs retournées par la méthode context sont immuables. Par défaut, elles sont valides jusqu'à ce qu'elles soient retournées par un handler, voir [\#185](https://github.com/gofiber/fiber/issues/185).                                        | `false`           |
| BodyLimit                 | `int`           | Indique la taille maximale autorisée du corps d'une requête, si la taille dépasse la limite configurée, il envoie la réponse `413 - Request Entity Too Large`.                                                                                                              | `4 * 1024 * 1024` |
| CompressedFileSuffix      | `string`        | Adds suffix to the original file name and tries saving the resulting compressed file under the new file name.                                                                                                                                                               | `".fiber.gz"`     |
| Concurrency               | `int`           | Nombre maximum de connexions en parallèle.                                                                                                                                                                                                                                  | `256 * 1024`      |
| DisableKeepalive          | `bool`          | Désactive les connexions keep-alive, le serveur fermera les connexions entrantes après avoir envoyé la première réponse au client                                                                                                                                           | `false`           |
| DisableDefaultDate        | `bool`          | Lorsqu'il est défini à true, l'en-tête par défaut date est exclu de la réponse.                                                                                                                                                                                             | `false`           |
| DisableDefaultContentType | `bool`          | Lorsqu'il est à true, l'en-tête par défaut Content-Type est exclu de la réponse.                                                                                                                                                                                            | `false`           |
| DisableStartupMessage     | `bool`          | Lorsqu'il est à true, le message ASCII fiber et "listening" ne seront pas affichés.                                                                                                                                                                                         | `false`           |
| DisableHeaderNormalizing  | `bool`          | By default all header names are normalized: conteNT-tYPE -&gt; Content-Type                                                                                                                                                                                           | `false`           |
| ETag                      | `bool`          | Active ou désactive la génération de l'en-tête ETag, étant donné que les etags forts et faibles utilisent la même méthode de hashage \(CRC-32\). Par défaut, les faibles ETags sont utilisés quand activé.                                                                | `false`           |
| Templates                 | `Templates`     | Templates is the interface that wraps the Render function. See our [**Template Middleware**](middleware.md#template) for supported engines.                                                                                                                                 | `nil`             |
| ReadTimeout               | `time.Duration` | Durée maximumale autorisée pour lire entièrement une requête en comptant le corps de celle-ci. Par défaut la durée est illimitée.                                                                                                                                           | `nil`             |
| WriteTimeout              | `time.Duration` | Durée maximale avant que les écritures vers la réponse échouent. Par défaut la durée est illimitée.                                                                                                                                                                         | `nil`             |
| IdleTimeout               | `time.Duration` | Durée maximale d'attente entrer deux requêtes lorsque keep-alive est activé. If IdleTimeout est égale à zéro, la valeur de ReadTimeout est utilisée.                                                                                                                        | `nil`             |

## Static

Utilisez la méthode **Static** pour servir des fichiers statiques comme **des images**, **du CSS** et **du JavaScript**.

{% hint style="info" %}
By default, **Static** will serve `index.html` files in response to a request on a directory.
{% endhint %}

{% code title="Signature" %}
```go
app.Static(prefix, root string, config ...Static) // => with prefix
```
{% endcode %}

Utilisez le code suivant pour servir les fichiers d'un répertoire nommé `./public`

{% code title="Example" %}
```go
app.Static("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```
{% endcode %}

Pour servir depuis plusieurs répertoires, vous pouvez utiliser **Static** plusieurs fois.

{% code title="Example" %}
```go
// Serve files from "./public" directory:
app.Static("/", "./public")

// Serve files from "./files" directory:
app.Static("/", "./files")
```
{% endcode %}

{% hint style="info" %}
Utilisez un cache géré par un "reverse proxy" comme [**NGINX**](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/) pour améliorer les performances afin de servir des fichiers statiques.
{% endhint %}

Vous pouvez utiliser n'importe quel préfixe virtuel \(_où un chemin n'existe pas réellement dans le système de fichier_\) pour servir des fichiers par la méthode **Static**. Spécifiez un préfixe vers le répertoire statique, comme indiqué ci-dessous :

{% code title="Example" %}
```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```
{% endcode %}

Si vous voulez avoir un peu plus de contrôle à propos des paramètres pour servir des fichiers statiques. You could use the `fiber.Static` struct to enable specific settings.

{% code title="fiber.Static{}" %}
```go
// Static represents settings for serving static files
type Static struct {
    // Transparently compresses responses if set to true
    // This works differently than the github.com/gofiber/compression middleware
    // The server tries minimizing CPU usage by caching compressed files.
    // Il ajoute le suffixe ".fiber.gz" au fichier original.
    // Optionnel. Valeur par défaut false
    Compress bool
    // Active les requêtes byte range si l'option est à true.
    // Optionnel. Valeur par défaut false
    ByteRange bool
    // Active la visualisation des répertoires.
    // Optionnel. Valeur par défaut false.
    Browse bool
    // Le nom du fichier index à servir pour un dossier.
    // Optionnel. Valeur par défaut "index.html".
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

Router une requête HTTP, où **la METHODE** est la [méthode HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) de cette requête.

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

Vous pouvez regrouper les routes en créant une structure `*Group`.

**Signature**

```go
app.Group(prefix string, handlers ...func(*Ctx)) *Group
```

**Exemple**

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

## Listen

Configurer l'ip et le port d'écoute pour les connexions entrantes. Cela peut être juste un `nombre` pour le port ou une `chaîne de caractères` pour l'adresse.

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

Pour activer **TLS/HTTPS** vous pouvez ajouter une [**configuration TLS**](https://golang.org/pkg/crypto/tls/#Config).

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

Les tests de votre application sont fait avec la méthode **Test**. Utilisez cette méthode pour créer des fichiers `_test.go` ou quand vous avez besoin de déboguer vos routes. Le timeout par défaut est fixé à `200ms`, si vous voulez entièrement désactiver les timeouts, passez comme valeur `1` en second argument.

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

