---
slug: fiber-v3-extractors-guide
title: Extractors Guide for Middleware
authors: [fiber-team]
tags: [fiber, v3, extractors, middleware, security, go]
description: Use extractors to centralize value extraction across middleware and improve security consistency.
---

Security bugs in middleware are often not algorithm bugs. They are extraction-policy bugs.

One component reads bearer tokens from headers, another falls back to query parameters first, a third uses cookie-first behavior. Each of these can work in isolation, but together they create inconsistent security posture. During an auth migration, the problem multiplies: old services use one extraction path, new services use another, and nobody is sure which fallback order is actually active in production.

The extractors package in Fiber v3 exists to solve this. It gives middleware a shared, composable API for declaring where values come from and in what order, so extraction policy is explicit and reviewable rather than scattered across handler code.

<!-- truncate -->

## The Problem Extractors Replace

Before this package existed, every middleware that needed a token, session ID, or API key implemented its own extraction logic. KeyAuth had its own header parser. Session middleware had its own cookie reader. CSRF had its own form-field lookup. The logic was similar but never identical, and the differences were hard to spot in review.

When a team wanted to change extraction behavior, say adding a fallback from header to cookie during a migration, they had to patch each middleware individually. If one middleware was missed, that endpoint silently used different extraction rules than the rest.

Extractors consolidate this into a single package with a consistent API. Middleware packages import extractors directly, so changes to extraction logic propagate everywhere at once.

## Available Extractors

The package provides extractors for every common HTTP source:

- `FromAuthHeader(authScheme)` — extracts from the `Authorization` header, validating the scheme
- `FromHeader(key)` — extracts from any request header
- `FromCookie(key)` — extracts from HTTP cookies
- `FromQuery(param)` — extracts from URL query parameters
- `FromParam(param)` — extracts from URL path parameters
- `FromForm(param)` — extracts from form data (POST body)
- `FromCustom(key, fn)` — defines custom extraction logic with a callback
- `Chain(extractors...)` — tries multiple extractors in order, returns the first success

Each extractor returns a struct with metadata about the source, not just the value. This means middleware can inspect where a value came from and make security decisions based on source type.

## Basic Usage

The simplest case is a single-source extractor passed to middleware config:

```go
app.Use(keyauth.New(keyauth.Config{
    Extractor: extractors.FromHeader("X-API-Key"),
}))
```

This replaces whatever internal header-parsing logic the middleware previously used, with a shared implementation that behaves identically across all middleware.

For session middleware, the pattern is the same:

```go
app.Use(session.New(session.Config{
    Extractor: extractors.FromCookie("session_id"),
}))
```

## Fallback Chains: Declaring Extraction Policy

The real power shows up when you need multiple sources. During auth migrations, for example, you might accept tokens from the `Authorization` header (the new path) while still supporting a legacy `X-API-Key` header and a query parameter fallback for internal tools.

```go
app.Use(keyauth.New(keyauth.Config{
    Extractor: extractors.Chain(
        extractors.FromAuthHeader("Bearer"),
        extractors.FromHeader("X-API-Key"),
        extractors.FromQuery("api_key"),
    ),
}))
```

`Chain` tries each extractor in order. The first one that returns a non-empty value without error wins. If all extractors fail, it returns the last error or `ErrNotFound`.

The ordering is policy. Putting the `Authorization` header first means that if both a header and a query parameter are present, the header wins. That is a deliberate security decision, and it lives in code rather than in documentation that nobody reads.

## Authorization Header and RFC Compliance

The `FromAuthHeader` extractor is not a simple string split. It implements RFC 9110 Section 11.6.2 and RFC 7235 token68 validation:

- Case-insensitive scheme matching (`Bearer`, `bearer`, `BEARER` all work)
- Strict whitespace handling (only spaces between scheme and token, no tabs)
- Token68 character validation (only `A-Z`, `a-z`, `0-9`, `-._~+/=`)
- Padding rules (trailing `=` only, never leading or mid-token)

```go
extractor := extractors.FromAuthHeader("Bearer")

// Valid: "Bearer abc123" → "abc123"
// Valid: "bearer ABC123" → "ABC123" (case-insensitive)
// Invalid: "Bearer abc def" → rejected (space in token)
// Invalid: "Bearer =abc" → rejected (padding at start)
// Invalid: "Bearertoken" → rejected (no space after scheme)
```

This strictness matters because malformed authorization headers are a common vector for authentication bypass. A permissive parser might accept a header that a standards-compliant proxy would reject, creating inconsistency between your application layer and your infrastructure.

If you need raw header access without validation, pass an empty scheme:

```go
raw := extractors.FromAuthHeader("")
// Returns the full header value without scheme parsing
```

## Security Considerations by Source

Different extraction sources have different security properties, and the choice is not just about convenience.

**Headers** are generally preferred for sensitive values. They are not visible in URLs, not stored in browser history, and not logged by default in most proxy configurations. The `Authorization` header is the standard place for credentials.

**Cookies** are designed for persistent client-side storage and support `Secure`, `HttpOnly`, and `SameSite` flags. They are the right choice for session tokens, but require correct flag configuration to be safe.

**Query parameters** are always visible in URLs. They get logged by servers, stored in browser history, cached by proxies, and appear in referrer headers. Never put sensitive tokens in query parameters unless there is no alternative.

**Form data** is suitable for user-generated content and CSRF tokens in form submissions, but requires POST requests and correct content types.

When building chains, order them from most secure to least secure:

```go
extractors.Chain(
    extractors.FromAuthHeader("Bearer"),    // standard, secure
    extractors.FromCookie("auth_token"),    // persistent, needs flags
    extractors.FromQuery("token"),          // visible, use sparingly
)
```

## CSRF Middleware Example

CSRF protection is a good example of where chains solve a real problem. Header-based CSRF tokens work for AJAX and API clients, but traditional form submissions need form-field extraction:

```go
app.Use(csrf.New(csrf.Config{
    Extractor: extractors.Chain(
        extractors.FromHeader("X-CSRF-Token"),
        extractors.FromForm("_csrf"),
    ),
}))
```

This supports both JavaScript clients that set headers and HTML forms that submit tokens in hidden fields, with a single consistent config.

## Custom Extractors for Special Cases

When standard extractors do not fit, `FromCustom` lets you define arbitrary extraction logic:

```go
extractor := extractors.FromCustom("computed-token", func(c fiber.Ctx) (string, error) {
    if val := c.Locals("computed_token"); val != nil {
        return val.(string), nil
    }
    return "", extractors.ErrNotFound
})
```

Custom extractors break source awareness: middleware cannot determine where the value came from, so automatic security warnings and source-based logging will not work. Use them only when standard extractors do not meet your needs and you have evaluated the security implications.

## Coordinating Multiple Middleware

When several middleware packages extract values from the same request, make sure they use different sources to avoid conflicts:

```go
// Good: different sources for different purposes
app.Use(keyauth.New(keyauth.Config{
    Extractor: extractors.FromHeader("X-API-Key"),
}))
app.Use(session.New(session.Config{
    Extractor: extractors.FromCookie("session_id"),
}))
```

If two middleware packages extract from the same cookie or header, one will shadow the other and debugging becomes unpredictable.

## Where to Start

If your middleware currently uses hardcoded extraction logic, pick the authentication middleware first. Replace its internal token lookup with an extractor, then verify that fallback behavior matches what you expect. Once that works, move to session and CSRF middleware.

The goal is not to rewrite everything at once. The goal is to make extraction policy visible and consistent, one middleware at a time.

## Internal References

- [Extractors Guide](/guide/extractors)
- [KeyAuth Middleware](/middleware/keyauth)
- [What's New](/whats_new)
