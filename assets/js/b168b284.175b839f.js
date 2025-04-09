"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["59302"],{10753:function(e,n,i){i.r(n),i.d(n,{default:()=>d,frontMatter:()=>l,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>s});var t=JSON.parse('{"id":"optional-parameter/README","title":"Optional Parameter","description":"Handling optional parameters.","source":"@site/docs/recipes/optional-parameter/README.md","sourceDirName":"optional-parameter","slug":"/optional-parameter/","permalink":"/recipes/optional-parameter/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/optional-parameter/README.md","tags":[],"version":"current","lastUpdatedAt":1744205860000,"frontMatter":{"title":"Optional Parameter","keywords":["optional","parameter"],"description":"Handling optional parameters."},"sidebar":"left_sidebar","previous":{"title":"Google OAuth2","permalink":"/recipes/oauth2-google/"},"next":{"title":"Parsley","permalink":"/recipes/parsley/"}}'),r=i("85893"),a=i("50065");let l={title:"Optional Parameter",keywords:["optional","parameter"],description:"Handling optional parameters."},s="Optional Parameter Example",o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}];function p(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"optional-parameter-example",children:"Optional Parameter Example"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/optional-parameter",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,r.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/optional-parameter",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,r.jsx)(n.p,{children:"This project demonstrates how to handle optional parameters in a Go application using the Fiber framework."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Ensure you have the following installed:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Golang"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," package"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/optional-parameter\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Install dependencies:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"go get\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Start the application:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Here is an example of how to handle optional parameters in a Fiber application:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/user/:id?", func(c *fiber.Ctx) error {\n        id := c.Params("id", "defaultID")\n        return c.SendString("User ID: " + id)\n    })\n\n    app.Listen(":3000")\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"In this example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:":id?"})," parameter in the route is optional."]}),"\n",(0,r.jsxs)(n.li,{children:["If the ",(0,r.jsx)(n.code,{children:"id"})," parameter is not provided, it defaults to ",(0,r.jsx)(n.code,{children:'"defaultID"'}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return l}});var t=i(67294);let r={},a=t.createContext(r);function l(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);