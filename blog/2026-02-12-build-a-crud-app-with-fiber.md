---
slug: build-a-crud-app-with-fiber
title: Build a CRUD API with Fiber
authors: [fiber-team]
tags: [fiber, v3, crud, gorm, postgres, go]
description: Build a practical CRUD API in Fiber v3 and keep the request flow understandable as it grows.
---

CRUD APIs are often where a backend project either becomes maintainable or becomes expensive.

At first, everything feels easy: a quick route, a quick DB call, done. Three months later, handlers parse requests in different ways, errors are inconsistent, and every change takes twice as long as expected.

This post is about avoiding that path from the start.

We'll use Fiber v3 with the `gorm-postgres` recipe, but the real goal is not just to "get CRUD working." The goal is to set up a structure your team can still understand when the API grows.

<!-- truncate -->

## What We Are Building

A simple books API with five operations:

- create a book
- list all books
- query by title
- update a book
- delete a book

Nothing here is technically complex. That is exactly why it is a good example: if the simple path is clean, the complex path gets easier later.

## Why Route Structure Matters More Than People Think

In early APIs, teams usually focus on handler internals and ignore route shape. Then versioning starts, clients depend on edge-case behavior, and cleanup gets painful.

The recipe keeps route registration explicit in one place:

```go
func setUpRoutes(app *fiber.App) {
    app.Get("/hello", routes.Hello)
    app.Get("/allbooks", routes.AllBooks)
    app.Post("/addbook", routes.AddBook)
    app.Post("/book", routes.Book)
    app.Put("/update", routes.Update)
    app.Delete("/delete", routes.Delete)
}
```

That explicit list gives you two advantages immediately:

1. onboarding gets faster because route intent is visible in one file
2. versioning is straightforward later (`/api/v1`, `/api/v2`) because your boundary is already clear

A note on route naming: the recipe uses action-based paths like `/addbook` and `/allbooks`, which works well for learning. In production, RESTful resource-based paths (`GET /books`, `POST /books`, `GET /books/:id`, `PUT /books/:id`, `DELETE /books/:id`) are usually a better choice because they map naturally to HTTP semantics and make API documentation cleaner. The migration from one style to the other is straightforward when routes are centralized like this.

## Input Handling: What Changed from v2

In v2, body parsing used `c.BodyParser()`, query parameters used individual `c.Query()` calls, and path parameters used `c.ParamsInt()`. Each had different error behavior and conventions.

v3 unifies all of this under `c.Bind()`. The recipe handler shows the pattern:

```go
func AddBook(c fiber.Ctx) error {
    book := new(models.Book)

    if err := c.Bind().Body(book); err != nil {
        return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": err.Error()})
    }

    database.DB.Db.Create(&book)
    return c.Status(fiber.StatusOK).JSON(book)
}
```

This may look trivial, but the consistency matters. Every handler follows the same shape: bind input, check for errors, run logic, return response. When your team agrees on this pattern, code reviews get shorter and parsing bugs become rare.

If you need validation beyond what struct tags provide, Fiber v3 supports built-in validation through the `StructValidator` config. You configure it once at app level and every `Bind()` call automatically validates:

```go
type CreateBook struct {
    Title  string `json:"title" validate:"required"`
    Author string `json:"author" validate:"required"`
}
```

See the [Binding in Practice](/blog/fiber-v3-binding-in-practice) post for the full validation setup.

## What Actually Happens in a CRUD Request

```mermaid
flowchart LR
    A["Client sends JSON"] --> B["Fiber matches route"]
    B --> C["c.Bind().Body parses payload"]
    C --> D{"Payload valid?"}
    D -- no --> E["Return 400"]
    D -- yes --> F["Run GORM operation"]
    F --> G["PostgreSQL"]
    G --> H["Return JSON response"]
```

The key design choice is where errors are handled. Do not push parse/validation errors too deep. If they are request-shape errors, fail early and return stable responses.

## Run Locally

```bash
git clone https://github.com/gofiber/recipes.git
cd recipes/gorm-postgres
go run app.go
```

The recipe expects local Postgres defaults. If your environment differs, adjust DSN settings in `database/database.go`.

## Smoke Tests That Are Worth Running

```bash
# Create
curl -i -X POST http://localhost:3000/addbook \
  -H 'Content-Type: application/json' \
  -d '{"title":"Distributed Systems","author":"Tanenbaum"}'

# Read all
curl -i http://localhost:3000/allbooks

# Read by title
curl -i -X POST http://localhost:3000/book \
  -H 'Content-Type: application/json' \
  -d '{"title":"Distributed Systems"}'

# Update
curl -i -X PUT http://localhost:3000/update \
  -H 'Content-Type: application/json' \
  -d '{"title":"Distributed Systems","author":"A. Tanenbaum"}'

# Delete
curl -i -X DELETE http://localhost:3000/delete \
  -H 'Content-Type: application/json' \
  -d '{"title":"Distributed Systems"}'
```

These are not just demo commands. They are a minimum regression checklist for any CRUD service before merging route changes.

## Practical Lessons Before You Ship This Pattern

The recipe updates and deletes by title. That is fine for learning, but in production you should usually move to immutable identifiers (numeric ID, UUID, ULID). Fiber v3 supports [custom route constraints](/blog/whats-new-in-fiber-v3#8-custom-route-constraints) that can validate identifier formats at the routing layer, so invalid IDs never reach your handler.

Avoid sending raw database errors to clients. A stable error envelope makes frontend integration predictable and simplifies incident handling:

```go
// consistent error response shape
return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
    "error": "failed to create book",
    "code":  "CREATE_FAILED",
})
```

Finally, if you add auth/validation middleware later, keep the same flow discipline: bind input, validate, execute logic, map response. That consistency is what makes the codebase scale.

## Recipe and Next Step

- Primary reference: [gofiber/recipes/gorm-postgres](https://github.com/gofiber/recipes/tree/master/gorm-postgres)

A strong next step is to add validation (see [Binding in Practice](/blog/fiber-v3-binding-in-practice)) and move routes under `/api/v1` with consistent response envelopes (`data`, `error`, `meta`). That gives you a cleaner base before feature count grows.
