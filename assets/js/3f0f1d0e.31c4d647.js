"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[73452],{61512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(74848),o=n(28453);const s={id:"websocket",title:"Websocket"},i=void 0,c={id:"websocket/websocket",title:"Websocket",description:"Release",source:"@site/contrib_versioned_docs/version-opafiber_v1.x.x/websocket/README.md",sourceDirName:"websocket",slug:"/websocket/",permalink:"/contrib/opafiber_v1.x.x/websocket/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/websocket/README.md",tags:[],version:"opafiber_v1.x.x",lastUpdatedAt:1720163171e3,frontMatter:{id:"websocket",title:"Websocket"},sidebar:"tutorialSidebar",previous:{title:"Swagger",permalink:"/contrib/opafiber_v1.x.x/swagger/"}},a={},l=[{value:"Install",id:"install",level:3},{value:"Example",id:"example",level:3},{value:"Note with cache middleware",id:"note-with-cache-middleware",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=websocket*",alt:"Release"}),"\n",(0,r.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,r.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,r.jsxs)(t.p,{children:["Based on ",(0,r.jsx)(t.a,{href:"https://github.com/fasthttp/websocket",children:"Fasthttp WebSocket"})," for ",(0,r.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," with available ",(0,r.jsx)(t.code,{children:"*fiber.Ctx"})," methods like ",(0,r.jsx)(t.a,{href:"http://docs.gofiber.io/ctx#locals",children:"Locals"}),", ",(0,r.jsx)(t.a,{href:"http://docs.gofiber.io/ctx#params",children:"Params"}),", ",(0,r.jsx)(t.a,{href:"http://docs.gofiber.io/ctx#query",children:"Query"})," and ",(0,r.jsx)(t.a,{href:"http://docs.gofiber.io/ctx#cookies",children:"Cookies"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"install",children:"Install"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/websocket\n"})}),"\n",(0,r.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"log"\n\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/gofiber/contrib/websocket"\n)\n\nfunc main() {\n\tapp := fiber.New()\n\n\tapp.Use("/ws", func(c *fiber.Ctx) error {\n\t\t// IsWebSocketUpgrade returns true if the client\n\t\t// requested upgrade to the WebSocket protocol.\n\t\tif websocket.IsWebSocketUpgrade(c) {\n\t\t\tc.Locals("allowed", true)\n\t\t\treturn c.Next()\n\t\t}\n\t\treturn fiber.ErrUpgradeRequired\n\t})\n\n\tapp.Get("/ws/:id", websocket.New(func(c *websocket.Conn) {\n\t\t// c.Locals is added to the *websocket.Conn\n\t\tlog.Println(c.Locals("allowed"))  // true\n\t\tlog.Println(c.Params("id"))       // 123\n\t\tlog.Println(c.Query("v"))         // 1.0\n\t\tlog.Println(c.Cookies("session")) // ""\n\n\t\t// websocket.Conn bindings https://pkg.go.dev/github.com/fasthttp/websocket?tab=doc#pkg-index\n\t\tvar (\n\t\t\tmt  int\n\t\t\tmsg []byte\n\t\t\terr error\n\t\t)\n\t\tfor {\n\t\t\tif mt, msg, err = c.ReadMessage(); err != nil {\n\t\t\t\tlog.Println("read:", err)\n\t\t\t\tbreak\n\t\t\t}\n\t\t\tlog.Printf("recv: %s", msg)\n\n\t\t\tif err = c.WriteMessage(mt, msg); err != nil {\n\t\t\t\tlog.Println("write:", err)\n\t\t\t\tbreak\n\t\t\t}\n\t\t}\n\n\t}))\n\n\tlog.Fatal(app.Listen(":3000"))\n\t// Access the websocket server: ws://localhost:3000/ws/123?v=1.0\n\t// https://www.websocket.org/echo.html\n}\n\n'})}),"\n",(0,r.jsx)(t.h3,{id:"note-with-cache-middleware",children:"Note with cache middleware"}),"\n",(0,r.jsxs)(t.p,{children:["If you get the error ",(0,r.jsx)(t.code,{children:"websocket: bad handshake"})," when using the ",(0,r.jsx)(t.a,{href:"https://github.com/gofiber/fiber/tree/master/middleware/cache",children:"cache middleware"}),", please use ",(0,r.jsx)(t.code,{children:"config.Next"})," to skip websocket path."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'app := fiber.New()\napp.Use(cache.New(cache.Config{\n\t\tNext: func(c *fiber.Ctx) bool {\n\t\t\treturn strings.Contains(c.Route().Path, "/ws")\n\t\t},\n}))\n\napp.Get("/ws/:id", websocket.New(func(c *websocket.Conn) {}))\n'})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);