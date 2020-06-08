---
description: >-
  Fiber supporte la gestion des erreurs centralisée en passant un argument d'erreur dans la méthode Next qui vous permet de consigner des erreurs à des services externes ou d'envoyer une réponse HTTP personnalisée au client.
---

# 🐛 Gestion des erreurs

## Erreurs de capture

Il est important de s’assurer que la Fibre détecte toutes les erreurs qui se produisent lors de l’exécution des gestionnaires de routes et des middleware. Vous devez les passer au ctx `.La fonction Next()` , où les fibres les attraperont et les traiteront.

{% tabs %}
{% tab title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
    err := c.SendFile("file-does-not-exist")

    if err != nil {
        c.Next(err) // Passer l'erreur à la Fibre
    }
})
```
{% endtab %}
{% endtabs %}

Fibre ne gère pas les paniques [](https://blog.golang.org/defer-panic-and-recover) par défaut. Pour récupérer d'une panique émise par n'importe quel gestionnaire dans la pile, vous devez inclure le middleware `Recover` comme montré ci-dessous:

{% code title="Example" %}
```go
import du paquet principal

(
    "github.com/gofiber/fiber"
    "github.com/gofiber/fiber/middleware"
)

func main() {
    app := fiber.Application

    New() .Utiliser(middleware.Récupérer ())

    l'application.Get("/", func(c *fiber.Ctx) {
        panique ("Cette panique est attrapée par le ErrorHandler")
    })

    journal.Fatal(app.Écoute(3000))
}

```
{% endcode %}

Parce que `ctx.Next()` accepte une interface `erreur` , vous pouvez utiliser la structure d'erreur personnalisée de Fiber pour passer un `statuscode` supplémentaire en utilisant `fibre.NewError()`. Il est facultatif de passer un message si ce champ est laissé vide, le message par défaut \(`404` équivaut à `Non Trouvé`\).

{% code title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
    err := fibre.NewError(503)
    c.Next(err) // 503 Service Indisponible

    err := fibre.NewError(404, "Désolé, pas trouvé !")
    c.Next(err) // 404 Désolé, pas trouvé!
})
```
{% endcode %}

## Gestionnaire d'erreur par défaut

Fiber fournit un gestionnaire d'erreur par défaut. Pour une erreur standard, la réponse est envoyée en tant que **500 Erreur interne du serveur**. Si l'erreur est de type [fiber\*Error](https://godoc.org/github.com/gofiber/fiber#Error), la réponse est envoyée avec le code de statut et le message fourni.

{% code title="Example" %}
```go
// Ceci est l'application
de gestion des erreurs par défaut.Paramètres.Gestionnaire d'erreurs = func(ctx *Ctx, err error) {
    // Statuscode par défaut à 500
    code := StatusInternalServerError

    // Retire le code d'état personnalisé s'il s'agit d'une fibre. Erreur
    si e, ok := err.(*Erreur); ok {
        code = e.Code
    }

    // Retourne une réponse HTTP
    ctx.Statut(code).SendString(err.Erreur())
}
```
{% endcode %}

## Gestionnaire d'erreurs personnalisé

Le gestionnaire d'erreurs personnalisé peut être défini via l'application `.Paramètres.ErrorHandler`

Dans la plupart des cas, le gestionnaire d'erreur par défaut devrait être suffisant. Cependant, un gestionnaire d'erreurs personnalisé peut vous être utile si vous voulez capturer différents types d'erreurs et prendre des mesures en conséquence. . Envoyez un courriel de notification ou une erreur de log à un système centralisé. Vous pouvez également envoyer une réponse personnalisée au client, par exemple une page d'erreur ou juste une réponse JSON.

L'exemple suivant montre comment afficher les pages d'erreur pour différents types d'erreurs.

{% code title="Example" %}
```go
app := fibre.New()

// Définition d'un gestionnaire d'erreurs personnalisé
application.Paramètres.Gestionnaire d'erreurs = func(ctx *Ctx, err error) {
    // Statuscode par défaut à 500
    code := StatusInternalServerError

    // Retire le code d'état personnalisé s'il s'agit d'une fibre. Erreur
    si e, ok := err.(*Erreur); ok {
        code = e.Code
    }

    // Envoyer une page d'erreur personnalisée
    erreur := ctx.Envoyer un fichier (fmt.Sprintf("./%d.html", code))
    si errr != nil {
        ctx.Statut(500).SendString("Erreur de serveur interne")
    } autre {
        ctx.Statut(code)
    }
}
```
{% endcode %}

> Remerciements spéciaux au framework [Echo](https://echo.labstack.com/) & [Express](https://expressjs.com/) pour l'inspiration concernant la gestion des erreurs.

