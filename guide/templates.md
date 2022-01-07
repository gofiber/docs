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
    // Views Layout is the global layout for all template render until override on Render function.
    ViewsLayout: "layouts/main"
})
```

The `Render` method is linked to the [**ctx.Render\(\)**](templates.md) function that accepts a template name and binding data. It will use global layout if layout is not being defined in `Render` function.
If the App option PassLocalsToViews is enabled. All locals set using ctx.Locals(key, value) Will passed to the template.

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
    "log"
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

    log.Fatal(app.Listen(":3000"))
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

