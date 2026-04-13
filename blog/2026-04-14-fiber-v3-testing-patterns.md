---
slug: fiber-v3-testing-patterns
title: "Testing Fiber Apps: The Patterns Nobody Talks About"
authors: [fiber-team]
tags: [fiber, v3, testing, go, patterns, best-practices]
description: Go beyond basic handler tests with patterns for middleware chains, error handlers, route groups, and integration testing in Fiber v3.
---

Every Fiber tutorial shows you how to test a single GET handler. Create an app, register a route, call `app.Test()`, check the status code. Done.

Then you try to test something real — a middleware chain where auth runs before validation, a custom error handler that renders different responses based on content type, a route group with shared state — and the tutorial patterns fall apart. The handler works in isolation but fails when composed. The test passes with a hardcoded body but breaks when you add a request ID middleware that changes the response shape.

Testing Fiber applications well requires patterns that match how Fiber applications actually work: as compositions of handlers, middleware, and configuration that interact in specific ways.

<!-- truncate -->

## The Basics: app.Test()

Fiber's `Test` method is the foundation. It takes a standard `*http.Request` and returns a standard `*http.Response`, no actual network listener required:

```go
func TestGetUser(t *testing.T) {
    app := fiber.New()
    app.Get("/users/:id", func(c fiber.Ctx) error {
        return c.JSON(fiber.Map{"id": c.Params("id")})
    })

    req := httptest.NewRequest(http.MethodGet, "/users/42", nil)
    resp, err := app.Test(req)
    if err != nil {
        t.Fatal(err)
    }

    assert.Equal(t, 200, resp.StatusCode)
}
```

This works because Fiber internally creates a `fasthttp.RequestCtx` from your `http.Request`, runs the full router and middleware stack, and converts the result back. No port binding, no goroutine leaks, no flaky tests from port conflicts.

The default timeout is 1 second. For handlers that do real work, like database queries in integration tests, increase it:

```go
resp, err := app.Test(req, fiber.TestConfig{
    Timeout: 5 * time.Second,
})
```

For unit tests where you know the handler returns immediately, disable the timeout entirely:

```go
resp, err := app.Test(req, fiber.TestConfig{
    Timeout: 0,
})
```

## Testing Middleware in Isolation

A middleware function is just a handler that calls `c.Next()`. You can test it by creating a minimal app with the middleware and a dummy handler:

```go
func TestAuthMiddleware(t *testing.T) {
    app := fiber.New()
    app.Use(authMiddleware)
    app.Get("/protected", func(c fiber.Ctx) error {
        return c.SendString("ok")
    })

    // Without token — should get 401
    req := httptest.NewRequest(http.MethodGet, "/protected", nil)
    resp, _ := app.Test(req)
    assert.Equal(t, 401, resp.StatusCode)

    // With valid token — should pass through
    req = httptest.NewRequest(http.MethodGet, "/protected", nil)
    req.Header.Set("Authorization", "Bearer valid-token")
    resp, _ = app.Test(req)
    assert.Equal(t, 200, resp.StatusCode)
}
```

The important thing is that this tests the middleware in context — with a real router, real header parsing, and real `c.Next()` propagation. You are testing behavior, not implementation.

## Testing Middleware Composition

The bugs that matter most happen between middleware, not inside them. When auth, rate limiting, and request ID middleware interact, the order and error propagation matter.

Test the composition explicitly:

```go
func TestMiddlewareChain(t *testing.T) {
    app := fiber.New()
    app.Use(requestid.New())
    app.Use(authMiddleware)
    app.Use(rateLimiter)
    app.Get("/api/data", dataHandler)

    // An unauthenticated request should fail at auth,
    // not at the rate limiter
    req := httptest.NewRequest(http.MethodGet, "/api/data", nil)
    resp, _ := app.Test(req)
    assert.Equal(t, 401, resp.StatusCode)

    // The response should still have a request ID,
    // because requestid runs before auth
    assert.NotEmpty(t, resp.Header.Get("X-Request-Id"))
}
```

This catches the common bug where a middleware short-circuits and skips downstream middleware that should still run. Request ID middleware should always add a header, even on error responses. If your tests only check the happy path, you will never catch this.

## Testing Custom Error Handlers

Custom error handlers are critical infrastructure, but they are rarely tested directly. Build a test that triggers different error types and verifies the response:

```go
func TestCustomErrorHandler(t *testing.T) {
    app := fiber.New(fiber.Config{
        ErrorHandler: myErrorHandler,
    })

    // Route that returns a fiber.Error
    app.Get("/not-found", func(c fiber.Ctx) error {
        return fiber.NewError(404, "Page not found")
    })

    // Route that returns an unexpected error
    app.Get("/crash", func(c fiber.Ctx) error {
        return errors.New("database connection failed: host=db.internal")
    })

    // Known error: should return the controlled message
    req := httptest.NewRequest(http.MethodGet, "/not-found", nil)
    resp, _ := app.Test(req)
    body, _ := io.ReadAll(resp.Body)
    assert.Equal(t, 404, resp.StatusCode)
    assert.Contains(t, string(body), "Page not found")

    // Unknown error: should NOT leak the internal message
    req = httptest.NewRequest(http.MethodGet, "/crash", nil)
    resp, _ = app.Test(req)
    body, _ = io.ReadAll(resp.Body)
    assert.Equal(t, 500, resp.StatusCode)
    assert.NotContains(t, string(body), "database connection failed")
    assert.NotContains(t, string(body), "db.internal")
}
```

That last assertion — checking that the response does *not* contain the internal error — is the most important test in your entire error handling suite. It catches information leakage.

## Testing Route Groups

When you have nested route groups with group-specific middleware, test them as a unit:

```go
func setupAPIRoutes(app *fiber.App) {
    api := app.Group("/api")
    api.Use(apiKeyAuth)

    v1 := api.Group("/v1")
    v1.Get("/users", listUsers)
    v1.Post("/users", createUser)

    v2 := api.Group("/v2")
    v2.Get("/users", listUsersV2)
}

func TestAPIRouteGroup(t *testing.T) {
    app := fiber.New()
    setupAPIRoutes(app)

    tests := []struct {
        name       string
        path       string
        method     string
        apiKey     string
        wantStatus int
    }{
        {"v1 without key", "/api/v1/users", "GET", "", 401},
        {"v1 with key", "/api/v1/users", "GET", "valid-key", 200},
        {"v2 with key", "/api/v2/users", "GET", "valid-key", 200},
        {"no version", "/api/users", "GET", "valid-key", 404},
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            req := httptest.NewRequest(tt.method, tt.path, nil)
            if tt.apiKey != "" {
                req.Header.Set("X-API-Key", tt.apiKey)
            }
            resp, _ := app.Test(req)
            assert.Equal(t, tt.wantStatus, resp.StatusCode)
        })
    }
}
```

The key pattern is extracting route setup into a function that accepts `*fiber.App`. This lets your tests use the exact same setup as your production code without duplicating route definitions.

## Testing JSON Request Bodies

POST and PUT handlers need request bodies. Use `strings.NewReader` or `bytes.NewBuffer`:

```go
func TestCreateUser(t *testing.T) {
    app := fiber.New()
    app.Post("/users", createUserHandler)

    body := `{"name": "Alice", "email": "alice@example.com"}`
    req := httptest.NewRequest(
        http.MethodPost,
        "/users",
        strings.NewReader(body),
    )
    req.Header.Set("Content-Type", "application/json")

    resp, _ := app.Test(req)
    assert.Equal(t, 201, resp.StatusCode)

    var result map[string]any
    json.NewDecoder(resp.Body).Decode(&result)
    assert.Equal(t, "Alice", result["name"])
}
```

The `Content-Type` header matters. Without it, Fiber's body parser may not parse the JSON correctly.

## Testing Response Headers

Rate limit headers, CORS headers, cache headers — these are part of your API contract. Test them explicitly:

```go
func TestRateLimitHeaders(t *testing.T) {
    app := fiber.New()
    app.Use(limiter.New(limiter.Config{
        Max:        5,
        Expiration: time.Minute,
    }))
    app.Get("/", func(c fiber.Ctx) error {
        return c.SendString("ok")
    })

    req := httptest.NewRequest(http.MethodGet, "/", nil)
    resp, _ := app.Test(req)

    assert.Equal(t, "5", resp.Header.Get("X-RateLimit-Limit"))
    assert.Equal(t, "4", resp.Header.Get("X-RateLimit-Remaining"))
}
```

## A Helper That Pays for Itself

If you find yourself writing the same `httptest.NewRequest` / `app.Test` / `io.ReadAll` sequence in every test, extract it once:

```go
func testRequest(t *testing.T, app *fiber.App, method, path string, opts ...func(*http.Request)) (int, string) {
    t.Helper()
    req := httptest.NewRequest(method, path, nil)
    for _, opt := range opts {
        opt(req)
    }
    resp, err := app.Test(req)
    if err != nil {
        t.Fatal(err)
    }
    defer resp.Body.Close()
    body, _ := io.ReadAll(resp.Body)
    return resp.StatusCode, string(body)
}

// Usage:
status, body := testRequest(t, app, "GET", "/users/42",
    func(r *http.Request) {
        r.Header.Set("Authorization", "Bearer token")
    },
)
```

This keeps tests focused on what matters: the inputs, the expected status, and the expected body.

## Where to Start

If your test suite only has happy-path tests, add error-path tests first. Test that unauthenticated requests get 401, that invalid input gets 422, and that internal errors return generic messages without leaking details.

Then test your middleware composition. Register the same middleware stack you use in production and verify that they interact correctly. These are the tests that catch the bugs you will actually ship.

## Internal References

- [App Test Method](/api/app#test)
- [Error Handling Guide](/guide/error-handling)
- [What's New](/whats_new)
