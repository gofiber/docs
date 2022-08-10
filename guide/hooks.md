# 🪝 Hooks

With Fiber v2.30.0, you can execute custom user functions when to run some methods. Here is a list of this hooks:
- [OnRoute](#onroute)
- [OnName](#onname)
- [OnGroup](#ongroup)
- [OnGroupName](#ongroupname)
- [OnListen](#onlisten)
- [OnFork](#onfork)
- [OnShutdown](#onshutdown)

## Constants
```go
// Handlers define a function to create hooks for Fiber.
type OnRouteHandler = func(Route) error
type OnNameHandler = OnRouteHandler
type OnGroupHandler = func(Group) error
type OnGroupNameHandler = OnGroupHandler
type OnListenHandler = func() error
type OnForkHandler = func(int) error
type OnShutdownHandler = OnListenHandler
```

## OnRoute

OnRoute is a hook to execute user functions on each route registeration. Also you can get route properties by **route** parameter.

{% code title="Signature" %}
```go
func (app *App) OnRoute(handler ...OnRouteHandler)
```
{% endcode %}

## OnName

OnName is a hook to execute user functions on each route naming. Also you can get route properties by **route** parameter.

**WARN:** OnName only works with naming routes, not groups.

{% code title="Signature" %}
```go
func (app *App) OnName(handler ...OnNameHandler)
```
{% endcode %}

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

	app.Hooks().OnName(func(r fiber.Route) error {
		fmt.Print("Name: " + r.Name + ", ")

		return nil
	})

	app.Hooks().OnName(func(r fiber.Route) error {
		fmt.Print("Method: " + r.Method + "\n")

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

{% endtabs %}

## OnGroup

OnGroup is a hook to execute user functions on each group registeration. Also you can get group properties by **group** parameter.

{% code title="Signature" %}
```go
func (app *App) OnGroup(handler ...OnGroupHandler)
```
{% endcode %}

## OnGroupName

OnGroupName is a hook to execute user functions on each group naming. Also you can get group properties by **group** parameter.

**WARN:** OnGroupName only works with naming groups, not routes.

{% code title="Signature" %}
```go
func (app *App) OnGroupName(handler ...OnGroupNameHandler)
```
{% endcode %}

## OnListen

OnListen is a hook to execute user functions on Listen, ListenTLS, Listener.

{% code title="Signature" %}
```go
func (app *App) OnListen(handler ...OnListenHandler)
```
{% endcode %}

## OnFork

OnFork is a hook to execute user functions on Fork.

{% code title="Signature" %}
```go
func (app *App) OnFork(handler ...OnForkHandler)
```
{% endcode %}

## OnShutdown

OnShutdown is a hook to execute user functions after Shutdown.

{% code title="Signature" %}
```go
func (app *App) OnShutdown(handler ...OnShutdownHandler)
```
{% endcode %}



