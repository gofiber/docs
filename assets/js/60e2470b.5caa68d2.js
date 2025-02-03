"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["34935"],{61789:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"parsley/README","title":"Parsley","description":"Using Parsley for dependency injection in an application.","source":"@site/docs/recipes/parsley/README.md","sourceDirName":"parsley","slug":"/parsley/","permalink":"/recipes/parsley/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/parsley/README.md","tags":[],"version":"current","lastUpdatedAt":1738589498000,"frontMatter":{"title":"Parsley","keywords":["parsley","dependency injection","di","inversion of control","ioc"],"description":"Using Parsley for dependency injection in an application."},"sidebar":"left_sidebar","previous":{"title":"Optional Parameter","permalink":"/recipes/optional-parameter/"},"next":{"title":"PostgreSQL","permalink":"/recipes/postgresql/"}}'),r=i("85893"),s=i("50065");let a={title:"Parsley",keywords:["parsley","dependency injection","di","inversion of control","ioc"],description:"Using Parsley for dependency injection in an application."},o="Fiber with Dependency Injection (via Parsley)",l={},c=[{value:"Overview",id:"overview",level:2},{value:"Key Features",id:"key-features",level:2},{value:"How It Works",id:"how-it-works",level:2},{value:"Running the Example",id:"running-the-example",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"fiber-with-dependency-injection-via-parsley",children:"Fiber with Dependency Injection (via Parsley)"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/parsley",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,r.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/parsley",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,r.jsxs)(n.p,{children:["This example demonstrates integrating the ",(0,r.jsx)(n.a,{href:"https://github.com/matzefriedrich/parsley",children:"Parsley dependency injection framework"})," into a GoFiber web application. The goal is to showcase how dependency injection can create a clean, maintainable, and modular structure in your GoFiber projects."]}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"In this example, we use Parsley to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bootstrap the Application:"})," Set up and configure the Fiber app using Parsley\u2019s DI container."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Register Dependencies:"})," Define and register services and route handlers with the DI container."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Resolve Dependencies:"})," Automatically resolve and inject them where needed."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"key-features",children:"Key Features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Modular Configuration:"})," Services are registered in modules, allowing for a clean separation of concerns."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Automatic Dependency Injection:"})," Constructor-based dependency injection wire services together."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Simplified Route Management:"})," Route handlers are registered and managed via the DI container, making it easy to extend and maintain."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"main"})," function bootstraps the application using Parsley\u2019s ",(0,r.jsx)(n.code,{children:"RunParsleyApplication"})," function."]}),"\n",(0,r.jsx)(n.li,{children:"Modules define how services (such as the Fiber app and route handlers) are registered and configured."}),"\n",(0,r.jsxs)(n.li,{children:["Route handlers are implemented as services that receive their dependencies (like the ",(0,r.jsx)(n.code,{children:"Greeter"})," service) via constructor injection.\nThe ",(0,r.jsx)(n.code,{children:"Greeter"})," service is a simple example of how services can be injected and used within route handlers to handle HTTP requests."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"running-the-example",children:"Running the Example"}),"\n",(0,r.jsx)(n.p,{children:"To run this example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Clone the repository and navigate to the example directory."}),"\n",(0,r.jsxs)(n.li,{children:["Run ",(0,r.jsx)(n.code,{children:"go run main.go"})," to start the application."]}),"\n",(0,r.jsxs)(n.li,{children:["Access the application by navigating to ",(0,r.jsx)(n.code,{children:"http://localhost:5502/say-hello?name=YourName"}),". This will return a greeting message, demonstrating the integration of Parsley with GoFiber."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return a}});var t=i(67294);let r={},s=t.createContext(r);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);