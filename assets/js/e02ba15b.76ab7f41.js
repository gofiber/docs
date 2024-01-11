"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[86932],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={slug:"/",id:"getting-started",title:"\ud83d\udcd6 Getting started",sidebar_position:1},i=void 0,l={unversionedId:"getting-started",id:"version-v1.x/getting-started",title:"\ud83d\udcd6 Getting started",description:"Fiber is an Express inspired web framework build on top of Fasthttp, the fastest HTTP engine for Go. Designed to ease things up for fast development with zero memory allocation and performance in mind.",source:"@site/versioned_docs/version-v1.x/intro.md",sourceDirName:".",slug:"/",permalink:"/v1.x/",draft:!1,tags:[],version:"v1.x",lastUpdatedAt:1704966683,formattedLastUpdatedAt:"Jan 11, 2024",sidebarPosition:1,frontMatter:{slug:"/",id:"getting-started",title:"\ud83d\udcd6 Getting started",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"API",permalink:"/v1.x/category/api"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Zero Allocation",id:"zero-allocation",level:2},{value:"Hello, World!",id:"hello-world",level:2},{value:"Basic routing",id:"basic-routing",level:2},{value:"Static files",id:"static-files",level:2},{value:"Note",id:"note",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fiber")," is an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/expressjs/express"},"Express")," inspired ",(0,r.kt)("strong",{parentName:"p"},"web framework")," build on top of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/valyala/fasthttp"},"Fasthttp"),", the ",(0,r.kt)("strong",{parentName:"p"},"fastest")," HTTP engine for ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/doc/"},"Go"),". Designed to ",(0,r.kt)("strong",{parentName:"p"},"ease")," things up for ",(0,r.kt)("strong",{parentName:"p"},"fast")," development with ",(0,r.kt)("strong",{parentName:"p"},"zero memory allocation")," and ",(0,r.kt)("strong",{parentName:"p"},"performance")," in mind."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"These docs are for the old ",(0,r.kt)("strong",{parentName:"p"},"Fiber v1"),", you can view the ",(0,r.kt)("strong",{parentName:"p"},"v2")," docs ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gofiber.io"},(0,r.kt)("strong",{parentName:"a"},"here")),".",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"v2.0.0")," was released on ",(0,r.kt)("strong",{parentName:"p"},"September 15th, 2020"),", and contains numerous changes regarding performance and API design.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"First of all, ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"download")," and install Go. ",(0,r.kt)("inlineCode",{parentName:"p"},"1.11")," or higher is required."),(0,r.kt)("p",null,"Installation is done using the ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them"},(0,r.kt)("inlineCode",{parentName:"a"},"go get"))," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u github.com/gofiber/fiber\n")),(0,r.kt)("h2",{id:"zero-allocation"},"Zero Allocation"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Some values returned from ",(0,r.kt)("a",{parentName:"p",href:"api/ctx"},(0,r.kt)("strong",{parentName:"a"},"fiber.Ctx"))," are ",(0,r.kt)("strong",{parentName:"p"},"not")," immutable by default")),(0,r.kt)("p",null,"Because fiber is optimized for ",(0,r.kt)("strong",{parentName:"p"},"high-performance"),", values returned from ",(0,r.kt)("a",{parentName:"p",href:"api/ctx"},(0,r.kt)("strong",{parentName:"a"},"fiber.Ctx"))," are ",(0,r.kt)("strong",{parentName:"p"},"not")," immutable by default and ",(0,r.kt)("strong",{parentName:"p"},"will")," be re-used across requests. As a rule of thumb, you ",(0,r.kt)("strong",{parentName:"p"},"must")," only use context values within the handler, and you ",(0,r.kt)("strong",{parentName:"p"},"must not")," keep any references. As soon as you return from the handler, any values you have obtained from the context will be re-used in future requests and will change below your feet. Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func handler(c *fiber.Ctx) {\n    result := c.Param("foo") // result is only valid within this method\n}\n')),(0,r.kt)("p",null,"If you need to persist such values outside the handler, make copies of their ",(0,r.kt)("strong",{parentName:"p"},"underlying buffer")," using the ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/pkg/builtin/#copy"},"copy")," builtin. Here is an example for persisting a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func handler(c *fiber.Ctx) {\n    result := c.Param("foo") // result is only valid within this method\n    newBuffer := make([]byte, len(result))\n    copy(newBuffer, result)\n    newResult := string(newBuffer) // newResult is immutable and valid forever\n}\n')),(0,r.kt)("p",null,"We created a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"ImmutableString")," function that does the above and is available in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/utils"},"gofiber/utils")," package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app.Get("/:foo", func(c *fiber.Ctx) {\n    result := utils.ImmutableString(c.Param("foo")) \n    // result is now immutable\n})\n')),(0,r.kt)("p",null,"Alternatively, you can also use the",(0,r.kt)("a",{parentName:"p",href:"api/app#settings"}," ",(0,r.kt)("strong",{parentName:"a"},"Immutable setting")),". It will make all values returned from the context immutable, allowing you to persist them anywhere. Of course, this comes at the cost of performance."),(0,r.kt)("p",null,"For more information, please check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber/issues/426"},(0,r.kt)("strong",{parentName:"a"},"#","426"))," ",(0,r.kt)("strong",{parentName:"p"},"and")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber/issues/185"},(0,r.kt)("strong",{parentName:"a"},"#","185")),"."),(0,r.kt)("h2",{id:"hello-world"},"Hello, World!"),(0,r.kt)("p",null,"Embedded below is essentially the most straightforward ",(0,r.kt)("strong",{parentName:"p"},"Fiber")," app, which you can create."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "github.com/gofiber/fiber"\n\nfunc main() {\n  app := fiber.New()\n\n  app.Get("/", func(c *fiber.Ctx) {\n    c.Send("Hello, World!")\n  })\n\n  app.Listen(3000)\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"go run server.go\n")),(0,r.kt)("p",null,"Browse to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000,")," and you should see ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello, World!")," on the page."),(0,r.kt)("h2",{id:"basic-routing"},"Basic routing"),(0,r.kt)("p",null,"Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI ","(","or path",")"," and a specific HTTP request method ","(","GET, PUT, POST and so on",")","."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Each route can have ",(0,r.kt)("strong",{parentName:"p"},"multiple handler functions"),", that is executed when the route is matched.")),(0,r.kt)("p",null,"Route definition takes the following structures:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Function signature\napp.Method(path string, ...func(*fiber.Ctx))\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app")," is an instance of ",(0,r.kt)("strong",{parentName:"li"},"Fiber"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Method")," is an ",(0,r.kt)("a",{parentName:"li",href:"https://fiber.wiki/application#methods"},"HTTP request method"),", in capitalization: ",(0,r.kt)("inlineCode",{parentName:"li"},"Get"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Put"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Post"),", etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," is a virtual path on the server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"func(*fiber.Ctx)")," is a callback function containing the ",(0,r.kt)("a",{parentName:"li",href:"https://fiber.wiki/context"},"Context")," executed when the route is matched.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Simple route")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Respond with "Hello, World!" on root path, "/"\napp.Get("/", func(c *fiber.Ctx) {\n  c.Send("Hello, World!")\n})\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// GET http://localhost:8080/hello%20world\n\napp.Get("/:value", func(c *fiber.Ctx) {\n  c.Send("Get request with value: " + c.Params("value"))\n  // => Get request with value: hello world\n})\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Optional parameter")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// GET http://localhost:3000/john\n\napp.Get("/:name?", func(c *fiber.Ctx) {\n  if c.Params("name") != "" {\n    c.Send("Hello " + c.Params("name"))\n    // => Hello john\n  } else {\n    c.Send("Where is john?")\n  }\n})\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wildcards")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// GET http://localhost:3000/api/user/john\n\napp.Get("/api/*", func(c *fiber.Ctx) {\n  c.Send("API path: " + c.Params("*"))\n  // => API path: user/john\n})\n')),(0,r.kt)("h2",{id:"static-files"},"Static files"),(0,r.kt)("p",null,"To serve static files such as ",(0,r.kt)("strong",{parentName:"p"},"images"),", ",(0,r.kt)("strong",{parentName:"p"},"CSS"),", and ",(0,r.kt)("strong",{parentName:"p"},"JavaScript")," files, replace your function handler with a file or directory string."),(0,r.kt)("p",null,"Function signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"app.Static(prefix, root string)\n")),(0,r.kt)("p",null,"Use the following code to serve files in a directory named ",(0,r.kt)("inlineCode",{parentName:"p"},"./public"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app := fiber.New()\n\napp.Static("/", "./public") \n\napp.Listen(8080)\n')),(0,r.kt)("p",null,"Now, you can load the files that are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"./public")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"http://localhost:8080/hello.html\nhttp://localhost:8080/js/jquery.js\nhttp://localhost:8080/css/style.css\n")),(0,r.kt)("h2",{id:"note"},"Note"),(0,r.kt)("p",null,"For more information on how to build APIs in Go with Fiber, please check out this excellent article ",(0,r.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/express-style-api-go-fiber/"},"on building an express-style API in Go with Fiber")))}m.isMDXComponent=!0}}]);