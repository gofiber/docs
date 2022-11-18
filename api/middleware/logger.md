# Logger

Logger middleware for [Fiber](https://github.com/gofiber/fiber) that logs HTTP request/response details.

## Table of Contents

* [Signatures](logger.md#signatures)
* [Examples](logger.md#examples)
* [Config](logger.md#config)
* [Default Config](logger.md#default-config)
* [Constants](logger.md#constants)

## Signatures

```go
func New(config ...Config) fiber.Handler
```

## Examples

First ensure the appropriate packages are imported

```go
import (
    "github.com/gofiber/fiber/v2"
    "github.com/gofiber/fiber/v2/middleware/logger"
)
```

### **Initialization / Default Config**

```go
// Default middleware config
app.Use(logger.New())
```

### **Logging remote IP and Port**

```go
app.Use(logger.New(logger.Config{
        Format:     "[${ip}]:${port} ${status} - ${method} ${path}\n",
}))
```

### Logging Request ID
```go
app.Use(requestid.New())

app.Use(logger.New(logger.Config{
    // For more options, see the Config section
  Format: "${pid} ${locals:requestid} ${status} - ${method} ${path}\n",
}))
```

### **Changing TimeZone & TimeFormat**

```go
app.Use(logger.New(logger.Config{
    Format:     "${pid} ${status} - ${method} ${path}\n",
    TimeFormat: "02-Jan-2006",
    TimeZone:   "America/New_York",
}))
```

### **Custom File Writer**

```go
file, err := os.OpenFile("./123.log", os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
if err != nil {
    log.Fatalf("error opening file: %v", err)
}
defer file.Close()

app.Use(logger.New(logger.Config{
    Output: file,
}))
```

### **Callback after log is written**

```go
package main

import "github.com/gofiber/fiber/v2"
import "log"

func main() {
  app := fiber.New()

  app.Use(logger.New(logger.Config{
		TimeFormat: time.RFC3339Nano,
		TimeZone:   "Asia/Shanghai",
		Done: func(c *fiber.Ctx, logString []byte) {
			if c.Response().StatusCode() != fiber.StatusOK {
				reporter.SendToSlack(logString) 
			}
		},
	}))

  log.Fatal(app.Listen(":3000"))
}
```

## Config

```go
// Config defines the config for middleware.
type Config struct {
    // Next defines a function to skip this middleware when returned true.
    //
    // Optional. Default: nil
    Next func(c *fiber.Ctx) bool
    
    // Done is a function that is called after the log string for a request is written to Output,
    // and pass the log string as parameter.
    //
    // Optional. Default: nil
    Done func(c *fiber.Ctx, logString []byte)

    // Format defines the logging tags
    //
    // Optional. Default: [${time}] ${status} - ${latency} ${method} ${path}\n
    Format string

    // TimeFormat https://programming.guide/go/format-parse-string-time-date-example.html
    //
    // Optional. Default: 15:04:05
    TimeFormat string

    // TimeZone can be specified, such as "UTC" and "America/New_York" and "Asia/Chongqing", etc
    //
    // Optional. Default: "Local"
    TimeZone string

    // TimeInterval is the delay before the timestamp is updated
    //
    // Optional. Default: 500 * time.Millisecond
    TimeInterval time.Duration

    // Output is a writter where logs are written
    //
    // Default: os.Stdout
    Output io.Writer
}
```

## Default Config

```go
var ConfigDefault = Config{
    Next:         nil,
    Done:         nil,
    Format:       "[${time}] ${status} - ${latency} ${method} ${path}\n",
    TimeFormat:   "15:04:05",
    TimeZone:     "Local",
    TimeInterval: 500 * time.Millisecond,
    Output:       os.Stdout,
}
```

## Constants

```go
// Logger variables
const (
	TagPid               = "pid"
	TagTime              = "time"
	TagReferer           = "referer"
	TagProtocol          = "protocol"
	TagPort              = "port"
	TagIP                = "ip"
	TagIPs               = "ips"
	TagHost              = "host"
	TagMethod            = "method"
	TagPath              = "path"
	TagURL               = "url"
	TagUA                = "ua"
	TagLatency           = "latency"
	TagStatus            = "status"
	TagResBody           = "resBody"
	TagReqHeaders        = "reqHeaders"
	TagQueryStringParams = "queryParams"
	TagBody              = "body"
	TagBytesSent         = "bytesSent"
	TagBytesReceived     = "bytesReceived"
	TagRoute             = "route"
	TagError             = "error"
	// DEPRECATED: Use TagReqHeader instead
	TagHeader     = "header:"
	TagReqHeader  = "reqHeader:"
	TagRespHeader = "respHeader:"
	TagLocals     = "locals:"
	TagQuery      = "query:"
	TagForm       = "form:"
	TagCookie     = "cookie:"
	TagBlack      = "black"
	TagRed        = "red"
	TagGreen      = "green"
	TagYellow     = "yellow"
	TagBlue       = "blue"
	TagMagenta    = "magenta"
	TagCyan       = "cyan"
	TagWhite      = "white"
	TagReset      = "reset"
)
```
