# Monitor

Monitor middleware for [Fiber](https://github.com/gofiber/fiber) that reports server metrics, inspired by [express-status-monitor](https://github.com/RafalWilinski/express-status-monitor)

:warning: **Warning:** Monitor is still in beta, API might change in the future!

![](https://i.imgur.com/4NfRCDm.gif)

## Table of Contents

* [Signatures](monitor.md#signatures)
* [Examples](monitor.md#examples)
* [Config](monitor.md#config)
* [Default Config](monitor.md#default-config)


### Signatures
```go
func New() fiber.Handler
```

### Examples
Import the middleware package and assign it to a route.
```go
package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/monitor"
)

func main() {
	app := fiber.New()

	app.Get("/metrics", monitor.New(monitor.Config{}))

	log.Fatal(app.Listen(":3000"))
}
```
You can also access the API endpoint with
`curl -X GET -H "Accept: application/json" http://localhost:3000/metrics` which returns:
```json
{
	"pid": {
		"cpu":0.4568381746582226,
		"ram":20516864,
		"conns":3
	},
	"os": {
		"cpu":8.759124087593099,
		"ram":3997155328,
		"conns":44,
		"total_ram":8245489664,
		"load_avg":0.51
	}
}
```

## Config

```go
// Config defines the config for middleware.
type Config struct {
	// To disable serving HTML, you can make true this option.
	//
	// Optional. Default: false
	APIOnly bool

	// Next defines a function to skip this middleware when returned true.
	//
	// Optional. Default: nil
	Next func(c *fiber.Ctx) bool
}
```

## Default Config

```go
var ConfigDefault = Config{
	APIOnly: false,
	Next:    nil,
}
```
