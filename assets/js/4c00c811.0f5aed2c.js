"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["66442"],{36312:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>s,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"validation/README","title":"Validation","description":"Input validation using go-playground/validator.","source":"@site/docs/recipes/validation/README.md","sourceDirName":"validation","slug":"/validation/","permalink":"/recipes/validation/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/validation/README.md","tags":[],"version":"current","lastUpdatedAt":1736513694000,"frontMatter":{"title":"Validation","keywords":["validation","input","go-playground","validator"],"description":"Input validation using go-playground/validator."},"sidebar":"left_sidebar","previous":{"title":"URL Shortener","permalink":"/recipes/url-shortener-api/"},"next":{"title":"Vercel","permalink":"/recipes/vercel/"}}'),r=i("85893"),l=i("50065");let o={title:"Validation",keywords:["validation","input","go-playground","validator"],description:"Input validation using go-playground/validator."},a="Validation with Fiber",s={},d=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Setup",id:"setup",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Code Overview",id:"code-overview",level:2},{value:"<code>main.go</code>",id:"maingo",level:3},{value:"<code>config/env.go</code>",id:"configenvgo",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsxs)(n.h1,{id:"validation-with-fiber",children:["Validation with ",(0,r.jsx)(n.a,{href:"https://gofiber.io",children:"Fiber"})]})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/validation",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,r.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/validation",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,r.jsxs)(n.p,{children:["This example demonstrates how to use ",(0,r.jsx)(n.a,{href:"https://github.com/go-playground/validator",children:"go-playground/validator"})," for input validation in a Go Fiber application."]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["This project provides a basic setup for validating request data in a Go Fiber application using the ",(0,r.jsx)(n.code,{children:"go-playground/validator"})," package. It includes the necessary configuration and code to perform validation on incoming requests."]}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go"})," 1.18 or higher"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"main.go"}),": The main application entry point."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"config/env.go"}),": Configuration file for environment variables."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"go.mod"}),": The Go module file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".env"}),": Environment variables file."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/validation\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Install the dependencies:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go mod download\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:".env"})," file in the root directory with the following content:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dotenv",children:'PORT=":8080"\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the application:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go run main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The application should now be running on ",(0,r.jsx)(n.code,{children:"http://localhost:8080"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Send a POST request to ",(0,r.jsx)(n.code,{children:"http://localhost:8080/validate"})," with a JSON payload:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "name": "John Doe",\n    "email": "john.doe@example.com",\n    "age": 30\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The server will validate the request data and respond with a success message if the data is valid, or an error message if the data is invalid."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"code-overview",children:"Code Overview"}),"\n",(0,r.jsx)(n.h3,{id:"maingo",children:(0,r.jsx)(n.code,{children:"main.go"})}),"\n",(0,r.jsxs)(n.p,{children:["The main Go file sets up the Fiber application, handles HTTP requests, and performs validation using the ",(0,r.jsx)(n.code,{children:"go-playground/validator"})," package."]}),"\n",(0,r.jsx)(n.h3,{id:"configenvgo",children:(0,r.jsx)(n.code,{children:"config/env.go"})}),"\n",(0,r.jsx)(n.p,{children:"The configuration file for loading environment variables."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package config\n\nimport "os"\n\n// Config func to get env value\nfunc Config(key string) string {\n    return os.Getenv(key)\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(n.p,{children:["This example provides a basic setup for validating request data in a Go Fiber application using the ",(0,r.jsx)(n.code,{children:"go-playground/validator"})," package. It can be extended and customized further to fit the needs of more complex applications."]}),"\n",(0,r.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/go-playground/validator",children:"Validator Documentation"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return o}});var t=i(67294);let r={},l=t.createContext(r);function o(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);