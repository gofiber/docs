---
description: >-
  La structure Ctx représente le contexte qui contient la requête HTTP et la réponse. Il a des méthodes pour la requête de la chaîne de requête, des paramètres, du corps, des en-têtes HTTP, etc.
---

# 🧠 Contexte

## Accepte

Vérifications, si les **extensions** ou **contenu** **types** sont acceptables.

{% hint style="info" %}
Basé sur l'en-tête HTTP [Accepter](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) de la requête.
{% endhint %}

{% code title="Signature" %}
```go
c.Accepts(types ...chaîne) chaîne de caractères
c.AcceptsCharsets(charsets ...string) chaîne
c.AcceptsEncodings(encodages ...chaîne) chaîne
c.AcceptsLanguages(langs ...chaîne) chaîne de caractères
```
{% endcode %}

{% code title="Example" %}
```go
// Accept: text/*, application/json

app.Get("/", func(c *fiber.Ctx) {
  c.Accepts("html") // "html"
  c.Accepts("text/html") // "text/html"
  c.Acceptes("json", "text") // "json"
  c.Accepts("application/json") // "application/json"
  c.Accepts("image/png")        // ""
  c.Acceptes("png") // ""
})
```
{% endcode %}

Fiber fournit des fonctions similaires pour les autres en-têtes acceptés.

```go
// Accept-Charset: utf-8, iso-8859-1;q=0.2
// Accept-Encoding: gzip, compress;q=0.2
// Accept-Language: en;q=0.8, nl, ru

app.Get("/", func(c *fiber.Ctx) {
  c.AcceptsCharsets("utf-16", "iso-8859-1") 
  // "iso-8859-1"

  c.AcceptsEncodings("compres", "br") 
  // "compres"

  c.AcceptsLanguages("pt", "nl", "ru") 
  // "nl"
})
```

## Ajouter

Ajoute la valeur **spécifiée** au champ d'en-tête de réponse HTTP.

{% hint style="warning" %}
Si l'en-tête n'est pas **** déjà défini, il crée l'en-tête avec la valeur spécifiée.
{% endhint %}

{% code title="Signature" %}
```go
c.Ajouter(champ, valeurs ...chaîne)
```
{% endcode %}

{% code title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
  c.Annexe ("Lien", "http://google.com", "http://localhost")
  // => Lien: http://localhost, http://google.com

  c.Annexe ("Lien", "Test")
  // => Lien: http://localhost, http://google.com, Test
})
```
{% endcode %}

## Pièce jointe

Définit le champ d'en-tête de la réponse HTTP [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) à `pièce jointe`.

{% code title="Signature" %}
```go
c.Pièce jointe (fichier ...chaîne)
```
{% endcode %}

{% code title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
  c.Attachment()
  // => Content-Disposition: attachment

  c.Pièce jointe ("./upload/images/logo.png")
  // => Content-Disposition: attachment; filename="logo.png"
  // => Content-Type: image/png
})
```
{% endcode %}

## Application

Renvoie la référence [\*App](app.md#new) pour que vous puissiez facilement accéder à tous les paramètres de l'application.

{% code title="Signature" %}
```go
c.App() *App
```
{% endcode %}

{% code title="Example" %}
```go
applicationGet("/bodylimit", func(c *fibre.Ctx) {
  bodylimit := c.Application().Paramètres.BodyLimit
  c.Envoyer(limite du corps)
})
```
{% endcode %}

## BaseURL

Retourne l'URL de base \(**protocole** + **hôte**\) sous la forme d'une chaîne ``.

{% code title="Signature" %}
```go
c.Chaîne BaseURL()
```
{% endcode %}

{% code title="Example" %}
```go
// GET https://example.com/page#chapter-1 app

.Get("/", func(c *fiber.Ctx) {
  c.BaseURL() // https://example.com
})
```
{% endcode %}

## Corps

Contient le **corps brut** soumis dans une requête **POST**.

{% code title="Signature" %}
```go
c.Chaine de caractères Body()
```
{% endcode %}

{% code title="Example" %}
```go
// curl -X POST http://localhost:8080 -d user=john application

.Post("/", func(c *fibre).Ctx) {
  // Récupère le corps brut de la requête POST:
  c.Body() // user=john
})
```
{% endcode %}

> _La valeur retournée n'est valide que dans le gestionnaire. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](app.md#settings) _setting instead._ [_Read more..._](./#zero-allocation)

## Analyseur de corps

Associe le corps de la requête à un struct. `BodyParser` supporte le décodage des paramètres de requête et les types de contenu suivants basés sur l'en-tête `Content-Type`:

* `application/json`
* `application/xml`
* `application/x-www-form-urlencoded`
* `multi-pièces/données de forme`

{% code title="Signature" %}
```go
c.Erreur BodyParser(interface de sortie{})
```
{% endcode %}

{% code title="Example" %}
```go
// Les noms de champs doivent commencer par une lettre majuscule
type Person struct {
    Nommer la chaîne `json:"name" xml:"name" form:"name" query:"name"`
    Passer la chaîne `json:"pass" form:"pass" form:"pass" query:"pass"
}

application.Post("/", func(c *fibre).Ctx) {
        p := new(Personne)

        if err := c.BodyParser(p); err != nil {
            log.Journal Fatal(err)
        }

.Imprimer(p.Nom) // john
        log.Imprimer(p.Pass) // doe
})
// Exécute les tests avec les commandes curl suivantes

// curl -X POST -H "Content-Type: application/json" --data "{\"name\":\"john\", "pass\":\"doe\"}" localhost:3000

// curl -X POST -H "Content-Type: application/xml" --data "<login><name>john</name><pass>doe</pass></login>" localhost:3000

// curl -X POST -H "Content-Type: application/x-www-form-urlencoded" --data "name=john&pass=doe" localhost:3000

// curl -X POST -F name=john -F pass=doe http://localhost:3000

// curl -X POST "http://localhost:3000/? ame=john&pass=faire"
```
{% endcode %}

## Nettoyer les cookies

Expire un cookie client \(_ou tous les cookies si laissé vide\)_

{% code title="Signature" %}
```go
c.ClearCookie(clé ...chaîne)
```
{% endcode %}

{% code title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
  // Efface tous les cookies:
  c.ClearCookie()

  // Expire un cookie spécifique par nom:
  c.ClearCookie("user")

  // Expire plusieurs cookies par noms:
  c.ClearCookie("jeton", "session", "track_id", "version")
})
```
{% endcode %}

## Contexte

Renvoie le contexte.Contexte qui contient un délai, un signal d'annulation et d'autres valeurs au-delà des limites de l'API.

**Signature**

```go
c.Context() contexte.Contexte
```

## Cookie

Définir le cookie

**Signature**

```text
c.Cookie(*Cookie)
```

```go
type Cookie struct {
    Name string
    Value string
    Path string
    Domain string
    Expires time.Temps
    bool sécurisé
    HTTPOnly bool
    SameSite string // lax, strict, none
}
```

{% code title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
  // Créer un cookie
  cookie := new(fibre.Cookie)
  cookie.Name = "john"
  cookie.Valeur = "faire"
  cookie.Expire = heure.Maintenant().Ajouter(24 * fois.Heure)

  // Définit le cookie
  c.Cookie(cookie)
})
```
{% endcode %}

## Cookies

Récupère la valeur du cookie par clé.

**Signatures**

```go
c.Chaîne de caractères Cookies(keystring)
```

{% code title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
  // Récupère les cookies par clé:
  c.Cookies("name") // "john"
})
```
{% endcode %}

> _La valeur retournée n'est valide que dans le gestionnaire. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](app.md#settings) _setting instead._ [_Read more..._](./#zero-allocation)

## Télécharger

Transfère le fichier depuis le chemin en tant que `pièce jointe`.

Généralement, les navigateurs demanderont à l'utilisateur de se télécharger. Par défaut, le [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) en-tête `filename=` paramètre est le chemin du fichier \(_ceci apparaît typiquement dans la boîte de dialogue du navigateur_\\).

Remplacer cette valeur par défaut par le paramètre **filename**.

{% code title="Signature" %}
```go
c.Erreur de téléchargement (path, filename ...string)
```
{% endcode %}

{% code title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
  if err := c.Download("./files/report-12345.pdf"); err != nil {
    c.Next(err) // Passez l'erreur à la fibre
  }
  // => Télécharger le rapport-12345.pdf

  si l'erreur := c.Download("./files/report-12345.pdf", "report.pdf"); err != nil {
    c.Next(err) // Passez l'erreur à la fibre
  }
  // => Télécharger le rapport.pdf
})
```
{% endcode %}

## Fasthttp

Vous pouvez encore **accéder à** et utiliser toutes les méthodes et propriétés **Fasthttp**.

**Signature**

{% hint style="info" %}
Veuillez lire la [Documentation Fasthttp](https://pkg.go.dev/github.com/valyala/fasthttp?tab=doc) pour plus d'informations.
{% endhint %}

**Exemple**

```go
applicationGet("/", func(c *fiber.Ctx) {
  c.Fasthttp.Demander.En-tête.Method()
  // => []byte("GET")

  c.Fasthttp.Réponse.Écriture([]byte("Bonjour, Monde!"))
  // => "Bonjour, Monde!"
})
```

## Erreur

Ceci contient les informations d'erreur qui ont été lancées par une panique ou passées via la méthode [`Next(err)`](https://github.com/gofiber/docs/tree/8d965e1e05fb67f965934586c78335ef29f52128/context/README.md#error).

{% code title="Signature" %}
```go
c.Erreur() erreur
```
{% endcode %}

{% code title="Example" %}
```go
func main() {
  app := fibre.Application
  New() .Post("/api/register", func (c *fibre.Ctx) {
    if err := c.JSON(&User); err != nil {
      c.Suivant(err)
    }
  })
  application.Get("/api/user", func (c *fibre.Ctx) {
    if err := c.JSON(&User); err != nil {
      c.Suivant(err)
    }
  })
  application.Put("/api/update", func (c *fibre.Ctx) {
    if err := c.JSON(&User); err != nil {
      c.Suivant(err)
    }
  })
  application.Utilisation("/api", func(c *fibre.Ctx) {
    c.Ensemble ("Content-Type", "application/json")
    c.Statut(500).Envoyer(c.Erreur())
  })
  application.Écoute(1337)
}
```
{% endcode %}

## Formater

Effectue la négociation de contenu sur l'en-tête HTTP [Accepter](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept). Il utilise [Accepte](ctx.md#accepts) pour sélectionner un format approprié.

{% hint style="info" %}
Si l'en-tête est **non** spécifié ou s'il n'y a **pas** de format correct, **text/plain** est utilisé.
{% endhint %}

{% code title="Signature" %}
```go
c.Format(corps de l'interface{})
```
{% endcode %}

{% code title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
  // Accept: text/plain
  c.Format("Bonjour, Monde !")
  // => Bonjour, Monde!

  // Accept: text/html
  c.Format("Bonjour, Monde !")
  // => <p>Bonjour, Monde!</p>

  // Accepte: application/json
  c.Format("Bonjour, Monde !")
  // => "Bonjour, Monde!"
})
```
{% endcode %}

## Fichier de formulaire

Les fichiers MultipartForm peuvent être récupérés par nom, le fichier **premier** de la clé donnée est retourné.

{% code title="Signature" %}
```go
c.FormFile(chaîne de nom) (*multipart).En-tête du fichier, erreur)
```
{% endcode %}

{% code title="Example" %}
```go
applicationPost("/", func(c *fibre).Ctx) {
  // Récupère le premier fichier du champ de formulaire "document":
  fichier, erreur := c.FormFile("document")

  // Vérifier les erreurs:
  if err == nil {
    // Enregistrer le fichier dans le répertoire racine:
    c.Enregistrer le fichier (fichier, fmt.Sprintf("./%s", file.Nom du fichier))
  }
})
```
{% endcode %}

## Valeur du formulaire

N'importe quelle valeur de formulaire peut être récupérée par nom, la valeur **première** de la clé donnée est retournée.

{% code title="Signature" %}
```go
c.Chaîne FormValue(chaîne de nom)
```
{% endcode %}

{% code title="Example" %}
```go
applicationPost("/", func(c *fibre).Ctx) {
  // Récupère la première valeur du champ de formulaire "name":
  c.FormValue("name")
  // => "john" ou "" s'il n'existe pas
})
```
{% endcode %}

> _La valeur retournée n'est valide que dans le gestionnaire. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](app.md#settings) _setting instead._ [_Read more..._](./#zero-allocation)

## Fraîche

[https://expressjs.com/fr/4x/api.html\#req.fresh](https://expressjs.com/en/4x/api.html#req.fresh)

{% hint style="info" %}
Pas encore mis en œuvre, les pull requests sont les bienvenus!
{% endhint %}

## Obtenir

Retourne l'en-tête de requête HTTP spécifié par champ.

{% hint style="success" %}
La correspondance est **insensible à la casse**.
{% endhint %}

{% code title="Signature" %}
```go
c.Chaîne Get(field string)
```
{% endcode %}

{% code title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
  c.Get("Content-Type") // "text/plain"
  c.Get("CoNtEnT-TypE") // "text/plain"
  c.Get("quelque chose") // ""
})
```
{% endcode %}

> _La valeur retournée n'est valide que dans le gestionnaire. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](app.md#settings) _setting instead._ [_Read more..._](./#zero-allocation)

## Hostname

Contient le nom d'hôte dérivé de l'en-tête HTTP [Hôte](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host).

{% code title="Signature" %}
```go
c.Hostname() string
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://google.com/search application

.Get("/", func(c *fiber.Ctx) {
  c.Hostname() // "google.com"
})
```
{% endcode %}

> _La valeur retournée n'est valide que dans le gestionnaire. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](app.md#settings) _setting instead._ [_Read more..._](./#zero-allocation)

## IP

Retourne l'adresse IP distante de la requête.

{% code title="Signature" %}
```go
Chaîne c.IP()
```
{% endcode %}

{% code title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
  c.IP() // "127.0.0.1"
})
```
{% endcode %}

## IPs

Retourne un tableau d'adresses IP spécifiées dans l'en-tête de la requête [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For).

{% code title="Signature" %}
```go
c.IPs() []chaîne
```
{% endcode %}

{% code title="Example" %}
```go
// X-Forwarded-For: proxy1, 127.0.0.1, proxy3

application.Get("/", func(c *fiber.Ctx) {
  c.IPs() // ["proxy1", "127.0.0.1", "proxy3"]
})
```
{% endcode %}

## Est

Renvoie le **type de contenu**correspondant, si le champ d'en-tête HTTP [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) de la requête entrante correspond au [type MIME](https://developer.mozilla.org/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types) spécifié par le paramètre de type.

{% hint style="info" %}
Si la requête n'a **pas de corps** , elle retourne **false**.
{% endhint %}

{% code title="Signature" %}
```go
c.Est (chaîne de caractères) bool
```
{% endcode %}

{% code title="Example" %}
```go
// Content-Type: text/html; charset=utf-8

application.Get("/", func(c *fiber.Ctx) {
  c.Is("html") // vrai
  c.Is(".html") // vrai
  c.Is("json") // false
})
```
{% endcode %}

## JSON

Convertit n'importe quelle **interface** ou **chaîne de caractères** en JSON en utilisant [Jsoniter](https://github.com/json-iterator/go).

{% hint style="info" %}
JSON définit également l'en-tête de contenu à **application/json**.
{% endhint %}

{% code title="Signature" %}
```go
c.JSON(v interface{}) erreur
```
{% endcode %}

{% code title="Example" %}
```go
type SomeStruct struct {
  Name string
  Age uint8
}

application.Get("/json", func(c *fiber.Ctx) {
  // Créer une structure de données:
  data := SomeStruct{
    Nom: "Grame",
    Âge: 20,
  }

  if err := c. SON(data); err != nil {
    c.Statut(500).Send(err)
    return
  }
  // => Content-Type: application/json
  // => "{"Name": "Grame", "Âge": 20}"

  if err := c.JSON(fiber.Map{
    "name": "Grame",
    "age": 20,
  }); err != nil {
    c.Statut(500).Send(err)
    return
  }
  // => Content-Type: application/json
  // => "{"name": "Grame", "age": 20}"
})
```
{% endcode %}

## JSONP

Envoie une réponse JSON avec le support JSONP. Cette méthode est identique à [JSON](ctx.md#json), sauf qu'elle opte pour le support de callback JSONP. Par défaut, le nom de rappel est simplement un rappel.

Remplacer cela en passant une **chaîne nommée** dans la méthode.

{% code title="Signature" %}
```go
c.JSONP(v interface{}, callback ...string) erreur
```
{% endcode %}

{% code title="Example" %}
```go
type SomeStruct struct {
  name string
  age uint8
}

application.Get("/", func(c *fiber.Ctx) {
  // Créer une structure de données:
  data := SomeStruct{
    name: "Grame",
    age: 20,
  }

  c. SONP(data)
  // => callback({"name": "Grame", "age": 20})

  c. SONP(data, "customFunc")
  // => customFunc({"name": "Grame", "age": 20})
})
```
{% endcode %}

## Liens

Rejoint les liens suivis par la propriété pour remplir le champ d'en-tête HTTP [Link](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Link) de la réponse.

{% code title="Signature" %}
```go
c.Liens(lien ...chaîne)
```
{% endcode %}

{% code title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
  c.Link(
    "http://api.example.com/users?page=2", "next",
    "http://api.example.com/users?page=5", "last",
  )
  // Lien: <http://api.example.com/users?page=2>; rel="next",
  //       <http://api.example.com/users?page=5>; rel="last"
})
```
{% endcode %}

## Locaux

Méthode qui stocke les variables de chaîne ayant une portée à la requête et donc uniquement disponibles pour les routes qui correspondent à la requête.

{% hint style="success" %}
C'est utile, si vous voulez passer des données **spécifiques** au prochain middleware.
{% endhint %}

{% code title="Signature" %}
```go
c.Interface{} locales (chaîne de clés, valeur ...interface{})
```
{% endcode %}

{% code title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
  c.Locaux("utilisateur", "admin")
  c.Next()
}) application

.Get("/admin", func(c *fiber.Ctx) {
  si c.Locals("utilisateur") == "admin" {
    c.Statut (200).Envoyer("Bienvenue, admin!")
  } autre {
    c.SendStatus(403)
    // => 403 Interdit
  }
})
```
{% endcode %}

## Localisation

Définit l'en-tête HTTP [Emplacement](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Location) de la réponse au paramètre de chemin spécifié.

{% code title="Signature" %}
```go
c.Localisation (chaîne de chemin)
```
{% endcode %}

{% code title="Example" %}
```go
applicationPost("/", func(c *fibre).Ctx) {
  c.Localisation ("http://example.com")
  c.Localisation ("/foo/bar")
})
```
{% endcode %}

## Méthode

Contient une chaîne correspondant à la méthode HTTP de la requête : `GET`, `POST`, `PUT` et ainsi de suite.  
En option, vous pourriez écraser la méthode en passant une chaîne.

{% code title="Signature" %}
```go
c.Méthode(outrepasser la chaîne de caractères ...string)
```
{% endcode %}

{% code title="Example" %}
```go
applicationPost("/", func(c *fibre).Ctx) {
  c.Method() // "POST"
})
```
{% endcode %}

## Forme multipartite

Pour accéder aux entrées de formulaire en plusieurs parties, vous pouvez analyser le binaire avec `MultipartForm()`. Cela retourne une `map[string][]string`, donc étant donné une clé, la valeur sera une chaîne de caractères.

{% code title="Signature" %}
```go
c.MultipartForm() (*multipartpart).Forme, erreur)
```
{% endcode %}

{% code title="Example" %}
```go
applicationPost("/", func(c *fibre).Ctx) {
  // Analyser la forme multipartite:
  if form, err := c.MultipartForm(); err == nil {
    // => *multipart.Formulaire

    si jeton := formulaire.Value["token"]; len(token) > 0 {
      // Récupère la valeur clé:
      fmt.Println(token[0])
    }

    // Récupère tous les fichiers depuis la clé "documents" :
    fichiers := formulaire.Fichier["documents"]
    // => []*multipart.FileHeader

    // Boucler les fichiers :
    pour _, fichier := range files {
      fmt.Imprimer(fichier.Nom du fichier, fichier.Taille, fichier.En-tête["Content-Type"][0])
      // => "tutorial.pdf" 360641 "application/pdf"

      // Enregistrer les fichiers sur le disque:
      c.Enregistrer le fichier (fichier, fmt.Sprintf("./%s", file.Nom du fichier))
    }
  }
})
```
{% endcode %}

## Suivant

Lorsque **Next** est appelé, il exécute la méthode suivante dans la pile qui correspond à la route courante. Vous pouvez passer une structure d'erreur dans la méthode de gestion d'erreurs personnalisée.

{% code title="Signature" %}
```go
c.Suivant(erreur...erreur)
```
{% endcode %}

{% code title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
  fmt.Println("1ère route !")
  c.Next()
}) application

.Get("*", func(c *fiber.Ctx) {
  fmt.Println("2ème route !")
  c.Suivant(fmt.Erreur("Erreur"))
})

application.Get("/", func(c *fiber.Ctx) {
  fmt.Println(c.Erreur()) // => "Erreur"
  fmt.Println("3ème route !")
  c.Envoyer("Bonjour, Monde !")
})
```
{% endcode %}

## URL d'origine

Contient l'URL de la requête originale.

{% code title="Signature" %}
```go
c.Chaîne OriginalURL()
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://example.com/search?q=quelque chose d'application

Get("/", func(c *fiber.Ctx) {
  c.OriginalURL() // "/search?q=quelque chose"
})
```
{% endcode %}

> _La valeur retournée n'est valide que dans le gestionnaire. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](app.md#settings) _setting instead._ [_Read more..._](./#zero-allocation)

## Params

La méthode peut être utilisée pour obtenir les paramètres de l'itinéraire.

{% hint style="info" %}
Par défaut, la chaîne vide \(`""`\), si le paramètre **n'existe pas**.
{% endhint %}

{% code title="Signature" %}
```go
c.Params(param string) string
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://example.com/user/fenny app

.Get("/user/:name", func(c *fibre.Ctx) {
  c.Params("name") // "fenny"
})
```
{% endcode %}

> _La valeur retournée n'est valide que dans le gestionnaire. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](app.md#settings) _setting instead._ [_Read more..._](./#zero-allocation)\_\_

## Chemin d'accès

Contient la partie chemin de l'URL de requête. Optionnellement, vous pouvez remplacer le chemin en passant une chaîne de caractères.

{% code title="Signature" %}
```go
c.Chaine de caractères Path(outrepasser ...string)
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://example.com/users?sort=desc app

.Get("/users", func(c *fiber.Ctx) {
  c.Path() // "/users"
})
```
{% endcode %}

## Protocol

Contient la chaîne de protocole de requête : `http` ou `https` pour les requêtes **TLS**.

{% code title="Signature" %}
```go
c.Protocol() string
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://example.com

app.Get("/", func(c *fiber.Ctx) {
  c.Protocol() // "http"
})
```
{% endcode %}

## Requête

Cette propriété est un objet contenant une propriété pour chaque paramètre de chaîne de requête dans la route.

{% hint style="info" %}
S'il n'y a **aucune chaîne de requête** , elle retourne une chaîne **vide**.
{% endhint %}

{% code title="Signature" %}
```go
c.Chaîne de requête (chaîne de paramètres)
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://example.com/shoes?order=desc&brand=nike

app.Get("/", func(c *fiber.Ctx) {
  c.Query("order") // "desc"
  c.Query("marque") // "nike"
})
```
{% endcode %}

> _La valeur retournée n'est valide que dans le gestionnaire. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](app.md#settings) _setting instead._ [_Read more..._](./#zero-allocation)

## Range

Un châssis contaissant le type et une tranche de rangées sera retournée.

{% code title="Signature" %}
```go
c.Range(int size)
```
{% endcode %}

{% code title="Example" %}
```go
// Range: bytes=500-700, 700-900
app.Get("/", func(c *fiber.Ctx) {
  b := c.Plage(1000)
  si b.Type == "bytes" {
      pour r := range r.Intervalle {
      fmt.Println(r)
      // [500, 700]
    }
  }
})
```
{% endcode %}

## Rediriger

Redirige vers l'URL dérivée du chemin spécifié, avec un statut spécifié, un entier positif qui correspond à un code de statut HTTP.

{% hint style="info" %}
Si **n'est pas spécifié** , le statut par défaut est **302 Found**.
{% endhint %}

{% code title="Signature" %}
```go
c.Redirect(chaîne de chemin, statut ...int)
```
{% endcode %}

{% code title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
  c.Redirect("/foo/bar")
  c.Redirect("../login")
  c.Redirect("http://example.com")
  c.Redirect("http://example.com", 301)
})
```
{% endcode %}

## Rendu

Affiche un modèle avec des données et envoie une réponse `text/html`. Par défaut `Render` utilise la valeur par défaut [**Go Moteur de gabarits**](https://golang.org/pkg/html/template/). Si vous voulez utiliser un autre moteur, veuillez jeter un coup d'oeil à notre middleware [**Modèle**](middleware.md#template).

{% code title="Signature" %}
```go
c.Erreur de rendu(chaîne de fichiers, interface de données{})
```
{% endcode %}

## Itinéraire

Contient la structure [Route](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc#Route) correspondante.

{% code title="Signature" %}
```go
c.Route() *Route
```
{% endcode %}

{% code title="Example" %}
```go
// http://localhost:8080/hello

app.Get("/hello", func(c *fiber.Ctx) {
  r := c.Route()
  fmt.Imprimer(r.Méthode, r.Chemin, r.Params, r.Regexp, r.Handler)
})

app.Post("/:api?", func(c *fibre.Ctx) {
  c.Route()
  // => {GET /hello [] nil 0x7b49e0}
})
```
{% endcode %}

## Enregistrer le fichier

La méthode est utilisée pour enregistrer **n'importe quel fichier** en plusieurs parties sur disque.

{% code title="Signature" %}
```go
c.Enregistrer le fichier (fh *multipart).En-tête de fichier, chaîne de chemins)
```
{% endcode %}

{% code title="Example" %}
```go
applicationPost("/", func(c *fibre).Ctx) {
  // Analyser la forme multipartite:
  if form, err := c.MultipartForm(); err == nil {
    // => *multipart.Form

    // Récupère tous les fichiers à partir de la clé "documents":
    fichiers := form.Fichier["documents"]
    // => []*multipart.FileHeader

    // Boucler les fichiers :
    pour _, fichier := range files {
      fmt.Imprimer(fichier.Nom du fichier, fichier.Taille, fichier.En-tête["Content-Type"][0])
      // => "tutorial.pdf" 360641 "application/pdf"

      // Enregistrer les fichiers sur le disque:
      c.Enregistrer le fichier (fichier, fmt.Sprintf("./%s", file.Nom du fichier))
    }
  }
})
```
{% endcode %}

## Sécurisé

Une propriété booléenne, qui est `true` , si une connexion **TLS** est établie.

{% code title="Signature" %}
```go
c.bool Secure()
```
{% endcode %}

{% code title="Example" %}
```go
// La méthode Secure() est équivalente à:
c.Protocol() == "https"
```
{% endcode %}

## Envoyer

Définit le corps de la réponse HTTP. Le corps de **Envoyer** peut être de n'importe quel type.

{% hint style="warning" %}
Envoyer **ne s'ajoute pas à** comme la méthode d'écriture [](https://fiber.wiki/context#write).
{% endhint %}

{% code title="Signature" %}
```go
c.Envoyer(corps ...interface{})
```
{% endcode %}

{% code title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
  c.Envoyer("Bonjour, Monde !")         // => "Bonjour, Monde!"
  c.Envoyer([]byte("Bonjour, Monde!")) // => "Bonjour, Monde!"
  c.Envoyer(123) // => 123
})
```
{% endcode %}

Fiber fournit également des méthodes `SendBytes` ,`SendString` et `SendStream` pour les entrées brutes.

{% hint style="success" %}
Utilisez ceci, si vous **n'avez pas besoin d'assertion de type** , recommandé pour **des performances** plus rapides.
{% endhint %}

{% code title="Signature" %}
```go
c.SendBytes(b []byte)
c.SendString(s string)
c.SendStream(r io.Lecteur, s ...int)
```
{% endcode %}

{% code title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
  c.EnvoyerByte([]byte("Bonjour, Monde!"))
  // => "Bonjour, Monde!"

  c.SendString("Bonjour, Monde !")
  // => "Bonjour, Monde!"

  c.SendStream(octets).NewReader([]byte("Bonjour, Monde!")))
  // => "Bonjour, Monde!"
})
```
{% endcode %}

## Envoyer un fichier

Transfère le fichier depuis le chemin donné. Définit le champ d'en-tête HTTP de réponse [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) basé sur l'extension **filennames**.

{% hint style="warning" %}
La méthode utilise **gzipping** par défaut, la définit à **true** pour désactiver.
{% endhint %}

{% code title="Signature" %}
```go
c.SendFile(path string, compress ...bool) erreur
```
{% endcode %}

{% code title="Example" %}
```go
applicationGet("/not-found", func(c *fibre.Ctx) {
  if err := c.SendFile("./public/404.html"); err != nil {
    c.Next(err) // passe err to ErrorHandler
  }

  // Active la compression
  if err := c.SendFile("./static/index.html", true); err != nil {
    c.Next(err) // passe l'erreur à ErrorHandler
  }
})
```
{% endcode %}

## SendStatus

Définit le code de statut et le message de statut correct dans le corps, si le corps de la réponse est **vide**.

{% hint style="success" %}
Vous pouvez trouver tous les codes de statut et les messages utilisés [ici](https://github.com/gofiber/fiber/blob/dffab20bcdf4f3597d2c74633a7705a517d2c8c2/utils.go#L183-L244).
{% endhint %}

{% code title="Signature" %}
```go
c.Statut de l'envoi (statut int)
```
{% endcode %}

{% code title="Example" %}
```go
applicationGet("/not-found", func(c *fibre.Ctx) {
  c.SendStatus(415)
  // => 415 "Type de média non pris en charge"

  c.Envoyer("Bonjour, Monde !")
  c.SendStatus(415)
  // => 415 "Bonjour, Monde!"
})
```
{% endcode %}

## Régler

Définit le champ d'en-tête HTTP de la réponse à la clé `spécifiée`, `valeur`.

{% code title="Signature" %}
```go
c.Ensemble(champ, chaîne de valeur)
```
{% endcode %}

{% code title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
  c.Set("Content-Type", "text/plain")
  // => "Content-type: text/plain"
})
```
{% endcode %}

## Décor

[https://expressjs.com/fr/4x/api.html\#req.fresh](https://expressjs.com/en/4x/api.html#req.fresh)

{% hint style="info" %}
Pas encore mis en œuvre, les pull requests sont les bienvenus!
{% endhint %}

## Statut

Définit le statut HTTP de la réponse.

{% hint style="info" %}
La méthode est une **chaînable**.
{% endhint %}

{% code title="Signature" %}
```go
c.Statut (status int)
```
{% endcode %}

{% code title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
  c.Statut(200)
  c.Statut (400).Envoyer("Mauvaise requête")
  c.Statut (404).SendFile("./public/gopher.png")
})
```
{% endcode %}

## Sous-domaines

Un tableau de sous-domaines dans le nom de domaine de la requête.

L'offset de la propriété application du sous-domaine, qui est par défaut à `2`, est utilisé pour déterminer le début des segments de sous-domaine.

{% code title="Signature" %}
```go
c.Sous-domaines(offset ...int) []chaîne
```
{% endcode %}

{% code title="Example" %}
```go
// Host: "tobi.ferrets.example.com"

app.Get("/", func(c *fiber.Ctx) {
  c.Subdomains()  // ["ferrets", "tobi"]
  c.Sous-domaines(1) // ["tobi"]
})
```
{% endcode %}

## Type de texte

Définit l'en-tête HTTP [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) au type MIME listé [ici](https://github.com/nginx/nginx/blob/master/conf/mime.types) spécifié par l'extension **fichier**.

{% code title="Signature" %}
```go
c.Chaîne de caractères Type(t string)
```
{% endcode %}

{% code title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
  c.Type(".html") // => "text/html"
  c.Type("html") // => "text/html"
  c.Type("json") // => "application/json"
  c.Type("png")   // => "image/png"
})
```
{% endcode %}

## Varier

Ajoute le champ d'en-tête donné à l'en-tête de réponse [Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary). Ceci ajoutera l'entête, s'il n'est pas déjà listé, sinon le laissera listé dans l'emplacement courant.

{% hint style="info" %}
Plusieurs champs sont **autorisés**.
{% endhint %}

{% code title="Signature" %}
```go
c.Vary(champ ...chaîne)
```
{% endcode %}

{% code title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
  c.Vary("Origin") // => Vary: Origin
  c.Vary("User-Agent") // => Vary: Origin, User-Agent

  // Pas de doublons
  c.Vary("Origin") // => Vary: Origin, User-Agent

  c.Vary("Accept-Encoding", "Accept")
  // => Vary: Origin, User-Agent, Accept-Encoding, Accept
})
```
{% endcode %}

## Écrire

Ajoute **n'importe quelle entrée** à la réponse du corps HTTP.

{% code title="Signature" %}
```go
c.Écriture(corps ...interface{})
```
{% endcode %}

{% code title="Example" %}
```go
applicationGet("/", func(c *fiber.Ctx) {
  c.Ecriture("Bonjour, ") // => "Bonjour, "
  c.Ecriture([]byte("Monde! ")) // => "Bonjour, Monde! "
  c.Écriture(123) // => "Bonjour, Monde! 123"
})
```
{% endcode %}

## XHR

Une propriété booléenne, qui est `vrai`, si le champ d'en-tête [X-Requested-With](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) de la requête est [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), indiquant que la requête a été émise par une bibliothèque client \(comme [jQuery](https://api.jquery.com/jQuery.ajax/)\).

{% code title="Signature" %}
```go
c.XHR() bool
```
{% endcode %}

{% code title="Example" %}
```go
// X-Requested-With: application XMLHttpRequest

Get("/", func(c *fiber.Ctx) {
  c.XHR() // true
})
```
{% endcode %}

