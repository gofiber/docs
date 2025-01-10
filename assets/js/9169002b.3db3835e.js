"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["68088"],{85676:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>s,default:()=>h,assets:()=>o,toc:()=>a,frontMatter:()=>d});var i=JSON.parse('{"id":"api/middleware/idempotency","title":"Idempotency","description":"Idempotency middleware for Fiber allows for fault-tolerant APIs where duplicate requests \u2014 for example due to networking issues on the client-side \u2014 do not erroneously cause the same action performed multiple times on the server-side.","source":"@site/versioned_docs/version-v2.x/api/middleware/idempotency.md","sourceDirName":"api/middleware","slug":"/api/middleware/idempotency","permalink":"/api/middleware/idempotency","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1736513694000,"frontMatter":{"id":"idempotency"},"sidebar":"tutorialSidebar","previous":{"title":"Helmet","permalink":"/api/middleware/helmet"},"next":{"title":"Keyauth","permalink":"/api/middleware/keyauth"}}'),l=n("85893"),r=n("50065");let d={id:"idempotency"},s="Idempotency",o={},a=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Default Config",id:"default-config",level:3},{value:"Custom Config",id:"custom-config",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config-1",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"idempotency",children:"Idempotency"})}),"\n",(0,l.jsxs)(t.p,{children:["Idempotency middleware for ",(0,l.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," allows for fault-tolerant APIs where duplicate requests \u2014 for example due to networking issues on the client-side \u2014 do not erroneously cause the same action performed multiple times on the server-side."]}),"\n",(0,l.jsxs)(t.p,{children:["Refer to ",(0,l.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/draft-ietf-httpapi-idempotency-key-header-02",children:"https://datatracker.ietf.org/doc/html/draft-ietf-httpapi-idempotency-key-header-02"})," for a better understanding."]}),"\n",(0,l.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\n"})}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'import (\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/fiber/v2/middleware/idempotency"\n)\n'})}),"\n",(0,l.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,l.jsx)(t.h3,{id:"default-config",children:"Default Config"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:"app.Use(idempotency.New())\n"})}),"\n",(0,l.jsx)(t.h3,{id:"custom-config",children:"Custom Config"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:"app.Use(idempotency.New(idempotency.Config{\n	Lifetime: 42 * time.Minute,\n	// ...\n}))\n"})}),"\n",(0,l.jsx)(t.h3,{id:"config",children:"Config"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"A function for safe methods"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Lifetime"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"time.Duration"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Lifetime is the maximum lifetime of an idempotency key."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"30 * time.Minute"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"KeyHeader"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"KeyHeader is the name of the header that contains the idempotency key."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:'"X-Idempotency-Key"'})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"KeyHeaderValidate"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"func(string) error"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"KeyHeaderValidate defines a function to validate the syntax of the idempotency header."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"A function for UUID validation"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"KeepResponseHeaders"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"[]string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"KeepResponseHeaders is a list of headers that should be kept from the original response."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"nil (keep all headers)"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Lock"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"Locker"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Lock locks an idempotency key."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"An in-memory locker"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Storage"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"fiber.Storage"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Storage stores response data by idempotency key."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"An in-memory storage"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"default-config-1",children:"Default Config"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n	Next: func(c *fiber.Ctx) bool {\n		// Skip middleware if the request was done using a safe HTTP method\n		return fiber.IsMethodSafe(c.Method())\n	},\n\n	Lifetime: 30 * time.Minute,\n\n	KeyHeader: "X-Idempotency-Key",\n	KeyHeaderValidate: func(k string) error {\n		if l, wl := len(k), 36; l != wl { // UUID length is 36 chars\n			return fmt.Errorf("%w: invalid length: %d != %d", ErrInvalidIdempotencyKey, l, wl)\n		}\n\n		return nil\n	},\n\n	KeepResponseHeaders: nil,\n\n	Lock: nil, // Set in configDefault so we don\'t allocate data here.\n\n	Storage: nil, // Set in configDefault so we don\'t allocate data here.\n}\n'})})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return d}});var i=n(67294);let l={},r=i.createContext(l);function d(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);