"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["18726"],{33570:function(e,t,s){s.r(t),s.d(t,{metadata:()=>n,contentTitle:()=>r,default:()=>d,assets:()=>l,toc:()=>a,frontMatter:()=>c});var n=JSON.parse('{"id":"socketio/README","title":"Socketio","description":"A chatroom application using Socket.IO.","source":"@site/docs/recipes/socketio/README.md","sourceDirName":"socketio","slug":"/socketio/","permalink":"/recipes/socketio/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/socketio/README.md","tags":[],"version":"current","lastUpdatedAt":1735889916000,"frontMatter":{"title":"Socketio","keywords":["websocket","chat","socketio","chatroom","contrib"],"description":"A chatroom application using Socket.IO."},"sidebar":"left_sidebar","previous":{"title":"Sessions + SQLite3","permalink":"/recipes/sessions-sqlite3/"},"next":{"title":"Single Page Application (SPA)","permalink":"/recipes/spa/"}}'),i=s("85893"),o=s("50065");let c={title:"Socketio",keywords:["websocket","chat","socketio","chatroom","contrib"],description:"A chatroom application using Socket.IO."},r="WebSocket Chat Example",l={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Connecting to the WebSocket",id:"connecting-to-the-websocket",level:2},{value:"Message Object Example",id:"message-object-example",level:2}];function h(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"websocket-chat-example",children:"WebSocket Chat Example"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/socketio",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,i.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/socketio",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,i.jsx)(t.p,{children:"This example demonstrates how to create a simple chatroom using WebSockets. The chatroom supports multiple users and allows them to send messages to each other."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Go 1.16 or higher"}),"\n",(0,i.jsx)(t.li,{children:"Go modules"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Clone the repository:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/socketio-chat\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Install dependencies:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"go mod tidy\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Run the application:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["The server will start on ",(0,i.jsx)(t.code,{children:"http://localhost:3000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"connecting-to-the-websocket",children:"Connecting to the WebSocket"}),"\n",(0,i.jsx)(t.p,{children:"To connect to the WebSocket, use the following URL:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"ws://localhost:3000/ws/<user-id>\n"})}),"\n",(0,i.jsx)(t.h2,{id:"message-object-example",children:"Message Object Example"}),"\n",(0,i.jsx)(t.p,{children:"Here is an example of a message object that can be sent between users:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "from": "<user-id>",\n  "to": "<recipient-user-id>",\n  "data": "hello"\n}\n'})})]})}function d(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},50065:function(e,t,s){s.d(t,{Z:function(){return r},a:function(){return c}});var n=s(67294);let i={},o=n.createContext(i);function c(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);