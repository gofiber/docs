"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["46021"],{93075:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>d,assets:()=>o,toc:()=>l,frontMatter:()=>a});var r=JSON.parse('{"id":"swagger/README","title":"Swagger","description":"Generate Swagger documentation for your application.","source":"@site/docs/recipes/swagger/README.md","sourceDirName":"swagger","slug":"/swagger/","permalink":"/recipes/swagger/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/swagger/README.md","tags":[],"version":"current","lastUpdatedAt":1733056464000,"frontMatter":{"title":"Swagger","keywords":["swagger","api","documentation","contrib"],"description":"Generate Swagger documentation for your application."},"sidebar":"left_sidebar","previous":{"title":"create-svelte","permalink":"/recipes/sveltekit-embed/template/"},"next":{"title":"Tableflip Example","permalink":"/recipes/tableflip/"}}'),i=t("85893"),s=t("50065");let a={title:"Swagger",keywords:["swagger","api","documentation","contrib"],description:"Generate Swagger documentation for your application."},c="Swagger API Documentation",o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Generating Swagger Docs",id:"generating-swagger-docs",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}];function g(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"swagger-api-documentation",children:"Swagger API Documentation"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/swagger",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,i.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/swagger",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,i.jsx)(n.p,{children:"This project demonstrates how to integrate Swagger for API documentation in a Go application."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Ensure you have the following installed:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Golang"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/swaggo/swag",children:"Swag"})," for generating Swagger docs"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\r\ncd recipes/swagger\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install dependencies:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"go get -u github.com/swaggo/swag/cmd/swag\r\ngo get -u github.com/swaggo/gin-swagger\r\ngo get -u github.com/swaggo/files\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"generating-swagger-docs",children:"Generating Swagger Docs"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Generate the Swagger documentation:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"swag init\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Start the application:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Access the Swagger UI:\r\nOpen your browser and navigate to ",(0,i.jsx)(n.code,{children:"http://localhost:8080/swagger/index.html"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Here is an example of how to document an API endpoint using Swag:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// @Summary Show an account\r\n// @Description get string by ID\r\n// @ID get-string-by-int\r\n// @Accept  json\r\n// @Produce  json\r\n// @Param   id     path    int     true        "Account ID"\r\n// @Success 200 {object} model.Account\r\n// @Failure 400 {object} http.Response\r\n// @Failure 404 {object} http.Response\r\n// @Router /accounts/{id} [get]\r\nfunc GetAccount(c *gin.Context) {\r\n    // Your code here\r\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/swaggo/swag",children:"Swag Documentation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/swaggo/gin-swagger",children:"Gin Swagger Middleware"})}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var r=t(67294);let i={},s=r.createContext(i);function a(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);