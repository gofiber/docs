"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["3786"],{96946:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>p,assets:()=>c,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"spa/README","title":"Single Page Application (SPA)","description":"Setting up a Single Page Application (SPA) using React for the frontend and Go for the backend.","source":"@site/docs/recipes/spa/README.md","sourceDirName":"spa","slug":"/spa/","permalink":"/recipes/spa/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/spa/README.md","tags":[],"version":"current","lastUpdatedAt":1733056464000,"frontMatter":{"title":"Single Page Application (SPA)","keywords":["spa","react","tailwindcss","parcel"],"description":"Setting up a Single Page Application (SPA) using React for the frontend and Go for the backend."},"sidebar":"left_sidebar","previous":{"title":"Socketio","permalink":"/recipes/socketio/"},"next":{"title":"Sqlboiler","permalink":"/recipes/sqlboiler/"}}'),s=i("85893"),r=i("50065");let l={title:"Single Page Application (SPA)",keywords:["spa","react","tailwindcss","parcel"],description:"Setting up a Single Page Application (SPA) using React for the frontend and Go for the backend."},a="Single Page Application (SPA)",c={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Building Frontend Assets",id:"building-frontend-assets",level:3},{value:"Running the Application",id:"running-the-application",level:3},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"single-page-application-spa",children:"Single Page Application (SPA)"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/spa",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,s.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/spa",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,s.jsx)(n.p,{children:"This project demonstrates how to set up a Single Page Application (SPA) using React for the frontend and Go with the Fiber framework for the backend."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Ensure you have the following installed:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Golang"}),"\n",(0,s.jsx)(n.li,{children:"Node.js"}),"\n",(0,s.jsx)(n.li,{children:"npm"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/spa\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install frontend dependencies:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cd frontend\nnpm install\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install backend dependencies:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cd ../backend\ngo get\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.h3,{id:"building-frontend-assets",children:"Building Frontend Assets"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Build the frontend assets:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cd frontend\nnpm run build\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Watch frontend assets for changes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm run dev\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"running-the-application",children:"Running the Application"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Start the Fiber backend application:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cd backend\ngo run main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Here is an example of how to set up a basic route in the Fiber backend to serve the React frontend:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/logger"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    // Middleware\n    app.Use(logger.New())\n\n    // Serve static files\n    app.Static("/", "./frontend/dist")\n\n    // API routes\n    app.Get("/api/hello", func(c *fiber.Ctx) error {\n        return c.JSON(fiber.Map{"message": "Hello, World!"})\n    })\n\n    // Start server\n    app.Listen(":3000")\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://reactjs.org/docs/getting-started.html",children:"React Documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://tailwindcss.com/docs",children:"Tailwind CSS Documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://parceljs.org/docs",children:"Parcel Documentation"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return l}});var t=i(67294);let s={},r=t.createContext(s);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);