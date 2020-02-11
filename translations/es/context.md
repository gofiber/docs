---
description: La estructura Ctx representa el contexto que contiene la solicitud y respuesta HTTP. Tiene métodos para la cadena de consulta de solicitud, parámetros, cuerpo, encabezados HTTP, etc.
---

# 🧠 Contexto

## Acepta

Comprueba si las **extensiones** o los **tipos de** **contenido** especificados son aceptables.

{% hint style = "info"%} Basado en el encabezado HTTP [Accept de](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) la solicitud. {% endhint%}

**Firma**

```go
c.Accepts(types ...string) string
```

**Ejemplo**

```go
// Accept: text/*, application/json

app.Get("/", func(c *fiber.Ctx) {
  c.Accepts("html")             // => "html"
  c.Accepts("text/html")        // => "text/html"
  c.Accepts("json", "text")     // => "json" "text"
  c.Accepts("application/json") // => "application/json"
  c.Accepts("image/png")        // => ""
  c.Accepts("png")              // => ""
})
```

## Acepta Charsets

Verifica si el **juego de caracteres** especificado es aceptable.

{% hint style = "info"%} Basado en el encabezado HTTP [Accept-Charset de](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Charset) la solicitud. {% endhint%}

**Firma**

```go
c.AcceptsCharsets(charsets ...string) string
```

**Ejemplo**

```go
// Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5

app.Get("/", func(c *fiber.Ctx) {
  c.AcceptsCharsets("utf-8")                // => "utf-8"
  c.AcceptsCharsets("utf-16", "iso-8859-1") // => "iso-8859-1"
  c.AcceptsCharsets("utf-16")               // => ""
})
```

## Acepta Codificaciones

Comprueba si la **codificación** especificada es aceptable.

{% hint style = "info"%} Basado en el encabezado HTTP [Accept-Encoding de](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) la solicitud. {% endhint%}

**Firma**

```go
c.AcceptsEncodings(encodings ...string) string
```

**Ejemplo**

```go
// Accept-Encoding: gzip, compress;q=0.2

app.Get("/", func(c *fiber.Ctx) {
  c.AcceptsEncodings("gzip")           // => "gzip"
  c.AcceptsEncodings("compress", "br") // => "compress"
  c.AcceptsEncodings("deflate")        // => ""
})
```

## Acepta idiomas

Comprueba si el **idioma** especificado es aceptable.

{% hint style = "info"%} Basado en el encabezado HTTP [Accept-Language de](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language) la solicitud. {% endhint%}

**Firma**

```go
c.AcceptsLanguages(languages ...string) string
```

**Ejemplo**

```go
// Accept-Language: en;q=0.8, nl, ru

app.Get("/", func(c *fiber.Ctx) {
  c.AcceptsLanguages("en")             // => "en"
  c.AcceptsLanguages("pt", "nl", "ru") // => "nl" "ru"
  c.AcceptsLanguages("fr")             // => ""
})
```

## Adjuntar

Agrega el **valor** especificado al campo de encabezado de respuesta HTTP.

{% hint style = "warning"%} Si el encabezado aún **no** está configurado, crea el encabezado con el valor especificado. {% endhint%}

**Firma**

```go
c.Append(field, values ...string)
```

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Append("Link", "http://google.com", "http://localhost")
  // => Link: http://localhost, http://google.com

  c.Append("Link", "Test")
  // => Link: http://localhost, http://google.com, Test
})
```

## Adjunto archivo

Establece el campo de encabezado [Content-Disposition de](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) respuesta HTTP en `attachment` .

**Firma**

```go
c.Attachment(file ...string)
```

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Attachment()
  // => Content-Disposition: attachment

  c.Attachment("./upload/images/logo.png")
  // => Content-Disposition: attachment; filename="logo.png"
  // => Content-Type: image/png
})
```

## BaseURL

Devuelve la URL base ( **protocolo** + **host** ) como una `string` .

**Firma**

```go
c.BaseURL() string
```

**Ejemplo**

```go
// GET https://example.com/page#chapter-1

app.Get("/", func(c *fiber.Ctx) {
  c.BaseURL() // => https://example.com
})
```

## BasicAuth

Devuelve el **nombre de usuario** y la **contraseña** proporcionados en el encabezado de [autorización](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) de la solicitud, si la solicitud utiliza [la autenticación básica HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) .

**Firma**

```go
c.BasicAuth() (user, pass string, ok bool)
```

**Ejemplo**

```go
// curl --user john:doe http://localhost:8080/auth

app.Get("/auth", func(c *fiber.Ctx) {
  user, pass, ok := c.BasicAuth()

  if !ok || user != "john" || pass != "doe" {
    c.Status(403).Send("Forbidden")
    return
  }

  c.Send("Welcome " + user)
})
```

## Cuerpo

Contiene el **cuerpo sin procesar** enviado en una solicitud **POST** .

**Firma**

```go
c.Body() string
c.Body(key string) string
c.Body(key []byte) string
c.Body(func(key, value string)) func(string, string)
```

**Ejemplo**

```go
// curl -X POST http://localhost:8080 -d user=john

app.Post("/", func(c *fiber.Ctx) {
  // Get raw body from POST request:
  c.Body()
  // => user=john

  // Get body value by specific key:
  c.Body("user")
  // => "john"

  // Loop trough all body params:
  c.Body(func(key string, val string) {
    fmt.Printl(key, val)
    // => "user" "john"
  })
})
```

## ClearCookie

Borra **todas** las cookies del cliente o una cookie específica por **nombre** ( *al configurar la fecha de caducidad en el pasado* ).

**Firma**

```go
c.ClearCookie()
c.ClearCookie(key string)
```

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  // Clears all cookies:
  c.ClearCookie()

  // Expire specific cookie by name:
  c.ClearCookie("user")

  // Expire multiple cookies by names:
  c.ClearCookie("token", "session", "track_id", "version")
})
```

## Galleta

Establece cookies con **nombre** y **valor** .

**Firma**

```go
c.Cookie(name, value string)
c.Cookie(name, value string, options *Cookie{})
```

**Estructura de cookies**

**No** se utilizarán {estilo indicio% =% de "alerta"} opción de **expirar,** si se ha establecido **MaxAge.** {% endhint%}

```go
&fiber.Cookie{
  Expire   int64  // Unix timestamp
  MaxAge   int    // Seconds
  Domain   string
  Path     string
  HttpOnly bool
  Secure   bool
  SameSite string
}
```

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Cookie("name", "john")
  // => Cookie: name=john;

  c.Cookie("name", "john", &fiber.Cookie{
    MaxAge:   60,
    Domain:   "example.com",
    Path:     "/",
    HttpOnly: true,
    Secure:   true,
    SameSite: "lax",
  })
  // => name=john; max-age=60; domain=example.com; path=/;
  //    HttpOnly; secure; SameSite=Lax

})
```

## Galletas

Obtiene cookies.

**Firma**

```go
c.Cookies() string
c.Cookies(key string) string
c.Cookies(key []byte) string
c.Cookies(func(key, value string)) string
```

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  // Get raw cookie header:
  c.Cookies()
  // => name=john;

  // Get cookie by key:
  c.Cookies("name")
  c.Cookies([]byte("name"))
  // => "john"

  // Show all cookies:
  c.Cookies(func(key, val string) {
    fmt.Println(key, val)
    // => "name", "john"
  })
})
```

## Descargar

Transfiere el archivo desde la ruta como un `attachment` .

Por lo general, los navegadores solicitarán al usuario la descarga. Por defecto, el encabezado [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) `filename=` parámetro es la ruta ( *esto generalmente aparece en el diálogo del navegador* ).

Anule este valor predeterminado con el parámetro de **nombre de archivo** .

**Firma**

```go
c.Download(path, filename ...string)
```

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Download("./files/report-12345.pdf")
  // => Download report-12345.pdf

  c.Download("./files/report-12345.pdf", "report.pdf")
  // => Download report.pdf
})
```

## Final

{% hint style = "danger"%} Planificado para **Fiber** v2. {% endhint%}

## Fasthttp

Aún puede **acceder** y utilizar todos los métodos y propiedades de **Fasthttp** .

**Firma**

{% hint style = "info"%} Lea la [documentación de Fasthttp](https://pkg.go.dev/github.com/valyala/fasthttp?tab=doc) para obtener más información. {% endhint%}

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Fasthttp.Request.Header.Method()
  // => []byte("GET")

  c.Fasthttp.Response.Write([]byte("Hello, World!"))
  // => "Hello, World!"
})
```

## Formato

Realiza la negociación de contenido en el encabezado [Aceptar](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTP. Utiliza [Acepta](context.md#accepts) para seleccionar un formato adecuado.

{% hint style = "info"%} Si el encabezado **no** está especificado o no **hay** un formato adecuado, se usa **text / plain** . {% endhint%}

**Firma**

```go
c.Format(body interface{})
```

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  // Accept: text/plain
  c.Format("Hello, World!")
  // => Hello, World!

  // Accept: text/html
  c.Format("Hello, World!")
  // => <p>Hello, World!</p

  // Accept: application/json
  c.Format("Hello, World!")
  // => "Hello, World!"
})
```

## FormFile

Los archivos MultipartForm se pueden recuperar por nombre, se devuelve el **primer** archivo de la clave dada.

**Firma**

```go
c.FormFile(name string) (*multipart.FileHeader, error)
```

**Ejemplo**

```go
app.Post("/", func(c *fiber.Ctx) {
  // Get first file from form field "document":
  file, err := c.FormFile("document")

  // Check for errors:
  if err == nil {
    // Save file to root directory:
    c.SaveFile(file, fmt.Sprintf("./%s", file.Filename))
  }
})
```

## FormValue

Los valores de MultipartForm se pueden recuperar por nombre, se devuelve el **primer** valor de la clave dada.

**Firma**

```go
c.FormValue(name string) string
```

**Ejemplo**

```go
app.Post("/", func(c *fiber.Ctx) {
  // Get first value from form field "name":
  c.FormValue("name")
  // => "john" or "", if not exist
})
```

## Fresco

{% hint style = "danger"%} Planificado para **Fiber** v2. {% endhint%}

## Obtener

Devuelve el encabezado de solicitud HTTP especificado por campo. El partido no distingue entre mayúsculas y minúsculas.

**Firma**

```go
c.Get(field string) string
```

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Get("Content-Type") // => "text/plain"
  c.Get("content-type") // => "text/plain"
  c.Get("something")    // => ""
})
```

## Encabezados

{% hint style = "danger"%} Planificado para **Fiber** v2. {% endhint%}

## Nombre de host

Contiene el nombre de host derivado del encabezado HTTP del [host](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host) .

**Firma**

```go
c.Hostname() string
```

**Ejemplo**

```go
// GET http://google.com/search

app.Get("/", func(c *fiber.Ctx) {
  c.Hostname() // => "google.com"
})
```

## IP

Devuelve la dirección IP remota de la solicitud.

**Firma**

```go
c.IP() string
```

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.IP() // => "127.0.0.1"
})
```

## IPs

Devuelve una matriz de direcciones IP especificadas en el encabezado de solicitud [X-Fordered-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For) .

**Firma**

```go
c.IPs() []string
```

**Ejemplo**

```go
// X-Forwarded-For: proxy1, 127.0.0.1", proxy3

app.Get("/", func(c *fiber.Ctx) {
  c.IPs() // => ["proxy1", "127.0.0.1", "proxy3"]
})
```

## Es

Devuelve el **tipo de contenido** coincidente, si el campo de encabezado HTTP [Content-Type de](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) la solicitud entrante coincide con el [tipo MIME](https://developer.mozilla.org/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types) especificado por el parámetro type.

{% hint style = "info"%} Si la solicitud **no** tiene cuerpo, devuelve **false** . {% endhint%}

**Firma**

```go
c.Is(t string) bool
```

**Ejemplo**

```go
// Content-Type: text/html; charset=utf-8

app.Get("/", func(c *fiber.Ctx) {
  c.Is("html")  // => true
  c.Is(".html") // => true
  c.Is("json")  // => false
})
```

## JSON

Convierte cualquier **interfaz** o **cadena** a JSON usando [Jsoniter](https://github.com/json-iterator/go) .

El método {% hint style = "info"%} también establece el encabezado de contenido en **application / json** . {% endhint%}

**Firma**

```go
c.JSON(v interface{}) error
```

**Ejemplo**

```go
type SomeStruct struct {
  Name string
  Age  uint8
}

app.Get("/json", func(c *fiber.Ctx) {
  // Create data struct:
  data := SomeStruct{
    Name: "Grame",
    Age:  20,
  }

  c.JSON(data)
  // => "{"Name": "Grame", "Age": 20}"

  c.JSON("Hello, World!")
  // => "Hello, World!"
})
```

## JSONBytes

Método JSON sin procesar.

{% hint style = "success"%} Use esto, si **no necesita la** serialización JSON, recomendado cuando trabaje con entradas **sin** formato. {% endhint%}

**Firma**

```go
c.JSONBytes(b []byte) error
```

**Ejemplo**

```go
app.Get("/json", func(c *fiber.Ctx) {
  c.JSONBytes([]byte(`{"Name": "Grame", "Age": 20}`))
  // => "{"Name": "Grame", "Age": 20}"
})
```

## JSONString

Método JSON sin procesar.

{% hint style = "success"%} Use esto, si **no necesita la** serialización JSON, recomendado cuando trabaje con entradas **sin** formato. {% endhint%}

**Firma**

```go
c.JSONString(s string) error
```

**Ejemplo**

```go
app.Get("/json", func(c *fiber.Ctx) {
  c.JSONString(`{"Name": "Grame", "Age": 20}`)
  // => "{"Name": "Grame", "Age": 20}"
})
```

## JSONP

Envía una respuesta JSON con soporte JSONP. Este método es idéntico a [JSON](context.md#json) , excepto que opta por el soporte de devolución de llamada JSONP. Por defecto, el nombre de devolución de llamada JSONP es simplemente devolución de llamada.

Anule esto pasando una **cadena con nombre** en el método.

**Firma**

```go
c.JSONP(v interface{}, callback ...string) error
```

**Ejemplo**

```go
type SomeStruct struct {
  name string
  age  uint8
}

app.Get("/", func(c *fiber.Ctx) {
  // Create data struct:
  data := SomeStruct{
    name: "Grame",
    age:  20,
  }

  c.JSONP(data)
  // => callback({"name": "Grame", "age": 20})

  c.JSONP(data, "customFunc")
  // => customFunc({"name": "Grame", "age": 20})
})
```

## Enlaces

Une los enlaces seguidos por la propiedad para completar el campo de encabezado HTTP de [enlace de](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Link) la respuesta.

**Firma**

```go
c.Links(link ...string)
```

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Link(
    "http://api.example.com/users?page=2", "next",
    "http://api.example.com/users?page=5", "last",
  )
  // Link: <http://api.example.com/users?page=2>; rel="next",
  //       <http://api.example.com/users?page=5>; rel="last"
})
```

## Locales

Método que almacena las variables de cadena dentro del alcance de la solicitud y, por lo tanto, solo está disponible para las rutas que coinciden con la solicitud.

{% hint style = "success"%} Esto es útil si desea pasar algunos **valores específicos** al siguiente middleware. {% endhint%}

**Firma**

```go
c.Locals(key string, value ...interface{}) interface{}
```

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Locals("user", "admin")
  c.Next()
})

app.Get("/admin", func(c *fiber.Ctx) {
  if c.Locals("user") == "admin" {
    c.Status(200).Send("Welcome, admin!")
  } else {
    c.SendStatus(403)
    // => 403 Forbidden
  }
})
```

{% hint style = "info"%} Puedes poner cualquier tipo dentro de los **locales** , pero no olvides volver a convertirlo cuando estés usando la variable. {% endhint%}

```go
type SomeStruct struct {
  Message string `json:"message"`
}

app.Get("/", func(c *fiber.Ctx) {
  c.Locals("user", SomeStruct{"Hello, World!"})
  // => user: {"message":"Hello, World!"}

  c.Next()
})

app.Get("/", func(c *fiber.Ctx) {
  if val, ok := c.Locals("user").(SomeStruct); ok {
    fmt.Println(val.Message)
    // => "Hello, World!"
  }
})
```

## Ubicación

Establece el encabezado HTTP de [ubicación de](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Location) respuesta al parámetro de ruta especificado.

**Firma**

```go
c.Location(path string)
```

**Ejemplo**

```go
app.Post("/", func(c *fiber.Ctx) {
  c.Location("http://example.com")
  c.Location("/foo/bar")
})
```

## Método

Contiene una cadena correspondiente al método HTTP de la solicitud: GET, POST, PUT, etc.

**Firma**

```go
c.Method() string
```

**Ejemplo**

```go
app.Post("/", func(c *fiber.Ctx) {
  c.Method() // => "POST"
})
```

## MultipartForm

Para acceder a las entradas de formulario multiparte, puede analizar el binario con `MultipartForm()` . Esto devuelve una `map[string][]string` , por lo que, dada una clave, el valor será un segmento de cadena.

**Firma**

```go
c.MultipartForm() (*multipart.Form, error)
```

**Ejemplo**

```go
app.Post("/", func(c *fiber.Ctx) {
  // Parse the multipart form:
  if form, err := c.MultipartForm(); err == nil {
    // => *multipart.Form

    if token := form.Value["token"]; len(token) > 0 {
      // Get key value:
      fmt.Println(token[0])
    }

    // Get all files from "documents" key:
    files := form.File["documents"]
    // => []*multipart.FileHeader

    // Loop trough files:
    for _, file := range files {
      fmt.Println(file.Filename, file.Size, file.Header["Content-Type"][0])
      // => "tutorial.pdf" 360641 "application/pdf"

      // Save the files to disk:
      c.SaveFile(file, fmt.Sprintf("./%s", file.Filename))
    }
  }
})
```

## próximo

Cuando se llama a **Next** , ejecuta el siguiente método en la pila que coincide con la ruta actual.

**Firma**

```go
c.Next()
```

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  fmt.Printl("1st route!")
  c.Next()
})

app.Get("*", func(c *fiber.Ctx) {
  fmt.Printl("2nd route!")
  c.Next()
})

app.Get("/", func(c *fiber.Ctx) {
  fmt.Printl("3rd route!")
  c.Send("Hello, World!")
})
```

## OriginalURL

Contiene la URL de solicitud original.

**Firma**

```go
c.OriginalURL() string
```

**Ejemplo**

```go
// GET http://example.com/search?q=something

app.Get("/", func(c *fiber.Ctx) {
  c.OriginalURL() // => "/search?q=something"
})
```

## Params

El método se puede usar para obtener los parámetros de ruta.

{% hint style = "info"%} El valor predeterminado es cadena vacía ( `""` ), si el parámetro **no** existe. {% endhint%}

**Firma**

```go
c.Params(param string) string
```

**Ejemplo**

```go
// GET http://example.com/user/tj

app.Get("/user/:name", func(c *fiber.Ctx) {
  c.Params("name") // => "tj"
})
```

## Camino

Contiene la parte de la ruta de la URL de solicitud.

**Firma**

```go
c.Path() string
```

**Ejemplo**

```go
// GET http://example.com/users?sort=desc

app.Get("/users", func(c *fiber.Ctx) {
  c.Path() // => "/users"
})
```

## Protocolo

Contiene la cadena de protocolo de solicitud: `http` o `https` para solicitudes **TLS** .

**Firma**

```go
c.Protocol() string
```

**Ejemplo**

```go
// GET http://example.com

app.Get("/", func(c *fiber.Ctx) {
  c.Protocol() // => "http"
})
```

## Consulta

Esta propiedad es un objeto que contiene una propiedad para cada parámetro de cadena de consulta en la ruta.

{% hint style = "info"%} Si no hay **una** cadena de consulta, devuelve una **cadena vacía** . {% endhint%}

**Firma**

```go
c.Query(parameter string) string
```

**Ejemplo**

```go
// GET http://example.com/shoes?order=desc&brand=nike

app.Get("/", func(c *fiber.Ctx) {
  c.Query("order") // => "desc"
  c.Query("brand") // => "nike"
})
```

## Rango

{% hint style = "danger"%} Planificado para **Fiber** v2. {% endhint%}

## Redirigir

Redirige a la URL derivada de la ruta especificada, con el estado especificado, un entero positivo que corresponde a un código de estado HTTP.

{% hint style = "info"%} Si **no se** especifica, el estado predeterminado es **302 Encontrado** . {% endhint%}

**Firma**

```go
c.Redirect(path string, status ...int)
```

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Redirect("/foo/bar")
  c.Redirect("../login")
  c.Redirect("http://example.com")
  c.Redirect("http://example.com", 301)
})
```

## Hacer

{% hint style = "danger"%} Planificado para **Fiber** v2. {% endhint%}

## Ruta

Contiene la estructura de [ruta](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc#Route) actualmente coincidente.

{% hint style = "warning"%} Use este método **solo** para la depuración. {% endhint%}

**Firma**

```go
c.Route() *Route
```

**Ejemplo**

```go
// http://localhost:8080/hello

app.Get("/hello", func(c *fiber.Ctx) {
  c.Route()
  // => {GET /hello false false <nil> [] 0x7b4ab0}
})

app.Post("/:api?", func(c *fiber.Ctx) {
  c.Route()
  // => {POST / false false ^(?:/([^/]+?))?/?$ [api] 0x7b49e0}
})
```

## Guardar el archivo

El método se usa para guardar **cualquier** archivo multiparte en el disco.

**Firma**

```go
c.SaveFile(fh *multipart.FileHeader, path string)
```

**Ejemplo**

{% hint style = "success"%} Puede ver un ejemplo de trabajo en el método [MultipartForm](https://fiber.wiki/context#multipartform) . {% endhint%}

## Seguro

Una propiedad booleana, eso es `true` , si se establece una conexión **TLS** .

**Firma**

```go
c.Secure() bool
```

**Ejemplo**

```go
// Secure() method is equivalent to:
c.Protocol() == "https"
```

## Enviar

Envía la respuesta HTTP. El cuerpo de **envío** puede ser de cualquier tipo.

{% hint style = "warning"%} El método **no se** agrega como el método [Write](https://fiber.wiki/context#write) . {% endhint%}

**Firma**

```go
c.Send(body ...interface{})
```

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")         // => "Hello, World!"
  c.Send([]byte("Hello, World!")) // => "Hello, World!"
  c.Send(123)                     // => 123
})
```

## SendBytes

Método crudo

{% hint style = "success"%} Use esto, si **no necesita la** aserción de tipo, recomendado para **un** rendimiento **más rápido** . {% endhint%}

**Firma**

```go
c.SendBytes(b []byte)
```

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.SendByte([]byte("Hello, World!"))
  // => "Hello, World!"
})
```

## SendString

Método crudo

{% hint style = "success"%} Use esto, si **no necesita la** aserción de tipo, recomendado para **un** rendimiento **más rápido** . {% endhint%}

**Firma**

```go
c.SendString(s string)
```

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.SendString("Hello, World!")
  // => "Hello, World!"
})
```

## Enviar archivo

Transfiere el archivo desde la ruta dada. Establece el campo de encabezado HTTP de respuesta de [tipo de contenido](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) en función de la extensión de **nombres de archivo** .

{% hint style = "info"%} El método usa **gzipping** de forma predeterminada, **configúrelo** en **falso** para deshabilitarlo. {% endhint%}

**Firma**

```go
c.SendFile(path string, gzip ...bool)
```

**Ejemplo**

```go
app.Get("/not-found", func(c *fiber.Ctx) {
  c.SendFile("./public/404.html")

  // Disable gzipping:
  c.SendFile("./static/index.html", false)
})
```

## SendStatus

Establece el código de estado y el mensaje de estado correcto en el cuerpo, si el cuerpo de la respuesta está **vacío** .

{% hint style = "success"%} Puede encontrar todos los códigos de estado y mensajes usados [aquí](https://github.com/gofiber/fiber/blob/dffab20bcdf4f3597d2c74633a7705a517d2c8c2/utils.go#L183-L244) . {% endhint%}

**Firma**

```go
c.SendStatus(status int)
```

**Ejemplo**

```go
app.Get("/not-found", func(c *fiber.Ctx) {
  c.SendStatus(415)
  // 415 "Unsupported Media Type"

  c.Send("Hello, World!")
  c.SendStatus(415)
  // 415 "Hello, World!"
})
```

## Conjunto

Establece el campo del encabezado HTTP de la respuesta en `value` .

**Firma**

```go
c.Set(field, value string)
```

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Set("Content-Type", "text/plain")
  // => "Content-type: text/plain"
})
```

## Cookies firmadas

{% hint style = "danger"%} Planificado para **Fiber** v2. {% endhint%}

## Duro

{% hint style = "danger"%} Planificado para **Fiber** v2. {% endhint%}

## Estado

Establece el estado HTTP para la respuesta.

{% hint style = "info"%} El método es **capaz de encadenar** . {% endhint%}

**Firma**

```go
c.Status(status int)
```

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Status(200)
  c.Status(400).Send("Bad Request")
  c.Status(404).SendFile("./public/gopher.png")
})
```

## Subdominios

Una matriz de subdominios en el nombre de dominio de la solicitud.

El desplazamiento del subdominio de la propiedad de la aplicación, que por defecto es `2` , se usa para determinar el comienzo de los segmentos del subdominio.

**Firma**

```go
c.Subdomains(offset ...int) []string
```

**Ejemplo**

```go
// Host: "tobi.ferrets.example.com"

app.Get("/", func(c *fiber.Ctx) {
  c.Subdomains()  // => ["ferrets", "tobi"]
  c.Subdomains(1) // => ["tobi"]
})
```

## Tipo

Establece el encabezado HTTP [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) en el tipo MIME que se detalla [aquí](https://github.com/nginx/nginx/blob/master/conf/mime.types) especificado por la **extensión del** archivo.

**Firma**

```go
c.Type(t string) string
```

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Type(".html") // => "text/html"
  c.Type("html")  // => "text/html"
  c.Type("json")  // => "application/json"
  c.Type("png")   // => "image/png"
})
```

## Variar

Agrega el campo de encabezado dado al encabezado de respuesta [Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary) . Esto agregará el encabezado, si aún no está en la lista, de lo contrario lo deja en la lista en la ubicación actual.

{% hint style = "info"%} Se **permiten** varios campos. {% endhint%}

**Firma**

```go
c.Vary(field ...string)
```

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Vary("Origin")     // => Vary: Origin
  c.Vary("User-Agent") // => Vary: Origin, User-Agent

  // Checks for duplicates:
  c.Vary("Origin")
  // => Vary: Origin, User-Agent

  c.Vary("Accept-Encoding", "Accept")
  // => Vary: Origin, User-Agent, Accept-Encoding, Accept
})
```

## Escribir

Agrega **cualquier** entrada a la respuesta del cuerpo HTTP.

**Firma**

```go
c.Write(body ...interface{})
```

**Ejemplo**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Write("Hello, ")         // => "Hello, "
  c.Write([]byte("World! ")) // => "Hello, World! "
  c.Write(123)               // => "Hello, World! 123"
})
```

## XHR

Una propiedad booleana, es `true` , si el campo de encabezado [X-Requested-With de](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) la solicitud es [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) , lo que indica que la solicitud fue emitida por una biblioteca cliente (como [jQuery](https://api.jquery.com/jQuery.ajax/) ).

**Firma**

```go
c.XHR() bool
```

**Ejemplo**

```go
// X-Requested-With: XMLHttpRequest

app.Get("/", func(c *fiber.Ctx) {
  c.XHR() // => true
})
```

## XML

XML establece el encabezado en `application/xml` y desarma su interfaz a XML.

**Firma**

```go
c.XML(xml interface{}) error
```

**Ejemplo**

```go
type SomeStruct struct {
    Name  string `xml:"name"`
    Stars int    `xml:"stars"`
}

app.Get("/", func(c *fiber.Ctx) {
  // Create data struct:
  data := SomeStruct{
    "John",
    50,
  }

  c.XML(data)
  // => Content-Type: application/xml
  // => <some-struct><name>John</name><stars>50</stars></some-struct>
})
```
