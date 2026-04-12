---
slug: fiber-v3-client-deep-dive
title: New Client Deep Dive
authors: [fiber-team]
tags: [fiber, v3, client, http, go]
description: How to use the new Fiber client package for reliable service-to-service communication.
---

In many backend teams, outbound HTTP calls are still treated like helper code. They live in random utility functions, each call has slightly different timeout behavior, and when incidents happen no one is fully sure which upstream policy is actually active.

That works while a service has two dependencies. It starts to hurt when a service has ten. Timeout drift, inconsistent retry behavior, missing correlation headers, and ad-hoc error mapping become real operational problems. When your on-call engineer cannot tell which upstream policy is in effect during an incident, the outbound client is the root cause even when the upstream itself is fine.

The v3 client package addresses this by treating outbound HTTP as a first-class concern. You define client behavior once, override it where needed, and keep request policy visible in one place.

<!-- truncate -->

## How Outbound Calls Looked in v2-era Code

Most v2 services used `net/http` or `fasthttp` directly for outbound requests. The typical pattern was scattered one-off configurations:

```go
// v2-era: ad-hoc outbound calls
func fetchUser(id string) (*User, error) {
    req, _ := http.NewRequest("GET", "https://users.internal/users/"+id, nil)
    req.Header.Set("Authorization", "Bearer "+token)

    client := &http.Client{Timeout: 2 * time.Second}
    resp, err := client.Do(req)
    // ... error handling, body parsing, cleanup
}
```

Each function created its own client, set its own timeout, and handled its own headers. When the team wanted to add tracing or change the timeout, they had to find and update every call site. Policy drift was inevitable.

## Start with a Client Factory

The v3 client package encourages creating long-lived, configured client instances. A factory function makes this pattern explicit:

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

This is simple, but it changes daily engineering behavior. New endpoints stop reinventing outbound setup and instead depend on a known client contract. Timeout, base URL, and default headers are defined once and shared across all calls through this client.

## Per-Request Overrides

When a specific call needs different behavior, overrides are explicit and local:

```go
func FetchTenant(cli *client.Client, tenantID, reqID string) (*client.Response, error) {
    return cli.Get("/tenants/:id", client.Config{
        PathParam: map[string]string{"id": tenantID},
        Header:    map[string]string{"X-Request-ID": reqID},
        Timeout:   600 * time.Millisecond,
    })
}
```

The `Config` struct supports headers, path parameters, query parameters, cookies, body, form data, file uploads, context propagation, max redirects, and timeout — all per request. A good review question here is: "Why is this override different from the default?" If the answer is clear, the override belongs here. If not, move the policy back into shared defaults.

## Retry Configuration

For transient failures, the client supports retry policies:

```go
cli := client.New().
    SetBaseURL("https://api.internal").
    SetRetryConfig(&client.RetryConfig{
        MaxRetryCount:   3,
        InitialInterval: 100 * time.Millisecond,
    })
```

Retries apply to the configured client and can be tuned per upstream. This is especially useful for internal service calls where transient network errors are expected during rolling deployments.

## Proxy Support

If your outbound calls need to go through a proxy (corporate environments, egress gateways), the client supports proxy configuration:

```go
cli := client.New()
cli.SetProxyURL("http://proxy.internal:8080")
```

This applies to all requests through the client instance. Combined with base URL and headers, you can model complex network topologies without per-request proxy logic.

## Cookie Jar for Session Continuity

A lot of teams first see cookie jar support and think it is only for browsers. In practice, it is useful for integration flows and internal tools that still rely on session-style auth.

```go
jar := client.AcquireCookieJar()
defer client.ReleaseCookieJar(jar)

cli := client.New().
    SetBaseURL("https://auth.internal").
    SetCookieJar(jar)

_, err := cli.Post("/login", client.Config{
    FormData: map[string]string{
        "username": "john",
        "password": "doe",
    },
})
if err != nil {
    return err
}

// Session cookie is automatically stored and sent with subsequent requests
profileResp, err := cli.Get("/me")
if err != nil {
    return err
}
fmt.Println(string(profileResp.Body()))
```

This is especially practical in end-to-end tests where you want session continuity without custom cookie plumbing, and in internal tools that interact with legacy session-based services.

## Request and Response Hooks

In mature systems, outbound clients need observability. The v3 client makes this straightforward with request and response hooks:

```go
cli.AddRequestHook(func(c *client.Client, req *client.Request) error {
    req.SetHeader("X-Trace-Source", "fiber-client")
    return nil
})

cli.AddResponseHook(func(c *client.Client, resp *client.Response, req *client.Request) error {
    log.Printf("upstream=%s status=%d",
        req.URL(),
        resp.StatusCode(),
    )
    return nil
})
```

Request hooks run before every outbound call. Use them for tracing headers, authentication token injection, and request logging. Response hooks run after every response. Use them for metrics collection, error classification, and response logging.

This is the right place for cross-cutting concerns. It keeps handler code focused on business behavior and ensures observability is consistent across all calls through the client.

## Debug Mode

During development, you can enable debug mode to see full request and response details:

```go
cli := client.New().Debug()
```

This logs request and response details for every call through the client. Disable it in production with `cli.DisableDebug()`. It is a simple feature, but it saves significant time when debugging upstream integration issues.

## A Handler Example with Error Mapping

Here is a handler that calls an upstream service and maps errors consistently:

```go
app.Get("/billing/:id", func(c fiber.Ctx) error {
    resp, err := billingClient.Get("/invoices/:id", client.Config{
        PathParam: map[string]string{"id": c.Params("id")},
        Header: map[string]string{
            "X-Request-ID": c.Get("X-Request-ID"),
        },
    })
    if err != nil {
        return c.Status(fiber.StatusBadGateway).JSON(fiber.Map{
            "error": "upstream unavailable",
        })
    }

    if resp.StatusCode() >= 500 {
        return c.Status(fiber.StatusBadGateway).JSON(fiber.Map{
            "error": "upstream failed",
        })
    }

    return c.Status(resp.StatusCode()).Send(resp.Body())
})
```

The important part is not syntax. It is that upstream error semantics are explicit: connection failures return 502, upstream 5xx errors return 502 with a generic message, and everything else forwards the upstream status. This pattern prevents leaking upstream error details to clients.

## Where to Introduce This First

If you want fast impact, migrate the noisiest dependency first. Usually that is the upstream that already causes timeout and retry tickets. Move only that path to a shared client layer and compare behavior over one week.

You will usually see better consistency in logs, easier debugging, and clearer ownership of outbound policy.

## Internal References

- [Client REST](/client/rest)
- [Client Examples](/client/examples)
- [What's New](/whats_new)
