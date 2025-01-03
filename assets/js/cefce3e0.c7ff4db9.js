"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["23792"],{7122:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>o});var s=JSON.parse('{"id":"gorm-postgres/README","title":"GORM + PostgreSQL","description":"Using GORM with PostgreSQL database.","source":"@site/docs/recipes/gorm-postgres/README.md","sourceDirName":"gorm-postgres","slug":"/gorm-postgres/","permalink":"/recipes/gorm-postgres/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/gorm-postgres/README.md","tags":[],"version":"current","lastUpdatedAt":1735889916000,"frontMatter":{"title":"GORM + PostgreSQL","keywords":["gorm","postgres","database"],"description":"Using GORM with PostgreSQL database."},"sidebar":"left_sidebar","previous":{"title":"GORM MySQL","permalink":"/recipes/gorm-mysql/"},"next":{"title":"Graceful shutdown","permalink":"/recipes/graceful-shutdown/"}}'),t=r("85893"),i=r("50065");let o={title:"GORM + PostgreSQL",keywords:["gorm","postgres","database"],description:"Using GORM with PostgreSQL database."},l="GORM with PostgreSQL Example",a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"gorm-with-postgresql-example",children:"GORM with PostgreSQL Example"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/gorm-postgres",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,t.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/gorm-postgres",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,t.jsx)(n.p,{children:"This project demonstrates how to set up a Go application using the Fiber framework with GORM and PostgreSQL."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Ensure you have the following installed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Golang"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," package"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://gorm.io/",children:"GORM"})," package"]}),"\n",(0,t.jsx)(n.li,{children:"PostgreSQL"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/gorm-postgres\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install dependencies:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"go get\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set up PostgreSQL and create a database:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"createdb mydb\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Update the database connection string in the code if necessary."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start the application:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Access the application at ",(0,t.jsx)(n.code,{children:"http://localhost:3000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["Here is an example ",(0,t.jsx)(n.code,{children:"main.go"})," file for the Fiber application with GORM and PostgreSQL:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "log"\n    "github.com/gofiber/fiber/v2"\n    "gorm.io/driver/postgres"\n    "gorm.io/gorm"\n)\n\ntype User struct {\n    ID    uint   `gorm:"primaryKey"`\n    Name  string `gorm:"size:255"`\n    Email string `gorm:"uniqueIndex"`\n}\n\nfunc main() {\n    dsn := "host=localhost user=youruser password=yourpassword dbname=mydb port=5432 sslmode=disable"\n    db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    db.AutoMigrate(&User{})\n\n    app := fiber.New()\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("Hello, GORM with PostgreSQL!")\n    })\n\n    app.Post("/users", func(c *fiber.Ctx) error {\n        user := new(User)\n        if err := c.BodyParser(user); err != nil {\n            return c.Status(400).SendString(err.Error())\n        }\n        db.Create(user)\n        return c.JSON(user)\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://gorm.io/docs/",children:"GORM Documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.postgresql.org/docs/",children:"PostgreSQL Documentation"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return o}});var s=r(67294);let t={},i=s.createContext(t);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);