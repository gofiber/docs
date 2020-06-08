---
description: L'instance d'application indique conventionnellement l'application Fiber.
---

# 🚀 Application

## Nouveau

Cette méthode crée une nouvelle **application** nommée instance. Vous pouvez passer les paramètres facultatifs [ ](app.md#settings)lors de la création d'une nouvelle instance

{% code title="Signature" %}
```go
fibres.Nouveau(paramètres...*Paramètres) *Application
```
{% endcode %}

{% code title="Example" %}
```go
package main

import "github.com/gofiber/fiber"

func main() {
    app := fiber.New()

    // ...

    applicationÉcoute(3000)
}
```
{% endcode %}

## Réglages

Vous pouvez passer les paramètres de l'application en appelant `Nouveau`.

{% code title="Example" %}
```go
func main() {
    // Passer les paramètres en créant une nouvelle instance
    app := fiber.Nouveau(&fibres.Paramètres{
        Prefork: true,
        CaseSensitive: true,
        StrictRouting: true,
        ServerHeader: "Fiber",
    })

    // ...

    applicationÉcoute(3000)
}
```
{% endcode %}

Ou modifiez les paramètres après l'initialisation d'une application ``.

{% code title="Example" %}
```go
func main() {
    app := fibre.New()

    // Ou changer les paramètres après la création d'une application
    instance.Paramètres.Prefork = true
    app.Paramètres.Sensible à la casse = application
    vraie.Paramètres.StrictRouting = vrai
    application.Paramètres.ServerHeader = "Fiber"

    // ...

    applicationÉcoute(3000)
}
```
{% endcode %}

**Paramètres** **champs**

| Propriété                                | Type de texte          | Libellé                                                                                                                                                                                                                                                                               | Par défaut        |
|:---------------------------------------- |:---------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:----------------- |
| Prefork                                  | `booléen`              | Active l'utilisation de l'option[`SO_REUSEPORT`](https://lwn.net/Articles/542629/)du socket. Cela fera apparaître plusieurs processus Go en écoutant sur le même port. en savoir plus sur [le ramassage des prises](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/). | `Faux`            |
| En-tête du serveur                       | `chaîne de caractères` | Active l'en-tête HTTP `Server` avec la valeur donnée.                                                                                                                                                                                                                                 | `""`              |
| Routage strict                           | `booléen`              | Lorsque cette option est activée, le routeur traite `/foo` et `/foo/` comme différent. Sinon, le routeur traite `/foo` et `/foo/` comme le même.                                                                                                                                      | `Faux`            |
| Sensible à la casse                      | `booléen`              | Lorsque cette option est activée, `/Foo` et `/foo` sont des routes différentes. Lorsque désactivé, `/Foo`et `/foo` sont traités de la même façon.                                                                                                                                     | `Faux`            |
| Immuable                                 | `booléen`              | Lorsque cette option est activée, toutes les valeurs retournées par les méthodes contextuelles sont immuables. Par défaut, ils sont valides jusqu'à ce que vous reveniez du gestionnaire, voir le problème [\#185](https://github.com/gofiber/fiber/issues/185).                    | `Faux`            |
| Limite de corps                          | `Indice`               | Définit la taille maximale autorisée pour un corps de requête, si la taille dépasse la limite configurée, it sends `413 - Request Entity Too Large` réponse.                                                                                                                          | `4 * 1024 * 1024` |
| CompressedFileSuffix                     | `chaîne de caractères` | Ajoute le suffixe au nom du fichier original et essaie de sauvegarder le fichier compressé résultant sous le nouveau nom de fichier.                                                                                                                                                  | `".fiber.gz"`     |
| Conmonnaie                               | `Indice`               | Nombre maximum de connexions simultanées.                                                                                                                                                                                                                                             | `256 * 1024`      |
| Désactiver Keepalive                     | `booléen`              | Désactiver les connexions en maintenance, le serveur fermera les connexions entrantes après avoir envoyé la première réponse au client                                                                                                                                                | `Faux`            |
| Désactiver la date par défaut            | `booléen`              | Lorsqu'il est défini à true provoque l'exclusion de l'en-tête de date par défaut de la réponse.                                                                                                                                                                                       | `Faux`            |
| Désactiver le type de contenu par défaut | `booléen`              | Lorsqu'il est défini à true, provoque l'exclusion de l'en-tête par défaut de Content-Type de la réponse.                                                                                                                                                                              | `Faux`            |
| Désactiver le message de démarrage       | `booléen`              | Lorsqu'il est défini à true, il n'affichera pas la fibre ASCII et "écouter" sur le message                                                                                                                                                                                            | `Faux`            |
| Désactiver la normalisation des en-têtes | `booléen`              | Par défaut, tous les noms d'en-tête sont normalisés : conteNT-tYPE -&gt; Content-Type                                                                                                                                                                                           | `Faux`            |
| ETag                                     | `booléen`              | Activer ou désactiver la génération d'en-tête ETag, car les Etags faibles et forts sont générés en utilisant la même méthode de hachage \(CRC-32\\). Les ETags faibles sont la valeur par défaut lorsqu’ils sont activés.                                                          | `Faux`            |
| Modèles                                  | `Modèles`              | Les gabarits sont l'interface qui entoure la fonction Render. Consultez notre [**Modèle Middleware**](middleware.md#template) pour les moteurs pris en charge.                                                                                                                        | `Ni`              |
| Délai de lecture                         | `horaire.Durée`        | Le temps alloué pour lire la demande complète, y compris le corps. Le délai d'attente par défaut est illimité.                                                                                                                                                                        | `Ni`              |
| Délai d'écriture dépassé                 | `horaire.Durée`        | La durée maximale avant que le chronométrage n'écrive la réponse. Le délai d'attente par défaut est illimité.                                                                                                                                                                         | `Ni`              |
| Délai d'inactivité dépassé               | `horaire.Durée`        | Le temps maximum d'attente pour la prochaine requête lorsque keep-alive est activé. Si IdleTimeout est zéro, la valeur de ReadTimeout est utilisée.                                                                                                                                   | `Ni`              |

## Statique

Utilisez la méthode **Static** pour servir des fichiers statiques tels que **images**, **CSS** et **JavaScript**.

{% hint style="info" %}
Par défaut, **Static** servira les fichiers `index.html` en réponse à une requête dans un répertoire.
{% endhint %}

{% code title="Signature" %}
```go
applicationStatic(préfixe, chaîne racine, config ...Static) // => avec préfixe
```
{% endcode %}

Utilisez le code suivant pour servir des fichiers dans un répertoire nommé `./public`

{% code title="Example" %}
```go
applicationStatic("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```
{% endcode %}

Pour servir à partir de plusieurs répertoires, vous pouvez utiliser **Static** plusieurs fois.

{% code title="Example" %}
```go
// Servir des fichiers depuis le répertoire "./public":
app.Static("/", "./public")

// Servir des fichiers depuis le répertoire "./files" :
app.Statistique ("/", "./fichiers")
```
{% endcode %}

{% hint style="info" %}
Utilisez un cache proxy inversé comme [**NGINX**](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/) pour améliorer les performances des actifs statiques.
{% endhint %}

Vous pouvez utiliser n'importe quel préfixe de chemin virtuel \(_où le chemin n'existe pas dans le système de fichiers_\) pour les fichiers qui sont servis par la méthode **Static** , spécifiez un chemin de préfixe pour le répertoire statique, comme indiqué ci-dessous:

{% code title="Example" %}
```go
applicationStatic("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```
{% endcode %}

Si vous voulez avoir un peu plus de contrôle en ce qui concerne les paramètres de gestion des fichiers statiques. Vous pouvez utiliser la fibre `.Structure statique` pour activer des paramètres spécifiques.

{% code title="fibre.Statistique{}" %}
```go
// Static représente les paramètres pour servir les fichiers statiques
type Static struct {
    // compresse de manière transparente les réponses si la valeur est true
    // Cela fonctionne différemment que le github. om/gofiber/compression middleware
    // Le serveur essaie de minimiser l'utilisation du processeur en mettant en cache les fichiers compressés.
    // Il ajoute le suffixe ".fiber.gz" au nom du fichier original.
    // Optionnel. Valeur par défaut false
    Compress bool
    // Active les requêtes d'intervalle d'octets si défini à true.
    // Optionnel. Valeur par défaut false
    ByteRange bool
    // Active la navigation des répertoires.
    // Optionnel. Valeur par défaut faux.
    Parcourir bool
    // Fichier d'index pour servir un répertoire.
    // Optionnel. Valeur par défaut "index.html".
    Chaîne d'index
}
```
{% endcode %}

{% code title="Example" %}
```go
applicationStatic("/", "./public", fibre.Static{
  Compress: true,
  ByteRange: true,
  Browse: true,
  Index: "john.html"
})
```
{% endcode %}

## Méthodes HTTP

Route une requête HTTP, où **METHOD** est la méthode [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) de la requête.

{% code title="Signatures" %}
```go
// Ajouter vous permet de spécifier une méthode en tant que valeur de l'application
.Add(method, path string, handlers ...func(*Ctx)) *Route

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
app.Options(chaîne de chemin, gestionnaires... unc(*Ctx)) *Route

// L'utilisation est principalement utilisée pour les modules middleware
// Ces routes ne correspondent qu'à la mise à jour de chaque chemin
// i. . "/john" correspondra à l'app "/john/doe", "/johnnnn"
.Utiliser(gestionnaires...func(*Ctx)) *Router l'application
.Use(prefix string, handlers ...func(*Ctx)) *Route
```
{% endcode %}

{% code title="Example" %}
```go
applicationUtilisation("/api", func(c *fibre.Ctx) {
  c.Ensemble ("X-Custom-Header", aléatoire.String(32))
  c.Next()
}) application
.Get("/api/list", func(c *fiber.Ctx) {
  c.Envoyer("Je suis une demande GET !")
})
app.Post("/api/register", func(c *fibre.Ctx) {
  c.Envoyer("Je suis une requête POST !")
})
```
{% endcode %}

## Groupes

Vous pouvez regrouper les routes en créant un struct `*Grouper`.

**Signature**

```go
applicationGroup(prefix string, handlers ...func(*Ctx)) *Groupe
```

**Exemple**

```go
func main() {
  app := fibre.New()

  api := application.Groupe("/api", handler) // /api

  v1 := api.Groupe ("/v1", handler) // /api/v1
  v1.Get("/list", handler)          // /api/v1/list
  v1.Get("/user", handler) // /api/v1/user

  v2 := api.Groupe ("/v2", handler) // /api/v2
  v2.Get("/list", handler)          // /api/v2/list
  v2.Get("/user", handler) // /api/v2/user

  app.Écoute(3000)
}
```

## Écouter

Lie et écoute les connexions sur l'adresse spécifiée. Cela peut être un `int` pour le port ou une chaîne `` pour l'adresse.

{% code title="Signature" %}
```go
applicationEcoutez(interface{}, tls ...*tls.Erreur de configuration
```
{% endcode %}

{% code title="Examples" %}
```go
applicationÉcoute(8080)
application.Listen("8080")
application.Listen(":8080")
application.Listen("127.0.0.1:80")
```
{% endcode %}

Pour activer **TLS/HTTPS** vous pouvez ajouter une configuration [**TLS**](https://golang.org/pkg/crypto/tls/#Config).

{% code title="Example" %}
```go
cer, erreur := tls.LoadX509KeyPair("server.crt", "server.key")
if err != nil {
    log.Fatal(err)
}
config := &tls.Config{Certificates: []tls.Certificat{cer}} application

.Listen(443, config)
```
{% endcode %}

## Servir

Vous pouvez passer votre propre réseau [`.Écouteur`](https://golang.org/pkg/net/#Listener) en utilisant la méthode `Serve`.

{% code title="Signature" %}
```go
applicationServe(ln net.Ecoutez, tls ...*tls.Erreur de configuration
```
{% endcode %}

{% hint style="warning" %}
**Serve** ne supporte pas la fonctionnalité [**Prefork**](app.md#settings).
{% endhint %}

{% code title="Example" %}
```go
if ln, errr = net.Listen("tcp4", ":8080"); errr != nil {
    log.Application Fatal(err)
}

.Serve(ln)
```
{% endcode %}

## Tester

Tester votre application est fait avec la méthode **Tester**. Utilisez cette méthode pour créer des fichiers `_test.go` ou quand vous devez déboguer votre logique de routage. Le timeout par défaut est `200ms` si vous voulez désactiver un timeout complètement, passez `-1` comme second argument.

{% code title="Signature" %}
```go
applicationTest(req *http.Demande, msTimeout ...int) (*http.Réponse, erreur)
```
{% endcode %}

{% code title="Example" %}
```go
// Créer une route avec la méthode GET pour le test:
application.Get("/", func(c *Ctx) {
  fmt.Println(c.BaseURL())              // => http://google.com
  fmt.Println(c.Get("X-Custom-Header")) // => hi

  c.Envoyer("Bonjour, Monde !")
})

// http.Requête
req := httptest.NewRequest("GET", "http://google.com", nil)
req.En-tête.Set("X-Custom-Header", "hi")

// http.Réponse
resp, _ := app.Test(req)

// Faire quelque chose avec les résultats :
si resp.StatusCode == 200 {
  corps, _ := ioutil.Tout lire(resp.Body)
  fmt.Println(string(body)) // => Bonjour, Monde!
}
```
{% endcode %}

