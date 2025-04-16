"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["20840"],{98118:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>a,toc:()=>c,contentTitle:()=>r});var i=JSON.parse('{"id":"clean-code/README","title":"Clean Code","description":"Implementing clean code in Go.","source":"@site/docs/recipes/clean-code/README.md","sourceDirName":"clean-code","slug":"/clean-code/","permalink":"/docs/recipes/clean-code/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/clean-code/README.md","tags":[],"version":"current","lastUpdatedAt":1744830196000,"frontMatter":{"title":"Clean Code","keywords":["clean","code","fiber","postgres","go"],"description":"Implementing clean code in Go."},"sidebar":"left_sidebar","previous":{"title":"Clean Architecture","permalink":"/docs/recipes/clean-architecture/"},"next":{"title":"Cloud Run","permalink":"/docs/recipes/cloud-run/"}}'),t=s("85893"),l=s("50065");let o={title:"Clean Code",keywords:["clean","code","fiber","postgres","go"],description:"Implementing clean code in Go."},r="Clean Code Example",a={},c=[{value:"Description of Clean Code",id:"description-of-clean-code",level:2},{value:"Start",id:"start",level:2},{value:"Endpoints",id:"endpoints",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"clean-code-example",children:"Clean Code Example"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/clean-code",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,t.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/clean-code",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,t.jsxs)(n.p,{children:["This is an example of a RESTful API built using the Fiber framework (",(0,t.jsx)(n.a,{href:"https://gofiber.io/",children:"https://gofiber.io/"}),") and PostgreSQL as the database."]}),"\n",(0,t.jsx)(n.h2,{id:"description-of-clean-code",children:"Description of Clean Code"}),"\n",(0,t.jsx)(n.p,{children:"Clean code is a philosophy and set of practices aimed at writing code that is easy to understand, maintain, and extend. Key principles of clean code include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Readability"}),": Code should be easy to read and understand."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Simplicity"}),": Avoid unnecessary complexity."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Consistency"}),": Follow consistent coding standards and conventions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Modularity"}),": Break down code into small, reusable, and independent modules."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Testability"}),": Write code that is easy to test."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This Fiber app is a good example of clean code because:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Modular Structure"}),": The code is organized into distinct modules, making it easy to navigate and understand."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Clear Separation of Concerns"}),": Different parts of the application (e.g., routes, handlers, services) are clearly separated, making the codebase easier to maintain and extend."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Error Handling"}),": Proper error handling is implemented to ensure the application behaves predictably."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"start",children:"Start"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Build and start the containers:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"docker compose up --build\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The application should now be running and accessible at ",(0,t.jsx)(n.code,{children:"http://localhost:3000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"GET /api/v1/books"}),": Retrieves a list of all books."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"curl -X GET http://localhost:3000/api/v1/books\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"POST /api/v1/books"}),": Adds a new book to the collection."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'curl -X POST http://localhost:3000/api/v1/books \\\n     -H "Content-Type: application/json" \\\n     -d \'{"title":"Title"}\'\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return o}});var i=s(67294);let t={},l=i.createContext(t);function o(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);