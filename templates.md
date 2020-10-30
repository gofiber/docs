---
description: Fiber supports server-side template engines.
---

# 📝 Templates

## Template interfaces

Fiber provides a Views interface to provide your own template engine:

{% tabs %}
{% tab title="Views" %}
```go
type Views interface {
    Load() error
    Render(io.Writer, string, interface{}, ...string) error
}
```
{% endtab %}
{% endtabs %}

`Views` interface contains a `Load` and `Render` method, `Load` is executed by Fiber on app initialization to load/parse the templates.

```go
// Pass engine to Fiber's Views Engine
app := fiber.New(fiber.Config{
    Views: engine,
})
```

The `Render` method is linked to the [**ctx.Render\(\)**]() function that accepts a template name and binding data.

```go
app.Get("/", func(c *fiber.Ctx) error {
    return c.Render("index", fiber.Map{
        "hello": "world",
    });
})
```

## Engines

Fiber team maintains [templates](https://github.com/gofiber/template) package that provides wrappers for multiple template engines:

* [html](https://github.com/gofiber/template/tree/master/html)
* [ace](https://github.com/gofiber/template/tree/master/ace)
* [amber](https://github.com/gofiber/template/tree/master/amber)
* [django](https://github.com/gofiber/template/tree/master/django)
* [handlebars](https://github.com/gofiber/template/tree/master/handlebars)
* [jet](https://github.com/gofiber/template/tree/master/jet)
* [mustache](https://github.com/gofiber/template/tree/master/mustache)
* [pug](https://github.com/gofiber/template/tree/master/pug)

{% tabs %}
{% tab title="example" %}
```go
package main

import (
    "github.com/gofiber/fiber/v2"
    "github.com/gofiber/template/html"
)

func main() {
    // Initialize standard Go html template engine
    engine := html.New("./views", ".html")

    app := fiber.New(fiber.Config{
        Views: engine,
    })
    app.Get("/", func(c *fiber.Ctx) error {
        // Render index template
        return c.Render("index", fiber.Map{
            "Title": "Hello, World!",
        })
    })

    app.Listen(":3000")
}
```
{% endtab %}

{% tab title="views/index.html" %}
```markup
<!DOCTYPE html>
<body>
    <h1>{{.Title}}</h1>
</body>
</html>
```
{% endtab %}
{% endtabs %}

