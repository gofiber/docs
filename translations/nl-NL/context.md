---
description: >-
  De Ctx struct vertegenwoordigt de Context die het HTTP-request en
  response bevat. Het heeft methoden voor de request query-reeks, parameters,
  body, HTTP-headers enzovoort.
---

# 🧠 Context

## Accepts

Controleert of de opgegeven **extensies** of **content** **types** acceptabel zijn.

{% hint style="info" %}
Gebaseerd op de HTTP [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept)-header van de request.
{% endhint %}

{% code title="Signatuur" %}
```go
c.Accepts(types ...string)                 string
c.AcceptsCharsets(charsets ...string)      string
c.AcceptsEncodings(encodings ...string)    string
c.AcceptsLanguages(langs ...string)        string
```
{% endcode %}

{% code title="Voorbeeld" %}
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

Fiber biedt vergelijkbare functies voor de andere accept-headers.

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

Voegt de opgegeven **waarde** toe aan het HTTP response headerveld.

{% hint style="warning" %}
Als de header **niet** al is ingesteld, wordt de header met de opgegeven waarde gemaakt.
{% endhint %}

{% code title="Signatuur" %}
```go
c.Append(field, values ...string)
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Append("Link", "http://google.nl", "http://localhost")
  // => Link: http://localhost, http://google.nl

  c.Append("Link", "Test")
  // => Link: http://localhost, http://google.nl, Test
})
```
{% endcode %}

## Attachment

Stelt het HTTP-response [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)-headerveld in op `attachment`.

{% code title="Signatuur" %}
```go
c.Attachment(file ...string)
```
{% endcode %}

{% code title="Voorbeeld" %}
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

Retourneert de basis-URL \(**protocol** + **host**\) als een `string`.

{% code title="Signatuur" %}
```go
c.BaseURL() string
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
// GET https://google.nl/page#chapter-1

app.Get("/", func(c *fiber.Ctx) {
  c.BaseURL() // https://google.nl
})
```
{% endcode %}

## Body

Bevat de **raw body** ingediend in een **POST** request.

{% code title="Signatuur" %}
```go
c.Body(key ...string) string
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
// curl -X POST http://localhost:8080 -d gebruiker=john

app.Post("/", func(c *fiber.Ctx) {
  // Verkrijg de raw body van POST-request:
  c.Body() // gebruiker=john

  // Verkrijg body waarde door een specifieke key:
  c.Body("gebruiker") // "john"
})
```
{% endcode %}

## BodyParser

Bindt de request body aan een struct. `BodyParser` ondersteunt het decoderen van queryparameters en de volgende inhoudstypen op basis van de `Content-Type` header:

* `application/json`
* `application/xml`
* `application/x-www-form-urlencoded`
* `multipart/form-data`

{% code title="Signatuur" %}
```go
c.BodyParser(out interface{}) error
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
// Veldnamen moeten beginnen met een hoofdletter
type Persoon struct {
	Naam string `json:"naam" xml:"naam" form:"naam" query:"naam"`
	Pass string `json:"pass" xml:"pass" form:"pass" query:"pass"`
}

app.Post("/", func(c *fiber.Ctx) {
		p := new(Persoon)

		if err := c.BodyParser(p); err != nil {
			log.Fatal(err)
		}

		log.Println(p.Naam) // john
		log.Println(p.Pass) // doe
})
// Voer tests uit met de volgende curl-opdrachten

// curl -X POST -H "Content-Type: application/json" --data "{\"naam\":\"john\",\"pass\":\"doe\"}" localhost:3000

// curl -X POST -H "Content-Type: application/xml" --data "<login><naam>john</naam><pass>doe</pass></login>" localhost:3000

// curl -X POST -H "Content-Type: application/x-www-form-urlencoded" --data "naam=john&pass=doe" localhost:3000

// curl -X POST -F naam=john -F pass=doe http://localhost:3000

// curl -X POST "http://localhost:3000/?naam=john&pass=doe"
```
{% endcode %}

## ClearCookie

Laat een client cookie verlopen \(_of alle cookies indien leeg gelaten\)_

{% code title="Signatuur" %}
```go
c.ClearCookie(key ...string)
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  // Wist alle cookies:
  c.ClearCookie()

  // Vervalt specifieke cookie op naam:
  c.ClearCookie("gebruiker")

  // Vervalt meerdere cookies op naam:
  c.ClearCookie("token", "sessie", "track_id", "versie")
})
```
{% endcode %}

## Cookie

Cookie instellen

**Signatuur**

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

{% code title="Voorbeeld" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  // Maak een cookie
  cookie := new(fiber.Cookie)
  cookie.Name = "john"
  cookie.Value = "doe"
  cookie.Expires = time.Now().Add(24 * time.Hour)

  // Stel de cookie in
  c.Cookie(cookie)
})
```
{% endcode %}

## Cookies

Verkrijg cookies.

**Signatuur**

```go
c.Cookies(key ...string) string
```

{% code title="Voorbeeld" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  // Krijg raw cookie header:
  c.Cookies() // name=john;

  // Krijg cookie met key:
  c.Cookies("name") // "john"
})
```
{% endcode %}

## Download

Brengt het bestand van het pad over als een `attachment`.

Meestal zullen browsers de gebruiker vragen om te downloaden. Standaard is de [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)-header `filename=` parameter het bestandspad \(_dit verschijnt normaal gesproken in het browserdialoogvenster_\).

Overschrijf deze standaard met de parameter **filename**.

{% code title="Signatuur" %}
```go
c.Download(path, filename ...string)
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Download("./files/report-12345.pdf")
  // => Download report-12345.pdf

  c.Download("./files/report-12345.pdf", "report.pdf")
  // => Download report.pdf
})
```
{% endcode %}

## Fasthttp

Alle **Fasthttp**-methoden en -eigenschappen zijn **toegankelijk** en kunnen nogsteeds worden gebruikt.

**Signatuur**

{% hint style="info" %}
Lees de [Fasthttp Documentatie](https://pkg.go.dev/github.com/valyala/fasthttp?tab=doc) voor meer informatie.
{% endhint %}

**Voorbeeld**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Fasthttp.Request.Header.Method()
  // => []byte("GET")

  c.Fasthttp.Response.Write([]byte("Hallo, Wereld!"))
  // => "Hallo, Wereld!"
})
```

## Error

Dit bevat de foutinformatie die door paniek is veroorzaakt of is doorgegeven via de [`Next(err)`](https://github.com/gofiber/docs/tree/8d965e1e05fb67f965934586c78335ef29f52128/context/README.md#error)-methode.

{% code title="Signatuur" %}
```go
c.Error() error
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
func main() {
  app := fiber.New()
  app.Post("/api/registreer", func (c *fiber.Ctx) {
    if err := c.JSON(&User); err != nil {
      c.Next(err)
    }
  })
  app.Get("/api/gebruiker", func (c *fiber.Ctx) {
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
```
{% endcode %}

## Format

Voert inhoudonderhandeling uit op de [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTP header. Het gebruikt [Accepts](context.md#accepts) om een juist formaat te selecteren.

{% hint style="info" %}
Als de header **niet** gespecificeerd is of als er **geen** de juiste indeling is, wordt **text/plain** gebruikt.
{% endhint %}

{% code title="Signatuur" %}
```go
c.Format(body interface{})
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  // Accept: text/plain
  c.Format("Hallo, Wereld!")
  // => Hallo, Wereld!

  // Accept: text/html
  c.Format("Hallo, Wereld!")
  // => <p>Hallo, Wereld!</p

  // Accept: application/json
  c.Format("Hallo, Wereld!")
  // => "Hallo, Wereld!"
})
```
{% endcode %}

## FormFile

MultipartForm-bestanden kunnen op naam worden opgehaald, het **eerst** bestand van de opgegeven key wordt geretourneerd.

{% code title="Signatuur" %}
```go
c.FormFile(name string) (*multipart.FileHeader, error)
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Post("/", func(c *fiber.Ctx) {
  // Haal het eerste bestand op uit het form-veld "document":
  file, err := c.FormFile("document")

  // Controleer op fouten:
  if err == nil {
    //Sla het bestand op in de root directory:
    c.SaveFile(file, fmt.Sprintf("./%s", file.Filename))
  }
})
```
{% endcode %}

## FormValue

MultipartForm-waarden kunnen op naam worden opgehaald, de **eerste** waarde van de gegeven sleutel wordt geretourneerd.

{% code title="Signatuur" %}
```go
c.FormValue(name string) string
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Post("/", func(c *fiber.Ctx) {
  // Haal de eerste waarde uit het form-veld "naam":
  c.FormValue("naam")
  // => "john" of "" als deze niet bestaat
})
```
{% endcode %}

## Fresh

[https://expressjs.com/en/4x/api.html\#req.fresh](https://expressjs.com/en/4x/api.html#req.fresh)

{% hint style="info" %}
Nog niet geïmplementeerd, pull-aanvragen zijn welkom!
{% endhint %}

## Get

Retourneert de HTTP request header die is opgegeven per veld.

{% hint style="success" %}
De match is **niet hoofdlettergevoelig**.
{% endhint %}

{% code title="Signatuur" %}
```go
c.Get(field string) string
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Get("Content-Type") // "text/plain"
  c.Get("CoNtEnT-TypE") // "text/plain"
  c.Get("ietsanders")    // ""
})
```
{% endcode %}

## Hostname

Bevat de hostnaam die is afgeleid van de [Host](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host) HTTP header.

{% code title="Signatuur" %}
```go
c.Hostname() string
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
// GET http://google.nl/search

app.Get("/", func(c *fiber.Ctx) {
  c.Hostname() // "google.nl"
})
```
{% endcode %}

## IP

Retourneert het externe IP-adres van het verzoek.

{% code title="Signatuur" %}
```go
c.IP() string
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.IP() // "127.0.0.1"
})
```
{% endcode %}

## IPs

Retourneert een array met IP-adressen die zijn opgegeven in de [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For) HTTP request header.

{% code title="Signatuur" %}
```go
c.IPs() []string
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
// X-Forwarded-For: proxy1, 127.0.0.1, proxy3

app.Get("/", func(c *fiber.Ctx) {
  c.IPs() // ["proxy1", "127.0.0.1", "proxy3"]
})
```
{% endcode %}

## Is

Geeft het overeenkomende **content type**, als de binnenkomende HTTP request header [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) overeenkomt met het [MIME type](https://developer.mozilla.org/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types) gespecificeerd door de parameter type.

{% hint style="info" %}
Als het verzoek **geen** body heeft, wordt **false** gegeven.
{% endhint %}

{% code title="Signatuur" %}
```go
c.Is(t string) bool
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
// Content-Type: text/html; charset=utf-8

app.Get("/", func(c *fiber.Ctx) {
  c.Is("html")  // true
  c.Is(".html") // true
  c.Is("json")  // false
})
```
{% endcode %}

## JSON

Converteert elke **interface** of **string** naar JSON met behulp van [Jsoniter](https://github.com/json-iterator/go).

{% hint style="info" %}
JSON stelt ook de content header in op **application/json**.
{% endhint %}

{% code title="Signatuur" %}
```go
c.JSON(v interface{}) error
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
type SomeStruct struct {
  Naam     string
  Leeftijd uint8
}

app.Get("/json", func(c *fiber.Ctx) {
  // Maak een data struct:
  data := SomeStruct{
    Naam: "Grame",
    Leeftijd:  20,
  }

  c.JSON(data)
  // => Content-Type: application/json
  // => "{"Naam": "Grame", "Leeftijd": 20}"

  c.JSON(fiber.Map{
    "naam": "Grame",
    "leeftijd": 20,
  })
  // => Content-Type: application/json
  // => "{"naam": "Grame", "leeftijd": 20}"
})
```
{% endcode %}

## JSONP

Stuurt een JSON-antwoord met JSONP-ondersteuning. Deze methode is identiek aan [JSON](context.md#json), behalve dat deze zich aanmeldt voor JSONP-callback-ondersteuning. Standaard is de callback naam; callback.

Overschrijf dit door een **benoemde string** door te geven in de methode.

{% code title="Signatuur" %}
```go
c.JSONP(v interface{}, callback ...string) error
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
type SomeStruct struct {
  naam     string
  leeftijd uint8
}

app.Get("/", func(c *fiber.Ctx) {
  // Maak een data struct:
  data := SomeStruct{
    naam: "Grame",
    leeftijd:  20,
  }

  c.JSONP(data)
  // => callback({"naam": "Grame", "leeftijd": 20})

  c.JSONP(data, "aangepasteFunctie")
  // => aangepasteFunctie({"naam": "Grame", "leeftijd": 20})
})
```
{% endcode %}

## Links

Voegt de links gevolgd door de eigenschap toe om het [Link](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Link) HTTP-headerveld van de response in te vullen.

{% code title="Signatuur" %}
```go
c.Links(link ...string)
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Link(
    "http://localhost:8080/api/gebruikers?page=2", "next",
    "http://localhost:8080/api/gebruikers?page=5", "last",
  )
  // Link: <http://localhost:8080/api/gebruikers?page=2>; rel="next",
  //       <http://localhost:8080/api/gebruikers?page=5>; rel="last"
})
```
{% endcode %}

## Locals

Methode die stringvariabelen opslaat die zijn gericht op de request en daarom alleen beschikbaar zijn voor de routes die overeenkomen met de request.

{% hint style="success" %}
Dit is handig als u bepaalde **specifieke** gegevens wilt doorgeven aan de volgende middleware.
{% endhint %}

{% code title="Signatuur" %}
```go
c.Locals(key string, value ...interface{}) interface{}
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Locals("gebruiker", "admin")
  c.Next()
})

app.Get("/admin", func(c *fiber.Ctx) {
  if c.Locals("gebruiker") == "admin" {
    c.Status(200).Send("Welkom, admin!")
  } else {
    c.SendStatus(403)
    // => 403 Forbidden
  }
})
```
{% endcode %}

## Location

Stelt de HTTP-header [Location](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Location) in op de opgegeven pad parameter.

{% code title="Signatuur" %}
```go
c.Location(path string)
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Post("/", func(c *fiber.Ctx) {
  c.Location("http://localhost:8080")
  c.Location("/foo/bar")
})
```
{% endcode %}

## Method

Bevat een string die overeenkomt met de HTTP-methode van de request: `GET`,` POST`, `PUT` enzovoort.

{% code title="Signatuur" %}
```go
c.Method() string
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Post("/", func(c *fiber.Ctx) {
  c.Method() // "POST"
})
```
{% endcode %}

## MultipartForm

Om toegang te krijgen tot meerdelige formuliervermeldingen, kunt u het binaire bestand ontleden met `MultipartForm()`. Dit geeft een `map[string][]string` terug, dus gezien een sleutel zal de waarde een string slice zijn.

{% code title="Signatuur" %}
```go
c.MultipartForm() (*multipart.Form, error)
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Post("/", func(c *fiber.Ctx) {
  // Ontleed het meerdelige formulier:
  if form, err := c.MultipartForm(); err == nil {
    // => *multipart.Form

    if token := form.Value["token"]; len(token) > 0 {
      // Ontvang de waarde van de key:
      fmt.Println(token[0])
    }

    // Haal alle bestanden uit de key "documenten":
    files := form.File["documents"]
    // => []*multipart.FileHeader

    // Doorloop bestanden:
    for _, file := range files {
      fmt.Println(file.Filename, file.Size, file.Header["Content-Type"][0])
      // => "tutorial.pdf" 360641 "application/pdf"

      // Sla de bestanden op schijf op:
      c.SaveFile(file, fmt.Sprintf("./%s", file.Filename))
    }
  }
})
```
{% endcode %}

## Next

Wanneer **Next** wordt aangeroepen, wordt de volgende methode in de stack uitgevoerd die overeenkomt met de huidige route. U kunt een foutstructuur doorgeven binnen de methode voor aangepaste foutafhandeling.


{% code title="Signatuur" %}
```go
c.Next(err ...error)
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  fmt.Printl("Eerste route!")
  c.Next()
})

app.Get("*", func(c *fiber.Ctx) {
  fmt.Printl("Tweede route!")
  c.Next(fmt.Errorf("Een bepaalde error"))
})

app.Get("/", func(c *fiber.Ctx) {
  fmt.Println(c.Error()) // => "Een bepaalde error"
  fmt.Println("Derde route!")
  c.Send("Hallo, Wereld!")
})
```
{% endcode %}

## OriginalURL

Bevat de oorspronkelijke request URL.

{% code title="Signatuur" %}
```go
c.OriginalURL() string
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
// GET http://localhost:8080/search?q=appel

app.Get("/", func(c *fiber.Ctx) {
  c.OriginalURL() // "/search?q=appel"
})
```
{% endcode %}

## Params

Methode kan worden gebruikt om de route parameters op te halen.

{% hint style="info" %}
Standaardwaarde is lege string \(`""`\), als de parameter **niet** bestaat.
{% endhint %}

{% code title="Signatuur" %}
```go
c.Params(param string) string
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
// GET http://localhost:8080/gebruiker/john

app.Get("/user/:naam", func(c *fiber.Ctx) {
  c.Params("naam") // "john"
})
```
{% endcode %}

## Path

Bevat het pad-gedeelte van de request URL.

{% code title="Signatuur" %}
```go
c.Path() string
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
// GET http://localhost:8080/gebruikers?sort=desc

app.Get("/gebruikers", func(c *fiber.Ctx) {
  c.Path() // "/gebruikers"
})
```
{% endcode %}

## Protocol

Bevat de string van het protocol van de request: `http` or `https` voor **TLS** requests.

{% code title="Signatuur" %}
```go
c.Protocol() string
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
// GET http://localhost:8080

app.Get("/", func(c *fiber.Ctx) {
  c.Protocol() // "http"
})
```
{% endcode %}

## Query

Deze eigenschap is een object dat een eigenschap bevat voor elke query string parameter in de route.

{% hint style="info" %}
Als er **geen** query string is, retourneert deze een **lege string**.
{% endhint %}

{% code title="Signatuur" %}
```go
c.Query(parameter string) string
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
// GET http://localhost:8080/schoenen?order=desc&brand=mike

app.Get("/schoenen", func(c *fiber.Ctx) {
  c.Query("order") // "desc"
  c.Query("brand") // "mike"
})
```
{% endcode %}

## Range

Er wordt een struct met het type en een segment met ranges teruggegeven.

{% code title="Signatuur" %}
```go
c.Range(int size)
```
{% endcode %}

{% code title="Voorbeeld" %}
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

Leidt door naar de URL die is afgeleid van het opgegeven pad, met een opgegeven status, een positief geheel getal dat overeenkomt met een HTTP-statuscode.

{% hint style="info" %}
Indien **niet** gespecificeerd, is de status standaard **302 gevonden**.
{% endhint %}

{% code title="Signatuur" %}
```go
c.Redirect(path string, status ...int)
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Redirect("/foo/bar")
  c.Redirect("../login")
  c.Redirect("http://localhost:8080")
  c.Redirect("http://localhost:8080", 301)
})
```
{% endcode %}

## Render

Geeft een template met gegevens weer en verzendt een `text/html` response. Standaard gebruikt `Render` de [**Go Template engine**](https://golang.org/pkg/html/template/). Lees meer op [**Template middleware**](middleware.md#template) voor het gebruik van een andere template engine.

{% code title="Signatuur" %}
```go
c.Render(file string, data interface{}) error
```
{% endcode %}

## Route

Bevat de overeenkomende [Route](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc#Route) struct.

{% code title="Signatuur" %}
```go
c.Route() *Route
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
// http://localhost:8080/hallo

app.Get("/hallo", func(c *fiber.Ctx) {
  r := c.Route()
  fmt.Println(r.Method, r.Path, r.Params, r.Regexp, r.Handler)
})

app.Post("/:api?", func(c *fiber.Ctx) {
  c.Route()
  // => {GET /hallo [] nil 0x7b49e0}
})
```
{% endcode %}

## SaveFile

De methode wordt gebruikt om **elk** meerdelig bestand op schijf op te slaan.

{% code title="Signatuur" %}
```go
c.SaveFile(fh *multipart.FileHeader, path string)
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Post("/", func(c *fiber.Ctx) {
  // Ontleed het meerdelige formulier:
  if form, err := c.MultipartForm(); err == nil {
    // => *multipart.Form

    // Haal alle bestanden uit de key "documenten":
    files := form.File["documents"]
    // => []*multipart.FileHeader

    // Doorloop bestanden:
    for _, file := range files {
      fmt.Println(file.Filename, file.Size, file.Header["Content-Type"][0])
      // => "tutorial.pdf" 360641 "application/pdf"

      // Sla de bestanden op schijf op:
      c.SaveFile(file, fmt.Sprintf("./%s", file.Filename))
    }
  }
})
```
{% endcode %}

## Secure

Een boolean eigenschap, welke `true` is wanneer er een **TLS**-verbinding tot stand is gebracht.

{% code title="Signatuur" %}
```go
c.Secure() bool
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
// Secure() methode is gelijk aan
c.Protocol() == "https"
```
{% endcode %}

## Send

Stelt de HTTP response body in. De **Send** body kan van elk type zijn.

{% hint style="warning" %}
Send **wordt niet** toegevoegd zoals de [Write](https://fiber.wiki/context#write)-methode.
{% endhint %}

{% code title="Signatuur" %}
```go
c.Send(body ...interface{})
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hallo, Wereld!")         // => "Hallo, Wereld!"
  c.Send([]byte("Hallo, Wereld!")) // => "Hallo, Wereld!"
  c.Send(123)                      // => 123
})
```
{% endcode %}

Fiber biedt ook `SendBytes` & `SendString`-methoden aan voor onbewerkte invoer.

{% hint style="success" %}
Gebruik dit, als u type assertion **niet** nodig heeft, aanbevolen voor **snellere** prestaties.
{% endhint %}

{% code title="Signatuur" %}
```go
c.SendBytes(b []byte)
c.SendString(s string)
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.SendByte([]byte("Hallo, Wereld!"))
  // => "Hallo, Wereld!"

  c.SendString("Hallo, Wereld!")
  // => "Hallo, Wereld!"
})
```
{% endcode %}

## SendFile

Brengt het bestand over van het opgegeven pad. Stelt de [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) HTTP response headerveld in op basis van de **bestandsnamen** extensie.

{% hint style="info" %}
Deze methode gebruikt standaard **gzipping**, stel het in op **false** om uit te schakelen.
{% endhint %}

{% code title="Signatuur" %}
```go
c.SendFile(path string, gzip ...bool)
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Get("/not-found", func(c *fiber.Ctx) {
  c.SendFile("./public/404.html")

  // Zet gzipping uit
  c.SendFile("./static/index.html", false)
})
```
{% endcode %}

## SendStatus

Stelt de statuscode en het juiste statusbericht in de body in, als de responsbody **leeg** is.

{% hint style="success" %}
Je kunt alle gebruikte statuscodes en berichten [hier](https://github.com/gofiber/fiber/blob/dffab20bcdf4f3597d2c74633a7705a517d2c8c2/utils.go#L183-L244) vinden.
{% endhint %}

{% code title="Signatuur" %}
```go
c.SendStatus(status int)
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Get("/not-found", func(c *fiber.Ctx) {
  c.SendStatus(415)
  // => 415 "Unsupported Media Type"

  c.Send("Hallo, Wereld!")
  c.SendStatus(415)
  // => 415 "Hallo, Wereld!"
})
```
{% endcode %}

## Set

Stelt het HTTP-headerveld van de response in op de opgegeven `key`, `value`.

{% code title="Signatuur" %}
```go
c.Set(field, value string)
```
{% endcode %}

{% code title="Voorbeeld" %}
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
Nog niet geïmplementeerd, pull-aanvragen zijn welkom!
{% endhint %}

## Status

Stelt de HTTP-status in voor het antwoord.

{% hint style="info" %}
Methode is **chainable**.
{% endhint %}

{% code title="Signatuur" %}
```go
c.Status(status int)
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Status(200)
  c.Status(400).Send("Bad Request")
  c.Status(404).SendFile("./public/gopher.png")
})
```
{% endcode %}

## Subdomains

Een reeks subdomeinen in de domeinnaam van de request.

De applicatie-eigenschap subdomein-offset, die standaard `2` is, wordt gebruikt om het begin van de subdomeinsegmenten te bepalen.

{% code title="Signatuur" %}
```go
c.Subdomains(offset ...int) []string
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
// Host: "john.doe.localhost"

app.Get("/", func(c *fiber.Ctx) {
  c.Subdomains()  // ["doe", "john"]
  c.Subdomains(1) // ["john"]
})
```
{% endcode %}

## Type

Stelt de [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) HTTP-header in op het MIME-type dat [hier](https://github.com/nginx/nginx/blob/master/conf/mime.types) wordt vermeld door de **bestandsextensie**.

{% code title="Signatuur" %}
```go
c.Type(t string) string
```
{% endcode %}

{% code title="Voorbeeld" %}
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

Voegt het opgegeven headerveld toe aan de [Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary) response header. Hiermee wordt de header toegevoegd, als deze nog niet in de lijst staat, anders blijft deze op de huidige locatie staan.

{% hint style="info" %}
Meerdere velden zijn **toegestaan**.
{% endhint %}

{% code title="Signatuur" %}
```go
c.Vary(field ...string)
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Vary("Origin")     // => Vary: Origin
  c.Vary("User-Agent") // => Vary: Origin, User-Agent

  // Geen duplicaten
  c.Vary("Origin") // => Vary: Origin, User-Agent

  c.Vary("Accept-Encoding", "Accept")
  // => Vary: Origin, User-Agent, Accept-Encoding, Accept
})
```
{% endcode %}

## Write

Voegt **elke** invoer toe aan de HTTP body response.

{% code title="Signatuur" %}
```go
c.Write(body ...interface{})
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Get("/", func(c *fiber.Ctx) {
  c.Write("Hallo, ")         // => "Hallo, "
  c.Write([]byte("Wereld! ")) // => "Hallo, Wereld! "
  c.Write(123)               // => "Hallo, Wereld! 123"
})
```
{% endcode %}

## XHR

Een boolean eigenschap, welke `true` is wanner de request headerveld [X-Requested-With](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) gelijk is aan [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), wat aangeeft dat de request is uitgegeven door een clientbibliotheek \(such as [jQuery](https://api.jquery.com/jQuery.ajax/)\).

{% code title="Signatuur" %}
```go
c.XHR() bool
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
// X-Requested-With: XMLHttpRequest

app.Get("/", func(c *fiber.Ctx) {
  c.XHR() // true
})
```
{% endcode %}

