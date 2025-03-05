"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["34149"],{92565:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>o});var t=JSON.parse('{"id":"sse/README","title":"Server-Sent Events","description":"Implementing Server-Sent Events in an application.","source":"@site/docs/recipes/sse/README.md","sourceDirName":"sse","slug":"/sse/","permalink":"/recipes/sse/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/sse/README.md","tags":[],"version":"current","lastUpdatedAt":1741158213000,"frontMatter":{"title":"Server-Sent Events","keywords":["sse","server-sent events","real-time"],"description":"Implementing Server-Sent Events in an application."},"sidebar":"left_sidebar","previous":{"title":"Sqlc","permalink":"/recipes/sqlc/"},"next":{"title":"Stream Request Body","permalink":"/recipes/stream-request-body/"}}'),s=i("85893"),r=i("50065");let l={title:"Server-Sent Events",keywords:["sse","server-sent events","real-time"],description:"Implementing Server-Sent Events in an application."},o="Server-Sent Events with Fiber",c={},a=[{value:"Description",id:"description",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Code Overview",id:"code-overview",level:2},{value:"<code>main.go</code>",id:"maingo",level:3},{value:"<code>index.html</code>",id:"indexhtml",level:3},{value:"Additional Information",id:"additional-information",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"server-sent-events-with-fiber",children:"Server-Sent Events with Fiber"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/sse",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,s.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/sse",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,s.jsx)(n.p,{children:"This example demonstrates how to implement Server-Sent Events (SSE) in a Fiber application."}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Server-Sent Events (SSE) allow servers to push updates to the client over a single HTTP connection. This is useful for real-time applications where the server needs to continuously send data to the client, such as live feeds, notifications, or real-time charts."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Go 1.16 or higher"}),"\n",(0,s.jsx)(n.li,{children:"Go modules"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/sse\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install dependencies:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"go mod tidy\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run the application:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The server will start on ",(0,s.jsx)(n.code,{children:"http://localhost:3000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GET /"}),": Index page"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GET /sse"}),": SSE route"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open your browser and navigate to ",(0,s.jsx)(n.code,{children:"http://localhost:3000"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"The client will automatically connect to the SSE endpoint and start receiving updates from the server."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"code-overview",children:"Code Overview"}),"\n",(0,s.jsx)(n.h3,{id:"maingo",children:(0,s.jsx)(n.code,{children:"main.go"})}),"\n",(0,s.jsx)(n.p,{children:"The main Go file sets up the Fiber application and handles the SSE connections. It includes the necessary configuration to send events to the client."}),"\n",(0,s.jsx)(n.h3,{id:"indexhtml",children:(0,s.jsx)(n.code,{children:"index.html"})}),"\n",(0,s.jsx)(n.p,{children:"The HTML file provides a simple user interface to connect to the SSE endpoint and display the received messages."}),"\n",(0,s.jsx)(n.h2,{id:"additional-information",children:"Additional Information"}),"\n",(0,s.jsx)(n.p,{children:"Server-Sent Events (SSE) is a standard allowing servers to push data to web clients over HTTP. Unlike WebSockets, which require a full-duplex connection, SSE uses a unidirectional connection from the server to the client. This makes SSE simpler to implement and more efficient for scenarios where only the server needs to send updates."}),"\n",(0,s.jsx)(n.p,{children:"For more information on SSE, you can refer to the following resources:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events",children:"Server-Sent Events on MDN"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Server-sent_events",children:"Server-Sent Events on Wikipedia"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return l}});var t=i(67294);let s={},r=t.createContext(s);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);