"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["32763"],{77723:function(e,t,i){i.r(t),i.d(t,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"gorm/README","title":"GORM","description":"Using GORM with SQLite database.","source":"@site/docs/recipes/gorm/README.md","sourceDirName":"gorm","slug":"/gorm/","permalink":"/recipes/gorm/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/gorm/README.md","tags":[],"version":"current","lastUpdatedAt":1733047527000,"frontMatter":{"title":"GORM","keywords":["gorm","sqlite","api","rest"],"description":"Using GORM with SQLite database."},"sidebar":"left_sidebar","previous":{"title":"GeoIP + MaxMind","permalink":"/recipes/geoip-maxmind/"},"next":{"title":"GORM MySQL","permalink":"/recipes/gorm-mysql/"}}'),n=i("85893"),l=i("50065");let r={title:"GORM",keywords:["gorm","sqlite","api","rest"],description:"Using GORM with SQLite database."},o="GORM Example",a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Example Requests",id:"example-requests",level:2},{value:"Get All Books",id:"get-all-books",level:3},{value:"Get Book by ID",id:"get-book-by-id",level:3},{value:"Create a New Book",id:"create-a-new-book",level:3},{value:"Delete a Book",id:"delete-a-book",level:3}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"gorm-example",children:"GORM Example"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/gorm",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,n.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/gorm",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,n.jsx)(t.p,{children:"This is a sample program demonstrating how to use GORM as an ORM to connect to a SQLite database with the Fiber web framework."}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Go 1.18 or higher"}),"\n",(0,n.jsx)(t.li,{children:"Go modules"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Clone the repository:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/gorm-example\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Install dependencies:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"go mod tidy\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Run the application:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["The server will start on ",(0,n.jsx)(t.code,{children:"http://localhost:3000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Method"}),(0,n.jsx)(t.th,{children:"URL"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"GET"}),(0,n.jsx)(t.td,{children:"/api/v1/book"}),(0,n.jsx)(t.td,{children:"Retrieves all books"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"GET"}),(0,n.jsxs)(t.td,{children:["/api/v1/book/",":id"]}),(0,n.jsx)(t.td,{children:"Retrieves a book by ID"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"POST"}),(0,n.jsx)(t.td,{children:"/api/v1/book"}),(0,n.jsx)(t.td,{children:"Creates a new book"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DELETE"}),(0,n.jsxs)(t.td,{children:["/api/v1/book/",":id"]}),(0,n.jsx)(t.td,{children:"Deletes a book"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"example-requests",children:"Example Requests"}),"\n",(0,n.jsx)(t.h3,{id:"get-all-books",children:"Get All Books"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"curl -X GET http://localhost:3000/api/v1/book\n"})}),"\n",(0,n.jsx)(t.h3,{id:"get-book-by-id",children:"Get Book by ID"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"curl -X GET http://localhost:3000/api/v1/book/1\n"})}),"\n",(0,n.jsx)(t.h3,{id:"create-a-new-book",children:"Create a New Book"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:'curl -X POST http://localhost:3000/api/v1/book -d \'{"title": "New Book", "author": "Author Name"}\' -H "Content-Type: application/json"\n'})}),"\n",(0,n.jsx)(t.h3,{id:"delete-a-book",children:"Delete a Book"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"curl -X DELETE http://localhost:3000/api/v1/book/1\n"})})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return r}});var s=i(67294);let n={},l=s.createContext(n);function r(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);