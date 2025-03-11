"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["25190"],{48841:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>n,assets:()=>a,toc:()=>d,contentTitle:()=>o});var n=JSON.parse('{"id":"svelte-netlify/README","title":"Svelte Netlify","description":"Deploying a Svelte application on Netlify.","source":"@site/docs/recipes/svelte-netlify/README.md","sourceDirName":"svelte-netlify","slug":"/svelte-netlify/","permalink":"/recipes/svelte-netlify/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/svelte-netlify/README.md","tags":[],"version":"current","lastUpdatedAt":1741678803000,"frontMatter":{"title":"Svelte Netlify","keywords":["netlify","deploy","svelte"],"description":"Deploying a Svelte application on Netlify."},"sidebar":"left_sidebar","previous":{"title":"Stream Request Body","permalink":"/recipes/stream-request-body/"},"next":{"title":"Sveltekit Embed","permalink":"/recipes/sveltekit-embed/"}}'),s=i("85893"),l=i("50065");let r={title:"Svelte Netlify",keywords:["netlify","deploy","svelte"],description:"Deploying a Svelte application on Netlify."},o="Deploying fiber on Netlify",a={},d=[{value:"Demo @ https://gofiber-svelte.netlify.app/",id:"demo--httpsgofiber-sveltenetlifyapp",level:3},{value:"Based on the fiber-lambda API written by Fenny. Since the code hasn&#39;t been merged yet, I borrowed it into <code>adapter/adapter.go</code>",id:"based-on-the-fiber-lambda-api-written-by-fenny-since-the-code-hasnt-been-merged-yet-i-borrowed-it-into-adapteradaptergo",level:4},{value:"TL;DR",id:"tldr",level:4},{value:"Important",id:"important",level:4}];function c(e){let t={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"deploying-fiber-on-netlify",children:"Deploying fiber on Netlify"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/svelte-netlify",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,s.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/svelte-netlify",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://app.netlify.com/sites/gofiber-svelte/deploys",children:(0,s.jsx)(t.img,{src:"https://api.netlify.com/api/v1/badges/143c3c42-60f7-427a-b3fd-8ca3947a2d40/deploy-status",alt:"Netlify Status"})})}),"\n",(0,s.jsxs)(t.h3,{id:"demo--httpsgofiber-sveltenetlifyapp",children:["Demo @ ",(0,s.jsx)(t.a,{href:"https://gofiber-svelte.netlify.app/",children:"https://gofiber-svelte.netlify.app/"})]}),"\n",(0,s.jsxs)(t.h4,{id:"based-on-the-fiber-lambda-api-written-by-fenny-since-the-code-hasnt-been-merged-yet-i-borrowed-it-into-adapteradaptergo",children:["Based on the fiber-lambda API written by Fenny. Since the code hasn't been merged yet, I borrowed it into ",(0,s.jsx)(t.code,{children:"adapter/adapter.go"})]}),"\n",(0,s.jsxs)(t.p,{children:["The app uses static pages under ",(0,s.jsx)(t.code,{children:"public"})," directory. These are compiled using sveltejs and the complete template can be found ",(0,s.jsx)(t.a,{href:"https://github.com/amalshaji/gofiber-sveltejs-netlify",children:"here"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-toml",children:'# netlify.toml\n\n[build]\n  command = "./build.sh"\n  functions = "functions"\n  publish = "public"\n\n[build.environment]\n  GO_IMPORT_PATH = "github.com/amalshaji/fiber-netlify"\n  GO111MODULE = "on"\n\n[[redirects]]\n  from = "/api/*"\n  to = "/.netlify/functions/gateway/:splat"\n  status = 200\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Deploying ",(0,s.jsx)(t.code,{children:"net/http to Netlify"})," explains what these functions are doing. You can read it ",(0,s.jsx)(t.a,{href:"https://blog.carlmjohnson.net/post/2020/how-to-host-golang-on-netlify-for-free/",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"tldr",children:"TL;DR"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["build command builds the whole code to binary ",(0,s.jsx)(t.code,{children:"cmd/gateway/gateway"})]}),"\n",(0,s.jsxs)(t.li,{children:["we're building something called ",(0,s.jsx)(t.a,{href:"https://functions.netlify.com/",children:"netlify functions"})," (Please read)"]}),"\n",(0,s.jsxs)(t.li,{children:["everything under public folder will be published(entrypoint: ",(0,s.jsx)(t.code,{children:"index.html"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["Netlify maps endpoints to ",(0,s.jsx)(t.code,{children:"/.netlify/functions/gateway"}),", which is weird when you do requests, so we redirect it to ",(0,s.jsx)(t.code,{children:"/api/*"})]}),"\n",(0,s.jsx)(t.li,{children:"status = 200 for server side redirects"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"important",children:"Important"}),"\n",(0,s.jsxs)(t.p,{children:["Netlify functions allows you to have up to 125,000 requests a month. This means you can have 2.89 requests per minute. Make sure you use ",(0,s.jsx)(t.code,{children:"Cache"})," in you request handlers."]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return r}});var n=i(67294);let s={},l=n.createContext(s);function r(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);