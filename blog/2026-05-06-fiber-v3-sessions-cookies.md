---
slug: fiber-v3-sessions-cookies
title: Sessions in v3
authors: [fiber-team]
tags: [fiber, v3, sessions, cookies, state, middleware, go]
description: "What changed and why your old patterns won't work  -  the new middleware-based approach, storage backends, and cookie settings that actually matter."
---

If you used sessions in Fiber v2, forget everything. Fiber v3 replaced the session system entirely. The store-based API is gone. Sessions are now middleware  -  you register them once and they are available on every request through the context.

This sounds like a small change. It is not. The new approach changes how you initialize sessions, how you access them in handlers, and how you handle the interaction between sessions and other middleware like CSRF. If you migrate without understanding the new model, you will spend hours debugging session data that silently disappears.

<!-- truncate -->

## The Old Way vs. The New Way

In Fiber v2, you created a session store and manually got/saved sessions in every handler:

```go
// v2 pattern  -  no longer works in v3
store := session.New()

app.Get("/", func(c *fiber.Ctx) error {
    sess, _ := store.Get(c)
    name := sess.Get("name")
    sess.Save()
    // ...
})
```

In v3, sessions are middleware. You register the store once, and sessions are automatically loaded and saved:

```go
// v3 pattern
sessionStore := session.New()

app.Use(sessionStore.Handler())

app.Get("/", func(c fiber.Ctx) error {
    sess := session.FromContext(c)
    name, _ := sess.Get("name").(string)
    // No manual Save() needed  -  the middleware handles it
    return c.SendString("Hello, " + name)
})
```

The key differences:
- **Middleware-based**: Register once with `app.Use()`, not per-handler
- **Automatic lifecycle**: Sessions are loaded before your handler and saved after
- **Context access**: Use `session.FromContext(c)` instead of `store.Get(c)`

## Configuring the Session Store

The session store controls cookie behavior and storage backend:

```go
sessionStore := session.New(session.Config{
    CookieName:        "__Host-session",
    CookieSecure:      true,
    CookieHTTPOnly:    true,
    CookieSameSite:    "Lax",
    CookieSessionOnly: true,  // Cookie expires when browser closes
    IdleTimeout:       30 * time.Minute,
})
```

### Cookie Name: Use the __Host- Prefix

The `__Host-` prefix is a browser security feature. Browsers enforce that cookies with this prefix:
- Must have `Secure` set to `true`
- Must not have a `Domain` attribute (scoped to the exact host)
- Must have `Path` set to `/`

This prevents subdomain cookie injection attacks. If an attacker controls `evil.example.com`, they cannot set a cookie for `app.example.com` when the `__Host-` prefix is used.

### CookieHTTPOnly: Almost Always True

Set this to `true` unless your JavaScript needs to read the session cookie. For sessions, there is almost never a reason for JavaScript to access the session ID  -  the browser sends it automatically with every request.

### IdleTimeout vs. AbsoluteTimeout

Two different timeout concepts:

- **IdleTimeout**: How long a session survives without activity. Each request resets the timer. Default: 30 minutes.
- **AbsoluteTimeout**: Maximum session lifetime regardless of activity. Default: 0 (no absolute limit).

For a typical web app:

```go
sessionStore := session.New(session.Config{
    IdleTimeout:      30 * time.Minute,  // Inactive users get logged out
    AbsoluteTimeout:  24 * time.Hour,    // Everyone gets logged out after 24h
})
```

The absolute timeout is important for security. Without it, a session that stays active forever is a session that can be stolen forever.

## Storage Backends

By default, sessions are stored in memory. This works for development but fails in production for two reasons: memory fills up, and sessions are lost on restart.

### Redis  -  The Production Default

```go
import "github.com/gofiber/storage/redis/v3"

storage := redis.New(redis.Config{
    Host:     "localhost",
    Port:     6379,
    Password: "",
    Database: 0,
})

sessionStore := session.New(session.Config{
    Storage: storage,
})
```

Redis is the natural choice: fast, persistent across restarts, and supports TTL natively. If you are already using Redis for caching, reuse the same instance with a different database number.

### SQLite  -  For Small Apps

```go
import "github.com/gofiber/storage/sqlite3/v3"

storage := sqlite3.New(sqlite3.Config{
    Database: "./sessions.db",
})
```

SQLite works well for single-server deployments where you do not want to run Redis. Sessions survive restarts, and the performance is sufficient for small to medium traffic.

### Postgres or MySQL  -  When You Already Have One

```go
import "github.com/gofiber/storage/postgres/v3"

storage := postgres.New(postgres.Config{
    Host:     "localhost",
    Port:     5432,
    Username: "app",
    Password: "secret",
    Database: "myapp",
    Table:    "sessions",
})
```

If your app already connects to Postgres or MySQL, using it for sessions avoids adding another infrastructure dependency.

## Session + CSRF: The Order That Matters

When using sessions with CSRF protection, the session middleware must come before CSRF:

```go
// Correct order
app.Use(sessionStore.Handler())  // Sessions first
app.Use(csrf.New(csrf.Config{
    Session: sessionStore,       // CSRF uses the session store
}))
```

CSRF in session mode stores the CSRF token inside the user's session. If the session middleware has not run yet, CSRF cannot access the session and token validation fails silently.

## Working with Session Data

### Setting Values

```go
app.Post("/login", func(c fiber.Ctx) error {
    sess := session.FromContext(c)

    sess.Set("userID", user.ID)
    sess.Set("role", user.Role)
    sess.Set("loginAt", time.Now().Unix())

    return c.Redirect().To("/dashboard")
})
```

### Getting Values

Session values are stored as `any`, so you need type assertions:

```go
app.Get("/dashboard", func(c fiber.Ctx) error {
    sess := session.FromContext(c)

    userID, ok := sess.Get("userID").(uint64)
    if !ok {
        return c.Redirect().To("/login")
    }

    return c.JSON(fiber.Map{"userID": userID})
})
```

### Destroying Sessions (Logout)

```go
app.Post("/logout", func(c fiber.Ctx) error {
    sess := session.FromContext(c)

    if err := sess.Destroy(); err != nil {
        return err
    }

    return c.Redirect().To("/login")
})
```

`Destroy()` removes all session data from storage and clears the session cookie. After calling `Destroy()`, any subsequent `sess.Get()` calls in the same request return `nil`.

### Regenerating Session IDs

After authentication state changes  -  login, logout, privilege escalation  -  regenerate the session ID to prevent session fixation attacks:

```go
app.Post("/login", func(c fiber.Ctx) error {
    sess := session.FromContext(c)

    // Authenticate user...

    // Regenerate session ID to prevent fixation
    if err := sess.Regenerate(); err != nil {
        return err
    }

    sess.Set("userID", user.ID)
    return c.Redirect().To("/dashboard")
})
```

This creates a new session ID while preserving the existing session data. The old session ID becomes invalid.

## The Middleware You Should Pair with Sessions

Sessions rarely work alone. Here is the typical middleware stack for an authenticated app:

```go
app := fiber.New()

// 1. Security headers
app.Use(helmet.New())

// 2. Sessions  -  before anything that needs auth state
app.Use(sessionStore.Handler())

// 3. CSRF  -  uses session store
app.Use(csrf.New(csrf.Config{
    Session:        sessionStore,
    CookieSecure:   true,
    CookieHTTPOnly: true,
}))

// 4. Auth middleware  -  checks session for user
app.Use(authMiddleware)

// 5. Routes
app.Get("/dashboard", dashboardHandler)
```

The order is not arbitrary. Each layer depends on the one above it.

## Where to Start

If you are migrating from v2 sessions, start by switching to the middleware pattern. Register `sessionStore.Handler()` early in your middleware stack, replace all `store.Get(c)` calls with `session.FromContext(c)`, and remove manual `sess.Save()` calls. The middleware handles saving automatically.

If you are starting fresh, use Redis as your storage backend and set up the `__Host-` cookie prefix from day one. These two decisions prevent the most common session-related production issues.

## Internal References

- [Session Middleware](/middleware/session)
- [CSRF Middleware](/middleware/csrf)
- [Encrypt Cookie Middleware](/middleware/encryptcookie)
- [Storage Packages](https://github.com/gofiber/storage)
