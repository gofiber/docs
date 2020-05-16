---
description: L'instance app représente habituellement une application Fiber.
---

# 🚀 Application

## New

Cette méthode crée une nouvelle instance **App**.  
Optionnellement, vous pouvez passer [settings](application.md#settings) lors de la création de la nouvelle instance

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
    // Passer "Settings" pour créer une nouvelle instance
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

    // Ou changer les paramètres après avoir créé une instance
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

| Propriété                 | Type                                                 | Description                                                                                                                                                                                                                                                                 | Défaut            |
|:------------------------- |:---------------------------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------- |
| Prefork                   | `bool`                                               | Active l'option [`SO_REUSEPORT`](https://lwn.net/Articles/542629/) au niveau du socket. Plusieurs processus Go seront démarrés et écouteront sur le même port. En apprendre plus sur le [socket sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/). | `false`           |
| ServerHeader              | `string`                                             | Active l'en-tête HTTP `Server` avec la valeur donnée.                                                                                                                                                                                                                       | `""`              |
| StrictRouting             | `bool`                                               | Quand activé, le routeur gère `/foo` et `/foo/` comme étant différent. Sinon, le routeur gèrera `/foo` et `/foo/` comme étant identique.                                                                                                                                    | `false`           |
| CaseSensitive             | `bool`                                               | Quand activé, `/Foo` et `/foo` sont différentes routes. Quand désactivé, `/Foo` et `/foo` sont traités de la même façon.                                                                                                                                                    | `false`           |
| Immutable                 | `bool`                                               | Quand activé, toutes les valeurs retournées par la méthode context sont immuables. Par défaut, elles sont valides jusqu'à ce qu'elles soient retournées par un handler, voir [\#185](https://github.com/gofiber/fiber/issues/185).                                        | `false`           |
| BodyLimit                 | `int`                                                | Indique la taille maximale autorisée du corps d'une requête, si la taille dépasse la limite configurée, il envoie la réponse `413 - Request Entity Too Large`.                                                                                                              | `4 * 1024 * 1024` |
| Concurrency               | `int`                                                | Nombre maximum de connexions en parallèle.                                                                                                                                                                                                                                  | `256 * 1024`      |
| DisableKeepalive          | `bool`                                               | Désactive les connexions keep-alive, le serveur fermera les connexions entrantes après avoir envoyé la première réponse au client                                                                                                                                           | `false`           |
| DisableDefaultDate        | `bool`                                               | Lorsqu'il est défini à true, l'en-tête par défaut date est exclu de la réponse.                                                                                                                                                                                             | `false`           |
| DisableDefaultContentType | `bool`                                               | Lorsqu'il est à true, l'en-tête par défaut Content-Type est exclu de la réponse.                                                                                                                                                                                            | `false`           |
| DisableStartupMessage     | `bool`                                               | Lorsqu'il est à true, le message ASCII fiber et "listening" ne seront pas affichés.                                                                                                                                                                                         | `false`           |
| ETag                      | `bool`                                               | Active ou désactive la génération de l'en-tête ETag, étant donné que les etags forts et faibles utilisent la même méthode de hashage \(CRC-32\). Par défaut, les faibles ETags sont utilisés quand activé.                                                                | `false`           |
| TemplateEngine            | `func(raw string, bind interface{}) (string, error)` | Vous pouvez spécifier une fonction de modèle personnalisée afin de restituer le contenu dans différentes langues de modèle. Voir [**Template Middleware**](middleware.md#template) _\*\*_ pour les préréglages.                                                       | `nil`             |
| TemplateFolder            | `string`                                             | Un répertoire pour les vues de l'application. Si un répertoire est paramétré, celui-ci sera utilisé comme préfixe pour tous les chemins des modèles. `c.Render("home", data) -> ./views/home.pug`                                                                        | `""`              |
| TemplateExtension         | `string`                                             | Si vous paramétrez une extension pour vos modèles, vous n'avez pas besoin d'indiquer le nom complet du fichier dans la fonction Render : `c.Render("home", data) -> home.pug`                                                                                            | `""`              |
| ReadTimeout               | `time.Duration`                                      | Durée maximumale autorisée pour lire entièrement une requête en comptant le corps de celle-ci. Par défaut la durée est illimitée.                                                                                                                                           | `nil`             |
| WriteTimeout              | `time.Duration`                                      | Durée maximale avant que les écritures vers la réponse échouent. Par défaut la durée est illimitée.                                                                                                                                                                         | `nil`             |
| IdleTimeout               | `time.Duration`                                      | Durée maximale d'attente entrer deux requêtes lorsque keep-alive est activé. If IdleTimeout est égale à zéro, la valeur de ReadTimeout est utilisée.                                                                                                                        | `nil`             |

## Static

Utilisez la méthode **Static** pour servir des fichiers statiques comme **des images**, **du CSS** et **du JavaScript**.

{% hint style="info" %}
By default, **Static** will serve `index.html` files in response to a request on a directory.
{% endhint %}

{% code title="Signature" %}
```go
app.Static(prefix, root string, config ...Static) // => avec un préfixe
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
// Servir les fichiers du répertoire "./public" :
app.Static("/", "./public")

// Servir les fichiers du répertoire "./files" :
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

Si vous voulez avoir un peu plus de contrôle à propos des paramètres pour servir des fichiers statiques. Vous pouvez utiliser la structure de `fiber.Static` pour activer certains paramètres.

{% code title="fiber.Static{}" %}
```go
// Static représente les paramètres pour servir des fichiers statiques
type Static struct {
    // Compression transparente des réponses si mis à true
    // Cela fonctionne différemment que le middleware github.com/gofiber/compression
    // Le serveur essaie de minimiser l'utilisateur CPU par mettant en cache les fichiers compressés.
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
// Les méthodes HTTP suppotent :paramètre, :options? et *joker
// Vous devez un chemin à chaque méthode
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

// Use() ne prendra en compte que le début de chaque chemin
// ex : "/john" will match "/john/doe", "/johnnnn"
// Use() ne supporte pas :paramètre & :options? dans le chemin
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

Vous pouvez regrouper les routes en créant une structure `*Group`.

**Signature**

```go
app.Group(prefix string, handlers ...func(*Ctx)) *Group
```

**Exemple**

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

Vous pouvez passer votre propre [`net.Listener`](https://golang.org/pkg/net/#Listener) en utilisant la méthode `Server`.

{% code title="Signature" %}
```go
app.Serve(ln net.Listener, tls ...*tls.Config) error
```
{% endcode %}

{% hint style="warning" %}
**Serve** ne supporte pas la fonctionnalité ****[**Prefork** ](application.md#settings).
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
// Créer une route GET pour un essai :
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

// Faire quelque chose avec le résultat :
if resp.StatusCode == 200 {
  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println(string(body)) // => Hello, World!
}
```
{% endcode %}

