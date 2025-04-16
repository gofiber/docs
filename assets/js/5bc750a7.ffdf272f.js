"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["59804"],{92996:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>a,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"grpc/README","title":"gRPC","description":"Using Fiber as a client to a gRPC server.","source":"@site/docs/recipes/grpc/README.md","sourceDirName":"grpc","slug":"/grpc/","permalink":"/docs/recipes/grpc/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/grpc/README.md","tags":[],"version":"current","lastUpdatedAt":1744830196000,"frontMatter":{"title":"gRPC","keywords":["grpc","server","client"],"description":"Using Fiber as a client to a gRPC server."},"sidebar":"left_sidebar","previous":{"title":"GraphQL","permalink":"/docs/recipes/graphql/"},"next":{"title":"Hello World","permalink":"/docs/recipes/hello-world/"}}'),i=r("85893"),s=r("50065");let l={title:"gRPC",keywords:["grpc","server","client"],description:"Using Fiber as a client to a gRPC server."},c="Example for fiber as a client to gRPC server.",a={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Output",id:"output",level:3},{value:"Additional Information",id:"additional-information",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"example-for-fiber-as-a-client-to-grpc-server",children:"Example for fiber as a client to gRPC server."})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/grpc",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,i.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/grpc",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,i.jsx)(n.p,{children:"A sample program to showcase fiber as a client to a gRPC server."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Go 1.16 or higher"}),"\n",(0,i.jsx)(n.li,{children:"Go modules"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/grpc\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install dependencies:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"go mod tidy\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the gRPC server:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"go run server/main.go\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the Fiber client:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"go run client/main.go\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The server will start on ",(0,i.jsx)(n.code,{children:"http://localhost:3000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Method"}),(0,i.jsx)(n.th,{children:"URL"}),(0,i.jsx)(n.th,{children:"Return value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"GET"}),(0,i.jsxs)(n.td,{children:["/add/",":a","/",":b"]}),(0,i.jsx)(n.td,{children:"a + b"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"GET"}),(0,i.jsxs)(n.td,{children:["/mult/",":a","/",":b"]}),(0,i.jsx)(n.td,{children:"a * b"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"output",children:"Output"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'-> curl http://localhost:3000/add/33445/443234\n{"result":"476679"}\n-> curl http://localhost:3000/mult/33445/443234\n{"result":"14823961130"}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"additional-information",children:"Additional Information"}),"\n",(0,i.jsx)(n.p,{children:"gRPC (gRPC Remote Procedure Calls) is a high-performance, open-source universal RPC framework initially developed by Google. It uses HTTP/2 for transport, Protocol Buffers as the interface description language, and provides features such as authentication, load balancing, and more."}),"\n",(0,i.jsxs)(n.p,{children:["For more information, visit the ",(0,i.jsx)(n.a,{href:"https://grpc.io/docs/",children:"official gRPC documentation"}),"."]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return l}});var t=r(67294);let i={},s=t.createContext(i);function l(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);