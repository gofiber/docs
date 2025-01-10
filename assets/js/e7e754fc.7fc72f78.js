"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["78284"],{904:function(e,t,l){l.r(t),l.d(t,{metadata:()=>n,contentTitle:()=>r,default:()=>d,assets:()=>a,toc:()=>c,frontMatter:()=>s});var n=JSON.parse('{"id":"oauth2-google/README","title":"Google OAuth2","description":"Implementing Google OAuth2 authentication.","source":"@site/docs/recipes/oauth2-google/README.md","sourceDirName":"oauth2-google","slug":"/oauth2-google/","permalink":"/recipes/oauth2-google/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/oauth2-google/README.md","tags":[],"version":"current","lastUpdatedAt":1736513694000,"frontMatter":{"title":"Google OAuth2","keywords":["oauth2","google","authentication"],"description":"Implementing Google OAuth2 authentication."},"sidebar":"left_sidebar","previous":{"title":"OAuth2","permalink":"/recipes/oauth2/"},"next":{"title":"Optional Parameter","permalink":"/recipes/optional-parameter/"}}'),i=l("85893"),o=l("50065");let s={title:"Google OAuth2",keywords:["oauth2","google","authentication"],description:"Implementing Google OAuth2 authentication."},r="Fiber with Google OAuth2",a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Example Requests",id:"example-requests",level:2},{value:"Redirect to Google Login",id:"redirect-to-google-login",level:3},{value:"Google OAuth2 Callback",id:"google-oauth2-callback",level:3},{value:"Packages Used",id:"packages-used",level:2}];function h(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"fiber-with-google-oauth2",children:"Fiber with Google OAuth2"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/oauth2-google",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,i.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/oauth2-google",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,i.jsx)(t.p,{children:"This example demonstrates how to implement Google OAuth2 authentication in a Fiber application."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Go 1.16 or higher"}),"\n",(0,i.jsx)(t.li,{children:"Go modules"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Clone the repository:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/oauth2-google\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Install dependencies:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"go mod tidy\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Obtain OAuth credentials from ",(0,i.jsx)(t.a,{href:"https://console.developers.google.com/",children:"Google Developers Console"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Create a ",(0,i.jsx)(t.code,{children:".env"})," file in the root directory and add your Google OAuth credentials:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-env",children:"GOOGLE_CLIENT_ID=your_client_id\nGOOGLE_CLIENT_SECRET=your_client_secret\nGOOGLE_REDIRECT_URL=http://localhost:3000/api/auth/google/callback\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Run the application:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["The server will start on ",(0,i.jsx)(t.code,{children:"http://localhost:3000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Method"}),(0,i.jsx)(t.th,{children:"URL"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"GET"}),(0,i.jsx)(t.td,{children:"/api/"}),(0,i.jsx)(t.td,{children:"Redirects to Google login URL"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"GET"}),(0,i.jsx)(t.td,{children:"/api/auth/google/callback"}),(0,i.jsx)(t.td,{children:"Handles Google OAuth2 callback and returns user's email"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"example-requests",children:"Example Requests"}),"\n",(0,i.jsx)(t.h3,{id:"redirect-to-google-login",children:"Redirect to Google Login"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"curl -X GET http://localhost:3000/api/\n"})}),"\n",(0,i.jsx)(t.h3,{id:"google-oauth2-callback",children:"Google OAuth2 Callback"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"curl -X GET http://localhost:3000/api/auth/google/callback?state=state&code=code\n"})}),"\n",(0,i.jsx)(t.h2,{id:"packages-used",children:"Packages Used"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/joho/godotenv",children:"Godotenv"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/golang/oauth2",children:"OAuth2"})}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return r},a:function(){return s}});var n=l(67294);let i={},o=n.createContext(i);function s(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);