---
description: >-
  Routing verwijst naar hoe de endpoints (URI's) van een applicatie dienen
  te reageren op requests van clients.
---

# 🔌 Routing

## Paden

Route paden, in combinatie met een request methode, definiëren de endpoints waarop requests kunnen worden gedaan. Route paden kunnen **strings** of **stringpatronen** zijn.

**Voorbeelden van route paden op basis van strings**

```go
// Dit route pad koppelt verzoeken aan de root route, "/":
app.Get("/", func(c *fiber.Ctx) {
  c.Send("root")
})

// Dit route pad komt overeen met verzoeken naar "/over":
app.Get("/over", func(c *fiber.Ctx) {
  c.Send("over")
})

// Dit route pad komt overeen met verzoeken naar "/willekeurig.txt":
app.Get("/willekeurig.txt", func(c *fiber.Ctx) {
  c.Send("willekeurig.txt")
})
```

## Parameters

Route parameters zijn **benoemde URL-segmenten** die worden gebruikt om de waarden vast te leggen die zijn opgegeven op hun positie in de URL. De vastgelegde waarden kunnen worden opgehaald met de [Params](https://fiber.wiki/context#params)-functie, met de naam van de route parameter die in het pad is opgegeven als hun respectievelijke sleutels.

{% hint style="info" %}
De naam van de route parameter moet worden opgemaakt uit de **karakters** \(`[A-Za-z0-9_]`\).
{% endhint %}

{% hint style="danger" %}
Het koppelteken \(`-`\) wordt nog **niet** letterlijk geïnterpreteerd. Gepland voor **Fiber** v1.9.
{% endhint %}

**Voorbeeld van het definiëren van routes met route parameters**

```go
// Parameters
app.Get("/gebruiker/:naam/boek/:titel", func(c *fiber.Ctx) {
  c.Write(c.Params("name"))
  c.Write(c.Params("titel"))
})
// Wildcard
app.Get("/gebruiker/*", func(c *fiber.Ctx) {
  c.Send(c.Params("*"))
})
// Optionele parameter
app.Get("/gebruiker/:naam?", func(c *fiber.Ctx) {
  c.Send(c.Params("naam"))
})
```

## Middleware

Functies die zijn ontworpen om wijzigingen aan te brengen in de request of response, worden **middleware-functies** genoemd. De [Next](https://github.com/gofiber/docs/tree/34729974f7d6c1d8363076e7e88cd71edc34a2ac/context/README.md#next) is een **Fiber** -router functie, wanneer deze wordt aangeroepen, wordt de **next**-functie uitgevoerd dat **overeenkomt met** de huidige route.

**Voorbeeld van een middleware-functie**

```go
app.Use(func(c *fiber.Ctx) {
  // Stel enkele beveiligingsheaders in
  c.Set("X-XSS-Protection", "1; mode=block")
  c.Set("X-Content-Type-Options", "nosniff")
  c.Set("X-Download-Options", "noopen")
  c.Set("Strict-Transport-Security", "max-age=5184000")
  c.Set("X-Frame-Options", "SAMEORIGIN")
  c.Set("X-DNS-Prefetch-Control", "off")

  // Ga naar de volgende middleware:
  c.Next()
})

app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hallo, Wereld!")
})
```

Het pad van de `Use`-methode is een **mount** of **prefix** pad en beperkt middleware om alleen van toepassing te zijn op de aangevraagde paden die ermee beginnen. Dit betekent dat het gebruik van `:params` niet te combineren is met de `Use`-methode.

## Groepering

Als u veel endpoints heeft, kunt u uw routes organiseren met `Group`

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

