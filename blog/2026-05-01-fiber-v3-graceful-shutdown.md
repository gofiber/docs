---
slug: fiber-v3-graceful-shutdown
title: Graceful Shutdown
authors: [fiber-team]
tags: [fiber, v3, shutdown, production, operations, go]
description: "Why os.Exit kills your users' requests  -  and how to shut down Fiber v3 without dropping in-flight connections."
---

Every Go tutorial ends the same way: `log.Fatal(app.Listen(":3000"))`. The server starts, the tutorial is done. Nobody talks about what happens when the server stops.

Here is what happens: a deploy rolls out, the process gets SIGTERM, and every request that was mid-flight  -  a database write, a file upload, a payment confirmation  -  gets killed instantly. The client sees a connection reset. The database row is half-written. The payment went through but the confirmation never reached the user.

Graceful shutdown is not a nice-to-have. It is the difference between "the deploy went fine" and "we lost three transactions during the rollout."

<!-- truncate -->

## What Happens Without Graceful Shutdown

When Go's `http.Server` (or Fiber's `app.Listen`) receives a SIGTERM, the default behavior is to exit immediately. Every open connection is terminated. Every handler that was mid-execution gets no chance to finish.

The failure modes are predictable:

- **Database writes**: A multi-step insert completes partially. Your data is inconsistent.
- **External API calls**: You called a payment provider, the charge went through, but your response handler never ran. The user sees an error but was actually charged.
- **File uploads**: The upload was 90% complete. The file is corrupted on disk.

These are not edge cases. They happen on every deploy if you are not handling shutdown properly.

## Fiber's Shutdown Method

Fiber v3 provides `app.Shutdown()`, which stops accepting new connections and waits for existing requests to complete:

```go
package main

import (
    "log"
    "os"
    "os/signal"
    "syscall"

    "github.com/gofiber/fiber/v3"
)

func main() {
    app := fiber.New()

    app.Get("/", func(c fiber.Ctx) error {
        return c.SendString("Hello, World!")
    })

    // Start server in a goroutine
    go func() {
        if err := app.Listen(":3000"); err != nil {
            log.Printf("Server error: %v", err)
        }
    }()

    // Wait for interrupt signal
    quit := make(chan os.Signal, 1)
    signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
    <-quit

    log.Println("Shutting down server...")
    if err := app.Shutdown(); err != nil {
        log.Fatalf("Server shutdown failed: %v", err)
    }
    log.Println("Server stopped gracefully")
}
```

`app.Shutdown()` does two things: it stops the listener so no new connections arrive, and it waits for all active connections to finish. This is the minimum viable graceful shutdown.

## Using Hooks for Cleanup

Fiber v3 has lifecycle hooks that let you run code during shutdown. The old `OnShutdown` from v2 has been replaced by two explicit hooks: `OnPreShutdown` runs before the server stops, and `OnPostShutdown` runs after it has fully stopped:

```go
app.Hooks().OnPreShutdown(func() error {
    log.Println("Deregistering from service discovery...")
    if err := consul.Agent().ServiceDeregister(serviceID); err != nil {
        log.Printf("Failed to deregister: %v", err)
    }
    return nil
})

app.Hooks().OnPostShutdown(func() error {
    log.Println("Closing database connections...")
    db.Close()
    log.Println("Flushing metrics buffer...")
    metricsClient.Flush()
    return nil
})
```

Use `OnPreShutdown` for tasks that should happen before the server stops accepting connections - like deregistering from service discovery so the load balancer stops routing traffic. Use `OnPostShutdown` for cleanup after the server has fully stopped - closing database pools, flushing log buffers, releasing resources.

Hooks execute in registration order. If you register multiple hooks of the same type, they run sequentially.
```

## Adding a Shutdown Timeout

Waiting forever is not practical. A handler with a bug might never return. Add a timeout with `context.WithTimeout`:

```go
quit := make(chan os.Signal, 1)
signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
<-quit

log.Println("Shutting down...")

// Give active requests 10 seconds to finish
ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
defer cancel()

done := make(chan error, 1)
go func() {
    done <- app.Shutdown()
}()

select {
case err := <-done:
    if err != nil {
        log.Printf("Shutdown error: %v", err)
    }
    log.Println("Shutdown complete")
case <-ctx.Done():
    log.Println("Shutdown timed out, forcing exit")
}
```

The timeout should be shorter than your orchestrator's kill timeout. Kubernetes sends SIGTERM and waits 30 seconds by default before sending SIGKILL. So your shutdown timeout should be around 25 seconds  -  enough to drain, but with margin before the hard kill.

## The Health Check Connection

If you are running behind a load balancer or in Kubernetes, your health check endpoint should reflect the shutdown state. Once you receive the shutdown signal, the readiness probe should start returning unhealthy so the load balancer stops sending new traffic:

```go
var isShuttingDown atomic.Bool

app.Get("/readyz", func(c fiber.Ctx) error {
    if isShuttingDown.Load() {
        return c.SendStatus(fiber.StatusServiceUnavailable)
    }
    return c.SendStatus(fiber.StatusOK)
})

// In shutdown handler:
quit := make(chan os.Signal, 1)
signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
<-quit

isShuttingDown.Store(true)

// Give load balancer time to notice the health check failure
time.Sleep(5 * time.Second)

app.Shutdown()
```

That `time.Sleep` before shutdown is not a mistake. It gives the load balancer time to mark your instance as unhealthy and stop routing traffic. Without it, you might stop accepting connections while the load balancer still thinks you are healthy, causing connection errors for clients.

## The Complete Pattern

Putting it all together:

```go
func main() {
    app := fiber.New()
    var isShuttingDown atomic.Bool

    // Routes
    app.Get("/readyz", func(c fiber.Ctx) error {
        if isShuttingDown.Load() {
            return c.SendStatus(fiber.StatusServiceUnavailable)
        }
        return c.SendStatus(fiber.StatusOK)
    })

    app.Get("/", func(c fiber.Ctx) error {
        return c.SendString("Hello")
    })

    // Cleanup hooks (OnPostShutdown runs after the server has stopped)
    app.Hooks().OnPostShutdown(func() error {
        db.Close()
        return nil
    })

    // Start
    go func() {
        if err := app.Listen(":3000"); err != nil {
            log.Printf("Listen error: %v", err)
        }
    }()

    // Wait for signal
    quit := make(chan os.Signal, 1)
    signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
    <-quit

    // Begin graceful shutdown
    isShuttingDown.Store(true)
    time.Sleep(5 * time.Second) // Let LB drain

    ctx, cancel := context.WithTimeout(context.Background(), 25*time.Second)
    defer cancel()

    done := make(chan error, 1)
    go func() { done <- app.Shutdown() }()

    select {
    case <-done:
        log.Println("Shutdown complete")
    case <-ctx.Done():
        log.Println("Shutdown timed out")
    }
}
```

## The Mistake Everyone Makes

The most common mistake is calling `app.Shutdown()` in a `defer` inside `main`. The problem: `log.Fatal` calls `os.Exit`, which does not run deferred functions. If your `app.Listen` is wrapped in `log.Fatal`  -  like every tutorial shows  -  the shutdown code never runs.

```go
// This does NOT work
func main() {
    app := fiber.New()
    defer app.Shutdown() // Never executes
    log.Fatal(app.Listen(":3000")) // os.Exit skips defers
}
```

Use the signal-based pattern shown above instead.

## Internal References

- [App Shutdown Method](/api/fiber#server-shutdown)
- [Hooks](/api/hooks)
- [Health Check Middleware](/middleware/healthcheck)
