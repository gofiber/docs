# 🎭 Grouping

## Paths

Like **Routing**, groups can also have paths that belong to a cluster.

```go
func main() {
  app := fiber.New()

  api := app.Group("/api", middleware) // /api

  v1 := api.Group("/v1", middleware)   // /api/v1
  v1.Get("/list", handler)             // /api/v1/list
  v1.Get("/user", handler)             // /api/v1/user

  v2 := api.Group("/v2", middleware)   // /api/v2
  v2.Get("/list", handler)             // /api/v2/list
  v2.Get("/user", handler)             // /api/v2/user

  app.Listen(3000)
}
```

A **Group** of paths can have an optional handler.

```go
func main() {
  app := fiber.New()

  api := app.Group("/api")      // /api

  v1 := api.Group("/v1")        // /api/v1
  v1.Get("/list", handler)      // /api/v1/list
  v1.Get("/user", handler)      // /api/v1/user

  v2 := api.Group("/v2")        // /api/v2
  v2.Get("/list", handler)      // /api/v2/list
  v2.Get("/user", handler)      // /api/v2/user

  app.Listen(3000)
}
```

{% hint style="warning" %}
Running **/api**, **/v1** or **/v2** will result in **404** error, make sure you have the errors set.
{% endhint %}

## Group Handlers

Group handlers can also be used as a routing path but they must have **Next** added to them so that the flow can continue.

```go
func main() {
    app := fiber.New()

    api := app.Group("/api") // /api

    v1 := api.Group("/v1", func(c *fiber.Ctx) error {
        c.JSON(fiber.Map{
            "message": "v1",
        })
        return c.Next()
    })                       // /api/v1
    v1.Get("/list", handler) // /api/v1/list
    v1.Get("/user", handler) // /api/v1/user

    app.Listen(3000)
}
```

