"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["66164"],{41438:function(e,t,s){s.r(t),s.d(t,{metadata:()=>n,contentTitle:()=>o,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>l});var n=JSON.parse('{"id":"api/middleware/session","title":"Session","description":"Session middleware for Fiber.","source":"@site/versioned_docs/version-v2.x/api/middleware/session.md","sourceDirName":"api/middleware","slug":"/api/middleware/session","permalink":"/api/middleware/session","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1732892323000,"frontMatter":{"id":"session"},"sidebar":"tutorialSidebar","previous":{"title":"Rewrite","permalink":"/api/middleware/rewrite"},"next":{"title":"Skip","permalink":"/api/middleware/skip"}}'),i=s("85893"),r=s("50065");let l={id:"session"},o="Session",d={},c=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Constants",id:"constants",level:2},{value:"Custom Storage/Database",id:"custom-storagedatabase",level:3}];function a(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"session",children:"Session"})}),"\n",(0,i.jsxs)(t.p,{children:["Session middleware for ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["This middleware uses our ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/storage",children:"Storage"})," package to support various databases through a single interface. The default configuration for this middleware saves data to memory, see the examples below for other databases."]})}),"\n",(0,i.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) *Store\nfunc (s *Store) RegisterType(i interface{})\nfunc (s *Store) Get(c *fiber.Ctx) (*Session, error)\nfunc (s *Store) Delete(id string) error\nfunc (s *Store) Reset() error\n\nfunc (s *Session) Get(key string) interface{}\nfunc (s *Session) Set(key string, val interface{})\nfunc (s *Session) Delete(key string)\nfunc (s *Session) Destroy() error\nfunc (s *Session) Reset() error\nfunc (s *Session) Regenerate() error\nfunc (s *Session) Save() error\nfunc (s *Session) Fresh() bool\nfunc (s *Session) ID() string\nfunc (s *Session) Keys() []string\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["Storing ",(0,i.jsx)(t.code,{children:"interface{}"})," values are limited to built-ins Go types."]})}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/session"\n)\n'})}),"\n",(0,i.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'// Initialize default config\n// This stores all of your app\'s sessions\nstore := session.New()\n\napp.Get("/", func(c *fiber.Ctx) error {\n    // Get session from storage\n    sess, err := store.Get(c)\n    if err != nil {\n        panic(err)\n    }\n\n    // Get value\n    name := sess.Get("name")\n\n    // Set key/value\n    sess.Set("name", "john")\n\n    // Get all Keys\n    keys := sess.Keys()\n\n    // Delete key\n    sess.Delete("name")\n\n    // Destroy session\n    if err := sess.Destroy(); err != nil {\n        panic(err)\n    }\n\n	// Sets a specific expiration for this session\n	sess.SetExpiry(time.Second * 2)\n\n    // Save session\n    if err := sess.Save(); err != nil {\n		panic(err)\n	}\n\n	return c.SendString(fmt.Sprintf("Welcome %v", name))\n})\n'})}),"\n",(0,i.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Expiration"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"time.Duration"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Allowed session duration."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"24 * time.Hour"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Storage"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"fiber.Storage"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Storage interface to store the session data."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"memory.New()"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"KeyLookup"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:['KeyLookup is a string in the form of "',(0,i.jsx)(t.code,{children:"<source>:<name>"}),'" that is used to extract session id from the request.']}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:'"cookie:session_id"'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CookieDomain"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Domain of the cookie."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:'""'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CookiePath"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Path of the cookie."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:'""'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CookieSecure"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Indicates if cookie is secure."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CookieHTTPOnly"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Indicates if cookie is HTTP only."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CookieSameSite"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Value of SameSite cookie."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:'"Lax"'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CookieSessionOnly"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Decides whether cookie should last for only the browser session. Ignores Expiration if set to true."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"KeyGenerator"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func() string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"KeyGenerator generates the session key."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"utils.UUIDv4"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CookieName (Deprecated)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Deprecated: Please use KeyLookup. The session name."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:'""'})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n	Expiration:   24 * time.Hour,\n	KeyLookup:    "cookie:session_id",\n	KeyGenerator: utils.UUIDv4,\n	source:       "cookie",\n	sessionName:  "session_id",\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"constants",children:"Constants"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'const (\n	SourceCookie   Source = "cookie"\n	SourceHeader   Source = "header"\n	SourceURLQuery Source = "query"\n)\n'})}),"\n",(0,i.jsx)(t.h3,{id:"custom-storagedatabase",children:"Custom Storage/Database"}),"\n",(0,i.jsxs)(t.p,{children:["You can use any storage from our ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/storage/",children:"storage"})," package."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"storage := sqlite3.New() // From github.com/gofiber/storage/sqlite3\nstore := session.New(session.Config{\n	Storage: storage,\n})\n"})}),"\n",(0,i.jsxs)(t.p,{children:["To use the store, see the ",(0,i.jsx)(t.a,{href:"#examples",children:"Examples"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,t,s){s.d(t,{Z:function(){return o},a:function(){return l}});var n=s(67294);let i={},r=n.createContext(i);function l(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);