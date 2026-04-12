---
slug: fiber-v3-custom-context
title: Custom Context in Practice
authors: [fiber-team]
tags: [fiber, v3, context, architecture, go]
description: Extend context safely with NewWithCustomCtx for cleaner handler code.
---

As backend services mature, handlers start repeating the same request plumbing over and over again. Tenant resolution, actor identification, correlation values, access-scoped metadata. None of this is business logic, but all of it is required before any business logic can run.

In a typical multi-tenant API, every handler opens with five or six lines of header extraction and default-value logic. When that logic is duplicated across fifty endpoints, small inconsistencies creep in. One handler reads `X-Tenant-ID`, another reads `X-TenantID`, a third falls back to a query parameter. Custom context gives that plumbing a single, typed home.

<!-- truncate -->

## How Teams Solved This in v2

In v2, the most common pattern was a combination of middleware setting `c.Locals()` values and helper functions extracting them:

```go
// v2: middleware sets locals
func TenantMiddleware(c *fiber.Ctx) error {
    tenantID := c.Get("X-Tenant-ID")
    if tenantID == "" {
        tenantID = "public"
    }
    c.Locals("tenantID", tenantID)
    return c.Next()
}

// v2: helper function reads locals
func GetTenantID(c *fiber.Ctx) string {
    if v, ok := c.Locals("tenantID").(string); ok {
        return v
    }
    return "public"
}

// v2: every handler calls the helper
app.Get("/data", func(c *fiber.Ctx) error {
    tenantID := GetTenantID(c)
    // ...
})
```

This worked, but it had problems. The `Locals` key was a string, so typos were silent failures. The helper function lived in a utility package that handlers had to import. The type assertion could fail. And nothing prevented a handler from reading locals directly with a different key, bypassing the helper entirely.

Over time, teams ended up with multiple helper packages, inconsistent naming, and no compile-time guarantee that the right metadata was available.

## How v3 Custom Context Works

`NewWithCustomCtx` lets you define a typed context struct that embeds `fiber.DefaultCtx` and adds application-specific methods. The methods are available on every handler's context without imports, casts, or string keys:

```go
type AppCtx struct {
    fiber.DefaultCtx
}

func (c *AppCtx) TenantID() string {
    return c.Get("X-Tenant-ID", "public")
}

func (c *AppCtx) ActorID() string {
    return c.Get("X-Actor-ID", "anonymous")
}

func (c *AppCtx) RequestID() string {
    return c.Get("X-Request-ID")
}

app := fiber.NewWithCustomCtx(func(app *fiber.App) fiber.CustomCtx {
    return &AppCtx{DefaultCtx: *fiber.NewDefaultCtx(app)}
})
```

Handlers use a type assertion to access the custom methods:

```go
app.Get("/whoami", func(c fiber.Ctx) error {
    cc := c.(*AppCtx)
    return c.JSON(fiber.Map{
        "tenant": cc.TenantID(),
        "actor":  cc.ActorID(),
        "reqID":  cc.RequestID(),
    })
})
```

The type assertion is the only boilerplate. Everything else — header reading, default values, naming conventions — lives in one place and is enforced by the compiler.

## Why This Matters for Multi-Tenant Systems

In a multi-tenant API, almost every database query, cache key, and audit log entry needs a tenant identifier. If that identifier comes from a helper function that can be forgotten, you get data leaks (queries without tenant scope) or audit gaps (log entries without tenant context).

With custom context, the method is always available and always returns a consistent value. You can also add computed properties that combine multiple request values:

```go
func (c *AppCtx) AuditContext() map[string]string {
    return map[string]string{
        "tenant":  c.TenantID(),
        "actor":   c.ActorID(),
        "request": c.RequestID(),
        "ip":      c.IP(),
    }
}
```

Audit logging then becomes a single call instead of four separate extractions per handler.

## What Belongs in Custom Context

Custom context should be a boundary helper, not a domain layer. Good candidates:

- Request metadata extraction (tenant, actor, correlation IDs)
- Header convenience methods with defaults
- Request-scoped computed properties (audit maps, permission flags)
- Common response patterns (standard error envelopes)

What does **not** belong in custom context:

- Database access or repository calls
- Business logic or validation rules
- Heavy computation that should live in a service layer

Keep the context thin. If a method needs more than the request itself to do its work, it probably belongs in a service package that receives the context as a parameter.

## Testing Custom Context

Since custom context methods only depend on the request, they are easy to test with `app.Test()`:

```go
app := fiber.NewWithCustomCtx(func(app *fiber.App) fiber.CustomCtx {
    return &AppCtx{DefaultCtx: *fiber.NewDefaultCtx(app)}
})

app.Get("/test", func(c fiber.Ctx) error {
    cc := c.(*AppCtx)
    return c.JSON(fiber.Map{"tenant": cc.TenantID()})
})

req := httptest.NewRequest("GET", "/test", nil)
req.Header.Set("X-Tenant-ID", "acme")

resp, _ := app.Test(req)
// resp body contains {"tenant":"acme"}
```

No mocking, no dependency injection for the context layer itself. The custom methods are pure request readers.

## Migrating from Locals to Custom Context

If your v2 codebase uses `Locals` for request metadata, the migration path is straightforward:

1. Define an `AppCtx` struct with methods that replace each `Locals` key
2. Initialize the app with `NewWithCustomCtx`
3. Replace `GetTenantID(c)` calls with `c.(*AppCtx).TenantID()`
4. Remove the middleware that set locals (the custom method reads headers directly)
5. Remove the helper packages

The result is fewer moving parts: no middleware setting values, no helpers reading them, no string keys that can drift.

## Internal References

- [App API](/api/app)
- [Ctx API](/api/ctx)
- [What's New](/whats_new)
