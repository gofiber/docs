"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["12490"],{38106:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>o,assets:()=>c,toc:()=>p,frontMatter:()=>r});var i=JSON.parse('{"id":"template/README","title":"Template","description":"Setting up a Go application with template rendering.","source":"@site/docs/recipes/template/README.md","sourceDirName":"template","slug":"/template/","permalink":"/recipes/template/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/template/README.md","tags":[],"version":"current","lastUpdatedAt":1735889916000,"frontMatter":{"title":"Template","keywords":["template","tailwindcss","parcel"],"description":"Setting up a Go application with template rendering."},"sidebar":"left_sidebar","previous":{"title":"Tableflip Example","permalink":"/recipes/tableflip/"},"next":{"title":"Template Asset Bundling","permalink":"/recipes/template-asset-bundling/"}}'),l=t("85893"),s=t("50065");let r={title:"Template",keywords:["template","tailwindcss","parcel"],description:"Setting up a Go application with template rendering."},a="Template Project",c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Building Assets",id:"building-assets",level:3},{value:"Running the Application",id:"running-the-application",level:3},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"template-project",children:"Template Project"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/template",children:(0,l.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,l.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/template",children:(0,l.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,l.jsx)(n.p,{children:"This project demonstrates how to set up a Go application with template rendering, Tailwind CSS, and Parcel for asset bundling."}),"\n",(0,l.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsx)(n.p,{children:"Ensure you have the following installed:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Golang"}),"\n",(0,l.jsx)(n.li,{children:"Node.js"}),"\n",(0,l.jsx)(n.li,{children:"npm"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/template\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Install dependencies:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"npm install\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.h3,{id:"building-assets",children:"Building Assets"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Build the assets:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"npm run build\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Watch assets for changes:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"npm run dev\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"running-the-application",children:"Running the Application"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Start the Fiber application:","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:"Here is an example of how to set up a basic route with template rendering in Go:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/html/v2"\n)\n\nfunc main() {\n    // Initialize the template engine\n    engine := html.New("./views", ".html")\n\n    // Create a new Fiber instance with the template engine\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n\n    // Define a route\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.Render("index", fiber.Map{\n            "Title": "Hello, World!",\n        })\n    })\n\n    // Start the server\n    app.Listen(":3000")\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://tailwindcss.com/docs",children:"Tailwind CSS Documentation"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://parceljs.org/docs",children:"Parcel Documentation"})}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var i=t(67294);let l={},s=i.createContext(l);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);