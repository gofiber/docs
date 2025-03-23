"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["21987"],{47664:function(e,r,i){i.r(r),i.d(r,{default:()=>d,frontMatter:()=>a,metadata:()=>t,assets:()=>h,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"memgraph/README","title":"Memgraph","description":"Using Memgraph.","source":"@site/docs/recipes/memgraph/README.md","sourceDirName":"memgraph","slug":"/memgraph/","permalink":"/recipes/memgraph/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/memgraph/README.md","tags":[],"version":"current","lastUpdatedAt":1742744365000,"frontMatter":{"title":"Memgraph","keywords":["memgraph","graph","database"],"description":"Using Memgraph."},"sidebar":"left_sidebar","previous":{"title":"Kubernetes","permalink":"/recipes/k8s/"},"next":{"title":"MinIO","permalink":"/recipes/minio/"}}'),n=i("85893"),s=i("50065");let a={title:"Memgraph",keywords:["memgraph","graph","database"],description:"Using Memgraph."},o="Fiber and Memgraph",h={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run Memgraph",id:"run-memgraph",level:2},{value:"Run the recipe",id:"run-the-recipe",level:2},{value:"Test the recipe",id:"test-the-recipe",level:2},{value:"Additional resources",id:"additional-resources",level:2}];function c(e){let r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"fiber-and-memgraph",children:"Fiber and Memgraph"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://github.com/gofiber/recipes/tree/master/memgraph",children:(0,n.jsx)(r.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,n.jsx)(r.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/memgraph",children:(0,n.jsx)(r.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,n.jsx)(r.p,{children:"This is a cookbook recipe for setting up Fiber backend and Memgraph database. \uD83D\uDE80"}),"\n",(0,n.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(r.p,{children:"Go is an obvious prerequisite. Make sure it is installed and configured properly."}),"\n",(0,n.jsx)(r.p,{children:"After that you need two Go packages: Fiber and Neo4j driver for Go. You can install them with the following commands:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get github.com/neo4j/neo4j-go-driver/v5\n"})}),"\n",(0,n.jsx)(r.h2,{id:"run-memgraph",children:"Run Memgraph"}),"\n",(0,n.jsx)(r.p,{children:"The easiest way to run Memgraph is to use Docker.\nOnce docker is installed on your machine, you can run Memgraph with the following command:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"docker run \u2013name memgraph -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -v mg_lib:/var/lib/memgraph memgraph/memgraph-platform\n"})}),"\n",(0,n.jsx)(r.h2,{id:"run-the-recipe",children:"Run the recipe"}),"\n",(0,n.jsx)(r.p,{children:"After you have installed all the prerequisites, you can run the recipe with the following command:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"cd memgraph\ngo run ./main.go\n"})}),"\n",(0,n.jsx)(r.p,{children:"This will do the following:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Connect Fiber backend to Memgraph database"}),"\n",(0,n.jsx)(r.li,{children:"Generate mock data to populate the database"}),"\n",(0,n.jsx)(r.li,{children:"Define two request handlers: one for getting the graph and one for getting developer nodes"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"test-the-recipe",children:"Test the recipe"}),"\n",(0,n.jsx)(r.p,{children:"Once Fiber app is running, you can test the recipe by sending a GET request to the following endpoints:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"http://localhost:3000/graph\nhttp://localhost:3000/developer/Andy\n"})}),"\n",(0,n.jsx)(r.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,n.jsx)(r.p,{children:"For extra information use the documentation on the following links:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Fiber: ",(0,n.jsx)(r.a,{href:"https://docs.gofiber.io/",children:"https://docs.gofiber.io/"})]}),"\n",(0,n.jsxs)(r.li,{children:["Memgraph: ",(0,n.jsx)(r.a,{href:"https://memgraph.com/docs",children:"https://memgraph.com/docs"})]}),"\n"]})]})}function d(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},50065:function(e,r,i){i.d(r,{Z:function(){return o},a:function(){return a}});var t=i(67294);let n={},s=t.createContext(n);function a(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);