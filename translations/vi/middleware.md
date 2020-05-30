---
description: >-
  Middleware is a function chained in the HTTP request cycle with access to the Context which it uses to perform a specific action, for example, logging every request or enabling CORS.
---

# 🧬 Middleware

## Official Middleware

| Middleware                                                | Mô tả                                                                                                                                                                 |
|:--------------------------------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**adaptor**](https://github.com/gofiber/adaptor)         | Converter for net/http handlers to/from Fiber request handlers, special thanks to @arsmn!                                                                             |
| [**basicauth**](https://github.com/gofiber/basicauth)     | Basic auth middleware provides an HTTP basic authentication. It calls the next handler for valid credentials and 401 Unauthorized for missing or invalid credentials. |
| [**compression**](https://github.com/gofiber/compression) |                                                                                                                                                                       |
| [**cors**](https://github.com/gofiber/cors)               |                                                                                                                                                                       |
| [**csrf**](https://github.com/gofiber/csrf)               |                                                                                                                                                                       |
| [**embed**](https://github.com/gofiber/embed)             | FileServer middleware for Fiber, special thanks and credits to Alireza Salary                                                                                         |
| [**helmet**](https://github.com/gofiber/helmet)           |                                                                                                                                                                       |
| [**jwt**](https://github.com/gofiber/jwt)                 | JWT returns a JSON Web Token \(JWT\) auth middleware.                                                                                                               |
| [**keyauth**](https://github.com/gofiber/keyauth)         |                                                                                                                                                                       |
| [**limiter**](https://github.com/gofiber/limiter)         |                                                                                                                                                                       |
| [**logger**](https://github.com/gofiber/logger)           |                                                                                                                                                                       |
| [**pprof**](https://github.com/gofiber/pprof)             | Special thanks to Matthew Lee \(@mthli\)                                                                                                                            |
| [**recover**](https://github.com/gofiber/recover)         |                                                                                                                                                                       |
| [**requestid**](https://github.com/gofiber/requestid)     | Adds an indentifier to the response using the `X-Request-ID` header                                                                                                   |
| [**rewrite**](https://github.com/gofiber/rewrite)         |                                                                                                                                                                       |
| [**session**](https://github.com/gofiber/session)         | This session middleware is build on top of fasthttp/session by @savsgio MIT. Special thanks to @thomasvvugt for helping with this middleware.                         |
| [**websocket**](https://github.com/gofiber/websocket)     | Based on Fasthttp WebSocket for Fiber with Locals support!                                                                                                            |

## Third-Party Middleware

| Middleware                                                                | Mô tả |
|:------------------------------------------------------------------------- |:----- |
| [**fiber-swagger**](https://github.com/arsmn/fiber-swagger)               |       |
| [**fiber-casbin**](https://github.com/arsmn/fiber-casbin)                 |       |
| [**fiber-introspect**](https://github.com/arsmn/fiber-introspect)         |       |
| [**fiber\_tracing**](https://github.com/shareed2k/fiber_tracing)        |       |
| [**fiber\_limiter**](https://github.com/shareed2k/fiber_limiter)        |       |
| [**fiber-boilerplate**](https://github.com/thomasvvugt/fiber-boilerplate) |       |
| [**gqlgen**](https://github.com/arsmn/gqlgen)                             |       |

## Guidelines

{% hint style="warning" %}
**Unfinished documentation**
{% endhint %}

