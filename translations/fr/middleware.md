---
description: >-
  Middleware est une fonction enchaînée dans le cycle de requête HTTP avec accès au contexte qu'il utilise pour effectuer une action spécifique, par exemple, enregistrer chaque requête ou activer CORS.
---

# 🧬 Middleware

## Fibre Middleware

 Les modules de middleware Fiber listés ici sont maintenus par l'équipe [Fiber](https://github.com/orgs/gofiber/people).

| Middleware                                                                                                            | Libellé                                                                                                                                                                                                                   | middleware intégré          |
|:--------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:--------------------------- |
| [**adaptateur**](https://github.com/gofiber/adaptor)                                                                  | Converter for net/http handlers to/from Fiber request handlers, special thanks to @arsmn!                                                                                                                                 | -                           |
| [**basique**](https://github.com/gofiber/basicauth)                                                                   | Le middleware d'authentification de base fournit une authentification de base HTTP. Il appelle le prochain gestionnaire pour les identifiants valides et 401 Non autorisé pour les identifiants manquants ou non valides. | -                           |
| [**compression**](https://github.com/Fenny/fiber/blob/master/middleware/compress.md)                                  | Compression middleware pour Fiber, il supporte par défaut `deflate`, `gzip` et `brotli`.                                                                                                                                  | `middleware.Compress()`     |
| [**cors**](https://github.com/gofiber/cors)                                                                           | Activer le partage de ressources inter-origines \(CORS\) avec diverses options.                                                                                                                                         | -                           |
| [**csrf**](https://github.com/gofiber/csrf)                                                                           | Protéger contre les exploits CSRF.                                                                                                                                                                                        | -                           |
| [**intégrer**](https://github.com/gofiber/embed)                                                                      | middleware FileServer pour Fiber, remerciements spéciaux et crédits à Alireza Salary                                                                                                                                      | -                           |
| \*\*\*\*[**favicon**](https://github.com/gofiber/fiber/blob/master/middleware/favicon.md)\*\*\*\*     | Ignorer favicon des logs ou servir de la mémoire si un chemin de fichier est fourni.                                                                                                                                      | `middleware.Favicon()`      |
| \*\*\*\*[**helmet**](https://github.com/gofiber/helmet)\*\*\*\*                                       | Permet de sécuriser vos applications en définissant divers en-têtes HTTP.                                                                                                                                                 | -                           |
| [**jwt**](https://github.com/gofiber/jwt)                                                                             | JWT retourne un jeton Web JSON \\(JWT\\) d'authentification du middleware.                                                                                                                                            | -                           |
| [**keyauth**](https://github.com/gofiber/keyauth)                                                                     | Le middleware d'authentification par clé fournit une authentification basée sur une clé.                                                                                                                                  | -                           |
| [**limiter**](https://github.com/gofiber/limiter)                                                                     | Limitation de la fréquence du middleware pour les fibres. Utiliser pour limiter les requêtes répétées aux API publiques et/ou aux points de terminaison tels que la réinitialisation du mot de passe.                     | -                           |
| \*\*\*\*[**logger**](https://github.com/gofiber/fiber/blob/master/middleware/logger.md)\*\*\*\*       | Enregistreur de requêtes/réponses HTTP.                                                                                                                                                                                   | `middleware.Logger()`       |
| [**pprof**](https://github.com/gofiber/pprof)                                                                         | Remerciements spéciaux à Matthew Lee \\(@mthli\\)                                                                                                                                                                     | -                           |
| \*\*\*\*[**récupère**](https://github.com/gofiber/fiber/blob/master/middleware/recover_id.md)\*\*\*\* | Récupérer les récupérations de middleware depuis les paniques n'importe où dans la chaîne de pile et gère le contrôle vers le[ ErrorHandler centralisé](error-handling.md).                                               | `middleware.Récupération()` |
| [**réécrire**](https://github.com/gofiber/rewrite)                                                                    | Réécrire le middleware réécrit le chemin de l'URL en se basant sur les règles fournies. Il peut être utile pour une compatibilité ascendante ou simplement pour créer des liens plus propres et plus descriptifs.         | -                           |
| \*\*\*\*[**a demandé**](https://github.com/Fenny/fiber/blob/master/middleware/request_id.md)\*\*\*\*  | Le middleware de la requête ID génère un id unique pour une requête.                                                                                                                                                      | `middleware.RequestID()`    |
| [**session**](https://github.com/gofiber/session)                                                                     | This session middleware is build on top of fasthttp/session by @savsgio MIT. Remerciements spéciaux à @thomasvvugt pour avoir aidé avec ce middleware.                                                                    | -                           |
| [**gabarit**](https://github.com/gofiber/template)                                                                    | Ce paquet contient 8 moteurs de gabarits qui peuvent être utilisés avec Fiber `v1.10.x` La version 1.13 ou supérieure est requise.                                                                                        | -                           |
| [**Websocket**](https://github.com/gofiber/websocket)                                                                 | Basé sur Fasthttp WebSocket pour Fiber avec le support local !                                                                                                                                                            | -                           |

## Tierce-partie Middleware

Ce sont quelques modules de middleware populaires supplémentaires créés par la communauté. Veuillez ouvrir un [problème ](https://github.com/gofiber/fiber/issues)si vous voulez voir le vôtre.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Middleware</th>
      <th style="text-align:left">Libellé</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><a href="https://github.com/arsmn/fiber-swagger"><b>tondeuse de fibres</b></a>
      </td>
      <td style="text-align:left">Générer automatiquement la documentation de l'API RESTful avec Swagger 2.0.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://github.com/arsmn/fiber-casbin"><b>fiber-casbin</b></a>
      </td>
      <td style="text-align:left">Casbin middleware pour Fiber</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://github.com/arsmn/fiber-introspect"><b>fibre-introspecte</b></a>
      </td>
      <td style="text-align:left">
        <p>Introspection middleware pour Fiber</p>
        <p>Fournit la vérification d'un jeton d'accès avec un point de terminaison d'introduction à distance
          (RFC7662)</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://github.com/shareed2k/fiber_tracing"><b>trace_fibre</b></a>
      </td>
      <td style="text-align:left">Middleware qui trace les requêtes sur <a href="https://gofiber.io/">Fiber framework</a> avec
        API OpenTracing. Vous pouvez utiliser chaque tracer qui implémente l'interface OpenTracing</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://github.com/shareed2k/fiber_limiter"><b>fiber_limiter</b></a>
      </td>
      <td style="text-align:left">fiber_limiteur en utilisant <a href="https://github.com/go-redis/redis">redis</a> en tant que
        stockage pour limite de taux avec deux algorithmes pour choisir une fenêtre coulissante, gcra
        <a
        href="https://en.wikipedia.org/wiki/Leaky_bucket">bucket fuite</a>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://github.com/thomasvvugt/fiber-boilerplate"><b>cuirasse en fibre de verre</b></a>
      </td>
      <td style="text-align:left">Une chaudière pour le framework web Fiber</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://github.com/arsmn/gqlgen"><b>Gqlgen</b></a>
      </td>
      <td style="text-align:left">Une bibliothèque Go pour construire des serveurs GraphQL sans aucun problème avec le support de Fasthttp
</td>
    </tr>
  </tbody>
</table>

## Lignes directrices

{% hint style="warning" %}
**Documentation inachevée**
{% endhint %}

