---
description: Fiber supports server-side template engines.
---

# 📝 Templates

## Template interfaces

Fiber provides two interfaces for template engines:

{% tabs %}
{% tab title="Templates" %}
```go
type Templates interface {
    Render(io.Writer, string, interface{}) error
}
```
{% endtab %}
{% endtabs %}

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

`Templates` interface is deprecated since `v1.11.1`, it still backward compatible but it does not support the new features. So it's prefered that you use `Views` interface:

```go
// Pass engine to Fiber's Views Engine
app := fiber.New(&fiber.Settings{
    Views: engine,
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
    "github.com/gofiber/fiber"
    "github.com/gofiber/template/html"
)

func main() {
    // Initialize standard Go html template engine
    engine := html.New("./views", ".html")

    app := fiber.New(&fiber.Settings{
        Views: engine,
    })
    app.Get("/", func(c *fiber.Ctx) {
        // Render index template
        c.Render("index", fiber.Map{
            "Title": "Hello, World!",
        })
    })

    app.Listen(3000)
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

