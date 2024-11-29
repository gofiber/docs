"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["89936"],{85356:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>o});var i=JSON.parse('{"id":"oauth2/README","title":"OAuth2","description":"Implementing OAuth2 authentication.","source":"@site/docs/recipes/oauth2/README.md","sourceDirName":"oauth2","slug":"/oauth2/","permalink":"/recipes/oauth2/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/oauth2/README.md","tags":[],"version":"current","lastUpdatedAt":1732893234000,"frontMatter":{"title":"OAuth2","keywords":["oauth2","golang","authentication","api"],"description":"Implementing OAuth2 authentication."},"sidebar":"left_sidebar","previous":{"title":"Neo4j","permalink":"/recipes/neo4j/"},"next":{"title":"Google OAuth2","permalink":"/recipes/oauth2-google/"}}'),r=t("85893"),l=t("50065");let o={title:"OAuth2",keywords:["oauth2","golang","authentication","api"],description:"Implementing OAuth2 authentication."},s="OAuth2",a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}];function h(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"oauth2",children:"OAuth2"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/oauth2",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,r.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/oauth2",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,r.jsx)(n.p,{children:"This project demonstrates how to implement OAuth2 authentication in a Go application."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Ensure you have the following installed:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Golang"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/golang/oauth2",children:"OAuth2"})," package"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/oauth2\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Install dependencies:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"go get\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Start the application:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:".env"})," file in the root directory and add the following variables:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# CLIENT_ID is the OAuth2 client ID\nCLIENT_ID=\n\n# CLIENT_SECRET is the OAuth2 client secret\nCLIENT_SECRET=\n\n# REDIRECT_URL is the OAuth2 redirect URL\nREDIRECT_URL=\n\n# AUTH_URL is the OAuth2 authorization URL\nAUTH_URL=\n\n# TOKEN_URL is the OAuth2 token URL\nTOKEN_URL=\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Here is an example of how to set up an OAuth2 configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "golang.org/x/oauth2"\n    "golang.org/x/oauth2/google"\n)\n\nfunc main() {\n    conf := &oauth2.Config{\n        ClientID:     "your-client-id",\n        ClientSecret: "your-client-secret",\n        RedirectURL:  "your-redirect-url",\n        Endpoint:     google.Endpoint,\n    }\n\n    // Your code here\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://pkg.go.dev/golang.org/x/oauth2",children:"OAuth2 Package Documentation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2",children:"Google OAuth2 Documentation"})}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var i=t(67294);let r={},l=i.createContext(r);function o(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);