---
description: Ctx構造体は、HTTP要求と応答を保持するコンテキストを表します。要求クエリ文字列、パラメーター、ボディ、HTTPヘッダーなどのメソッドがあります。
---

# 🧠コンテキスト

## 受け入れる

指定された**拡張子**または**コンテンツ** **タイプ**が受け入れ可能かどうかを確認します。

{％hint style = "info"％}要求の[Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTPヘッダーに基づきます。 {％endhint％}

**署名**

```go
c.Accepts(types ...string) string
```

**例**

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

## 受け入れます

指定された**文字セット**が受け入れ可能かどうかをチェックします。

{％hint style = "info"％}リクエストの[Accept-Charset](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Charset) HTTPヘッダーに基づきます。 {％endhint％}

**署名**

```go
c.AcceptsCharsets(charsets ...string) string
```

**例**

```go
// Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5

app.Get("/", func(c *fiber.Ctx) {
  c.AcceptsCharsets("utf-8")                // => "utf-8"
  c.AcceptsCharsets("utf-16", "iso-8859-1") // => "iso-8859-1"
  c.AcceptsCharsets("utf-16")               // => ""
})
```

## AcceptsEncodings

指定された**エンコード**が受け入れ可能かどうかを確認します。

{％hint style = "info"％}要求の[Accept-Encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) HTTPヘッダーに基づきます。 {％endhint％}

**署名**

```go
c.AcceptsEncodings(encodings ...string) string
```

**例**

```go
// Accept-Encoding: gzip, compress;q=0.2

app.Get("/", func(c *fiber.Ctx) {
  c.AcceptsEncodings("gzip")           // => "gzip"
  c.AcceptsEncodings("compress", "br") // => "compress"
  c.AcceptsEncodings("deflate")        // => ""
})
```

## 言語を受け入れる

指定された**言語**が受け入れ可能かどうかを確認します。

{％hint style = "info"％}リクエストの[Accept-Language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language) HTTPヘッダーに基づきます。 {％endhint％}

**署名**

```go
c.AcceptsLanguages(languages ...string) string
```

**例**

```go
// Accept-Language: en;q=0.8, nl, ru

app.Get("/", func(c *fiber.Ctx) {
  c.AcceptsLanguages("en")             // => "en"
  c.AcceptsLanguages("pt", "nl", "ru") // => "nl" "ru"
  c.AcceptsLanguages("fr")             // => ""
})
```

## 追記

指定された**値**をHTTP応答ヘッダーフィールドに追加します。

{％hint style = "warning"％}ヘッダーがまだ設定されて**いない**場合、指定された値でヘッダーを作成します。 {％endhint％}

**署名**

```go
c.Append(field, values ...string)
```

**例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Append("Link", "http://google.com", "http://localhost")
  // => Link: http://localhost, http://google.com

  c.Append("Link", "Test")
  // => Link: http://localhost, http://google.com, Test
})
```

## 添付ファイル

HTTP応答の[Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)ヘッダーフィールドを`attachment`設定します。

**署名**

```go
c.Attachment(file ...string)
```

**例**

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

ベースURL（ **プロトコル** + **ホスト** ）を`string`として返します。

**署名**

```go
c.BaseURL() string
```

**例**

```go
// GET https://example.com/page#chapter-1

app.Get("/", func(c *fiber.Ctx) {
  c.BaseURL() // => https://example.com
})
```

## BasicAuth

リクエストが[HTTP基本認証を](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)使用[する](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)場合、リクエストの[Authorization](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization)ヘッダーで提供される**ユーザー名**と**パスワードを**返します。

**署名**

```go
c.BasicAuth() (user, pass string, ok bool)
```

**例**

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

## 体

**POST**リクエストで送信された**未加工の本文**が含まれます。

**署名**

```go
c.Body() string
c.Body(key string) string
c.Body(key []byte) string
c.Body(func(key, value string)) func(string, string)
```

**例**

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

**すべての**クライアントCookieまたは特定のCookieを**名前で**クリア**し**ます（ *過去の有効期限を設定することにより* ）。

**署名**

```go
c.ClearCookie()
c.ClearCookie(key string)
```

**例**

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

## クッキー

Cookieに**名前**と**値を**設定し**ます** 。

**署名**

```go
c.Cookie(name, value string)
c.Cookie(name, value string, options *Cookie{})
```

**クッキー構造**

{％hint style = "warning"％} **MaxAge**が設定されている場合、 **有効期限**オプションは使用され**ません** 。 {％endhint％}

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

**例**

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

## クッキー

クッキーを取得します。

**署名**

```go
c.Cookies() string
c.Cookies(key string) string
c.Cookies(key []byte) string
c.Cookies(func(key, value string)) string
```

**例**

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

## ダウンロード

パスからファイルを`attachment`として転送します。

通常、ブラウザはユーザーにダウンロードを促します。デフォルトでは、 [Content-Disposition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)ヘッダーの`filename=`パラメーターはpathです（ *これは通常、ブラウザーダイアログに表示されます* ）。

**filename**パラメータでこのデフォルトをオーバーライドします。

**署名**

```go
c.Download(path, filename ...string)
```

**例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Download("./files/report-12345.pdf")
  // => Download report-12345.pdf

  c.Download("./files/report-12345.pdf", "report.pdf")
  // => Download report.pdf
})
```

## 終わり

{％hint style = "danger"％} **Fiber** v2で計画されています。 {％endhint％}

## Fasthttp

すべての**Fasthttp**メソッドおよびプロパティに引き続き**アクセス**して使用できます。

**署名**

{％hint style = "info"％}詳細については、 [Fasthttpのドキュメント](https://pkg.go.dev/github.com/valyala/fasthttp?tab=doc)をご覧ください。 {％endhint％}

**例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Fasthttp.Request.Header.Method()
  // => []byte("GET")

  c.Fasthttp.Response.Write([]byte("Hello, World!"))
  // => "Hello, World!"
})
```

## フォーマット

[Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTPヘッダーでコンテンツネゴシエーションを実行します。 [Accepts](context.md#accepts)を使用して適切な形式を選択します。

{％hint style = "info"％}ヘッダーが指定されて**いない**か**、**適切な形式が**ない**場合、 **text / plain**が使用されます。 {％endhint％}

**署名**

```go
c.Format(body interface{})
```

**例**

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

MultipartFormファイルは名前で取得でき、指定されたキーの**最初の**ファイルが返されます。

**署名**

```go
c.FormFile(name string) (*multipart.FileHeader, error)
```

**例**

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

MultipartFormの値は名前で取得でき、指定されたキーの**最初の**値が返されます。

**署名**

```go
c.FormValue(name string) string
```

**例**

```go
app.Post("/", func(c *fiber.Ctx) {
  // Get first value from form field "name":
  c.FormValue("name")
  // => "john" or "", if not exist
})
```

## 新鮮な

{％hint style = "danger"％} **Fiber** v2で計画されています。 {％endhint％}

## 取得する

フィールドで指定されたHTTP要求ヘッダーを返します。一致は大文字と小文字を区別しません。

**署名**

```go
c.Get(field string) string
```

**例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Get("Content-Type") // => "text/plain"
  c.Get("content-type") // => "text/plain"
  c.Get("something")    // => ""
})
```

## 送信済みヘッダー

{％hint style = "danger"％} **Fiber** v2で計画されています。 {％endhint％}

## ホスト名

[Host](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host) HTTPヘッダーから派生した[ホスト](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host)名が含まれます。

**署名**

```go
c.Hostname() string
```

**例**

```go
// GET http://google.com/search

app.Get("/", func(c *fiber.Ctx) {
  c.Hostname() // => "google.com"
})
```

## IP

要求のリモートIPアドレスを返します。

**署名**

```go
c.IP() string
```

**例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.IP() // => "127.0.0.1"
})
```

## IP

[X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)リクエストヘッダーで指定されたIPアドレスの配列を返します。

**署名**

```go
c.IPs() []string
```

**例**

```go
// X-Forwarded-For: proxy1, 127.0.0.1", proxy3

app.Get("/", func(c *fiber.Ctx) {
  c.IPs() // => ["proxy1", "127.0.0.1", "proxy3"]
})
```

## は

着信要求の[Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) HTTPヘッダーフィールドがtypeパラメーターで指定された[MIMEタイプと](https://developer.mozilla.org/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types)一致する場合、一致する**コンテンツタイプを**返します。

{％hint style = "info"％}リクエストにボディが**ない**場合、 **falseを**返し**ます** 。 {％endhint％}

**署名**

```go
c.Is(t string) bool
```

**例**

```go
// Content-Type: text/html; charset=utf-8

app.Get("/", func(c *fiber.Ctx) {
  c.Is("html")  // => true
  c.Is(".html") // => true
  c.Is("json")  // => false
})
```

## JSON

[Jsoniter](https://github.com/json-iterator/go)を使用して、 **インターフェイス**または**文字列**をJSONに変換し**ます** 。

{％hint style = "info"％}メソッドは、コンテンツヘッダーを**application / jsonに**設定し**ます** 。 {％endhint％}

**署名**

```go
c.JSON(v interface{}) error
```

**例**

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

生のJSONメソッド。

{％のヒントスタイル=「成功」％}使用このあなたはJSONのシリアル化を**必要としない**場合は**、生の**入力を扱う場合、お勧めします。 {％endhint％}

**署名**

```go
c.JSONBytes(b []byte) error
```

**例**

```go
app.Get("/json", func(c *fiber.Ctx) {
  c.JSONBytes([]byte(`{"Name": "Grame", "Age": 20}`))
  // => "{"Name": "Grame", "Age": 20}"
})
```

## JSONString

生のJSONメソッド。

{％のヒントスタイル=「成功」％}使用このあなたはJSONのシリアル化を**必要としない**場合は**、生の**入力を扱う場合、お勧めします。 {％endhint％}

**署名**

```go
c.JSONString(s string) error
```

**例**

```go
app.Get("/json", func(c *fiber.Ctx) {
  c.JSONString(`{"Name": "Grame", "Age": 20}`)
  // => "{"Name": "Grame", "Age": 20}"
})
```

## JSONP

JSONPサポートを使用してJSON応答を送信します。このメソッドは[JSON](context.md#json)と同じですが、JSONPコールバックのサポートをオプトインします。デフォルトでは、JSONPコールバック名は単にコールバックです。

メソッドに**名前付き文字列**を渡すことでこれをオーバーライドします。

**署名**

```go
c.JSONP(v interface{}, callback ...string) error
```

**例**

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

## リンク集

プロパティに続くリンクを結合して、応答の[Link](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Link) HTTPヘッダーフィールドに入力します。

**署名**

```go
c.Links(link ...string)
```

**例**

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

## 地元の人

リクエストをスコープとする文字列変数を保存するため、リクエストに一致するルートでのみ使用可能なメソッド。

{％hint style = "success"％}これは、 **特定の値**を次のミドルウェアに渡したい場合に便利です。 {％endhint％}

**署名**

```go
c.Locals(key string, value ...interface{}) interface{}
```

**例**

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

{％hint style = "info"％} **Locals**内に任意の型を入れることができますが、変数を使用している場合は、忘れずに元に戻してください。 {％endhint％}

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

## ロケーション

応答の[Location](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Location) HTTPヘッダーを指定されたパスパラメーターに設定します。

**署名**

```go
c.Location(path string)
```

**例**

```go
app.Post("/", func(c *fiber.Ctx) {
  c.Location("http://example.com")
  c.Location("/foo/bar")
})
```

## 方法

要求のHTTPメソッドに対応する文字列、GET、POST、PUTなどが含まれます。

**署名**

```go
c.Method() string
```

**例**

```go
app.Post("/", func(c *fiber.Ctx) {
  c.Method() // => "POST"
})
```

## MultipartForm

マルチパートフォームエントリにアクセスするには、 `MultipartForm()`してバイナリを解析できます。これは`map[string][]string`返すので、キーが与えられると値は文字列スライスになります。

**署名**

```go
c.MultipartForm() (*multipart.Form, error)
```

**例**

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

## 次

**Next**が呼び出されると、現在のルートに一致するスタック内のnextメソッドが実行されます。

**署名**

```go
c.Next()
```

**例**

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

元のリクエストURLが含まれます。

**署名**

```go
c.OriginalURL() string
```

**例**

```go
// GET http://example.com/search?q=something

app.Get("/", func(c *fiber.Ctx) {
  c.OriginalURL() // => "/search?q=something"
})
```

## パラメータ

メソッドを使用して、ルートパラメータを取得できます。

{％hint style = "info"％}パラメータ**が**存在**しない**場合、デフォルトは空の文字列（ `""` ）です。 {％endhint％}

**署名**

```go
c.Params(param string) string
```

**例**

```go
// GET http://example.com/user/tj

app.Get("/user/:name", func(c *fiber.Ctx) {
  c.Params("name") // => "tj"
})
```

## 道

要求URLのパス部分が含まれます。

**署名**

```go
c.Path() string
```

**例**

```go
// GET http://example.com/users?sort=desc

app.Get("/users", func(c *fiber.Ctx) {
  c.Path() // => "/users"
})
```

## プロトコル

要求プロトコル文字列が含まれます： **TLS**要求の場合は`http`または`https` 。

**署名**

```go
c.Protocol() string
```

**例**

```go
// GET http://example.com

app.Get("/", func(c *fiber.Ctx) {
  c.Protocol() // => "http"
})
```

## 問い合わせ

このプロパティは、ルート内の各クエリ文字列パラメーターのプロパティを含むオブジェクトです。

{％hint style = "info"％}クエリ文字列が**ない**場合は、 **空の文字列を**返し**ます** 。 {％endhint％}

**署名**

```go
c.Query(parameter string) string
```

**例**

```go
// GET http://example.com/shoes?order=desc&brand=nike

app.Get("/", func(c *fiber.Ctx) {
  c.Query("order") // => "desc"
  c.Query("brand") // => "nike"
})
```

## 範囲

{％hint style = "danger"％} **Fiber** v2で計画されています。 {％endhint％}

## リダイレクト

HTTPステータスコードに対応する正の整数である指定されたステータスで、指定されたパスから派生したURLにリダイレクトします。

{％hint style = "info"％}指定し**ない**場合、ステータスはデフォルトで**302 Foundになり**ます。 {％endhint％}

**署名**

```go
c.Redirect(path string, status ...int)
```

**例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Redirect("/foo/bar")
  c.Redirect("../login")
  c.Redirect("http://example.com")
  c.Redirect("http://example.com", 301)
})
```

## レンダリング

{％hint style = "danger"％} **Fiber** v2で計画されています。 {％endhint％}

## ルート

現在一致する[ルート](https://pkg.go.dev/github.com/gofiber/fiber?tab=doc#Route)構造体が含まれます。

{％hint style = "warning"％}このメソッドはデバッグに**のみ**使用してください。 {％endhint％}

**署名**

```go
c.Route() *Route
```

**例**

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

## ファイルを保存

メソッドは**、**マルチパートファイルをディスクに保存するために使用されます。

**署名**

```go
c.SaveFile(fh *multipart.FileHeader, path string)
```

**例**

{％hint style = "success"％} [MultipartForm](https://fiber.wiki/context#multipartform)メソッドで実際の例を見ることができます。 {％endhint％}

## 安全な

**TLS**接続が確立されている場合は`true`ブールプロパティ。

**署名**

```go
c.Secure() bool
```

**例**

```go
// Secure() method is equivalent to:
c.Protocol() == "https"
```

## 送る

HTTP応答を送信します。 **送信**本文には、任意のタイプを指定できます。

{％hint style = "warning"％}メソッド**は** [Write](https://fiber.wiki/context#write)メソッドのように追加**しません** 。 {％endhint％}

**署名**

```go
c.Send(body ...interface{})
```

**例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Send("Hello, World!")         // => "Hello, World!"
  c.Send([]byte("Hello, World!")) // => "Hello, World!"
  c.Send(123)                     // => 123
})
```

## SendBytes

生のメソッド。

{％hint style = "success"％}これは、タイプアサーション**が不要な**場合に使用します。パフォーマンスを向上させるために推奨され**ます** 。 {％endhint％}

**署名**

```go
c.SendBytes(b []byte)
```

**例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.SendByte([]byte("Hello, World!"))
  // => "Hello, World!"
})
```

## SendString

生のメソッド。

{％hint style = "success"％}これは、タイプアサーション**が不要な**場合に使用します。パフォーマンスを向上させるために推奨され**ます** 。 {％endhint％}

**署名**

```go
c.SendString(s string)
```

**例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.SendString("Hello, World!")
  // => "Hello, World!"
})
```

## ファイルを送信

指定されたパスからファイルを転送します。 **ファイル名**拡張子に基づいて、 [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)応答のHTTPヘッダーフィールドを設定し**ます** 。

{％hint style = "info"％}メソッドはデフォルトで**gzipping**を使用します。無効にするには**false**に設定します。 {％endhint％}

**署名**

```go
c.SendFile(path string, gzip ...bool)
```

**例**

```go
app.Get("/not-found", func(c *fiber.Ctx) {
  c.SendFile("./public/404.html")

  // Disable gzipping:
  c.SendFile("./static/index.html", false)
})
```

## SendStatus

応答本文が**空の**場合、本文にステータスコードと正しいステータスメッセージを設定します。

{％hint style = "success"％}使用されているすべてのステータスコードとメッセージは[こちらで](https://github.com/gofiber/fiber/blob/dffab20bcdf4f3597d2c74633a7705a517d2c8c2/utils.go#L183-L244)確認でき[ます](https://github.com/gofiber/fiber/blob/dffab20bcdf4f3597d2c74633a7705a517d2c8c2/utils.go#L183-L244) 。 {％endhint％}

**署名**

```go
c.SendStatus(status int)
```

**例**

```go
app.Get("/not-found", func(c *fiber.Ctx) {
  c.SendStatus(415)
  // 415 "Unsupported Media Type"

  c.Send("Hello, World!")
  c.SendStatus(415)
  // 415 "Hello, World!"
})
```

## セットする

応答のHTTPヘッダーフィールドを`value`設定し`value` 。

**署名**

```go
c.Set(field, value string)
```

**例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Set("Content-Type", "text/plain")
  // => "Content-type: text/plain"
})
```

## SignedCookies

{％hint style = "danger"％} **Fiber** v2で計画されています。 {％endhint％}

## 古くなった

{％hint style = "danger"％} **Fiber** v2で計画されています。 {％endhint％}

## 状態

応答のHTTPステータスを設定します。

{％hint style = "info"％}メソッドは**チェーン可能**です。 {％endhint％}

**署名**

```go
c.Status(status int)
```

**例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Status(200)
  c.Status(400).Send("Bad Request")
  c.Status(404).SendFile("./public/gopher.png")
})
```

## サブドメイン

リクエストのドメイン名のサブドメインの配列。

アプリケーションプロパティサブドメインオフセット（デフォルトは`2` ）は、サブドメインセグメントの開始を決定するために使用されます。

**署名**

```go
c.Subdomains(offset ...int) []string
```

**例**

```go
// Host: "tobi.ferrets.example.com"

app.Get("/", func(c *fiber.Ctx) {
  c.Subdomains()  // => ["ferrets", "tobi"]
  c.Subdomains(1) // => ["tobi"]
})
```

## タイプ

[Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) HTTPヘッダーを、ファイル**拡張子** [で](https://github.com/nginx/nginx/blob/master/conf/mime.types)指定された[ここに](https://github.com/nginx/nginx/blob/master/conf/mime.types)リストされたMIMEタイプに設定します。

**署名**

```go
c.Type(t string) string
```

**例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Type(".html") // => "text/html"
  c.Type("html")  // => "text/html"
  c.Type("json")  // => "application/json"
  c.Type("png")   // => "image/png"
})
```

## 変化する

指定されたヘッダーフィールドを[Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary)応答ヘッダーに追加します。これは、まだリストされていない場合、ヘッダーを追加します。そうでない場合、現在の場所にリストされたままにします。

{％hint style = "info"％}複数のフィールドが**許可され**ます。 {％endhint％}

**署名**

```go
c.Vary(field ...string)
```

**例**

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

## 書く

HTTPボディの応答への**任意の**入力を追加します。

**署名**

```go
c.Write(body ...interface{})
```

**例**

```go
app.Get("/", func(c *fiber.Ctx) {
  c.Write("Hello, ")         // => "Hello, "
  c.Write([]byte("World! ")) // => "Hello, World! "
  c.Write(123)               // => "Hello, World! 123"
})
```

## XHR

リクエストの[X-Requested-With](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)ヘッダーフィールドが[XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)である場合、 `true`であるブールプロパティは、リクエストがクライアントライブラリ（ [jQuery](https://api.jquery.com/jQuery.ajax/)など）によって発行されたことを示します。

**署名**

```go
c.XHR() bool
```

**例**

```go
// X-Requested-With: XMLHttpRequest

app.Get("/", func(c *fiber.Ctx) {
  c.XHR() // => true
})
```

## XML

XMLはヘッダーを`application/xml`設定し、XMLへのインターフェイスを非整列化します。

**署名**

```go
c.XML(xml interface{}) error
```

**例**

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
