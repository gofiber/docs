"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["87310"],{52097:function(e,n,o){o.r(n),o.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>l});var i=JSON.parse('{"id":"mongodb/README","title":"MongoDB Example","description":"Github StackBlitz","source":"@site/docs/recipes/mongodb/README.md","sourceDirName":"mongodb","slug":"/mongodb/","permalink":"/recipes/mongodb/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/mongodb/README.md","tags":[],"version":"current","lastUpdatedAt":1732648136000,"frontMatter":{"title":"MongoDB Example","keywords":["mongodb","database"]},"sidebar":"left_sidebar","previous":{"title":"MinIO","permalink":"/recipes/minio/"},"next":{"title":"Multiple Ports","permalink":"/recipes/multiple-ports/"}}'),t=o("85893"),r=o("50065");let l={title:"MongoDB Example",keywords:["mongodb","database"]},s="MongoDB Example",c={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"mongodb-example",children:"MongoDB Example"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/mongodb",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,t.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/mongodb",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,t.jsx)(n.p,{children:"This project demonstrates how to connect to a MongoDB database in a Go application using the Fiber framework."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Ensure you have the following installed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Golang"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," package"]}),"\n",(0,t.jsx)(n.li,{children:"MongoDB"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/mongodb/mongo-go-driver",children:"MongoDB Go Driver"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/mongodb\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install dependencies:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"go get\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set up your MongoDB database and update the connection string in the code."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Start the application:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Here is an example of how to connect to a MongoDB database in a Fiber application:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "log"\n    "time"\n\n    "github.com/gofiber/fiber/v2"\n    "go.mongodb.org/mongo-driver/mongo"\n    "go.mongodb.org/mongo-driver/mongo/options"\n)\n\nfunc main() {\n    // MongoDB connection\n    client, err := mongo.NewClient(options.Client().ApplyURI("mongodb://localhost:27017"))\n    if err != nil {\n        log.Fatal(err)\n    }\n    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)\n    defer cancel()\n    err = client.Connect(ctx)\n    if err != nil {\n        log.Fatal(err)\n    }\n    defer client.Disconnect(ctx)\n\n    // Fiber instance\n    app := fiber.New()\n\n    // Routes\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("Hello, MongoDB!")\n    })\n\n    // Start server\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.mongodb.com",children:"MongoDB Documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://pkg.go.dev/go.mongodb.org/mongo-driver",children:"MongoDB Go Driver Documentation"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return l}});var i=o(67294);let t={},r=i.createContext(t);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);