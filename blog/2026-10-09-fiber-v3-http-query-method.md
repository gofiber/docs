---
slug: fiber-v3-http-query-method
title: "The HTTP QUERY Method in Fiber v3: Searches With a Body"
authors: [fiber-team]
tags: [fiber, v3, http, query, rfc, caching, api, go]
description: "RFC 10008 gives search endpoints a method of their own. How to serve QUERY in Fiber v3, cache it without fragmenting your cache, and avoid the traps around CSRF, CORS, and custom cache keys."
---

Search endpoints have a way of outgrowing their URLs. The filters start small, `?category=shoes&max_price=150`, and then product asks for multi-select categories, tag combinations and price ranges, maybe a saved filter that a dashboard sends verbatim. Eventually the query string is an encoded JSON blob that nobody can read in the access log, and someone moves the endpoint to `POST /search`.

POST works, but it describes the request wrongly. It tells every layer between client and server that the request might change state. Shared caches practically never store POST responses, clients and proxies should not replay it on their own after a dropped connection, and your CSRF middleware demands a token for what is really a read. The IETF has now published RFC 10008, which defines a dedicated [`QUERY` method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/QUERY): safe and idempotent like `GET`, but with a request body. Fiber has supported it as a first-class verb since v3.4.0, released in July.

This post builds a product search on `QUERY` with Fiber v3.5.0, caches it properly, and walks through the places where the new method interacts with middleware you already run. Two of them can serve one user's results to another if you are not careful.

<!-- truncate -->

## What QUERY Actually Promises

`QUERY` sits between the two methods you already know. Like `GET`, it is safe, meaning the client is not asking for any state change, and idempotent, meaning sending it twice has the same effect as sending it once. Like `POST`, it carries its input in the request body, with a `Content-Type` that says how to read it. The response is cacheable, as long as the cache key includes the body.

|              | GET                | POST               | QUERY                  |
| ------------ | ------------------ | ------------------ | ---------------------- |
| Request body | no defined meaning | yes                | yes                    |
| Safe         | yes                | no                 | yes                    |
| Idempotent   | yes                | no                 | yes                    |
| Cacheable    | yes                | rarely in practice | yes, keyed on the body |

The RFC also defines an `Accept-Query` response header, which a server uses to advertise the media types it accepts as query documents. Think of it as the `Accept-Patch` of the search world: a hint for clients and tooling, not something Fiber enforces for you.

The interesting part for a Fiber developer is that "safe" is not just documentation. Fiber's `fiber.IsMethodSafe` returns `true` for `QUERY`, and several built-in middleware make decisions based on that function. We will come back to why that matters.

## A Product Search on QUERY

Here is the complete service. It accepts a JSON query document, validates it, filters an in-memory catalog, and caches results for 30 seconds. The catalog stands in for your database; everything else is how I would ship it.

```go
package main

import (
    "bytes"
    "encoding/json"
    "errors"
    "io"
    "log"
    "slices"
    "time"

    "github.com/gofiber/fiber/v3"
    "github.com/gofiber/fiber/v3/middleware/cache"
)

type Product struct {
    ID         int      `json:"id"`
    Name       string   `json:"name"`
    Category   string   `json:"category"`
    PriceCents int      `json:"price_cents"`
    Tags       []string `json:"tags"`
}

// ProductQuery is the request body of a product search.
type ProductQuery struct {
    Categories    []string `json:"categories"`
    Tags          []string `json:"tags"` // a product must carry all of them
    MaxPriceCents int      `json:"max_price_cents"`
    Limit         int      `json:"limit"`
}

func (q *ProductQuery) normalize() error {
    if len(q.Categories) > 20 || len(q.Tags) > 20 {
        return errors.New("at most 20 categories and 20 tags")
    }
    if q.MaxPriceCents < 0 {
        return errors.New("max_price_cents must not be negative")
    }
    if q.Limit <= 0 || q.Limit > 100 {
        q.Limit = 20
    }
    return nil
}

var catalog = []Product{
    {1, "Trail Runner 2", "shoes", 12900, []string{"running", "waterproof"}},
    {2, "City Sneaker", "shoes", 8900, []string{"casual"}},
    {3, "Storm Shell", "jackets", 19900, []string{"waterproof", "hiking"}},
    {4, "Merino Base Layer", "shirts", 6900, []string{"hiking", "running"}},
    {5, "Rain Cap", "accessories", 2900, []string{"waterproof"}},
}

func search(q ProductQuery) []Product {
    out := []Product{}
    for _, p := range catalog {
        if len(q.Categories) > 0 && !slices.Contains(q.Categories, p.Category) {
            continue
        }
        if q.MaxPriceCents > 0 && p.PriceCents > q.MaxPriceCents {
            continue
        }
        if !hasAllTags(p.Tags, q.Tags) {
            continue
        }
        out = append(out, p)
        if len(out) == q.Limit {
            break
        }
    }
    return out
}

func hasAllTags(have, want []string) bool {
    for _, t := range want {
        if !slices.Contains(have, t) {
            return false
        }
    }
    return true
}

func searchProducts(c fiber.Ctx) error {
    if !c.Is("json") {
        return fiber.ErrUnsupportedMediaType
    }

    var q ProductQuery
    if err := c.Bind().Body(&q); err != nil {
        return fiber.NewError(fiber.StatusBadRequest, "invalid query document")
    }
    if err := q.normalize(); err != nil {
        return fiber.NewError(fiber.StatusUnprocessableEntity, err.Error())
    }

    items := search(q)
    return c.JSON(fiber.Map{"count": len(items), "items": items})
}

func newApp() *fiber.App {
    app := fiber.New()

    // Advertise the accepted query formats. Registered before the cache,
    // because cache hits never reach the middleware behind it.
    app.Use("/products", func(c fiber.Ctx) error {
        c.Set("Accept-Query", "application/json")
        return c.Next()
    })

    // Must run before the cache so the cache key sees the canonical body.
    app.Use(canonicalQueryBody)

    app.Use(cache.New(cache.Config{
        Methods:    []string{fiber.MethodGet, fiber.MethodHead, fiber.MethodQuery},
        Expiration: 30 * time.Second,
        KeyHeaders: []string{
            fiber.HeaderAccept,
            fiber.HeaderAcceptEncoding,
            fiber.HeaderContentType,
        },
    }))

    app.Query("/products/search", searchProducts)
    app.Post("/products/search", searchProducts) // fallback for clients that cannot send QUERY yet

    return app
}

// canonicalQueryBody rewrites JSON QUERY bodies into a canonical form
// (sorted object keys, no insignificant whitespace), so equivalent
// queries share one cache entry.
func canonicalQueryBody(c fiber.Ctx) error {
    if c.Method() != fiber.MethodQuery || !c.Is("json") {
        return c.Next()
    }

    dec := json.NewDecoder(bytes.NewReader(c.Body()))
    dec.UseNumber() // keep numbers exactly as sent

    var doc any
    if err := dec.Decode(&doc); err != nil {
        return fiber.NewError(fiber.StatusBadRequest, "invalid query document")
    }
    if err := dec.Decode(&struct{}{}); !errors.Is(err, io.EOF) {
        return fiber.NewError(fiber.StatusBadRequest, "trailing data after query document")
    }

    canonical, err := json.Marshal(doc) // map keys are emitted in sorted order
    if err != nil {
        return err
    }
    c.Request().SetBody(canonical)
    // c.Body() already decoded any Content-Encoding; the new body is plain JSON.
    c.Request().Header.Del(fiber.HeaderContentEncoding)
    return c.Next()
}

func main() {
    log.Fatal(newApp().Listen(":3000"))
}
```

There is nothing QUERY-specific in the handler. `app.Query` registers a route exactly like `app.Get` or `app.Post`, and `c.Bind().Body` decodes the body the same way it does for any other method. If you already have a `POST /search` handler, moving it to `QUERY` is a one-line change. The work is in the middleware around it.

Two small decisions in the handler are worth copying. The `c.Is("json")` check rejects bodies the endpoint does not understand with `415 Unsupported Media Type` before any decoding happens. And `normalize` caps the size of the filter lists: a query document is user input that drives work on your database, so bound it the same way you would bound a `limit` parameter.

## Trying It

Send a query with curl. The `-X QUERY` flag is all it takes:

```bash
curl -i -X QUERY http://localhost:3000/products/search \
  -H 'Content-Type: application/json' \
  -d '{"categories": ["shoes", "jackets"], "tags": ["waterproof"], "max_price_cents": 15000}'
```

```text
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 125
Accept-Query: application/json
Age: 0
X-Cache: miss

{"count":1,"items":[{"id":1,"name":"Trail Runner 2","category":"shoes","price_cents":12900,"tags":["running","waterproof"]}]}
```

Now send the same filters with the keys in a different order (body omitted below, it is identical):

```bash
curl -i -X QUERY http://localhost:3000/products/search \
  -H 'Content-Type: application/json' \
  -d '{"max_price_cents": 15000, "tags": ["waterproof"], "categories": ["shoes", "jackets"]}'
```

```text
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 125
Accept-Query: application/json
Cache-Control: public, max-age=30
Age: 0
X-Cache: hit
```

A cache hit, even though the bytes on the wire differ. That is the canonicalization middleware at work, and it deserves its own section. The `Cache-Control: public, max-age=30` line only appears on the hit because Fiber's cache middleware writes it when it serves a stored entry; the handler never sets one. A plain `GET` on the same path gets a `405` whose `Allow` header lists `POST, QUERY`, so a confused client at least learns what the endpoint speaks.

## Caching QUERY Responses

Fiber's cache middleware only handles `GET` and `HEAD` by default. You opt in to `QUERY` through `Config.Methods`, and once you do, the default key generator appends the request body to the cache key, so two different searches on the same URL get two different entries. The HTTP method is also part of the key internally, which means a `POST` and a `QUERY` with the same body never share an entry. Sending the same body to the `POST` fallback returns `X-Cache: unreachable`, because POST is not in `Methods` and bypasses the cache entirely. Short bodies (up to 192 bytes after escaping) go into the key verbatim; larger ones are hashed, so a 1 MB query document does not turn into a 1 MB key in Redis.

Verbatim or hashed, the key is derived from the exact bytes. For JSON that is a problem, because `{"a":1,"b":2}` and `{ "b": 2, "a": 1 }` are the same query to your handler but two different keys to the cache. Different client libraries serialize maps in different orders, some pretty-print, and your hit rate quietly drops. The `canonicalQueryBody` middleware fixes this by decoding the body and re-encoding it: `encoding/json` always writes map keys in sorted order and strips whitespace. `UseNumber` keeps a large integer like an ID from being rounded through `float64` on the way. The second `Decode` must hit `io.EOF`; that rejects a body with a second document or stray characters after the first. And because `c.Body()` transparently decompresses a gzip-encoded request, the middleware drops `Content-Encoding` after replacing the body, otherwise `Bind` would try to decompress plain JSON and fail.

The canonicalizer has a cost: every `QUERY` body is parsed twice, once to canonicalize and once in `Bind`. For small search documents I have never found that worth worrying about, but if your query documents are large, measure before adopting it. Array order is preserved, so `["shoes","jackets"]` and `["jackets","shoes"]` still produce two entries. Sorting arrays is only correct if your query language treats them as sets, and that is a decision the middleware cannot make for you.

I also added `Content-Type` to `KeyHeaders`. A body only has meaning together with its media type, and if you ever accept a second query format, the same bytes could mean different things. The trade-off is that `application/json` and `application/json; charset=utf-8` now land in different entries. If you control the clients, that rarely matters.

Now the first of the two traps from the introduction. If you supply your own `KeyGenerator`, the cache uses your key as is, and nothing appends the body for you. A generator that returns `c.Path()`, which is a common pattern for GET-only caches, makes every `QUERY` to that path share one entry. This test, run against v3.5.0, passes, and that is the bad news:

```go
func TestCustomKeyGeneratorWithoutBodyCollides(t *testing.T) {
    app := fiber.New()
    app.Use(cache.New(cache.Config{
        Methods:      []string{fiber.MethodQuery},
        KeyGenerator: func(c fiber.Ctx) string { return c.Path() }, // forgets the body
    }))
    app.Query("/echo", func(c fiber.Ctx) error { return c.Send(c.Body()) })

    send := func(body string) string {
        req := httptest.NewRequest(fiber.MethodQuery, "/echo", strings.NewReader(body))
        resp, err := app.Test(req)
        if err != nil {
            t.Fatal(err)
        }
        b, _ := io.ReadAll(resp.Body)
        return string(b)
    }

    send("a")
    if got := send("b"); got != "a" {
        t.Fatalf("expected the collision to return the stale body %q, got %q", "a", got)
    }
}
```

The second request asked for `b` and got `a`. On a search endpoint, that means one user's results served for another user's filters. The cache documentation calls this out. Adding the body alone is not enough, though: a custom generator replaces the whole default key, so the query string, the `KeyHeaders` and the `KeyCookies` are gone as well. A path-plus-body key would still mix up `?page=1` and `?page=2` for the same filter document. If you write your own generator, it has to cover every part of the request that changes the response, with a hash for the body. In most cases the better answer is to keep the default generator, which already handles all of that, and shape the request before the cache instead, the way `canonicalQueryBody` does.

The last ordering detail is the `Accept-Query` middleware. On a hit, the cache answers from its store and never calls the handlers registered after it, and it does not replay arbitrary response headers unless you enable `StoreResponseHeaders`. My first version registered the header middleware after the cache, and the header vanished on every hit. Putting it in front fixes that.

The second trap is personalization. The cache middleware refuses to store a response that sets a cookie or that answers a request carrying `Authorization`, unless the response explicitly allows shared caching, so a search behind a bearer token is not cached by default. Session cookies are a different story. Cookies are not part of the default key, and a request that merely sends a `Cookie` header is cached like any other. I checked: with a handler that returns results based on `c.Cookies("session")`, a request with Bob's session received the response cached for Alice. If your search results depend on who is asking, keep those requests away from the cache. Adding the session cookie to `KeyCookies` looks like an alternative, but besides creating one entry per user it only partitions Fiber's own store: a hit goes out with `Cache-Control: public, max-age=...`, and a `Vary: Cookie` set by your handler is not replayed unless you enable `StoreResponseHeaders`. A CDN or proxy in front of the app could then share one user's results with everyone. The cache's own `Next` option is not the way to bypass it either: it is only consulted after a miss, to decide whether to store the new response, and an entry that already exists is still served. In my test, a cached anonymous result went to Bob even with `Next` returning `true` for requests with a session. The [skip middleware](/middleware/skip) wraps the cache and bypasses it before any lookup happens:

```go
app.Use(skip.New(
    cache.New(cache.Config{
        Methods: []string{fiber.MethodGet, fiber.MethodHead, fiber.MethodQuery},
    }),
    func(c fiber.Ctx) bool {
        return c.Cookies("session") != "" // personalized: never read or write the cache
    },
))
```

Personalized responses should then say so themselves, with `Cache-Control: private` or `no-store` set in the handler, so that no cache further down the line stores them.

## Safe Means No Side Effects

Fiber's CSRF middleware checks tokens only on unsafe methods, and `QUERY` is safe. With `csrf.New()` in front of both routes, a `POST` without a token gets a `403`, while a `QUERY` without a token goes straight through to the handler. The idempotency middleware skips safe methods by default too, and the early data middleware lets safe methods through when a TLS-terminating proxy marks a request as 0-RTT early data - data that an attacker can replay.

All of that is correct, as long as your `QUERY` handlers really are reads. Browsers limit the CSRF exposure somewhat: a cross-origin `QUERY` always needs a CORS preflight and HTML forms cannot send it, so a classic forged request only gets through if your CORS policy trusts the attacker's origin with credentials. But early data replay needs no browser at all, and CORS policies tend to grow more permissive over time. If a `QUERY` handler saves a search or starts an export job, it is now an action that skips CSRF checks and can be replayed. Writing an access log line or recording a metric is fine, since the client did not ask for those changes. Anything a user would consider an action belongs on `POST`.

## Calling a QUERY Endpoint

From Go, Fiber's client package has a `Query` method on both the client and the request, mirroring `Get` and `Post`:

```go
package main

import (
    "fmt"
    "log"

    "github.com/gofiber/fiber/v3/client"
)

type searchResult struct {
    Count int `json:"count"`
    Items []struct {
        Name string `json:"name"`
    } `json:"items"`
}

func main() {
    cc := client.New()

    resp, err := cc.R().
        SetJSON(map[string]any{
            "categories": []string{"shoes", "jackets"},
            "tags":       []string{"waterproof"},
        }).
        Query("http://localhost:3000/products/search")
    if err != nil {
        log.Fatal(err)
    }
    defer resp.Close()

    if resp.StatusCode() != 200 {
        log.Fatalf("search failed: %d %s", resp.StatusCode(), resp.String())
    }

    var result searchResult
    if err := resp.JSON(&result); err != nil {
        log.Fatal(err)
    }
    fmt.Printf("%d matches, X-Cache=%s\n", result.Count, resp.Header("X-Cache"))
}
```

Run it twice against the server and the output goes from `2 matches, X-Cache=miss` to `2 matches, X-Cache=hit`.

From a browser, `fetch` can send any method name, but two details apply. Spell it in uppercase. The Fetch standard only normalizes the case of `DELETE`, `GET`, `HEAD`, `OPTIONS`, `POST` and `PUT`, so `method: 'query'` goes out as lowercase `query`, and Fiber, which matches methods case-sensitively, answers `501 Not Implemented`. And `QUERY` is not a CORS-safelisted method, so every cross-origin request triggers a preflight. Fiber's `cors` middleware already includes `QUERY` in its default `AllowMethods`, so a preflight for it succeeds out of the box; if you have overridden `AllowMethods`, add it yourself. HTML forms cannot send `QUERY` at all.

## Pitfalls Worth Knowing Before You Ship

The naming overlap is the first thing to get used to. `app.Query` registers a route for the `QUERY` method, while `c.Query("page")` inside a handler still reads the URL query string, and `fiber.Query[T]` is its generic sibling. Both are useful in a `QUERY` handler: pagination parameters can stay in the URL while the filter document lives in the body.

If you set `RequestMethods` in your app config, for example to disable `TRACE` or `CONNECT`, check that the list includes `fiber.MethodQuery`. Without it, incoming `QUERY` requests get a `501` before routing, and calling `app.Query` panics at startup with `add: invalid http method QUERY`. The panic is the friendly case. The `501` bites when a shared helper builds the app config with its own method list and the routes are registered somewhere else, or when your tests construct the app differently from production.

Every hop between client and server has to understand the method too. A Fiber app that serves `QUERY` correctly does not help if a gateway or WAF in front of it rejects methods it does not know or strips their bodies, and a CDN that does not know the method yet may forward it without caching. Test the full path in staging before you advertise the endpoint. Until you have, the `POST` route in the example is your safety net.

Request bodies are also subject to `BodyLimit`, which defaults to 4 MB. That is generous for search documents. If your queries are small, lowering the limit is a cheap way to reduce what an abusive client can make your canonicalizer and binder parse.

## When to Stay With GET

`QUERY` is not a replacement for `GET`. If your filters fit comfortably in a URL, `GET` is still the better choice. A URL can be bookmarked and pasted into a ticket, and every cache already understands it. `QUERY` earns its place when the input is a real document, or when you do not want it in URLs and access logs, and when the alternative was going to be `POST`.

For a public API with clients you do not control, I would treat `QUERY` as an addition, not a migration: serve both routes from the same handler, document `QUERY` as the preferred method, and let client libraries catch up. Also do not expect automatic retries to appear for free. Go's `net/http` transport, for example, only replays requests on its own for `GET`, `HEAD`, `OPTIONS` and `TRACE`, or when an idempotency key header is present. What `QUERY` gives you is the guarantee that your own retry policy may resend the request without asking.

## Wrapping Up

The router part of `QUERY` is trivial in Fiber v3. The part that deserves your attention is everything that now treats those requests as safe and cacheable: a custom cache key that forgets the body, a cookie-based session that the cache does not see, and a handler with side effects that CSRF and early data checks no longer guard. Get those right and you have a search endpoint whose HTTP semantics finally match what it does.

## Internal References

- [What's New: QUERY method](/whats_new#query-method-rfc-10008)
- [Cache Middleware](/middleware/cache)
- [CSRF Middleware](/middleware/csrf)
- [Skip Middleware](/middleware/skip)
- [CORS Middleware](/middleware/cors)
- [Client REST API](/client/rest)
- [Binding in Practice](/blog/fiber-v3-binding-in-practice)
- [RFC Conformance in Practice](/blog/fiber-v3-rfc-conformance)
- [IETF Publishes RFC 10008 (InfoQ)](https://www.infoq.com/news/2026/09/http-query-method/)
