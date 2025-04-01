"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["98342"],{40696:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"neo4j/README","title":"Neo4j","description":"Connecting to a Neo4j database.","source":"@site/docs/recipes/neo4j/README.md","sourceDirName":"neo4j","slug":"/neo4j/","permalink":"/recipes/neo4j/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/neo4j/README.md","tags":[],"version":"current","lastUpdatedAt":1743510804000,"frontMatter":{"title":"Neo4j","keywords":["neo4j","database"],"description":"Connecting to a Neo4j database."},"sidebar":"left_sidebar","previous":{"title":"MySQL","permalink":"/recipes/mysql/"},"next":{"title":"OAuth2","permalink":"/recipes/oauth2/"}}'),t=i("85893"),s=i("50065");let o={title:"Neo4j",keywords:["neo4j","database"],description:"Connecting to a Neo4j database."},l="Neo4j Example",a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"neo4j-example",children:"Neo4j Example"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/neo4j",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,t.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/neo4j",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,t.jsx)(n.p,{children:"This project demonstrates how to connect to a Neo4j database in a Go application using the Fiber framework."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Ensure you have the following installed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Golang"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," package"]}),"\n",(0,t.jsx)(n.li,{children:"Neo4j"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/neo4j/neo4j-go-driver",children:"Neo4j Go Driver"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/neo4j\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install dependencies:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"go get\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set up your Neo4j database and update the connection string in the code."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Start the application:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Here is an example of how to connect to a Neo4j database in a Fiber application:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "log"\n    "github.com/gofiber/fiber/v2"\n    "github.com/neo4j/neo4j-go-driver/v5/neo4j"\n)\n\nfunc main() {\n    // Neo4j connection\n    uri := "neo4j://localhost:7687"\n    username := "neo4j"\n    password := "password"\n    driver, err := neo4j.NewDriver(uri, neo4j.BasicAuth(username, password, ""))\n    if err != nil {\n        log.Fatal(err)\n    }\n    defer driver.Close()\n\n    // Fiber instance\n    app := fiber.New()\n\n    // Routes\n    app.Get("/", func(c *fiber.Ctx) error {\n        session := driver.NewSession(neo4j.SessionConfig{})\n        defer session.Close()\n\n        result, err := session.Run("RETURN \'Hello, World!\'", nil)\n        if err != nil {\n            return err\n        }\n\n        if result.Next() {\n            return c.SendString(result.Record().Values[0].(string))\n        }\n\n        return c.SendStatus(500)\n    })\n\n    // Start server\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://neo4j.com/docs/",children:"Neo4j Documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/neo4j/neo4j-go-driver",children:"Neo4j Go Driver Documentation"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return o}});var r=i(67294);let t={},s=r.createContext(t);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);