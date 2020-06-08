---
description: >-
  Une documentation API en ligne avec des exemples pour que vous puissiez commencer à construire des applications web avec Fiber dès maintenant!
---

# 📖 Démarrage

**Fiber** est un framework web [Express](https://github.com/expressjs/express) inspiré **web** construit au dessus de [Fasthttp](https://github.com/valyala/fasthttp), le **plus rapide** moteur HTTP pour [Go](https://golang.org/doc/). Conçu pour **faciliter** les choses pour un développement **rapide** avec **l'allocation de mémoire zéro** et **les performances** en tête.

## Installation

Tout d'abord, [téléchargez](https://golang.org/dl/) et installez Go. `1.11` ou supérieur est requis.

L'installation se fait en utilisant la commande [`go get`](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them):

```bash
aller chercher -u github.com/gofiber/fiber
```

## Zéro allocation

{% hint style="warning" %}
Certaines valeurs retournées à partir de [**fiber.Ctx**](ctx.md) ne sont **pas** immuables par défaut
{% endhint %}

Because fiber is optimized for **high performance**, values returned from [**fiber.Ctx**](ctx.md) are **not** immutable by default and **will** be re-used across requests. En tant que règle de pouce, vous **ne devez** utiliser que des valeurs contextuelles dans le gestionnaire, et vous **ne devez pas** garder aucune référence. Dès que vous revenez du gestionnaire, toutes les valeurs que vous avez obtenues du contexte seront réutilisées dans les requêtes futures et changeront sous vos pieds. Voici un exemple :

```go
func handler(c *fiber.Ctx) {
    résultat := c.Param("foo") // le résultat n'est valide que dans cette méthode
}
```

Si vous avez besoin de persister de telles valeurs en dehors du gestionnaire, faites des copies de leur tampon **sous-jacent** en utilisant le [copier](https://golang.org/pkg/builtin/#copy) builtin. Voici un exemple pour persister dans une chaîne de caractères :

```go
func handler(c *fiber.Ctx) {
    résultat := c. aram("foo") // le résultat n'est valide que dans cette méthode
    newBuffer := make([]byte, len(result))
    copy(newBuffer, result)
    newResult := string(newBuffer) // newResult est immuable et valide forever
}
```

Alternativement, vous pouvez également utiliser le paramètre[ **Immutable**](app.md#settings). Il rendra toutes les valeurs retournées depuis le contexte immuable, vous permettant de les maintenir n'importe où. Bien sûr, cela se fait au détriment des performances.

Pour plus d'informations, veuillez consulter ****[**\#426**](https://github.com/gofiber/fiber/issues/426) et ****[**\#185**](https://github.com/gofiber/fiber/issues/185).

## Bonjour, Monde!

Incorporé ci-dessous est essentiellement l'application **Fiber** la plus simple, que vous pouvez créer.

```go
package main

import "github.com/gofiber/fiber"

func main() {
  app := fiber.New()

  . et("/", func(c *fiber.Ctx) {
    c.Send("Bonjour, Monde !")
  })

  app.Listen(3000)
}
```

```text
exécuter server.go
```

Naviguez sur `http://localhost:3000` et vous devriez voir `Bonjour, Monde !` sur la page.

## Routage de base

Le routage désigne la façon dont une application répond à une demande de client à un point de terminaison particulier, qui est une URI \\(ou un chemin\\) et une méthode spécifique de requête HTTP \\(GET, PUT, POST et ainsi de suite\\).

{% hint style="info" %}
Chaque route peut avoir **plusieurs fonctions de gestion**, qui sont exécutées lorsque la route est correspondante.
{% endhint %}

La définition de la route prend les structures suivantes :

```go
// Signature de la fonction
app.Method(path string, ...func(*fiber.Ctx))
```

* `app` est une instance de **Fiber**.
* `La méthode` est une [méthode de requête HTTP](https://fiber.wiki/application#methods), en capitalisation : `Obtenir`, `Mettre`, `Post`, etc.
* `path` est un chemin virtuel sur le serveur.
* `fonction(*fiber.Ctx)` est une fonction de callback contenant le [Contexte](https://fiber.wiki/context) exécuté lorsque la route est correspondante.

**Route simple**

```go
// Répondre avec "Bonjour, Monde!" sur le chemin de la racine, "/"
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Bonjour, Monde !")
})
```

**Paramètres**

```go
// GET http://localhost:8080/bonjour%20monde

app.Get("/:value", func(c *fiber.Ctx) {
  c. end("Obtenir la requête avec la valeur: " + c.Params("value"))
  // => Obtenir la requête avec la valeur: bonjour le monde
})
```

**Paramètre optionnel**

```go
// GET http://localhost:3000/john

app.Get("/:name?", func(c *fiber.Ctx) {
  if c.Params("name") != "" {
    c. end("Bonjour " + c. arams("name"))
    // => Bonjour john
  } else {
    c. end("Où est john?")
  }
})
```

**Cartes jokers**

```go
// GET http://localhost:3000/api/user/john

app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("API path: " + c.Params("*"))
  // => API path: user/john
})
```

## Fichiers statiques

Pour servir les fichiers statiques tels que les **images**, **CSS** et **JavaScript** fichiers, remplacez votre gestionnaire de fonction par une chaîne de fichiers ou de répertoires.

Signature de la fonction :

```go
app.Static(préfixe, chaîne racine)
```

Utilisez le code suivant pour servir les fichiers dans un répertoire nommé `./public`:

```go
app := fiber.New()

app.Static("/", "./public") 

app.Listen(8080)
```

Maintenant, vous pouvez charger les fichiers qui se trouvent dans le répertoire `./public`:

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```

