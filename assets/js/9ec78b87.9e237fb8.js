"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["2385"],{33541:function(e,i,t){t.r(i),t.d(i,{metadata:()=>n,contentTitle:()=>o,default:()=>d,assets:()=>c,toc:()=>a,frontMatter:()=>l});var n=JSON.parse('{"id":"url-shortener-api/README","title":"URL Shortener","description":"URL shortening service with a simple API.","source":"@site/docs/recipes/url-shortener-api/README.md","sourceDirName":"url-shortener-api","slug":"/url-shortener-api/","permalink":"/recipes/url-shortener-api/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/url-shortener-api/README.md","tags":[],"version":"current","lastUpdatedAt":1735889916000,"frontMatter":{"title":"URL Shortener","keywords":["url shortener","redis","api"],"description":"URL shortening service with a simple API."},"sidebar":"left_sidebar","previous":{"title":"File Upload","permalink":"/recipes/upload-file/"},"next":{"title":"Validation","permalink":"/recipes/validation/"}}'),r=t("85893"),s=t("50065");let l={title:"URL Shortener",keywords:["url shortener","redis","api"],description:"URL shortening service with a simple API."},o="URL Shortener API",c={},a=[{value:"Tech Stack",id:"tech-stack",level:2},{value:"API Documentation",id:"api-documentation",level:2},{value:"API Payload",id:"api-payload",level:3},{value:"API Response",id:"api-response",level:3},{value:"Setup",id:"setup",level:2}];function h(e){let i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"url-shortener-api",children:"URL Shortener API"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"https://github.com/gofiber/recipes/tree/master/url-shortener-api",children:(0,r.jsx)(i.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,r.jsx)(i.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/url-shortener-api",children:(0,r.jsx)(i.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,r.jsx)(i.p,{children:"This project provides a URL shortening service with a simple API."}),"\n",(0,r.jsx)(i.h2,{id:"tech-stack",children:"Tech Stack"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Golang"}),"\n",(0,r.jsx)(i.li,{children:"Redis"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"api-documentation",children:"API Documentation"}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:["API endpoint: ",(0,r.jsx)(i.code,{children:"http://localhost:3000/api/v1/"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"api-payload",children:"API Payload"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"url"})," - Original URL"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"short"})," - Custom short URL (Optional)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"expiry"})," - Time to expire: int (hours)"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"api-response",children:"API Response"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"url"})," - Original URL"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"short"})," - Custom short URL"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"expiry"})," - Time to expire: int (hours)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"rate_limit"})," - Number of API calls remaining: int"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"rate_limit_reset"})," - Time to rate limit reset: int (minutes)"]}),"\n"]}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:["API is rate limited to 10 calls every 30 minutes.\nThese values can be changed in the ",(0,r.jsx)(i.code,{children:".env"})," file. Have fun."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Start the containers:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"docker-compose up -d\n"})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Test the API:\n",(0,r.jsx)(i.img,{alt:"test.gif",src:t(67298).Z+"",width:"1340",height:"740"})]}),"\n"]}),"\n"]})]})}function d(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},67298:function(e,i,t){t.d(i,{Z:function(){return n}});let n=t.p+"assets/images/test-d7f69f7825087b3e49d5fb46e4ce604c.gif"},50065:function(e,i,t){t.d(i,{Z:function(){return o},a:function(){return l}});var n=t(67294);let r={},s=n.createContext(r);function l(e){let i=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);