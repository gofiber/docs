---
slug: fiber-v3-htmx
title: "Fiber + HTMX: Interactive Apps Without the Build Step"
authors: [fiber-team]
tags: [fiber, v3, htmx, templates, html, hypermedia, go]
description: "Server-rendered HTML with just enough interactivity - build a live-search page with Fiber templates and HTMX. No bundler, no node_modules, one binary."
---

For a lot of applications - admin panels, dashboards, internal tools, CRUD frontends - the default stack of a JavaScript SPA talking to a JSON API is more machinery than the problem needs. Two codebases, a bundler, a node toolchain in CI, and client-side state that mirrors what the server already knows.

HTMX takes the opposite approach: the server renders HTML, and a small script extends HTML with attributes like `hx-get` and `hx-target` so any element can fetch a fragment and swap it into the page. No build step, no client-side router, no JSON serialization layer.

Fiber is a natural fit for this. Its template engines render fragments fast, the whole application compiles to one binary, and the request handling you already know - routing, binding, middleware - is all there is to learn. Let's build a live-search contact list to see the full loop.

<!-- truncate -->

## The Setup

Fiber's template packages wrap several engines behind one interface. We use the `html` engine, which is Go's standard `html/template` with directory loading:

```go
package main

import (
    "github.com/gofiber/fiber/v3"
    "github.com/gofiber/template/html/v2"
)

func main() {
    engine := html.New("./views", ".html")

    app := fiber.New(fiber.Config{
        Views: engine,
    })

    app.Get("/", func(c fiber.Ctx) error {
        return c.Render("index", fiber.Map{
            "Contacts": store.All(),
        }, "layouts/main")
    })

    app.Listen(":3000")
}
```

Note what we did **not** do: set `ViewsLayout` in the config. Full pages pass their layout explicitly as the third argument to `Render`, and fragment responses render without one. That distinction is the backbone of an HTMX app.

The layout pulls in HTMX with a single script tag - this is the entire frontend toolchain:

```html
<!-- views/layouts/main.html -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Contacts</title>
  <script src="https://unpkg.com/htmx.org@2"></script>
</head>
<body>
  {{embed}}
</body>
</html>
```

`{{embed}}` is where the page content lands when a template renders with this layout.

## Fragments, Not JSON

The core idea: endpoints return HTML snippets, and HTMX attributes declare where they go. Here is the index page with a search box:

```html
<!-- views/index.html -->
<h1>Contacts</h1>

<input type="search" name="q" placeholder="Search..."
       hx-get="/search"
       hx-trigger="input changed delay:300ms"
       hx-target="#results">

<table>
  <tbody id="results">
    {{template "partials/rows" .}}
  </tbody>
</table>
```

Read the attributes like a sentence: on input, after the value changed and 300ms of quiet, GET `/search` and put the response into `#results`. The debounce that would be a `useEffect` dance in React is one attribute.

The rows live in their own partial so the search endpoint can render just them:

```html
<!-- views/partials/rows.html -->
{{range .Contacts}}
<tr>
  <td>{{.Name}}</td>
  <td>{{.Email}}</td>
</tr>
{{else}}
<tr><td colspan="2">No results</td></tr>
{{end}}
```

And the handler is four lines, because it does exactly what every Fiber handler does - read input, render output:

```go
app.Get("/search", func(c fiber.Ctx) error {
    q := c.Query("q")
    return c.Render("partials/rows", fiber.Map{
        "Contacts": store.Search(q),
    })
})
```

No layout argument, so the response is just `<tr>` elements. HTMX swaps them into the tbody. That is the whole feature: live search with zero lines of JavaScript written by you.

## Forms Without Page Reloads

Adding a contact works the same way. The form posts via HTMX and prepends the new row:

```html
<form hx-post="/contacts" hx-target="#results" hx-swap="afterbegin">
  <input name="name" placeholder="Name">
  <input name="email" type="email" placeholder="Email">
  <button type="submit">Add</button>
</form>
```

The handler uses Fiber's [binding](/api/bind) to parse the form - no body-parser middleware, `Bind` reads the Content-Type:

```go
type ContactInput struct {
    Name  string `form:"name"`
    Email string `form:"email"`
}

app.Post("/contacts", func(c fiber.Ctx) error {
    var in ContactInput
    if err := c.Bind().Form(&in); err != nil {
        return err
    }
    contact := store.Add(in.Name, in.Email)
    return c.Render("partials/row", contact)
})
```

One thing to know before you build validation on top: HTMX only swaps successful responses by default. For validation errors, the pragmatic options are rendering the form partial with inline error messages, or using the `HX-Retarget` response header to point the error fragment somewhere else. Start with the first; reach for the second when you need it.

## Full Pages vs Fragments

If a user opens `/search?q=anna` directly - a bookmark, a shared link - the endpoint must return a complete page, not a bare fragment. HTMX marks its own requests with a header, so one check covers deep linking:

```go
app.Get("/search", func(c fiber.Ctx) error {
    data := fiber.Map{"Contacts": store.Search(c.Query("q"))}

    if c.Get("HX-Request") == "true" {
        return c.Render("partials/rows", data) // fragment for HTMX
    }
    return c.Render("index", data, "layouts/main") // full page for the browser
})
```

This pattern - same route, same data, two render depths - is the HTMX equivalent of server-side rendering plus hydration, at a fraction of the complexity.

## Talking Back Through Headers

The server can steer the client with response headers instead of returning markup:

```go
// After logout: tell HTMX to do a full browser redirect
app.Post("/logout", func(c fiber.Ctx) error {
    sess.Destroy()
    c.Set("HX-Redirect", "/login")
    return c.SendStatus(fiber.StatusOK)
})

// After adding a contact: fire a client-side event other elements can react to
c.Set("HX-Trigger", "contact-added")
```

`HX-Trigger` is how independent page regions stay in sync: a counter element with `hx-trigger="contact-added from:body"` refreshes itself whenever the event fires, without the form knowing it exists.

## What You End Up With

A single Go binary, a `views/` directory, and a script tag. Deploys are `scp` and restart. There is no bundle to invalidate, no API versioning between your own frontend and backend, and the mental model is one you already have: routes in, HTML out.

Serve your CSS through the [static middleware](/middleware/static), and if you want a truly single-file deploy, `go:embed` both the views and the assets into the binary.

## Internal References

- [Templates Guide](/guide/templates)
- [Bind API](/api/bind)
- [Static Middleware](/middleware/static)
- [Template Engines](/blog/fiber-v3-template-engines)
- [Binding in Practice](/blog/fiber-v3-binding-in-practice)
