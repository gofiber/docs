---
description: >-
  Middleware is een functie die is geketend in de HTTP request cyclus met toegang
  tot de Context die het gebruikt om een specifieke actie uit te voeren,
  bijvoorbeeld het registreren van elk verzoek of het inschakelen van CORS.
---

# 🧬 Middleware

## Basic Auth

Basic auth middleware biedt een HTTP basic authenticatie. Het roept de volgende handler aan voor geldige inloggegevens en `401 Unauthorized` voor ontbrekende of ongeldige inloggegevens.

**Installatie**

```bash
go get -u github.com/gofiber/basicauth
```

**Signatuur**

```go
basicauth.New(config ...Config) func(*fiber.Ctx)
```

**Configuratie**

| Eigenschap | Type | Omschrijving | Standaardwaarde |
| :--- | :--- | :--- | :--- |
| Filter | `func(*fiber.Ctx) bool` | Definieert een functie om middleware over te slaan. | `nil` |
| Users | `map[string][string]` | Gebruikers definiëren de toegestane inloggegevens. | `nil` |
| Realm | `string` | Realm is een string om het realm-kenmerk te definiëren. | `Restricted` |
| Authorizer | `func(string, string) bool` | Een functie die u kunt doorgeven om de inloggegevens op aangepaste wijze te controleren. | `nil` |
| Unauthorized | `func(*fiber.Ctx)` | Aangepast response gedeelte voor ongeautoriseerde requests. | `nil` |

**Voorbeeld**

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/basicauth"
)

func main() {
  app := fiber.New()

  cfg := basicauth.Config{
    Users: map[string]string{
      "gebruiker":      "wachtwoord",
      "administrator":  "123456",
    },
  }
  app.Use(basicauth.New(cfg))

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Welkom!")
  })

  app.Listen(3000)
}
```

## CORS

CORS middleware implementeert de CORS-specificatie. CORS biedt webservers cross-domein toegangscontroles, die veilige data-overdracht tussen domeinen mogelijk maken.

**Installatie**

```bash
go get -u github.com/gofiber/cors
```

**Signatuur**

```go
cors.New(config ...Config) func(*fiber.Ctx)
```

**Configuratie**

| Eigenschap | Type | Omschrijving | Standaardwaarde |
| :--- | :--- | :--- | :--- |
| Filter | `func(*Ctx) bool` | Definieert een functie om middleware over te slaan. | `nil` |
| AllowOrigins | `[]string` | AllowOrigin definieert een lijst met herkomsten die toegang hebben tot de bron. | `[]string{"*"}` |
| AllowMethods | `[]string` | AllowMethods definieert een lijst met methoden die zijn toegestaan bij benaderen van de bron. Dit wordt gebruikt als response op een preflight-request. | `[]string{"GET", "POST", "HEAD", "PUT", "DELETE", "PATCH"}` |
| AllowCredentials | `string` | AllowCredentials geeft aan of het response op de request al dan niet kan worden weergegeven wanneer de credentials-flag op waar staat. Indien gebruikt als onderdeel van een response op een preflight-request, geeft dit aan of de daadwerkelijke request al dan niet kan worden gedaan met behulp van credentials. | `nil` |
| ExposeHeaders | `[]string` | ExposeHeaders definieert een header met een whitelist waartoe clients toegang hebben. | `nil` |
| MaxAge | `int` | MaxAge geeft aan hoelang \(in seconden\) de resultaten van een preflight-request in de cache kunnen worden opgeslagen. | `0` |

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/cors"
)

func main() {
  app := fiber.New()

  app.Use(cors.New())

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Welkom!")
  })

  app.Listen(3000)
  // curl -H "Origin: http://voorbeeld.nl" --verbose http://localhost:3000
}
```

## Compressie

Deze middleware maakt dynamische compressie mogelijk voor gzip & deflate als je reacties groter zijn dan 4kb. Als de compressie alleen voor statische bestanden dient te worden ingeschakeld, gebruik dan de [**Compression** ](application.md#static)-instelling binnen de [**Static** ](application.md#static)-methode.

**Installatie**

```bash
go get -u github.com/gofiber/compression
```

**Signatuur**

```go
compression.New(config ...Config) func(*fiber.Ctx)
```

**Configuratie**

| Eigenschap | Type | Omschrijving | Standaardwaarde |
| :--- | :--- | :--- | :--- |
| Filter | `func(*Ctx) bool` | Definieert een functie om middleware over te slaan. | `nil` |
| Level | `int` | Mate van compressie, `0`, `1`, `2`, `3`, `4` | `0` |

```go
package main

import 
  "github.com/gofiber/fiber"
  "github.com/gofiber/compression"
)

func main() {
  app := fiber.New()

  app.Use(compression.New())

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Welkom!")
  })

  app.Listen(3000)
}
```

## Limiter

Gebruik deze middleware om herhaalde verzoeken te beperken tot openbare API's en/of endpoints zoals wachtwoordherstel. Deze middleware deelt de status niet met andere processen/servers.

**Installatie**

```bash
go get -u github.com/gofiber/limiter
```

**Signatuur**

```go
limiter.New(config ...Config) func(*Ctx)
```

**Configuratie**

| Eigenschap | Type | Omschrijving | Standaardwaarde |
| :--- | :--- | :--- | :--- |
| Filter | `func(*fiber.Ctx) bool` | Definieert een functie om middleware over te slaan. | `nil` |
| Timeout | `int` | Time-out in seconden voor het bijhouden van verzoeken in het geheugen. | `60` |
| Max | `int` | Maximaal aantal recente verbindingen gedurende `Timeout` seconden voordat een 429-response werd verzonden. | `10` |
| Message | `string` | Response body | `"Too many requests, please try again later."` |
| StatusCode | `int` | Response status code | `429` |
| Key | `func(*Ctx) string` | Een functie waarmee aangepaste sleutels kunnen worden gemaakt. Standaard wordt `c.IP()` gebruikt. | `nil` |
| Handler | `func(*Ctx)` | Handler wordt aangeroepen wanneer een request het limiet bereikt | `nil` |

**Voorbeeld**

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/limiter"
)

func main() {
  app := fiber.New()

  // Maximaal 3 requests per 10 seconden
  cfg := limiter.Config{
    Timeout: 10,
    Max: 3,
  }

  app.Use(limiter.New(cfg))

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Welkom!")
  })

  app.Listen(3000)
}
```

## Logger

Logger middleware logt de informatie over elk HTTP-verzoek.

**Installatie**

```bash
go get -u github.com/gofiber/logger
```

**Signatuur**

```go
logger.new(config ...Config) func(*Ctx)
```

**Configuratie**

| Eigenschap | Type | Omschrijving | Standaardwaarde |
| :--- | :--- | :--- | :--- |
| Filter | `func(*fiber.Ctx) bool` | Definieert een functie om middleware over te slaan. | `nil` |
| Format | `string` | Mogelijke waarden: `time, ip, url, host, method, path, protocol, referer, ua, header:<key>, query:<key>, form:<key>, cookie:<key>` | `"${time} - ${ip} - ${method} ${path}\t${ua}\n"` |
| TimeFormat | `string` | TimeFormat [lees hier meer](https://programming.guide/go/format-parse-string-time-date-example.html) | `15:04:05` |
| Output | `io.Writer` | Output is een writer waar logs worden geschreven | `os.Stderr` |

**Voorbeeld**

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/logger"
)

func main() {
  app := fiber.New()

  app.Use(logger.New())

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Welkom!")
  })

  app.Listen(3000)
}
```

## Recover

Binnen elke route kan worden hersteld paniek-fouten. Standaard zal de Recover middleware reageren met `500 Internal Server Error` wanneer er paniek optreedt. Ook kan er een aangepaste paniek handler worden gespecificeerd.

**Installatie**

```bash
go get -u github.com/gofiber/recover
```

**Signatuur**

```go
recover.New(config ...Config) func(*Ctx)
```

**Voorbeeld**

```go
package main

import (
    "github.com/gofiber/fiber"
    "github.com/gofiber/recover"
)

func main() {
    app := fiber.New()

  // Optioneel
    cfg := recover.Config{
        Handler: func(c *fiber.Ctx, err error) {
            c.SendString(err.Error())
            c.SendStatus(500)
        },
    }

    app.Use(recover.New(cfg))

    app.Get("/", func(c *fiber.Ctx) {
        panic("Hallo, ik ben een paniek-fout!")
    })

    app.Listen(3000)
}
```

## Template

Standaard wordt Fiber komt samen met de [**default HTML template**](https://golang.org/pkg/html/template/) engine, maar deze middleware bevat rendering-engines van derden.

**Installatie**

```bash
go get -u github.com/gofiber/template
```

**Signatuur**

```go
template.Engine() func(raw string, bind interface{}) (out string, err error)
```

**Template Engines**

| Sleutelwoord | Engine |
| :--- | :--- |
| `Amber()` | [github.com/eknkc/amber](https://github.com/eknkc/amber) |
| `Handlebars()` | [github.com/aymerick/raymond](https://github.com/aymerick/raymond) |
| `Mustache()` | [github.com/cbroglie/mustache](https://github.com/cbroglie/mustache) |
| `Pug()` | [github.com/Joker/jade](https://github.com/Joker/jade) |

**Voorbeeld**

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/template"
)

func main() {
  app := fiber.New()

  app.Settings.TemplateEngine = template.Mustache()
  // app.Settings.TemplateEngine = template.Amber()
  // app.Settings.TemplateEngine = template.Handlebars()
  // app.Settings.TemplateEngine = template.Pug()

  app.Get("/", func(c *fiber.Ctx) {
    bind := fiber.Map{
      "naam": "John",
      "leeftijd":  35,
    }
    if err := c.Render("./views/index.mustache", bind); err != nil {
      c.Status(500).Send(err.Error())
    }
    // <html><head><title>Template Demo</title></head>
    // <body>Hii, mijn naam is John en ik ben 35 jaar oud
    // </body></html>
  })

  app.Listen(3000)
}
```

## WebSocket

Fiber ondersteunt een websocket upgrade middleware. De `*Conn` struct heeft alle functionaliteit van de [**gorilla/websocket**](https://github.com/gorilla/websocket) library.

**Installatie**

```bash
go get -u github.com/gofiber/websocket
```

**Signatuur**

```go
websocket.New(handler func(*Conn), config ...Config) func(*Ctx)
```

**Configuratie**

| Eigenschap | Type | Omschrijving | Standaardwaarde |
| :--- | :--- | :--- | :--- |
| HandshakeTimeout | `time.Duration` | Specificeert de duur van de handshake om te voltooien. | `0` |
| Subprotocols | `[]string` | Specificeert de ondersteunde protocollen van de server in volgorde van voorkeur. Als dit veld niet nul is, onderhandelt de upgrade-methode over een subprotocol door de eerste overeenkomst in deze lijst te selecteren met een protocol dat door de client wordt gevraagd. | `nil` |
| Origins | `[]string` | Origins is een string van herkomsten die acceptabel zijn, standaard zijn alle origins toegestaan. | `[]string{"*"}` |
| ReadBufferSize | `int` | ReadBufferSize specificeert I/O-buffergroottes in bytes. | `1024` |
| WriteBufferSize | `int` | WriteBufferSize specificeert I/O-buffergroottes in bytes. | `1024` |
| EnableCompression | `bool` | EnableCompression specificeert of de server moet proberen te onderhandelen per berichtcompressie \(RFC 7692\) | `false` |

**Voorbeeld**

```go
package main

import 
  "github.com/gofiber/fiber"
  "github.com/gofiber/websocket"
)

func main() {
  app := fiber.New()

  app.Use(func(c *fiber.Ctx) {
    c.Locals("Hallo", "Wereld")
    c.Next()
  })

  app.Get("/ws", websocket.New(func(c *websocket.Conn) {
    fmt.Println(c.Locals("Hallo")) // "Wereld"
    // Websocket logica...
    for {
      mt, msg, err := c.ReadMessage()
      if err != nil {
        log.Println("read:", err)
        break
      }
      log.Printf("recv: %s", msg)
      err = c.WriteMessage(mt, msg)
      if err != nil {
        log.Println("write:", err)
        break
      }
    }
  }))

  app.Listen(3000) // ws://localhost:3000/ws
}
```

## Request ID

Request ID voegt een identifier toe aan het verzoek met behulp van de `X-Request-ID` header

**Installatie**

```bash
go get -u github.com/gofiber/requestid
```

**Signatuur**

```go
requestid.New(config ...Config) func(*Ctx)
```

**Configuratie**

| Eigenschap | Type | Omschrijving | Standaardwaarde |
| :--- | :--- | :--- | :--- |
| Filter | `func(*fiber.Ctx) bool` | Definieert een functie om middleware over te slaan. | `nil` |
| Generator | `func(*fiber.Ctx) string` | Generator definieert een functie om een ID te genereren. | `return uuid.New().String()` |

**Voorbeeld**

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/requestid"
)

func main() {
  app := fiber.New()

  app.Use(requestid.New())

  app.Get("/", func(c *fiber.Ctx) {
    c.Send(requestid.Get(c))
  })

  app.Listen(3000)
}
```

## Helmet

Helmet-middleware biedt bescherming tegen cross-site scripting \(XSS\)-aanvallen, content type sniffing, clickjacking, onveilige verbindingen en andere code-injectie-aanvallen.

**Installatie**

```bash
go get -u github.com/gofiber/helmet
```

**Signatuur**

```go
helmet.New(config ...Config) func(*Ctx)
```

**Configuratie**

| Eigenschap | Type | Omschrijving | Standaardwaarde |
| :--- | :--- | :--- | :--- |
| Filter | `func(*fiber.Ctx) bool` | Definieert een functie om middleware over te slaan. | `nil` |
| XSSProtection | `string` | XSSProtection biedt bescherming tegen cross-site scripting attack \(XSS\) door de `X-XSS-Protection`-header in te stellen. | `1; mode=block"` |
| ContentTypeNosniff | `string` | ContentTypeNosniff biedt bescherming tegen het overschrijven van de Content-Type-header door de `X-Content-Type-Options`-header in te stellen. | `"nosniff"` |
| XFrameOptions | `string` | XFrameOptions kan worden gebruikt om aan te geven of een browser al dan niet toestemming moet hebben om een pagina in een ,  of . Sites kunnen dit gebruiken om clickjacking-aanvallen te voorkomen door ervoor te zorgen dat hun inhoud niet is ingesloten in andere sites. Biedt bescherming tegen clickjacking. Mogelijke waarden: `SAMEORIGIN, DENY, ALLOW-FROM uri` | `"SAMEORIGIN"` |
| HSTSMaxAge | `int` | HSTSMaxAge stelt de `Strict-Transport-Security`-header in om aan te geven hoe lang \(in seconds\) browsers moeten onthouden dat deze site alleen toegankelijk is via HTTPS. Dit vermindert uw blootstelling aan enkele SSL-stripping man-in-the-middle \(MITM\)-aanvallen. | \`\` |
| HSTSExcludeSubdomains | `bool` | HSTSExcludeSubdomains zal de tag subdomains niet opnemen in de `Strict Transport Security`-header, met uitsluiting van alle subdomeinen van het beveiligingsbeleid. Het heeft geen effect tenzij HSTSMaxAge is ingesteld op een niet-nulwaarde. | \`\` |
| ContentSecurityPolicy | `string` | ContentSecurityPolicy stelt de `Content-Security-Policy`-header in die beveiliging biedt tegen cross-site scripting \(XSS\), clickjacking en andere code-injectie-aanvallen als gevolg van het uitvoeren van kwaadaardige inhoud in de vertrouwde webpagina-context. | \`\` |
| CSPReportOnly | `bool` |  | \`\` |
| HSTSPreloadEnabled | `bool` |  | \`\` |
| ReferrerPolicy | `string` |  | \`\` |

**Voorbeeld**

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/helmet"
)

func main() {
  app := fiber.New()

  app.Use(helmet.New())

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Welkom!")
  })

  app.Listen(3000)
  // curl -I http://localhost:3000
}
```

## Redirect

Redirects middleware biedt een HTTP-omleiding naar de URL die is afgeleid van het opgegeven pad, met een opgegeven status, een positief geheel getal dat overeenkomt met een HTTP-statuscode.

**Installatie**

```bash
go get -u github.com/gofiber/redirect
```

**Signatuur**

```go
redirect.New(config ...Config) func(*Ctx)
```

**Voorbeeld**

```go
package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/redirect"
)

func main() {
  app := fiber.New()

  app.Use(redirect.New(redirect.Config{
    Rules: map[string]string{
      "/oud":   "/nieuw",
      "/oud/*": "/nieuw/$1",
    },
    StatusCode: 301,
  }))

  app.Get("/nieuw", func(c *fiber.Ctx) {
    c.Send("Hallo, Wereld!")
  })
  app.Get("/nieuw/*", func(c *fiber.Ctx) {
    c.Send("Wildcard: ", c.Params("*"))
  })

  app.Listen(3000)
}
```

