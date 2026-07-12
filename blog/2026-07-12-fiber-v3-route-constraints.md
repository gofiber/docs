---
slug: fiber-v3-route-constraints
title: "Route Constraints: Validation Before Your Handler Runs"
authors: [fiber-team]
tags: [fiber, v3, routing, constraints, validation, go]
description: "Stop writing strconv.Atoi at the top of every handler - route constraints reject malformed parameters during route matching, before your code ever runs."
---

Almost every REST API has a handler that starts like this:

```go
app.Get("/users/:id", func(c fiber.Ctx) error {
    id, err := strconv.Atoi(c.Params("id"))
    if err != nil {
        return fiber.ErrBadRequest
    }
    // ... finally, the actual logic
})
```

Three lines of ceremony before the handler does anything useful, repeated in every handler that takes a numeric parameter. Fiber has a feature that moves this check into the router itself: route constraints. Declare the parameter as `:id<int>` and the route simply does not match for `/users/abc`. Your handler only ever sees values that passed the check.

Constraints arrived back in v2.37 and were inspired by .NET Core routing. They remain one of the least-known routing features, which is a shame, because they remove boilerplate exactly where it accumulates fastest.

<!-- truncate -->

## The Basics

A constraint sits in angle brackets directly after the parameter name:

```go
app.Get("/users/:id<int>", func(c fiber.Ctx) error {
    // c.Params("id") is guaranteed to look like an integer
    id, _ := strconv.Atoi(c.Params("id"))
    return c.JSON(store.Find(id))
})

// curl http://localhost:3000/users/42   -> 200, the handler runs
// curl http://localhost:3000/users/abc  -> 404, the handler never runs
```

The constraint executes during route matching, after the URL is tokenized into parameters. If the value fails the check, Fiber behaves as if this route did not exist for that request and continues looking for another match.

## Constraints Are Matching Rules, Not Input Validation

This is the mental model that decides whether constraints fit your use case: a failed constraint produces **404 Not Found**, not 400 Bad Request. The route did not match; there is nothing to validate.

That has two consequences. First, if your API contract promises a 400 with a helpful message for malformed input, a constraint is the wrong tool - do the check in the handler or through [binding](/blog/fiber-v3-binding-in-practice) with a validator. Second, because a failed constraint falls through to the next route, you can use constraints for dispatch, which is where they get genuinely interesting.

## What's Built In

Fiber ships constraints for the common cases:

| Constraint | Example | Matches |
| --- | --- | --- |
| `int` | `:id<int>` | 123456789, -5 |
| `bool` | `:active<bool>` | true, false |
| `float` | `:weight<float>` | 3.14, -1001.01e8 |
| `guid` | `:id<guid>` | CD2C1638-1638-72D5-1638-DEADBEEF1638 |
| `alpha` | `:name<alpha>` | Rick (letters only, case-insensitive) |
| `len(n)` / `minLen(n)` / `maxLen(n)` | `:code<len(6)>` | string length checks |
| `min(n)` / `max(n)` / `range(min,max)` | `:age<range(18,120)>` | integer value checks |
| `datetime(layout)` | `:dob<datetime(2006\\-01\\-02)>` | 2005-11-01 |
| `regex(pattern)` | `:date<regex(\d{4}-\d{2}-\d{2})>` | 2022-08-27 |

Combine several with a semicolon; all of them must pass:

```go
app.Get("/:code<minLen(3);maxLen(5)>", func(c fiber.Ctx) error {
    return c.SendString(c.Params("code"))
})

// /ab      -> 404 (too short)
// /abcdef  -> 404 (too long)
// /abcd    -> "abcd"
```

## Regex Without the Regret

Fiber's router deliberately omits regex route patterns because of their performance cost. The `regex()` constraint is the targeted escape hatch: Fiber compiles the pattern once at route registration, and each request only runs the precompiled matcher.

```go
app.Get(`/reports/:date<regex(\d{4}-\d{2}-\d{2})>`, func(c fiber.Ctx) error {
    return c.SendString("report for " + c.Params("date"))
})
```

Use a backtick string for the route so you do not have to double-escape the pattern.

## Dispatch by Shape

Because a failed constraint falls through to the next registered route, two routes can share a path and split traffic by parameter shape:

```go
// /users/42   -> lookup by numeric ID
app.Get("/users/:id<int>", func(c fiber.Ctx) error {
    return c.SendString("by id: " + c.Params("id"))
})

// /users/rene -> lookup by username
app.Get("/users/:name<alpha>", func(c fiber.Ctx) error {
    return c.SendString("by name: " + c.Params("name"))
})
```

No `if isNumeric(...)` branching inside one handler, no shared handler that does two jobs. Routes match in registration order, so put the more specific shape first when shapes overlap.

## Optional Parameters

Constraints compose with optional parameters. The constraint only applies when the parameter is present:

```go
app.Get("/items/:page<int>?", func(c fiber.Ctx) error {
    return c.SendString(c.Params("page", "1"))
})

// /items     -> "1" (parameter absent, default used)
// /items/7   -> "7"
// /items/x   -> 404 (present but not an int)
```

## Custom Constraints

When the built-ins are not enough - say a parameter must be a valid ULID - implement the `CustomConstraint` interface and register it on the app:

```go
type UlidConstraint struct {
    fiber.CustomConstraint
}

func (*UlidConstraint) Name() string {
    return "ulid"
}

func (*UlidConstraint) Execute(param string, args ...string) bool {
    _, err := ulid.Parse(param)
    return err == nil
}

app := fiber.New()
app.RegisterCustomConstraint(&UlidConstraint{})

app.Get("/events/:id<ulid>", func(c fiber.Ctx) error {
    return c.SendString("event " + c.Params("id"))
})
```

A custom constraint with the same name as a built-in one overrides it. That is intentional: if your API needs a stricter `int` (say, no negative values anywhere), you can redefine it once instead of decorating every route.

One escaping caveat: inside constraint arguments, routing characters (`*`, `+`, `?`, `:`, `/`, `<`, `>`, `;`, `(`, `)`) must be prefixed with `\\` so the route parser does not misread them. The `datetime` layout in the table above shows this with its escaped hyphens.

## When to Use What

Use **constraints** for the shape of the URL: type dispatch, keeping obviously malformed requests out of your handlers, and giving crawlers and scanners a clean 404 instead of exercising your error paths.

Use **binding with validation** for actual input validation: anything where the client deserves a 400 with a message explaining what was wrong.

The two are not competitors. A route like `/users/:id<int>` combined with a bound and validated request body is less code and clearer intent than doing everything by hand in the handler.

## Internal References

- [Routing Guide: Constraints](/guide/routing#constraints)
- [Binding in Practice](/blog/fiber-v3-binding-in-practice)
- [What's New](/whats_new)
