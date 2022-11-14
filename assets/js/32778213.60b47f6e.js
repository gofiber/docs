"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[7762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=o(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={id:"app",title:"\ud83d\ude80 App",description:"The app instance conventionally denotes the Fiber application.",sidebar_position:2},i=void 0,p={unversionedId:"api/app",id:"api/app",title:"\ud83d\ude80 App",description:"The app instance conventionally denotes the Fiber application.",source:"@site/docs/api/app.md",sourceDirName:"api",slug:"/api/app",permalink:"/api/app",draft:!1,editUrl:"https://github.com/gofiber/docs/docs/api/app.md",tags:[],version:"current",lastUpdatedBy:"Muhammed Efe \xc7etin",lastUpdatedAt:1668439753,formattedLastUpdatedAt:"Nov 14, 2022",sidebarPosition:2,frontMatter:{id:"app",title:"\ud83d\ude80 App",description:"The app instance conventionally denotes the Fiber application.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udce6 Fiber",permalink:"/api/fiber"},next:{title:"\ud83e\udde0 Ctx",permalink:"/api/ctx"}},s={},o=[{value:"Static",id:"static",level:2},{value:"Route Handlers",id:"route-handlers",level:2},{value:"Mount",id:"mount",level:2},{value:"Group",id:"group",level:2},{value:"Route",id:"route",level:2},{value:"Server",id:"server",level:2},{value:"HandlersCount",id:"handlerscount",level:2},{value:"Stack",id:"stack",level:2},{value:"Name",id:"name",level:2},{value:"GetRoute",id:"getroute",level:2},{value:"GetRoutes",id:"getroutes",level:2},{value:"Config",id:"config",level:2},{value:"Handler",id:"handler",level:2},{value:"Listen",id:"listen",level:2},{value:"ListenTLS",id:"listentls",level:2},{value:"ListenMutualTLS",id:"listenmutualtls",level:2},{value:"Listener",id:"listener",level:2},{value:"Test",id:"test",level:2},{value:"Hooks",id:"hooks",level:2}],u={toc:o};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"static"},"Static"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("strong",{parentName:"p"},"Static")," method to serve static files such as ",(0,r.kt)("strong",{parentName:"p"},"images"),", ",(0,r.kt)("strong",{parentName:"p"},"CSS,")," and ",(0,r.kt)("strong",{parentName:"p"},"JavaScript"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"By default, ",(0,r.kt)("strong",{parentName:"p"},"Static")," will serve ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," files in response to a request on a directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Static(prefix, root string, config ...Static) Router\n")),(0,r.kt)("p",null,"Use the following code to serve files in a directory named ",(0,r.kt)("inlineCode",{parentName:"p"},"./public")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app.Static("/", "./public")\n\n// => http://localhost:3000/hello.html\n// => http://localhost:3000/js/jquery.js\n// => http://localhost:3000/css/style.css\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'// Serve files from multiple directories\napp.Static("/", "./public")\n\n// Serve files from "./files" directory:\napp.Static("/", "./files")\n')),(0,r.kt)("p",null,"You can use any virtual path prefix ","(",(0,r.kt)("em",{parentName:"p"},"where the path does not actually exist in the file system"),")"," for files that are served by the ",(0,r.kt)("strong",{parentName:"p"},"Static")," method, specify a prefix path for the static directory, as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'app.Static("/static", "./public")\n\n// => http://localhost:3000/static/hello.html\n// => http://localhost:3000/static/js/jquery.js\n// => http://localhost:3000/static/css/style.css\n')),(0,r.kt)("p",null,"If you want to have a little bit more control regarding the settings for serving static files. You could use the ",(0,r.kt)("inlineCode",{parentName:"p"},"fiber.Static")," struct to enable specific settings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="fiber.Static{}"',title:'"fiber.Static{}"'},'// Static defines configuration options when defining static assets.\ntype Static struct {\n    // When set to true, the server tries minimizing CPU usage by caching compressed files.\n    // This works differently than the github.com/gofiber/compression middleware.\n    // Optional. Default value false\n    Compress bool `json:"compress"`\n\n    // When set to true, enables byte range requests.\n    // Optional. Default value false\n    ByteRange bool `json:"byte_range"`\n\n    // When set to true, enables directory browsing.\n    // Optional. Default value false.\n    Browse bool `json:"browse"`\n\n    // When set to true, enables direct download.\n    // Optional. Default value false.\n    Download bool `json:"download"`\n\n    // The name of the index file for serving a directory.\n    // Optional. Default value "index.html".\n    Index string `json:"index"`\n\n    // Expiration duration for inactive file handlers.\n    // Use a negative time.Duration to disable it.\n    //\n    // Optional. Default value 10 * time.Second.\n    CacheDuration time.Duration `json:"cache_duration"`\n\n    // The value for the Cache-Control HTTP-header\n    // that is set on the file response. MaxAge is defined in seconds.\n    //\n    // Optional. Default value 0.\n    MaxAge int `json:"max_age"`\n\n    // ModifyResponse defines a function that allows you to alter the response.\n    //\n    // Optional. Default: nil\n    ModifyResponse Handler\n\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *Ctx) bool\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'// Custom config\napp.Static("/", "./public", fiber.Static{\n  Compress:      true,\n  ByteRange:     true,\n  Browse:        true,\n  Index:         "john.html"\n  CacheDuration: 10 * time.Second,\n  MaxAge:        3600,\n})\n')),(0,r.kt)("h2",{id:"route-handlers"},"Route Handlers"),(0,r.kt)("p",null,"Registeres a route bound to a specific ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"},"HTTP method"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signatures"',title:'"Signatures"'},"// HTTP methods\nfunc (app *App) Get(path string, handlers ...Handler) Router\nfunc (app *App) Head(path string, handlers ...Handler) Router\nfunc (app *App) Post(path string, handlers ...Handler) Router\nfunc (app *App) Put(path string, handlers ...Handler) Router\nfunc (app *App) Delete(path string, handlers ...Handler) Router\nfunc (app *App) Connect(path string, handlers ...Handler) Router\nfunc (app *App) Options(path string, handlers ...Handler) Router\nfunc (app *App) Trace(path string, handlers ...Handler) Router\nfunc (app *App) Patch(path string, handlers ...Handler) Router\n\n// Add allows you to specifiy a method as value\nfunc (app *App) Add(method, path string, handlers ...Handler) Router\n\n// All will register the route on all HTTP methods\n// Almost the same as app.Use but not bound to prefixes\nfunc (app *App) All(path string, handlers ...Handler) Router\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'// Simple GET handler\napp.Get("/api/list", func(c *fiber.Ctx)error{\n  return c.SendString("I\'m a GET request!")\n})\n\n// Simple POST handler\napp.Post("/api/register", func(c *fiber.Ctx) error {\n  return c.SendString("I\'m a POST request!")\n})\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use")," can be used for middleware packages and prefix catchers. These routes will only match the beginning of each path i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"/john")," will match ",(0,r.kt)("inlineCode",{parentName:"p"},"/john/doe"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/johnnnnn")," etc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Use(args ...interface{}) Router\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'// Match any request\napp.Use(func(c *fiber.Ctx) error {\n    return c.Next()\n})\n\n// Match request starting with /api\napp.Use("/api", func(c *fiber.Ctx) error {\n    return c.Next()\n})\n\n// Attach multiple handlers \napp.Use("/api",func(c *fiber.Ctx) error {\n  c.Set("X-Custom-Header", random.String(32))\n    return c.Next()\n}, func(c *fiber.Ctx) error {\n    return c.Next()\n})\n')),(0,r.kt)("h2",{id:"mount"},"Mount"),(0,r.kt)("p",null,"You can Mount Fiber instance by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"*Mount")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (a *App) Mount(prefix string, app *App) Router\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'func main() {\n    micro := fiber.New()\n    micro.Get("/doe", func(c *fiber.Ctx) error {\n        return c.SendStatus(fiber.StatusOK)\n    })\n\n    app := fiber.New()\n    app.Mount("/john", micro) // GET /john/doe -> 200 OK\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,r.kt)("h2",{id:"group"},"Group"),(0,r.kt)("p",null,"You can group routes by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"*Group")," struct."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Group(prefix string, handlers ...Handler) Router\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api", handler)  // /api\n\n  v1 := api.Group("/v1", handler)   // /api/v1\n  v1.Get("/list", handler)          // /api/v1/list\n  v1.Get("/user", handler)          // /api/v1/user\n\n  v2 := api.Group("/v2", handler)   // /api/v2\n  v2.Get("/list", handler)          // /api/v2/list\n  v2.Get("/user", handler)          // /api/v2/user\n\n  log.Fatal(app.Listen(":3000"))\n}\n')),(0,r.kt)("h2",{id:"route"},"Route"),(0,r.kt)("p",null,"You can define routes with a common prefix inside the common function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Route(prefix string, fn func(router Router), name ...string) Router\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'func main() {\n  app := fiber.New()\n\n  app.Route("/test", func(api fiber.Router) {\n      api.Get("/foo", handler).Name("foo") // /test/foo (name: test.foo)\n    api.Get("/bar", handler).Name("bar") // /test/bar (name: test.bar)\n  }, "test.")\n\n  log.Fatal(app.Listen(":3000"))\n}\n')),(0,r.kt)("h2",{id:"server"},"Server"),(0,r.kt)("p",null,"Server returns the underlying ",(0,r.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/valyala/fasthttp#Server"},"fasthttp server")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Server() *fasthttp.Server\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},"func main() {\n    app := fiber.New()\n\n    app.Server().MaxConnsPerIP = 1\n\n    // ...\n}\n")),(0,r.kt)("h2",{id:"handlerscount"},"HandlersCount"),(0,r.kt)("p",null,"This method returns the amount of registered handlers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) HandlersCount() uint32\n")),(0,r.kt)("h2",{id:"stack"},"Stack"),(0,r.kt)("p",null,"This method returns the original router stack"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Stack() [][]*Route\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'var handler = func(c *fiber.Ctx) error { return nil }\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/john/:age", handler)\n    app.Post("/register", handler)\n\n    data, _ := json.MarshalIndent(app.Stack(), "", "  ")\n    fmt.Println(string(data))\n\n    app.Listen(":3000")\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Result"',title:'"Result"'},'[\n  [\n    {\n      "method": "GET",\n      "path": "/john/:age",\n      "params": [\n        "age"\n      ]\n    }\n  ],\n  [\n    {\n      "method": "HEAD",\n      "path": "/john/:age",\n      "params": [\n        "age"\n      ]\n    }\n  ],\n  [\n    {\n      "method": "POST",\n      "path": "/register",\n      "params": null\n    }\n  ]\n]\n')),(0,r.kt)("h2",{id:"name"},"Name"),(0,r.kt)("p",null,"This method assigns the name of latest created route."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Name(name string) Router\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'var handler = func(c *fiber.Ctx) error { return nil }\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/", handler)\n    app.Name("index")\n\n    app.Get("/doe", handler).Name("home")\n\n    app.Trace("/tracer", handler).Name("tracert")\n\n    app.Delete("/delete", handler).Name("delete")\n\n    a := app.Group("/a")\n    a.Name("fd.")\n\n    a.Get("/test", handler).Name("test")\n\n    data, _ := json.MarshalIndent(app.Stack(), "", "  ")\n    fmt.Print(string(data))\n\n    app.Listen(":3000")\n\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Result"',title:'"Result"'},'[\n  [\n    {\n      "method": "GET",\n      "name": "index",\n      "path": "/",\n      "params": null\n    },\n    {\n      "method": "GET",\n      "name": "home",\n      "path": "/doe",\n      "params": null\n    },\n    {\n      "method": "GET",\n      "name": "fd.test",\n      "path": "/a/test",\n      "params": null\n    }\n  ],\n  [\n    {\n      "method": "HEAD",\n      "name": "",\n      "path": "/",\n      "params": null\n    },\n    {\n      "method": "HEAD",\n      "name": "",\n      "path": "/doe",\n      "params": null\n    },\n    {\n      "method": "HEAD",\n      "name": "",\n      "path": "/a/test",\n      "params": null\n    }\n  ],\n  null,\n  null,\n  [\n    {\n      "method": "DELETE",\n      "name": "delete",\n      "path": "/delete",\n      "params": null\n    }\n  ],\n  null,\n  null,\n  [\n    {\n      "method": "TRACE",\n      "name": "tracert",\n      "path": "/tracer",\n      "params": null\n    }\n  ],\n  null\n]\n')),(0,r.kt)("h2",{id:"getroute"},"GetRoute"),(0,r.kt)("p",null,"This method gets the route by name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) GetRoute(name string) Route\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'var handler = func(c *fiber.Ctx) error { return nil }\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/", handler).Name("index")\n    \n    data, _ := json.MarshalIndent(app.GetRoute("index"), "", "  ")\n    fmt.Print(string(data))\n\n\n    app.Listen(":3000")\n\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Result"',title:'"Result"'},'{\n  "method": "GET",\n  "name": "index",\n  "path": "/",\n  "params": null\n}\n')),(0,r.kt)("h2",{id:"getroutes"},"GetRoutes"),(0,r.kt)("p",null,"This method gets all routes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) GetRoutes(filterUseOption ...bool) []Route\n")),(0,r.kt)("p",null,"When filterUseOption equal to true, it will filter the routes registered by the middleware."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'func main() {\n    app := fiber.New()\n    app.Post("/", func (c *fiber.Ctx) error {\n        return c.SendString("Hello, World!")\n    }).Name("index")\n    data, _ := json.MarshalIndent(app.GetRoutes(true), "", "  ")\n    fmt.Print(string(data))\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Result"',title:'"Result"'},'[\n    {\n        "method": "POST",\n        "name": "index",\n        "path": "/",\n        "params": null\n    }\n]\n')),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("p",null,"Config returns the app config as value ","("," read-only ",")","."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Config() Config\n")),(0,r.kt)("h2",{id:"handler"},"Handler"),(0,r.kt)("p",null,"Handler returns the server handler that can be used to serve custom ","*","fasthttp.RequestCtx requests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Handler() fasthttp.RequestHandler\n")),(0,r.kt)("h2",{id:"listen"},"Listen"),(0,r.kt)("p",null,"Listen serves HTTP requests from the given address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Listen(addr string) error\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'// Listen on port :8080 \napp.Listen(":8080")\n\n// Custom host\napp.Listen("127.0.0.1:8080")\n')),(0,r.kt)("h2",{id:"listentls"},"ListenTLS"),(0,r.kt)("p",null,"ListenTLS serves HTTPs requests from the given address using certFile and keyFile paths to as TLS certificate and key file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) ListenTLS(addr, certFile, keyFile string) error\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'app.ListenTLS(":443", "./cert.pem", "./cert.key");\n')),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"ListenTLS")," defaults to the following config ","("," use ",(0,r.kt)("inlineCode",{parentName:"p"},"Listener")," to provide your own config ",")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Default *tls.Config"',title:'"Default','*tls.Config"':!0},"&tls.Config{\n    MinVersion:               tls.VersionTLS12,\n    Certificates: []tls.Certificate{\n        cert,\n    },\n}\n")),(0,r.kt)("h2",{id:"listenmutualtls"},"ListenMutualTLS"),(0,r.kt)("p",null,"ListenMutualTLS serves HTTPs requests from the given address using certFile, keyFile and clientCertFile are the paths to TLS certificate and key file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) ListenMutualTLS(addr, certFile, keyFile, clientCertFile string) error\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'app.ListenMutualTLS(":443", "./cert.pem", "./cert.key", "./ca-chain-cert.pem");\n')),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"ListenMutualTLS")," defaults to the following config ","("," use ",(0,r.kt)("inlineCode",{parentName:"p"},"Listener")," to provide your own config ",")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Default *tls.Config"',title:'"Default','*tls.Config"':!0},"&tls.Config{\n    MinVersion: tls.VersionTLS12,\n    ClientAuth: tls.RequireAndVerifyClientCert,\n    ClientCAs:  clientCertPool,\n    Certificates: []tls.Certificate{\n        cert,\n    },\n}\n")),(0,r.kt)("h2",{id:"listener"},"Listener"),(0,r.kt)("p",null,"You can pass your own ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/net/#Listener"},(0,r.kt)("inlineCode",{parentName:"a"},"net.Listener"))," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Listener")," method. This method can be used to enable ",(0,r.kt)("strong",{parentName:"p"},"TLS/HTTPS")," with a custom tls.Config."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Listener(ln net.Listener) error\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'ln, _ := net.Listen("tcp", ":3000")\n\ncer, _:= tls.LoadX509KeyPair("server.crt", "server.key")\n\nln = tls.NewListener(ln, &tls.Config{Certificates: []tls.Certificate{cer}})\n\napp.Listener(ln)\n')),(0,r.kt)("h2",{id:"test"},"Test"),(0,r.kt)("p",null,"Testing your application is done with the ",(0,r.kt)("strong",{parentName:"p"},"Test")," method. Use this method for creating ",(0,r.kt)("inlineCode",{parentName:"p"},"_test.go")," files or when you need to debug your routing logic. The default timeout is ",(0,r.kt)("inlineCode",{parentName:"p"},"1s")," if you want to disable a timeout altogether, pass ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," as a second argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Test(req *http.Request, msTimeout ...int) (*http.Response, error)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'// Create route with GET method for test:\napp.Get("/", func(c *fiber.Ctx) error {\n  fmt.Println(c.BaseURL())              // => http://google.com\n  fmt.Println(c.Get("X-Custom-Header")) // => hi\n\n  return c.SendString("hello, World!")\n})\n\n// http.Request\nreq := httptest.NewRequest("GET", "http://google.com", nil)\nreq.Header.Set("X-Custom-Header", "hi")\n\n// http.Response\nresp, _ := app.Test(req)\n\n// Do something with results:\nif resp.StatusCode == fiber.StatusOK {\n  body, _ := ioutil.ReadAll(resp.Body)\n  fmt.Println(string(body)) // => Hello, World!\n}\n')),(0,r.kt)("h2",{id:"hooks"},"Hooks"),(0,r.kt)("p",null,"Hooks is a method to return ",(0,r.kt)("a",{parentName:"p",href:"/guide/hooks"},"hooks")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"func (app *App) Hooks() *Hooks\n")))}c.isMDXComponent=!0}}]);