---
slug: whats-new-in-fiber-v3
title: What's New in Fiber v3
authors: [fiber-team]
tags: [fiber, v3, migration, go]
description: A practical, migration-first guide to Fiber v3 with examples you can apply in production.
---

When most teams read a "what's new" post, they are usually looking for one of two things.

The first is curiosity: what did the framework ship?
The second is risk management: what do we need to change first, and what can wait until later?

For Fiber v3, the second question is the important one.

The release includes a lot of meaningful work, but a few parts have outsized impact in real services: request binding, lifecycle hooks, listen configuration, handler compatibility, context improvements, and the new extractors package.

This article is intentionally written for that reality. You should be able to read this, open one service in your codebase, and know exactly what to migrate first and why.

<!-- truncate -->

## Before You Start: Go 1.25 and the Migration CLI

Fiber v3 requires **Go 1.25** or later. Update your toolchain before upgrading so the module `go` directive and standard library features align with the new minimum version.

Before you dive into manual refactors, use the migration helper that ships with the Fiber CLI. It can take care of a large part of repetitive upgrade work and gives you a cleaner baseline for the manual improvements described in this post.

```bash
go install github.com/gofiber/cli/fiber@latest
fiber migrate --to v3.0.0
```

You still need to review and test the result, but using the migrator first usually saves time and reduces mechanical errors.

## Start with an Upgrade Strategy, Not a Feature Tour

The teams that struggle with migrations usually do one thing wrong: they migrate randomly.

Someone updates one handler. Someone else copies a new example into another package. A third person keeps old parsing logic because "it still works." After two sprints, the codebase is half old, half new, and debugging gets harder.

Fiber v3 rewards the opposite approach:

1. standardize request input first
2. standardize lifecycle behavior second
3. modernize client and boundary layers third

If you do that in order, you get consistency fast and avoid expensive refactors later.

## 1) Unified Binding: The Single Biggest Migration Win

One of the most important v3 changes is the unified binding system. In v2, request parsing was split across `BodyParser`, `ParamsInt`, `QueryBool`, `CookieParser`, and individual `c.Query()` / `c.Get()` calls. Each method had its own behavior, and handlers ended up with inconsistent parsing styles.

v3 replaces all of that with `c.Bind()`:

```go
type UserInput struct {
    ID      int    `uri:"id" json:"id" query:"id"`
    Name    string `json:"name" form:"name" query:"name"`
    Role    string `header:"X-Role"`
    Session string `cookie:"session_id"`
}

app.Post("/users/:id", func(c fiber.Ctx) error {
    in := new(UserInput)

    if err := c.Bind().All(in); err != nil {
        return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": err.Error()})
    }

    return c.JSON(in)
})
```

`Bind().All()` applies sources in a fixed precedence: URI params, body, query, headers, cookies. That removes ambiguity in mixed-source endpoints. There are also focused methods like `Bind().Body()`, `Bind().Query()`, `Bind().Header()`, `Bind().Cookie()`, and `Bind().URI()` when you only need one source.

v3 binding also supports built-in validation, default values via `default:` tags, and custom binders for formats like YAML. Native CBOR and MsgPack support is included alongside JSON, XML, and form data.

For a deep dive, see [Binding in Practice](/blog/fiber-v3-binding-in-practice).

## 2) Lifecycle Hooks: Deploy Confidence

Most APIs are not just request handlers. They run workers, queues, cleanup logic, telemetry flushes, and startup checks. In v2, the main lifecycle hook was `OnShutdown`, but you could not distinguish "before the server stops accepting" from "after everything is drained."

v3 replaces `OnShutdown` with explicit pre/post phases and adds startup message customization:

```go
app.Hooks().OnPreStartupMessage(func(sm *fiber.PreStartupMessageData) error {
    sm.BannerHeader = "MY-SERVICE " + sm.Version
    sm.AddInfo("env", "Environment", os.Getenv("APP_ENV"))
    return nil
})

app.Hooks().OnPreShutdown(func() error {
    log.Println("stopping workers")
    return stopConsumers()
})

app.Hooks().OnPostShutdown(func(err error) error {
    log.Printf("shutdown done, err=%v", err)
    return flushMetrics()
})
```

v3 also adds registration-time hooks (`OnRoute`, `OnGroup`, `OnName`, `OnMount`) that fire when routes and sub-apps are registered, useful for building route registries and enforcing naming conventions.

For a deep dive, see [Hooks Guide for Clean Lifecycles](/blog/fiber-v3-hooks-guide).

## 3) Listen: Cleaner Configuration

Fiber v3 tightens listen behavior and moves several config properties from `fiber.Config` to `ListenConfig`: `DisableStartupMessage`, `EnablePrefork`, `EnablePrintRoutes`, and `ListenerNetwork`.

Unix sockets are a good example of the improvement. In v2 you had to manually delete old socket files, listen on a `unix` network, and chmod the socket in an `OnListen` hook. v3 handles it:

```go
app := fiber.New()
app.Listen("app.sock", fiber.ListenConfig{
    ListenerNetwork:    fiber.NetworkUnix,
    UnixSocketFileMode: 0770,
})
```

v3 also adds native TLS AutoCert support with Let's Encrypt and ACME providers:

```go
certManager := &autocert.Manager{
    Prompt:     autocert.AcceptTOS,
    HostPolicy: autocert.HostWhitelist("example.com"),
    Cache:      autocert.DirCache("./certs"),
}

app.Listen(":443", fiber.ListenConfig{
    AutoCertManager: certManager,
})
```

## 4) Handler Compatibility: Migrate Without Rewriting

If your org has a large `net/http` or `fasthttp` surface, full rewrites are often unrealistic. Fiber v3 helps by accepting **17 different handler signatures** directly in the router, including native Fiber, `net/http`, `fasthttp`, and Express-style `Req`/`Res` callbacks:

```go
// net/http handler — no adapter needed
app.Get("/legacy", func(w http.ResponseWriter, r *http.Request) {
    w.WriteHeader(http.StatusOK)
    _, _ = w.Write([]byte("legacy route"))
})

// Express-style with next callback
app.Use(func(req fiber.Req, res fiber.Res, next func() error) error {
    req.Headers().Set("X-Via", "compat")
    return next()
})
```

This enables route-by-route migration. You modernize high-value endpoints first while keeping legacy handlers operational.

v3 also adds `RouteChain` for Express-style route declaration and automatically registers `HEAD` routes for every `GET` route.

For a deep dive, see [Handler Compatibility in the New Router](/blog/fiber-v3-adapter-pattern).

## 5) Context Implements `context.Context`

`fiber.Ctx` now satisfies Go's `context.Context` interface. This eliminates the v2 pattern of calling `c.UserContext()` to bridge between Fiber and the standard library:

```go
// v2: manual bridging
ctx := c.UserContext()
rows, err := db.QueryContext(ctx, "SELECT ...")

// v3: pass Fiber context directly
rows, err := db.QueryContext(c, "SELECT ...")
```

Deadline propagation, cancellation, and request-scoped values all work natively. Libraries that accept `context.Context` now get proper request lifecycle integration without boilerplate.

v3 also adds many new context methods: `Drop()` for silent connection termination (DDoS mitigation), `End()` for immediate response flush, `SendEarlyHints()` for HTTP 103 preloading, `AutoFormat()` for content negotiation, `SendStreamWriter()` for SSE and streaming, and numerous inspection helpers like `IsJSON()`, `IsWebSocket()`, `HasBody()`, and `IsPreflight()`.

For a deep dive on context extensions, see [Custom Context in Practice](/blog/fiber-v3-custom-context).

## 6) Generic Functions: Type-Safe Parameter Access

v3 introduces generic helper functions that replace the old type-specific methods:

```go
// v2: ParamsInt, QueryBool, QueryFloat — individual methods
id, _ := c.ParamsInt("id")

// v3: generic functions with type inference and defaults
id := fiber.Params[int](c, "id", 0)
age := fiber.Query[int](c, "age", 18)
agent := fiber.GetReqHeader[string](c, "User-Agent", "Unknown")
```

`fiber.Locals[T]` provides type-safe local value storage, and `fiber.Convert[T]` handles custom conversions with fallback defaults.

## 7) Extractors Package: Shared Middleware Policy

The new `extractors` package consolidates value extraction that was previously duplicated across middleware. Instead of each middleware implementing its own token/key lookup, they now share a common API:

```go
app.Use(keyauth.New(keyauth.Config{
    Extractor: extractors.Chain(
        extractors.FromAuthHeader("Bearer"),
        extractors.FromHeader("X-API-Key"),
        extractors.FromCookie("api_key"),
    ),
}))
```

`FromAuthHeader` includes strict RFC 9110/7235 validation. The chain tries each source in order and returns the first success, making extraction policy explicit and auditable.

For a deep dive, see [Extractors Guide for Middleware](/blog/fiber-v3-extractors-guide).

## 8) Custom Route Constraints

Instead of validating every path parameter deep in handlers, you can move constraint logic to routing:

```go
type UlidConstraint struct{ fiber.CustomConstraint }

func (*UlidConstraint) Name() string { return "ulid" }
func (*UlidConstraint) Execute(param string, _ ...string) bool {
    _, err := ulid.Parse(param)
    return err == nil
}

app.RegisterCustomConstraint(&UlidConstraint{})
app.Get("/users/:id<ulid>", func(c fiber.Ctx) error {
    return c.SendString("valid id: " + c.Params("id"))
})
```

Malformed IDs never reach business logic. The route returns 404 before the handler runs.

## 9) Cookie and RFC Improvements

v3 makes several protocol improvements that reduce interoperability incidents:

- **Auto-Secure for SameSite=None**: When you set `SameSite=None`, Fiber automatically adds `Secure=true` as required by RFC 6265bis and modern browsers
- **CHIPS support**: Partitioned cookies for third-party contexts via `Partitioned: true`
- **Non-ASCII filenames**: `Attachment` and `Download` use RFC 6266/8187 encoding
- **Default redirect status**: Changed from 302 to 303 for more consistent browser behavior

For a deep dive, see [RFC Conformance in Practice](/blog/fiber-v3-rfc-conformance).

## 10) Storage, Client, and Middleware Updates

**Storage**: All storage adapters now include `WithContext` methods (`GetWithContext`, `SetWithContext`, `DeleteWithContext`, `ResetWithContext`) for cancellation, timeout control, and request-scoped behavior.

**Client**: The client package has been completely rebuilt with cookie jar support, request/response hooks, retry configuration, proxy support, and debug mode. See [New Client Deep Dive](/blog/fiber-v3-client-deep-dive).

**Middleware changes worth noting**:
- `app.Static()` removed — use the [static middleware](/middleware/static) instead
- `Filesystem` middleware removed — static middleware covers both
- Middleware data now uses `FromContext()` functions (e.g., `requestid.FromContext(c)`) instead of string-based `c.Locals()` keys
- Cache middleware: RFC-compliant `Age` header, `MaxBytes` limit, non-cacheable status filtering
- Compression: zstd support added alongside gzip, deflate, and brotli
- CORS: fields changed from comma-separated strings to slices
- Healthcheck: simplified to single generic probe handler, no auto-registered endpoints
- BasicAuth: passwords must be hashed, authorizer receives `fiber.Ctx`
- Services: new feature for managing application dependencies (databases, caches) as first-class service objects

## 11) Stricter Middleware Prefix Matching

Middleware prefix matching is now stricter: partial matches must end at a slash boundary or be an exact match. This prevents `/api` middleware from running on `/apiv1`:

```go
app.Use("/api", apiMiddleware)  // runs for /api and /api/... only
```

Multiple prefixes are supported, and sub-apps mount with `app.Use()` instead of the removed `app.Mount()`.

## Where to Practice These Changes

For the complete list of v3 changes, keep the official page open while migrating:
[What's New in Fiber v3](/whats_new)

- CRUD + binding patterns: [gofiber/recipes/gorm-postgres](https://github.com/gofiber/recipes/tree/master/gorm-postgres)
- Static + middleware behavior: [gofiber/recipes/file-server](https://github.com/gofiber/recipes/tree/master/file-server)
- SPA fallback behavior: [gofiber/recipes/react-router](https://github.com/gofiber/recipes/tree/master/react-router)
- API docs integration: [gofiber/recipes/swagger](https://github.com/gofiber/recipes/tree/master/swagger)

If you only do one thing this week: pick one service, enforce a single binding style, and add lifecycle hooks around startup/shutdown. That alone delivers a measurable improvement in maintainability.
