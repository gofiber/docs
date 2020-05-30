---
description: >-
  La structure Ctx représente le contexte qui contient la requête et la réponse HTTP. Il a des méthodes pour exploiter la requête telle que les paramètres, le corps, les en-têtes HTTP etc.
---

# 🧠 Context

## Accepts

Vérifie si **les extensions** ou **les types de contenu** sont acceptables.

{% hint style="info" %}
Basé sur l'en-tête de la requête HTTP [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept).
{% endhint %}

{% code title="Signature" %}
```go
c.Accepts(types ...string)                 string
c.AcceptsCharsets(charsets ...string)      string
c.AcceptsEncodings(encodings ...string)    string
c.AcceptsLanguages(langs ...string)        string
```
{% endcode %}

{% code title="Example" %}
```go
// Accept: text/*, application/json

app.Get("/", func(c *fiber.Ctx) {
  c.Accepts("html")             // "html"
  c.Accepts("text/html")        // "text/html"
  c.Accepts("json", "text")     // "json"
  c.Accepts("application/json") // "application/json"
  c.Accepts("image/png")        // ""
  c.Accepts("png")              // ""
})
```
{% endcode %}

Fiber fournit des fonctions similaires pour les autres en-têtes "accept".

```go
// Accept-Charset: utf-8, iso-8859-1;q=0.2
// Accept-Encoding: gzip, compress;q=0.2
// Accept-Language: en;q=0.8, nl, ru

app.Get("/", func(c *fiber.Ctx) {
  c.AcceptsCharsets("utf-16", "iso-8859-1") 
  // "iso-8859-1"

  c.AcceptsEncodings("compress", "br") 
  // "compress"

  c.AcceptsLanguages("pt", "nl", "ru") 
  // "nl"
})
```

## Append

Ajoute la **valeur** spécifiée à l'en-tête HTTP envoyé en réponse.

{% hint style="warning" %}
Si l'en-tête n'est **pas** déjà spécifié, il crée un nouvel en-tête avec la valeur spécifiée.
{% endhint %}

{% code title="Signature" %}
```go
c.Append(field, values ...string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Append("Link", "http://google.com", "http://localhost")
  // => Link: http://localhost, http://google.com

  c.Append("Link", "Test")
  // => Link: http://localhost, http://google.com, Test
})
```
{% endcode %}

## Attachment

Spécifie l'en-tête HTTP [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) à `attachment`.

{% code title="Signature" %}
```go
c.Attachment(file ...string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Attachment()
  // => Content-Disposition: attachment

  c.Attachment("./upload/images/logo.png")
  // => Content-Disposition: attachment; filename="logo.png"
  // => Content-Type: image/png
})
```
{% endcode %}

## BaseURL

Retourne l'URL sous la forme d'une `chaîne de caractères` \(**protocol** + **host**\).

{% code title="Signature" %}
```go
c.BaseURL() string
```
{% endcode %}

{% code title="Example" %}
```go
// GET https://example.com/page#chapter-1

app.Get("/", func(c *fiber.Ctx) {
  c.BaseURL() // https://example.com
})
```
{% endcode %}

## Body

Contient le **corps brute** de la requête **POST**.

{% code title="Signature" %}
```go
c.Body() string
```
{% endcode %}

{% code title="Example" %}
```go
// curl -X POST http://localhost:8080 -d user=john

app.Post("/", func(c *fiber.Ctx) {
  // Récupérer le contenu brute de la requête POST :
  c.Body() // user=john
})
```
{% endcode %}

## BodyParser

Lier le corps de la requête à une structure. `BodyParser` peut décoder les paramètres de l'URL mais aussi les types de contenu suivant basé sur l'en-tête `Content-Type` :

* `application/json`
* `application/xml`
* `application/x-www-form-urlencoded`
* `multipart/form-data`

{% code title="Signature" %}
```go
c.BodyParser(out interface{}) error
```
{% endcode %}

{% code title="Example" %}
```go
// Les champs devraient commencer par une majuscule
type Person struct {
    Name string `json:"name" xml:"name" form:"name" query:"name"`
    Pass string `json:"pass" xml:"pass" form:"pass" query:"pass"`
}

app.Post("/", func(c *fiber.Ctx) {
        p := new(Person)

        if err := c.BodyParser(p); err != nil {
            log.Fatal(err)
        }

        log.Println(p.Name) // john
        log.Println(p.Pass) // doe
})
// Tester avec des commandes cURL

// curl -X POST -H "Content-Type: application/json" --data "{\"name\":\"john\",\"pass\":\"doe\"}" localhost:3000

// curl -X POST -H "Content-Type: application/xml" --data "<login><name>john</name><pass>doe</pass></login>" localhost:3000

// curl -X POST -H "Content-Type: application/x-www-form-urlencoded" --data "name=john&pass=doe" localhost:3000

// curl -X POST -F name=john -F pass=doe http://localhost:3000

// curl -X POST "http://localhost:3000/?name=john&pass=doe"
```
{% endcode %}

## ClearCookie

Expire un cookie \(_ou tous les cookies si appelé sans argument\)_

{% code title="Signature" %}
```go
c.ClearCookie(key ...string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  // Supprime tous les cookies :
  c.ClearCookie()

  // Supprime un cookie spécifique par son nom :
  c.ClearCookie("user")

  // Supprimpe plusieurs cookies par leurs noms :
  c.ClearCookie("token", "session", "track_id", "version")
})
```
{% endcode %}

## Cookie

Défini un cookie

**Signature**

```text
c.Cookie(*Cookie)
```

```go
type Cookie struct {
    Name     string
    Value    string
    Path     string
    Domain   string
    Expires  time.Time
    Secure   bool
    HTTPOnly bool
    SameSite string // lax, strict, none
}
```

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  // Create cookie
  cookie := new(fiber.Cookie)
  cookie.Name = "john"
  cookie.Value = "doe"
  cookie.Expires = time.Now().Add(24 * time.Hour)

  // Set cookie
  c.Cookie(cookie)
})
```
{% endcode %}

## Cookies

Récupère la valeur d'un cookie par son nom.

**Signature**s

```go
c.Cookies(key string) string
```

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  // Récupère la valeur d'un cookie par son nom :
  c.Cookies("name") // "john"
})
```
{% endcode %}

## Download

Transfert un fichier depuis le chemin spécifié en tant que `pièce-jointe`.

Généralement, les navigateurs vont proposer à l'utilisateur un téléchargement. Par défaut, l'en-tête [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) aura comme paramètre `filename` le nom du fichier soumis \(_généralement visible dans la fenêtre de dialogue_\).

Forcez la valeur par défaut avec le paramètre **filename**.

{% code title="Signature" %}
```go
c.Download(path, filename ...string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Download("./files/report-12345.pdf")
  // => Télécharge report-12345.pdf

  c.Download("./files/report-12345.pdf", "report.pdf")
  // => Télécharge report.pdf
})
```
{% endcode %}

## Fasthttp

Vous pouvez toujours **accéder** et utiliser toutes les méthodes et propriétés de **Fasthttp**.

**Signature**

{% hint style="info" %}
Merci de lire la [documentation de Fasthttp](https://pkg.go.dev/github.com/valyala/fasthttp?tab=doc) pour plus d'information.
{% endhint %}

**Exemple**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Fasthttp.Request.Header.Method()
  // => []byte("GET")

  c.Fasthttp.Response.Write([]byte("Hello, World!"))
  // => "Hello, World!"
})
```

## Error

Ceci contient les informations sur l'erreur qui est généré par un panic ou passé via la méthode [`Next(err)`](https://github.com/gofiber/docs/tree/8d965e1e05fb67f965934586c78335ef29f52128/context/README.md#error).

{% code title="Signature" %}
```go
c.Error() error
```
{% endcode %}

{% code title="Example" %}
```go
func main() {
  app := fiber.New()
  app.Post("/api/register", func (c *fiber.Ctx) {
    if err := c.JSON(&User); err != nil {
      c.Next(err)
    }
  })
  app.Get("/api/user", func (c *fiber.Ctx) {
    if err := c.JSON(&User); err != nil {
      c.Next(err)
    }
  })
  app.Put("/api/update", func (c *fiber.Ctx) {
    if err := c.JSON(&User); err != nil {
      c.Next(err)
    }
  })
  app.Use("/api", func(c *fiber.Ctx) {
    c.Set("Content-Type", "application/json")
    c.Status(500).Send(c.Error())
  })
  app.Listen(1337)
}
 
Text
XPath: /pre[25]/code
```
{% endcode %}

## Format

Fait la négociation de contenu via l'en-tête HTTP [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept). Il utilise [Accepts](context.md#accepts) pour sélection le bon format.

{% hint style="info" %}
Si l'en-tête **n'est pas** spécifié ou s'il **n'a pas** le bon format, **text/plain** est utilisé.
{% endhint %}

{% code title="Signature" %}
```go
c.Format(body interface{})
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  // Accept: text/plain
  c.Format("Hello, World!")
  // => Hello, World!

  // Accept: text/html
  c.Format("Hello, World!")
  // => <p>Hello, World!</p>

  // Accept: application/json
  c.Format("Hello, World!")
  // => "Hello, World!"
})
```
{% endcode %}

## FormFile

Les fichiers d'un MultipartForm peuvent être récupérés par nom, le **premier** fichier pour un nom donné sera retourné.

{% code title="Signature" %}
```go
c.FormFile(name string) (*multipart.FileHeader, error)
```
{% endcode %}

{% code title="Example" %}
```go
app.Post("/", func(c *fiber.Ctx) {
  // Récupérer le premier fichier du formulaire nommé "document" :
  file, err := c.FormFile("document")

  // Check for errors:
  if err == nil {
    // Sauvegarder le fichier à la racine du répertoire :
    c.SaveFile(file, fmt.Sprintf("./%s", file.Filename))
  }
})
```
{% endcode %}

## FormValue

N'importe quelle valeur peut être récupérée par son nom, la **première** valeur pour un nom donné est retournée.

{% code title="Signature" %}
```go
c.FormValue(name string) string
```
{% endcode %}

{% code title="Example" %}
```go
app.Post("/", func(c *fiber.Ctx) {
  // Récupérer la première valeur du formulaire ayant comme nom "name" :
  c.FormValue("name")
  // => "john" or "" if not exist
})
```
{% endcode %}

## Fresh

[https://expressjs.com/en/4x/api.html\#req.fresh](https://expressjs.com/en/4x/api.html#req.fresh)

{% hint style="info" %}
Pas encore implémenté, des "pull requests" sont bienvenus !
{% endhint %}

## Get

Retourne l'en-tête de la requête HTTP spécifié par "field".

{% hint style="success" %}
La correspondance est **insensible à la casse**.
{% endhint %}

{% code title="Signature" %}
```go
c.Get(field string) string
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Get("Content-Type") // "text/plain"
  c.Get("CoNtEnT-TypE") // "text/plain"
  c.Get("quelque-chose")    // ""
})
```
{% endcode %}

## Hostname

Contient le nom d'hôte dérivé de l'en-tête HTTP [Host](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host).

{% code title="Signature" %}
```go
c.Hostname() string
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://google.com/search

app.Get("/", func(c *fiber.Ctx) {
  c.Hostname() // "google.com"
})
```
{% endcode %}

## IP

Retourne l'adresse IP distante de la requête.

{% code title="Signature" %}
```go
c.IP() string
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.IP() // "127.0.0.1"
})
```
{% endcode %}

## IPs

Retourne un tableau d'adresses IP spécifiées dans l'en-tête de la requête HTTP [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For).

{% code title="Signature" %}
```go
c.IPs() []string
```
{% endcode %}

{% code title="Example" %}
```go
// X-Forwarded-For: proxy1, 127.0.0.1, proxy3

app.Get("/", func(c *fiber.Ctx) {
  c.IPs() // ["proxy1", "127.0.0.1", "proxy3"]
})
```
{% endcode %}

## Is

Retourne le **type de contenu** correspondant, si l'en-tête [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) de la requête HTTP correspond au [MIME type](https://developer.mozilla.org/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types) spécifié par le paramètre.

{% hint style="info" %}
Si la requête **n'a pas** de corps, il retourne **faux**.
{% endhint %}

{% code title="Signature" %}
```go
c.Is(t string) bool
```
{% endcode %}

{% code title="Example" %}
```go
// Content-Type: text/html; charset=utf-8

app.Get("/", func(c *fiber.Ctx) {
  c.Is("html")  // vrai
  c.Is(".html") // vrai
  c.Is("json")  // faux
})
```
{% endcode %}

## JSON

Converti n'importe quelle **interface** ou **chaîne de caractères** en JSON en utilisant [Jsoniter](https://github.com/json-iterator/go).

{% hint style="info" %}
JSON définit également l'en-tête Content-Type à **application/json**.
{% endhint %}

{% code title="Signature" %}
```go
c.JSON(v interface{}) error
```
{% endcode %}

{% code title="Example" %}
```go
type SomeStruct struct {
  Name string
  Age  uint8
}

app.Get("/json", func(c *fiber.Ctx) {
  // Create data struct:
  data := SomeStruct{
    Name: "Grame",
    Age:  20,
  }

  if err := c.JSON(data); err != nil {
    c.Status(500).Send(err)
    return
  }
  // => Content-Type: application/json
  // => "{"Name": "Grame", "Age": 20}"

  if err := c.JSON(fiber.Map{
    "name": "Grame",
    "age": 20,
  }); err != nil {
    c.Status(500).Send(err)
    return
  }
  // => Content-Type: application/json
  // => "{"name": "Grame", "age": 20}"
})
```
{% endcode %}

## JSONP

Envoie une réponse JSON avec le support JSONP. Cette méthode est identique à [JSON](context.md#json), sauf qu'elle opte pour une fonction de rappel JSONP. Par défaut, le nom de la fonction de rappel est simplement "callback".

Remplacer ce comportement en passant un **nom** dans la méthode.

{% code title="Signature" %}
```go
c.JSONP(v interface{}, callback ...string) error
```
{% endcode %}

{% code title="Example" %}
```go
type SomeStruct struct {
  name string
  age  uint8
}

app.Get("/", func(c *fiber.Ctx) {
  // Create data struct:
  data := SomeStruct{
    name: "Grame",
    age:  20,
  }

  c.JSONP(data)
  // => callback({"name": "Grame", "age": 20})

  c.JSONP(data, "customFunc")
  // => customFunc({"name": "Grame", "age": 20})
})
 
Text
XPath: /pre[45]/code
```
{% endcode %}

## Links

Rejoint les liens suivis par la propriété pour remplir l'en-tête HTTP [Link](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Link) de la réponse.

{% code title="Signature" %}
```go
c.Links(link ...string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Link(
    "http://api.example.com/users?page=2", "next",
    "http://api.example.com/users?page=5", "last",
  )
  // Link: <http://api.example.com/users?page=2>; rel="next",
  //       <http://api.example.com/users?page=5>; rel="last"
})
```
{% endcode %}

## Locals

Méthode qui stock dans le scope de la requête des variables et donc uniquement valable pour les routes qui correspondent à la requête.

{% hint style="success" %}
Particulièrement utile si vous voulez passer des **informations spécifiques** au prochain middleware.
{% endhint %}

{% code title="Signature" %}
```go
c.Locals(key string, value ...interface{}) interface{}
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Locals("user", "admin")
  c.Next()
})

app.Get("/admin", func(c *fiber.Ctx) {
  if c.Locals("user") == "admin" {
    c.Status(200).Send("Bienvenue, admin!")
  } else {
    c.SendStatus(403)
    // => 403 Forbidden
  }
})
```
{% endcode %}

## Location

Définit l'en-tête de la réponse HTTP [Location](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Location) par le chemin spécifié en paramètre.

{% code title="Signature" %}
```go
c.Location(path string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Post("/", func(c *fiber.Ctx) {
  c.Location("http://example.com")
  c.Location("/foo/bar")
})
```
{% endcode %}

## Method

Contient une chaîne de caractère correspondant à la méthode HTTP de la requête : `GET`, `POST`, `PUT` et ainsi de suite.  
En option, vous pouvez remplacer la méthode en passant une chaîne de caractère.

{% code title="Signature" %}
```go
c.Method(override ...string) string
```
{% endcode %}

{% code title="Example" %}
```go
app.Post("/", func(c *fiber.Ctx) {
  c.Method() // "POST"
})
```
{% endcode %}

## MultipartForm

Pour accéder aux entrées du formulaire multipart, vous pouvez analyser le binaire avec `MultipartForm()`. La méthode retourne une `map[string][]string`, donc pour une clé donnée, la valeur sera un slice d'une chaîne de caractères.

{% code title="Signature" %}
```go
c.MultipartForm() (*multipart.Form, error)
```
{% endcode %}

{% code title="Example" %}
```go
app.Post("/", func(c *fiber.Ctx) {
  // Analyser le formulaire multipart :
  if form, err := c.MultipartForm(); err == nil {
    // => *multipart.Form

    if token := form.Value["token"]; len(token) > 0 {
      // Récupère la valeur :
      fmt.Println(token[0])
    }

    // Récupérer tous les fichiers via la clé "documents" :
    files := form.File["documents"]
    // => []*multipart.FileHeader

    // Boucler sur les fichiers :
    for _, file := range files {
      fmt.Println(file.Filename, file.Size, file.Header["Content-Type"][0])
      // => "tutorial.pdf" 360641 "application/pdf"

      // Sauvegarder les fichiers sur le disque :
      c.SaveFile(file, fmt.Sprintf("./%s", file.Filename))
    }
  }
})
 
Text
XPath: /pre[55]/code
```
{% endcode %}

## Next

Quand **Next** est appelée, elle exécute la prochaine méthode dans la pile qui correspond à la route en cours. Vous pouvez passer une structure error dans la méthode pour une gestion personnalisée de l'erreur.

{% code title="Signature" %}
```go
c.Next(err ...error)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  fmt.Println("1ère route !")
  c.Next()
})

app.Get("*", func(c *fiber.Ctx) {
  fmt.Println("2ème route !")
  c.Next(fmt.Errorf("une erreur"))
})

app.Get("/", func(c *fiber.Ctx) {
  fmt.Println(c.Error()) // => "une erreur"
  fmt.Println("3ème route !")
  c.Send("Hello, World!")
})
```
{% endcode %}

## OriginalURL

Contient l'URL de la requête originale.

{% code title="Signature" %}
```go
c.OriginalURL() string
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://example.com/search?q=something

app.Get("/", func(c *fiber.Ctx) {
  c.OriginalURL() // "/search?q=something"
})
```
{% endcode %}

## Params

La méthode peut être utilisée pour récupérer les paramètres de la route.

{% hint style="info" %}
Par défaut, la chaîne de caractère sera vide \(`""`\), si le paramètre **n'existe pas**.
{% endhint %}

{% code title="Signature" %}
```go
c.Params(param string) string
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://example.com/user/fenny

app.Get("/user/:name", func(c *fiber.Ctx) {
  c.Params("name") // "fenny"
})
```
{% endcode %}

## Path

Contient le chemin de l'URL. En option, vous pouvez remplacer le chemin en passant une chaîne de caractères en paramètre.

{% code title="Signature" %}
```go
c.Path(override ...string) string
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://example.com/users?sort=desc

app.Get("/users", func(c *fiber.Ctx) {
  c.Path() // "/users"
})
```
{% endcode %}

## Protocol

Contient le protocole de la requête : `http` ou `https` pour **TLS**.

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

## Query

Cette propriété est un objet contenant une propriété pour chaque paramètre de la route.

{% hint style="info" %}
S'il **n'y a pas** de paramètre, elle retourne une chaîne de caractères **vide**.
{% endhint %}

{% code title="Signature" %}
```go
c.Query(parameter string) string
```
{% endcode %}

{% code title="Example" %}
```go
// GET http://example.com/shoes?order=desc&brand=nike

app.Get("/", func(c *fiber.Ctx) {
  c.Query("order") // "desc"
  c.Query("brand") // "nike"
})
```
{% endcode %}

## Range

Une structure contenant le type et une liste d'intervalle seront retournés.

{% code title="Signature" %}
```go
c.Range(int size)
```
{% endcode %}

{% code title="Example" %}
```go
// Range: bytes=500-700, 700-900
app.Get("/", func(c *fiber.Ctx) {
  b := c.Range(1000)
  if b.Type == "bytes" {
      for r := range r.Ranges {
      fmt.Println(r)
      // [500, 700]
    }
  }
})
```
{% endcode %}

## Redirect

Redirige vers l'URL dérivée du chemin spécifié, avec le statut spécifié, un entier positif qui correspond à un code de statut HTTP.

{% hint style="info" %}
Si **non spécifié**, le statut par défaut sera **302 Found**.
{% endhint %}

{% code title="Signature" %}
```go
c.Redirect(path string, status ...int)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Redirect("/foo/bar")
  c.Redirect("../login")
  c.Redirect("http://example.com")
  c.Redirect("http://example.com", 301)
})
```
{% endcode %}

## Render

Affiche un modèle avec des données et envoie une réponse `text/html`. Par défaut `Render` utilise le [**moteur de modèle Go**](https://golang.org/pkg/html/template/). Si vous voulez utiliser un autre moteur, veuillez jeter un coup d'oeil au [**middleware modèle**](middleware.md#template).

{% code title="Signature" %}
```go
c.Render(file string, data interface{}) error
```
{% endcode %}

## Route

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
  fmt.Println(r.Method, r.Path, r.Params, r.Regexp, r.Handler)
})

app.Post("/:api?", func(c *fiber.Ctx) {
  c.Route()
  // => {GET /hello [] nil 0x7b49e0}
})
```
{% endcode %}

## SaveFile

La méthode est utilisée pour sauvegarder **n'importe quel fichier** multipart sur le disque.

{% code title="Signature" %}
```go
c.SaveFile(fh *multipart.FileHeader, path string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Post("/", func(c *fiber.Ctx) {
  // Analyse le formulaire multipart :
  if form, err := c.MultipartForm(); err == nil {
    // => *multipart.Form

    // Récupère tous les fichiers depuis la clé "documents" :
    files := form.File["documents"]
    // => []*multipart.FileHeader

    // Boucle sur les fichiers :
    for _, file := range files {
      fmt.Println(file.Filename, file.Size, file.Header["Content-Type"][0])
      // => "tutorial.pdf" 360641 "application/pdf"

      // Sauvegarde les fichiers sur le disque :
      c.SaveFile(file, fmt.Sprintf("./%s", file.Filename))
    }
  }
})
```
{% endcode %}

## Secure

Une propriété booléenne qui est `vrai` si une connexion **TLS** est établie.

{% code title="Signature" %}
```go
c.Secure() bool
```
{% endcode %}

{% code title="Example" %}
```go
// Secure() est l'équivalent de :
c.Protocol() == "https"
```
{% endcode %}

## Send

Définit le corps de la réponse HTTP. Le corps de **Send** peut être de n'importe quel type.

{% hint style="warning" %}
Send **n'ajoute pas** à la suite comme pourrait le faire la méthode [Write](https://fiber.wiki/context#write).
{% endhint %}

{% code title="Signature" %}
```go
c.Send(body ...interface{})
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")         // => "Hello, World!"
  c.Send([]byte("Hello, World!")) // => "Hello, World!"
  c.Send(123)                     // => 123
})
```
{% endcode %}

Fiber fournit également les méthodes `SendBytes` & `SendString` pour des entrées brutes.

{% hint style="success" %}
Utilisez ceci si vous **n'avez pas** besoin d'assertion type, recommandé pour de **meilleur** performance.
{% endhint %}

{% code title="Signature" %}
```go
c.SendBytes(b []byte)
c.SendString(s string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.SendByte([]byte("Hello, World!"))
  // => "Hello, World!"

  c.SendString("Hello, World!")
  // => "Hello, World!"
})
```
{% endcode %}

## SendFile

Transfert le fichier à partir du chemin spécifié. Définit l'en-tête HTTP [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) de la réponse en se basant sur l'extension **des fichiers**.

{% hint style="warning" %}
La méthode utilise **GZIP** par défaut, définir à **true** pour désactiver.
{% endhint %}

{% code title="Signature" %}
```go
c.SendFile(path string, gzip ...bool)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/not-found", func(c *fiber.Ctx) {
  c.SendFile("./public/404.html")

  // Disable gzipping:
  c.SendFile("./static/index.html", true)
})
```
{% endcode %}

## SendStatus

Définit le code de statut et corrige le message du statut dans le corps, si le corps de la réponse est **vide**.

{% hint style="success" %}
Vous pouvez trouver tous les code de statuts et des messages [ici](https://github.com/gofiber/fiber/blob/dffab20bcdf4f3597d2c74633a7705a517d2c8c2/utils.go#L183-L244).
{% endhint %}

{% code title="Signature" %}
```go
c.SendStatus(status int)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/not-found", func(c *fiber.Ctx) {
  c.SendStatus(415)
  // => 415 "Unsupported Media Type"

  c.Send("Hello, World!")
  c.SendStatus(415)
  // => 415 "Hello, World!"
})
```
{% endcode %}

## Set

Définit l'en-tête de la réponse HTTP par le champ spécifié `key`, `value`.

{% code title="Signature" %}
```go
c.Set(field, value string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Set("Content-Type", "text/plain")
  // => "Content-type: text/plain"
})
```
{% endcode %}

## Stale

[https://expressjs.com/en/4x/api.html\#req.fresh](https://expressjs.com/en/4x/api.html#req.fresh)

{% hint style="info" %}
Pas encore implémenté, des "pull requests" sont bienvenus !
{% endhint %}

## Status

Définit le statut HTTP de la réponse.

{% hint style="info" %}
La méthode est **chainable**.
{% endhint %}

{% code title="Signature" %}
```go
c.Status(status int)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Status(200)
  c.Status(400).Send("Bad Request")
  c.Status(404).SendFile("./public/gopher.png")
})
```
{% endcode %}

## Subdomains

Un tableau de sous-domaines du nom de domaine de la requête.

L'offset de l'application pour les sous-domaines, qui est par défaut `2`, est utilisé pour déterminer le début des segments du sous-domaine.

{% code title="Signature" %}
```go
c.Subdomains(offset ...int) []string
```
{% endcode %}

{% code title="Example" %}
```go
// Host: "tobi.ferrets.example.com"

app.Get("/", func(c *fiber.Ctx) {
  c.Subdomains()  // ["ferrets", "tobi"]
  c.Subdomains(1) // ["tobi"]
})
```
{% endcode %}

## Type

Définit l'en-tête HTTP [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) au MIME type listé [ici](https://github.com/nginx/nginx/blob/master/conf/mime.types) spécifié par **l'extension** du fichier.

{% code title="Signature" %}
```go
c.Type(t string) string
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Type(".html") // => "text/html"
  c.Type("html")  // => "text/html"
  c.Type("json")  // => "application/json"
  c.Type("png")   // => "image/png"
})
```
{% endcode %}

## Vary

Ajoute l'en-tête donné à l'en-tête [Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary) en réponse. Ceci ajoutera l'en-tête, s'il n'est pas déjà listé, sinon le laissera listé dans l'emplacement courant.

{% hint style="info" %}
Plusieurs champs sont **autorisés**.
{% endhint %}

{% code title="Signature" %}
```go
c.Vary(field ...string)
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Vary("Origin")     // => Vary: Origin
  c.Vary("User-Agent") // => Vary: Origin, User-Agent

  // Pas de doublon
  c.Vary("Origin") // => Vary: Origin, User-Agent

  c.Vary("Accept-Encoding", "Accept")
  // => Vary: Origin, User-Agent, Accept-Encoding, Accept
})
```
{% endcode %}

## Write

Ajoute **n'importe quelle entrée** au corps de la réponse HTTP.

{% code title="Signature" %}
```go
c.Write(body ...interface{})
```
{% endcode %}

{% code title="Example" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Write("Hello, ")         // => "Hello, "
  c.Write([]byte("World! ")) // => "Hello, World! "
  c.Write(123)               // => "Hello, World! 123"
})
```
{% endcode %}

## XHR

Une propriété booléenne, qui est `vrai`, si l'en-tête de la requête HTTP [X-Requested-With](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) est [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), indique que la requête a été initié par une librairie (comme par exemple [jQuery](https://api.jquery.com/jQuery.ajax/)\).

{% code title="Signature" %}
```go
c.XHR() bool
```
{% endcode %}

{% code title="Example" %}
```go
// X-Requested-With: XMLHttpRequest

app.Get("/", func(c *fiber.Ctx) {
  c.XHR() // true
})
```
{% endcode %}

