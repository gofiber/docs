"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[87316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,h=p["".concat(c,".").concat(f)]||p[f]||s[f]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={id:"keyauth"},o="Keyauth",l={unversionedId:"api/middleware/keyauth",id:"api/middleware/keyauth",title:"Keyauth",description:"Key auth middleware provides a key based authentication.",source:"@site/docs/core/api/middleware/keyauth.md",sourceDirName:"api/middleware",slug:"/api/middleware/keyauth",permalink:"/next/api/middleware/keyauth",draft:!1,editUrl:"https://github.com/gofiber/fiber/edit/master/docs/api/middleware/keyauth.md",tags:[],version:"current",lastUpdatedAt:1708310554,formattedLastUpdatedAt:"Feb 19, 2024",frontMatter:{id:"keyauth"},sidebar:"tutorialSidebar",previous:{title:"Idempotency",permalink:"/next/api/middleware/idempotency"},next:{title:"Limiter",permalink:"/next/api/middleware/limiter"}},c={},d=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Authenticate only certain endpoints",id:"authenticate-only-certain-endpoints",level:3},{value:"Specifying middleware in the handler",id:"specifying-middleware-in-the-handler",level:3},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],u={toc:d},p="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"keyauth"},"Keyauth"),(0,a.kt)("p",null,"Key auth middleware provides a key based authentication."),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\nfunc TokenFromContext(c fiber.Ctx) string\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "crypto/sha256"\n    "crypto/subtle"\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/keyauth"\n)\n\nvar (\n    apiKey = "correct horse battery staple"\n)\n\nfunc validateAPIKey(c fiber.Ctx, key string) (bool, error) {\n    hashedAPIKey := sha256.Sum256([]byte(apiKey))\n    hashedKey := sha256.Sum256([]byte(key))\n\n    if subtle.ConstantTimeCompare(hashedAPIKey[:], hashedKey[:]) == 1 {\n        return true, nil\n    }\n    return false, keyauth.ErrMissingOrMalformedAPIKey\n}\n\nfunc main() {\n    app := fiber.New()\n\n    // note that the keyauth middleware needs to be defined before the routes are defined!\n    app.Use(keyauth.New(keyauth.Config{\n        KeyLookup:  "cookie:access_token",\n        Validator:  validateAPIKey,\n    }))\n\n    app.Get("/", func(c fiber.Ctx) error {\n        return c.SendString("Successfully authenticated!")\n    })\n\n    app.Listen(":3000")\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Test:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# No api-key specified -> 400 missing \ncurl http://localhost:3000\n#> missing or malformed API Key\n\ncurl --cookie "access_token=correct horse battery staple" http://localhost:3000\n#> Successfully authenticated!\n\ncurl --cookie "access_token=Clearly A Wrong Key" http://localhost:3000\n#>  missing or malformed API Key\n')),(0,a.kt)("p",null,"For a more detailed example, see also the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/recipes"},(0,a.kt)("inlineCode",{parentName:"a"},"github.com/gofiber/recipes"))," repository and specifically the ",(0,a.kt)("inlineCode",{parentName:"p"},"fiber-envoy-extauthz")," repository and the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/recipes/blob/master/fiber-envoy-extauthz/authz/main.go"},(0,a.kt)("inlineCode",{parentName:"a"},"keyauth example"))," code."),(0,a.kt)("h3",{id:"authenticate-only-certain-endpoints"},"Authenticate only certain endpoints"),(0,a.kt)("p",null,"If you want to authenticate only certain endpoints, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," of keyauth and apply a filter function (eg. ",(0,a.kt)("inlineCode",{parentName:"p"},"authFilter"),") like so"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "crypto/sha256"\n    "crypto/subtle"\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/keyauth"\n    "regexp"\n    "strings"\n)\n\nvar (\n    apiKey        = "correct horse battery staple"\n    protectedURLs = []*regexp.Regexp{\n        regexp.MustCompile("^/authenticated$"),\n        regexp.MustCompile("^/auth2$"),\n    }\n)\n\nfunc validateAPIKey(c fiber.Ctx, key string) (bool, error) {\n    hashedAPIKey := sha256.Sum256([]byte(apiKey))\n    hashedKey := sha256.Sum256([]byte(key))\n\n    if subtle.ConstantTimeCompare(hashedAPIKey[:], hashedKey[:]) == 1 {\n        return true, nil\n    }\n    return false, keyauth.ErrMissingOrMalformedAPIKey\n}\n\nfunc authFilter(c fiber.Ctx) bool {\n    originalURL := strings.ToLower(c.OriginalURL())\n\n    for _, pattern := range protectedURLs {\n        if pattern.MatchString(originalURL) {\n            return false\n        }\n    }\n    return true\n}\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use(keyauth.New(keyauth.Config{\n        Next:    authFilter,\n        KeyLookup: "cookie:access_token",\n        Validator: validateAPIKey,\n    }))\n\n    app.Get("/", func(c fiber.Ctx) error {\n        return c.SendString("Welcome")\n    })\n    app.Get("/authenticated", func(c fiber.Ctx) error {\n        return c.SendString("Successfully authenticated!")\n    })\n    app.Get("/auth2", func(c fiber.Ctx) error {\n        return c.SendString("Successfully authenticated 2!")\n    })\n\n    app.Listen(":3000")\n}\n')),(0,a.kt)("p",null,"Which results in this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# / does not need to be authenticated\ncurl http://localhost:3000\n#> Welcome\n\n# /authenticated needs to be authenticated\ncurl --cookie "access_token=correct horse battery staple" http://localhost:3000/authenticated\n#> Successfully authenticated!\n\n# /auth2 needs to be authenticated too\ncurl --cookie "access_token=correct horse battery staple" http://localhost:3000/auth2\n#> Successfully authenticated 2!\n')),(0,a.kt)("h3",{id:"specifying-middleware-in-the-handler"},"Specifying middleware in the handler"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "crypto/sha256"\n    "crypto/subtle"\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/keyauth"\n)\n\nconst (\n  apiKey = "my-super-secret-key"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    authMiddleware := keyauth.New(keyauth.Config{\n        Validator:  func(c fiber.Ctx, key string) (bool, error) {\n            hashedAPIKey := sha256.Sum256([]byte(apiKey))\n            hashedKey := sha256.Sum256([]byte(key))\n\n            if subtle.ConstantTimeCompare(hashedAPIKey[:], hashedKey[:]) == 1 {\n                return true, nil\n            }\n            return false, keyauth.ErrMissingOrMalformedAPIKey\n        },\n    })\n\n    app.Get("/", func(c fiber.Ctx) error {\n        return c.SendString("Welcome")\n    })\n\n    app.Get("/allowed",  authMiddleware, func(c fiber.Ctx) error {\n        return c.SendString("Successfully authenticated!")\n    })\n\n    app.Listen(":3000")\n}\n')),(0,a.kt)("p",null,"Which results in this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# / does not need to be authenticated\ncurl http://localhost:3000\n#> Welcome\n\n# /allowed needs to be authenticated too\ncurl --header "Authorization: Bearer my-super-secret-key"  http://localhost:3000/allowed\n#> Successfully authenticated!\n')),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(fiber.Ctx) bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Next defines a function to skip this middleware when returned true."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SuccessHandler"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"fiber.Handler")),(0,a.kt)("td",{parentName:"tr",align:"left"},"SuccessHandler defines a function which is executed for a valid key."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ErrorHandler"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"fiber.ErrorHandler")),(0,a.kt)("td",{parentName:"tr",align:"left"},"ErrorHandler defines a function which is executed for an invalid key."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"401 Invalid or expired key"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"KeyLookup"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},'KeyLookup is a string in the form of "',(0,a.kt)("inlineCode",{parentName:"td"},"<source>:<name>"),'" that is used to extract key from the request.'),(0,a.kt)("td",{parentName:"tr",align:"left"},'"header:Authorization"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"AuthScheme"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"AuthScheme to be used in the Authorization header."),(0,a.kt)("td",{parentName:"tr",align:"left"},'"Bearer"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Validator"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(fiber.Ctx, string) (bool, error)")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Validator is a function to validate the key."),(0,a.kt)("td",{parentName:"tr",align:"left"},"A function for key validation")))),(0,a.kt)("h2",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    SuccessHandler: func(c fiber.Ctx) error {\n        return c.Next()\n    },\n    ErrorHandler: func(c fiber.Ctx, err error) error {\n        if err == ErrMissingOrMalformedAPIKey {\n            return c.Status(fiber.StatusUnauthorized).SendString(err.Error())\n        }\n        return c.Status(fiber.StatusUnauthorized).SendString("Invalid or expired API Key")\n    },\n    KeyLookup:  "header:" + fiber.HeaderAuthorization,\n    AuthScheme: "Bearer",\n}\n')))}s.isMDXComponent=!0}}]);