"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["61380"],{11627:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"api/app","title":"\uD83D\uDE80 App","description":"The app instance conventionally denotes the Fiber application.","source":"@site/versioned_docs/version-v1.x/api/app.md","sourceDirName":"api","slug":"/api/app","permalink":"/v1.x/api/app","draft":false,"unlisted":false,"tags":[],"version":"v1.x","lastUpdatedAt":1743510804000,"sidebarPosition":1,"frontMatter":{"id":"app","title":"\uD83D\uDE80 App","description":"The app instance conventionally denotes the Fiber application.","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"API","permalink":"/v1.x/category/api"},"next":{"title":"\uD83E\uDDE0 Ctx","permalink":"/v1.x/api/ctx"}}'),i=n("85893"),l=n("50065");let r={id:"app",title:"\uD83D\uDE80 App",description:"The app instance conventionally denotes the Fiber application.",sidebar_position:1},d=void 0,a={},c=[{value:"New",id:"new",level:2},{value:"Settings",id:"settings",level:2},{value:"Static",id:"static",level:2},{value:"HTTP Methods",id:"http-methods",level:2},{value:"Group",id:"group",level:2},{value:"Stack",id:"stack",level:2},{value:"Listen",id:"listen",level:2},{value:"Listener",id:"listener",level:2},{value:"Test",id:"test",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"new",children:"New"}),"\n",(0,i.jsxs)(t.p,{children:["This method creates a new ",(0,i.jsx)(t.strong,{children:"App"})," named instance. You can pass optional ",(0,i.jsx)(t.a,{href:"#settings",children:"settings "}),"when creating a new instance"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="Signature"',children:"fiber.New(settings ...*Settings) *App\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="Example"',children:'package main\n\nimport "github.com/gofiber/fiber"\n\nfunc main() {\n    app := fiber.New()\n\n    // ...\n\n    app.Listen(3000)\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"settings",children:"Settings"}),"\n",(0,i.jsxs)(t.p,{children:["You can pass application settings when calling ",(0,i.jsx)(t.code,{children:"New"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="Example"',children:'func main() {\n    // Pass Settings creating a new instance\n    app := fiber.New(&fiber.Settings{\n        Prefork:       true,\n        CaseSensitive: true,\n        StrictRouting: true,\n        ServerHeader:  "Fiber",\n    })\n\n    // ...\n\n    app.Listen(3000)\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Or change the settings after initializing an ",(0,i.jsx)(t.code,{children:"app"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="Example"',children:'func main() {\n    app := fiber.New()\n\n    // Or change Settings after creating an instance\n    app.Settings.Prefork = true\n    app.Settings.CaseSensitive = true\n    app.Settings.StrictRouting = true\n    app.Settings.ServerHeader = "Fiber"\n\n    // ...\n\n    app.Listen(3000)\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Settings"})," ",(0,i.jsx)(t.strong,{children:"fields"})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Prefork"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Enables use of the",(0,i.jsx)(t.a,{href:"https://lwn.net/Articles/542629/",children:(0,i.jsx)(t.code,{children:"SO_REUSEPORT"})}),"socket option. This will spawn multiple Go processes listening on the same port. learn more about ",(0,i.jsx)(t.a,{href:"https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/",children:"socket sharding"}),"."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ServerHeader"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Enables the ",(0,i.jsx)(t.code,{children:"Server"})," HTTP header with the given value."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:'""'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"StrictRouting"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["When enabled, the router treats ",(0,i.jsx)(t.code,{children:"/foo"})," and ",(0,i.jsx)(t.code,{children:"/foo/"})," as different. Otherwise, the router treats ",(0,i.jsx)(t.code,{children:"/foo"})," and ",(0,i.jsx)(t.code,{children:"/foo/"})," as the same."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CaseSensitive"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["When enabled, ",(0,i.jsx)(t.code,{children:"/Foo"})," and ",(0,i.jsx)(t.code,{children:"/foo"})," are different routes. When disabled, ",(0,i.jsx)(t.code,{children:"/Foo"}),"and ",(0,i.jsx)(t.code,{children:"/foo"})," are treated the same."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Immutable"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["When enabled, all values returned by context methods are immutable. By default, they are valid until you return from the handler; see the issue ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/fiber/issues/185",children:"#185"}),"."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"UnescapePath"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Converts all encoded characters in the route back before setting the path for the context, so that the routing can also work with urlencoded special characters"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"BodyLimit"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"int"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Sets the maximum allowed size for a request body, if the size exceeds the configured limit, it sends ",(0,i.jsx)(t.code,{children:"413 - Request Entity Too Large"})," response."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"4 * 1024 * 1024"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CompressedFileSuffix"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Adds suffix to the original file name and tries saving the resulting compressed file under the new file name."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:'".fiber.gz"'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Concurrency"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"int"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Maximum number of concurrent connections."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"256 * 1024"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"DisableKeepalive"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Disable keep-alive connections, the server will close incoming connections after sending the first response to client"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"DisableDefaultDate"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"When set to true causes the default date header to be excluded from the response."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"DisableDefaultContentType"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"When set to true, causes the default Content-Type header to be excluded from the Response."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"DisableStartupMessage"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:'When set to true, it will not print out the fiber ASCII and "listening" on message'}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"DisableHeaderNormalizing"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"By default all header names are normalized: conteNT-tYPE -> Content-Type"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ETag"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Enable or disable ETag header generation, since both weak and strong etags are generated using the same hashing method (CRC-32). Weak ETags are the default when enabled."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Views"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"Views"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Views is the interface that wraps the Render function. See our ",(0,i.jsx)(t.strong,{children:"Template Middleware"})," for supported engines."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ReadTimeout"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"time.Duration"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The amount of time allowed to read the full request, including body. The default timeout is unlimited."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"WriteTimeout"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"time.Duration"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The maximum duration before timing out writes of the response. The default timeout is unlimited."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"IdleTimeout"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"time.Duration"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The maximum amount of time to wait for the next request when keep-alive is enabled. If IdleTimeout is zero, the value of ReadTimeout is used."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ReadBufferSize"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"int"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"per-connection buffer size for requests' reading. This also limits the maximum header size. Increase this buffer if your clients send multi-KB RequestURIs and/or multi-KB headers (for example, BIG cookies)."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"4096"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"WriteBufferSize"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"int"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Per-connection buffer size for responses' writing."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"4096"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"static",children:"Static"}),"\n",(0,i.jsxs)(t.p,{children:["Use the ",(0,i.jsx)(t.strong,{children:"Static"})," method to serve static files such as ",(0,i.jsx)(t.strong,{children:"images"}),", ",(0,i.jsx)(t.strong,{children:"CSS"})," and ",(0,i.jsx)(t.strong,{children:"JavaScript"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["By default, ",(0,i.jsx)(t.strong,{children:"Static"})," will serve ",(0,i.jsx)(t.code,{children:"index.html"})," files in response to a request on a directory."]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="Signature"',children:"app.Static(prefix, root string, config ...Static) // => with prefix\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Use the following code to serve files in a directory named ",(0,i.jsx)(t.code,{children:"./public"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="Example"',children:'app.Static("/", "./public")\n\n// => http://localhost:3000/hello.html\n// => http://localhost:3000/js/jquery.js\n// => http://localhost:3000/css/style.css\n'})}),"\n",(0,i.jsxs)(t.p,{children:["To serve from multiple directories, you can use ",(0,i.jsx)(t.strong,{children:"Static"})," numerous times."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="Example"',children:'// Serve files from "./public" directory:\napp.Static("/", "./public")\n\n// Serve files from "./files" directory:\napp.Static("/", "./files")\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Use a reverse proxy cache like ",(0,i.jsx)(t.a,{href:"https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/",children:(0,i.jsx)(t.strong,{children:"NGINX"})})," to improve performance of serving static assets."]})}),"\n",(0,i.jsxs)(t.p,{children:["You can use any virtual path prefix (",(0,i.jsx)(t.em,{children:"where the path does not actually exist in the file system"}),") for files that are served by the ",(0,i.jsx)(t.strong,{children:"Static"})," method, specify a prefix path for the static directory, as shown below:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="Example"',children:'app.Static("/static", "./public")\n\n// => http://localhost:3000/static/hello.html\n// => http://localhost:3000/static/js/jquery.js\n// => http://localhost:3000/static/css/style.css\n'})}),"\n",(0,i.jsxs)(t.p,{children:["If you want to have a little bit more control regarding the settings for serving static files. You could use the ",(0,i.jsx)(t.code,{children:"fiber.Static"})," struct to enable specific settings."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="fiber.Static{}"',children:'// Static represents settings for serving static files\ntype Static struct {\n    // Transparently compresses responses if set to true\n    // This works differently than the github.com/gofiber/compression middleware\n    // The server tries minimizing CPU usage by caching compressed files.\n    // It adds ".fiber.gz" suffix to the original file name.\n    // Optional. Default value false\n    Compress bool\n    // Enables byte-range requests if set to true.\n    // Optional. Default value false\n    ByteRange bool\n    // Enable directory browsing.\n    // Optional. Default value false.\n    Browse bool\n    // File to serve when requesting a directory path.\n    // Optional. Default value "index.html".\n    Index string\n}\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="Example"',children:'app.Static("/", "./public", fiber.Static{\n  Compress:   true,\n  ByteRange:  true,\n  Browse:     true,\n  Index:      "john.html"\n})\n'})}),"\n",(0,i.jsx)(t.h2,{id:"http-methods",children:"HTTP Methods"}),"\n",(0,i.jsxs)(t.p,{children:["Routes an HTTP request, where ",(0,i.jsx)(t.strong,{children:"METHOD"})," is the ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",children:"HTTP method"})," of the request."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="Signatures"',children:'// Add allows you to specifiy a method as value\napp.Add(method, path string, handlers ...func(*Ctx)) Router\n\n// All will register the route on all methods\napp.All(path string, handlers ...func(*Ctx)) Router\n\n// HTTP methods\napp.Get(path string, handlers ...func(*Ctx)) Router\napp.Put(path string, handlers ...func(*Ctx)) Router\napp.Post(path string, handlers ...func(*Ctx)) Router\napp.Head(path string, handlers ...func(*Ctx)) Router\napp.Patch(path string, handlers ...func(*Ctx)) Router\napp.Trace(path string, handlers ...func(*Ctx)) Router\napp.Delete(path string, handlers ...func(*Ctx)) Router\napp.Connect(path string, handlers ...func(*Ctx)) Router\napp.Options(path string, handlers ...func(*Ctx)) Router\n\n// Use is mostly used for middleware modules\n// These routes will only match the beggining of each path\n// i.e. "/john" will match "/john/doe", "/johnnnn"\napp.Use(handlers ...func(*Ctx)) Router\napp.Use(prefix string, handlers ...func(*Ctx)) Router\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="Example"',children:'app.Use("/api", func(c *fiber.Ctx) {\n  c.Set("X-Custom-Header", random.String(32))\n  c.Next()\n})\napp.Get("/api/list", func(c *fiber.Ctx) {\n  c.Send("I\'m a GET request!")\n})\napp.Post("/api/register", func(c *fiber.Ctx) {\n  c.Send("I\'m a POST request!")\n})\n'})}),"\n",(0,i.jsx)(t.h2,{id:"group",children:"Group"}),"\n",(0,i.jsxs)(t.p,{children:["You can group routes by creating a ",(0,i.jsx)(t.code,{children:"*Group"})," struct."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Signature"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"app.Group(prefix string, handlers ...func(*Ctx)) Router\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Example"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api", handler)  // /api\n\n  v1 := api.Group("/v1", handler)   // /api/v1\n  v1.Get("/list", handler)          // /api/v1/list\n  v1.Get("/user", handler)          // /api/v1/user\n\n  v2 := api.Group("/v2", handler) // /api/v2\n  v2.Get("/list", handler)          // /api/v2/list\n  v2.Get("/user", handler)          // /api/v2/user\n\n  app.Listen(3000)\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"stack",children:"Stack"}),"\n",(0,i.jsx)(t.p,{children:"This method returns the original router stack"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="Signature"',children:"app.Stack() [][]*Route\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="Example"',children:'app := fiber.New()\n\napp.Use(handler)\napp.Get("/john", handler)\napp.Post("/register", handler)\napp.Get("/v1/users", handler)\napp.Put("/user/:id", handler)\napp.Head("/xhr", handler)\n\ndata, _ := json.MarshalIndent(app.Stack(), "", "  ")\nfmt.Println(string(data))\n'})}),"\n",(0,i.jsx)(t.h2,{id:"listen",children:"Listen"}),"\n",(0,i.jsxs)(t.p,{children:["Binds and listens for connections on the specified address. This can be an ",(0,i.jsx)(t.code,{children:"int"})," for port or ",(0,i.jsx)(t.code,{children:"string"})," for address. This will listen either on ",(0,i.jsx)(t.code,{children:"tcp4"})," or ",(0,i.jsx)(t.code,{children:"tcp6"})," depending on the address input (i.e. ",(0,i.jsx)(t.code,{children:":3000"})," / ",(0,i.jsx)(t.code,{children:"[::1]:3000"})," )."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="Signature"',children:"app.Listen(address interface{}, tls ...*tls.Config) error\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="Examples"',children:'app.Listen(8080)\napp.Listen("8080")\napp.Listen(":8080")\napp.Listen("127.0.0.1:8080")\napp.Listen("[::1]:8080")\n'})}),"\n",(0,i.jsxs)(t.p,{children:["To enable ",(0,i.jsx)(t.strong,{children:"TLS/HTTPS"})," you can append a ",(0,i.jsx)(t.a,{href:"https://golang.org/pkg/crypto/tls/#Config",children:(0,i.jsx)(t.strong,{children:"TLS config"})}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="Example"',children:'cer, err := tls.LoadX509KeyPair("server.crt", "server.key")\nif err != nil {\n    log.Fatal(err)\n}\nconfig := &tls.Config{Certificates: []tls.Certificate{cer}}\n\napp.Listen(443, config)\n'})}),"\n",(0,i.jsx)(t.h2,{id:"listener",children:"Listener"}),"\n",(0,i.jsxs)(t.p,{children:["You can pass your own ",(0,i.jsx)(t.a,{href:"https://golang.org/pkg/net/#Listener",children:(0,i.jsx)(t.code,{children:"net.Listener"})})," using the ",(0,i.jsx)(t.code,{children:"Listener"})," method."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="Signature"',children:"app.Listener(ln net.Listener, tls ...*tls.Config) error\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Listener"})," does not support the ",(0,i.jsx)(t.a,{href:"#settings",children:(0,i.jsx)(t.strong,{children:"Prefork"})})," feature."]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="Example"',children:'if ln, err = net.Listen("tcp", ":8080"); err != nil {\n    log.Fatal(err)\n}\n\napp.Listener(ln)\n'})}),"\n",(0,i.jsx)(t.h2,{id:"test",children:"Test"}),"\n",(0,i.jsxs)(t.p,{children:["Testing your application is done with the ",(0,i.jsx)(t.strong,{children:"Test"})," method. Use this method for creating ",(0,i.jsx)(t.code,{children:"_test.go"})," files or when you need to debug your routing logic. The default timeout is ",(0,i.jsx)(t.code,{children:"200ms"})," if you want to disable a timeout altogether, pass ",(0,i.jsx)(t.code,{children:"-1"})," as a second argument."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="Signature"',children:"app.Test(req *http.Request, msTimeout ...int) (*http.Response, error)\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:'title="Example"',children:'// Create route with GET method for test:\napp.Get("/", func(c *Ctx) {\n  fmt.Println(c.BaseURL())              // => http://google.com\n  fmt.Println(c.Get("X-Custom-Header")) // => hi\n\n  c.Send("hello, World!")\n})\n\n// http.Request\nreq := httptest.NewRequest("GET", "http://google.com", nil)\nreq.Header.Set("X-Custom-Header", "hi")\n\n// http.Response\nresp, _ := app.Test(req)\n\n// Do something with results:\nif resp.StatusCode == 200 {\n  body, _ := ioutil.ReadAll(resp.Body)\n  fmt.Println(string(body)) // => Hello, World!\n}\n'})})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return r}});var s=n(67294);let i={},l=s.createContext(i);function r(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);