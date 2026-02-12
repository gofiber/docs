---
slug: fiber-v3-extractors-guide
title: Extractors Guide for Middleware
authors: [fiber-team]
tags: [fiber, v3, extractors, middleware, security]
description: Use extractors to centralize value extraction across middleware and improve security consistency.
---

Security bugs in middleware are often not algorithm bugs. They are extraction-policy bugs.

One component reads bearer tokens from headers, another falls back to query first, a third uses cookie-first behavior. All of them can work individually, but together they create inconsistent security posture.

Extractors are useful because they make source selection and fallback order explicit.

<!-- truncate -->

## Why This Feature Is Cool

The real value is shared behavior. Instead of rewriting lookup code inside each middleware setup, you compose extraction policy with reusable building blocks and keep that policy visible.

That improves both maintainability and security review quality.

## What Was Harder Before

In many older codebases, extraction logic was duplicated and hand-rolled. Small changes in one service did not propagate to others, and fallback order drifted over time.

With extractors, teams can standardize this path and reduce accidental divergence.

## Basic Extractor Setup

```go
app.Use(keyauth.New(keyauth.Config{
    Extractor: extractors.FromAuthHeader("Bearer"),
}))
```

## Explicit Fallback Policy

```go
app.Use(keyauth.New(keyauth.Config{
    Extractor: extractors.Chain(
        extractors.FromAuthHeader("Bearer"),
        extractors.FromHeader("X-API-Key"),
        extractors.FromCookie("api_key"),
    ),
}))
```

The order is policy. If your team agrees on header-first extraction for sensitive keys, put that policy in code once and reuse it.

## Practical Use Cases

During auth migration projects, extractors are especially helpful. You can support old and new credential channels temporarily without scattering compatibility code across handlers.

They are also useful in internal platforms where several middleware packages need consistent extraction behavior.

## Internal References

- [Extractors Guide](/guide/extractors)
- [KeyAuth Middleware](/middleware/keyauth)
- [What's New](/whats_new)
