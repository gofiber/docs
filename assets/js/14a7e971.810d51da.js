"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["34857"],{85535:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>p,assets:()=>c,toc:()=>d,frontMatter:()=>a});var r=JSON.parse('{"id":"guide/routing","title":"\uD83D\uDD0C Routing","description":"Routing refers to how an application\'s endpoints (URIs) respond to client requests.","source":"@site/versioned_docs/version-v1.x/guide/routing.md","sourceDirName":"guide","slug":"/guide/routing","permalink":"/v1.x/guide/routing","draft":false,"unlisted":false,"tags":[],"version":"v1.x","lastUpdatedAt":1736149068000,"sidebarPosition":1,"frontMatter":{"id":"routing","title":"\uD83D\uDD0C Routing","description":"Routing refers to how an application\'s endpoints (URIs) respond to client requests.","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Guide","permalink":"/v1.x/category/guide"},"next":{"title":"\uD83C\uDFAD Grouping","permalink":"/v1.x/guide/grouping"}}'),i=t("85893"),s=t("50065");let a={id:"routing",title:"\uD83D\uDD0C Routing",description:"Routing refers to how an application's endpoints (URIs) respond to client requests.",sidebar_position:1},o=void 0,c={},d=[{value:"Paths",id:"paths",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Middleware",id:"middleware",level:2},{value:"Grouping",id:"grouping",level:2}];function l(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"paths",children:"Paths"}),"\n",(0,i.jsxs)(n.p,{children:["Route paths, combined with a request method, define the endpoints at which requests can be made. Route paths can be ",(0,i.jsx)(n.strong,{children:"strings"})," or ",(0,i.jsx)(n.strong,{children:"string patterns"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples of route paths based on strings"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// This route path will match requests to the root route, "/":\napp.Get("/", func(c *fiber.Ctx) {\n  c.Send("root")\n})\n\n// This route path will match requests to "/about":\napp.Get("/about", func(c *fiber.Ctx) {\n  c.Send("about")\n})\n\n// This route path will match requests to "/random.txt":\napp.Get("/random.txt", func(c *fiber.Ctx) {\n  c.Send("random.txt")\n})\n'})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["Route parameters are ",(0,i.jsx)(n.strong,{children:"named URL segments"})," that are used to capture the values specified at their position in the URL. The obtained values can be retrieved using the ",(0,i.jsx)(n.a,{href:"https://fiber.wiki/context#params",children:"Params"})," function, with the name of the route parameter specified in the path as their respective keys."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The name of the route parameter must be made up of ",(0,i.jsx)(n.strong,{children:"characters"})," (",(0,i.jsx)(n.code,{children:"[A-Za-z0-9_]"}),")."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example of define routes with route parameters"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// Parameters\napp.Get("/user/:name/books/:title", func(c *fiber.Ctx) {\n  c.Write(c.Params("name"))\n  c.Write(c.Params("title"))\n})\n// Wildcard\napp.Get("/user/*", func(c *fiber.Ctx) {\n  c.Send(c.Params("*"))\n})\n// Optional parameter\napp.Get("/user/:name?", func(c *fiber.Ctx) {\n  c.Send(c.Params("name"))\n})\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Since the hyphen (",(0,i.jsx)(n.code,{children:"-"}),") and the dot (",(0,i.jsx)(n.code,{children:"."}),") are interpreted literally, they can be used along with route parameters for useful purposes."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// http://localhost:3000/plantae/prunus.persica\napp.Get("/plantae/:genus.:species", func(c *fiber.Ctx) {\n  c.Params("genus")   // prunus\n  c.Params("species") // persica\n})\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// http://localhost:3000/flights/LAX-SFO\napp.Get("/flights/:from-:to", func(c *fiber.Ctx) {\n  c.Params("from")   // LAX\n  c.Params("to")     // SFO\n})\n'})}),"\n",(0,i.jsx)(n.h2,{id:"middleware",children:"Middleware"}),"\n",(0,i.jsxs)(n.p,{children:["Functions that are designed to make changes to the request or response are called ",(0,i.jsx)(n.strong,{children:"middleware functions"}),". The ",(0,i.jsx)(n.a,{href:"https://github.com/gofiber/docs/tree/34729974f7d6c1d8363076e7e88cd71edc34a2ac/context/README.md#next",children:"Next"})," is a ",(0,i.jsx)(n.strong,{children:"Fiber"})," router function, when called, executes the ",(0,i.jsx)(n.strong,{children:"next"})," function that ",(0,i.jsx)(n.strong,{children:"matches"})," the current route."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example of a middleware function"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'app.Use(func(c *fiber.Ctx) {\n  // Set some security headers:\n  c.Set("X-XSS-Protection", "1; mode=block")\n  c.Set("X-Content-Type-Options", "nosniff")\n  c.Set("X-Download-Options", "noopen")\n  c.Set("Strict-Transport-Security", "max-age=5184000")\n  c.Set("X-Frame-Options", "SAMEORIGIN")\n  c.Set("X-DNS-Prefetch-Control", "off")\n\n  // Go to next middleware:\n  c.Next()\n\n  // End of the chain\n  fmt.Println("Bye \uD83D\uDC4B!")\n})\n\napp.Get("/", func(c *fiber.Ctx) {\n  c.Send("Hello, World!")\n})\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Use"})," method path is a ",(0,i.jsx)(n.strong,{children:"mount"}),", or ",(0,i.jsx)(n.strong,{children:"prefix"})," path, and limits middleware to only apply to any paths requested that begin with it."]}),"\n",(0,i.jsx)(n.h2,{id:"grouping",children:"Grouping"}),"\n",(0,i.jsxs)(n.p,{children:["If you have many endpoints, you can organize your routes using ",(0,i.jsx)(n.code,{children:"Group"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api", cors())  // /api\n\n  v1 := api.Group("/v1", mysql())   // /api/v1\n  v1.Get("/list", handler)          // /api/v1/list\n  v1.Get("/user", handler)          // /api/v1/user\n\n  v2 := api.Group("/v2", mongodb()) // /api/v2\n  v2.Get("/list", handler)          // /api/v2/list\n  v2.Get("/user", handler)          // /api/v2/user\n\n  app.Listen(3000)\n}\n'})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var r=t(67294);let i={},s=r.createContext(i);function a(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);