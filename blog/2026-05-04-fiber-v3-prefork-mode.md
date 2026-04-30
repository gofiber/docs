---
slug: fiber-v3-prefork-mode
title: Prefork Mode
authors: [fiber-team]
tags: [fiber, v3, prefork, performance, concurrency, go]
description: "How Fiber runs like Nginx  -  fork multiple processes with one line of config. When it helps, when it makes things worse."
---

Most Go developers know that Go uses goroutines for concurrency. A single process handles thousands of connections by scheduling goroutines across OS threads. That is usually enough.

But Fiber has a trick that most Go frameworks do not: prefork mode. One line of config, and Fiber spawns multiple OS processes, each with its own event loop, all listening on the same port. It is the same pattern that Nginx and Node.js cluster mode use.

The surprise is not that Fiber supports this. The surprise is when it actually helps  -  and when it makes your app slower.

<!-- truncate -->

## What Prefork Does

In normal mode, Fiber runs one process with one `fasthttp` server. That server uses goroutines to handle concurrent requests. It works well for most workloads.

In prefork mode, Fiber uses `SO_REUSEPORT` (on Linux) to let multiple processes bind to the same port. The kernel distributes incoming connections across the processes:

```go
app := fiber.New()

app.Listen(":3000", fiber.ListenConfig{
    EnablePrefork: true,
})
```

That is it. One setting in `ListenConfig`. Fiber detects the number of CPU cores and spawns that many child processes. Each child is a full copy of your application with its own memory space.

Note: In Fiber v2, this was `fiber.Config{Prefork: true}`. In v3, it moved to `ListenConfig` as `EnablePrefork`.

## How It Works Under the Hood

When you start a preforked Fiber app:

1. The **master process** starts and detects it is the parent.
2. It forks `runtime.GOMAXPROCS(0)` child processes (typically one per CPU core).
3. Each **child process** creates its own `fasthttp` server and binds to the same port.
4. The kernel's `SO_REUSEPORT` distributes incoming connections across children.
5. The master monitors children and restarts them if they crash.

Each child is an independent OS process with its own Go runtime, its own goroutine scheduler, and its own memory. There is no shared state between children.

## When It Actually Helps

Prefork mode helps in a very specific scenario: **CPU-bound workloads that saturate the Go scheduler**.

Go's runtime scheduler is good, but it has overhead. When every request requires heavy computation  -  image processing, cryptographic operations, complex template rendering - the scheduler's lock contention becomes measurable. Prefork eliminates cross-process scheduler contention because each process has its own scheduler.

Benchmarks show measurable improvement (10-20% more throughput) for:
- Heavy JSON serialization/deserialization
- Template rendering with complex logic
- Image processing or PDF generation
- Cryptographic operations per request

## When It Makes Things Worse

For the vast majority of web applications  -  API servers that do database queries, call upstream services, and return JSON  -  prefork mode is neutral or harmful.

**Why it can hurt:**

1. **Memory multiplication**: Each child is a full process. An app that uses 100MB of memory now uses 100MB × number of cores. On a 16-core machine, that is 1.6GB just for the Go runtime and your app code.

2. **No shared state**: In-memory caches, rate limiter counters, session stores  -  none of these work across prefork children. A rate limiter that allows 100 requests per minute will actually allow 100 × number of children because each child has its own counter.

3. **Connection pool multiplication**: Each child opens its own database connections. If your pool is set to 20 connections and you have 8 children, that is 160 database connections. Your database might not appreciate that.

4. **I/O-bound workloads see no benefit**: If your handler spends 95% of its time waiting for a database response, the CPU is mostly idle. Adding more processes to share an idle CPU does not help.

## The Shared State Problem

This is the biggest gotcha. Consider this rate limiter:

```go
app.Use(limiter.New(limiter.Config{
    Max:        100,
    Expiration: time.Minute,
}))
```

Without prefork, this allows 100 requests per IP per minute. With prefork on 8 cores, each child has its own counter, so the effective limit is 800 requests per minute.

The fix is to use an external store:

```go
import "github.com/gofiber/storage/redis/v3"

store := redis.New(redis.Config{
    Host: "localhost",
    Port: 6379,
})

app.Use(limiter.New(limiter.Config{
    Max:        100,
    Expiration: time.Minute,
    Storage:    store,
}))
```

This applies to every middleware that maintains state: sessions, CSRF tokens, cache. If you use prefork, all stateful middleware needs an external storage backend.

## Detecting Prefork in Your Code

Sometimes you need to know whether you are running in the master or a child:

```go
if fiber.IsChild() {
    // This is a prefork child process
    // Don't start background jobs, cron schedulers, etc.
} else {
    // This is the master process (or non-prefork mode)
    // Safe to start background jobs
}
```

This is important for background workers. If you start a cron job in your app, prefork mode would start 8 copies of it. Use `fiber.IsChild()` to only start background work in the master.

## The Decision Framework

**Use prefork when:**
- Your profiling shows CPU is the bottleneck (not I/O)
- Your workload is compute-heavy per request
- You already use external storage for all state (Redis, database)
- You have enough memory for process multiplication

**Do not use prefork when:**
- Your app is I/O-bound (most API servers)
- You rely on in-memory state (rate limiters, caches, sessions)
- Memory is constrained
- You are running in containers with limited CPU allocation

**The default  -  no prefork  -  is correct for most applications.** Go's goroutine scheduler is highly efficient for I/O-bound work. Only switch to prefork after profiling shows that CPU scheduling is your actual bottleneck.

## Measuring the Difference

Before turning on prefork, establish a baseline:

```bash
# Without prefork
go build -o app .
./app &
wrk -t12 -c400 -d30s http://localhost:3000/your-endpoint

# With prefork
PREFORK=true ./app &
wrk -t12 -c400 -d30s http://localhost:3000/your-endpoint
```

Compare the requests/second and latency percentiles. If prefork does not show at least a 10% improvement, the operational complexity is not worth it.

## Internal References

- [App Configuration  -  Prefork](/api/app)
- [Make Fiber Faster](/guide/faster-fiber)
- [Benchmarks](/extra/benchmarks)
