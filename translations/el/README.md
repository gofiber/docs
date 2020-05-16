---
description: Μια τεκμηρίωση API, ώστε να μπορείτε να ξεκινήσετε τη δημιουργία εφαρμογών με το Fiber.
---

# 📖 Εισαγωγή

 [![](https://img.shields.io/github/release/gofiber/fiber?style=flat-square)](https://github.com/gofiber/fiber/releases)  [![](https://img.shields.io/badge/go.dev-007d9c?logo=go&logoColor=white&style=flat-square
)](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc)   [![](https://goreportcard.com/badge/github.com/gofiber/fiber?style=flat-square
)](https://goreportcard.com/report/github.com/gofiber/fiber)  [![](https://img.shields.io/badge/coverage-91%25-brightgreen?style=flat-square
)](https://gocover.io/github.com/gofiber/fiber)  [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Test?label=tests&style=flat-square
)](https://github.com/gofiber/fiber/actions?query=workflow%3ATest)  [![](https://img.shields.io/github/workflow/status/gofiber/fiber/Gosec?label=gosec&style=flat-square
)](https://github.com/gofiber/fiber/actions?query=workflow%3AGosec)

Το **Fiber** είναι ένα διαδικτυακό πλαίσιο εμπνευσμένο από την [Express](https://github.com/expressjs/express)  πάνω από το [Fasthttp](https://github.com/valala/fasthttp), τον  **ταχύτερο**  κινητήρα HTTP για τ [Go](https://golang.org/doc/). Σχεδιασμένο για να  **διευκολύνει** τα πράγματα για **γρήγορη** ανάπτυξη με **μηδενική**  κατανομή μνήμης.

## Installation

Πρώτα απ 'όλα, [ κατεβάστε ](https://golang.org/dl/) και εγκαταστήστε το Go. ` 1.11 ` ή υψηλότερη απαιτείται.

Η εγκατάσταση γίνεται έτσι [ ` go get ` ](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them):

```bash
go get -u github.com/gofiber/fiber
```

## Hello, World!

Το ενσωματωμένο παρακάτω είναι ουσιαστικά η πιο απλή εφαρμογή **Fiber**, την οποία μπορείτε να δημιουργήσετε.

```go
package main

import "github.com/gofiber/fiber"

func main() {
  app := fiber.New()

  app.Get("/", func(c *fiber.Ctx) {
    c.Send("Hello, World!")
  })

  app.Listen(3000)
}
```

```text
go run server.go
```

Ανοίξτε το ` http: // localhost: 3000 ` και θα πρέπει να δείτε τη σελίδα ` Hello, World! `.

## Basic routing

Η δρομολόγηση αναφέρεται στον προσδιορισμό του τρόπου με τον οποίο μια εφαρμογή ανταποκρίνεται σε ένα αίτημα χρήστη σε ένα συγκεκριμένο endpoint, το οποίο είναι ένα URI \ (ή διαδρομή \) και μια συγκεκριμένη μέθοδο αιτήματος HTTP \ (GET, PUT, POST και ούτω καθεξής \).

{% hint style="info" %}
Κάθε διαδρομή μπορεί να έχει ** πολλές λειτουργίες χειριστή **, οι οποίες εκτελούνται όταν η διαδρομή ταιριάζει.
{% endhint %}

Ο ορισμός της διαδρομής έχει τις ακόλουθες δομές:

```go
// Function signature
app.Method(path string, ...func(*fiber.Ctx))
```

* Το ` app ` είναι μια παρουσία του ** Fiber **.
* ` Method ` είναι μια [ μέθοδος αιτήματος HTTP ](https://fiber.wiki/application#methods), με κεφαλαία γράμματα: `Get`, `Put`, `Post` κ.λπ.
* Το ` path ` είναι μια εικονική διαδρομή στο διακομιστή.
* Το ` func (* fiber.Ctx) ` είναι μια συνάρτηση επανάκλησης που περιέχει το [ Context ](https://fiber.wiki/context) που εκτελείται κατά την αντιστοίχιση της διαδρομής.

**Απλή διαδρομή**

```go
// Respond with "Hello, World!" on root path, "/"
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")
})
```

**Παράμετροι**

```go
// GET http://localhost:8080/hello%20world

app.Get("/:value", func(c *fiber.Ctx) {
  c.Send("Get request with value: " + c.Params("value"))
  // => Get request with value: hello world
})
```

**Προαιρετικές παράμετροι**

```go
// GET http://localhost:3000/john

app.Get("/:name?", func(c *fiber.Ctx) {
  if c.Params("name") != "" {
    c.Send("Hello " + c.Params("name"))
    // => Hello john
  } else {
    c.Send("Where is john?")
  }
})
```

**Wildcard**

```go
// GET http://localhost:3000/api/user/john

app.Get("/api/*", func(c *fiber.Ctx) {
  c.Send("API path: " + c.Params("*"))
  // => API path: user/john
})
```

## Static files

Για προβολή στατικών αρχείων, όπως ** εικόνες **, ** CSS ** και ** JavaScript ** αρχεία, αντικαταστήστε το χειριστή λειτουργιών σας με μια συμβολοσειρά αρχείου ή καταλόγου.

Function signature:

```go
app.Static(prefix, root string)
```

Χρησιμοποιήστε τον ακόλουθο κώδικα για την προβολή αρχείων σε ένα κατάλογο με το όνομα `./public `:

```go
app := fiber.New()

app.Static("/", "./public") 

app.Listen(8080)
```

Τώρα μπορείτε να φορτώσετε τα αρχεία που βρίσκονται στον κατάλογο `./public `:

```bash
http://localhost:8080/hello.html
http://localhost:8080/js/jquery.js
http://localhost:8080/css/style.css
```

