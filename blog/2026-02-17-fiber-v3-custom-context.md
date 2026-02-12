---
slug: fiber-v3-custom-context
title: Custom Context in Practice
authors: [fiber-team]
tags: [fiber, v3, context, architecture, go]
description: Extend context safely with NewWithCustomCtx for cleaner handler code.
---

As backend services mature, handlers start repeating the same request plumbing over and over again. Tenant resolution, actor identification, correlation values, access-scoped metadata. None of this is business logic, but all of it is required.

The custom context feature is useful because it gives that plumbing a real home.

Instead of hiding request helpers across utility packages and middleware side effects, you can attach focused helper behavior to your context type and keep handlers readable.

<!-- truncate -->

## Why This Feels Better in Real Code

In many v2 codebases, teams solved shared request metadata with a mix of locals, helper functions, and conventions that were never fully enforced. It worked, but often looked different in every module.

With `NewWithCustomCtx`, you can make request helper behavior explicit in one place and reduce repetition.

## Minimal Setup

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

app := fiber.NewWithCustomCtx(func(app *fiber.App) fiber.CustomCtx {
    return &AppCtx{DefaultCtx: *fiber.NewDefaultCtx(app)}
})

app.Get("/whoami", func(c fiber.Ctx) error {
    cc := c.(*AppCtx)
    return c.JSON(fiber.Map{
        "tenant": cc.TenantID(),
        "actor":  cc.ActorID(),
    })
})
```

The handler now communicates intent directly. No helper imports, no repeated lookup code, no ambiguity around which metadata source is canonical.

## Where Teams Get Value Fast

This feature is especially strong in multi-tenant APIs, audit-heavy services, and systems with strict access tracing requirements.

If your handlers currently open with five lines of metadata extraction, custom context will usually improve clarity immediately.

## What to Keep Out of Context

Custom context should not become a home for heavy business logic. Keep it focused on request-level helpers and metadata access. Treat it as a boundary helper, not a domain layer.

## v2 vs v3 Practical Difference

The difference is not that shared helpers were impossible in v2. The difference is that v3 makes this pattern cleaner and more intentional, so teams are more likely to use it consistently.

Consistency is the real win.

## Internal References

- [App API](/api/app)
- [Ctx API](/api/ctx)
- [What's New](/whats_new)
