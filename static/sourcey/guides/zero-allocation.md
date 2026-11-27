# Zero allocation {#zero-allocation}


Fiber is optimized for **high-performance**, meaning values returned from **`fiber.Ctx` are not immutable by default and will be reused across requests**. As a rule of thumb, you **must** only use context values within the handler and **must not** keep any references. Once you return from the handler, any values obtained from the context will be reused in future requests.


## The rule in practice {#the-rule-in-practice}


```go
app.Get("/", func(c fiber.Ctx) error {
    name := c.Params("name") // valid: used inside the handler
    return c.SendString("Hello " + name)
})
```

Do **not** do this:

```go
var saved string

app.Get("/", func(c fiber.Ctx) error {
    saved = c.Params("name") // wrong: the underlying bytes are reused
    return c.SendString("ok")
})
```

The same applies to request headers, query values, and body bytes obtained from the context: copy them (for example with `utils.CopyString`) if they must outlive the handler.


## Where the numbers come from {#where-the-numbers-come-from}


Fiber's benchmark claims are measured by [TechEmpower](https://www.techempower.com/benchmarks/#section=data-r19&hw=ph&test=plaintext) (plaintext and JSON rounds). Full charts are on the project's benchmarks pages. The framework's speed comes from Fasthttp plus this reuse discipline — the zero-allocation property is a contract with the caller, not a detail callers can ignore.


## Performance checklist {#performance-checklist}


- Keep context values inside the handler; copy anything that escapes.
- Prefer `c.JSON` with a struct over building response strings by hand where the shape is fixed.
- Use the `Config` options (`App.Config`) to tune body limits, timeouts, and concurrency for the workload — see `Config` in the [Go API](https://docs.gofiber.io/sourcey/api.md).
