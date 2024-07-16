"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[24925],{9845:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=s(74848),i=s(28453);const r={id:"session"},l="Session",o={id:"middleware/session",title:"Session",description:"Session middleware for Fiber.",source:"@site/docs/core/middleware/session.md",sourceDirName:"middleware",slug:"/middleware/session",permalink:"/next/middleware/session",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/middleware/session.md",tags:[],version:"current",lastUpdatedAt:1721109857e3,frontMatter:{id:"session"},sidebar:"tutorialSidebar",previous:{title:"Rewrite",permalink:"/next/middleware/rewrite"},next:{title:"Skip",permalink:"/next/middleware/skip"}},d={},c=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Constants",id:"constants",level:2},{value:"Custom Storage/Database",id:"custom-storagedatabase",level:3}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"session",children:"Session"}),"\n",(0,n.jsxs)(t.p,{children:["Session middleware for ",(0,n.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["This middleware uses our ",(0,n.jsx)(t.a,{href:"https://github.com/gofiber/storage",children:"Storage"})," package to support various databases through a single interface. The default configuration for this middleware saves data to memory, see the examples below for other databases."]})}),"\n",(0,n.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) *Store\nfunc (s *Store) RegisterType(i any)\nfunc (s *Store) Get(c fiber.Ctx) (*Session, error)\nfunc (s *Store) Delete(id string) error\nfunc (s *Store) Reset() error\n\nfunc (s *Session) Get(key string) any\nfunc (s *Session) Set(key string, val any)\nfunc (s *Session) Delete(key string)\nfunc (s *Session) Destroy() error\nfunc (s *Session) Reset() error\nfunc (s *Session) Regenerate() error\nfunc (s *Session) Save() error\nfunc (s *Session) Fresh() bool\nfunc (s *Session) ID() string\nfunc (s *Session) Keys() []string\nfunc (s *Session) SetExpiry(exp time.Duration)\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["Storing ",(0,n.jsx)(t.code,{children:"any"})," values are limited to built-ins Go types."]})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'import (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/session"\n)\n'})}),"\n",(0,n.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'// Initialize default config\n// This stores all of your app\'s sessions\nstore := session.New()\n\napp.Get("/", func(c fiber.Ctx) error {\n    // Get session from storage\n    sess, err := store.Get(c)\n    if err != nil {\n        panic(err)\n    }\n\n    // Get value\n    name := sess.Get("name")\n\n    // Set key/value\n    sess.Set("name", "john")\n\n    // Get all Keys\n    keys := sess.Keys()\n\n    // Delete key\n    sess.Delete("name")\n\n    // Destroy session\n    if err := sess.Destroy(); err != nil {\n        panic(err)\n    }\n\n    // Sets a specific expiration for this session\n    sess.SetExpiry(time.Second * 2)\n\n    // Save session\n    if err := sess.Save(); err != nil {\n        panic(err)\n    }\n\n    return c.SendString(fmt.Sprintf("Welcome %v", name))\n})\n'})}),"\n",(0,n.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Expiration"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"time.Duration"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Allowed session duration."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"24 * time.Hour"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Storage"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"fiber.Storage"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Storage interface to store the session data."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"memory.New()"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"KeyLookup"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:['KeyLookup is a string in the form of "',(0,n.jsx)(t.code,{children:"<source>:<name>"}),'" that is used to extract session id from the request.']}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:'"cookie:session_id"'})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"CookieDomain"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Domain of the cookie."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:'""'})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"CookiePath"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Path of the cookie."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:'""'})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"CookieSecure"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"bool"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Indicates if cookie is secure."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"false"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"CookieHTTPOnly"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"bool"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Indicates if cookie is HTTP only."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"false"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"CookieSameSite"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Value of SameSite cookie."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:'"Lax"'})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"CookieSessionOnly"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"bool"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Decides whether cookie should last for only the browser session. Ignores Expiration if set to true."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"false"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"KeyGenerator"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"func() string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"KeyGenerator generates the session key."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"utils.UUIDv4"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"CookieName (Deprecated)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Deprecated: Please use KeyLookup. The session name."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:'""'})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n    Expiration:   24 * time.Hour,\n    KeyLookup:    "cookie:session_id",\n    KeyGenerator: utils.UUIDv4,\n    source:       "cookie",\n    sessionName:  "session_id",\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"constants",children:"Constants"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'const (\n    SourceCookie   Source = "cookie"\n    SourceHeader   Source = "header"\n    SourceURLQuery Source = "query"\n)\n'})}),"\n",(0,n.jsx)(t.h3,{id:"custom-storagedatabase",children:"Custom Storage/Database"}),"\n",(0,n.jsxs)(t.p,{children:["You can use any storage from our ",(0,n.jsx)(t.a,{href:"https://github.com/gofiber/storage/",children:"storage"})," package."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"storage := sqlite3.New() // From github.com/gofiber/storage/sqlite3\n\nstore := session.New(session.Config{\n    Storage: storage,\n})\n"})}),"\n",(0,n.jsxs)(t.p,{children:["To use the store, see the ",(0,n.jsx)(t.a,{href:"#examples",children:"Examples"}),"."]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>o});var n=s(96540);const i={},r=n.createContext(i);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);