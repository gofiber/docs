"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["72131"],{45491:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>o});var s=JSON.parse('{"id":"getting-started","title":"\uD83D\uDCD6 Getting started","description":"Fiber is an Express inspired web framework build on top of Fasthttp, the fastest HTTP engine for Go. Designed to ease things up for fast development with zero memory allocation and performance in mind.","source":"@site/versioned_docs/version-v1.x/intro.md","sourceDirName":".","slug":"/","permalink":"/v1.x/","draft":false,"unlisted":false,"tags":[],"version":"v1.x","lastUpdatedAt":1732648136000,"sidebarPosition":1,"frontMatter":{"slug":"/","id":"getting-started","title":"\uD83D\uDCD6 Getting started","sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"API","permalink":"/v1.x/category/api"}}'),r=t("85893"),i=t("50065");let o={slug:"/",id:"getting-started",title:"\uD83D\uDCD6 Getting started",sidebar_position:1},l=void 0,a={},c=[{value:"Installation",id:"installation",level:2},{value:"Zero Allocation",id:"zero-allocation",level:2},{value:"Hello, World!",id:"hello-world",level:2},{value:"Basic routing",id:"basic-routing",level:2},{value:"Static files",id:"static-files",level:2},{value:"Note",id:"note",level:2}];function d(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Fiber"})," is an ",(0,r.jsx)(n.a,{href:"https://github.com/expressjs/express",children:"Express"})," inspired ",(0,r.jsx)(n.strong,{children:"web framework"})," build on top of ",(0,r.jsx)(n.a,{href:"https://github.com/valyala/fasthttp",children:"Fasthttp"}),", the ",(0,r.jsx)(n.strong,{children:"fastest"})," HTTP engine for ",(0,r.jsx)(n.a,{href:"https://golang.org/doc/",children:"Go"}),". Designed to ",(0,r.jsx)(n.strong,{children:"ease"})," things up for ",(0,r.jsx)(n.strong,{children:"fast"})," development with ",(0,r.jsx)(n.strong,{children:"zero memory allocation"})," and ",(0,r.jsx)(n.strong,{children:"performance"})," in mind."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["These docs are for the old ",(0,r.jsx)(n.strong,{children:"Fiber v1"}),", you can view the ",(0,r.jsx)(n.strong,{children:"v2"})," docs ",(0,r.jsx)(n.a,{href:"https://docs.gofiber.io",children:(0,r.jsx)(n.strong,{children:"here"})}),".",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"v2.0.0"})," was released on ",(0,r.jsx)(n.strong,{children:"September 15th, 2020"}),", and contains numerous changes regarding performance and API design."]})}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.p,{children:["First of all, ",(0,r.jsx)(n.a,{href:"https://golang.org/dl/",children:"download"})," and install Go. ",(0,r.jsx)(n.code,{children:"1.11"})," or higher is required."]}),"\n",(0,r.jsxs)(n.p,{children:["Installation is done using the ",(0,r.jsx)(n.a,{href:"https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them",children:(0,r.jsx)(n.code,{children:"go get"})})," command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go get -u github.com/gofiber/fiber\n"})}),"\n",(0,r.jsx)(n.h2,{id:"zero-allocation",children:"Zero Allocation"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Some values returned from ",(0,r.jsx)(n.a,{href:"api/ctx",children:(0,r.jsx)(n.strong,{children:"fiber.Ctx"})})," are ",(0,r.jsx)(n.strong,{children:"not"})," immutable by default"]})}),"\n",(0,r.jsxs)(n.p,{children:["Because fiber is optimized for ",(0,r.jsx)(n.strong,{children:"high-performance"}),", values returned from ",(0,r.jsx)(n.a,{href:"api/ctx",children:(0,r.jsx)(n.strong,{children:"fiber.Ctx"})})," are ",(0,r.jsx)(n.strong,{children:"not"})," immutable by default and ",(0,r.jsx)(n.strong,{children:"will"})," be re-used across requests. As a rule of thumb, you ",(0,r.jsx)(n.strong,{children:"must"})," only use context values within the handler, and you ",(0,r.jsx)(n.strong,{children:"must not"})," keep any references. As soon as you return from the handler, any values you have obtained from the context will be re-used in future requests and will change below your feet. Here is an example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func handler(c *fiber.Ctx) {\n    result := c.Param("foo") // result is only valid within this method\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If you need to persist such values outside the handler, make copies of their ",(0,r.jsx)(n.strong,{children:"underlying buffer"})," using the ",(0,r.jsx)(n.a,{href:"https://golang.org/pkg/builtin/#copy",children:"copy"})," builtin. Here is an example for persisting a string:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func handler(c *fiber.Ctx) {\n    result := c.Param("foo") // result is only valid within this method\n    newBuffer := make([]byte, len(result))\n    copy(newBuffer, result)\n    newResult := string(newBuffer) // newResult is immutable and valid forever\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["We created a custom ",(0,r.jsx)(n.code,{children:"ImmutableString"})," function that does the above and is available in the ",(0,r.jsx)(n.a,{href:"https://github.com/gofiber/utils",children:"gofiber/utils"})," package."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'app.Get("/:foo", func(c *fiber.Ctx) {\n    result := utils.ImmutableString(c.Param("foo")) \n    // result is now immutable\n})\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Alternatively, you can also use the",(0,r.jsxs)(n.a,{href:"api/app#settings",children:[" ",(0,r.jsx)(n.strong,{children:"Immutable setting"})]}),". It will make all values returned from the context immutable, allowing you to persist them anywhere. Of course, this comes at the cost of performance."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information, please check ",(0,r.jsx)(n.a,{href:"https://github.com/gofiber/fiber/issues/426",children:(0,r.jsx)(n.strong,{children:"#426"})})," ",(0,r.jsx)(n.strong,{children:"and"})," ",(0,r.jsx)(n.a,{href:"https://github.com/gofiber/fiber/issues/185",children:(0,r.jsx)(n.strong,{children:"#185"})}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"hello-world",children:"Hello, World!"}),"\n",(0,r.jsxs)(n.p,{children:["Embedded below is essentially the most straightforward ",(0,r.jsx)(n.strong,{children:"Fiber"})," app, which you can create."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport "github.com/gofiber/fiber"\n\nfunc main() {\n  app := fiber.New()\n\n  app.Get("/", func(c *fiber.Ctx) {\n    c.Send("Hello, World!")\n  })\n\n  app.Listen(3000)\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"go run server.go\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Browse to ",(0,r.jsx)(n.code,{children:"http://localhost:3000,"})," and you should see ",(0,r.jsx)(n.code,{children:"Hello, World!"})," on the page."]}),"\n",(0,r.jsx)(n.h2,{id:"basic-routing",children:"Basic routing"}),"\n",(0,r.jsx)(n.p,{children:"Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, PUT, POST and so on)."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Each route can have ",(0,r.jsx)(n.strong,{children:"multiple handler functions"}),", that is executed when the route is matched."]})}),"\n",(0,r.jsx)(n.p,{children:"Route definition takes the following structures:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"// Function signature\napp.Method(path string, ...func(*fiber.Ctx))\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"app"})," is an instance of ",(0,r.jsx)(n.strong,{children:"Fiber"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Method"})," is an ",(0,r.jsx)(n.a,{href:"https://fiber.wiki/application#methods",children:"HTTP request method"}),", in capitalization: ",(0,r.jsx)(n.code,{children:"Get"}),", ",(0,r.jsx)(n.code,{children:"Put"}),", ",(0,r.jsx)(n.code,{children:"Post"}),", etc."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"path"})," is a virtual path on the server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"func(*fiber.Ctx)"})," is a callback function containing the ",(0,r.jsx)(n.a,{href:"https://fiber.wiki/context",children:"Context"})," executed when the route is matched."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Simple route"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// Respond with "Hello, World!" on root path, "/"\napp.Get("/", func(c *fiber.Ctx) {\n  c.Send("Hello, World!")\n})\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// GET http://localhost:8080/hello%20world\n\napp.Get("/:value", func(c *fiber.Ctx) {\n  c.Send("Get request with value: " + c.Params("value"))\n  // => Get request with value: hello world\n})\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Optional parameter"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// GET http://localhost:3000/john\n\napp.Get("/:name?", func(c *fiber.Ctx) {\n  if c.Params("name") != "" {\n    c.Send("Hello " + c.Params("name"))\n    // => Hello john\n  } else {\n    c.Send("Where is john?")\n  }\n})\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Wildcards"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// GET http://localhost:3000/api/user/john\n\napp.Get("/api/*", func(c *fiber.Ctx) {\n  c.Send("API path: " + c.Params("*"))\n  // => API path: user/john\n})\n'})}),"\n",(0,r.jsx)(n.h2,{id:"static-files",children:"Static files"}),"\n",(0,r.jsxs)(n.p,{children:["To serve static files such as ",(0,r.jsx)(n.strong,{children:"images"}),", ",(0,r.jsx)(n.strong,{children:"CSS"}),", and ",(0,r.jsx)(n.strong,{children:"JavaScript"})," files, replace your function handler with a file or directory string."]}),"\n",(0,r.jsx)(n.p,{children:"Function signature:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"app.Static(prefix, root string)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Use the following code to serve files in a directory named ",(0,r.jsx)(n.code,{children:"./public"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'app := fiber.New()\n\napp.Static("/", "./public") \n\napp.Listen(8080)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Now, you can load the files that are in the ",(0,r.jsx)(n.code,{children:"./public"})," directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"http://localhost:8080/hello.html\nhttp://localhost:8080/js/jquery.js\nhttp://localhost:8080/css/style.css\n"})}),"\n",(0,r.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,r.jsxs)(n.p,{children:["For more information on how to build APIs in Go with Fiber, please check out this excellent article ",(0,r.jsx)(n.a,{href:"https://blog.logrocket.com/express-style-api-go-fiber/",children:"on building an express-style API in Go with Fiber"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var s=t(67294);let r={},i=s.createContext(r);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);