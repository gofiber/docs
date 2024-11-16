"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["34118"],{44335:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>l});var i=JSON.parse('{"id":"api/middleware/basicauth","title":"BasicAuth","description":"Basic Authentication middleware for Fiber that provides an HTTP basic authentication. It calls the next handler for valid credentials and 401 Unauthorized or a custom response for missing or invalid credentials.","source":"@site/versioned_docs/version-v2.x/api/middleware/basicauth.md","sourceDirName":"api/middleware","slug":"/api/middleware/basicauth","permalink":"/api/middleware/basicauth","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1731767144000,"frontMatter":{"id":"basicauth"},"sidebar":"tutorialSidebar","previous":{"title":"Adaptor","permalink":"/api/middleware/adaptor"},"next":{"title":"Cache","permalink":"/api/middleware/cache"}}'),s=n("85893"),r=n("50065");let l={id:"basicauth"},d="BasicAuth",a={},c=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function o(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"basicauth",children:"BasicAuth"})}),"\n",(0,s.jsxs)(t.p,{children:["Basic Authentication middleware for ",(0,s.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that provides an HTTP basic authentication. It calls the next handler for valid credentials and ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401",children:"401 Unauthorized"})," or a custom response for missing or invalid credentials."]}),"\n",(0,s.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"func New(config Config) fiber.Handler\n"})}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/basicauth"\n)\n'})}),"\n",(0,s.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'// Provide a minimal config\napp.Use(basicauth.New(basicauth.Config{\n    Users: map[string]string{\n        "john":  "doe",\n        "admin": "123456",\n    },\n}))\n\n// Or extend your config for customization\napp.Use(basicauth.New(basicauth.Config{\n    Users: map[string]string{\n        "john":  "doe",\n        "admin": "123456",\n    },\n    Realm: "Forbidden",\n    Authorizer: func(user, pass string) bool {\n        if user == "john" && pass == "doe" {\n            return true\n        }\n        if user == "admin" && pass == "123456" {\n            return true\n        }\n        return false\n    },\n    Unauthorized: func(c *fiber.Ctx) error {\n        return c.SendFile("./unauthorized.html")\n    },\n    ContextUsername: "_user",\n    ContextPassword: "_pass",\n}))\n'})}),"\n",(0,s.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"nil"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Users"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"map[string]string"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Users defines the allowed credentials."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"map[string]string{}"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Realm"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Realm is a string to define the realm attribute of BasicAuth. The realm identifies the system to authenticate against and can be used by clients to save credentials."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:'"Restricted"'})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Authorizer"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"func(string, string) bool"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Authorizer defines a function to check the credentials. It will be called with a username and password and is expected to return true or false to indicate approval."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"nil"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Unauthorized"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"fiber.Handler"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Unauthorized defines the response body for unauthorized responses."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"nil"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ContextUsername"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"interface{}"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ContextUsername is the key to store the username in Locals."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:'"username"'})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ContextPassword"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"interface{}"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ContextPassword is the key to store the password in Locals."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:'"password"'})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n    Next:            nil,\n    Users:           map[string]string{},\n    Realm:           "Restricted",\n    Authorizer:      nil,\n    Unauthorized:    nil,\n    ContextUsername: "username",\n    ContextPassword: "password",\n}\n'})})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return l}});var i=n(67294);let s={},r=i.createContext(s);function l(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);