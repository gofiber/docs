---
description: >-
  An online API documentation with examples so you can start building web apps with Fiber right away!
---

# 📖 Εισαγωγή

Το **Fiber** είναι ένα διαδικτυακό πλαίσιο εμπνευσμένο από την [Express](https://github.com/expressjs/express)  πάνω από το [Fasthttp](https://github.com/valala/fasthttp), τον  **ταχύτερο**  κινητήρα HTTP για τ [Go](https://golang.org/doc/). Σχεδιασμένο για να  **διευκολύνει** τα πράγματα για **γρήγορη** ανάπτυξη με **μηδενική**  κατανομή μνήμης.

## Installation

Πρώτα απ 'όλα, [ κατεβάστε ](https://golang.org/dl/) και εγκαταστήστε το Go. ` 1.11 ` ή υψηλότερη απαιτείται.

Η εγκατάσταση γίνεται έτσι [ ` go get ` ](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them):

```bash
go get -u github.com/gofiber/fiber
```

## Zero Allocation

{% hint style="warning" %}
Some values returned from [**fiber.Ctx**](ctx.md) are **not** immutable by default
{% endhint %}

Because fiber is optimized for **high performance**, values returned from [**fiber.Ctx**](ctx.md) are **not** immutable by default and **will** be re-used across requests. As a rule of thumb, you **must** only use context values within the handler, and you **must not** keep any references. As soon as you return from the handler, any values you have obtained from the context will be re-used in future requests and will change below your feet. Here is an example:

```go
func handler(c *fiber.Ctx) {
    result := c.Param("foo") // result is only valid within this method
}
```

If you need to persist such values outside the handler, make copies of their **underlying buffer** using the [copy](https://golang.org/pkg/builtin/#copy) builtin. Here is an example for persisting a string:

```go
func handler(c *fiber.Ctx) {
    result := c.Param("foo") // result is only valid within this method
    newBuffer := make([]byte, len(result))
    copy(newBuffer, result)
    newResult := string(newBuffer) // newResult is immutable and valid forever
}
```

Alternatively, you can also use the[ **Immutable setting**](app.md#settings). It will make all values returned from the context immutable, allowing you to persist them anywhere. Of course, this comes at the cost of performance.

For more information, please check ****[**\#426**](https://github.com/gofiber/fiber/issues/426) and ****[**\#185**](https://github.com/gofiber/fiber/issues/185).

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


## Note

For more information on how to build APIs in Go with Fiber, please check out this awesome article [on building an express-style API in Go with Fiber](https://blog.logrocket.com/express-style-api-go-fiber/)