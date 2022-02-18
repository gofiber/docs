# 🪝 Hooks

With Fiber v2.28.0, you can execute custom user functions when to run some methods. Here is list of this hooks:
- [OnRoute](../api/app.md#onroute)
- [OnName](../api/app.md#onname)
- [OnListen](../api/app.md#onlisten)
- [OnShutdown](../api/app.md#onshutdown)
- [OnResponse](../api/app.md#onresponse)
- [OnRequest](../api/app.md#onrequest)


{% tabs %}
{% tab title="OnName Example" %}
```go
package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString(c.Route().Name)
	}).Name("index")

	app.OnName(func(c *fiber.Ctx, m fiber.Map) error {
		fmt.Print("Name: " + m["route"].(fiber.Route).Name + ", ")

		return nil
	})

	app.OnName(func(c *fiber.Ctx, m fiber.Map) error {
		fmt.Print("Method: " + m["route"].(fiber.Route).Method + "\n")

		return nil
	})

	app.Get("/add/user", func(c *fiber.Ctx) error {
		return c.SendString(c.Route().Name)
	}).Name("addUser")

	app.Delete("/destroy/user", func(c *fiber.Ctx) error {
		return c.SendString(c.Route().Name)
	}).Name("destroyUser")

	app.Listen(":5000")
}

// Results:
// Name: addUser, Method: GET
// Name: destroyUser, Method: DELETE
```
{% endtab %}

{% tab title="OnResponse Example" %}
```go
package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.OnResponse(func(c *fiber.Ctx, m fiber.Map) error {
		fmt.Print("Path: " + c.Path() + "\n")

		return nil
	})

	app.Get("/add/user", func(c *fiber.Ctx) error {
		return c.SendString(c.Route().Name)
	}).Name("addUser")

	app.Listen(":5000")
}

// Curl: curl -X GET http://localhost:5000/add/user
// Results:
// Name: addUser, Method: GET
// Name: destroyUser, Method: DELETE
```
{% endtab %}

{% tab title="OnRequest Example" %}
```go
package main

import (
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.OnRequest(func(c *fiber.Ctx, m fiber.Map) error {
		return c.SendString("hook")
	})

	app.Get("/add/user", func(c *fiber.Ctx) error {
		return c.SendString("handler")
	}).Name("addUser")

	app.Listen(":5000")
}

// Curl: curl -X GET http://localhost:5000/add/user
// Result: hook
```
{% endtab %}
{% endtabs %}


