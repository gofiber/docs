"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["51662"],{44900:function(e,t,i){i.r(t),i.d(t,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>r});var s=JSON.parse('{"id":"sveltekit-embed/README","title":"Sveltekit Embed","description":"A full-stack application built using Sveltekit and Tailwind CSS.","source":"@site/docs/recipes/sveltekit-embed/README.md","sourceDirName":"sveltekit-embed","slug":"/sveltekit-embed/","permalink":"/recipes/sveltekit-embed/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/sveltekit-embed/README.md","tags":[],"version":"current","lastUpdatedAt":1735889916000,"frontMatter":{"title":"Sveltekit Embed","keywords":["sveltekit","tailwindcss","embed"],"description":"A full-stack application built using Sveltekit and Tailwind CSS."},"sidebar":"left_sidebar","previous":{"title":"Svelte Netlify","permalink":"/recipes/svelte-netlify/"},"next":{"title":"create-svelte","permalink":"/recipes/sveltekit-embed/template/"}}'),n=i("85893"),l=i("50065");let r={title:"Sveltekit Embed",keywords:["sveltekit","tailwindcss","embed"],description:"A full-stack application built using Sveltekit and Tailwind CSS."},d="Fiber Sveltekit Embed App",c={},a=[{value:"Run the Project",id:"run-the-project",level:2},{value:"Available Commands",id:"available-commands",level:2},{value:"Usage",id:"usage",level:2},{value:"API Routes",id:"api-routes",level:2},{value:"Go Dependencies",id:"go-dependencies",level:2},{value:"Npm Dependencies",id:"npm-dependencies",level:2}];function o(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"fiber-sveltekit-embed-app",children:"Fiber Sveltekit Embed App"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/sveltekit-embed",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,n.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/sveltekit-embed",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/gofiber/recipes/assets/40540244/2aa084b8-9bbc-46f3-9759-930857429f05",alt:"image"})}),"\n",(0,n.jsx)(t.p,{children:"This application is a full-stack project built using Sveltekit, Tailwind CSS, Fiber. It showcases the construction of a monolithic architecture for a full-stack application."}),"\n",(0,n.jsx)(t.h2,{id:"run-the-project",children:"Run the Project"}),"\n",(0,n.jsx)(t.p,{children:"To run the project, follow these steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Execute the following command to run all the necessary commands for building and running the application:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"make all\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"Once the build process is complete, you can start the application by running:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"./app\n"})}),"\n",(0,n.jsx)(t.h2,{id:"available-commands",children:"Available Commands"}),"\n",(0,n.jsx)(t.p,{children:"The following commands are available to manage the project:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Command"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"info"})}),(0,n.jsx)(t.td,{children:"Info command. Displays the available commands and the purpose of the application."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"go-build"})}),(0,n.jsxs)(t.td,{children:["Builds the Golang project and creates an ",(0,n.jsx)(t.code,{children:"app"})," file."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"svelte-build"})}),(0,n.jsx)(t.td,{children:"Builds the SvelteKit project. It first installs the dependencies and then performs the project build."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"all"})}),(0,n.jsxs)(t.td,{children:["Runs both ",(0,n.jsx)(t.code,{children:"svelte-build"})," and ",(0,n.jsx)(t.code,{children:"go-build"})," commands sequentially."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.p,{children:"To use this application, run the following command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"make <command>\n"})}),"\n",(0,n.jsx)(t.h2,{id:"api-routes",children:"API Routes"}),"\n",(0,n.jsx)(t.p,{children:"The Go Fiber application provides the following API routes:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Route"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/*"})}),(0,n.jsxs)(t.td,{children:["Serves static files from the specified directory (",(0,n.jsx)(t.code,{children:"template.Dist()"}),"). If a file is not found, it serves ",(0,n.jsx)(t.code,{children:"index.html"}),"."]})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"go-dependencies",children:"Go Dependencies"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Go Modules:"})," Go's built-in package manager used to manage dependencies for Go projects."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fiber:"})," A fast and minimalist web framework for Golang."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"npm-dependencies",children:"Npm Dependencies"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"SvelteKit:"})," A JavaScript framework used to build modern web applications."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Tailwind CSS:"})," A fast and customizable CSS styling library. Can be used in SvelteKit projects."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Skeleton UI:"})," This is a fully featured UI Toolkit for building reactive interfaces quickly using Svelte and Tailwind."]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["Author: ",(0,n.jsx)(t.a,{href:"https://github.com/ugurkorkmaz",children:"@ugurkorkmaz"})]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return d},a:function(){return r}});var s=i(67294);let n={},l=s.createContext(n);function r(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);