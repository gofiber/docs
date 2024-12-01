"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["77549"],{81482:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>a});var r=JSON.parse('{"id":"graceful-shutdown/README","title":"Graceful shutdown","description":"Graceful shutdown of applications.","source":"@site/docs/recipes/graceful-shutdown/README.md","sourceDirName":"graceful-shutdown","slug":"/graceful-shutdown/","permalink":"/recipes/graceful-shutdown/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/graceful-shutdown/README.md","tags":[],"version":"current","lastUpdatedAt":1733047527000,"frontMatter":{"title":"Graceful shutdown","keywords":["graceful","shutdown","os/signal","channel"],"description":"Graceful shutdown of applications."},"sidebar":"left_sidebar","previous":{"title":"GORM + PostgreSQL","permalink":"/recipes/gorm-postgres/"},"next":{"title":"GraphQL","permalink":"/recipes/graphql/"}}'),s=n("85893"),i=n("50065");let a={title:"Graceful shutdown",keywords:["graceful","shutdown","os/signal","channel"],description:"Graceful shutdown of applications."},o="Graceful shutdown in Fiber",c={},l=[{value:"Explanation",id:"explanation",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"graceful-shutdown-in-fiber",children:"Graceful shutdown in Fiber"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/graceful-shutdown",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,s.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/graceful-shutdown",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"fiberRecipes/graceful-shutdown on graceful-shutdown (f0834df) [?] via \uD83D\uDC39 v1.15.2 took 4s\n\u276F go run graceful-shutdown\n\n \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502                    Fiber v2.1.0                   \u2502\n \u2502               http://127.0.0.1:3000               \u2502\n \u2502                                                   \u2502\n \u2502 Handlers ............. 2  Threads ............. 8 \u2502\n \u2502 Prefork ....... Disabled  PID .............. 2540 \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n^CGracefully shutting down...\nRunning cleanup tasks...\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This shows how to implement a graceful shutdown with Fiber and the ",(0,s.jsx)(t.code,{children:"os/signal"})," package."]}),"\n",(0,s.jsx)(t.h2,{id:"explanation",children:"Explanation"}),"\n",(0,s.jsxs)(t.p,{children:["This example relies on the use of channels, a data type in Go that allows you to send and receive data to/from specific places in an application (read more about them ",(0,s.jsx)(t.a,{href:"https://tour.golang.org/concurrency/2",children:"here"}),")."]}),"\n",(0,s.jsxs)(t.p,{children:["A channel is created, and registered with ",(0,s.jsx)(t.code,{children:"signal.Notify"})," so that when the program receives an interrupt (for example, when ",(0,s.jsx)(t.code,{children:"CTRL+C"})," is pressed), a notification is sent to the channel. Once this is received, ",(0,s.jsx)(t.code,{children:"app.Shutdown"})," is called to close all active connections and return from ",(0,s.jsx)(t.code,{children:"app.Listen"}),". After this point, cleanup functions can be run and the program eventually quits."]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var r=n(67294);let s={},i=r.createContext(s);function a(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);