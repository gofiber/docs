---
description: De applicatie-instantie duidt conventioneel de Fiber-applicatie aan.
---

# 🚀 Applicatie

## Nieuw

Deze methode maakt een nieuwe instance **App** aan.
Optionele [instellingen ](application.md#instellingen)kunnen worden doorgegeven bij het aanmaken van een nieuwe instance.

{% code title="Signatuur" %}
```go
fiber.New(settings ...Settings) *App
```
{% endcode %}

{% code title="Voorbeeld" %}
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

## Instellingen

Instellingen voor de applicatie kunnen worden doorgegeven tijdens het aanroepen van de `New` functie.

{% code title="Voorbeeld" %}
```go
func main() {
    // Geef instellingen door tijdens het maken van een nieuwe instance
    app := fiber.New(fiber.Settings{
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

Of wijzig de instellingen na het initialiseren van een `app`.

{% code title="Voorbeeld" %}
```go
func main() {
    app := fiber.New()

    // Of wijzig de instellingen na het maken van een instance
    app.Settings.Prefork = true
    app.Settings.CaseSensitive = true
    app.Settings.StrictRouting = true
    app.Settings.ServerHeader = "Fiber"

    // ...

    app.Listen(3000)
}
```
{% endcode %}

**Instellingen** - **fields**

| Eigenschap | Type | Omschrijving | Standaardwaarde |
| :--- | :--- | :--- | :--- |
| Prefork | `bool` | Maakt gebruik van de [`SO_REUSEPORT` ](https://lwn.net/Articles/542629/)socket optie mogelijk. Hierdoor ontstaan meerdere Go-processen die op dezelfde poort luisteren. lees meer over [socket sharding](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/). | `false` |
| ServerHeader | `string` | Stelt de HTTP-header van `Server` in met de opgegeven waarde. | `""` |
| StrictRouting | `bool` | Indien ingeschakeld, behandelt de router `/foo` en `/foo/` als verschillend. Anders behandelt de router `/foo` en `/foo/` als hetzelfde. | `false` |
| CaseSensitive | `bool` | Indien ingeschakeld, behandelt de router `/Foo` en `/foo` als verschillend. Indien uitgeschakeld, worden `/Foo` en `/foo` op dezelfde manier behandeld. | `false` |
| Immutable | `bool` | Indien ingeschakeld, worden alle waarden teruggegeven door de context methodes onveranderlijk. Standaard zijn deze geldig tot de terugkeer van de handler, zie issue [\#185](https://github.com/gofiber/fiber/issues/185). | `false` |
| BodyLimit | `int` | Stelt de maximaal toegestane grootte in voor de body van een request, als de grootte dit limiet overschrijdt, stuurt de instance een `413 - Request Entity Too Large` response retour. | `4 * 1024 * 1024` |
| TemplateEngine | `func(raw string, bind interface{}) (string, error)` | Een aangepaste template functie om verschillende template-talen weer te geven. Zie onze [**Template Middleware**](middleware.md#template) voor presets. | `nil` |
| TemplateFolder | `string` | Een pad voor de views van de applicatie. Als er een pad is ingesteld, wordt deze gebruikt als voorvoegsel voor alle template paden. `c.Render("home", data) -> ./views/home.pug` | `""` |
| TemplateExtension | `string` | Een vooraf ingestelde bestandsextensie van de template bestanden, waardoor het opgeven van de volledige bestandsnaam in de functie Render vervalt: `c.Render("home", data) -> home.pug` | `"html"` |
| ReadTimeout | `time.Duration` | De hoeveelheid tijd die is toegestaan om de volledige request, inclusief body, te lezen. Deze time-out is standaard onbeperkt. | `nil` |
| WriteTimeout | `time.Duration` | De hoeveelheid tijd voordat de time-out van de response wordt geschreven. Deze time-out is standaard onbeperkt. | `nil` |
| IdleTimeout | `time.Duration` | De hoeveelheid tijd om te wachten op de volgende request wanneer keep-alive is ingeschakeld. Als IdleTimeout nul is, wordt de waarde van ReadTimeout gebruikt. | `nil` |

## Statische bestanden

Gebruik de **Static** methode om statische bestanden zoals **afbeeldingen**, **CSS** en **JavaScript** weer te geven.

{% hint style="info" %}
Standaard zal **Static** `index.html`-bestanden weergeven als response op een request in een directory.
{% endhint %}

{% code title="Signatuur" %}
```go
app.Static(prefix, root string, config ...Static) // => met prefix
```
{% endcode %}

Gebruik de volgende code om bestanden weer te geven in een directory met de naam `./public`

{% code title="Voorbeeld" %}
```go
app.Static("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css
```
{% endcode %}

Om vanuit bestanden meerdere mappen aan te bieden, kunt u **Static** meerdere keren gebruiken.

{% code title="Voorbeeld" %}
```go
// Bied bestanden vanuit de "./public" directory aan:
app.Static("/", "./public")

// Bied bestanden vanuit de "./bestanden" directory aan:
app.Static("/", "./bestanden")
```
{% endcode %}

{% hint style="info" %}
Gebruik een reverse proxy-cache zoals [**NGINX**](https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/) om de prestaties van de weergave van statische bestanden te verbeteren.
{% endhint %}

U kunt elk prefix van een virtueel pad gebruiken \(_als het pad niet echt in het bestandssysteem bestaat_\) voor bestanden die worden aangeboden met de **Static**-methode, specificeer een prefixpad voor de statische directory, zoals hieronder wordt weergegeven:

{% code title="Voorbeeld" %}
```go
app.Static("/static", "./public")

// => http://localhost:3000/static/hello.html
// => http://localhost:3000/static/js/jquery.js
// => http://localhost:3000/static/css/style.css
```
{% endcode %}

Voor meer controle over de instellingen voor het weergeven van statische bestanden, kan er gebruik worden gemaakt van de `fiber.Static` struct om specifieke instellingen in te schakelen.

{% code title="fiber.Static{}" %}
```go
// De struct Static staat voor de instellingen voor het weergeven van statische bestanden
type Static struct {
    // Comprimeert de response indien ingesteld op true
    // Deze instelling werkt anders dan de github.com/gofiber/compression middleware
    // De server probeert het CPU-gebruik te minimaliseren door gecomprimeerde bestanden in de cache op te slaan.
    // Het voegt ".fiber.gz" toe aan de oorspronkelijke bestandsnaam.
    // Optioneel. Standaardwaarde false
    Compress bool
    // Maakt byte range requests mogelijk indien ingesteld op true.
    // Optioneel. Standaardwaarde false
    ByteRange bool
    // Schakelt het bladeren door mappen in.
    // Optioneel. Standaardwaarde false
    Browse bool
    // Indexbestand voor het aanbieden van een directory.
    // Optioneel. Standaardwaarde "index.html".
    Index string
}
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Static("/", "./public", fiber.Static{
  Compress:   true,
  ByteRange:  true,
  Browse:     true,
  Index:      "john.html"
})
```
{% endcode %}

## HTTP Methoden

Routeert een HTTP-verzoek, waarbij **METHOD** de [HTTP-methode](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) van het verzoek is.

{% code title="Signaturen" %}
```go
// HTTP-methoden ondersteunen :param, :optioneel? en *wildcards
// Een pad naar elke methode moet worden doorgegeven
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

// Use() zal alleen overeenkomen met het begin van elk pad
// bijvoorbeeld; "/john" komt overeen met "/john/doe" en "/johnnnn"
// Use() ondersteunt geen :param & :optioneel? in een pad
app.Use(handlers ...func(*Ctx))
app.Use(prefix string, handlers ...func(*Ctx)) *Fiber
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
app.Use("/api", func(c *fiber.Ctx) {
  c.Set("X-Aangepaste-Header", random.String(32))
  c.Next()
})
app.Get("/api/lijst", func(c *fiber.Ctx) {
  c.Send("Ik ben een GET request!")
})
app.Post("/api/registeer", func(c *fiber.Ctx) {
  c.Send("Ik ben een POST request!")
})
```
{% endcode %}

## Groepen

U kunt routes groeperen door een `* Groep` struct te maken.

**Signatuur**

```go
app.Group(prefix string, handlers ...func(*Ctx)) *Group
```

**Voorbeeld**

```go
func main() {
  app := fiber.New()

  api := app.Group("/api", cors())  // /api

  v1 := api.Group("/v1", mysql())   // /api/v1
  v1.Get("/lijst", handler)         // /api/v1/lijst
  v1.Get("/gebruiker", handler)     // /api/v1/gebruiker

  v2 := api.Group("/v2", mongodb()) // /api/v2
  v2.Get("/lijst", handler)         // /api/v2/lijst
  v2.Get("/gebruiker", handler)     // /api/v2/gebruiker

  app.Listen(3000)
}
```

## Listen

Bindt en luistert naar verbindingen op het opgegeven adres. Dit kan een `int` zijn voor poort of `string` voor adres.

{% code title="Signatuur" %}
```go
app.Listen(address interface{}, tls ...*tls.Config) error
```
{% endcode %}

{% code title="Voorbeelden" %}
```go
app.Listen(8080)
app.Listen("8080")
app.Listen(":8080")
app.Listen("127.0.0.1:8080")
```
{% endcode %}

Om **TLS/HTTPS** in te schakelen, kunt u een [**TLS-configuratie**](https://golang.org/pkg/crypto/tls/#Config) toevoegen.

{% code title="Voorbeeld" %}
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

Aangepaste [`net.Listener`](https://golang.org/pkg/net/#Listener) kunenn worden doorgegeven met de `Serve`-methode.

{% code title="Signatuur" %}
```go
app.Serve(ln net.Listener, tls ...*tls.Config) error
```
{% endcode %}

{% hint style="warning" %}
**Serve** ondersteunt de functie ****[**Prefork** ](application.md # instellingen)niet.
{% endhint %}

{% code title="Voorbeeld" %}
```go
if ln, err = net.Listen("tcp4", ":8080"); err != nil {
    log.Fatal(err)
}

app.Serve(ln)
```
{% endcode %}

## Test

Het testen van uw applicatie kan met de **Test**-methode. Gebruik deze methode voor het maken van `_test.go`-bestanden of wanneer u uw routeringslogica moet debuggen. De standaard time-out is `200ms`; als de time-out volledig dient te worden uitgeschakeld, geef dan `-1` door als tweede argument.

{% code title="Signatuur" %}
```go
app.Test(req *http.Request, msTimeout ...int) (*http.Response, error)
```
{% endcode %}

{% code title="Voorbeeld" %}
```go
// Maak een route met de GET-methode voor testen:
app.Get("/", func(c *Ctx) {
  fmt.Println(c.BaseURL())              // => http://google.nl
  fmt.Println(c.Get("X-Aangepaste-Header")) // => hoi

  c.Send("Hallo, Wereld!")
})

// http.Request
req, _ := http.NewRequest("GET", "http://google.nl", nil)
req.Header.Set("X-Aangepaste-Header", "hoi")

// http.Response
resp, _ := app.Test(req)

// Doe iets met de resultaten:
if resp.StatusCode == 200 {
  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println(string(body)) // => Hallo, Wereld!
}
```
{% endcode %}

