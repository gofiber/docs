---
slug: fiber-v3-map-fields-filter-apis
title: "Filters Nobody Planned For: Binding attr[color]=red Into Go Maps in Fiber v3.7"
authors: [fiber-team]
tags: [fiber, v3, binding, query, api, sql, security, go]
description: "Since v3.7.0, Fiber binds query keys like attr[color]=red into map fields of a struct. How to build a facet filter whose attributes live in the database, keep user-chosen keys out of your SQL, bound the input, and avoid the values that change after the request ends."
---

A shop sells jackets. The product list has filters for color and size, and
the handler binds them into a struct with a `Color` field and a `Size` field.
Then the merchandising team adds "material" to the product data, and a week
later "hood" and "waterproof rating". Every new attribute is a new struct
field, a new `WHERE` clause, a code review and a deploy, for something that is
really just another row in the attributes table. The frontend team would
rather send whatever the data has: `?attr[color]=red&attr[material]=down`.

Plenty of APIs already speak this shape. PHP turns it into nested arrays and
Rails into nested hashes, Stripe takes `metadata[...]` this way, JSON:API sets
aside the `filter` parameter family for it, and Express parsed it into objects
by default until version 5 switched its default query parser to a simpler one.
In Fiber, a struct field of type `map[string]string` used to be skipped by the
binder without a word. A request for exactly this has been open
[since 2023](https://github.com/gofiber/fiber/issues/2524), and
[Fiber v3.7.0](https://github.com/gofiber/fiber/releases/tag/v3.7.0) closes it:
[map fields](/api/bind#map-fields) of a struct now bind from query strings and
form bodies. This post builds a facet filter on top of it, backed by SQLite,
and spends most of its time on what a map hands you: keys chosen by whoever
sends the request. Everything was built and tested against Fiber v3.7.0 with
`modernc.org/sqlite` v1.62.0. Map fields need Fiber v3.7.0 or later, which
needs Go 1.26 like every release since v3.6.0.

<!-- truncate -->

## What the Binder Does With a Map Field

The rules are short, and the post relies on all of them, so here they are
first. A field of type `map[string]T` with the tag `query:"attr"` collects
every key that starts with `attr`. Bracket and dot notation are
interchangeable, so `attr[color]=red` and `attr.color=red` both produce the
map key `color`, and both land in the same entry if a request sends both.
Brackets that an HTTP client percent-encodes as `%5B` and `%5D` work too. The
map key is taken as sent, without case folding: `Color` and `color` are two
keys.

`T` can be any scalar a struct field could hold, or a slice of one (types
with a registered converter or an `encoding.TextUnmarshaler` work too). With a
slice, repeated keys collect all their values in order. With a single value,
the last one wins and the others are dropped without an error. Conversion
works like for any other field, so `map[string]float64` turns
`min[price]=cheap` into a bind error that names the key. If no key matches, the
map stays `nil`.

Other map types are skipped silently, just as every map field was before
v3.7.0. That covers `map[string]any`, `map[string]Address`, `map[int]string`,
a map of maps and a pointer to a map. If you were hoping to decode
`attr[color][eq]=red` into nested maps, you get something else: everything
after the field name becomes one key, so that request yields the key
`color.eq` in a flat map. That is enough for operators, as long as you parse
the key yourself.

## A Catalog Whose Facets Live in the Database

The example keeps products in one table and their attributes in another,
one row per product, name and value. A third table lists which attribute
names exist. That table is the point: when merchandising adds "hood", they add
a row, and the API filters by it without a deploy. The store opens an
in-memory SQLite database, so the example runs without any setup:

```go title="store.go"
package main

import (
    "context"
    "database/sql"

    _ "modernc.org/sqlite"
)

const schema = `
CREATE TABLE products (
    id          INTEGER PRIMARY KEY,
    name        TEXT    NOT NULL,
    price_cents INTEGER NOT NULL,
    rating      REAL    NOT NULL
);
CREATE TABLE attributes (
    name TEXT PRIMARY KEY
);
CREATE TABLE product_attributes (
    product_id INTEGER NOT NULL REFERENCES products(id),
    name       TEXT    NOT NULL REFERENCES attributes(name),
    value      TEXT    NOT NULL,
    PRIMARY KEY (product_id, name, value)
);

INSERT INTO attributes VALUES ('color'), ('size'), ('material');

INSERT INTO products VALUES
    (1, 'Trail Shell',   12900, 4.6),
    (2, 'City Parka',    18900, 4.2),
    (3, 'Rain Poncho',    3900, 3.9),
    (4, 'Fleece Jacket',  6900, 4.4),
    (5, 'Down Vest',      9900, 4.1);

INSERT INTO product_attributes VALUES
    (1, 'color', 'red'),    (1, 'size', 'm'),  (1, 'material', 'nylon'),
    (2, 'color', 'black'),  (2, 'size', 'm'),  (2, 'size', 'l'),
    (2, 'material', 'down'),
    (3, 'color', 'yellow'), (3, 'size', 'one-size'),
    (3, 'material', 'nylon'),
    (4, 'color', 'red'),    (4, 'size', 's'),  (4, 'size', 'm'),
    (4, 'material', 'polyester'),
    (5, 'color', 'black'),  (5, 'size', 'l'),  (5, 'material', 'down');
`

func openStore(ctx context.Context) (*sql.DB, error) {
    db, err := sql.Open("sqlite", "file:catalog?mode=memory&cache=shared")
    if err != nil {
        return nil, err
    }
    db.SetMaxOpenConns(1) // one connection keeps the in-memory database alive
    if _, err := db.ExecContext(ctx, schema); err != nil {
        db.Close()
        return nil, err
    }
    return db, nil
}

// knownAttributes returns the attribute names a filter may use.
// They live in the database, so a new facet needs no deploy.
func knownAttributes(ctx context.Context, db *sql.DB) (map[string]bool, error) {
    rows, err := db.QueryContext(ctx, `SELECT name FROM attributes`)
    if err != nil {
        return nil, err
    }
    defer rows.Close()

    known := make(map[string]bool)
    for rows.Next() {
        var name string
        if err := rows.Scan(&name); err != nil {
            return nil, err
        }
        known[name] = true
    }
    return known, rows.Err()
}
```

### The Query Struct and the SQL

The request has three open-ended parts. `attr` holds attribute filters, and
since a shopper may tick "red" and "black" at the same time, it is a map of
slices. `min` and `max` hold numeric ranges, `min[price]=50` or
`max[rating]=5`, and are maps of `float64`, so the binder rejects anything that
is not a number before our code sees it. `limit` is a plain field, which shows
that map fields mix freely with the ordinary kind:

```go title="filter.go"
package main

import (
    "errors"
    "fmt"
    "maps"
    "math"
    "slices"
    "strconv"
    "strings"
)

// ProductQuery is bound from the query string:
//
//  /products?attr[color]=red&attr[color]=black&min[price]=50&max[rating]=5
type ProductQuery struct {
    Attr  map[string][]string `query:"attr"`
    Min   map[string]float64  `query:"min"`
    Max   map[string]float64  `query:"max"`
    Limit int                 `query:"limit"`
}

// rangeField maps a public range name to a column. The column name is
// pasted into SQL, so it must never come from the request.
type rangeField struct {
    column string
    toDB   func(float64) (any, error) // request unit to column unit
}

var rangeFields = map[string]rangeField{
    "price":  {column: "price_cents", toDB: toCents},
    "rating": {column: "rating", toDB: asIs},
}

func asIs(v float64) (any, error) { return v, nil }

// toCents converts euros to whole cents. It refuses fractions of a cent
// instead of rounding them, so neither bound can widen the filter. The
// check reads the shortest decimal form of v ("19.99"), not v*100, which
// is 1998.9999999999998 in float64.
func toCents(v float64) (any, error) {
    if math.Abs(v) > 1e9 {
        return nil, errors.New("out of range")
    }
    s := strconv.FormatFloat(v, 'f', -1, 64)
    if _, frac, ok := strings.Cut(s, "."); ok && len(frac) > 2 {
        return nil, errors.New("at most two decimals")
    }
    return int64(math.Round(v * 100)), nil
}

const (
    maxAttrKeys   = 8
    maxAttrValues = 20
    defaultLimit  = 20
    maxLimit      = 100
)

// FilterError names the query key that was rejected.
type FilterError struct {
    Key    string
    Reason string
}

func (e *FilterError) Error() string { return e.Key + ": " + e.Reason }

// buildQuery turns a bound ProductQuery into SQL and its arguments.
// Attribute names and values only ever travel as arguments; the only
// identifiers in the SQL come from rangeFields.
func buildQuery(q ProductQuery, known map[string]bool) (string, []any, error) {
    var (
        sb   strings.Builder
        args []any
    )
    sb.WriteString("SELECT id, name, price_cents, rating FROM products WHERE 1=1")

    if len(q.Attr) > maxAttrKeys {
        reason := fmt.Sprintf("at most %d attributes", maxAttrKeys)
        return "", nil, &FilterError{"attr", reason}
    }
    // Sorted keys give the same SQL text for the same filter,
    // whatever order Go's map iteration picks.
    for _, name := range slices.Sorted(maps.Keys(q.Attr)) {
        values := q.Attr[name]
        key := "attr[" + name + "]"
        switch {
        case !known[name]:
            return "", nil, &FilterError{key, "unknown attribute"}
        case len(values) > maxAttrValues:
            reason := fmt.Sprintf("at most %d values", maxAttrValues)
            return "", nil, &FilterError{key, reason}
        case slices.Contains(values, ""):
            return "", nil, &FilterError{key, "empty value"}
        }
        sb.WriteString(" AND id IN (SELECT product_id FROM product_attributes" +
            " WHERE name = ? AND value IN (")
        args = append(args, name)
        for i, v := range values {
            if i > 0 {
                sb.WriteString(", ")
            }
            sb.WriteString("?")
            args = append(args, v)
        }
        sb.WriteString("))")
    }

    for _, bound := range []struct {
        prefix string
        op     string
        values map[string]float64
    }{
        {"min", ">=", q.Min},
        {"max", "<=", q.Max},
    } {
        for _, name := range slices.Sorted(maps.Keys(bound.values)) {
            key := bound.prefix + "[" + name + "]"
            field, ok := rangeFields[name]
            if !ok {
                return "", nil, &FilterError{key, "unknown range field"}
            }
            arg, err := field.toDB(bound.values[name])
            if err != nil {
                return "", nil, &FilterError{key, err.Error()}
            }
            sb.WriteString(" AND " + field.column + " " + bound.op + " ?")
            args = append(args, arg)
        }
    }

    limit := q.Limit
    switch {
    case limit == 0:
        limit = defaultLimit
    case limit < 0 || limit > maxLimit:
        reason := fmt.Sprintf("must be between 1 and %d", maxLimit)
        return "", nil, &FilterError{"limit", reason}
    }
    sb.WriteString(" ORDER BY id LIMIT ?")
    args = append(args, limit)

    return sb.String(), args, nil
}

// Clone returns a copy that is safe to keep after the request ends.
// Bound strings point into buffers Fiber reuses for later requests.
func (q ProductQuery) Clone() ProductQuery {
    out := q
    if q.Attr != nil {
        out.Attr = make(map[string][]string, len(q.Attr))
        for k, vs := range q.Attr {
            cp := make([]string, len(vs))
            for i, v := range vs {
                cp[i] = strings.Clone(v)
            }
            out.Attr[strings.Clone(k)] = cp
        }
    }
    out.Min = cloneKeys(q.Min)
    out.Max = cloneKeys(q.Max)
    return out
}

func cloneKeys[V any](m map[string]V) map[string]V {
    if m == nil {
        return nil
    }
    out := make(map[string]V, len(m))
    for k, v := range m {
        out[strings.Clone(k)] = v
    }
    return out
}
```

The file treats the two kinds of map key differently, and that is its real
job. An attribute name such as `color` is data in the `product_attributes`
table, so it goes into the query as an argument, exactly like the values.
Even a key like `attr[x' OR 1=1--]` would only ever be compared as a string,
after it fails the `known` check anyway. A range name
such as `price` is different: it selects a column, and a column name cannot be
a placeholder. So the request never supplies it. The key is looked up in
`rangeFields`, and the SQL gets the column name from that table, never from
the request. A query builder that writes `"AND " + name + " >= ?"` with the
map key is an injection hole that the old struct field could not have had,
because with a struct field the column name was fixed in your code.

Two smaller choices are worth a word. Prices arrive in euros as `float64` and
the column holds cents. A plain multiplication goes wrong because `19.99 * 100`
is `1998.9999999999998` in floating point, and rounding goes wrong in a
different way: `max[price]=50.009` would become 5001 cents and let a product
for 50.01 through. So `toCents` refuses anything with more than two decimals
and only then rounds. It looks at the shortest decimal form of the number,
which `strconv.FormatFloat` gives as `19.99`, because checking whether
`v * 100` is a whole number would reject 19.99 for the same floating point
reason. And an empty attribute value is refused, for reasons the section on
details explains. `Clone` is not used by the
handler, which is done with the query before it returns; it is for whoever
later wants to log, cache or save a search.

### The Handler

```go title="main.go"
package main

import (
    "context"
    "database/sql"
    "errors"
    "log"
    "strings"

    "github.com/gofiber/fiber/v3"
)

type Product struct {
    ID     int     `json:"id"`
    Name   string  `json:"name"`
    Price  float64 `json:"price"`
    Rating float64 `json:"rating"`
}

func newApp(db *sql.DB) *fiber.App {
    app := fiber.New()

    app.Get("/products", func(c fiber.Ctx) error {
        var q ProductQuery
        if err := c.Bind().Query(&q); err != nil {
            var be *fiber.BindError
            if errors.As(err, &be) {
                return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
                    "error": "invalid query parameter",
                    "key":   bracketKey(be.Field),
                })
            }
            return err
        }

        known, err := knownAttributes(c, db)
        if err != nil {
            return err
        }
        query, args, err := buildQuery(q, known)
        if err != nil {
            var fe *FilterError
            if errors.As(err, &fe) {
                return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
                    "error": fe.Reason,
                    "key":   fe.Key,
                })
            }
            return err
        }

        rows, err := db.QueryContext(c, query, args...)
        if err != nil {
            return err
        }
        defer rows.Close()

        products := []Product{}
        for rows.Next() {
            var (
                p     Product
                cents int64
            )
            if err := rows.Scan(&p.ID, &p.Name, &cents, &p.Rating); err != nil {
                return err
            }
            p.Price = float64(cents) / 100
            products = append(products, p)
        }
        if err := rows.Err(); err != nil {
            return err
        }
        return c.JSON(fiber.Map{"products": products})
    })

    return app
}

// bracketKey turns the binder's "min.price" into the "min[price]" the
// client sent, so every error names keys the same way.
func bracketKey(field string) string {
    prefix, rest, ok := strings.Cut(field, ".")
    if !ok {
        return field
    }
    return prefix + "[" + rest + "]"
}

func main() {
    db, err := openStore(context.Background())
    if err != nil {
        log.Fatal(err)
    }
    defer db.Close()

    log.Fatal(newApp(db).Listen(":3000"))
}
```

Bind errors come back as a [`*fiber.BindError`](/api/bind#inspecting-the-underlying-error),
whose `Field` names the key that failed. The binder reports it in dot notation
(`min.price`) even when the request used brackets, so `bracketKey` rewrites it
and every error the API returns names keys the way the client sent them. Treat
the field as a hint: when several keys fail at once, `Field` names one of them,
and for some errors, such as unmatched brackets, it is empty. The handler also
assumes the default binding mode; with `WithAutoHandling()` the binder turns
every failure into a `*fiber.Error` with status `400`, and this branch never
runs. Passing `c` to `QueryContext` works because `fiber.Ctx` implements
`context.Context`.

`knownAttributes` runs one small query per request. That is cheap for a table
of a few dozen rows, and it means a new attribute works the moment its row
exists. On a busy catalog I would cache the set for a minute and accept that
delay.

### Trying It

Put the three files into an empty directory, create a module there and pin the
versions this post was tested with:

```bash
go mod init example.com/catalog
go get github.com/gofiber/fiber/v3@v3.7.0 modernc.org/sqlite@v1.62.0
```

Start the app with `go run .` and send a few filters. The `-g` flag stops curl
from treating the brackets as its own URL globbing syntax:

```bash
curl -g 'localhost:3000/products?attr[color]=yellow'
```

<!-- prettier-ignore -->
```json
{"products":[{"id":3,"name":"Rain Poncho","price":39,"rating":3.9}]}
```

Responses with more products get long, so the next three requests only print
the names with `jq`:

```bash
q='localhost:3000/products'
curl -sg "$q?attr[color]=red" | jq -c '[.products[].name]'
curl -sg "$q?attr[color]=red&attr[color]=black&attr[size]=l" \
  | jq -c '[.products[].name]'
curl -sg "$q?attr.material=down&max[price]=150" | jq -c '[.products[].name]'
```

```json
["Trail Shell","Fleece Jacket"]
["City Parka","Down Vest"]
["Down Vest"]
```

Two values for the same attribute are an `OR`, two attributes are an `AND`,
and the dot notation in the last request works the same as the brackets.
Now the requests that should fail:

```bash
curl -g 'localhost:3000/products?attr[colour]=red'
curl -g 'localhost:3000/products?min[stock]=1'
curl -g 'localhost:3000/products?min[price]=cheap'
curl -g 'localhost:3000/products?attr[color][eq]=red'
```

```json
{"error":"unknown attribute","key":"attr[colour]"}
{"error":"unknown range field","key":"min[stock]"}
{"error":"invalid query parameter","key":"min[price]"}
{"error":"unknown attribute","key":"attr[color.eq]"}
```

The last one shows the flattening from the first section: the binder handed us
the key `color.eq`, which is not an attribute.

## The Keys Are User Input

With a struct, the set of fields was decided at compile time. With a map, the
client decides how many keys there are and what they are called. The example
deals with that in three places.

The first is the allow-list. I reject an unknown attribute with a `400`
instead of ignoring it, and I think that is the right default for filters. A
shopper who follows a link with `attr[colour]=red` and gets every product
believes the filter worked. An error makes the typo visible to whoever wrote
the link. Ignoring is defensible for parameters that only tune the response,
but not for ones that narrow it.

The second is size. A map field has no limit on its own beyond the request
itself, so the handler caps the attributes at 8 and the values per attribute
at 20. Each key adds a subquery, and each value a placeholder, so these limits
are really limits on the SQL you are willing to run. Fiber does put an outer
bound on the whole thing: the query string is part of the request line, which
has to fit into [`ReadBufferSize`](/api/fiber#readbuffersize), 8 KB by default.
A 12.9 KB query string with a thousand `attr` keys was answered with
`431 Request Header Fields Too Large` before it reached the handler. A
6.4 KB one with 500 keys made it through and was rejected by our own check.
Raise the buffer for some other reason and the outer bound moves with it,
which is one more reason to keep your own.

The third is that an allow-list per map does not catch typos in the field
name itself. `atr[color]=red` (one `t`) matches no field, so the binder drops
it and the request returns the whole catalog. Fiber can turn that into an
error with [`binder.SetParserDecoder`](/api/bind#setparserdecoder) and
`IgnoreUnknownKeys: false`, and I tried it: `atr[color]=red` then fails with
`schema: invalid path "atr.color"`. But that setting is global for every
binder in the process, and it also rejects the `utm_source` that a marketing
link appends to your URL. For a public API that is usually too strict. If you
want it anyway, set it once at startup and remember that the call replaces the
whole parser configuration, so pass `ZeroEmpty: true` along with it to keep
Fiber's default.

## Details That Bite

### Bound Values Do Not Outlive the Request

The first version of a "recent searches" feature appended the bound
`ProductQuery` to a slice, to show it later. I sent three requests,
`attr[color]=red`, `attr[material]=down` and `attr[size]=one-size`, and
printed the slice:

```text
map[color:[one]]
map[material:[one-]]
map[size:[one-size]]
```

The values point into a buffer that Fiber reuses for later requests, and the
third request wrote over the first two. This is Fiber's
[zero allocation](/#zero-allocation) design, and the
[bind documentation](/api/bind) says it directly: bound string values alias
the request buffers, and [`Immutable`](/api/fiber#immutable) does not apply
to them. I ran the same three requests with `Immutable: true` and got the same
broken output. With `q.Clone()` before storing, the slice held `red`, `down`
and `one-size`. A map makes this easier to miss than a string field, because
`maps.Clone` looks like the right tool and is not: it copies the map, not the
strings inside it. In my runs the keys survived, but nothing promises that, so
`Clone` in `filter.go` copies keys and values alike.

The opposite direction has a trap too. A map field that is already set when
the bind starts is added to, not replaced. Bind into a fresh zero value on
every request, as the handler does with `var q ProductQuery`, and never into a
struct with prefilled maps that other requests share, or one shopper's filters
leak into the next one's results.

### Single Values Lose Quietly

`min[price]=50&min[price]=100` binds to `100`. The binder keeps the last value
for a non-slice map and drops the rest, with no error. For a range that is
mostly harmless, but for an attribute filter it would turn "red or black" into
"black". That is why `Attr` is a map of slices even though most requests send
one value per attribute.

### Commas Are Not Lists Unless You Ask

`attr[color]=red,black` returns no products, because the value is the single
string `red,black`. Comma splitting into a map of slices exists, but it
depends on [`EnableSplittingOnParsers`](/api/fiber#enablesplittingonparsers),
which applies to the whole app. Turning it on for one filter changes how every
query, form and header binder in the app reads commas. Repeated keys need no
setting, so I would document those as the API and leave the config alone.

### Empty and Bare Keys

In my tests, `attr=red` without brackets and `attr[]=red` with empty ones
matched no map entry and were dropped, so the request returned everything.

Empty values are worse, because what they do depends on the field. Fiber's
parser config sets `ZeroEmpty`, so an empty value binds to the zero value of
the type. `min[price]=` becomes `price >= 0`, which filters nothing.
`max[price]=` becomes `price <= 0`, which filters out everything. And
`attr[color]=` would bind the empty string, which matches no product. A form
that submits its empty inputs, as plain HTML forms do, can produce all three.
The builder refuses empty attribute values with a `400`. For the ranges it
cannot tell an empty value from a real `0` after binding, so the frontend has
to leave out empty fields. If you need to tell them apart on the server, bind
the range as `map[string]string` and parse the numbers yourself.

### Numbers Are Stricter Than strconv

`map[string]float64` fields are parsed by Fiber's own parser, not by
`strconv.ParseFloat`. In my tests `NaN`, `Inf`, `1e400` and `0x10` all failed
the bind with a conversion error, so the range code never sees a value that
would make a comparison meaningless. That saved me a check, but I would not
build on it for types where it matters without a test of my own.

### A Refactor Can Switch the Filters Off

Because unsupported map types are skipped without an error, a field of type
`map[string]any` binds nothing and looks exactly like a request without
filters. If somebody "simplifies" `map[string][]string` to `map[string]any`
during a refactor, every filter silently stops working. The test below binds
a real query string and compares the full struct, which catches that.

## Pin It Down in a Test

Two tests cover what the design depends on. The first goes through the real
binder, so it notices if the field type or the tag changes. The second checks
the SQL text and its arguments, including a range key that tries to smuggle
in a statement:

```go title="catalog_test.go"
package main

import (
    "net/http/httptest"
    "reflect"
    "testing"

    "github.com/gofiber/fiber/v3"
)

func TestBindProductQuery(t *testing.T) {
    app := fiber.New()
    var got ProductQuery
    app.Get("/", func(c fiber.Ctx) error {
        if err := c.Bind().Query(&got); err != nil {
            return err
        }
        got = got.Clone() // the test reads it after the request
        return nil
    })

    req := httptest.NewRequest(fiber.MethodGet,
        "/?attr[color]=red&attr.color=black&attr%5Bsize%5D=m"+
            "&min[price]=50&min[price]=80&limit=5", nil)
    if _, err := app.Test(req); err != nil {
        t.Fatal(err)
    }

    want := ProductQuery{
        Attr:  map[string][]string{"color": {"red", "black"}, "size": {"m"}},
        Min:   map[string]float64{"price": 80}, // last value wins
        Limit: 5,
    }
    if !reflect.DeepEqual(got, want) {
        t.Fatalf("got %#v\nwant %#v", got, want)
    }
}

func TestBuildQuery(t *testing.T) {
    known := map[string]bool{"color": true, "size": true}

    q := ProductQuery{
        Attr: map[string][]string{"size": {"m"}, "color": {"red", "black"}},
        Max:  map[string]float64{"price": 150},
    }
    sql, args, err := buildQuery(q, known)
    if err != nil {
        t.Fatal(err)
    }
    const attr = " AND id IN (SELECT product_id FROM product_attributes" +
        " WHERE name = ? AND value IN "
    wantSQL := "SELECT id, name, price_cents, rating FROM products WHERE 1=1" +
        attr + "(?, ?))" + attr + "(?))" +
        " AND price_cents <= ? ORDER BY id LIMIT ?"
    if sql != wantSQL {
        t.Fatalf("sql:\n%s\nwant:\n%s", sql, wantSQL)
    }
    wantArgs := []any{"color", "red", "black", "size", "m", int64(15000), 20}
    if !reflect.DeepEqual(args, wantArgs) {
        t.Fatalf("args: %#v", args)
    }

    cheap := ProductQuery{Max: map[string]float64{"price": 19.99}}
    _, args, err = buildQuery(cheap, known)
    if err != nil || args[0] != int64(1999) {
        t.Fatalf("19.99 must become 1999 cents, got %v (%v)", args, err)
    }

    fraction := ProductQuery{Max: map[string]float64{"price": 50.009}}
    if _, _, err := buildQuery(fraction, known); err == nil {
        t.Fatal("a price with fractions of a cent must be rejected")
    }

    evil := ProductQuery{Min: map[string]float64{
        "price_cents; DROP TABLE products": 1,
    }}
    if _, _, err := buildQuery(evil, known); err == nil {
        t.Fatal("a range key outside rangeFields must be rejected")
    }
}
```

The fixed SQL string in the second test only works because the builder sorts
the keys. Without the sort, Go's map iteration order would change the text
from run to run, the test would be flaky, and the database would see a
different statement for the same filter, which also defeats any statement
cache in front of it.

## When a Map Is the Wrong Type

If you know the parameters, use struct fields. `Page`, `Sort` and `Limit` are
better as fields with names and types than as `opts[page]`, and the binder
checks them for you. A map is for the part of the API whose keys come from
data, like the attributes here, translations keyed by locale, or metadata a
client attaches to an object.

A map is also the wrong tool for real query languages. Once filters need
grouping, negation or `OR` across different attributes, flattening them into
`attr[color.eq]` keys gets awkward quickly, and you end up writing a parser
for your keys. At that point a JSON body is the better transport, and if you
want to keep the request safe and cacheable, the
[HTTP QUERY method](/blog/fiber-v3-http-query-method) gives a search a body
without pretending to be a `POST`.

And if your attributes are few and change twice a year, the struct with a
field per attribute is not wrong. It costs a deploy per attribute, but it also
cannot have a key you did not expect.

## Wrapping Up

Fiber v3.7.0 binds `attr[color]=red` into a `map[string][]string` field, so a
new attribute in your data no longer needs a new struct field. What you give
up is the compile-time list of keys. Put that list back in your own code, as
an allow-list for names that travel as SQL arguments and a lookup table for
anything that becomes an identifier, and the map is as safe as the struct
was.

## Internal References

- [Bind: Map Fields](/api/bind#map-fields) and
  [Nested and Array Form Fields](/api/bind#nested-and-array-form-fields)
- [Bind: Inspecting the underlying error](/api/bind#inspecting-the-underlying-error)
  and [SetParserDecoder](/api/bind#setparserdecoder)
- [Fiber config: ReadBufferSize](/api/fiber#readbuffersize),
  [EnableSplittingOnParsers](/api/fiber#enablesplittingonparsers) and
  [Immutable](/api/fiber#immutable)
- [Zero Allocation](/#zero-allocation)
- [Binding in Practice](/blog/fiber-v3-binding-in-practice)
- [The HTTP QUERY Method in Fiber v3](/blog/fiber-v3-http-query-method)
- [Fiber v3.7.0 release (map fields in query and form binding)](https://github.com/gofiber/fiber/releases/tag/v3.7.0)
- [Support map fields in query and form binding (#4788)](https://github.com/gofiber/fiber/pull/4788)
- [Feature request: map support in the query parser (#2524)](https://github.com/gofiber/fiber/issues/2524)
