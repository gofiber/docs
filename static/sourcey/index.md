# Fiber — Express-inspired web framework for Go

# Fiber {#fiber}


Fiber is an [Express](https://github.com/expressjs/express) inspired **web framework** built on top of [Fasthttp](https://github.com/valyala/fasthttp), the fastest HTTP engine for [Go](https://go.dev/doc/). Designed to **ease** things up for **fast** development with **zero memory allocation** and **performance** in mind.

Fiber requires **Go version `1.26` or higher** to run.


## What you get {#what-you-get}


- **Robust routing** — see [Routing and context](https://docs.gofiber.io/sourcey/guides/routing-context.md).
- **Middleware & `Next`** — chain handlers, logger, CORS, Recover — see [Middleware](https://docs.gofiber.io/sourcey/guides/middleware.md).
- **Static files** — serve a directory or a single file — see [Static files and error handling](https://docs.gofiber.io/sourcey/guides/static-error-handling.md).
- **Zero allocation** — values returned from `fiber.Ctx` are reused across requests — see [Zero allocation](https://docs.gofiber.io/sourcey/guides/zero-allocation.md).
- **Template engines** — HTML by default, plus Pug, Handlebars, Mustache, Amber and more via `github.com/gofiber/template`.
- **WebSocket, Socket.io, Server-Sent Events** — real-time support in the middleware packages.
- **Rate limiter, CSRF, sessions, caching** — internal and external middleware cover the common production needs.
- **`net/http` compatibility** — the router accepts existing `net/http` handlers directly — see [Migration and limits](https://docs.gofiber.io/sourcey/guides/migration-limits.md).


## Where to start {#where-to-start}


- New to Fiber? Read [Quickstart](https://docs.gofiber.io/sourcey/quickstart.md) — install, your first "Hello, World 👋!" server, and the core concepts.
- Already routing? [Routing and context](https://docs.gofiber.io/sourcey/guides/routing-context.md) and [Middleware](https://docs.gofiber.io/sourcey/guides/middleware.md) cover the daily API.
- Shipping to production? [Zero allocation](https://docs.gofiber.io/sourcey/guides/zero-allocation.md) and [Migration and limits](https://docs.gofiber.io/sourcey/guides/migration-limits.md) cover the caveats that bite (context reuse, Go version floor, `net/http` semantics).


## API reference {#api-reference}


The [Go API](https://docs.gofiber.io/sourcey/api.md) tab is the full reference for the `github.com/gofiber/fiber/v3` package, generated from the package source: 79 types, 30 package-level functions, 367 methods, 271 constants, and 64 variables — including `App`, `Ctx`, `Config`, `Router`, `Route`, `Bind`, `Cookie`, and the error helpers.


## Documented version {#documented-version}


This site documents **gofiber/fiber @ 0d4d872** (commit `0d4d872a29e844159a59b0b9f4cd7afab6ec624a`, 26 Nov 2026), MIT licensed. Source links in the API reference point at that exact commit on GitHub.
