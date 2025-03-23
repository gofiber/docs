"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["64131"],{61059:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>i,assets:()=>c,toc:()=>h,contentTitle:()=>a});var i=JSON.parse('{"id":"graphql/README","title":"GraphQL","description":"Setting up a GraphQL server.","source":"@site/docs/recipes/graphql/README.md","sourceDirName":"graphql","slug":"/graphql/","permalink":"/recipes/graphql/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/graphql/README.md","tags":[],"version":"current","lastUpdatedAt":1742744365000,"frontMatter":{"title":"GraphQL","keywords":["graphql"],"description":"Setting up a GraphQL server."},"sidebar":"left_sidebar","previous":{"title":"Graceful shutdown","permalink":"/recipes/graceful-shutdown/"},"next":{"title":"gRPC","permalink":"/recipes/grpc/"}}'),t=r("85893"),l=r("50065");let s={title:"GraphQL",keywords:["graphql"],description:"Setting up a GraphQL server."},a="GraphQL Example",c={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}];function o(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"graphql-example",children:"GraphQL Example"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/graphql",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,t.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/graphql",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,t.jsx)(n.p,{children:"This project demonstrates how to set up a GraphQL server in a Go application using the Fiber framework."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Ensure you have the following installed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Golang"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," package"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/99designs/gqlgen",children:"gqlgen"})," package"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/graphql\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install dependencies:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"go get\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Initialize gqlgen:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"go run github.com/99designs/gqlgen init\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start the application:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Access the GraphQL playground at ",(0,t.jsx)(n.code,{children:"http://localhost:3000/graphql"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["Here is an example ",(0,t.jsx)(n.code,{children:"main.go"})," file for the Fiber application with GraphQL:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "log"\n    "github.com/gofiber/fiber/v2"\n    "github.com/99designs/gqlgen/graphql/handler"\n    "github.com/99designs/gqlgen/graphql/playground"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &resolver{}}))\n\n    app.All("/graphql", func(c *fiber.Ctx) error {\n        srv.ServeHTTP(c.Context().ResponseWriter(), c.Context().Request)\n        return nil\n    })\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        playground.Handler("GraphQL playground", "/graphql").ServeHTTP(c.Context().ResponseWriter(), c.Context().Request)\n        return nil\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://gqlgen.com/",children:"gqlgen Documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://graphql.org/",children:"GraphQL Documentation"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return s}});var i=r(67294);let t={},l=i.createContext(t);function s(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);