"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["47588"],{38861:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>d,assets:()=>r,toc:()=>a,frontMatter:()=>o});var i=JSON.parse('{"id":"websocket-chat/README","title":"WebSocket Chat","description":"Real-time chat application using WebSockets.","source":"@site/docs/recipes/websocket-chat/README.md","sourceDirName":"websocket-chat","slug":"/websocket-chat/","permalink":"/recipes/websocket-chat/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/websocket-chat/README.md","tags":[],"version":"current","lastUpdatedAt":1738589498000,"frontMatter":{"title":"WebSocket Chat","keywords":["websocket","chat","chatroom","contrib"],"description":"Real-time chat application using WebSockets."},"sidebar":"left_sidebar","previous":{"title":"WebSocket","permalink":"/recipes/websocket/"}}'),s=t("85893"),c=t("50065");let o={title:"WebSocket Chat",keywords:["websocket","chat","chatroom","contrib"],description:"Real-time chat application using WebSockets."},l="WebSocket Chat Example",r={},a=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Setup",id:"setup",level:2},{value:"WebSocket Endpoints",id:"websocket-endpoints",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Code Overview",id:"code-overview",level:2},{value:"<code>main.go</code>",id:"maingo",level:3},{value:"<code>home.html</code>",id:"homehtml",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function h(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"websocket-chat-example",children:"WebSocket Chat Example"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/websocket-chat",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,s.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/websocket-chat",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,s.jsx)(n.p,{children:"This example demonstrates a simple chat application using Go Fiber and WebSockets."}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This project provides a basic setup for a WebSocket-based chat application using Go Fiber. It includes the necessary configuration and code to run a real-time chat server."}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go"})," 1.18 or higher"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"main.go"}),": The main application entry point."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"home.html"}),": The HTML file for the chat client."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"go.mod"}),": The Go module file."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/websocket-chat\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install the dependencies:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go mod download\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run the application:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go run main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The application should now be running on ",(0,s.jsx)(n.code,{children:"http://localhost:8080"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"websocket-endpoints",children:"WebSocket Endpoints"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GET /ws"}),": WebSocket endpoint for the chat application."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open your browser and navigate to ",(0,s.jsx)(n.code,{children:"http://localhost:8080"}),"."]}),"\n",(0,s.jsx)(n.li,{children:'Enter a message in the input field and click "Send".'}),"\n",(0,s.jsx)(n.li,{children:"The message should appear in the chat log."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"code-overview",children:"Code Overview"}),"\n",(0,s.jsx)(n.h3,{id:"maingo",children:(0,s.jsx)(n.code,{children:"main.go"})}),"\n",(0,s.jsx)(n.p,{children:"The main Go file sets up the Fiber application, handles WebSocket connections, and manages the chat hub."}),"\n",(0,s.jsx)(n.h3,{id:"homehtml",children:(0,s.jsx)(n.code,{children:"home.html"})}),"\n",(0,s.jsx)(n.p,{children:"The HTML file provides a simple user interface for the chat application, including a message log and input field."}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"This example provides a basic setup for a WebSocket-based chat application using Go Fiber. It can be extended and customized further to fit the needs of more complex applications."}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket",children:"WebSocket Documentation"})}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var i=t(67294);let s={},c=i.createContext(s);function o(e){let n=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);