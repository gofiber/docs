"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["77306"],{37113:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>l});var i=JSON.parse('{"id":"auth-jwt/README","title":"Auth + JWT","description":"Simple JWT authentication.","source":"@site/docs/recipes/auth-jwt/README.md","sourceDirName":"auth-jwt","slug":"/auth-jwt/","permalink":"/recipes/auth-jwt/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/auth-jwt/README.md","tags":[],"version":"current","lastUpdatedAt":1732892746000,"frontMatter":{"title":"Auth + JWT","keywords":["auth","jwt","gorm","fiber"],"description":"Simple JWT authentication."},"sidebar":"left_sidebar","previous":{"title":"Auth + Docker + Postgres + JWT","permalink":"/recipes/auth-docker-postgres-jwt/"},"next":{"title":"Autocert","permalink":"/recipes/autocert/"}}'),t=s("85893"),r=s("50065");let l={title:"Auth + JWT",keywords:["auth","jwt","gorm","fiber"],description:"Simple JWT authentication."},a="Auth JWT Example",c={},o=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Database Management",id:"database-management",level:2},{value:"API Endpoints",id:"api-endpoints",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"auth-jwt-example",children:"Auth JWT Example"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/auth-jwt",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,t.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/auth-jwt",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,t.jsx)(n.p,{children:"This example demonstrates a boilerplate setup for a Go Fiber application that uses JWT for authentication."}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This project provides a starting point for building a web application with user authentication using JWT. It leverages Fiber for the web framework and GORM for ORM."}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go"})," 1.18 or higher"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/auth-jwt\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set the environment variables in a ",(0,t.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-env",children:"DB_PORT=5432\nDB_USER=example_user\nDB_PASSWORD=example_password\nDB_NAME=example_db\nSECRET=example_secret\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the dependencies:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go mod download\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the application:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go run main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The API should now be running on ",(0,t.jsx)(n.code,{children:"http://localhost:3000"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"database-management",children:"Database Management"}),"\n",(0,t.jsxs)(n.p,{children:["You can manage the database via ",(0,t.jsx)(n.code,{children:"psql"})," with the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"psql -U <DB_USER> -d <DB_NAME> -h localhost -p <DB_PORT>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"<DB_USER>"}),", ",(0,t.jsx)(n.code,{children:"<DB_NAME>"}),", and ",(0,t.jsx)(n.code,{children:"<DB_PORT>"})," with the values from your ",(0,t.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,t.jsx)(n.h2,{id:"api-endpoints",children:"API Endpoints"}),"\n",(0,t.jsx)(n.p,{children:"The following endpoints are available in the API:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"POST /api/auth/register"}),": Register a new user."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"POST /api/auth/login"}),": Authenticate a user and return a JWT."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["GET /api/user/",":id"]}),": Get a user (requires a valid JWT)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"POST /api/user"}),": Create a new user."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["PATCH /api/user/",":id"]}),": Update a user (requires a valid JWT)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["DELETE /api/user/",":id"]}),": Delete a user (requires a valid JWT)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"GET /api/product"}),": Get all products."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["GET /api/product/",":id"]}),": Get a product."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"POST /api/product"}),": Create a new product (requires a valid JWT)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["DELETE /api/product/",":id"]}),": Delete a product (requires a valid JWT)."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Register a new user:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://localhost:3000/api/auth/register -d \'{"username":"testuser", "password":"testpassword", "email":"test@example.com"}\' -H "Content-Type: application/json"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Login to get a JWT:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://localhost:3000/api/auth/login -d \'{"username":"testuser", "password":"testpassword"}\' -H "Content-Type: application/json"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Access a protected route:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -H "Authorization: Bearer <JWT>" http://localhost:3000/api/user/1\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"<JWT>"})," with the token received from the login endpoint."]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"This example provides a basic setup for a Go Fiber application with JWT authentication. It can be extended and customized further to fit the needs of more complex applications."}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://gorm.io/docs/",children:"GORM Documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://jwt.io/introduction/",children:"JWT Documentation"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var i=s(67294);let t={},r=i.createContext(t);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);