"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["56923"],{4475:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>d,toc:()=>s,frontMatter:()=>c});var r=JSON.parse('{"id":"api/middleware/encryptcookie","title":"Encrypt Cookie","description":"Encrypt Cookie is a middleware for Fiber that secures your cookie values through encryption.","source":"@site/versioned_docs/version-v2.x/api/middleware/encryptcookie.md","sourceDirName":"api/middleware","slug":"/api/middleware/encryptcookie","permalink":"/api/middleware/encryptcookie","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1735889916000,"frontMatter":{"id":"encryptcookie"},"sidebar":"tutorialSidebar","previous":{"title":"EarlyData","permalink":"/api/middleware/earlydata"},"next":{"title":"EnvVar","permalink":"/api/middleware/envvar"}}'),i=n("85893"),o=n("50065");let c={id:"encryptcookie"},l="Encrypt Cookie",d={},s=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Usage With Other Middlewares That Reads Or Modify Cookies",id:"usage-with-other-middlewares-that-reads-or-modify-cookies",level:2}];function a(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"encrypt-cookie",children:"Encrypt Cookie"})}),"\n",(0,i.jsxs)(t.p,{children:["Encrypt Cookie is a middleware for ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that secures your cookie values through encryption."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"This middleware encrypts cookie values and not the cookie names."})}),"\n",(0,i.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"// Intitializes the middleware\nfunc New(config ...Config) fiber.Handler\n\n// Returns a random 32 character long string\nfunc GenerateKey() string\n"})}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"To use the Encrypt Cookie middleware, first, import the middleware package as part of the Fiber web framework:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/encryptcookie"\n)\n'})}),"\n",(0,i.jsx)(t.p,{children:"Once you've imported the middleware package, you can use it inside your Fiber app:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'// Provide a minimal configuration\napp.Use(encryptcookie.New(encryptcookie.Config{\n    Key: "secret-thirty-2-character-string",\n}))\n\n// Retrieve the encrypted cookie value\napp.Get("/", func(c *fiber.Ctx) error {\n    return c.SendString("value=" + c.Cookies("test"))\n})\n\n// Create an encrypted cookie\napp.Post("/", func(c *fiber.Ctx) error {\n    c.Cookie(&fiber.Cookie{\n        Name:  "test",\n        Value: "SomeThing",\n    })\n    return nil\n})\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Key"})," must be a 32 character string. It's used to encrypt the values, so make sure it is random and keep it secret.\nYou can run ",(0,i.jsx)(t.code,{children:"openssl rand -base64 32"})," or call ",(0,i.jsx)(t.code,{children:"encryptcookie.GenerateKey()"})," to create a random key for you.\nMake sure not to set ",(0,i.jsx)(t.code,{children:"Key"})," to ",(0,i.jsx)(t.code,{children:"encryptcookie.GenerateKey()"})," because that will create a new key every run."]})}),"\n",(0,i.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"A function to skip this middleware when returned true."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Except"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Array of cookie keys that should not be encrypted."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Key"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"A base64-encoded unique key to encode & decode cookies. Required. Key length should be 32 characters."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"(No default, required field)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Encryptor"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(decryptedString, key string) (string, error)"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"A custom function to encrypt cookies."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"EncryptCookie"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Decryptor"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(encryptedString, key string) (string, error)"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"A custom function to decrypt cookies."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"DecryptCookie"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n	Next:      nil,\n	Except:    []string{},\n	Key:       "",\n	Encryptor: EncryptCookie,\n	Decryptor: DecryptCookie,\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"usage-with-other-middlewares-that-reads-or-modify-cookies",children:"Usage With Other Middlewares That Reads Or Modify Cookies"}),"\n",(0,i.jsx)(t.p,{children:"Place the encryptcookie middleware before any other middleware that reads or modifies cookies. For example, if you are using the CSRF middleware, ensure that the encryptcookie middleware is placed before it. Failure to do so may prevent the CSRF middleware from reading the encrypted cookie."}),"\n",(0,i.jsx)(t.p,{children:"You may also choose to exclude certain cookies from encryption. For instance, if you are using the CSRF middleware with a frontend framework like Angular, and the framework reads the token from a cookie, you should exclude that cookie from encryption. This can be achieved by adding the cookie name to the Except array in the configuration:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'app.Use(encryptcookie.New(encryptcookie.Config{\n	Key:    "secret-thirty-2-character-string",\n	Except: []string{csrf.ConfigDefault.CookieName}, // exclude CSRF cookie\n}))\napp.Use(csrf.New(csrf.Config{\n	KeyLookup:      "header:" + csrf.HeaderName,\n	CookieSameSite: "Lax",\n	CookieSecure:   true,\n	CookieHTTPOnly: false,\n}))\n'})})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return c}});var r=n(67294);let i={},o=r.createContext(i);function c(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);