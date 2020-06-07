---
description: >-
  Middleware is a function chained in the HTTP request cycle with access to the Context which it uses to perform a specific action, for example, logging every request or enabling CORS.
---

# 🧬 Middleware

## Fiber Middleware

 The Fiber middleware modules listed here are maintained by the [Fiber team](https://github.com/orgs/gofiber/people).

| Middleware                                                                                                           | Description                                                                                                                                                           | Built-in                                                                                                        |
|:-------------------------------------------------------------------------------------------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:--------------------------------------------------------------------------------------------------------------- |
| [**adaptor**](https://github.com/gofiber/adaptor)                                                                    | Converter for net/http handlers to/from Fiber request handlers, special thanks to @arsmn!                                                                             | -                                                                                                               |
| [**basicauth**](https://github.com/gofiber/basicauth)                                                                | Basic auth middleware provides an HTTP basic authentication. It calls the next handler for valid credentials and 401 Unauthorized for missing or invalid credentials. | -                                                                                                               |
| [**compression**](https://github.com/gofiber/compression)                                                            |                                                                                                                                                                       | -                                                                                                               |
| [**cors**](https://github.com/gofiber/cors)                                                                          | Enable cross-origin resource sharing \(CORS\) with various options.                                                                                                 | -                                                                                                               |
| [**csrf**](https://github.com/gofiber/csrf)                                                                          | Protect from CSRF exploits.                                                                                                                                           | -                                                                                                               |
| [**embed**](https://github.com/gofiber/embed)                                                                        | FileServer middleware for Fiber, special thanks and credits to Alireza Salary                                                                                         | -                                                                                                               |
| helmet                                                                                                               | Helps secure your apps by setting various HTTP headers.                                                                                                               | `middleware.Helmet()`                                                                                           |
| [**jwt**](https://github.com/gofiber/jwt)                                                                            | JWT returns a JSON Web Token \(JWT\) auth middleware.                                                                                                               | -                                                                                                               |
| [**keyauth**](https://github.com/gofiber/keyauth)                                                                    | Key auth middleware provides a key based authentication.                                                                                                              | -                                                                                                               |
| [**limiter**](https://github.com/gofiber/limiter)                                                                    | Rate-limiting middleware for Fiber. Use to limit repeated requests to public APIs and/or endpoints such as password reset.                                            | -                                                                                                               |
| logger                                                                                                               | HTTP request/response logger.                                                                                                                                         | `middleware.Logger()`                                                                                           |
| [**pprof**](https://github.com/gofiber/pprof)                                                                        | Special thanks to Matthew Lee \(@mthli\)                                                                                                                            | -                                                                                                               |
| recover                                                                                                              | Recover middleware recovers from panics anywhere in the stack chain and handles the control to the centralized[ ErrorHandler](error-handling.md).                     | `middleware.Recover()`                                                                                          |
| [**rewrite**](https://github.com/gofiber/rewrite)                                                                    | Rewrite middleware rewrites the URL path based on provided rules. It can be helpful for backward compatibility or just creating cleaner and more descriptive links.   | -                                                                                                               |
| \*\*\*\*[**requestid**](https://github.com/Fenny/fiber/blob/master/middleware/request_id.md)\*\*\*\* | Request ID middleware generates a unique id for a request.                                                                                                            | \`\`[`middleware.RequestID()`](https://github.com/Fenny/fiber/blob/master/middleware/request_id.md)\`\` |
| [**session**](https://github.com/gofiber/session)                                                                    | This session middleware is build on top of fasthttp/session by @savsgio MIT. Special thanks to @thomasvvugt for helping with this middleware.                         | -                                                                                                               |
| [**template**](https://github.com/gofiber/template)                                                                  | This package contains 8 template engines that can be used with Fiber v1.10.0 Go version 1.13 or higher is required.                                                   | -                                                                                                               |
| [**websocket**](https://github.com/gofiber/websocket)                                                                | Based on Fasthttp WebSocket for Fiber with Locals support!                                                                                                            | -                                                                                                               |

## Third-Party Middleware

These are some additional popular middleware modules created by the community. Please open an [issue ](https://github.com/gofiber/fiber/issues)if you want to see yours.

| Middleware                                                                | Description |
|:------------------------------------------------------------------------- |:----------- |
| [**fiber-swagger**](https://github.com/arsmn/fiber-swagger)               |             |
| [**fiber-casbin**](https://github.com/arsmn/fiber-casbin)                 |             |
| [**fiber-introspect**](https://github.com/arsmn/fiber-introspect)         |             |
| [**fiber\_tracing**](https://github.com/shareed2k/fiber_tracing)        |             |
| [**fiber\_limiter**](https://github.com/shareed2k/fiber_limiter)        |             |
| [**fiber-boilerplate**](https://github.com/thomasvvugt/fiber-boilerplate) |             |
| [**gqlgen**](https://github.com/arsmn/gqlgen)                             |             |

## Guidelines

{% hint style="warning" %}
**Unfinished documentation**
{% endhint %}

