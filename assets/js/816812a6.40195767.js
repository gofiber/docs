"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["99813"],{24466:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>h,assets:()=>l,toc:()=>s,frontMatter:()=>c});var r=JSON.parse('{"id":"middleware/encryptcookie","title":"Encrypt Cookie","description":"Encrypt Cookie is a middleware for Fiber that secures your cookie values through encryption.","source":"@site/docs/core/middleware/encryptcookie.md","sourceDirName":"middleware","slug":"/middleware/encryptcookie","permalink":"/next/middleware/encryptcookie","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/middleware/encryptcookie.md","tags":[],"version":"current","lastUpdatedAt":1733047527000,"frontMatter":{"id":"encryptcookie"},"sidebar":"left_sidebar","previous":{"title":"EarlyData","permalink":"/next/middleware/earlydata"},"next":{"title":"EnvVar","permalink":"/next/middleware/envvar"}}'),i=t("85893"),o=t("50065");let c={id:"encryptcookie"},d="Encrypt Cookie",l={},s=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Usage With Other Middlewares That Reads Or Modify Cookies",id:"usage-with-other-middlewares-that-reads-or-modify-cookies",level:2},{value:"Encryption Algorithms",id:"encryption-algorithms",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"encrypt-cookie",children:"Encrypt Cookie"})}),"\n",(0,i.jsxs)(n.p,{children:["Encrypt Cookie is a middleware for ",(0,i.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that secures your cookie values through encryption."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This middleware encrypts cookie values and not the cookie names."})}),"\n",(0,i.jsx)(n.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// Intitializes the middleware\nfunc New(config ...Config) fiber.Handler\n\n// GenerateKey returns a random string of 16, 24, or 32 bytes.\n// The length of the key determines the AES encryption algorithm used:\n// 16 bytes for AES-128, 24 bytes for AES-192, and 32 bytes for AES-256-GCM.\nfunc GenerateKey(length int) string\n"})}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"To use the Encrypt Cookie middleware, first, import the middleware package as part of the Fiber web framework:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/encryptcookie"\n)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Once you've imported the middleware package, you can use it inside your Fiber app:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// Provide a minimal configuration\napp.Use(encryptcookie.New(encryptcookie.Config{\n    Key: "secret-thirty-2-character-string",\n}))\n\n// Retrieve the encrypted cookie value\napp.Get("/", func(c fiber.Ctx) error {\n    return c.SendString("value=" + c.Cookies("test"))\n})\n\n// Create an encrypted cookie\napp.Post("/", func(c fiber.Ctx) error {\n    c.Cookie(&fiber.Cookie{\n        Name:  "test",\n        Value: "SomeThing",\n    })\n    return nil\n})\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Key"})," parameter requires an encoded string of 16, 24, or 32 bytes for encryption, corresponding to AES-128, AES-192, and AES-256-GCM standards, respectively. Ensure the key is randomly generated and securely stored.\nTo generate a 32 char key, use ",(0,i.jsx)(n.code,{children:"openssl rand -base64 32"})," or ",(0,i.jsx)(n.code,{children:"encryptcookie.GenerateKey(32)"}),". Avoid dynamically generating a new ",(0,i.jsx)(n.code,{children:"Key"})," with ",(0,i.jsx)(n.code,{children:"encryptcookie.GenerateKey(32)"})," at each application startup to prevent rendering previously encrypted data inaccessible."]})}),"\n",(0,i.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Next"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"func(fiber.Ctx) bool"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"A function to skip this middleware when returned true."}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"nil"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Except"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"[]string"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Array of cookie keys that should not be encrypted."}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"[]"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Key"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"A base64-encoded unique key to encode & decode cookies. Required. Key length should be 32 characters."}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"(No default, required field)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Encryptor"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"func(decryptedString, key string) (string, error)"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"A custom function to encrypt cookies."}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"EncryptCookie"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Decryptor"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"func(encryptedString, key string) (string, error)"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"A custom function to decrypt cookies."}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"DecryptCookie"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'var ConfigDefault = Config{\n    Next:      nil,\n    Except:    []string{},\n    Key:       "",\n    Encryptor: EncryptCookie,\n    Decryptor: DecryptCookie,\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"usage-with-other-middlewares-that-reads-or-modify-cookies",children:"Usage With Other Middlewares That Reads Or Modify Cookies"}),"\n",(0,i.jsxs)(n.p,{children:["Place the ",(0,i.jsx)(n.code,{children:"encryptcookie"})," middleware before any other middleware that reads or modifies cookies. For example, if you are using the CSRF middleware, ensure that the ",(0,i.jsx)(n.code,{children:"encryptcookie"})," middleware is placed before it. Failure to do so may prevent the CSRF middleware from reading the encrypted cookie."]}),"\n",(0,i.jsxs)(n.p,{children:["You may also choose to exclude certain cookies from encryption. For instance, if you are using the ",(0,i.jsx)(n.code,{children:"CSRF"})," middleware with a frontend framework like Angular, and the framework reads the token from a cookie, you should exclude that cookie from encryption. This can be achieved by adding the cookie name to the Except array in the configuration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'app.Use(encryptcookie.New(encryptcookie.Config{\n    Key:    "secret-thirty-2-character-string",\n    Except: []string{csrf.ConfigDefault.CookieName}, // exclude CSRF cookie\n}))\napp.Use(csrf.New(csrf.Config{\n    KeyLookup:      "header:" + csrf.HeaderName,\n    CookieSameSite: "Lax",\n    CookieSecure:   true,\n    CookieHTTPOnly: false,\n}))\n'})}),"\n",(0,i.jsx)(n.h2,{id:"encryption-algorithms",children:"Encryption Algorithms"}),"\n",(0,i.jsxs)(n.p,{children:["The default Encryptor and Decryptor functions use ",(0,i.jsx)(n.code,{children:"AES-256-GCM"})," for encryption and decryption. If you need to use ",(0,i.jsx)(n.code,{children:"AES-128"})," or ",(0,i.jsx)(n.code,{children:"AES-192"})," instead, you can do so by changing the length of the key when calling ",(0,i.jsx)(n.code,{children:"encryptcookie.GenerateKey(length)"})," or by providing a key of one of the following lengths:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"AES-128 requires a 16-byte key."}),"\n",(0,i.jsx)(n.li,{children:"AES-192 requires a 24-byte key."}),"\n",(0,i.jsx)(n.li,{children:"AES-256 requires a 32-byte key."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example, to generate a key for AES-128:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"key := encryptcookie.GenerateKey(16)\n"})}),"\n",(0,i.jsx)(n.p,{children:"And for AES-192:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"key := encryptcookie.GenerateKey(24)\n"})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return c}});var r=t(67294);let i={},o=r.createContext(i);function c(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);