- - -
description : >- Liste des questions fréquemment posées. N'hésitez pas à ouvrir un ticket pour ajouter votre question sur cette page.
- - -

# 🤔 FAQ

## Comment structurer ma candidature ?

Il n'y a pas de réponse définitive à cette question. La réponse dépend de l’ampleur de votre candidature et de l’équipe impliquée. Pour être aussi souple que possible, la Fibre ne fait aucune hypothèse en termes de structure.

Les routes et autres logiques spécifiques à une application peuvent vivre dans autant de fichiers que vous le souhaitez, dans n'importe quelle structure de répertoire que vous préférez. Voir les exemples suivants pour l'inspiration :

* [format@@0 gofiber/chaudierplate](https://github.com/gofiber/boilerplate)
* [thomasvvugt/cuilerplate à fibre](https://github.com/thomasvvugt/fiber-boilerplate)
* [Youtube - Construire une API REST en utilisant Gorm et Fiber](https://www.youtube.com/watch?v=Iq2qT0fRhAA)

## Comment gérer les réponses personnalisées de 404 ?

En Fiber, 404 réponses ne sont pas le résultat d'une erreur, donc le gestionnaire d'erreurs ne les capturera pas. Ce comportement est dû au fait qu'une réponse 404 indique simplement l'absence de travail supplémentaire à faire ; en d'autres termes, Fiber n'a trouvé aucune route qui corresponde à la requête.

Tout ce que vous avez à faire est d'ajouter une fonction middleware en bas de la pile \\(sous toutes les autres fonctions\\) pour gérer une réponse 404 :

{% code title="Example" %}
```go
applicationUtiliser(fonction(c *fibre).Ctx) {
    c.Statut(fibre).Statut non trouvé).SendString("Désolé, impossible de trouver ça!")
})
```
{% endcode %}

## Comment configurer un gestionnaire d'erreur ?

Pour remplacer le gestionnaire d'erreur par défaut, fournissez un gestionnaire personnalisé à l'application `.Paramètres.ErrorHandler`

{% code title="Example" %}
```go
applicationParamètres.ErrorHandler = func(c *fiber.Ctx, erreur d'erreur) {
    c.Statut(500).SendString(err.Erreur())
}
```
{% endcode %}

Nous avons une page dédiée expliquant comment la gestion des erreurs fonctionne en Fibre, voir [Gestion des erreurs](error-handling.md).

## Quels sont les moteurs de gabarits supportés par Fiber ?

Fiber supporte actuellement 8 moteurs de gabarits dans notre middleware [gofiber/template](https://github.com/gofiber/template):

* [As](https://github.com/yosssi/ace)
* [Ambre](https://github.com/eknkc/amber)
* [Django](https://github.com/flosch/pongo2)
* [Barre de guidon](https://github.com/aymerick/raymond)
* [HTML](https://golang.org/pkg/html/template/)
* [Jauge](https://github.com/CloudyKit/jet)
* [Moustache](https://github.com/cbroglie/mustache)
* [Carlin](https://github.com/Joker/jade)

Pour en savoir plus sur l'utilisation des Modèles en Fibre, voir [Modèles](templates.md).

## Est-ce que les Fibres ont un chat de communauté?

Oui, nous avons notre propre serveur [Discord ](https://gofiber.io/discord)où nous sortons. Nous disposons de différentes salles pour chaque sujet.  
Si vous avez des questions ou si vous voulez simplement avoir un chat, n'hésitez pas à nous rejoindre via ce **&gt;** [**lien d'invitation**](https://gofiber.io/discord) **&lt;**.

![](.gitbook/assets/2020-06-08-03_06_27-support-discord.png)

