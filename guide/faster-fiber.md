# ⚡ Make Fiber Faster

## Custom JSON Encoder/Decoder
Since Fiber v2.32.0, we use **encoding/json** as default json library due to stability and producibility. However, the standard library is a bit slow compared to 3rd party libraries. If you're not happy with the performance of **encoding/json**, we recommend you to use these libraries:
- [goccy/go-json](https://github.com/goccy/go-json1)
- [bytedance/sonic](https://github.com/bytedance/sonic)
- [segmentio/encoding](https://github.com/segmentio/encoding)

{% code title="Example" %}
```go
package main

import "github.com/gofiber/fiber/v2"
import "github.com/goccy/go-json"

func main() {
	app := fiber.New(fiber.Config{
		JSONEncoder: json.Marshal,
		JSONDecoder: json.Unmarshal,
	})

	# ...
}
```
{% endcode %}

### References
- [Set custom JSON encoder for client](../api/client.md#jsonencoder)
- [Set custom JSON decoder for client](../api/client.md#jsondecoder)
- [Set custom JSON encoder for application](../api/fiber.md#config)
- [Set custom JSON decoder for application](../api/fiber.md#config)