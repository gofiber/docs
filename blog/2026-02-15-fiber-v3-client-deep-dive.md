---
slug: fiber-v3-client-deep-dive
title: New Client Deep Dive
authors: [fiber-team]
tags: [fiber, v3, client, http, go]
description: How to use the new Fiber client package for reliable service-to-service communication.
---

In many backend teams, outbound HTTP calls are still treated like helper code. They live in random utility functions, each call has slightly different timeout behavior, and when incidents happen no one is fully sure which upstream policy is actually active.

That works while a service has two dependencies. It starts to hurt when a service has ten.

The new client package in Fiber v3 is interesting because it encourages a different model: client behavior becomes a first-class part of your architecture. You can define defaults once, override them where needed, and keep request policy visible in one place.

<!-- truncate -->

## Why This Feature Feels Better Than v2-Era Patterns

In older codebases, outbound requests often ended up as a mix of styles. Some calls reused shared setup, others built one-off requests directly in handlers. Over time, this creates policy drift. One endpoint retries too much, another never retries, one forwards correlation headers, another drops them.

What is cool in the new client package is not just new methods. It is that the package design pushes you toward consistency. You can create a long-lived client with clear defaults and treat request-level overrides as explicit exceptions.

## Start with a Client Factory

```go
import (
    "time"
    "github.com/gofiber/fiber/v3/client"
)

func NewUsersClient() *client.Client {
    return client.New().
        SetBaseURL("https://users.internal").
        SetTimeout(1500 * time.Millisecond).
        SetHeader("X-Caller-Service", "billing-api")
}
```

This looks simple, but it changes daily engineering behavior. New endpoints stop reinventing outbound setup and instead depend on a known client contract.

## Keep Overrides Local and Intentional

```go
func FetchTenant(cli *client.Client, tenantID, reqID string) (*client.Response, error) {
    return cli.Get("/tenants/:id", client.Config{
        PathParam: map[string]string{"id": tenantID},
        Header: map[string]string{"X-Request-ID": reqID},
        Timeout: 600 * time.Millisecond,
    })
}
```

A good review question here is: "Why is this override different from the default?" If the answer is clear, the override belongs there. If not, move the policy back into shared defaults.

## Cookie Jar Support Is More Useful Than It Looks

A lot of teams first see cookie jar support and think it is only for browsers. In practice, it is very useful for integration flows and internal tools that still rely on session-style auth.

```go
jar := client.AcquireCookieJar()
defer client.ReleaseCookieJar(jar)

cli := client.New().
    SetBaseURL("https://auth.internal").
    SetCookieJar(jar)

_, _ = cli.Post("/login", client.Config{
    FormData: map[string]string{
        "username": "john",
        "password": "doe",
    },
})

profileResp, _ := cli.Get("/me")
_ = profileResp
```

This is especially practical in end-to-end tests where you want session continuity without custom cookie plumbing.

## Hooks: The Operational Layer

In mature systems, outbound clients need observability hooks. The v3 client makes this straightforward.

```go
cli.AddRequestHook(func(req *client.Request) error {
    req.SetHeader("X-Trace-Source", "fiber-client")
    return nil
})

cli.AddResponseHook(func(resp *client.Response) error {
    log.Printf("upstream status=%d", resp.StatusCode())
    return nil
})
```

This is the right place for lightweight diagnostics and request metadata standardization. It keeps handler code focused on business behavior.

## A Handler Example with Real Error Mapping

```go
app.Get("/billing/:id", func(c fiber.Ctx) error {
    resp, err := billingClient.Get("/invoices/:id", client.Config{
        PathParam: map[string]string{"id": c.Params("id")},
        Header: map[string]string{
            "X-Request-ID": c.Get("X-Request-ID"),
        },
    })
    if err != nil {
        return c.Status(fiber.StatusBadGateway).JSON(fiber.Map{"error": "upstream unavailable"})
    }

    if resp.StatusCode() >= 500 {
        return c.Status(fiber.StatusBadGateway).JSON(fiber.Map{"error": "upstream failed"})
    }

    return c.Status(resp.StatusCode()).Send(resp.Body())
})
```

The important part is not syntax. It is that upstream error semantics are explicit and consistent.

## Where to Introduce This First

If you want fast impact, migrate the noisiest dependency first. Usually that is the upstream that already causes timeout and retry tickets. Move only that path to a shared client layer and compare behavior over one week.

You will usually see better consistency in logs, easier debugging, and clearer ownership of outbound policy.

## Internal References

- [Client REST](/client/rest)
- [Client Examples](/client/examples)
- [What's New](/whats_new)
