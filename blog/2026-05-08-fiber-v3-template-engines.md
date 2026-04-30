---
slug: fiber-v3-template-engines
title: Template Engines
authors: [fiber-team]
tags: [fiber, v3, templates, html, pug, django, handlebars, go]
description: "9 template engines, one interface  -  pick your syntax and start rendering. From Go's html/template to Pug, Django, and Handlebars."
---

Not every project is a JSON API. Sometimes you need to render HTML  -  a landing page, an admin panel, an email template, a server-rendered app. Fiber supports 9 template engines through a single `Views` interface, so you pick the syntax you like and Fiber handles the rest.

The surprising part is not the number of engines. It is that switching from one engine to another requires changing exactly two lines of code: the import and the engine constructor. Your handlers, layouts, and rendering calls stay the same.

<!-- truncate -->

## The Views Interface

Every template engine implements Fiber's `Views` interface. Your handlers call `c.Render()` and Fiber delegates to whatever engine you configured:

```go
app.Get("/", func(c fiber.Ctx) error {
    return c.Render("index", fiber.Map{
        "Title": "Welcome",
        "Items": items,
    })
})
```

This handler works identically whether you are using HTML templates, Pug, Django, or any other engine. The engine is configured once at startup and never referenced in handler code.

## The 9 Engines

| Engine | Syntax Style | Best For |
|--------|-------------|----------|
| **html** | Go's `html/template` | Go developers, maximum control |
| **django** | `{% block %}` / `{{ var }}` | Python developers, designers |
| **pug** | Indentation-based, minimal | Clean markup, rapid prototyping |
| **handlebars** | `{{#each}}` / `{{> partial}}` | JavaScript developers |
| **mustache** | Logic-less `{{var}}` | Simple templates, emails |
| **jet** | Go-native, fast | Performance-critical rendering |
| **amber** | HAML-like, Go functions | Ruby developers |
| **ace** | Indentation-based, Go funcs | Clean Go-native templates |
| **slim** | Minimal whitespace syntax | Ruby/Slim developers |

## Quick Start with html/template

The most common choice  -  Go's built-in template engine with Fiber integration:

```go
import (
    "github.com/gofiber/fiber/v3"
    "github.com/gofiber/template/html/v2"
)

func main() {
    // Point to your template directory and file extension
    engine := html.New("./views", ".html")

    app := fiber.New(fiber.Config{
        Views: engine,
    })

    app.Get("/", func(c fiber.Ctx) error {
        return c.Render("index", fiber.Map{
            "Title": "My App",
        })
    })

    app.Listen(":3000")
}
```

With a template file at `./views/index.html`:

```html
<!DOCTYPE html>
<html>
<head><title>{{.Title}}</title></head>
<body>
    <h1>{{.Title}}</h1>
</body>
</html>
```

## Using Layouts

Layouts let you define a shared structure (header, footer, navigation) and inject page content into it:

```go
app.Get("/", func(c fiber.Ctx) error {
    return c.Render("index", fiber.Map{
        "Title": "Home",
    }, "layouts/main")
})
```

The layout file `./views/layouts/main.html`:

```html
<!DOCTYPE html>
<html>
<head><title>{{.Title}}</title></head>
<body>
    <nav><!-- shared navigation --></nav>
    {{embed}}
    <footer><!-- shared footer --></footer>
</body>
</html>
```

The `{{embed}}` tag marks where the page content is inserted. The page template (`index.html`) contains only the page-specific content.

## Switching Engines

Want to use Pug instead of HTML templates? Change two lines:

```go
import "github.com/gofiber/template/pug/v2"

engine := pug.New("./views", ".pug")
```

Your handlers stay the same. Your layouts stay the same. Only the template files and the engine constructor change.

A Pug template for the same page:

```pug
h1= Title
p Welcome to #{Title}
```

## Development Features

Every engine supports features that make development easier:

```go
engine := html.New("./views", ".html")

// Reload templates on every request (development only)
engine.Reload(true)

// Print parsed template names for debugging
engine.Debug(true)

// Add custom template functions
engine.AddFunc("upper", strings.ToUpper)
engine.AddFunc("formatDate", func(t time.Time) string {
    return t.Format("2006-01-02")
})
```

`Reload(true)` is essential during development  -  without it, you need to restart the server to see template changes. Disable it in production for performance.

## Embedding Templates in the Binary

For production deployments, you can embed templates into your Go binary using `embed.FS`:

```go
import "embed"

//go:embed views/*
var viewsFS embed.FS

engine := html.NewFileSystem(http.FS(viewsFS), ".html")
```

This eliminates the need to ship template files alongside your binary. The templates are compiled into the executable, making deployment a single file copy.

## When to Use Which Engine

- **Building a Go-native app?** Use `html`  -  it is the standard, has the best tooling support, and is fast.
- **Working with frontend developers who know Django/Jinja2?** Use `django`  -  the syntax is familiar.
- **Need clean, minimal markup?** Use `pug`  -  indentation-based syntax reduces boilerplate.
- **Rendering emails or simple content?** Use `mustache`  -  logic-less templates force separation of concerns.
- **Maximum rendering performance?** Use `jet`  -  benchmarks show it is consistently fast.

## Internal References

- [Template Documentation](/template/)
- [Templates Guide](/guide/templates)
- [HTML Engine](/template/html/)
- [Django Engine](/template/django/)
- [Pug Engine](/template/pug/)
