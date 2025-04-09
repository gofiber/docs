"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["47919"],{3520:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>l});var r=JSON.parse('{"id":"react-router/README","title":"React","description":"Using React.","source":"@site/docs/recipes/react-router/README.md","sourceDirName":"react-router","slug":"/react-router/","permalink":"/recipes/react-router/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/react-router/README.md","tags":[],"version":"current","lastUpdatedAt":1744205860000,"frontMatter":{"title":"React","keywords":["react","react-router","client-side","spa","docker"],"description":"Using React."},"sidebar":"left_sidebar","previous":{"title":"RabbitMQ","permalink":"/recipes/rabbitmq/"},"next":{"title":"Recover Middleware","permalink":"/recipes/recover/"}}'),n=i("85893"),s=i("50065");let o={title:"React",keywords:["react","react-router","client-side","spa","docker"],description:"Using React."},l="React Fiber",c={},a=[{value:"Technologies",id:"technologies",level:2},{value:"Application",id:"application",level:2},{value:"Installation",id:"installation",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"react-fiber",children:"React Fiber"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/react-router",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,n.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/react-router",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,n.jsx)(t.p,{children:"A sample application to showcase serving React (with Router) with an almost bare Fiber. Hopefully, this application can be of use (as a reference or others) for those who wants to serve their client-side SPA with Fiber."}),"\n",(0,n.jsx)(t.h2,{id:"technologies",children:"Technologies"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Go with Fiber"}),"\n",(0,n.jsx)(t.li,{children:"React with TypeScript and React Router"}),"\n",(0,n.jsx)(t.li,{children:"Docker"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"application",children:"Application"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["This application has three routes: ",(0,n.jsx)(t.code,{children:"/"}),", ",(0,n.jsx)(t.code,{children:"/react"}),", and a catch-all, 404 route. ",(0,n.jsx)(t.code,{children:"/"})," will show the Fiber logo, ",(0,n.jsx)(t.code,{children:"/react"})," will show the React logo, and the 404 route will show both logos."]}),"\n",(0,n.jsx)(t.li,{children:"As this application serves the frontend while backed by a server, the client-side routing will work well and will not cause any issue (unlike if you are running without a file server). You can type the URL route manually in the browser and it will still work and will render the accurate page, so no worries."}),"\n",(0,n.jsxs)(t.li,{children:["This is a simplified form of Create React App with TypeScript. With that being said, that's why there is no ",(0,n.jsx)(t.code,{children:"manifest.json"}),", ",(0,n.jsx)(t.code,{children:"logo512.png"}),", and other extra things like that."]}),"\n",(0,n.jsxs)(t.li,{children:["I restructured the project structure to be a bit more modular by categorizing files to ",(0,n.jsx)(t.code,{children:"assets"}),", ",(0,n.jsx)(t.code,{children:"components"}),", and ",(0,n.jsx)(t.code,{children:"styles"}),". I also made it so all of the CSS is loaded in ",(0,n.jsx)(t.code,{children:"index.tsx"})," for easier seeing."]}),"\n",(0,n.jsxs)(t.li,{children:["I also moved several dependencies to their appropriate places, such as ",(0,n.jsx)(t.code,{children:"@types"})," and ",(0,n.jsx)(t.code,{children:"test"})," in development dependencies instead of dependencies."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(t.p,{children:["It is recommended that you use Docker to instantly run this application. After running the Docker application, please open ",(0,n.jsx)(t.code,{children:"localhost:8080"})," in your browser. Make sure you are in the ",(0,n.jsx)(t.code,{children:"react-router"})," folder before running these commands."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker build . -t react-router:latest\ndocker run -d -p 8080:8080 react-router:latest\n"})}),"\n",(0,n.jsx)(t.p,{children:"If you prefer doing things manually, then the installation steps are as follows:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Clone the repository by using ",(0,n.jsx)(t.code,{children:"git clone git@github.com:gofiber/recipes.git"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Switch to the application by using ",(0,n.jsx)(t.code,{children:"cd recipes/react-router"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Install npm dependencies by using ",(0,n.jsx)(t.code,{children:"cd web && yarn install"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Build frontend by using ",(0,n.jsx)(t.code,{children:"yarn build"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Run the Fiber application by using ",(0,n.jsx)(t.code,{children:"go run cmd/react-router/main.go"}),". Don't forget to return to the main repository by using ",(0,n.jsx)(t.code,{children:"cd .."})," (assuming you are in ",(0,n.jsx)(t.code,{children:"web"})," folder)."]}),"\n",(0,n.jsxs)(t.li,{children:["Open ",(0,n.jsx)(t.code,{children:"localhost:8080"})," in your browser."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return l},a:function(){return o}});var r=i(67294);let n={},s=r.createContext(n);function o(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);