"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["41518"],{4874:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>s,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"hexagonal/README","title":"Hexagonal Architecture","description":"A Hexagonal Software Architecture in Golang and MongoDB.","source":"@site/docs/recipes/hexagonal/README.md","sourceDirName":"hexagonal","slug":"/hexagonal/","permalink":"/recipes/hexagonal/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/hexagonal/README.md","tags":[],"version":"current","lastUpdatedAt":1735889916000,"frontMatter":{"title":"Hexagonal Architecture","keywords":["hexagonal","architecture","mongodb"],"description":"A Hexagonal Software Architecture in Golang and MongoDB."},"sidebar":"left_sidebar","previous":{"title":"Heroku","permalink":"/recipes/heroku/"},"next":{"title":"HTTPS with PKCS12 TLS","permalink":"/recipes/https-pkcs12-tls/"}}'),i=n("85893"),a=n("50065");let l={title:"Hexagonal Architecture",keywords:["hexagonal","architecture","mongodb"],description:"A Hexagonal Software Architecture in Golang and MongoDB."},s="A Hexagonal Software Architecture in Golang and MongoDB",o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Example Requests",id:"example-requests",level:2},{value:"Get All Products",id:"get-all-products",level:3},{value:"Get Product by ID",id:"get-product-by-id",level:3},{value:"Create a New Product",id:"create-a-new-product",level:3},{value:"Update a Product",id:"update-a-product",level:3},{value:"Delete a Product",id:"delete-a-product",level:3},{value:"Hexagonal Architecture",id:"hexagonal-architecture",level:2},{value:"Additional Information",id:"additional-information",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"a-hexagonal-software-architecture-in-golang-and-mongodb",children:"A Hexagonal Software Architecture in Golang and MongoDB"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/hexagonal",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,i.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/hexagonal",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,i.jsx)(t.p,{children:"This project presents a simple product catalogue microservice to demonstrate the principles of a hexagonal software architecture. The microservice exposes a RESTful API that allows consuming applications to perform CRUD operations on a product catalogue. The microservice is developed in Golang, and the product catalogue data is persisted in a MongoDB repository."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Hexagonal Architecture",src:n(95920).Z+"",width:"960",height:"650"})}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Go 1.18 or higher"}),"\n",(0,i.jsx)(t.li,{children:"MongoDB"}),"\n",(0,i.jsx)(t.li,{children:"Go modules"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Clone the repository:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/hexagonal\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Install dependencies:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"go mod tidy\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Configure the MongoDB connection in the ",(0,i.jsx)(t.code,{children:"config.json"})," file:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "DB_URI": "your_mongodb_uri",\n  "DB_Name": "your_db_name"\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Run the application:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["The server will start on ",(0,i.jsx)(t.code,{children:"http://localhost:3000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Method"}),(0,i.jsx)(t.th,{children:"URL"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"GET"}),(0,i.jsx)(t.td,{children:"/api/v1/products"}),(0,i.jsx)(t.td,{children:"Retrieves all products"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"GET"}),(0,i.jsxs)(t.td,{children:["/api/v1/product/",":id"]}),(0,i.jsx)(t.td,{children:"Retrieves a product by ID"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"POST"}),(0,i.jsx)(t.td,{children:"/api/v1/product"}),(0,i.jsx)(t.td,{children:"Creates a new product"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PUT"}),(0,i.jsxs)(t.td,{children:["/api/v1/product/",":id"]}),(0,i.jsx)(t.td,{children:"Updates an existing product"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DELETE"}),(0,i.jsxs)(t.td,{children:["/api/v1/product/",":id"]}),(0,i.jsx)(t.td,{children:"Deletes a product"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"example-requests",children:"Example Requests"}),"\n",(0,i.jsx)(t.h3,{id:"get-all-products",children:"Get All Products"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"curl -X GET http://localhost:3000/api/v1/products\n"})}),"\n",(0,i.jsx)(t.h3,{id:"get-product-by-id",children:"Get Product by ID"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"curl -X GET http://localhost:3000/api/v1/product/1\n"})}),"\n",(0,i.jsx)(t.h3,{id:"create-a-new-product",children:"Create a New Product"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:'curl -X POST http://localhost:3000/api/v1/product -d \'{"name": "New Product", "price": 100}\' -H "Content-Type: application/json"\n'})}),"\n",(0,i.jsx)(t.h3,{id:"update-a-product",children:"Update a Product"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:'curl -X PUT http://localhost:3000/api/v1/product/1 -d \'{"name": "Updated Product", "price": 150}\' -H "Content-Type: application/json"\n'})}),"\n",(0,i.jsx)(t.h3,{id:"delete-a-product",children:"Delete a Product"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"curl -X DELETE http://localhost:3000/api/v1/product/1\n"})}),"\n",(0,i.jsx)(t.h2,{id:"hexagonal-architecture",children:"Hexagonal Architecture"}),"\n",(0,i.jsx)(t.p,{children:"Hexagonal architecture, also known as ports and adapters architecture, is a design pattern used to create loosely coupled application components that can be easily connected to their software environment by means of ports and adapters. This architecture allows an application to be equally driven by users, programs, automated tests, or batch scripts, and to be developed and tested in isolation from its eventual runtime devices and databases."}),"\n",(0,i.jsx)(t.h2,{id:"additional-information",children:"Additional Information"}),"\n",(0,i.jsx)(t.p,{children:"For more information on hexagonal architecture, you can refer to the following resources:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://alistair.cockburn.us/hexagonal-architecture/",children:"Hexagonal Architecture"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://medium.com/@matryer/hexagonal-architecture-in-go-2b5e0df2d8f8",children:"Hexagonal Architecture in Golang"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},95920:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/Hexagonal-Arch-a9a456865d06fc0dfbafd71193350cf5.png"},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return l}});var r=n(67294);let i={},a=r.createContext(i);function l(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);