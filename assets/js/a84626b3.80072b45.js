"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["94789"],{69569:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>r});var i=JSON.parse('{"id":"entgo-sveltekit/README","title":"Entgo Sveltekit","description":"A full-stack Todo application built using Sveltekit, Tailwind CSS, Entgo, and SQLite.","source":"@site/docs/recipes/entgo-sveltekit/README.md","sourceDirName":"entgo-sveltekit","slug":"/entgo-sveltekit/","permalink":"/recipes/entgo-sveltekit/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/entgo-sveltekit/README.md","tags":[],"version":"current","lastUpdatedAt":1744205860000,"frontMatter":{"title":"Entgo Sveltekit","keywords":["ent","sveltekit","tailwindcss","sqlite","rest"],"description":"A full-stack Todo application built using Sveltekit, Tailwind CSS, Entgo, and SQLite."},"sidebar":"left_sidebar","previous":{"title":"Entgo ORM (MySQL)","permalink":"/recipes/ent-mysql/"},"next":{"title":"SvelteKit and Tailwind CSS Project","permalink":"/recipes/entgo-sveltekit/template/"}}'),s=n("85893"),l=n("50065");let d={title:"Entgo Sveltekit",keywords:["ent","sveltekit","tailwindcss","sqlite","rest"],description:"A full-stack Todo application built using Sveltekit, Tailwind CSS, Entgo, and SQLite."},r="Todo Application",o={},c=[{value:"Run the Project",id:"run-the-project",level:2},{value:"Available Commands",id:"available-commands",level:2},{value:"Usage",id:"usage",level:2},{value:"API Routes",id:"api-routes",level:2},{value:"Go Dependencies",id:"go-dependencies",level:2},{value:"Npm Dependencies",id:"npm-dependencies",level:2}];function a(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"todo-application",children:"Todo Application"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/entgo-sveltekit",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,s.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/entgo-sveltekit",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/ugurkorkmaz/gofiber-recipes/assets/40540244/08c6ee52-724a-4cf4-8352-9cf6f5b007ef",alt:"image"})}),"\n",(0,s.jsx)(t.p,{children:"This Todo application is a full-stack project built using Sveltekit, Tailwind CSS, Fiber, Entgo, and SQLite. It showcases the construction of a monolithic architecture for a full-stack application."}),"\n",(0,s.jsx)(t.h2,{id:"run-the-project",children:"Run the Project"}),"\n",(0,s.jsx)(t.p,{children:"To run the project, follow these steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Execute the following command to run all the necessary commands for building and running the application:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"go run ./bin all\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Once the build process is complete, you can start the application by running:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"./app\n"})}),"\n",(0,s.jsx)(t.h2,{id:"available-commands",children:"Available Commands"}),"\n",(0,s.jsx)(t.p,{children:"The following commands are available to manage the project:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Command"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"go-run"})}),(0,s.jsx)(t.td,{children:"Run the Golang project."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"go-build"})}),(0,s.jsx)(t.td,{children:"Build the Golang project."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"go-test"})}),(0,s.jsx)(t.td,{children:"Run tests for the Golang project."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"svelte-run"})}),(0,s.jsx)(t.td,{children:"Run the SvelteKit project."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"svelte-build"})}),(0,s.jsx)(t.td,{children:"Build the SvelteKit project."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"generate-ent"})}),(0,s.jsx)(t.td,{children:"Generate entity files."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"all"})}),(0,s.jsxs)(t.td,{children:["Run all commands (",(0,s.jsx)(t.code,{children:"generate-ent"}),", ",(0,s.jsx)(t.code,{children:"svelte-build"}),", ",(0,s.jsx)(t.code,{children:"go-test"}),", ",(0,s.jsx)(t.code,{children:"go-build"}),")."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.p,{children:"To use this application, run the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"go run ./bin <command>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"api-routes",children:"API Routes"}),"\n",(0,s.jsx)(t.p,{children:"The Go Fiber application provides the following API routes:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Method"}),(0,s.jsx)(t.th,{children:"Endpoint"}),(0,s.jsx)(t.th,{children:"Handler Function"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"GET"}),(0,s.jsx)(t.td,{children:"/api/v1/todo/list"}),(0,s.jsx)(t.td,{children:"todoHandler.GetAllTodos"}),(0,s.jsx)(t.td,{children:"Get a list of all todos"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"GET"}),(0,s.jsxs)(t.td,{children:["/api/v1/todo/get/",":id"]}),(0,s.jsx)(t.td,{children:"todoHandler.GetTodoByID"}),(0,s.jsx)(t.td,{children:"Get a specific todo by its ID"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"POST"}),(0,s.jsx)(t.td,{children:"/api/v1/todo/create"}),(0,s.jsx)(t.td,{children:"todoHandler.CreateTodo"}),(0,s.jsx)(t.td,{children:"Create a new todo"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PUT"}),(0,s.jsxs)(t.td,{children:["/api/v1/todo/update/",":id"]}),(0,s.jsx)(t.td,{children:"todoHandler.UpdateTodoByID"}),(0,s.jsx)(t.td,{children:"Update an existing todo by its ID"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DELETE"}),(0,s.jsxs)(t.td,{children:["/api/v1/todo/delete/",":id"]}),(0,s.jsx)(t.td,{children:"todoHandler.DeleteTodoByID"}),(0,s.jsx)(t.td,{children:"Delete a todo by its ID"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"go-dependencies",children:"Go Dependencies"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Go Modules:"})," Go's built-in package manager used to manage dependencies for Go projects."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Entgo:"})," A Golang Object Relational Mapping (ORM) tool used to define and generate database schemas."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Fiber:"})," A fast and minimalist web framework for Golang."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Sqlite:"})," A small, lightweight, embedded SQL database engine."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"npm-dependencies",children:"Npm Dependencies"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"SvelteKit:"})," A JavaScript framework used to build modern web applications."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Tailwind CSS:"})," A fast and customizable CSS styling library. Can be used in SvelteKit projects."]}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.p,{children:["Author: ",(0,s.jsx)(t.a,{href:"https://github.com/ugurkorkmaz",children:"@ugurkorkmaz"})]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return d}});var i=n(67294);let s={},l=i.createContext(s);function d(e){let t=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);