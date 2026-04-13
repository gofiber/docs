---
slug: fiber-v3-structured-logging
title: "From fmt.Println to Production Logging in Fiber v3"
authors: [fiber-team]
tags: [fiber, v3, logging, observability, middleware, go]
description: Move beyond basic request logging to structured, queryable, production-grade observability with Fiber v3's Logger middleware.
---

There is a moment in every project's life where someone greps the production logs for a bug report and realizes that `fmt.Println("got here")` is the only evidence of what happened. The request came in, something went wrong, and the logs show a status code with no context about which user, which endpoint, or which upstream service was involved.

Logging sounds boring until it is 2 AM and your only debugging tool is `kubectl logs`. At that point, the difference between a flat text line and a structured JSON object with a request ID, latency, and user context is the difference between finding the bug in five minutes and finding it in two hours.

Fiber v3's Logger middleware is designed to bridge that gap without requiring you to rewrite your application.

<!-- truncate -->

## The Default: Good Enough to Start

Out of the box, the Logger middleware gives you a single line per request with the most useful fields:

```go
app.Use(logger.New())
// Output: [15:04:05] 127.0.0.1 200 - 1.234ms GET /api/users
```

That is timestamp, IP, status code, latency, method, and path. For local development and small services, this is fine. Register it early — routes added after the logger are logged, routes added before it are not.

```go
app := fiber.New()
app.Use(logger.New()) // register first
app.Get("/", handler) // this route will be logged
```

## Structured JSON Logging

The moment your logs go to an aggregation system — Elasticsearch, Loki, CloudWatch, Datadog — you need structured output. Flat text requires fragile regex to query. JSON is queryable by default.

Fiber provides a built-in JSON format:

```go
app.Use(logger.New(logger.Config{
    Format: logger.JSONFormat,
}))
```

This produces output like:

```json
{"time":"15:04:05","ip":"127.0.0.1","method":"GET","url":"/api/users","status":200,"bytesSent":1234}
```

For teams using Elastic Common Schema, there is a dedicated ECS format:

```go
app.Use(logger.New(logger.Config{
    Format: logger.ECSFormat,
}))
```

This outputs logs that Elasticsearch, Kibana, and the Elastic APM can ingest without any parsing rules. The schema includes `@timestamp`, `ecs.version`, `client.ip`, `http.request.method`, and `http.response.status_code` — all in the right places.

## Custom Formats for Your Stack

The predefined formats cover common cases, but most teams need something specific. Fiber's format string uses `${tag}` placeholders that you can arrange freely:

```go
app.Use(logger.New(logger.Config{
    Format: "${time} | ${status} | ${latency} | ${ip} | ${method} | ${path} | ${error}\n",
    TimeFormat: "2006-01-02T15:04:05Z07:00",
    TimeZone: "UTC",
}))
```

For structured JSON with custom fields, build the JSON string manually:

```go
app.Use(logger.New(logger.Config{
    Format: `{"ts":"${time}","method":"${method}","path":"${path}",` +
        `"status":${status},"latency":"${latency}","ip":"${ip}",` +
        `"bytes_sent":${bytesSent},"bytes_recv":${bytesReceived}}` + "\n",
    TimeFormat: time.RFC3339,
    TimeZone:   "UTC",
}))
```

The available tags cover nearly everything you would want: `${pid}`, `${ip}`, `${ips}`, `${host}`, `${method}`, `${path}`, `${url}`, `${ua}`, `${latency}`, `${status}`, `${bytesSent}`, `${bytesReceived}`, `${route}`, `${error}`, `${body}`, `${resBody}`, `${reqHeaders}`, `${queryParams}`.

You can also reference specific headers, cookies, query params, and locals:

```go
Format: `${reqHeader:X-Request-Id} ${cookie:session_id} ${query:page} ${locals:user_id}` + "\n"
```

## Adding Request IDs

The single most useful thing you can add to your logs is a request ID. It lets you correlate every log line, error, and downstream service call to a single request.

Combine the RequestID middleware with a custom logger tag:

```go
app.Use(requestid.New())
app.Use(logger.New(logger.Config{
    CustomTags: map[string]logger.LogFunc{
        "request_id": func(output logger.Buffer, c fiber.Ctx, data *logger.Data, _ string) (int, error) {
            return output.WriteString(requestid.FromContext(c))
        },
    },
    Format: `{"request_id":"${request_id}","method":"${method}","path":"${path}","status":${status}}` + "\n",
}))
```

Now every log line carries the request ID. When a user reports a problem, they send you the ID from the response header and you can trace everything that happened.

## The Done Callback: Conditional Alerting

The `Done` callback fires after each log line is written. This is useful for routing specific events to different systems without building a separate middleware:

```go
app.Use(logger.New(logger.Config{
    TimeFormat: time.RFC3339Nano,
    Done: func(c fiber.Ctx, logString []byte) {
        if c.Response().StatusCode() >= 500 {
            alerting.SendToSlack(logString)
        }
    },
}))
```

This is not a replacement for a proper alerting pipeline, but it is a pragmatic way to get notified about server errors immediately without deploying additional infrastructure.

You can also use it for audit logging — writing specific requests to a separate file or database:

```go
Done: func(c fiber.Ctx, logString []byte) {
    if strings.HasPrefix(c.Path(), "/admin") {
        auditLog.Write(logString)
    }
},
```

## Skipping Noise

Health check endpoints, metrics scraping, and Kubernetes probes generate enormous amounts of log traffic with zero diagnostic value. The `Skip` function lets you filter them out:

```go
app.Use(logger.New(logger.Config{
    Skip: func(c fiber.Ctx) bool {
        return c.Path() == "/healthz" ||
            c.Path() == "/readyz" ||
            c.Path() == "/metrics"
    },
}))
```

The difference between `Next` and `Skip` matters here. `Next` skips the middleware entirely — the request is not logged and no log processing happens. `Skip` still processes the request through the handler chain but suppresses the log output. For performance, prefer `Next` when you do not need any log processing for skipped routes.

## Writing to Files

For environments without a log aggregator, writing to files is still the right approach:

```go
f, err := os.OpenFile("./access.log",
    os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
if err != nil {
    log.Fatal(err)
}
defer f.Close()

app.Use(logger.New(logger.Config{
    Stream:        f,
    DisableColors: true, // no ANSI in files
}))
```

The `DisableColors` flag is important. Without it, your log files fill up with ANSI escape codes that make them unreadable in plain text editors and break log parsing tools.

## Integrating with Zap, Zerolog, and Friends

Most Go teams already have a logging library. Fiber's `LoggerToWriter` adapter lets you pipe the logger middleware output into any logger that satisfies an interface:

```go
import (
    fiberzap "github.com/gofiber/contrib/v3/zap"
    "github.com/gofiber/fiber/v3/log"
    "github.com/gofiber/fiber/v3/middleware/logger"
)

zapLogger := fiberzap.NewLogger(fiberzap.LoggerConfig{
    ExtraKeys: []string{"request_id"},
})

app.Use(logger.New(logger.Config{
    Stream: logger.LoggerToWriter(zapLogger, log.LevelDebug),
}))
```

Note the import path: Fiber v3 contrib packages live under `github.com/gofiber/contrib/v3/` and drop the `fiber` prefix from their names. So `fiberzap/v2` becomes `contrib/v3/zap`, `fiberzerolog` becomes `contrib/v3/zerolog`, and so on.

This means Fiber's request logs go through your existing log pipeline, with your existing log levels, formatters, and sinks. You do not need to maintain two separate logging systems.

The same pattern works with `contrib/v3/zerolog` and any logger that implements Fiber's `AllLogger` interface.

## Common Pitfalls

**Logging request bodies in production.** The `${body}` tag exists for debugging, but enabling it in production means every POST body — including passwords, tokens, and PII — ends up in your logs. Only use it in development or behind a feature flag.

**Logging response bodies.** Same problem. The `${resBody}` tag is useful for debugging, but it can log sensitive data and dramatically increase log volume.

**Forgetting timezone.** The default timezone is `"Local"`, which means your logs use whatever the server's timezone is. In a distributed system, different servers might log in different timezones. Always set `TimeZone: "UTC"` for production.

**Registration order.** The logger only captures routes registered after it. If you register a health check route before the logger, it will not be logged — which might actually be what you want.

## Where to Start

If you are using `fmt.Println` for debugging, switch to the Logger middleware with the default format. You get latency and status codes immediately, which eliminates the most common "what happened?" questions.

Next, switch to JSON format and add a request ID. This alone makes your logs queryable and correlatable, which is 80% of what you need for production debugging.

## Internal References

- [Logger Middleware](/middleware/logger)
- [RequestID Middleware](/middleware/requestid)
- [What's New](/whats_new)
