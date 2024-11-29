"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["40902"],{99469:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>l});var r=JSON.parse('{"id":"websocket/websocket","title":"Websocket","description":"Release","source":"@site/contrib_versioned_docs/version-fgprof_v1.x.x/websocket/README.md","sourceDirName":"websocket","slug":"/websocket/","permalink":"/contrib/fgprof_v1.x.x/websocket/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/websocket/README.md","tags":[],"version":"fgprof_v1.x.x","lastUpdatedAt":1732875044000,"frontMatter":{"id":"websocket"},"sidebar":"tutorialSidebar","previous":{"title":"Swagger","permalink":"/contrib/fgprof_v1.x.x/swagger/"}}'),i=n("85893"),s=n("50065");let l={id:"websocket"},c="Websocket",o={},d=[{value:"Install",id:"install",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Config",id:"config",level:2},{value:"Example",id:"example",level:2},{value:"Note with cache middleware",id:"note-with-cache-middleware",level:2},{value:"Note with recover middleware",id:"note-with-recover-middleware",level:2}];function a(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"websocket",children:"Websocket"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=websocket*",alt:"Release"}),"\n",(0,i.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,i.jsxs)(t.p,{children:["Based on ",(0,i.jsx)(t.a,{href:"https://github.com/fasthttp/websocket",children:"Fasthttp WebSocket"})," for ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," with available ",(0,i.jsx)(t.code,{children:"*fiber.Ctx"})," methods like ",(0,i.jsx)(t.a,{href:"http://docs.gofiber.io/ctx#locals",children:"Locals"}),", ",(0,i.jsx)(t.a,{href:"http://docs.gofiber.io/ctx#params",children:"Params"}),", ",(0,i.jsx)(t.a,{href:"http://docs.gofiber.io/ctx#query",children:"Query"})," and ",(0,i.jsx)(t.a,{href:"http://docs.gofiber.io/ctx#cookies",children:"Cookies"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Note: Requires Go 1.18 and above"})}),"\n",(0,i.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/websocket\n"})}),"\n",(0,i.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func New(handler func(*websocket.Conn), config ...websocket.Config) fiber.Handler {\n"})}),"\n",(0,i.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Filter"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Defines a function to skip middleware."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"HandshakeTimeout"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"time.Duration"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"HandshakeTimeout specifies the duration for the handshake to complete."}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"0"})," (No timeout)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Subprotocols"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Subprotocols specifies the client's requested subprotocols."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Origins"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Allowed Origins based on the Origin header. If empty, everything is allowed."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ReadBufferSize"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"int"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ReadBufferSize specifies the I/O buffer size in bytes for incoming messages."}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"0"})," (Use default size)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"WriteBufferSize"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"int"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"WriteBufferSize specifies the I/O buffer size in bytes for outgoing messages."}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"0"})," (Use default size)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"WriteBufferPool"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"websocket.BufferPool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"WriteBufferPool is a pool of buffers for write operations."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"EnableCompression"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"EnableCompression specifies if the client should attempt to negotiate per message compression (RFC 7692)."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"RecoverHandler"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(*websocket.Conn) void"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"RecoverHandler is a panic handler function that recovers from panics."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"defaultRecover"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n	"log"\n\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/contrib/websocket"\n)\n\nfunc main() {\n	app := fiber.New()\n\n	app.Use("/ws", func(c *fiber.Ctx) error {\n		// IsWebSocketUpgrade returns true if the client\n		// requested upgrade to the WebSocket protocol.\n		if websocket.IsWebSocketUpgrade(c) {\n			c.Locals("allowed", true)\n			return c.Next()\n		}\n		return fiber.ErrUpgradeRequired\n	})\n\n	app.Get("/ws/:id", websocket.New(func(c *websocket.Conn) {\n		// c.Locals is added to the *websocket.Conn\n		log.Println(c.Locals("allowed"))  // true\n		log.Println(c.Params("id"))       // 123\n		log.Println(c.Query("v"))         // 1.0\n		log.Println(c.Cookies("session")) // ""\n\n		// websocket.Conn bindings https://pkg.go.dev/github.com/fasthttp/websocket?tab=doc#pkg-index\n		var (\n			mt  int\n			msg []byte\n			err error\n		)\n		for {\n			if mt, msg, err = c.ReadMessage(); err != nil {\n				log.Println("read:", err)\n				break\n			}\n			log.Printf("recv: %s", msg)\n\n			if err = c.WriteMessage(mt, msg); err != nil {\n				log.Println("write:", err)\n				break\n			}\n		}\n\n	}))\n\n	log.Fatal(app.Listen(":3000"))\n	// Access the websocket server: ws://localhost:3000/ws/123?v=1.0\n	// https://www.websocket.org/echo.html\n}\n\n'})}),"\n",(0,i.jsx)(t.h2,{id:"note-with-cache-middleware",children:"Note with cache middleware"}),"\n",(0,i.jsxs)(t.p,{children:["If you get the error ",(0,i.jsx)(t.code,{children:"websocket: bad handshake"})," when using the ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/fiber/tree/master/middleware/cache",children:"cache middleware"}),", please use ",(0,i.jsx)(t.code,{children:"config.Next"})," to skip websocket path."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'app := fiber.New()\napp.Use(cache.New(cache.Config{\n		Next: func(c *fiber.Ctx) bool {\n			return strings.Contains(c.Route().Path, "/ws")\n		},\n}))\n\napp.Get("/ws/:id", websocket.New(func(c *websocket.Conn) {}))\n'})}),"\n",(0,i.jsx)(t.h2,{id:"note-with-recover-middleware",children:"Note with recover middleware"}),"\n",(0,i.jsxs)(t.p,{children:["For internal implementation reasons, currently recover middleware is not work with websocket middleware, please use ",(0,i.jsx)(t.code,{children:"config.RecoverHandler"})," to add recover handler to websocket endpoints.\nBy default, config ",(0,i.jsx)(t.code,{children:"RecoverHandler"})," is recovers from panic and writes stack trace to stderr, also returns a response that contains panic message in ",(0,i.jsx)(t.strong,{children:"error"})," field."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'app := fiber.New()\n\napp.Use(cache.New(cache.Config{\n    Next: func(c *fiber.Ctx) bool {\n        return strings.Contains(c.Route().Path, "/ws")\n    },\n}))\n\ncfg := Config{\n    RecoverHandler: func(conn *Conn) {\n        if err := recover(); err != nil {\n            conn.WriteJSON(fiber.Map{"customError": "error occurred"})\n        }\n    },\n}\n\napp.Get("/ws/:id", websocket.New(func(c *websocket.Conn) {}, cfg))\n\n\n'})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return l}});var r=n(67294);let i={},s=r.createContext(i);function l(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);