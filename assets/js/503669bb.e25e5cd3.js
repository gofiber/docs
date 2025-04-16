"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["13027"],{750:function(e,t,n){n.r(t),n.d(t,{default:()=>b,frontMatter:()=>s,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"websocket/websocket","title":"Websocket","description":"Release","source":"@site/contrib_versioned_docs/version-fiberi18n_v0.x.x/websocket/README.md","sourceDirName":"websocket","slug":"/websocket/","permalink":"/docs/contrib/fiberi18n_v0.x.x/websocket/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/websocket/README.md","tags":[],"version":"fiberi18n_v0.x.x","lastUpdatedAt":1744830196000,"frontMatter":{"id":"websocket","title":"Websocket"},"sidebar":"tutorialSidebar","previous":{"title":"Swagger","permalink":"/docs/contrib/fiberi18n_v0.x.x/swagger/"}}'),i=n("85893"),o=n("50065");let s={id:"websocket",title:"Websocket"},c=void 0,a={},l=[{value:"Install",id:"install",level:3},{value:"Example",id:"example",level:3},{value:"Note with cache middleware",id:"note-with-cache-middleware",level:3}];function d(e){let t={a:"a",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=websocket*",alt:"Release"}),"\n",(0,i.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,i.jsxs)(t.p,{children:["Based on ",(0,i.jsx)(t.a,{href:"https://github.com/fasthttp/websocket",children:"Fasthttp WebSocket"})," for ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," with available ",(0,i.jsx)(t.code,{children:"*fiber.Ctx"})," methods like ",(0,i.jsx)(t.a,{href:"http://docs.gofiber.io/ctx#locals",children:"Locals"}),", ",(0,i.jsx)(t.a,{href:"http://docs.gofiber.io/ctx#params",children:"Params"}),", ",(0,i.jsx)(t.a,{href:"http://docs.gofiber.io/ctx#query",children:"Query"})," and ",(0,i.jsx)(t.a,{href:"http://docs.gofiber.io/ctx#cookies",children:"Cookies"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"install",children:"Install"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/websocket\n"})}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n	"log"\n\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/contrib/websocket"\n)\n\nfunc main() {\n	app := fiber.New()\n\n	app.Use("/ws", func(c *fiber.Ctx) error {\n		// IsWebSocketUpgrade returns true if the client\n		// requested upgrade to the WebSocket protocol.\n		if websocket.IsWebSocketUpgrade(c) {\n			c.Locals("allowed", true)\n			return c.Next()\n		}\n		return fiber.ErrUpgradeRequired\n	})\n\n	app.Get("/ws/:id", websocket.New(func(c *websocket.Conn) {\n		// c.Locals is added to the *websocket.Conn\n		log.Println(c.Locals("allowed"))  // true\n		log.Println(c.Params("id"))       // 123\n		log.Println(c.Query("v"))         // 1.0\n		log.Println(c.Cookies("session")) // ""\n\n		// websocket.Conn bindings https://pkg.go.dev/github.com/fasthttp/websocket?tab=doc#pkg-index\n		var (\n			mt  int\n			msg []byte\n			err error\n		)\n		for {\n			if mt, msg, err = c.ReadMessage(); err != nil {\n				log.Println("read:", err)\n				break\n			}\n			log.Printf("recv: %s", msg)\n\n			if err = c.WriteMessage(mt, msg); err != nil {\n				log.Println("write:", err)\n				break\n			}\n		}\n\n	}))\n\n	log.Fatal(app.Listen(":3000"))\n	// Access the websocket server: ws://localhost:3000/ws/123?v=1.0\n	// https://www.websocket.org/echo.html\n}\n\n'})}),"\n",(0,i.jsx)(t.h3,{id:"note-with-cache-middleware",children:"Note with cache middleware"}),"\n",(0,i.jsxs)(t.p,{children:["If you get the error ",(0,i.jsx)(t.code,{children:"websocket: bad handshake"})," when using the ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/fiber/tree/master/middleware/cache",children:"cache middleware"}),", please use ",(0,i.jsx)(t.code,{children:"config.Next"})," to skip websocket path."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'app := fiber.New()\napp.Use(cache.New(cache.Config{\n		Next: func(c *fiber.Ctx) bool {\n			return strings.Contains(c.Route().Path, "/ws")\n		},\n}))\n\napp.Get("/ws/:id", websocket.New(func(c *websocket.Conn) {}))\n'})})]})}function b(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return s}});var r=n(67294);let i={},o=r.createContext(i);function s(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);