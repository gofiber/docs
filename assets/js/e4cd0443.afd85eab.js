"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["25679"],{83813:function(e,s,t){t.r(s),t.d(s,{metadata:()=>n,contentTitle:()=>o,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>r});var n=JSON.parse('{"id":"gorm-mysql/README","title":"GORM MySQL","description":"Using GORM with MySQL database.","source":"@site/docs/recipes/gorm-mysql/README.md","sourceDirName":"gorm-mysql","slug":"/gorm-mysql/","permalink":"/recipes/gorm-mysql/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/gorm-mysql/README.md","tags":[],"version":"current","lastUpdatedAt":1732892323000,"frontMatter":{"title":"GORM MySQL","keywords":["gorm","mysql","database","rest","api"],"description":"Using GORM with MySQL database."},"sidebar":"left_sidebar","previous":{"title":"GORM","permalink":"/recipes/gorm/"},"next":{"title":"GORM + PostgreSQL","permalink":"/recipes/gorm-postgres/"}}'),l=t("85893"),i=t("50065");let r={title:"GORM MySQL",keywords:["gorm","mysql","database","rest","api"],description:"Using GORM with MySQL database."},o="GORM MySQL Example",d={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Example Requests",id:"example-requests",level:2},{value:"Get All Books",id:"get-all-books",level:3},{value:"Get Book by ID",id:"get-book-by-id",level:3},{value:"Create a New Book",id:"create-a-new-book",level:3},{value:"Update a Book",id:"update-a-book",level:3},{value:"Delete a Book",id:"delete-a-book",level:3}];function c(e){let s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.header,{children:(0,l.jsx)(s.h1,{id:"gorm-mysql-example",children:"GORM MySQL Example"})}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.a,{href:"https://github.com/gofiber/recipes/tree/master/gorm-mysql",children:(0,l.jsx)(s.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,l.jsx)(s.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/gorm-mysql",children:(0,l.jsx)(s.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,l.jsx)(s.p,{children:"This is a sample program demonstrating how to use GORM as an ORM to connect to a MySQL database with the Fiber web framework."}),"\n",(0,l.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Go 1.16 or higher"}),"\n",(0,l.jsx)(s.li,{children:"MySQL database"}),"\n",(0,l.jsx)(s.li,{children:"Go modules"}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Clone the repository:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/gorm-mysql\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Install dependencies:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sh",children:"go mod tidy\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Configure the database connection in the ",(0,l.jsx)(s.code,{children:"config.json"})," file:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-json",children:'{\n  "DB_Username": "your_db_username",\n  "DB_Password": "your_db_password",\n  "DB_Name": "your_db_name",\n  "DB_Host": "localhost",\n  "DB_Port": "3306"\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Run the application:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["The server will start on ",(0,l.jsx)(s.code,{children:"http://localhost:3000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Method"}),(0,l.jsx)(s.th,{children:"URL"}),(0,l.jsx)(s.th,{children:"Description"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"GET"}),(0,l.jsx)(s.td,{children:"/hello"}),(0,l.jsx)(s.td,{children:"Returns a hello message"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"GET"}),(0,l.jsx)(s.td,{children:"/allbooks"}),(0,l.jsx)(s.td,{children:"Retrieves all books"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"GET"}),(0,l.jsxs)(s.td,{children:["/book/",":id"]}),(0,l.jsx)(s.td,{children:"Retrieves a book by ID"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"POST"}),(0,l.jsx)(s.td,{children:"/book"}),(0,l.jsx)(s.td,{children:"Creates a new book"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"PUT"}),(0,l.jsx)(s.td,{children:"/book"}),(0,l.jsx)(s.td,{children:"Updates an existing book"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"DELETE"}),(0,l.jsx)(s.td,{children:"/book"}),(0,l.jsx)(s.td,{children:"Deletes a book"})]})]})]}),"\n",(0,l.jsx)(s.h2,{id:"example-requests",children:"Example Requests"}),"\n",(0,l.jsx)(s.h3,{id:"get-all-books",children:"Get All Books"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sh",children:"curl -X GET http://localhost:3000/allbooks\n"})}),"\n",(0,l.jsx)(s.h3,{id:"get-book-by-id",children:"Get Book by ID"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sh",children:"curl -X GET http://localhost:3000/book/1\n"})}),"\n",(0,l.jsx)(s.h3,{id:"create-a-new-book",children:"Create a New Book"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sh",children:'curl -X POST http://localhost:3000/book -d \'{"title": "New Book", "author": "Author Name"}\' -H "Content-Type: application/json"\n'})}),"\n",(0,l.jsx)(s.h3,{id:"update-a-book",children:"Update a Book"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sh",children:'curl -X PUT http://localhost:3000/book -d \'{"id": 1, "title": "Updated Book", "author": "Updated Author"}\' -H "Content-Type: application/json"\n'})}),"\n",(0,l.jsx)(s.h3,{id:"delete-a-book",children:"Delete a Book"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sh",children:'curl -X DELETE http://localhost:3000/book -d \'{"id": 1}\' -H "Content-Type: application/json"\n'})})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,s,t){t.d(s,{Z:function(){return o},a:function(){return r}});var n=t(67294);let l={},i=n.createContext(l);function r(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);