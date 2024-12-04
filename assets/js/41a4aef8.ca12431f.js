"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["30894"],{8721:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>x,assets:()=>h,toc:()=>u,frontMatter:()=>c});var t=JSON.parse('{"id":"guide/routing","title":"\uD83D\uDD0C Routing","description":"Routing refers to how an application\'s endpoints (URIs) respond to client requests.","source":"@site/versioned_docs/version-v2.x/guide/routing.md","sourceDirName":"guide","slug":"/guide/routing","permalink":"/guide/routing","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1733317037000,"sidebarPosition":1,"frontMatter":{"id":"routing","title":"\uD83D\uDD0C Routing","description":"Routing refers to how an application\'s endpoints (URIs) respond to client requests.","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Guide","permalink":"/category/guide"},"next":{"title":"\uD83C\uDFAD Grouping","permalink":"/guide/grouping"}}'),a=r("85893"),s=r("50065"),i=r("47902"),o=r("5525"),l=r("72389");let c={id:"routing",title:"\uD83D\uDD0C Routing",description:"Routing refers to how an application's endpoints (URIs) respond to client requests.",sidebar_position:1},d=void 0,h={},u=[{value:"Handlers",id:"handlers",level:2},...l.toc,{value:"Paths",id:"paths",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Constraints",id:"constraints",level:3},{value:"Middleware",id:"middleware",level:2},{value:"Constraints on Adding Routes Dynamically",id:"constraints-on-adding-routes-dynamically",level:3},{value:"Grouping",id:"grouping",level:2}];function p(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"handlers",children:"Handlers"}),"\n",(0,a.jsx)(l.default,{}),"\n",(0,a.jsx)(n.h2,{id:"paths",children:"Paths"}),"\n",(0,a.jsxs)(n.p,{children:["Route paths, combined with a request method, define the endpoints at which requests can be made. Route paths can be ",(0,a.jsx)(n.strong,{children:"strings"})," or ",(0,a.jsx)(n.strong,{children:"string patterns"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Examples of route paths based on strings"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'// This route path will match requests to the root route, "/":\napp.Get("/", func(c *fiber.Ctx) error {\n      return c.SendString("root")\n})\n\n// This route path will match requests to "/about":\napp.Get("/about", func(c *fiber.Ctx) error {\n    return c.SendString("about")\n})\n\n// This route path will match requests to "/random.txt":\napp.Get("/random.txt", func(c *fiber.Ctx) error {\n    return c.SendString("random.txt")\n})\n'})}),"\n",(0,a.jsx)(n.p,{children:"As with the expressJs framework, the order of the route declaration plays a role.\nWhen a request is received, the routes are checked in the order in which they are declared."}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"So please be careful to write routes with variable parameters after the routes that contain fixed parts, so that these variable parts do not match instead and unexpected behavior occurs."})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:["Route parameters are dynamic elements in the route, which are ",(0,a.jsx)(n.strong,{children:"named"})," or ",(0,a.jsx)(n.strong,{children:"not named segments"}),". This segments that are used to capture the values specified at their position in the URL. The obtained values can be retrieved using the ",(0,a.jsx)(n.a,{href:"https://fiber.wiki/context#params",children:"Params"})," function, with the name of the route parameter specified in the path as their respective keys or for unnamed parameters the character(*, +) and the counter of this."]}),"\n",(0,a.jsx)(n.p,{children:"The characters :, +, and * are characters that introduce a parameter."}),"\n",(0,a.jsx)(n.p,{children:"Greedy parameters are indicated by wildcard(*) or plus(+) signs."}),"\n",(0,a.jsx)(n.p,{children:'The routing also offers the possibility to use optional parameters, for the named parameters these are marked with a final "?", unlike the plus sign which is not optional, you can use the wildcard character for a parameter range which is optional and greedy.'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example of define routes with route parameters"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'// Parameters\napp.Get("/user/:name/books/:title", func(c *fiber.Ctx) error {\n    fmt.Fprintf(c, "%s\\n", c.Params("name"))\n    fmt.Fprintf(c, "%s\\n", c.Params("title"))\n    return nil\n})\n// Plus - greedy - not optional\napp.Get("/user/+", func(c *fiber.Ctx) error {\n    return c.SendString(c.Params("+"))\n})\n\n// Optional parameter\napp.Get("/user/:name?", func(c *fiber.Ctx) error {\n    return c.SendString(c.Params("name"))\n})\n\n// Wildcard - greedy - optional\napp.Get("/user/*", func(c *fiber.Ctx) error {\n    return c.SendString(c.Params("*"))\n})\n\n// This route path will match requests to "/v1/some/resource/name:customVerb", since the parameter character is escaped\napp.Get(`/v1/some/resource/name\\:customVerb`, func(c *fiber.Ctx) error {\n    return c.SendString("Hello, Community")\n})\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Since the hyphen (",(0,a.jsx)(n.code,{children:"-"}),") and the dot (",(0,a.jsx)(n.code,{children:"."}),") are interpreted literally, they can be used along with route parameters for useful purposes."]})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["All special parameter characters can also be escaped with ",(0,a.jsx)(n.code,{children:'"\\\\"'})," and lose their value, so you can use them in the route if you want, like in the custom methods of the ",(0,a.jsx)(n.a,{href:"https://cloud.google.com/apis/design/custom_methods",children:"google api design guide"}),". It's recommended to use backticks ",(0,a.jsx)(n.code,{children:"`"})," because in go's regex documentation, they always use backticks to make sure it is unambiguous and the escape character doesn't interfere with regex patterns in an unexpected way."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'// http://localhost:3000/plantae/prunus.persica\napp.Get("/plantae/:genus.:species", func(c *fiber.Ctx) error {\n    fmt.Fprintf(c, "%s.%s\\n", c.Params("genus"), c.Params("species"))\n    return nil // prunus.persica\n})\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'// http://localhost:3000/flights/LAX-SFO\napp.Get("/flights/:from-:to", func(c *fiber.Ctx) error {\n    fmt.Fprintf(c, "%s-%s\\n", c.Params("from"), c.Params("to"))\n    return nil // LAX-SFO\n})\n'})}),"\n",(0,a.jsx)(n.p,{children:"Our intelligent router recognizes that the introductory parameter characters should be part of the request route in this case and can process them as such."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'// http://localhost:3000/shop/product/color:blue/size:xs\napp.Get("/shop/product/color::color/size::size", func(c *fiber.Ctx) error {\n    fmt.Fprintf(c, "%s:%s\\n", c.Params("color"), c.Params("size"))\n    return nil // blue:xs\n})\n'})}),"\n",(0,a.jsx)(n.p,{children:"In addition, several parameters in a row and several unnamed parameter characters in the route, such as the wildcard or plus character, are possible, which greatly expands the possibilities of the router for the user."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'// GET /@v1\n// Params: "sign" -> "@", "param" -> "v1"\napp.Get("/:sign:param", handler)\n\n// GET /api-v1\n// Params: "name" -> "v1" \napp.Get("/api-:name", handler)\n\n// GET /customer/v1/cart/proxy\n// Params: "*1" -> "customer/", "*2" -> "/cart"\napp.Get("/*v1*/proxy", handler)\n\n// GET /v1/brand/4/shop/blue/xs\n// Params: "*1" -> "brand/4", "*2" -> "blue/xs"\napp.Get("/v1/*/shop/*", handler)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["We have adapted the routing strongly to the express routing, but currently without the possibility of the regular expressions, because they are quite slow. The possibilities can be tested with version 0.1.7 (express 4) in the online ",(0,a.jsx)(n.a,{href:"http://forbeslindesay.github.io/express-route-tester/",children:"Express route tester"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"constraints",children:"Constraints"}),"\n",(0,a.jsxs)(n.p,{children:["Route constraints execute when a match has occurred to the incoming URL and the URL path is tokenized into route values by parameters. The feature was intorduced in ",(0,a.jsx)(n.code,{children:"v2.37.0"})," and inspired by ",(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/routing?view=aspnetcore-6.0#route-constraints",children:".NET Core"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["Constraints aren't validation for parameters. If constraints aren't valid for a parameter value, Fiber returns ",(0,a.jsx)(n.strong,{children:"404 handler"}),"."]})}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Constraint"}),(0,a.jsx)(n.th,{children:"Example"}),(0,a.jsx)(n.th,{children:"Example matches"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"int"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:":id<int\\>"})}),(0,a.jsx)(n.td,{children:"123456789, -123456789"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"bool"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:":active<bool\\>"})}),(0,a.jsx)(n.td,{children:"true,false"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"guid"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:":id<guid\\>"})}),(0,a.jsx)(n.td,{children:"CD2C1638-1638-72D5-1638-DEADBEEF1638"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"float"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:":weight<float\\>"})}),(0,a.jsx)(n.td,{children:"1.234, -1,001.01e8"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"minLen(value)"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:":username<minLen(4)\\>"})}),(0,a.jsx)(n.td,{children:"Test (must be at least 4 characters)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"maxLen(value)"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:":filename<maxLen(8)\\>"})}),(0,a.jsx)(n.td,{children:"MyFile (must be no more than 8 characters"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"len(length)"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:":filename<len(12)\\>"})}),(0,a.jsx)(n.td,{children:"somefile.txt (exactly 12 characters)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"min(value)"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:":age<min(18)\\>"})}),(0,a.jsx)(n.td,{children:"19 (Integer value must be at least 18)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"max(value)"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:":age<max(120)\\>"})}),(0,a.jsx)(n.td,{children:"91 (Integer value must be no more than 120)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"range(min,max)"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:":age<range(18,120)\\>"})}),(0,a.jsx)(n.td,{children:"91 (Integer value must be at least 18 but no more than 120)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"alpha"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:":name<alpha\\>"})}),(0,a.jsx)(n.td,{children:"Rick (String must consist of one or more alphabetical characters, a-z and case-insensitive)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"datetime"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:":dob<datetime(2006\\\\\\\\-01\\\\\\\\-02)\\>"})}),(0,a.jsx)(n.td,{children:"2005-11-01"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"regex(expression)"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:":date<regex(\\\\d{4}-\\\\d{2}-\\\\d{2})\\>"})}),(0,a.jsx)(n.td,{children:"2022-08-27 (Must match regular expression)"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Examples"})}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(o.Z,{value:"single-constraint",label:"Single Constraint",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'app.Get("/:test<min(5)>", func(c *fiber.Ctx) error {\n  return c.SendString(c.Params("test"))\n})\n\n// curl -X GET http://localhost:3000/12\n// 12\n\n// curl -X GET http://localhost:3000/1\n// Cannot GET /1\n'})})}),(0,a.jsxs)(o.Z,{value:"multiple-constraints",label:"Multiple Constraints",children:[(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.code,{children:";"})," for multiple constraints."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'app.Get("/:test<min(100);maxLen(5)>", func(c *fiber.Ctx) error {\n  return c.SendString(c.Params("test"))\n})\n\n// curl -X GET http://localhost:3000/120000\n// Cannot GET /120000\n\n// curl -X GET http://localhost:3000/1\n// Cannot GET /1\n\n// curl -X GET http://localhost:3000/250\n// 250\n'})})]}),(0,a.jsxs)(o.Z,{value:"regex-constraint",label:"Regex Constraint",children:[(0,a.jsx)(n.p,{children:"Fiber precompiles regex query when to register routes. So there're no performance overhead for regex constraint."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'app.Get(`/:date<regex(\\d{4}-\\d{2}-\\d{2})>`, func(c *fiber.Ctx) error {\n  return c.SendString(c.Params("date"))\n})\n\n// curl -X GET http://localhost:3000/125\n// Cannot GET /125\n\n// curl -X GET http://localhost:3000/test\n// Cannot GET /test\n\n// curl -X GET http://localhost:3000/2022-08-27\n// 2022-08-27\n'})})]})]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["You should use ",(0,a.jsx)(n.code,{children:"\\\\"})," before routing-specific characters when to use datetime constraint (",(0,a.jsx)(n.code,{children:"*"}),", ",(0,a.jsx)(n.code,{children:"+"}),", ",(0,a.jsx)(n.code,{children:"?"}),", ",(0,a.jsx)(n.code,{children:":"}),", ",(0,a.jsx)(n.code,{children:"/"}),", ",(0,a.jsx)(n.code,{children:"<"}),", ",(0,a.jsx)(n.code,{children:">"}),", ",(0,a.jsx)(n.code,{children:";"}),", ",(0,a.jsx)(n.code,{children:"("}),", ",(0,a.jsx)(n.code,{children:")"}),"), to avoid wrong parsing."]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Optional Parameter Example"})}),"\n",(0,a.jsx)(n.p,{children:"You can impose constraints on optional parameters as well."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'app.Get("/:test<int>?", func(c *fiber.Ctx) error {\n  return c.SendString(c.Params("test"))\n})\n// curl -X GET http://localhost:3000/42\n// 42\n// curl -X GET http://localhost:3000/\n//\n// curl -X GET http://localhost:3000/7.0\n// Cannot GET /7.0\n'})}),"\n",(0,a.jsx)(n.h2,{id:"middleware",children:"Middleware"}),"\n",(0,a.jsxs)(n.p,{children:["Functions that are designed to make changes to the request or response are called ",(0,a.jsx)(n.strong,{children:"middleware functions"}),". The ",(0,a.jsx)(n.a,{href:"/api/ctx#next",children:"Next"})," is a ",(0,a.jsx)(n.strong,{children:"Fiber"})," router function, when called, executes the ",(0,a.jsx)(n.strong,{children:"next"})," function that ",(0,a.jsx)(n.strong,{children:"matches"})," the current route."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example of a middleware function"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'app.Use(func(c *fiber.Ctx) error {\n  // Set a custom header on all responses:\n  c.Set("X-Custom-Header", "Hello, World")\n\n  // Go to next middleware:\n  return c.Next()\n})\n\napp.Get("/", func(c *fiber.Ctx) error {\n  return c.SendString("Hello, World!")\n})\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Use"})," method path is a ",(0,a.jsx)(n.strong,{children:"mount"}),", or ",(0,a.jsx)(n.strong,{children:"prefix"})," path, and limits middleware to only apply to any paths requested that begin with it."]}),"\n",(0,a.jsx)(n.h3,{id:"constraints-on-adding-routes-dynamically",children:"Constraints on Adding Routes Dynamically"}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"Adding routes dynamically after the application has started is not supported due to design and performance considerations. Make sure to define all your routes before the application starts."})}),"\n",(0,a.jsx)(n.h2,{id:"grouping",children:"Grouping"}),"\n",(0,a.jsxs)(n.p,{children:["If you have many endpoints, you can organize your routes using ",(0,a.jsx)(n.code,{children:"Group"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api", middleware) // /api\n\n  v1 := api.Group("/v1", middleware)   // /api/v1\n  v1.Get("/list", handler)             // /api/v1/list\n  v1.Get("/user", handler)             // /api/v1/user\n\n  v2 := api.Group("/v2", middleware)   // /api/v2\n  v2.Get("/list", handler)             // /api/v2/list\n  v2.Get("/user", handler)             // /api/v2/user\n\n  log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["More information about this in our ",(0,a.jsx)(n.a,{href:"/guide/grouping",children:"Grouping Guide"})]})]})}function x(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},72389:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"partials/routing/route-handlers","title":"Route Handlers","description":"Registers a route bound to a specific HTTP method.","source":"@site/versioned_docs/version-v2.x/partials/routing/handler.md","sourceDirName":"partials/routing","slug":"/partials/routing/route-handlers","permalink":"/partials/routing/route-handlers","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1733317037000,"frontMatter":{"id":"route-handlers","title":"Route Handlers"}}'),a=r("85893"),s=r("50065");let i={id:"route-handlers",title:"Route Handlers"},o=void 0,l={},c=[];function d(e){let n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Registers a route bound to a specific ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",children:"HTTP method"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Signatures"',children:"// HTTP methods\nfunc (app *App) Get(path string, handlers ...Handler) Router\nfunc (app *App) Head(path string, handlers ...Handler) Router\nfunc (app *App) Post(path string, handlers ...Handler) Router\nfunc (app *App) Put(path string, handlers ...Handler) Router\nfunc (app *App) Delete(path string, handlers ...Handler) Router\nfunc (app *App) Connect(path string, handlers ...Handler) Router\nfunc (app *App) Options(path string, handlers ...Handler) Router\nfunc (app *App) Trace(path string, handlers ...Handler) Router\nfunc (app *App) Patch(path string, handlers ...Handler) Router\n\n// Add allows you to specifiy a method as value\nfunc (app *App) Add(method, path string, handlers ...Handler) Router\n\n// All will register the route on all HTTP methods\n// Almost the same as app.Use but not bound to prefixes\nfunc (app *App) All(path string, handlers ...Handler) Router\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'// Simple GET handler\napp.Get("/api/list", func(c *fiber.Ctx) error {\n  return c.SendString("I\'m a GET request!")\n})\n\n// Simple POST handler\napp.Post("/api/register", func(c *fiber.Ctx) error {\n  return c.SendString("I\'m a POST request!")\n})\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Use"})," can be used for middleware packages and prefix catchers. These routes will only match the beginning of each path i.e. ",(0,a.jsx)(n.code,{children:"/john"})," will match ",(0,a.jsx)(n.code,{children:"/john/doe"}),", ",(0,a.jsx)(n.code,{children:"/johnnnnn"})," etc"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Use(args ...interface{}) Router\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'// Match any request\napp.Use(func(c *fiber.Ctx) error {\n    return c.Next()\n})\n\n// Match request starting with /api\napp.Use("/api", func(c *fiber.Ctx) error {\n    return c.Next()\n})\n\n// Match requests starting with /api or /home (multiple-prefix support)\napp.Use([]string{"/api", "/home"}, func(c *fiber.Ctx) error {\n    return c.Next()\n})\n\n// Attach multiple handlers \napp.Use("/api", func(c *fiber.Ctx) error {\n  c.Set("X-Custom-Header", random.String(32))\n    return c.Next()\n}, func(c *fiber.Ctx) error {\n    return c.Next()\n})\n'})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},5525:function(e,n,r){r.d(n,{Z:()=>i});var t=r("85893");r("67294");var a=r("67026");let s="tabItem_Ymn6";function i(e){let{children:n,hidden:r,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s,i),hidden:r,children:n})}},47902:function(e,n,r){r.d(n,{Z:()=>v});var t=r("85893"),a=r("67294"),s=r("67026"),i=r("69599"),o=r("16550"),l=r("32000"),c=r("4520"),d=r("38341"),h=r("76009");function u(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var x=r("7227");let m="tabList__CuJ",g="tabItem_LNqP";function f(e){let{className:n,block:r,selectedValue:a,selectValue:o,tabValues:l}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),h=e=>{let n=e.currentTarget,r=l[c.indexOf(n)].value;r!==a&&(d(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{let r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:l.map(e=>{let{value:n,label:r,attributes:i}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:u,onClick:h,...i,className:(0,s.Z)("tabs__item",g,i?.className,{"tabs__item--active":a===n}),children:r??n},n)})})}function j(e){let{lazy:n,children:r,selectedValue:i}=e,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=o.find(e=>e.props.value===i);return e?(0,a.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:o.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,s=function(e){let{values:n,children:r}=e;return(0,a.useMemo)(()=>{let e=n??u(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[i,x]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:s})),[m,g]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r}),i=(0,c._X)(s);return[i,(0,a.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})},[s,t])]}({queryString:r,groupId:t}),[f,j]=function(e){var n;let{groupId:r}=e;let t=(n=r)?`docusaurus.tab.${n}`:null,[s,i]=(0,h.Nk)(t);return[s,(0,a.useCallback)(e=>{if(!!t)i.set(e)},[t,i])]}({groupId:t}),b=(()=>{let e=m??f;return p({value:e,tabValues:s})?e:null})();return(0,l.Z)(()=>{b&&x(b)},[b]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);x(e),g(e),j(e)},[g,j,s]),tabValues:s}}(e);return(0,t.jsxs)("div",{className:(0,s.Z)("tabs-container",m),children:[(0,t.jsx)(f,{...n,...e}),(0,t.jsx)(j,{...n,...e})]})}function v(e){let n=(0,x.Z)();return(0,t.jsx)(b,{...e,children:u(e.children)},String(n))}},50065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return i}});var t=r(67294);let a={},s=t.createContext(a);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);