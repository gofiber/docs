---
slug: fiber-v3-rate-limiting-guide
title: "Rate Limiting: Protecting Your API Without Punishing Your Users"
authors: [fiber-team]
tags: [fiber, v3, rate-limiting, limiter, security, api, go]
description: Implement rate limiting in Fiber v3 that actually makes sense — dynamic limits, sliding windows, and per-endpoint strategies.
---

Rate limiting is one of those features that every production API needs, nobody enjoys implementing, and most teams get subtly wrong the first time.

The common mistake is not forgetting rate limiting entirely. It is applying a single global limit and calling it done. Fifty requests per minute, no exceptions, no differentiation. Your power users hit the wall during normal operations. Scrapers figure out the exact limit and stay just below it. Login endpoints get the same allowance as read-only data endpoints. Everyone is equally unhappy.

Fiber v3's Limiter middleware ships with the primitives to do better: dynamic limits per route, sliding window algorithms, per-user keys, and pluggable storage backends. The trick is knowing when to use which.

<!-- truncate -->

## The Five-Minute Setup

If you have never added rate limiting before, start here. This gets a basic limiter running with sane defaults:

```go
import (
    "github.com/gofiber/fiber/v3"
    "github.com/gofiber/fiber/v3/middleware/limiter"
)

app.Use(limiter.New())
```

That is it. You get 5 requests per minute per IP, a 429 response when the limit is exceeded, and standard `X-RateLimit-*` headers so clients can see their remaining quota. For a weekend project or an internal tool, this might be all you need.

But production APIs have different requirements.

## Fixed Window vs. Sliding Window

The default algorithm is a fixed window: every 60 seconds the counter resets to zero. This works, but it has a well-known burst problem. If a client sends 5 requests at second 59 and 5 more at second 61, they have made 10 requests in 2 seconds despite a "5 per minute" limit. The window boundary creates a loophole.

The sliding window algorithm smooths this out by considering the previous window's traffic:

```go
app.Use(limiter.New(limiter.Config{
    Max:               20,
    Expiration:        30 * time.Second,
    LimiterMiddleware: limiter.SlidingWindow{},
}))
```

The math is straightforward: it takes the number of requests from the previous window, weights them by how much of the current window has elapsed, and adds the current window's count. If the previous window had 15 requests and we are 40% into the current window, the effective count is `15 * 0.6 + currentCount`. This eliminates the boundary burst without adding meaningful overhead.

Use fixed windows for simple use cases where exact precision does not matter. Use sliding windows for auth endpoints, payment APIs, or anywhere burst protection matters.

## Dynamic Limits: Not All Endpoints Are Equal

A login endpoint that accepts passwords should have a much tighter limit than a product catalog that serves public data. With `MaxFunc`, you can calculate limits per request:

```go
app.Use(limiter.New(limiter.Config{
    MaxFunc: func(c fiber.Ctx) int {
        switch {
        case strings.HasPrefix(c.Path(), "/auth"):
            return 5 // strict: 5 per window for auth
        case strings.HasPrefix(c.Path(), "/api/v1/search"):
            return 60 // generous: search is read-only
        default:
            return 20 // reasonable default
        }
    },
    Expiration: time.Minute,
}))
```

A more sophisticated approach uses the authenticated user's tier:

```go
MaxFunc: func(c fiber.Ctx) int {
    tier, ok := c.Locals("user_tier").(string)
    if !ok {
        return 10 // unauthenticated baseline
    }
    switch tier {
    case "enterprise":
        return 1000
    case "pro":
        return 200
    default:
        return 50
    }
},
```

This requires your auth middleware to run before the limiter. Registration order matters — middleware executes in the order you call `app.Use`.

## Dynamic Expiration Windows

Similarly, `ExpirationFunc` lets you vary the time window per request. A login endpoint might use a longer window to prevent slow brute force attacks:

```go
app.Use(limiter.New(limiter.Config{
    Max: 10,
    ExpirationFunc: func(c fiber.Ctx) time.Duration {
        if c.Path() == "/login" || c.Path() == "/reset-password" {
            return 5 * time.Minute // 10 attempts per 5 minutes
        }
        return 1 * time.Minute // 10 per minute everywhere else
    },
}))
```

## Better Key Generation

The default key generator uses the client IP. Behind a load balancer or CDN, every request might appear to come from the same IP. The `KeyGenerator` function lets you fix this:

```go
KeyGenerator: func(c fiber.Ctx) string {
    // Use X-Forwarded-For behind a reverse proxy
    if xff := c.Get("X-Forwarded-For"); xff != "" {
        // Take the first IP (client) not the proxy chain
        if idx := strings.Index(xff, ","); idx != -1 {
            return strings.TrimSpace(xff[:idx])
        }
        return xff
    }
    return c.IP()
},
```

For authenticated APIs, a better key is the user ID. This means the limit follows the account, not the IP, which is the correct behavior for mobile users who switch networks:

```go
KeyGenerator: func(c fiber.Ctx) string {
    if userID, ok := c.Locals("user_id").(string); ok {
        return "user:" + userID
    }
    return "ip:" + c.IP()
},
```

The `user:` and `ip:` prefixes prevent collisions between user IDs and IP addresses.

## Custom Limit-Reached Responses

When a client hits the limit, the default handler returns a bare 429 status. API consumers deserve more:

```go
LimitReached: func(c fiber.Ctx) error {
    retryAfter := c.GetRespHeader("Retry-After")
    return c.Status(fiber.StatusTooManyRequests).JSON(fiber.Map{
        "error":       "rate_limit_exceeded",
        "message":     "Too many requests. Please slow down.",
        "retry_after": retryAfter,
    })
},
```

This gives clients machine-readable information they can use to implement backoff correctly.

## Skipping Certain Requests

Not everything should count. Health check endpoints should never be rate limited — a monitoring system polling `/healthz` every second is expected behavior:

```go
app.Use(limiter.New(limiter.Config{
    Max:        30,
    Expiration: time.Minute,
    Next: func(c fiber.Ctx) bool {
        // Skip health checks and internal IPs
        if c.Path() == "/healthz" || c.Path() == "/readyz" {
            return true
        }
        return c.IP() == "10.0.0.1" // internal monitoring
    },
}))
```

You can also skip failed requests so that server errors do not eat a user's quota:

```go
SkipFailedRequests: true, // status >= 400 won't count
```

Or the opposite — only count failed requests to detect brute force patterns without penalizing normal usage:

```go
SkipSuccessfulRequests: true, // only failed attempts count
```

## Distributed Rate Limiting with Redis

The in-memory store works for single instances but falls apart behind a load balancer. If you have three instances each allowing 20 requests per minute, a client gets 60 effective requests.

Plugging in Redis makes the limit shared across instances:

```go
import "github.com/gofiber/storage/redis/v3"

store := redis.New(redis.Config{
    Host: "redis.internal",
    Port: 6379,
})

app.Use(limiter.New(limiter.Config{
    Max:        20,
    Expiration: time.Minute,
    Storage:    store,
}))
```

Any storage backend from Fiber's [storage package](https://github.com/gofiber/storage) works — Redis, Memcache, DynamoDB, Postgres. The interface is the same.

## Per-Route Limiters

Sometimes a global middleware is not granular enough. You can apply different limiter instances to different route groups:

```go
// Strict limiter for auth routes
authLimiter := limiter.New(limiter.Config{
    Max:               5,
    Expiration:        5 * time.Minute,
    LimiterMiddleware: limiter.SlidingWindow{},
})

// Relaxed limiter for public API
apiLimiter := limiter.New(limiter.Config{
    Max:        100,
    Expiration: time.Minute,
})

auth := app.Group("/auth")
auth.Use(authLimiter)
auth.Post("/login", loginHandler)
auth.Post("/reset", resetHandler)

api := app.Group("/api")
api.Use(apiLimiter)
api.Get("/products", listProducts)
api.Get("/products/:id", getProduct)
```

This is cleaner than a single middleware with complex conditional logic, and makes the limits obvious in code review.

## Where to Start

If your API has no rate limiting at all, add the one-line default and deploy it. That alone protects against accidental abuse and simple denial-of-service attempts.

Next, identify your sensitive endpoints — login, password reset, payment — and give them stricter limits with a sliding window. Then add Redis storage when you scale past a single instance.

The goal is not to block legitimate users. It is to make your API predictable under load and expensive to abuse.

## Internal References

- [Limiter Middleware](/middleware/limiter)
- [Storage Package](https://github.com/gofiber/storage)
- [What's New](/whats_new)
