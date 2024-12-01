"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["72469"],{26357:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>s,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>a});var r=JSON.parse('{"id":"middleware/keyauth","title":"Keyauth","description":"Key auth middleware provides a key based authentication.","source":"@site/docs/core/middleware/keyauth.md","sourceDirName":"middleware","slug":"/middleware/keyauth","permalink":"/next/middleware/keyauth","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/middleware/keyauth.md","tags":[],"version":"current","lastUpdatedAt":1733054881000,"frontMatter":{"id":"keyauth"},"sidebar":"left_sidebar","previous":{"title":"Idempotency","permalink":"/next/middleware/idempotency"},"next":{"title":"Limiter","permalink":"/next/middleware/limiter"}}'),i=n("85893"),l=n("50065");let a={id:"keyauth"},s="Keyauth",c={},o=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Test",id:"test",level:2},{value:"Authenticate only certain endpoints",id:"authenticate-only-certain-endpoints",level:3},{value:"Specifying middleware in the handler",id:"specifying-middleware-in-the-handler",level:3},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"CustomKeyLookup",id:"customkeylookup",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"keyauth",children:"Keyauth"})}),"\n",(0,i.jsx)(t.p,{children:"Key auth middleware provides a key based authentication."}),"\n",(0,i.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\nfunc TokenFromContext(c fiber.Ctx) string\n"})}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "crypto/sha256"\n    "crypto/subtle"\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/keyauth"\n)\n\nvar (\n    apiKey = "correct horse battery staple"\n)\n\nfunc validateAPIKey(c fiber.Ctx, key string) (bool, error) {\n    hashedAPIKey := sha256.Sum256([]byte(apiKey))\n    hashedKey := sha256.Sum256([]byte(key))\n\n    if subtle.ConstantTimeCompare(hashedAPIKey[:], hashedKey[:]) == 1 {\n        return true, nil\n    }\n    return false, keyauth.ErrMissingOrMalformedAPIKey\n}\n\nfunc main() {\n    app := fiber.New()\n\n    // note that the keyauth middleware needs to be defined before the routes are defined!\n    app.Use(keyauth.New(keyauth.Config{\n        KeyLookup:  "cookie:access_token",\n        Validator:  validateAPIKey,\n    }))\n\n    app.Get("/", func(c fiber.Ctx) error {\n        return c.SendString("Successfully authenticated!")\n    })\n\n    app.Listen(":3000")\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"test",children:"Test"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'# No api-key specified -> 400 missing \ncurl http://localhost:3000\n#> missing or malformed API Key\n\ncurl --cookie "access_token=correct horse battery staple" http://localhost:3000\n#> Successfully authenticated!\n\ncurl --cookie "access_token=Clearly A Wrong Key" http://localhost:3000\n#>  missing or malformed API Key\n'})}),"\n",(0,i.jsxs)(t.p,{children:["For a more detailed example, see also the ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/recipes",children:(0,i.jsx)(t.code,{children:"github.com/gofiber/recipes"})})," repository and specifically the ",(0,i.jsx)(t.code,{children:"fiber-envoy-extauthz"})," repository and the ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/recipes/blob/master/fiber-envoy-extauthz/authz/main.go",children:(0,i.jsx)(t.code,{children:"keyauth example"})})," code."]}),"\n",(0,i.jsx)(t.h3,{id:"authenticate-only-certain-endpoints",children:"Authenticate only certain endpoints"}),"\n",(0,i.jsxs)(t.p,{children:["If you want to authenticate only certain endpoints, you can use the ",(0,i.jsx)(t.code,{children:"Config"})," of keyauth and apply a filter function (eg. ",(0,i.jsx)(t.code,{children:"authFilter"}),") like so"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "crypto/sha256"\n    "crypto/subtle"\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/keyauth"\n    "regexp"\n    "strings"\n)\n\nvar (\n    apiKey        = "correct horse battery staple"\n    protectedURLs = []*regexp.Regexp{\n        regexp.MustCompile("^/authenticated$"),\n        regexp.MustCompile("^/auth2$"),\n    }\n)\n\nfunc validateAPIKey(c fiber.Ctx, key string) (bool, error) {\n    hashedAPIKey := sha256.Sum256([]byte(apiKey))\n    hashedKey := sha256.Sum256([]byte(key))\n\n    if subtle.ConstantTimeCompare(hashedAPIKey[:], hashedKey[:]) == 1 {\n        return true, nil\n    }\n    return false, keyauth.ErrMissingOrMalformedAPIKey\n}\n\nfunc authFilter(c fiber.Ctx) bool {\n    originalURL := strings.ToLower(c.OriginalURL())\n\n    for _, pattern := range protectedURLs {\n        if pattern.MatchString(originalURL) {\n            return false\n        }\n    }\n    return true\n}\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use(keyauth.New(keyauth.Config{\n        Next:    authFilter,\n        KeyLookup: "cookie:access_token",\n        Validator: validateAPIKey,\n    }))\n\n    app.Get("/", func(c fiber.Ctx) error {\n        return c.SendString("Welcome")\n    })\n    app.Get("/authenticated", func(c fiber.Ctx) error {\n        return c.SendString("Successfully authenticated!")\n    })\n    app.Get("/auth2", func(c fiber.Ctx) error {\n        return c.SendString("Successfully authenticated 2!")\n    })\n\n    app.Listen(":3000")\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Which results in this"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'# / does not need to be authenticated\ncurl http://localhost:3000\n#> Welcome\n\n# /authenticated needs to be authenticated\ncurl --cookie "access_token=correct horse battery staple" http://localhost:3000/authenticated\n#> Successfully authenticated!\n\n# /auth2 needs to be authenticated too\ncurl --cookie "access_token=correct horse battery staple" http://localhost:3000/auth2\n#> Successfully authenticated 2!\n'})}),"\n",(0,i.jsx)(t.h3,{id:"specifying-middleware-in-the-handler",children:"Specifying middleware in the handler"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "crypto/sha256"\n    "crypto/subtle"\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/keyauth"\n)\n\nconst (\n  apiKey = "my-super-secret-key"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    authMiddleware := keyauth.New(keyauth.Config{\n        Validator:  func(c fiber.Ctx, key string) (bool, error) {\n            hashedAPIKey := sha256.Sum256([]byte(apiKey))\n            hashedKey := sha256.Sum256([]byte(key))\n\n            if subtle.ConstantTimeCompare(hashedAPIKey[:], hashedKey[:]) == 1 {\n                return true, nil\n            }\n            return false, keyauth.ErrMissingOrMalformedAPIKey\n        },\n    })\n\n    app.Get("/", func(c fiber.Ctx) error {\n        return c.SendString("Welcome")\n    })\n\n    app.Get("/allowed",  authMiddleware, func(c fiber.Ctx) error {\n        return c.SendString("Successfully authenticated!")\n    })\n\n    app.Listen(":3000")\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Which results in this"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'# / does not need to be authenticated\ncurl http://localhost:3000\n#> Welcome\n\n# /allowed needs to be authenticated too\ncurl --header "Authorization: Bearer my-super-secret-key"  http://localhost:3000/allowed\n#> Successfully authenticated!\n'})}),"\n",(0,i.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(fiber.Ctx) bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SuccessHandler"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"fiber.Handler"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SuccessHandler defines a function which is executed for a valid key."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ErrorHandler"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"fiber.ErrorHandler"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ErrorHandler defines a function which is executed for an invalid key."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"401 Invalid or expired key"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"KeyLookup"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:['KeyLookup is a string in the form of "',(0,i.jsx)(t.code,{children:"<source>:<name>"}),'" that is used to extract the key from the request.']}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:['"header',":Authorization",'"']})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CustomKeyLookup"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"KeyLookupFunc"})," aka ",(0,i.jsx)(t.code,{children:"func(c fiber.Ctx) (string, error)"})]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"If more complex logic is required to extract the key from the request, an arbitrary function to extract it can be specified here. Utility helper functions are described below."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"AuthScheme"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"AuthScheme to be used in the Authorization header."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:'"Bearer"'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Validator"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(fiber.Ctx, string) (bool, error)"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Validator is a function to validate the key."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"A function for key validation"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n    SuccessHandler: func(c fiber.Ctx) error {\n        return c.Next()\n    },\n    ErrorHandler: func(c fiber.Ctx, err error) error {\n        if err == ErrMissingOrMalformedAPIKey {\n            return c.Status(fiber.StatusUnauthorized).SendString(err.Error())\n        }\n        return c.Status(fiber.StatusUnauthorized).SendString("Invalid or expired API Key")\n    },\n    KeyLookup:  "header:" + fiber.HeaderAuthorization,\n    CustomKeyLookup: nil,\n    AuthScheme: "Bearer",\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"customkeylookup",children:"CustomKeyLookup"}),"\n",(0,i.jsx)(t.p,{children:"Two public utility functions are provided that may be useful when creating custom extraction:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"DefaultKeyLookup(keyLookup string, authScheme string)"}),": This is the function that implements the default ",(0,i.jsx)(t.code,{children:"KeyLookup"})," behavior, exposed to be used as a component of custom parsing logic"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"MultipleKeySourceLookup(keyLookups []string, authScheme string)"}),": Creates a CustomKeyLookup function that checks each listed source using the above function until a key is found or the options are all exhausted. For example, ",(0,i.jsx)(t.code,{children:'MultipleKeySourceLookup([]string{"header:Authorization", "header:x-api-key", "cookie:apikey"}, "Bearer")'})," would first check the standard Authorization header, checks the ",(0,i.jsx)(t.code,{children:"x-api-key"})," header next, and finally checks for a cookie named ",(0,i.jsx)(t.code,{children:"apikey"}),". If any of these contain a valid API key, the request continues. Otherwise, an error is returned."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return a}});var r=n(67294);let i={},l=r.createContext(i);function a(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);