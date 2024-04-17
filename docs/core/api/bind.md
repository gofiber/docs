---
id: bind
title: 📎 Bind
description: Binds the request and response items to a struct.
sidebar_position: 4
---

:::caution

Documentation is still in progress.

:::

Bindings are used to parse the request/response body, query parameters, cookies and much more into a struct.

- [Body](#body)
- [Cookie](#cookie)
- [Header](#header)
- [ParamsParser](#paramsparser)
- [Query](#query)
- [RespHeader](#respheader)
- [SetParserDecoder](#setparserdecoder)


> _Returned value is only valid within the handler. Do not store any references.  
> Make copies or use the_ [_**`Immutable`**_](./ctx.md) _setting instead._ [_Read more..._](../#zero-allocation)


## Body

Binds the request body to a struct.

It is important to specify the correct struct tag based on the content type to be parsed. For example, if you want to parse a JSON body with a field called Pass, you would use a struct field of `json:"pass"`.

| content-type                        | struct tag |
| ----------------------------------- | ---------- |
| `application/x-www-form-urlencoded` | form       |
| `multipart/form-data`               | form       |
| `application/json`                  | json       |
| `application/xml`                   | xml        |
| `text/xml`                          | xml        |

```go title="Signature"
func (b *Bind) Body(out any) error
```

```go title="Example"
// Field names should start with an uppercase letter
type Person struct {
    Name string `json:"name" xml:"name" form:"name"`
    Pass string `json:"pass" xml:"pass" form:"pass"`
}

app.Post("/", func(c fiber.Ctx) error {
        p := new(Person)

        if err := c.Bind().Body(p); err != nil {
            return err
        }

        log.Println(p.Name) // john
        log.Println(p.Pass) // doe

        // ...
})

// Run tests with the following curl commands

// curl -X POST -H "Content-Type: application/json" --data "{\"name\":\"john\",\"pass\":\"doe\"}" localhost:3000

// curl -X POST -H "Content-Type: application/xml" --data "<login><name>john</name><pass>doe</pass></login>" localhost:3000

// curl -X POST -H "Content-Type: application/x-www-form-urlencoded" --data "name=john&pass=doe" localhost:3000

// curl -X POST -F name=john -F pass=doe http://localhost:3000

// curl -X POST "http://localhost:3000/?name=john&pass=doe"
```

## Cookie

This method is similar to [Body-Binding](#body), but for cookie parameters.
It is important to use the struct tag "cookie". For example, if you want to parse a cookie with a field called Age, you would use a struct field of `cookie:"age"`.

```go title="Signature"
func (b *Bind) Cookie(out any) error
```

```go title="Example"
// Field names should start with an uppercase letter
type Person struct {
    Name     string  `cookie:"name"`
    Age      int     `cookie:"age"`
    Job      bool    `cookie:"job"`
}

app.Get("/", func(c fiber.Ctx) error {
        p := new(Person)

        if err := c.Bind().Cookie(p); err != nil {
            return err
        }

        log.Println(p.Name)     // Joseph
        log.Println(p.Age)      // 23
        log.Println(p.Job)      // true
})
// Run tests with the following curl command
// curl.exe --cookie "name=Joseph; age=23; job=true" http://localhost:8000/
```


## Header

This method is similar to [Body-Binding](#body), but for request headers.
It is important to use the struct tag "reqHeader". For example, if you want to parse a request header with a field called Pass, you would use a struct field of `reqHeader:"pass"`.

```go title="Signature"
func (b *Bind) Header(out any) error
```

```go title="Example"
// Field names should start with an uppercase letter
type Person struct {
    Name     string     `reqHeader:"name"`
    Pass     string     `reqHeader:"pass"`
    Products []string   `reqHeader:"products"`
}

app.Get("/", func(c fiber.Ctx) error {
        p := new(Person)

        if err := c.Bind().Header(p); err != nil {
            return err
        }

        log.Println(p.Name)     // john
        log.Println(p.Pass)     // doe
        log.Println(p.Products) // [shoe, hat]

        // ...
})
// Run tests with the following curl command

// curl "http://localhost:3000/" -H "name: john" -H "pass: doe" -H "products: shoe,hat"
```


## ParamsParser

:::caution

Not finished yet.

:::

This method is similar to [Body-Binding](#body), but for path parameters. It is important to use the struct tag "params". For example, if you want to parse a path parameter with a field called Pass, you would use a struct field of params:"pass"

```go title="Signature"
func (b *Bind) Params(out any) error
```

```go title="Example"
// GET http://example.com/user/111
app.Get("/user/:id", func(c fiber.Ctx) error {
  param := struct {ID uint `params:"id"`}{}

  c.ParamsParser(&param) // "{"id": 111}"

  // ...
})

```


## Query

This method is similar to [Body-Binding](#body), but for query parameters.
It is important to use the struct tag "query". For example, if you want to parse a query parameter with a field called Pass, you would use a struct field of `query:"pass"`.

```go title="Signature"
func (b *Bind) Query(out any) error
```

```go title="Example"
// Field names should start with an uppercase letter
type Person struct {
    Name     string     `query:"name"`
    Pass     string     `query:"pass"`
    Products []string   `query:"products"`
}

app.Get("/", func(c fiber.Ctx) error {
        p := new(Person)

        if err := c.Bind().Query(p); err != nil {
            return err
        }

        log.Println(p.Name)        // john
        log.Println(p.Pass)        // doe
        // fiber.Config{EnableSplittingOnParsers: false} - default
        log.Println(p.Products)    // ["shoe,hat"]
        // fiber.Config{EnableSplittingOnParsers: true}
        // log.Println(p.Products) // ["shoe", "hat"]
		

        // ...
})
// Run tests with the following curl command

// curl "http://localhost:3000/?name=john&pass=doe&products=shoe,hat"
```

:::info
For more parser settings please look here [Config](fiber.md#config)
:::


## RespHeader

This method is similar to [Body-Binding](#body), but for response headers.
It is important to use the struct tag "respHeader". For example, if you want to parse a request header with a field called Pass, you would use a struct field of `respHeader:"pass"`.

```go title="Signature"
func (b *Bind) Header(out any) error
```

```go title="Example"
// Field names should start with an uppercase letter
type Person struct {
    Name     string     `respHeader:"name"`
    Pass     string     `respHeader:"pass"`
    Products []string   `respHeader:"products"`
}

app.Get("/", func(c fiber.Ctx) error {
        p := new(Person)

        if err := c.Bind().RespHeader(p); err != nil {
            return err
        }

        log.Println(p.Name)     // john
        log.Println(p.Pass)     // doe
        log.Println(p.Products) // [shoe, hat]

        // ...
})
// Run tests with the following curl command

// curl "http://localhost:3000/" -H "name: john" -H "pass: doe" -H "products: shoe,hat"
```


## SetParserDecoder

Allow you to config BodyParser/QueryParser decoder, base on schema's options, providing possibility to add custom type for parsing.

```go title="Signature"
func SetParserDecoder(parserConfig fiber.ParserConfig{
  IgnoreUnknownKeys bool,
  ParserType        []fiber.ParserType{
      Customtype any,
      Converter  func(string) reflect.Value,
  },
  ZeroEmpty         bool,
  SetAliasTag       string,
})
```

```go title="Example"

type CustomTime time.Time

// String() returns the time in string
func (ct *CustomTime) String() string {
    t := time.Time(*ct).String()
    return t
}

// Register the converter for CustomTime type format as 2006-01-02
var timeConverter = func(value string) reflect.Value {
  fmt.Println("timeConverter", value)
  if v, err := time.Parse("2006-01-02", value); err == nil {
    return reflect.ValueOf(v)
  }
  return reflect.Value{}
}

customTime := fiber.ParserType{
  Customtype: CustomTime{},
  Converter:  timeConverter,
}

// Add setting to the Decoder
fiber.SetParserDecoder(fiber.ParserConfig{
  IgnoreUnknownKeys: true,
  ParserType:        []fiber.ParserType{customTime},
  ZeroEmpty:         true,
})

// Example to use CustomType, you pause custom time format not in RFC3339
type Demo struct {
    Date  CustomTime `form:"date" query:"date"`
    Title string     `form:"title" query:"title"`
    Body  string     `form:"body" query:"body"`
}

app.Post("/body", func(c fiber.Ctx) error {
    var d Demo
    c.BodyParser(&d)
    fmt.Println("d.Date", d.Date.String())
    return c.JSON(d)
})

app.Get("/query", func(c fiber.Ctx) error {
    var d Demo
    c.QueryParser(&d)
    fmt.Println("d.Date", d.Date.String())
    return c.JSON(d)
})

// curl -X POST -F title=title -F body=body -F date=2021-10-20 http://localhost:3000/body

// curl -X GET "http://localhost:3000/query?title=title&body=body&date=2021-10-20"

```
