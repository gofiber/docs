---
slug: fiber-v3-contrib-packages
title: Contrib Packages
authors: [fiber-team]
tags: [fiber, v3, contrib, jwt, websocket, opentelemetry, swagger, go]
description: "JWT auth, WebSockets, OpenTelemetry, Swagger docs, Circuit Breaker  -  the official contrib middleware that ships separately so your core stays lean."
---

Fiber's core ships with 20+ middleware  -  logger, CORS, rate limiter, sessions, and more. But some middleware needs external dependencies: JWT requires a token library, OpenTelemetry needs the OTel SDK, WebSockets depend on a WebSocket implementation. Instead of bloating Fiber's core with these dependencies, they live in a separate repository: [gofiber/contrib](https://github.com/gofiber/contrib).

The contrib packages are first-party middleware. Same team, same quality, same release cycle. The only difference is that they have external Go dependencies, so they are imported separately to keep your `go.sum` clean when you do not need them.

<!-- truncate -->

## What is in Contrib

The contrib repository contains a growing set of middleware packages. Here are the ones you will reach for most often:

### JWT Authentication

The most popular contrib package. It validates JSON Web Tokens and protects routes:

```go
import jwtware "github.com/gofiber/contrib/v3/jwt"

app.Use(jwtware.New(jwtware.Config{
    SigningKey: jwtware.SigningKey{Key: []byte("your-secret-key")},
}))

app.Get("/protected", func(c fiber.Ctx) error {
    token := jwtware.FromContext(c)
    claims := token.Claims.(jwt.MapClaims)
    return c.JSON(fiber.Map{"user": claims["sub"]})
})
```

The middleware extracts the token from the `Authorization: Bearer <token>` header, validates it, and stores the parsed token in the request context - retrieve it with `jwtware.FromContext(c)`. Invalid or missing tokens return 401 automatically.

### WebSocket

Real-time communication with WebSocket support:

```go
import "github.com/gofiber/contrib/v3/websocket"

app.Get("/ws", websocket.New(func(c *websocket.Conn) {
    for {
        mt, msg, err := c.ReadMessage()
        if err != nil {
            break
        }
        // Echo the message back
        c.WriteMessage(mt, msg)
    }
}))
```

The WebSocket middleware upgrades HTTP connections to WebSocket and gives you a connection object with `ReadMessage` / `WriteMessage` for bidirectional communication.

### OpenTelemetry (otel)

Distributed tracing and metrics for your Fiber app:

```go
import fiberotel "github.com/gofiber/contrib/v3/otel"

app.Use(fiberotel.Middleware())
```

One line. Every request gets a trace span with method, route, status code, and duration. The spans flow into whatever OpenTelemetry collector you have configured  -  Jaeger, Zipkin, Datadog, Grafana Tempo.

### Swagger UI

Auto-serve your Swagger/OpenAPI documentation. The package was renamed from `swagger` to `swaggerui` for v3:

```go
import "github.com/gofiber/contrib/v3/swaggerui"

app.Use(swaggerui.New(swaggerui.Config{
    BasePath: "/api/",
    FilePath: "./docs/swagger.json",
    Path:     "docs",
}))
```

This serves the Swagger UI at `/docs` with your API specification. Generate the spec with tools like `swag` or write it manually.

### Socket.io

Full Socket.io server implementation for real-time event-based communication:

```go
import "github.com/gofiber/contrib/v3/socketio"

socketio.On(socketio.EventMessage, func(ep *socketio.EventPayload) {
    ep.Kws.Emit([]byte("Hello back!"), socketio.TextMessage)
})

app.Get("/ws/:id", socketio.New(func(kws *socketio.Websocket) {}))
```

### Circuit Breaker

Protect your app from cascading failures when upstream services are down:

```go
import "github.com/gofiber/contrib/v3/circuitbreaker"

cb := circuitbreaker.New(circuitbreaker.Config{
    FailureThreshold: 5,               // consecutive failures before the circuit opens
    Timeout:          5 * time.Second, // wait time before half-open retries
    SuccessThreshold: 2,               // successes required to close the circuit again
})

app.Use(circuitbreaker.Middleware(cb))
```

### Load Shedding

Reject excess traffic before it overwhelms your service:

```go
import "github.com/gofiber/contrib/v3/loadshed"

app.Use(loadshed.New(loadshed.Config{
    Criteria: &loadshed.CPULoadCriteria{
        LowerThreshold: 0.75,
        UpperThreshold: 0.90,
        Interval:       10 * time.Second,
        Getter:         &loadshed.DefaultCPUPercentGetter{},
    },
}))
```

Between the two thresholds, an increasing share of requests gets rejected with 503; above the upper threshold, all of them do. Your service sheds load instead of making everything slow.

### More Contrib Packages

| Package | Purpose |
|---------|---------|
| **fiberzap** | Structured logging with Uber's Zap |
| **fiberzerolog** | Structured logging with zerolog |
| **fibersentry** | Error tracking with Sentry |
| **fibernewrelic** | APM with New Relic |
| **fiberi18n** | Internationalization support |
| **opafiber** | Policy enforcement with Open Policy Agent |
| **paseto** | PASETO token authentication (alternative to JWT) |
| **hcaptcha** | hCaptcha verification |
| **casbin** | Authorization with Casbin |
| **fgprof** | Full goroutine profiling |
| **monitor** | Real-time server metrics dashboard |

## Core vs. Contrib: How to Decide

- If it has **no external Go dependencies** → it is in core (`github.com/gofiber/fiber/v3/middleware/...`)
- If it **requires external libraries** → it is in contrib (`github.com/gofiber/contrib/...`)

This split keeps your binary small. If you build an API that does not use JWT, you do not pull in the JWT library and its transitive dependencies.

## v3 Support

For Fiber v3, the contrib packages use a dedicated v3 base path. All v3-compatible imports start with `github.com/gofiber/contrib/v3/`:

```go
// Fiber v3 import path
import jwtware "github.com/gofiber/contrib/v3/jwt"
import "github.com/gofiber/contrib/v3/websocket"
import fiberotel "github.com/gofiber/contrib/v3/otel"
```

The documentation shows the `v3_` prefix in versioning to indicate Fiber v3 compatibility. Check each package's documentation page for the exact import path.

## Internal References

- [Contrib Documentation](/contrib/)
- [JWT Middleware](/contrib/jwt/)
- [WebSocket](/contrib/websocket/)
- [OpenTelemetry](/contrib/otel/)
- [Swagger](/contrib/swaggerui/)
- [Socket.io](/contrib/socketio/)
