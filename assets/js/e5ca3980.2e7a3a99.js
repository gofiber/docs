"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[38133],{40245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=n(74848),r=n(28453);const s={id:"basicauth"},l="BasicAuth",a={id:"middleware/basicauth",title:"BasicAuth",description:"Basic Authentication middleware for Fiber that provides an HTTP basic authentication. It calls the next handler for valid credentials and 401 Unauthorized or a custom response for missing or invalid credentials.",source:"@site/docs/core/middleware/basicauth.md",sourceDirName:"middleware",slug:"/middleware/basicauth",permalink:"/next/middleware/basicauth",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/middleware/basicauth.md",tags:[],version:"current",lastUpdatedAt:1721372462e3,frontMatter:{id:"basicauth"},sidebar:"tutorialSidebar",previous:{title:"Adaptor",permalink:"/next/middleware/adaptor"},next:{title:"Cache",permalink:"/next/middleware/cache"}},d={},c=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"basicauth",children:"BasicAuth"}),"\n",(0,i.jsxs)(t.p,{children:["Basic Authentication middleware for ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that provides an HTTP basic authentication. It calls the next handler for valid credentials and ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401",children:"401 Unauthorized"})," or a custom response for missing or invalid credentials."]}),"\n",(0,i.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func New(config Config) fiber.Handler\nfunc UsernameFromContext(c fiber.Ctx) string\nfunc PasswordFromContext(c fiber.Ctx) string\n"})}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/basicauth"\n)\n'})}),"\n",(0,i.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'// Provide a minimal config\napp.Use(basicauth.New(basicauth.Config{\n    Users: map[string]string{\n        "john":  "doe",\n        "admin": "123456",\n    },\n}))\n\n// Or extend your config for customization\napp.Use(basicauth.New(basicauth.Config{\n    Users: map[string]string{\n        "john":  "doe",\n        "admin": "123456",\n    },\n    Realm: "Forbidden",\n    Authorizer: func(user, pass string) bool {\n        if user == "john" && pass == "doe" {\n            return true\n        }\n        if user == "admin" && pass == "123456" {\n            return true\n        }\n        return false\n    },\n    Unauthorized: func(c fiber.Ctx) error {\n        return c.SendFile("./unauthorized.html")\n    },\n}))\n'})}),"\n",(0,i.jsx)(t.p,{children:"Getting the username and password"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'func handler(c fiber.Ctx) error {\n    username := basicauth.UsernameFromContext(c)\n    password := basicauth.PasswordFromContext(c)\n    log.Printf("Username: %s Password: %s", username, password)\n    return c.SendString("Hello, " + username)\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(fiber.Ctx) bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Users"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"map[string]string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Users defines the allowed credentials."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"map[string]string{}"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Realm"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Realm is a string to define the realm attribute of BasicAuth. The realm identifies the system to authenticate against and can be used by clients to save credentials."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:'"Restricted"'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Authorizer"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(string, string) bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Authorizer defines a function to check the credentials. It will be called with a username and password and is expected to return true or false to indicate approval."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Unauthorized"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"fiber.Handler"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Unauthorized defines the response body for unauthorized responses."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n    Next:            nil,\n    Users:           map[string]string{},\n    Realm:           "Restricted",\n    Authorizer:      nil,\n    Unauthorized:    nil,\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var i=n(96540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);