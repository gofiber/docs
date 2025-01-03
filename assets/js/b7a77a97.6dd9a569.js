"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["19681"],{30467:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>p,assets:()=>a,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"postgresql/README","title":"PostgreSQL","description":"Connecting to a PostgreSQL database.","source":"@site/docs/recipes/postgresql/README.md","sourceDirName":"postgresql","slug":"/postgresql/","permalink":"/recipes/postgresql/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/postgresql/README.md","tags":[],"version":"current","lastUpdatedAt":1735889916000,"frontMatter":{"title":"PostgreSQL","keywords":["postgresql"],"description":"Connecting to a PostgreSQL database."},"sidebar":"left_sidebar","previous":{"title":"Parsley","permalink":"/recipes/parsley/"},"next":{"title":"Prefork","permalink":"/recipes/prefork/"}}'),s=t("85893"),i=t("50065");let l={title:"PostgreSQL",keywords:["postgresql"],description:"Connecting to a PostgreSQL database."},o="PostgreSQL Example",a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"postgresql-example",children:"PostgreSQL Example"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/postgresql",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,s.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/postgresql",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,s.jsx)(n.p,{children:"This project demonstrates how to connect to a PostgreSQL database in a Go application using the Fiber framework."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Ensure you have the following installed:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Golang"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," package"]}),"\n",(0,s.jsx)(n.li,{children:"PostgreSQL"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/postgresql\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install dependencies:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"go get\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set up your PostgreSQL database and update the connection string in the code."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the application:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Access the application at ",(0,s.jsx)(n.code,{children:"http://localhost:3000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Here is an example of how to connect to a PostgreSQL database in a Fiber application:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "database/sql"\n    "log"\n\n    "github.com/gofiber/fiber/v2"\n    _ "github.com/lib/pq"\n)\n\nfunc main() {\n    // Database connection\n    connStr := "user=username dbname=mydb sslmode=disable"\n    db, err := sql.Open("postgres", connStr)\n    if err != nil {\n        log.Fatal(err)\n    }\n    defer db.Close()\n\n    // Fiber instance\n    app := fiber.New()\n\n    // Routes\n    app.Get("/", func(c *fiber.Ctx) error {\n        var greeting string\n        err := db.QueryRow("SELECT \'Hello, World!\'").Scan(&greeting)\n        if err != nil {\n            return err\n        }\n        return c.SendString(greeting)\n    })\n\n    // Start server\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.postgresql.org/docs/",children:"PostgreSQL Documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/lib/pq",children:"pq Driver Documentation"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var r=t(67294);let s={},i=r.createContext(s);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);