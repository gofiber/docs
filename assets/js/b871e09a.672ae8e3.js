"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["4230"],{47753:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>a,default:()=>c,assets:()=>l,toc:()=>h,frontMatter:()=>s});var i=JSON.parse('{"id":"todo-app-with-auth-gorm/README","title":"Todo App + Auth + GORM","description":"A Todo application with authentication using GORM.","source":"@site/docs/recipes/todo-app-with-auth-gorm/README.md","sourceDirName":"todo-app-with-auth-gorm","slug":"/todo-app-with-auth-gorm/","permalink":"/recipes/todo-app-with-auth-gorm/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/todo-app-with-auth-gorm/README.md","tags":[],"version":"current","lastUpdatedAt":1738589498000,"frontMatter":{"title":"Todo App + Auth + GORM","keywords":["todo app","gorm","authentication"],"description":"A Todo application with authentication using GORM."},"sidebar":"left_sidebar","previous":{"title":"Template Asset Bundling","permalink":"/recipes/template-asset-bundling/"},"next":{"title":"Unit Testing","permalink":"/recipes/unit-test/"}}'),o=n("85893"),r=n("50065");let s={title:"Todo App + Auth + GORM",keywords:["todo app","gorm","authentication"],description:"A Todo application with authentication using GORM."},a="Todo App with Auth using GORM",l={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Environment Variables",id:"environment-variables",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"todo-app-with-auth-using-gorm",children:"Todo App with Auth using GORM"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/todo-app-with-auth-gorm",children:(0,o.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,o.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/todo-app-with-auth-gorm",children:(0,o.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,o.jsx)(t.p,{children:"This project demonstrates a Todo application with authentication using GORM."}),"\n",(0,o.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(t.p,{children:["Ensure you have the following installed and available in your ",(0,o.jsx)(t.code,{children:"GOPATH"}),":"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Golang"}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/air-verse/air",children:"Air"})," for hot reloading"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/joho/godotenv",children:"Godotenv"})," for loading ",(0,o.jsx)(t.code,{children:".env"})," file"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Clone the repository:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/todo-app-with-auth-gorm\n"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Install dependencies:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"go get\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Start the application:","\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"air\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,o.jsxs)(t.p,{children:["Create a ",(0,o.jsx)(t.code,{children:".env"})," file in the root directory and add the following variables:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"# PORT returns the server listening port\n# default: 5000\nPORT=\n\n# DB returns the name of the sqlite database\n# default: gotodo.db\nDB=\n\n# TOKENKEY returns the jwt token secret\nTOKENKEY=\n\n# TOKENEXP returns the jwt token expiration duration.\n# Should be time.ParseDuration string. Source: https://golang.org/pkg/time/#ParseDuration\n# default: 10h\nTOKENEXP=\n"})})]})}function c(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var i=n(67294);let o={},r=i.createContext(o);function s(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);