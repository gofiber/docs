# Compress

Compression middleware for Fiber that supports gzip, deflate and brotli compression depending on the Accept-Encoding header.

## Getting Started

Import the compress package that is shipped with the Fiber web framework

```go
import (
  "github.com/gofiber/fiber/v2"
  "github.com/gofiber/fiber/v2/middleware/compress"
)
```

You can pass an optional Config struct to create a new middleware handler.

{% code title="signature" %}
```go
func New(config ...Config) fiber.Handler
```
{% endcode %}

The following configurations are possible

```go
type Config struct {
	// Next defines a function to skip this middleware when returned true.
	//
	// Optional. Default: nil
	Next func(c *fiber.Ctx) bool

	// CompressLevel determines the compression algoritm
	//
	// Optional. Default: LevelDefault
	// LevelDisabled:         -1
	// LevelDefault:          0
	// LevelBestSpeed:        1
	// LevelBestCompression:  2
	Level int
}
```

{% code title="example" %}
```go
// Default compression config
app.Use(compress.New())

// Provide a custom compression level
app.Use(compress.New(compress.Config{
    Level: compress.LevelBestSpeed, // 1
}))

// Skip compression for specific routes
app.Use(compress.New(compress.Config{
  Next:  func(c *fiber.Ctx) bool {
    return c.Path() == "/dont_compress"
  },
  Level: compress.LevelBestSpeed, // 1
}))
```
{% endcode %}



