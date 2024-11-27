"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["86158"],{55802:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>o});var i=JSON.parse('{"id":"welcome","title":"\uD83D\uDC4B Welcome","description":"Welcome to the online API documentation for Fiber, complete with examples to help you start building web applications with Fiber right away!","source":"@site/docs/core/intro.md","sourceDirName":".","slug":"/","permalink":"/next/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/intro.md","tags":[],"version":"current","lastUpdatedAt":1732702215000,"sidebarPosition":1,"frontMatter":{"slug":"/","id":"welcome","title":"\uD83D\uDC4B Welcome","sidebar_position":1},"sidebar":"left_sidebar","next":{"title":"\uD83C\uDD95 Whats New in v3","permalink":"/next/whats_new"}}'),t=r("85893"),s=r("50065");let o={slug:"/",id:"welcome",title:"\uD83D\uDC4B Welcome",sidebar_position:1},l=void 0,a={},c=[{value:"Installation",id:"installation",level:3},{value:"Zero Allocation",id:"zero-allocation",level:3},{value:"Hello, World",id:"hello-world",level:3},{value:"Basic Routing",id:"basic-routing",level:3},{value:"Simple Route",id:"simple-route",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Optional Parameter",id:"optional-parameter",level:4},{value:"Wildcards",id:"wildcards",level:4},{value:"Static Files",id:"static-files",level:3}];function d(e){let n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Welcome to the online API documentation for Fiber, complete with examples to help you start building web applications with Fiber right away!"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Fiber"})," is an ",(0,t.jsx)(n.a,{href:"https://github.com/expressjs/express",children:"Express"}),"-inspired ",(0,t.jsx)(n.strong,{children:"web framework"})," built on top of ",(0,t.jsx)(n.a,{href:"https://github.com/valyala/fasthttp",children:"Fasthttp"}),", the ",(0,t.jsx)(n.strong,{children:"fastest"})," HTTP engine for ",(0,t.jsx)(n.a,{href:"https://go.dev/doc/",children:"Go"}),". It is designed to facilitate rapid development with ",(0,t.jsx)(n.strong,{children:"zero memory allocations"})," and a strong focus on ",(0,t.jsx)(n.strong,{children:"performance"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["These docs are for ",(0,t.jsx)(n.strong,{children:"Fiber v3"}),", which was released on ",(0,t.jsx)(n.strong,{children:"Month xx, 202x"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["First, ",(0,t.jsx)(n.a,{href:"https://go.dev/dl/",children:"download"})," and install Go. Version ",(0,t.jsx)(n.code,{children:"1.22"})," or higher is required."]}),"\n",(0,t.jsxs)(n.p,{children:["Installation is done using the ",(0,t.jsx)(n.a,{href:"https://pkg.go.dev/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them",children:(0,t.jsx)(n.code,{children:"go get"})})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/fiber/v3\n"})}),"\n",(0,t.jsx)(n.h3,{id:"zero-allocation",children:"Zero Allocation"}),"\n",(0,t.jsxs)(n.p,{children:["Fiber is optimized for ",(0,t.jsx)(n.strong,{children:"high performance"}),", meaning values returned from ",(0,t.jsx)(n.strong,{children:"fiber.Ctx"})," are ",(0,t.jsx)(n.strong,{children:"not"})," immutable by default and ",(0,t.jsx)(n.strong,{children:"will"})," be reused across requests. As a rule of thumb, you ",(0,t.jsx)(n.strong,{children:"must"})," only use context values within the handler and ",(0,t.jsx)(n.strong,{children:"must not"})," keep any references. Once you return from the handler, any values obtained from the context will be reused in future requests. Here is an example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func handler(c fiber.Ctx) error {\n    // Variable is only valid within this handler\n    result := c.Params("foo") \n\n    // ...\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If you need to persist such values outside the handler, make copies of their ",(0,t.jsx)(n.strong,{children:"underlying buffer"})," using the ",(0,t.jsx)(n.a,{href:"https://pkg.go.dev/builtin/#copy",children:"copy"})," builtin. Here is an example for persisting a string:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func handler(c fiber.Ctx) error {\n    // Variable is only valid within this handler\n    result := c.Params("foo")\n\n    // Make a copy\n    buffer := make([]byte, len(result))\n    copy(buffer, result)\n    resultCopy := string(buffer) \n    // Variable is now valid indefinitely\n\n    // ...\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["We created a custom ",(0,t.jsx)(n.code,{children:"CopyString"})," function that performs the above and is available under ",(0,t.jsx)(n.a,{href:"https://github.com/gofiber/utils",children:"gofiber/utils"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'app.Get("/:foo", func(c fiber.Ctx) error {\n    // Variable is now immutable\n    result := utils.CopyString(c.Params("foo")) \n\n    // ...\n})\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, you can enable the ",(0,t.jsx)(n.code,{children:"Immutable"})," setting. This makes all values returned from the context immutable, allowing you to persist them anywhere. Note that this comes at the cost of performance."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"app := fiber.New(fiber.Config{\n    Immutable: true,\n})\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For more information, please refer to ",(0,t.jsx)(n.a,{href:"https://github.com/gofiber/fiber/issues/426",children:"#426"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/gofiber/fiber/issues/185",children:"#185"}),", and ",(0,t.jsx)(n.a,{href:"https://github.com/gofiber/fiber/issues/3012",children:"#3012"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"hello-world",children:"Hello, World"}),"\n",(0,t.jsxs)(n.p,{children:["Below is the most straightforward ",(0,t.jsx)(n.strong,{children:"Fiber"})," application you can create:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport "github.com/gofiber/fiber/v3"\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/", func(c fiber.Ctx) error {\n        return c.SendString("Hello, World!")\n    })\n\n    app.Listen(":3000")\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go run server.go\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Browse to ",(0,t.jsx)(n.code,{children:"http://localhost:3000"})," and you should see ",(0,t.jsx)(n.code,{children:"Hello, World!"})," displayed on the page."]}),"\n",(0,t.jsx)(n.h3,{id:"basic-routing",children:"Basic Routing"}),"\n",(0,t.jsxs)(n.p,{children:["Routing determines how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (",(0,t.jsx)(n.code,{children:"GET"}),", ",(0,t.jsx)(n.code,{children:"PUT"}),", ",(0,t.jsx)(n.code,{children:"POST"}),", etc.)."]}),"\n",(0,t.jsxs)(n.p,{children:["Each route can have ",(0,t.jsx)(n.strong,{children:"multiple handler functions"})," that are executed when the route is matched."]}),"\n",(0,t.jsx)(n.p,{children:"Route definitions follow the structure below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// Function signature\napp.Method(path string, ...func(fiber.Ctx) error)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"app"})," is an instance of ",(0,t.jsx)(n.strong,{children:"Fiber"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Method"})," is an ",(0,t.jsx)(n.a,{href:"https://docs.gofiber.io/api/app#route-handlers",children:"HTTP request method"}),": ",(0,t.jsx)(n.code,{children:"GET"}),", ",(0,t.jsx)(n.code,{children:"PUT"}),", ",(0,t.jsx)(n.code,{children:"POST"}),", etc."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"path"})," is a virtual path on the server"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"func(fiber.Ctx) error"})," is a callback function containing the ",(0,t.jsx)(n.a,{href:"https://docs.gofiber.io/api/ctx",children:"Context"})," executed when the route is matched"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"simple-route",children:"Simple Route"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// Respond with "Hello, World!" on root path "/"\napp.Get("/", func(c fiber.Ctx) error {\n    return c.SendString("Hello, World!")\n})\n'})}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// GET http://localhost:8080/hello%20world\n\napp.Get("/:value", func(c fiber.Ctx) error {\n    return c.SendString("value: " + c.Params("value"))\n    // => Response: "value: hello world"\n})\n'})}),"\n",(0,t.jsx)(n.h4,{id:"optional-parameter",children:"Optional Parameter"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// GET http://localhost:3000/john\n\napp.Get("/:name?", func(c fiber.Ctx) error {\n    if c.Params("name") != "" {\n        return c.SendString("Hello " + c.Params("name"))\n        // => Response: "Hello john"\n    }\n    return c.SendString("Where is john?")\n    // => Response: "Where is john?"\n})\n'})}),"\n",(0,t.jsx)(n.h4,{id:"wildcards",children:"Wildcards"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// GET http://localhost:3000/api/user/john\n\napp.Get("/api/*", func(c fiber.Ctx) error {\n    return c.SendString("API path: " + c.Params("*"))\n    // => Response: "API path: user/john"\n})\n'})}),"\n",(0,t.jsx)(n.h3,{id:"static-files",children:"Static Files"}),"\n",(0,t.jsxs)(n.p,{children:["To serve static files such as ",(0,t.jsx)(n.strong,{children:"images"}),", ",(0,t.jsx)(n.strong,{children:"CSS"}),", and ",(0,t.jsx)(n.strong,{children:"JavaScript"})," files, use the ",(0,t.jsx)(n.code,{children:"Static"})," method with a directory path. For more information, refer to the ",(0,t.jsx)(n.a,{href:"/next/middleware/static",children:"static middleware"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Use the following code to serve files in a directory named ",(0,t.jsx)(n.code,{children:"./public"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gofiber/fiber/v3"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Static("/", "./public")\n\n    app.Listen(":3000")\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Now, you can access the files in the ",(0,t.jsx)(n.code,{children:"./public"})," directory via your browser:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"http://localhost:3000/hello.html\nhttp://localhost:3000/js/jquery.js\nhttp://localhost:3000/css/style.css\n"})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return o}});var i=r(67294);let t={},s=i.createContext(t);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);