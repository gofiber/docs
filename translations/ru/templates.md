- - -
description: Fiber поддерживает серверные движки шаблонов.
- - -

# 📝 Шаблоны

## Интерфейсы шаблонов

Fiber предоставляет интерфейс Views для предоставления вашего собственного движка шаблонов:

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

`Views` интерфейс содержит `Load` и `Render` методы. `Load` выполняется Fiber при инициализации приложения для загрузки/разбора шаблонов.

```go
// Pass engine to Fiber's Views Engine
app := fiber.New(&fiber.Settings{
    Views: engine,
})
```

Метод `Render` связан с [**ctx.Render\(\)**](ctx.md#render) функцией, принимающей имя шаблона и данные привязки.

```go
app.Get("/", func(c *fiber.Ctx) {
    if err := c.Render("index", fiber.Map{
        "hello": "world",
    }); err != nil {
        c.Next(err)
    }
})
```

## Engines

Fiber поддерживает пакет  [templates](https://github.com/gofiber/template), обеспечивающий обертку для нескольких движков шаблонов:

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
        _ = c.Render("index", fiber.Map{
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

