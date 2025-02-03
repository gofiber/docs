"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["23154"],{13295:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>s});var r=JSON.parse('{"id":"vercel/README","title":"Vercel","description":"Deploy a Go application to Vercel.","source":"@site/docs/recipes/vercel/README.md","sourceDirName":"vercel","slug":"/vercel/","permalink":"/recipes/vercel/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/vercel/README.md","tags":[],"version":"current","lastUpdatedAt":1738589498000,"frontMatter":{"title":"Vercel","keywords":["vercel","deploy","serverless"],"description":"Deploy a Go application to Vercel."},"sidebar":"left_sidebar","previous":{"title":"Validation","permalink":"/recipes/validation/"},"next":{"title":"WebSocket","permalink":"/recipes/websocket/"}}'),l=i("85893"),t=i("50065");let s={title:"Vercel",keywords:["vercel","deploy","serverless"],description:"Deploy a Go application to Vercel."},o="Vercel Example",c={},a=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Code Overview",id:"code-overview",level:2},{value:"<code>api/index.go</code>",id:"apiindexgo",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"vercel-example",children:"Vercel Example"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/vercel",children:(0,l.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,l.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/vercel",children:(0,l.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,l.jsx)(n.p,{children:"This example demonstrates how to deploy a Go Fiber application to Vercel."}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This project provides a starting point for deploying a Go Fiber application to Vercel. It includes the necessary configuration files and code to run a serverless application on Vercel."}),"\n",(0,l.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go"})," 1.18 or higher"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://vercel.com/download",children:"Vercel CLI"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"api/index.go"}),": The main entry point for the serverless function."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"vercel.json"}),": Configuration file for Vercel."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"go.mod"}),": The Go module file."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/vercel\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Install the dependencies:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"go mod download\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,l.jsxs)(n.p,{children:["Ensure the ",(0,l.jsx)(n.code,{children:"vercel.json"})," file is present in the root directory to handle routing properly. This file rewrites all requests to the ",(0,l.jsx)(n.code,{children:"api/index.go"})," handler."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "rewrites": [\n    { "source": "(.*)", "destination": "api/index.go" }\n  ]\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"deploy",children:"Deploy"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Install the Vercel CLI:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"npm install -g vercel\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Log in to Vercel:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"vercel login\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Deploy the application:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"vercel\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Follow the prompts to complete the deployment. Your application will be deployed to Vercel and a URL will be provided."}),"\n",(0,l.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Open your browser and navigate to the provided Vercel URL."}),"\n",(0,l.jsx)(n.li,{children:"You should see the JSON response with the URI and path."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"code-overview",children:"Code Overview"}),"\n",(0,l.jsx)(n.h3,{id:"apiindexgo",children:(0,l.jsx)(n.code,{children:"api/index.go"})}),"\n",(0,l.jsx)(n.p,{children:"The main Go file sets up the Fiber application, handles HTTP requests, and manages the routing."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package handler\n\nimport (\n "github.com/gofiber/fiber/v2/middleware/adaptor"\n "github.com/gofiber/fiber/v2"\n "net/http"\n)\n\n// Handler is the main entry point of the application. Think of it like the main() method\nfunc Handler(w http.ResponseWriter, r *http.Request) {\n // This is needed to set the proper request path in `*fiber.Ctx`\n r.RequestURI = r.URL.String()\n\n handler().ServeHTTP(w, r)\n}\n\n// building the fiber application\nfunc handler() http.HandlerFunc {\n app := fiber.New()\n\n app.Get("/v1", func(ctx *fiber.Ctx) error {\n  return ctx.JSON(fiber.Map{\n   "version": "v1",\n  })\n })\n\n app.Get("/v2", func(ctx *fiber.Ctx) error {\n  return ctx.JSON(fiber.Map{\n   "version": "v2",\n  })\n })\n\n app.Get("/", func(ctx *fiber.Ctx) error {\n  return ctx.JSON(fiber.Map{\n   "uri":  ctx.Request().URI().String(),\n   "path": ctx.Path(),\n  })\n })\n\n return adaptor.FiberApp(app)\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,l.jsx)(n.p,{children:"This example provides a basic setup for deploying a Go Fiber application to Vercel. It can be extended and customized further to fit the needs of more complex applications."}),"\n",(0,l.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://vercel.com/docs",children:"Vercel Documentation"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return s}});var r=i(67294);let l={},t=r.createContext(l);function s(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);