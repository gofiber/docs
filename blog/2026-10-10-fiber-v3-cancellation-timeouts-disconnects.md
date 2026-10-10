---
slug: fiber-v3-cancellation-timeouts-disconnects
title: "Nobody Cancels Your Handler: Timeouts and Client Disconnects in Fiber v3"
authors: [fiber-team]
tags: [fiber, v3, context, timeout, sse, streaming, production, go]
description: "Fiber's Ctx satisfies context.Context but is never canceled, and a client that hangs up does not stop your handler. How to bound work with the timeout middleware, notice disconnects in SSE streams, and end long streams on shutdown."
---

Picture a bug report that is really a cost problem. A summary endpoint calls a slow upstream, an LLM API in our case, and users who get bored close the tab after a second or two. The frontend is fine with that. The invoice is not: the upstream bill shows complete generations for requests whose clients were long gone. The handler passed its context to the upstream client, so everybody assumed that a closed connection would cancel the call. It never did.

If you came to Fiber from `net/http`, Gin, Echo or Chi, that assumption is reasonable. In those frameworks, the request context is canceled when the client disconnects. Fiber runs on fasthttp, and fasthttp does not watch the connection while your handler runs. The `fiber.Ctx` you get satisfies `context.Context`, so the code compiles, but it is a context that can never be canceled. It is one of the most frequently reported surprises in the issue tracker (see [#4335](https://github.com/gofiber/fiber/issues/4335) or [#4263](https://github.com/gofiber/fiber/issues/4263)), and the method docs in v3.5.0 now state it in plain words.

This post shows what you can rely on instead, with one service that we build and test against Fiber v3.5.0: a deadline for request/response handlers, disconnect detection for streams, and a clean way to end long streams when the server shuts down.

<!-- truncate -->

## Three Contexts, None of Them Watches the Client

Inside a handler you can reach three different things that implement `context.Context`:

| Expression       | What it is                          | When `Done()` fires                       |
| ---------------- | ----------------------------------- | ----------------------------------------- |
| `c`              | Fiber's pooled request context      | never, `Done()` returns `nil`             |
| `c.Context()`    | whatever `c.SetContext` stored last | never by default (`context.Background()`) |
| `c.RequestCtx()` | fasthttp's `*RequestCtx`            | when the server shuts down                |

The first row is the one that bites. `fiber.Ctx` implements `Deadline`, `Done`, `Err` and `Value`, so you can hand `c` to any function that takes a `context.Context`. Only `Value` does real work, backed by `c.Locals`. `Deadline` reports no deadline, `Done` returns `nil` and `Err` returns `nil`, whatever you do. That is allowed by the `context` contract, which permits contexts that can never be canceled, and it is deliberate: `c` is recycled through a pool after the request, so it cannot behave like the immutable value a real context is supposed to be.

The second row is where cancellation and deadlines are meant to live. `c.Context()` returns whatever was last stored with `c.SetContext`, and middleware such as the timeout middleware store something useful there. Until one does, it is a context that never ends either.

The third row is the one people find when they dig. fasthttp's `RequestCtx` also implements `context.Context`, and its `Done` channel does close, but only when the whole server starts shutting down. It is not a per-client signal.

Why is there no per-client signal? fasthttp reads the complete request, calls your handler, and writes the response after the handler returns. Nothing reads from the socket while your code runs, so nothing can notice that the peer has gone. `net/http` keeps a background read going on the connection for exactly this purpose, which is why its request context can be canceled on disconnect. Code written for one model compiles fine in the other, which is exactly why this goes unnoticed.

## A Summary Service That Ignores Its Clients

Here is the service. The `generate` function stands in for the upstream: it produces one token every 200 milliseconds and stops as soon as its context is done. That is how a well-behaved upstream client works, whether it talks to a model API, a database or another service. The two documents are short enough to read in the source, and long enough that one of them takes more than ten seconds to summarize.

```go
package main

import (
    "context"
    "errors"
    "log"
    "os"
    "os/signal"
    "strings"
    "syscall"
    "time"

    "github.com/gofiber/fiber/v3"
    "github.com/gofiber/fiber/v3/middleware/sse"
    "github.com/gofiber/fiber/v3/middleware/timeout"
)

var documents = map[string]string{
    "q3": "Revenue grew in every region while support tickets fell by a third.",
    "annual": "Revenue grew in every region for the fourth year in a row. The new " +
        "onboarding flow drove most of the growth, support tickets fell by a third, " +
        "churn stayed flat, two offices opened, and the hiring plan for the next " +
        "year is on track despite a slower second quarter in the enterprise segment.",
}

var errUnknownDocument = errors.New("unknown document")

// generate stands in for a slow upstream such as an LLM API. It produces one
// token every 200ms and stops as soon as ctx is done or emit fails.
func generate(ctx context.Context, doc string, emit func(token string) error) error {
    text, ok := documents[doc]
    if !ok {
        return errUnknownDocument
    }
    tokens := strings.Fields(text)
    for i, tok := range tokens {
        select {
        case <-ctx.Done():
            log.Printf("generate %s: stopped after %d of %d tokens: %v", doc, i, len(tokens), ctx.Err())
            return ctx.Err()
        case <-time.After(200 * time.Millisecond):
        }
        if err := emit(tok); err != nil {
            log.Printf("generate %s: stopped after %d of %d tokens: %v", doc, i+1, len(tokens), err)
            return err
        }
    }
    log.Printf("generate %s: finished all %d tokens", doc, len(tokens))
    return nil
}

func summaryHandler(c fiber.Ctx) error {
    var b strings.Builder
    err := generate(c.Context(), c.Params("doc"), func(tok string) error {
        if b.Len() > 0 {
            b.WriteByte(' ')
        }
        b.WriteString(tok)
        return nil
    })
    if errors.Is(err, errUnknownDocument) {
        return fiber.ErrNotFound
    }
    if err != nil {
        return err
    }
    return c.JSON(fiber.Map{"summary": b.String()})
}

func streamHandler(shutdown context.Context) sse.Handler {
    return func(c fiber.Ctx, stream *sse.Stream) error {
        // stream.Context() ends when the client is gone or the handler returns.
        // Add a hard cap for the whole stream and stop early on shutdown.
        ctx, cancel := context.WithTimeout(stream.Context(), time.Minute)
        defer cancel()
        stop := context.AfterFunc(shutdown, cancel)
        defer stop()

        err := generate(ctx, c.Params("doc"), func(tok string) error {
            return stream.Event(sse.Event{Name: "token", Data: tok})
        })
        switch {
        case err == nil:
            return stream.Event(sse.Event{Name: "done", Data: "ok"})
        case errors.Is(err, errUnknownDocument):
            return stream.Event(sse.Event{Name: "failed", Data: "unknown document"})
        case shutdown.Err() != nil:
            return stream.Event(sse.Event{Name: "failed", Data: "server restarting, try again"})
        default:
            return err
        }
    }
}

func newApp(shutdown context.Context) *fiber.App {
    app := fiber.New()

    app.Get("/summaries/:doc", timeout.New(summaryHandler, timeout.Config{
        Timeout: 3 * time.Second,
    }))

    app.Get("/summaries/:doc/stream", sse.New(sse.Config{
        Handler: streamHandler(shutdown),
        OnClose: func(c fiber.Ctx, err error) {
            if err != nil {
                log.Printf("stream for %s closed: %v", c.Params("doc"), err)
            }
        },
    }))

    return app
}

func main() {
    shutdown, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
    defer stop()

    app := newApp(shutdown)

    listenErr := make(chan error, 1)
    go func() {
        listenErr <- app.Listen(":3000")
    }()

    select {
    case err := <-listenErr:
        log.Fatal(err)
    case <-shutdown.Done():
    }

    if err := app.ShutdownWithTimeout(10 * time.Second); err != nil {
        log.Printf("shutdown: %v", err)
    }
}
```

That is the finished version. Before we walk through it, here is the handler as it looked when the bug report came in:

```go
// Compiles, and never cancels anything.
func naiveSummary(c fiber.Ctx) error {
    var b strings.Builder
    err := generate(c, c.Params("doc"), func(tok string) error { // c, not c.Context()
        b.WriteString(tok + " ")
        return nil
    })
    if err != nil {
        return err
    }
    return c.JSON(fiber.Map{"summary": b.String()})
}
```

Register it with `app.Get("/naive/:doc", naiveSummary)`, call it with a client that gives up after one second, and watch the server log. All logs and responses in this post come from the program above running on a real listener on Linux, called with curl over loopback, built with Go 1.25 against Fiber v3.5.0 and fasthttp v1.73.0.

```bash
curl -m 1 http://localhost:3000/naive/annual
```

```text
2026/10/10 06:12:29 generate annual: finished all 53 tokens
```

curl exits after one second with a timeout. The log line shows up more than ten seconds later, after all 53 tokens were produced for nobody. Switching `c` to `c.Context()` alone changes nothing here, because without a middleware that sets it, `c.Context()` is `context.Background()`. The fix has two parts, and which one applies depends on whether your handler streams.

## Request/Response Handlers: Give the Work a Deadline

A handler that builds the whole response in memory and returns it has no way to learn that the client left. What you can do is bound the work. You cannot tell whether the client is still waiting, but you know how long it is reasonable to wait, and after that point nobody should be paying for the result.

The [timeout middleware](/middleware/timeout) implements exactly that. `timeout.New` wraps a single handler, derives a context with the configured deadline from `c.Context()`, stores it with `c.SetContext`, and runs the handler in a goroutine. If the handler returns first, you get its result. If the deadline wins, the client gets `408 Request Timeout` right away:

```bash
curl -i http://localhost:3000/summaries/annual
```

```text
HTTP/1.1 408 Request Timeout
Content-Type: text/plain; charset=utf-8
Content-Length: 15

Request Timeout
```

The interesting part is in the server log:

```text
2026/10/10 06:12:12 generate annual: stopped after 14 of 53 tokens: context deadline exceeded
```

The upstream call stopped at the deadline, because `summaryHandler` passes `c.Context()` to `generate`, and `c.Context()` is now the deadline context. That is the deal with the timeout middleware: it can stop waiting for your handler, but it cannot stop your handler. If the handler ignores `c.Context()`, the client still gets its `408` after three seconds, while the goroutine keeps going until the work is done. The middleware makes that safe. Since v3.4.0 the abandoned `Ctx` goes back to the pool once the handler goroutine has returned, earlier versions kept it out of the pool for good. But under load, those orphaned goroutines are exactly the work you wanted to avoid.

A few details from using it in real services. `timeout.New` wraps a final handler, so it goes on the route, not into `app.Use`, and the wrapped handler must not call `c.Next()`. Any error that `errors.Is` matches `context.DeadlineExceeded` is turned into the timeout response too, so a database driver that reports the deadline in its own words should be listed in `Config.Errors`. The default `408` response is built by the middleware itself and does not pass through your error handler; if you need your usual JSON error format, set `Config.OnTimeout`. And pick the number from the outside in: the deadline should end before your load balancer or proxy gives up on the request, otherwise the proxy returns its own error page while your handler still holds a connection to the upstream.

The same idea reaches into other packages. The session middleware gained `SaveWithContext`, `DestroyWithContext`, `RegenerateWithContext` and `ResetWithContext` in v3.4.0, so you can pass `c.Context()` and have a slow session store honor the same deadline.

## Streaming Handlers: Disconnects Show Up as Write Errors

Streaming changes the picture. Once the handler writes to the client while the work is in progress, the network finally tells you something: a write to a connection the client has closed fails. That failed write is the only per-client disconnect signal fasthttp gives you, and the [SSE middleware](/middleware/sse) added in v3.3.0 turns it into a context.

Every `stream.Event` and `stream.Comment` call is flushed immediately. When a flush fails, the stream records the error, closes `stream.Done()` and cancels `stream.Context()`. The handler above derives its own context from `stream.Context()` and passes it to `generate`, so a disconnect stops the upstream call:

```bash
curl -N http://localhost:3000/summaries/q3/stream
```

```text
event: token
data: Revenue

event: token
data: grew

...

event: token
data: third.

event: done
data: ok
```

Now the same with a client that gives up after 0.9 seconds:

```bash
curl -N -m 0.9 http://localhost:3000/summaries/annual/stream
```

```text
2026/10/10 06:12:35 generate annual: stopped after 7 of 53 tokens: fasthttputil: connection closed
2026/10/10 06:12:35 stream for annual closed: fasthttputil: connection closed
```

The client received four tokens before it left. The next two writes still succeeded, because a write only has to reach a buffer, not the client, and only the third write after the disconnect failed. The odd error text comes from fasthttp itself: a stream writer's output travels through an in-process pipe to the connection, and once the real socket write fails, that pipe reports it as closed. I saw the same pattern on every run, but the exact number depends on the network and on what sits in between. Plan for "a write or two later", not "immediately". The same applies if you use `c.SendStreamWriter` directly without the SSE middleware: a failing `Flush` is your disconnect signal, and you have to turn it into a canceled context yourself.

### Quiet Streams Depend on the Heartbeat

This only helps while the stream is writing. It does not help while the stream is silent: during a long time-to-first-token, while a tool call runs, or while a subscriber waits for the next message from a broker. No writes means no write errors, and the handler has no idea the client is gone.

The SSE middleware covers that with heartbeat comments. Every `HeartbeatInterval`, 15 seconds by default, it writes an empty comment line, which `EventSource` ignores and which also keeps proxies from closing an idle stream. A heartbeat is a write like any other, so it fails once the client is gone and cancels `stream.Context()`. In the same test setup with a three-second interval and a handler that only waited on `stream.Context()`, the cancellation arrived nine seconds after the client hung up, on the third heartbeat. If that pattern holds in your environment, the default interval means roughly 30 to 45 seconds of upstream work after a silent client has left, depending on where in the interval the client hung up. If that is expensive, lower `HeartbeatInterval`. If you set `DisableHeartbeat`, a silent stream only learns about the disconnect when it next writes.

### Bounding a Stream

The timeout middleware is the wrong tool for streams, and it fails in a confusing way. This looks like a sensible way to cap a stream at one minute:

```go
// Don't do this: the stream is over before the first event.
app.Get("/broken/:doc/stream", timeout.New(sse.New(sse.Config{
    Handler: streamHandler(shutdown),
}), timeout.Config{Timeout: time.Minute}))
```

Request `/broken/q3/stream` and the client gets `200 OK`, the SSE headers, and an empty stream. The SSE handler returns as soon as it has registered the stream writer, the timeout middleware sees the handler finish and cancels its deadline context, and `stream.Context()` is derived from exactly that context. By the time the first event could be written, the context is already canceled. The server log says so plainly: `stopped after 0 of 12 tokens: context canceled`.

The working version is in `streamHandler`: derive the deadline inside the stream handler with `context.WithTimeout(stream.Context(), time.Minute)`. Now the cap covers the stream itself, and a disconnect still cancels everything because the deadline context is a child of `stream.Context()`.

## Ending Long Streams on Shutdown

Streams have one more property that request/response handlers do not have: they can be open for minutes. That collides with graceful shutdown. `app.ShutdownWithTimeout` stops accepting connections and waits for the open ones to finish, and an SSE stream does not finish just because the server wants to stop. In a test with a stream that ran for 20 seconds and a 3-second shutdown timeout, `ShutdownWithTimeout` returned `context deadline exceeded`, and the stream went on sending events as if nothing had happened, until it was done or the process exited and cut it off mid-event.

So the stream needs to learn about the shutdown. In the example, `main` creates the `shutdown` context with `signal.NotifyContext` and passes it to `newApp`. The stream handler links it to its own context with `context.AfterFunc(shutdown, cancel)`: when the signal arrives, the generation is canceled, and the handler sends a final event telling the client to try again before returning. With a stream open, sending SIGTERM to the process looks like this from the client side:

```text
event: token
data: region

event: failed
data: server restarting, try again
```

The process exits right after that instead of waiting for the shutdown timeout. `context.AfterFunc` has been in the standard library since Go 1.21, well below the Go 1.25 that Fiber v3.5.0 requires. The returned `stop` function makes sure nothing is left registered on the long-lived shutdown context when the stream ends normally.

Two things in `main` matter for this to work. `app.Listen` returns as soon as the shutdown starts, so `main` must not simply exit when `Listen` returns, or the process ends before `ShutdownWithTimeout` has drained anything. And the signal handling is done once, in `main`, instead of in each handler. You could also select on `c.RequestCtx().Done()`, which closes when the server starts shutting down, but an explicit context from `main` makes the dependency visible and is trivial to fake in a test.

One reminder for the browser side. `EventSource` reconnects automatically when a stream ends, which is what you want after a restart and not what you want after a finished summary. Close the `EventSource` when the `done` event arrives, or every completed summary turns into a new request that generates it again. That is also why the example names its error event `failed` and not `error`: `EventSource` fires its own `error` event when the connection drops, and a listener for `error` would get both.

## When the Work Should Outlive the Request

Sometimes you want the opposite: the client may leave, but a piece of work must finish anyway, such as recording token usage for billing. Do not hand `c` to a goroutine for that. `c` goes back to the pool when the handler returns and will be serving another request soon. Copy the values you need inside the handler, and start the goroutine with a context that carries no cancellation, for example `context.WithoutCancel(c.Context())`, plus a deadline of its own. `WithoutCancel` keeps the values of the request context but drops its deadline, so the timeout middleware will not cut your billing write short, and a deadline you set yourself makes sure a stuck write cannot live forever either.

## Wrapping Up

Fiber does not cancel your handler for you. `c` is never canceled, `c.Context()` is only as useful as the middleware that sets it, and a client that hangs up is invisible until you try to write to it. For request/response handlers, the timeout middleware gives the work a deadline, and the work stops at that deadline only if every slow call receives `c.Context()`. For streams, the SSE middleware turns failed writes into a canceled `stream.Context()`, the heartbeat bounds how long a silent stream can go unnoticed, and a shutdown context from `main` keeps long streams from holding up a deploy. In short: pass `c.Context()` or `stream.Context()` to everything that can block, and never `c` itself.

## Internal References

- [Go Context Guide](/guide/go-context)
- [Timeout Middleware](/middleware/timeout)
- [SSE Middleware](/middleware/sse)
- [Session Middleware: Session with Context](/middleware/session#session-with-context-timeoutscancellation)
- [Server Shutdown](/api/fiber#server-shutdown)
- [Graceful Shutdown](/blog/fiber-v3-graceful-shutdown)
- [Fiber v3.3.0 release (SSE middleware)](https://github.com/gofiber/fiber/releases/tag/v3.3.0)
- [Fiber v3.4.0 release (session WithContext, timeout reclaim)](https://github.com/gofiber/fiber/releases/tag/v3.4.0)
- [Fiber v3.5.0 release](https://github.com/gofiber/fiber/releases/tag/v3.5.0)
