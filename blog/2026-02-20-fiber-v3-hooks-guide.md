---
slug: fiber-v3-hooks-guide
title: Hooks Guide for Clean Lifecycles
authors: [fiber-team]
tags: [fiber, v3, hooks, lifecycle, operations]
description: Use hooks to control startup, shutdown, and operational lifecycle more reliably.
---

Many runtime incidents happen during transitions, not steady state.

A service is starting up, shutting down, draining workers, or flushing telemetry, and behavior is only partially defined. That is where teams lose reliability.

Hooks are valuable because they let you express lifecycle behavior directly in code, with clear pre and post phases.

<!-- truncate -->

## Why This Feature Is Cool

The best part is operational clarity. Startup and shutdown are no longer side effects hidden across goroutines and signal handlers. You can make lifecycle steps explicit, observable, and reviewable.

For production teams, that directly improves deploy confidence.

## What Was More Fragile Before

In older setups, lifecycle logic was often fragmented. Cleanup code lived far from startup code, and shutdown sequencing depended on conventions more than explicit contracts.

v3 hooks make it easier to keep that logic in one clear place.

## Practical Example

```go
app := fiber.New()

app.Hooks().OnPreStartupMessage(func(sm *fiber.PreStartupMessageData) error {
    sm.AddInfo("region", "Region", "eu-central")
    sm.AddInfo("release", "Release", os.Getenv("RELEASE_SHA"))
    return nil
})

app.Hooks().OnPostStartupMessage(func(sm *fiber.PostStartupMessageData) error {
    log.Printf("startup complete (child=%v)", sm.IsChild)
    return nil
})

app.Hooks().OnPreShutdown(func() error {
    log.Println("pre-shutdown: stop consumers")
    return stopConsumers()
})

app.Hooks().OnPostShutdown(func(err error) error {
    log.Printf("post-shutdown: err=%v", err)
    return flushMetrics()
})
```

## How to Use Hooks Well

Treat each hook as part of your runtime contract. Document ownership and expected behavior for every lifecycle phase. That way lifecycle reliability is not "tribal knowledge," it is part of code review.

A good first target is graceful shutdown of workers. If you can prove worker drain behavior in one service, you can replicate the pattern quickly across others.

## Internal References

- [Hooks API](/api/hooks)
- [What's New](/whats_new)
