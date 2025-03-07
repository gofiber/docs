"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["83324"],{50501:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"ent-mysql/README","title":"Entgo ORM (MySQL)","description":"Using Entgo ORM with MySQL","source":"@site/docs/recipes/ent-mysql/README.md","sourceDirName":"ent-mysql","slug":"/ent-mysql/","permalink":"/recipes/ent-mysql/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/ent-mysql/README.md","tags":[],"version":"current","lastUpdatedAt":1741331495000,"frontMatter":{"title":"Entgo ORM (MySQL)","keywords":["ent","mysql","orm","rest"],"description":"Using Entgo ORM with MySQL"},"sidebar":"left_sidebar","previous":{"title":"Email Verification Service","permalink":"/recipes/email-verification/"},"next":{"title":"Entgo Sveltekit","permalink":"/recipes/entgo-sveltekit/"}}'),s=n("85893"),r=n("50065");let o={title:"Entgo ORM (MySQL)",keywords:["ent","mysql","orm","rest"],description:"Using Entgo ORM with MySQL"},d="Example ent ORM for fiber with MySQL",l={},c=[{value:"How to start (If no ent dir)",id:"how-to-start-if-no-ent-dir",level:2},{value:"Endpoints",id:"endpoints",level:3}];function a(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"example-ent-orm-for-fiber-with-mysql",children:"Example ent ORM for fiber with MySQL"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/ent-mysql",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,s.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/ent-mysql",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,s.jsx)(t.p,{children:"A sample program how to connect ent ORM"}),"\n",(0,s.jsx)(t.h2,{id:"how-to-start-if-no-ent-dir",children:"How to start (If no ent dir)"}),"\n",(0,s.jsx)(t.p,{children:"Execute command first"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"go run -mod=mod entgo.io/ent/cmd/ent new Book\n"})}),"\n",(0,s.jsxs)(t.p,{children:["go to ",(0,s.jsx)(t.code,{children:"./ent/schema/book.go"})," and add fields(you want) to Book Schema"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'// Fields of the Book.\nfunc (Book) Fields() []ent.Field {\n	return []ent.Field{\n		field.String("title").NotEmpty(),\n		field.String("author").NotEmpty(),\n	}\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Execute command"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"go generate ./ent\n"})}),"\n",(0,s.jsx)(t.h3,{id:"endpoints",children:"Endpoints"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Method"}),(0,s.jsx)(t.th,{children:"URL"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"GET"}),(0,s.jsx)(t.td,{children:"/book"}),(0,s.jsx)(t.td,{children:"All Books Info"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"GET"}),(0,s.jsxs)(t.td,{children:["/book",":id"]}),(0,s.jsx)(t.td,{children:"One Book Info"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"POST"}),(0,s.jsx)(t.td,{children:"/create"}),(0,s.jsx)(t.td,{children:"One Book Add"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PUT"}),(0,s.jsxs)(t.td,{children:["/update/",":id"]}),(0,s.jsx)(t.td,{children:"One Book Update"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DELETE"}),(0,s.jsxs)(t.td,{children:["/delete/",":id"]}),(0,s.jsx)(t.td,{children:"One Book Delete"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return o}});var i=n(67294);let s={},r=i.createContext(s);function o(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);