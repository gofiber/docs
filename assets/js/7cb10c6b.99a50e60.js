"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["93038"],{35992:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"mysql/README","title":"MySQL","description":"Connecting to a MySQL database.","source":"@site/docs/recipes/mysql/README.md","sourceDirName":"mysql","slug":"/mysql/","permalink":"/recipes/mysql/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/mysql/README.md","tags":[],"version":"current","lastUpdatedAt":1740509232000,"frontMatter":{"title":"MySQL","keywords":["mysql"],"description":"Connecting to a MySQL database."},"sidebar":"left_sidebar","previous":{"title":"Multiple Ports","permalink":"/recipes/multiple-ports/"},"next":{"title":"Neo4j","permalink":"/recipes/neo4j/"}}'),r=i("85893"),s=i("50065");let l={title:"MySQL",keywords:["mysql"],description:"Connecting to a MySQL database."},a="MySQL Example",c={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"mysql-example",children:"MySQL Example"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/mysql",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,r.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/mysql",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,r.jsx)(n.p,{children:"This project demonstrates how to connect to a MySQL database in a Go application using the Fiber framework."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Ensure you have the following installed:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Golang"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," package"]}),"\n",(0,r.jsx)(n.li,{children:"MySQL"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/go-sql-driver/mysql",children:"Go MySQL Driver"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/mysql\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Install dependencies:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"go get\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Set up your MySQL database and update the connection string in the code."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Start the application:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Here is an example of how to connect to a MySQL database in a Fiber application:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "database/sql"\n    "log"\n\n    "github.com/gofiber/fiber/v2"\n    _ "github.com/go-sql-driver/mysql"\n)\n\nfunc main() {\n    // Database connection\n    dsn := "username:password@tcp(127.0.0.1:3306)/dbname"\n    db, err := sql.Open("mysql", dsn)\n    if err != nil {\n        log.Fatal(err)\n    }\n    defer db.Close()\n\n    // Fiber instance\n    app := fiber.New()\n\n    // Routes\n    app.Get("/", func(c *fiber.Ctx) error {\n        var greeting string\n        err := db.QueryRow("SELECT \'Hello, World!\'").Scan(&greeting)\n        if err != nil {\n            return err\n        }\n        return c.SendString(greeting)\n    })\n\n    // Start server\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://dev.mysql.com/doc/",children:"MySQL Documentation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://pkg.go.dev/github.com/go-sql-driver/mysql",children:"Go MySQL Driver Documentation"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return l}});var t=i(67294);let r={},s=t.createContext(r);function l(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);