---
description: >-
  Un middleware es una función interpuesta en el ciclo de vida de una solicitud HTTP con acceso al contexto o "Context" que se utiliza para realizar una acción específica, por ejemplo registrar cada solicitud o habilitar CORS.
---

# 🧬 Middleware

## Middleware de Fiber

 Los módulos de middleware de Fiber listados aquí son mantenidos por el [equipo de Fiber](https://github.com/orgs/gofiber/people).

| Middleware                                                                                                           | Descripción                                                                                                                                                                                            | Construido con `Fiber v1.11.x` |
|:-------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:------------------------------ |
| [**adaptor**](https://github.com/gofiber/adaptor)                                                                    | Conversor entre manejadores net/http y manejadores de petición de FIber. ¡Nuestro especial agradecimiento a @arsmn!                                                                                    | -                              |
| [**basicauth**](https://github.com/gofiber/basicauth)                                                                | El middleware de autenticación básica provee una capa de autenticación HTTP. Llama al siguiente manejador si los credenciales son válidos o devuelve un 401 si no hay credenciales o si son inválidos. | -                              |
| [**compression**](https://github.com/gofiber/compression)                                                            |                                                                                                                                                                                                        | -                              |
| [**cors**](https://github.com/gofiber/cors)                                                                          | Activa CORS, del inglés Cross-Origin Resource Sharing, con varias opciones.                                                                                                                            | -                              |
| [**csrf**](https://github.com/gofiber/csrf)                                                                          | Protección contra explotación de CSRF (Cross-site request forgery).                                                                                                                                    | -                              |
| [**embed**](https://github.com/gofiber/embed)                                                                        | Middleware de servidor de ficheros. Gracias a Alireza Salary.                                                                                                                                          | -                              |
| \*\*\*\*[**helmet**](https://github.com/gofiber/fiber/blob/master/middleware/helmet.md)\*\*\*\*      | Helps secure your apps by setting various HTTP headers.                                                                                                                                                | `middleware.Helmet()`          |
| [**jwt**](https://github.com/gofiber/jwt)                                                                            | JWT returns a JSON Web Token \(JWT\) auth middleware.                                                                                                                                                | -                              |
| [**keyauth**](https://github.com/gofiber/keyauth)                                                                    | Key auth middleware provides a key based authentication.                                                                                                                                               | -                              |
| [**limiter**](https://github.com/gofiber/limiter)                                                                    | Rate-limiting middleware for Fiber. Use to limit repeated requests to public APIs and/or endpoints such as password reset.                                                                             | -                              |
| \*\*\*\*[**logger**](https://github.com/gofiber/fiber/blob/master/middleware/logger.md)\*\*\*\*      | HTTP request/response logger.                                                                                                                                                                          | `middleware.Logger()`          |
| [**pprof**](https://github.com/gofiber/pprof)                                                                        | Special thanks to Matthew Lee \(@mthli\)                                                                                                                                                             | -                              |
| \*\*\*\*[**recover**](https://github.com/gofiber/fiber/blob/master/middleware/recover_id.md)\*\*\*\* | Recover middleware recovers from panics anywhere in the stack chain and handles the control to the centralized[ ErrorHandler](error-handling.md).                                                      | `middleware.Recover()`         |
| [**rewrite**](https://github.com/gofiber/rewrite)                                                                    | Rewrite middleware rewrites the URL path based on provided rules. It can be helpful for backward compatibility or just creating cleaner and more descriptive links.                                    | -                              |
| \*\*\*\*[**requestid**](https://github.com/Fenny/fiber/blob/master/middleware/request_id.md)\*\*\*\* | Request ID middleware generates a unique id for a request.                                                                                                                                             | `middleware.RequestID()`       |
| [**session**](https://github.com/gofiber/session)                                                                    | This session middleware is build on top of fasthttp/session by @savsgio MIT. Special thanks to @thomasvvugt for helping with this middleware.                                                          | -                              |
| [**template**](https://github.com/gofiber/template)                                                                  | This package contains 8 template engines that can be used with Fiber v1.10.0 Go version 1.13 or higher is required.                                                                                    | -                              |
| [**websocket**](https://github.com/gofiber/websocket)                                                                | Based on Fasthttp WebSocket for Fiber with Locals support!                                                                                                                                             | -                              |

## Third-Party Middleware

These are some additional popular middleware modules created by the community. Please open an [issue ](https://github.com/gofiber/fiber/issues)if you want to see yours.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Middleware</th>
      <th style="text-align:left">Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><a href="https://github.com/arsmn/fiber-swagger"><b>fiber-swagger</b></a>
      </td>
      <td style="text-align:left">Automatically generate RESTful API documentation with Swagger 2.0.</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://github.com/arsmn/fiber-casbin"><b>fiber-casbin</b></a>
      </td>
      <td style="text-align:left">Casbin middleware for Fiber</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://github.com/arsmn/fiber-introspect"><b>fiber-introspect</b></a>
      </td>
      <td style="text-align:left">
        <p>Introspection middleware for Fiber</p>
        <p>Provides verifying an access token against a remote Introspection endpoint
          (RFC7662)</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://github.com/shareed2k/fiber_tracing"><b>fiber_tracing</b></a>
      </td>
      <td style="text-align:left">Middleware that trace requests on <a href="https://gofiber.io/">Fiber framework</a> with
        OpenTracing API. You can use every tracer that implement OpenTracing interface</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://github.com/shareed2k/fiber_limiter"><b>fiber_limiter</b></a>
      </td>
      <td style="text-align:left">fiber_limiter using <a href="https://github.com/go-redis/redis">redis</a> as
        store for rate limit with two algorithms for choosing sliding window, gcra
        <a
        href="https://en.wikipedia.org/wiki/Leaky_bucket">leaky bucket</a>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://github.com/thomasvvugt/fiber-boilerplate"><b>fiber-boilerplate</b></a>
      </td>
      <td style="text-align:left">A boilerplate for the Fiber web framework</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="https://github.com/arsmn/gqlgen"><b>gqlgen</b></a>
      </td>
      <td style="text-align:left">A Go library for building GraphQL servers without any fuss with Fasthttp
        support</td>
    </tr>
  </tbody>
</table>

## Guidelines

{% hint style="warning" %}
**Unfinished documentation**
{% endhint %}

