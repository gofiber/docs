---
slug: fiber-v3-error-handling-production
title: Error Handling That Doesn't Embarrass You in Production
authors: [fiber-team]
tags: [fiber, v3, error-handling, production, security, go]
description: Build a custom error handler in Fiber v3 that keeps your internals hidden while giving clients useful, structured responses.
---

The scariest thing in production is not that errors happen. It is that the wrong information leaks when they do.

In Fiber v3, the default error handler sends `err.Error()` to the client, which can expose a raw database error, an internal file path, or other library-generated details. Panics are a separate concern: Fiber does not recover them by default, so they crash the process unless you enable the Recover middleware. During development, that kind of visibility is helpful. In production, it is a security incident waiting to happen. An attacker learns your ORM, your table schema, maybe even the specific query that failed. All from a 500 response you never thought anyone would read.

Fiber v3's error handling is designed around one idea: handlers return errors, and a central handler decides what the client sees. That separation sounds simple, but it changes how you structure error responses across your entire application.

<!-- truncate -->

## Why the Default Handler Is Not Enough

Fiber ships with a default error handler that does the right thing for prototyping: it checks if the error is a `*fiber.Error`, extracts the status code, and sends the error message as plain text.

```go
var DefaultErrorHandler = func(c fiber.Ctx, err error) error {
    code := fiber.StatusInternalServerError
    var e *fiber.Error
    if errors.As(err, &e) {
        code = e.Code
    }
    c.Set(fiber.HeaderContentType, fiber.MIMETextPlainCharsetUTF8)
    return c.Status(code).SendString(err.Error())
}
```

The problem is `err.Error()`. For a `fiber.Error`, the message is controlled. But for an unexpected error — a database timeout, a nil pointer, a failed file operation — `err.Error()` contains whatever the underlying library decided to put in there. That string goes straight to the client.

In one real-world incident, a team discovered that their Postgres connection error included the DSN with credentials. The default handler dutifully sent it as the response body.

## Building a Production Error Handler

A production error handler needs to do three things: classify the error, log the details internally, and send a sanitized response to the client.

```go
type APIError struct {
    Code    int    `json:"code"`
    Message string `json:"message"`
    TraceID string `json:"trace_id,omitempty"`
}

app := fiber.New(fiber.Config{
    ErrorHandler: func(c fiber.Ctx, err error) error {
        code := fiber.StatusInternalServerError
        message := "An unexpected error occurred"

        var e *fiber.Error
        if errors.As(err, &e) {
            code = e.Code
            message = e.Message
        }

        traceID := requestid.FromContext(c)

        // Log the full error internally — never send this to the client
        log.Printf("[%s] %d %s %s: %v",
            traceID, code, c.Method(), c.Path(), err)

        return c.Status(code).JSON(APIError{
            Code:    code,
            Message: message,
            TraceID: traceID,
        })
    },
})
```

The key insight is the split between `err` (logged, never exposed) and `message` (sent to the client, always controlled). If the error is a `*fiber.Error`, the message was explicitly set by your code. If it is anything else, the client gets a generic message and the real error goes to your logs.

## Layered Error Types

For a larger application, you probably want more than just `fiber.Error`. Consider a domain-specific error type that carries both public and private information:

```go
type AppError struct {
    StatusCode int
    PublicMsg  string
    Internal   error
}

func (e *AppError) Error() string {
    if e.Internal != nil {
        return e.Internal.Error()
    }
    return e.PublicMsg
}

func NewNotFound(msg string, internal error) *AppError {
    return &AppError{
        StatusCode: fiber.StatusNotFound,
        PublicMsg:  msg,
        Internal:   internal,
    }
}

func NewBadRequest(msg string) *AppError {
    return &AppError{
        StatusCode: fiber.StatusBadRequest,
        PublicMsg:  msg,
    }
}
```

Then your handlers become expressive without leaking internals:

```go
app.Get("/users/:id", func(c fiber.Ctx) error {
    user, err := db.FindUser(c.Params("id"))
    if err != nil {
        if errors.Is(err, sql.ErrNoRows) {
            return NewNotFound("User not found", err)
        }
        return err // Will hit the generic "unexpected error" path
    }
    return c.JSON(user)
})
```

And the error handler checks for your type first:

```go
ErrorHandler: func(c fiber.Ctx, err error) error {
    code := fiber.StatusInternalServerError
    message := "An unexpected error occurred"

    var appErr *AppError
    var fiberErr *fiber.Error

    switch {
    case errors.As(err, &appErr):
        code = appErr.StatusCode
        message = appErr.PublicMsg
        if appErr.Internal != nil {
            log.Printf("internal: %v", appErr.Internal)
        }
    case errors.As(err, &fiberErr):
        code = fiberErr.Code
        message = fiberErr.Message
    default:
        log.Printf("unhandled: %v", err)
    }

    return c.Status(code).JSON(APIError{
        Code:    code,
        Message: message,
    })
}
```

## Don't Forget Panics

Fiber does not recover from panics by default. If a nil pointer dereference hits your handler, the entire process crashes. The `recover` middleware catches panics and converts them to errors that flow through your error handler:

```go
import recoverer "github.com/gofiber/fiber/v3/middleware/recover"

app.Use(recoverer.New())
```

Note the import alias: Go's built-in `recover` keyword conflicts with the package name, so the convention is to import it as `recoverer`.

With your custom error handler in place, a panic becomes a logged internal error and a clean 500 response instead of a process restart and a confused load balancer.

One subtlety: the recover middleware should be registered early, before other middleware. If it is registered after the logger, panics in the logger itself will not be caught.

## Validation Errors as Structured Responses

Validation failures deserve special treatment. A 400 response that says "bad request" is useless to API consumers. They need to know which field failed and why.

```go
type ValidationError struct {
    Field   string `json:"field"`
    Message string `json:"message"`
}

type ValidationErrors struct {
    Errors []ValidationError `json:"errors"`
}

func (e *ValidationErrors) Error() string {
    return fmt.Sprintf("%d validation errors", len(e.Errors))
}
```

In the error handler, check for this type and return a 422:

```go
var validationErr *ValidationErrors
if errors.As(err, &validationErr) {
    return c.Status(fiber.StatusUnprocessableEntity).JSON(validationErr)
}
```

This pattern works well with `go-playground/validator` or any validation library that returns structured errors.

## Content Negotiation

One detail that is easy to miss: not all clients want JSON. If your application serves both an API and HTML pages, the error handler should respect the `Accept` header:

```go
if c.Accepts("application/json") != "" {
    return c.Status(code).JSON(APIError{Code: code, Message: message})
}
return c.Status(code).Render("error", fiber.Map{
    "Code":    code,
    "Message": message,
})
```

This avoids the awkward situation where a browser user sees raw JSON on an error page, or an API client receives HTML it cannot parse.

## Where to Start

If your application uses the default error handler, start by adding a custom one that does two things: logs the real error and sends a generic message. That single change eliminates the most common information leakage vector.

Once that is in place, introduce a domain error type for the status codes and messages your handlers use most. You do not need to cover every case on day one.

## Internal References

- [Error Handling Guide](/guide/error-handling)
- [Recover Middleware](/middleware/recover)
- [What's New](/whats_new)
