"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["78730"],{22422:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>h,assets:()=>l,toc:()=>a,frontMatter:()=>o});var i=JSON.parse('{"id":"websocket/README","title":"WebSocket","description":"Github StackBlitz","source":"@site/docs/recipes/websocket/README.md","sourceDirName":"websocket","slug":"/websocket/","permalink":"/recipes/websocket/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/websocket/README.md","tags":[],"version":"current","lastUpdatedAt":1732648136000,"frontMatter":{"title":"WebSocket","keywords":["websocket","real-time","chat","contrib"]},"sidebar":"left_sidebar","previous":{"title":"Vercel","permalink":"/recipes/vercel/"},"next":{"title":"WebSocket Chat","permalink":"/recipes/websocket-chat/"}}'),s=t("85893"),r=t("50065");let o={title:"WebSocket",keywords:["websocket","real-time","chat","contrib"]},c="WebSocket Example",l={},a=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Setup",id:"setup",level:2},{value:"WebSocket Endpoint",id:"websocket-endpoint",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Code Overview",id:"code-overview",level:2},{value:"<code>main.go</code>",id:"maingo",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"websocket-example",children:"WebSocket Example"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/websocket",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,s.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/websocket",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,s.jsx)(n.p,{children:"This example demonstrates a simple WebSocket application using Go Fiber."}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This project provides a basic setup for a WebSocket server using Go Fiber. It includes the necessary configuration and code to run a real-time WebSocket server."}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go"})," 1.18 or higher"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"main.go"}),": The main application entry point."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"go.mod"}),": The Go module file."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/websocket\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install the dependencies:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go mod download\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run the application:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go run main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The application should now be running on ",(0,s.jsx)(n.code,{children:"http://localhost:3000"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"websocket-endpoint",children:"WebSocket Endpoint"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GET /ws"}),": WebSocket endpoint for the application."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Connect to the WebSocket server at ",(0,s.jsx)(n.code,{children:"ws://localhost:3000/ws"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Send a message to the server."}),"\n",(0,s.jsx)(n.li,{children:"The server will echo the message back to the client."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"code-overview",children:"Code Overview"}),"\n",(0,s.jsx)(n.h3,{id:"maingo",children:(0,s.jsx)(n.code,{children:"main.go"})}),"\n",(0,s.jsx)(n.p,{children:"The main Go file sets up the Fiber application, handles WebSocket connections, and manages the WebSocket communication."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "log"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/contrib/websocket"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    // Optional middleware\n    app.Use("/ws", func(c *fiber.Ctx) error {\n        if c.Get("host") == "localhost:3000" {\n            c.Locals("Host", "Localhost:3000")\n            return c.Next()\n        }\n        return c.Status(403).SendString("Request origin not allowed")\n    })\n\n    // Upgraded websocket request\n    app.Get("/ws", websocket.New(func(c *websocket.Conn) {\n        fmt.Println(c.Locals("Host")) // "Localhost:3000"\n        for {\n            mt, msg, err := c.ReadMessage()\n            if err != nil {\n                log.Println("read:", err)\n                break\n            }\n            log.Printf("recv: %s", msg)\n            err = c.WriteMessage(mt, msg)\n            if err != nil {\n                log.Println("write:", err)\n                break\n            }\n        }\n    }))\n\n    // ws://localhost:3000/ws\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"This example provides a basic setup for a WebSocket server using Go Fiber. It can be extended and customized further to fit the needs of more complex applications."}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket",children:"WebSocket Documentation"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var i=t(67294);let s={},r=i.createContext(s);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);