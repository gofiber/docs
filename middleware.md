---
description: >-
  Middleware is a function chained in the HTTP request cycle with access to the
  Context which it uses to perform a specific action, for example, logging every
  request or enabling CORS.
---

# 🧬 Middleware

## BasicAuth

Basic auth middleware provides an HTTP basic authentication. It calls the next handler for valid credentials and "401 - Unauthorized" for missing or invalid credentials.

**Signature**

```go
middleware.BasicAuth(config ...BasicAuthConfig) func(*Ctx)
```

**Config**

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| Skip | `func(*Ctx) bool` | Defines a function to skip middleware | `nil` |
| Users | `map[string][string]` | Users defines the allowed credentials | `nil` |
| Realm | `string` | Realm is a string to define the realm attribute | `Restricted` |

**Example**

```go
package main

import (
	"github.com/gofiber/fiber"
	"github.com/gofiber/fiber/middleware"
)

func main() {
	app := fiber.New()
	
	// Config
	authConfig := middleware.BasicAuthConfig{
		Users: map[string]string{
			"john":  "doe",
			"admin": "123456",
		},
	}
	// Middleware
	app.Use(middleware.BasicAuth(authConfig))
	// Application
	app.Get("/", func(c *fiber.Ctx) {
		c.Send("You are authorized!")
	})
	
	app.Listen(3000)
	// Run: curl --user john:doe http://localhost:3000
}

```

## CORS

TODO: Description

**Signature**

