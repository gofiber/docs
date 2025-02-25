"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["7150"],{8768:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"rabbitmq/README","title":"RabbitMQ","description":"Using RabbitMQ.","source":"@site/docs/recipes/rabbitmq/README.md","sourceDirName":"rabbitmq","slug":"/rabbitmq/","permalink":"/recipes/rabbitmq/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/rabbitmq/README.md","tags":[],"version":"current","lastUpdatedAt":1740509232000,"frontMatter":{"title":"RabbitMQ","keywords":["rabbitmq","amqp","messaging","queue"],"description":"Using RabbitMQ."},"sidebar":"left_sidebar","previous":{"title":"Prefork","permalink":"/recipes/prefork/"},"next":{"title":"React","permalink":"/recipes/react-router/"}}'),n=r("85893"),i=r("50065");let a={title:"RabbitMQ",keywords:["rabbitmq","amqp","messaging","queue"],description:"Using RabbitMQ."},o="Fiber and RabbitMQ example",l={},c=[{value:"How it works?",id:"how-it-works",level:2}];function d(e){let t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"fiber-and-rabbitmq-example",children:"Fiber and RabbitMQ example"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/rabbitmq",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,n.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/rabbitmq",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Create Docker network:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"make docker.network\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"Run Docker container with RabbitMQ:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"make docker.rabbitmq\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"Wait 2-3 minutes for the RabbitMQ container to be ready to use."}),"\n",(0,n.jsx)(t.li,{children:"Run Docker container with worker:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"make docker.worker\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"5",children:["\n",(0,n.jsxs)(t.li,{children:["Start Fiber API server (",(0,n.jsx)(t.em,{children:"on another console"}),"):"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"make run\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"6",children:["\n",(0,n.jsxs)(t.li,{children:["Go to ",(0,n.jsx)(t.a,{href:"http://127.0.0.1:3000/send?msg=Hello!",children:"127.0.0.1:3000/send?msg=Hello!"})," and see received message on worker's console, like this:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"2021/03/27 16:32:35 Successfully connected to RabbitMQ instance\n2021/03/27 16:32:35 [*] - Waiting for messages\n2021/03/27 16:32:35 [*] - Run Fiber API server and go to http://127.0.0.1:3000/send?msg=<YOUR TEXT HERE>\n2021/03/27 16:33:24 Received message: Hello!\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"7",children:["\n",(0,n.jsxs)(t.li,{children:["Also, you can see useful RabbitMQ dashboard at ",(0,n.jsx)(t.a,{href:"http://localhost:15672",children:"localhost:15672"}),":"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/11155743/112728092-8fe3a980-8f36-11eb-9d79-be8eab26358b.png",alt:"Screenshot"})}),"\n",(0,n.jsx)(t.h2,{id:"how-it-works",children:"How it works?"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/11155743/112727736-f8ca2200-8f34-11eb-8d40-12d9f381bd05.png",alt:"Screenshot"})})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return a}});var s=r(67294);let n={},i=s.createContext(n);function a(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);