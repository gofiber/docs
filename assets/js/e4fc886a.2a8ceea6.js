"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[47210,29742],{36296:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=t(74848),a=t(28453),s=t(11470),i=t(19365),o=t(66805);const l={id:"routing",title:"\ud83d\udd0c Routing",description:"Routing refers to how an application's endpoints (URIs) respond to client requests.",sidebar_position:1,toc_max_heading_level:4},c=void 0,d={id:"guide/routing",title:"\ud83d\udd0c Routing",description:"Routing refers to how an application's endpoints (URIs) respond to client requests.",source:"@site/docs/core/guide/routing.md",sourceDirName:"guide",slug:"/guide/routing",permalink:"/next/guide/routing",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/guide/routing.md",tags:[],version:"current",lastUpdatedAt:1726080262e3,sidebarPosition:1,frontMatter:{id:"routing",title:"\ud83d\udd0c Routing",description:"Routing refers to how an application's endpoints (URIs) respond to client requests.",sidebar_position:1,toc_max_heading_level:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd6 Guide",permalink:"/next/category/-guide"},next:{title:"\ud83c\udfad Grouping",permalink:"/next/guide/grouping"}},u={},h=[{value:"Handlers",id:"handlers",level:2},...o.toc,{value:"Paths",id:"paths",level:2},{value:"Examples of route paths based on strings",id:"examples-of-route-paths-based-on-strings",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example of define routes with route parameters",id:"example-of-define-routes-with-route-parameters",level:3},{value:"Constraints",id:"constraints",level:3},{value:"Examples",id:"examples",level:4},{value:"Optional Parameter Example",id:"optional-parameter-example",level:4},{value:"Custom Constraint",id:"custom-constraint",level:4},{value:"Middleware",id:"middleware",level:2},{value:"Example of a middleware function",id:"example-of-a-middleware-function",level:3},{value:"Constraints on Adding Routes Dynamically",id:"constraints-on-adding-routes-dynamically",level:3},{value:"Grouping",id:"grouping",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"handlers",children:"Handlers"}),"\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsx)(n.h2,{id:"paths",children:"Paths"}),"\n",(0,r.jsxs)(n.p,{children:["Route paths, combined with a request method, define the endpoints at which requests can be made. Route paths can be ",(0,r.jsx)(n.strong,{children:"strings"})," or ",(0,r.jsx)(n.strong,{children:"string patterns"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"examples-of-route-paths-based-on-strings",children:"Examples of route paths based on strings"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// This route path will match requests to the root route, "/":\napp.Get("/", func(c fiber.Ctx) error {\n    return c.SendString("root")\n})\n\n// This route path will match requests to "/about":\napp.Get("/about", func(c fiber.Ctx) error {\n    return c.SendString("about")\n})\n\n// This route path will match requests to "/random.txt":\napp.Get("/random.txt", func(c fiber.Ctx) error {\n    return c.SendString("random.txt")\n})\n'})}),"\n",(0,r.jsx)(n.p,{children:"As with the expressJs framework, the order of the route declaration plays a role.\nWhen a request is received, the routes are checked in the order in which they are declared."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"So please be careful to write routes with variable parameters after the routes that contain fixed parts, so that these variable parts do not match instead and unexpected behavior occurs."})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["Route parameters are dynamic elements in the route, which are ",(0,r.jsx)(n.strong,{children:"named"})," or ",(0,r.jsx)(n.strong,{children:"not named segments"}),". This segments that are used to capture the values specified at their position in the URL. The obtained values can be retrieved using the ",(0,r.jsx)(n.a,{href:"https://fiber.wiki/context#params",children:"Params"})," function, with the name of the route parameter specified in the path as their respective keys or for unnamed parameters the character(*, +) and the counter of this."]}),"\n",(0,r.jsx)(n.p,{children:"The characters :, +, and * are characters that introduce a parameter."}),"\n",(0,r.jsx)(n.p,{children:"Greedy parameters are indicated by wildcard(*) or plus(+) signs."}),"\n",(0,r.jsx)(n.p,{children:'The routing also offers the possibility to use optional parameters, for the named parameters these are marked with a final "?", unlike the plus sign which is not optional, you can use the wildcard character for a parameter range which is optional and greedy.'}),"\n",(0,r.jsx)(n.h3,{id:"example-of-define-routes-with-route-parameters",children:"Example of define routes with route parameters"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// Parameters\napp.Get("/user/:name/books/:title", func(c fiber.Ctx) error {\n    fmt.Fprintf(c, "%s\\n", c.Params("name"))\n    fmt.Fprintf(c, "%s\\n", c.Params("title"))\n    return nil\n})\n// Plus - greedy - not optional\napp.Get("/user/+", func(c fiber.Ctx) error {\n    return c.SendString(c.Params("+"))\n})\n\n// Optional parameter\napp.Get("/user/:name?", func(c fiber.Ctx) error {\n    return c.SendString(c.Params("name"))\n})\n\n// Wildcard - greedy - optional\napp.Get("/user/*", func(c fiber.Ctx) error {\n    return c.SendString(c.Params("*"))\n})\n\n// This route path will match requests to "/v1/some/resource/name:customVerb", since the parameter character is escaped\napp.Get(`/v1/some/resource/name\\:customVerb`, func(c fiber.Ctx) error {\n    return c.SendString("Hello, Community")\n})\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Since the hyphen (",(0,r.jsx)(n.code,{children:"-"}),") and the dot (",(0,r.jsx)(n.code,{children:"."}),") are interpreted literally, they can be used along with route parameters for useful purposes."]})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["All special parameter characters can also be escaped with ",(0,r.jsx)(n.code,{children:'"\\\\"'})," and lose their value, so you can use them in the route if you want, like in the custom methods of the ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/apis/design/custom_methods",children:"google api design guide"}),". It's recommended to use backticks ",(0,r.jsx)(n.code,{children:"`"})," because in go's regex documentation, they always use backticks to make sure it is unambiguous and the escape character doesn't interfere with regex patterns in an unexpected way."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// http://localhost:3000/plantae/prunus.persica\napp.Get("/plantae/:genus.:species", func(c fiber.Ctx) error {\n    fmt.Fprintf(c, "%s.%s\\n", c.Params("genus"), c.Params("species"))\n    return nil // prunus.persica\n})\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// http://localhost:3000/flights/LAX-SFO\napp.Get("/flights/:from-:to", func(c fiber.Ctx) error {\n    fmt.Fprintf(c, "%s-%s\\n", c.Params("from"), c.Params("to"))\n    return nil // LAX-SFO\n})\n'})}),"\n",(0,r.jsx)(n.p,{children:"Our intelligent router recognizes that the introductory parameter characters should be part of the request route in this case and can process them as such."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// http://localhost:3000/shop/product/color:blue/size:xs\napp.Get("/shop/product/color::color/size::size", func(c fiber.Ctx) error {\n    fmt.Fprintf(c, "%s:%s\\n", c.Params("color"), c.Params("size"))\n    return nil // blue:xs\n})\n'})}),"\n",(0,r.jsx)(n.p,{children:"In addition, several parameters in a row and several unnamed parameter characters in the route, such as the wildcard or plus character, are possible, which greatly expands the possibilities of the router for the user."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// GET /@v1\n// Params: "sign" -> "@", "param" -> "v1"\napp.Get("/:sign:param", handler)\n\n// GET /api-v1\n// Params: "name" -> "v1" \napp.Get("/api-:name", handler)\n\n// GET /customer/v1/cart/proxy\n// Params: "*1" -> "customer/", "*2" -> "/cart"\napp.Get("/*v1*/proxy", handler)\n\n// GET /v1/brand/4/shop/blue/xs\n// Params: "*1" -> "brand/4", "*2" -> "blue/xs"\napp.Get("/v1/*/shop/*", handler)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["We have adapted the routing strongly to the express routing, but currently without the possibility of the regular expressions, because they are quite slow. The possibilities can be tested with version 0.1.7 (express 4) in the online ",(0,r.jsx)(n.a,{href:"http://forbeslindesay.github.io/express-route-tester/",children:"Express route tester"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"constraints",children:"Constraints"}),"\n",(0,r.jsxs)(n.p,{children:["Route constraints execute when a match has occurred to the incoming URL and the URL path is tokenized into route values by parameters. The feature was introduced in ",(0,r.jsx)(n.code,{children:"v2.37.0"})," and inspired by ",(0,r.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/routing?view=aspnetcore-6.0#route-constraints",children:".NET Core"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Constraints aren't validation for parameters. If constraints aren't valid for a parameter value, Fiber returns ",(0,r.jsx)(n.strong,{children:"404 handler"}),"."]})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constraint"}),(0,r.jsx)(n.th,{children:"Example"}),(0,r.jsx)(n.th,{children:"Example matches"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:":id<int\\>"})}),(0,r.jsx)(n.td,{children:"123456789, -123456789"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bool"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:":active<bool\\>"})}),(0,r.jsx)(n.td,{children:"true,false"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"guid"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:":id<guid\\>"})}),(0,r.jsx)(n.td,{children:"CD2C1638-1638-72D5-1638-DEADBEEF1638"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:":weight<float\\>"})}),(0,r.jsx)(n.td,{children:"1.234, -1,001.01e8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"minLen(value)"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:":username<minLen(4)\\>"})}),(0,r.jsx)(n.td,{children:"Test (must be at least 4 characters)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxLen(value)"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:":filename<maxLen(8)\\>"})}),(0,r.jsx)(n.td,{children:"MyFile (must be no more than 8 characters"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"len(length)"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:":filename<len(12)\\>"})}),(0,r.jsx)(n.td,{children:"somefile.txt (exactly 12 characters)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"min(value)"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:":age<min(18)\\>"})}),(0,r.jsx)(n.td,{children:"19 (Integer value must be at least 18)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"max(value)"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:":age<max(120)\\>"})}),(0,r.jsx)(n.td,{children:"91 (Integer value must be no more than 120)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"range(min,max)"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:":age<range(18,120)\\>"})}),(0,r.jsx)(n.td,{children:"91 (Integer value must be at least 18 but no more than 120)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"alpha"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:":name<alpha\\>"})}),(0,r.jsx)(n.td,{children:"Rick (String must consist of one or more alphabetical characters, a-z and case-insensitive)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"datetime"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:":dob<datetime(2006\\\\\\\\-01\\\\\\\\-02)\\>"})}),(0,r.jsx)(n.td,{children:"2005-11-01"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"regex(expression)"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:":date<regex(\\\\d{4}-\\\\d{2}-\\\\d{2})\\>"})}),(0,r.jsx)(n.td,{children:"2022-08-27 (Must match regular expression)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"single-constraint",label:"Single Constraint",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'app.Get("/:test<min(5)>", func(c fiber.Ctx) error {\n    return c.SendString(c.Params("test"))\n})\n\n// curl -X GET http://localhost:3000/12\n// 12\n\n// curl -X GET http://localhost:3000/1\n// Cannot GET /1\n'})})}),(0,r.jsxs)(i.A,{value:"multiple-constraints",label:"Multiple Constraints",children:[(0,r.jsxs)(n.p,{children:["You can use ",(0,r.jsx)(n.code,{children:";"})," for multiple constraints."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'app.Get("/:test<min(100);maxLen(5)>", func(c fiber.Ctx) error {\n    return c.SendString(c.Params("test"))\n})\n\n// curl -X GET http://localhost:3000/120000\n// Cannot GET /120000\n\n// curl -X GET http://localhost:3000/1\n// Cannot GET /1\n\n// curl -X GET http://localhost:3000/250\n// 250\n'})})]}),(0,r.jsxs)(i.A,{value:"regex-constraint",label:"Regex Constraint",children:[(0,r.jsx)(n.p,{children:"Fiber precompiles regex query when to register routes. So there're no performance overhead for regex constraint."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'app.Get(`/:date<regex(\\d{4}-\\d{2}-\\d{2})>`, func(c fiber.Ctx) error {\n    return c.SendString(c.Params("date"))\n})\n\n// curl -X GET http://localhost:3000/125\n// Cannot GET /125\n\n// curl -X GET http://localhost:3000/test\n// Cannot GET /test\n\n// curl -X GET http://localhost:3000/2022-08-27\n// 2022-08-27\n'})})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["You should use ",(0,r.jsx)(n.code,{children:"\\\\"})," before routing-specific characters when to use datetime constraint (",(0,r.jsx)(n.code,{children:"*"}),", ",(0,r.jsx)(n.code,{children:"+"}),", ",(0,r.jsx)(n.code,{children:"?"}),", ",(0,r.jsx)(n.code,{children:":"}),", ",(0,r.jsx)(n.code,{children:"/"}),", ",(0,r.jsx)(n.code,{children:"<"}),", ",(0,r.jsx)(n.code,{children:">"}),", ",(0,r.jsx)(n.code,{children:";"}),", ",(0,r.jsx)(n.code,{children:"("}),", ",(0,r.jsx)(n.code,{children:")"}),"), to avoid wrong parsing."]})}),"\n",(0,r.jsx)(n.h4,{id:"optional-parameter-example",children:"Optional Parameter Example"}),"\n",(0,r.jsx)(n.p,{children:"You can impose constraints on optional parameters as well."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'app.Get("/:test<int>?", func(c fiber.Ctx) error {\n  return c.SendString(c.Params("test"))\n})\n// curl -X GET http://localhost:3000/42\n// 42\n// curl -X GET http://localhost:3000/\n//\n// curl -X GET http://localhost:3000/7.0\n// Cannot GET /7.0\n'})}),"\n",(0,r.jsx)(n.h4,{id:"custom-constraint",children:"Custom Constraint"}),"\n",(0,r.jsxs)(n.p,{children:["Custom constraints can be added to Fiber using the ",(0,r.jsx)(n.code,{children:"app.RegisterCustomConstraint"})," method. Your constraints have to be compatible with the ",(0,r.jsx)(n.code,{children:"CustomConstraint"})," interface."]}),"\n",(0,r.jsx)(n.p,{children:"It is a good idea to add external constraints to your project once you want to add more specific rules to your routes.\nFor example, you can add a constraint to check if a parameter is a valid ULID."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"// CustomConstraint is an interface for custom constraints\ntype CustomConstraint interface {\n    // Name returns the name of the constraint.\n    // This name is used in the constraint matching.\n    Name() string\n\n    // Execute executes the constraint.\n    // It returns true if the constraint is matched and right.\n    // param is the parameter value to check.\n    // args are the constraint arguments.\n    Execute(param string, args ...string) bool\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can check the example below:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'type UlidConstraint struct {\n    fiber.CustomConstraint\n}\n\nfunc (*UlidConstraint) Name() string {\n    return "ulid"\n}\n\nfunc (*UlidConstraint) Execute(param string, args ...string) bool {\n    _, err := ulid.Parse(param)\n    return err == nil\n}\n\nfunc main() {\n    app := fiber.New()\n    app.RegisterCustomConstraint(&UlidConstraint{})\n\n    app.Get("/login/:id<ulid>", func(c fiber.Ctx) error {\n        return c.SendString("...")\n    })\n\n    app.Listen(":3000")\n\n    // /login/01HK7H9ZE5BFMK348CPYP14S0Z -> 200\n    // /login/12345 -> 404\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"middleware",children:"Middleware"}),"\n",(0,r.jsxs)(n.p,{children:["Functions that are designed to make changes to the request or response are called ",(0,r.jsx)(n.strong,{children:"middleware functions"}),". The ",(0,r.jsx)(n.a,{href:"/next/api/ctx#next",children:"Next"})," is a ",(0,r.jsx)(n.strong,{children:"Fiber"})," router function, when called, executes the ",(0,r.jsx)(n.strong,{children:"next"})," function that ",(0,r.jsx)(n.strong,{children:"matches"})," the current route."]}),"\n",(0,r.jsx)(n.h3,{id:"example-of-a-middleware-function",children:"Example of a middleware function"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'app.Use(func(c fiber.Ctx) error {\n    // Set a custom header on all responses:\n    c.Set("X-Custom-Header", "Hello, World")\n\n    // Go to next middleware:\n    return c.Next()\n})\n\napp.Get("/", func(c fiber.Ctx) error {\n    return c.SendString("Hello, World!")\n})\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Use"})," method path is a ",(0,r.jsx)(n.strong,{children:"mount"}),", or ",(0,r.jsx)(n.strong,{children:"prefix"})," path, and limits middleware to only apply to any paths requested that begin with it."]}),"\n",(0,r.jsx)(n.h3,{id:"constraints-on-adding-routes-dynamically",children:"Constraints on Adding Routes Dynamically"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"Adding routes dynamically after the application has started is not supported due to design and performance considerations. Make sure to define all your routes before the application starts."})}),"\n",(0,r.jsx)(n.h2,{id:"grouping",children:"Grouping"}),"\n",(0,r.jsxs)(n.p,{children:["If you have many endpoints, you can organize your routes using ",(0,r.jsx)(n.code,{children:"Group"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func main() {\n    app := fiber.New()\n\n    api := app.Group("/api", middleware) // /api\n\n    v1 := api.Group("/v1", middleware)   // /api/v1\n    v1.Get("/list", handler)             // /api/v1/list\n    v1.Get("/user", handler)             // /api/v1/user\n\n    v2 := api.Group("/v2", middleware)   // /api/v2\n    v2.Get("/list", handler)             // /api/v2/list\n    v2.Get("/user", handler)             // /api/v2/user\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["More information about this in our ",(0,r.jsx)(n.a,{href:"/next/guide/grouping",children:"Grouping Guide"})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},66805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(74848),a=t(28453),s=t(55604);const i={id:"route-handlers",title:"Route Handlers"},o=void 0,l={id:"partials/routing/route-handlers",title:"Route Handlers",description:"Registers a route bound to a specific HTTP method.",source:"@site/docs/core/partials/routing/handler.md",sourceDirName:"partials/routing",slug:"/partials/routing/route-handlers",permalink:"/next/partials/routing/route-handlers",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/partials/routing/handler.md",tags:[],version:"current",lastUpdatedAt:1726080262e3,frontMatter:{id:"route-handlers",title:"Route Handlers"}},c={},d=[];function u(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Registers a route bound to a specific ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",children:"HTTP method"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signatures"',children:"// HTTP methods\nfunc (app *App) Get(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Head(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Post(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Put(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Delete(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Connect(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Options(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Trace(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Patch(path string, handler Handler, middlewares ...Handler) Router\n\n// Add allows you to specify a method as value\nfunc (app *App) Add(method, path string, handler Handler, middlewares ...Handler) Router\n\n// All will register the route on all HTTP methods\n// Almost the same as app.Use but not bound to prefixes\nfunc (app *App) All(path string, handler Handler, middlewares ...Handler) Router\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'// Simple GET handler\napp.Get("/api/list", func(c fiber.Ctx) error {\n    return c.SendString("I\'m a GET request!")\n})\n\n// Simple POST handler\napp.Post("/api/register", func(c fiber.Ctx) error {\n    return c.SendString("I\'m a POST request!")\n})\n'})}),"\n",(0,r.jsx)(s.A,{id:"use",children:(0,r.jsx)(n.strong,{children:"Use"})}),"\n",(0,r.jsxs)(n.p,{children:["Can be used for middleware packages and prefix catchers. These routes will only match the beginning of each path i.e. ",(0,r.jsx)(n.code,{children:"/john"})," will match ",(0,r.jsx)(n.code,{children:"/john/doe"}),", ",(0,r.jsx)(n.code,{children:"/johnnnnn"})," etc"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Use(args ...any) Router\n\n// Different usage variations\nfunc (app *App) Use(handler Handler, middlewares ...Handler) Router\nfunc (app *App) Use(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Use(paths []string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Use(path string, app *App) Router\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'// Match any request\napp.Use(func(c fiber.Ctx) error {\n    return c.Next()\n})\n\n// Match request starting with /api\napp.Use("/api", func(c fiber.Ctx) error {\n    return c.Next()\n})\n\n// Match requests starting with /api or /home (multiple-prefix support)\napp.Use([]string{"/api", "/home"}, func(c fiber.Ctx) error {\n    return c.Next()\n})\n\n// Attach multiple handlers \napp.Use("/api", func(c fiber.Ctx) error {\n    c.Set("X-Custom-Header", random.String(32))\n    return c.Next()\n}, func(c fiber.Ctx) error {\n    return c.Next()\n})\n\n// Mount a sub-app\napp.Use("/api", api)\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),a=t(34164),s=t(23104),i=t(56347),o=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:t,groupId:a}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),f=(()=>{const e=c??x;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(c(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,j.jsx)(w,{...e,children:u(e.children)},String(n))}},55604:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(28774),a=t(63427),s=t(74848);function i(e){let{children:n,id:t}=e;return(0,a.A)().collectAnchor(t),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{id:t,className:"reference anchor",children:[n,(0,s.jsx)(r.A,{to:"#"+t,className:"hash-link"})]})})}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);