---
description: >-
  미들웨어는, 예를들어 매 요청의 로깅이나 CORS를 활성화하는, 특정 행동을 수행하기 위해 사용하는 Context에 대한 접근과 함께 HTTP 요청 사이클에서 체이닝되는 함수입니다.
---

# 🧬 Middleware

## Official Middleware

| Middleware                                                | 설명                                                                                                                                            |
|:--------------------------------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------- |
| [**adaptor**](https://github.com/gofiber/adaptor)         | net/http 핸들러를 Fiber 요청 핸들러로 또는 그 반대로 변환해주는 변환기, @arsmn님에게 특별히 감사드립니다!                                                                         |
| [**basicauth**](https://github.com/gofiber/basicauth)     | Basic auth 미들웨어는 HTTP 기본 인증을 제공합니다. 이것은 유효한 자격에 대해서는 다음 핸들러를 호출하고 자격이 없거나 유효하지 않으면 401 Unauthorized를 호출합니다.                                   |
| [**compression**](https://github.com/gofiber/compression) |                                                                                                                                               |
| [**cors**](https://github.com/gofiber/cors)               |                                                                                                                                               |
| [**csrf**](https://github.com/gofiber/csrf)               |                                                                                                                                               |
| [**embed**](https://github.com/gofiber/embed)             | Fiber를 위한 파일서버 미들웨어, Alireza Salary님에게 특별히 감사드립니다.                                                                                            |
| [**helmet**](https://github.com/gofiber/helmet)           |                                                                                                                                               |
| [**jwt**](https://github.com/gofiber/jwt)                 | JWT는 JSON Web Token (JWT) 인증 미들웨어를 반환합니다.                                                                                                     |
| [**keyauth**](https://github.com/gofiber/keyauth)         |                                                                                                                                               |
| [**limiter**](https://github.com/gofiber/limiter)         |                                                                                                                                               |
| [**logger**](https://github.com/gofiber/logger)           |                                                                                                                                               |
| [**pprof**](https://github.com/gofiber/pprof)             | Matthew Lee님 (@mthli)에게 특별히 감사드립니다.                                                                                                           |
| [**recover**](https://github.com/gofiber/recover)         |                                                                                                                                               |
| [**requestid**](https://github.com/gofiber/requestid)     | `X-Request-ID` 헤더를 사용하여 응답에 식별자를 더합니다.                                                                                                        |
| [**rewrite**](https://github.com/gofiber/rewrite)         |                                                                                                                                               |
| [**session**](https://github.com/gofiber/session)         | This session middleware is build on top of fasthttp/session by @savsgio MIT. Special thanks to @thomasvvugt for helping with this middleware. |
| [**websocket**](https://github.com/gofiber/websocket)     | Based on Fasthttp WebSocket for Fiber with Locals support!                                                                                    |

## Third-Party Middleware

| Middleware                                                                | 설명 |
|:------------------------------------------------------------------------- |:-- |
| [**fiber-swagger**](https://github.com/arsmn/fiber-swagger)               |    |
| [**fiber-casbin**](https://github.com/arsmn/fiber-casbin)                 |    |
| [**fiber-introspect**](https://github.com/arsmn/fiber-introspect)         |    |
| [**fiber_tracing**](https://github.com/shareed2k/fiber_tracing)           |    |
| [**fiber_limiter**](https://github.com/shareed2k/fiber_limiter)           |    |
| [**fiber-boilerplate**](https://github.com/thomasvvugt/fiber-boilerplate) |    |
| [**gqlgen**](https://github.com/arsmn/gqlgen)                             |    |


## Guidelines

{% hint style="warning" %}
**Unfinished documentation**
{% endhint %}