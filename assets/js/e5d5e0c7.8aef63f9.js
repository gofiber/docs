"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["43035"],{87157:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>l,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>o});var i=JSON.parse('{"id":"middleware/csrf","title":"CSRF","description":"The CSRF middleware for Fiber provides protection against Cross-Site Request Forgery (CSRF) attacks. Requests made using methods other than those defined as \'safe\' by RFC9110#section-9.2.1 (GET, HEAD, OPTIONS, and TRACE) are validated using tokens. If a potential attack is detected, the middleware will return a default 403 Forbidden error.","source":"@site/docs/core/middleware/csrf.md","sourceDirName":"middleware","slug":"/middleware/csrf","permalink":"/next/middleware/csrf","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/middleware/csrf.md","tags":[],"version":"current","lastUpdatedAt":1733047527000,"frontMatter":{"id":"csrf"},"sidebar":"left_sidebar","previous":{"title":"CORS","permalink":"/next/middleware/cors"},"next":{"title":"EarlyData","permalink":"/next/middleware/earlydata"}}'),r=n("85893"),s=n("50065");let o={id:"csrf"},l="CSRF",d={},a=[{value:"How to use Fiber&#39;s CSRF Middleware",id:"how-to-use-fibers-csrf-middleware",level:2},{value:"Examples",id:"examples",level:2},{value:"Recipes for Common Use Cases",id:"recipes-for-common-use-cases",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:3},{value:"Recommended Config (with session)",id:"recommended-config-with-session",level:3},{value:"Trusted Origins",id:"trusted-origins",level:3},{value:"Example with Explicit Origins",id:"example-with-explicit-origins",level:4},{value:"Example with Subdomain Matching",id:"example-with-subdomain-matching",level:4},{value:"Constants",id:"constants",level:2},{value:"Sentinel Errors",id:"sentinel-errors",level:2},{value:"Errors Returned to Error Handler",id:"errors-returned-to-error-handler",level:3},{value:"Custom Error Handler",id:"custom-error-handler",level:2},{value:"Custom Storage/Database",id:"custom-storagedatabase",level:2},{value:"How It Works",id:"how-it-works",level:2},{value:"Token Generation",id:"token-generation",level:3},{value:"Security Considerations",id:"security-considerations",level:3},{value:"Token Validation Patterns",id:"token-validation-patterns",level:2},{value:"Double Submit Cookie Pattern (Default)",id:"double-submit-cookie-pattern-default",level:3},{value:"Synchronizer Token Pattern (with Session)",id:"synchronizer-token-pattern-with-session",level:3},{value:"Defense In Depth",id:"defense-in-depth",level:2},{value:"Referer Checking",id:"referer-checking",level:2},{value:"Token Lifecycle",id:"token-lifecycle",level:2},{value:"Token Reuse",id:"token-reuse",level:3},{value:"Deleting Tokens",id:"deleting-tokens",level:3},{value:"BREACH",id:"breach",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"csrf",children:"CSRF"})}),"\n",(0,r.jsxs)(t.p,{children:["The CSRF middleware for ",(0,r.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," provides protection against ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery",children:"Cross-Site Request Forgery"})," (CSRF) attacks. Requests made using methods other than those defined as 'safe' by ",(0,r.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc9110.html#section-9.2.1",children:"RFC9110#section-9.2.1"})," (GET, HEAD, OPTIONS, and TRACE) are validated using tokens. If a potential attack is detected, the middleware will return a default 403 Forbidden error."]}),"\n",(0,r.jsxs)(t.p,{children:["This middleware offers two ",(0,r.jsx)(t.a,{href:"#token-validation-patterns",children:"Token Validation Patterns"}),": the ",(0,r.jsx)(t.a,{href:"#double-submit-cookie-pattern-default",children:"Double Submit Cookie Pattern (default)"}),", and the ",(0,r.jsx)(t.a,{href:"#synchronizer-token-pattern-with-session",children:"Synchronizer Token Pattern (with Session)"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["As a ",(0,r.jsx)(t.a,{href:"#defense-in-depth",children:"Defense In Depth"})," measure, this middleware performs ",(0,r.jsx)(t.a,{href:"#referer-checking",children:"Referer Checking"})," for HTTPS requests."]}),"\n",(0,r.jsx)(t.h2,{id:"how-to-use-fibers-csrf-middleware",children:"How to use Fiber's CSRF Middleware"}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'import (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/csrf"\n)\n'})}),"\n",(0,r.jsx)(t.p,{children:"After initializing your Fiber app, you can use the following code to initialize the middleware:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'// Initialize default config\napp.Use(csrf.New())\n\n// Or extend your config for customization\napp.Use(csrf.New(csrf.Config{\n    KeyLookup:      "header:X-Csrf-Token",\n    CookieName:     "csrf_",\n    CookieSameSite: "Lax",\n    IdleTimeout:    30 * time.Minute,\n    KeyGenerator:   utils.UUIDv4,\n    Extractor:      func(c fiber.Ctx) (string, error) { ... },\n}))\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"KeyLookup will be ignored if Extractor is explicitly set."})}),"\n",(0,r.jsx)(t.p,{children:"Getting the CSRF token in a handler:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'func handler(c fiber.Ctx) error {\n    handler := csrf.HandlerFromContext(c)\n    token := csrf.TokenFromContext(c)\n    if handler == nil {\n        panic("csrf middleware handler not registered")\n    }\n    cfg := handler.Config\n    if cfg == nil {\n        panic("csrf middleware handler has no config")\n    }\n    if !strings.Contains(cfg.KeyLookup, ":") {\n        panic("invalid KeyLookup format")\n    }\n    formKey := strings.Split(cfg.KeyLookup, ":")[1]\n    \n    tmpl := fmt.Sprintf(`<form action="/post" method="POST">\n        <input type="hidden" name="%s" value="%s">\n        <input type="text" name="message">\n        <input type="submit" value="Submit">\n    </form>`, formKey, token)\n    c.Set("Content-Type", "text/html")\n    return c.SendString(tmpl)\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"recipes-for-common-use-cases",children:"Recipes for Common Use Cases"}),"\n",(0,r.jsx)(t.p,{children:"There are two basic use cases for the CSRF middleware:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Without Sessions"}),": This is the simplest way to use the middleware. It uses the Double Submit Cookie Pattern and does not require a user session."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["See GoFiber recipe ",(0,r.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/csrf",children:"CSRF"})," for an example of using the CSRF middleware without a user session."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"With Sessions"}),": This is generally considered more secure. It uses the Synchronizer Token Pattern and requires a user session, and the use of pre-session, which prevents login CSRF attacks."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["See GoFiber recipe ",(0,r.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/csrf-with-session",children:"CSRF with Session"})," for an example of using the CSRF middleware with a user session."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\nfunc TokenFromContext(c fiber.Ctx) string\nfunc HandlerFromContext(c fiber.Ctx) *Handler\n\nfunc (h *Handler) DeleteToken(c fiber.Ctx) error\n"})}),"\n",(0,r.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func(fiber.Ctx) bool"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nil"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"KeyLookup"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:['KeyLookup is a string in the form of "',(0,r.jsx)(t.code,{children:"<source>:<key>"}),'" that is used to create an Extractor that extracts the token from the request. Possible values: "',(0,r.jsx)(t.code,{children:"header:<name>"}),'", "',(0,r.jsx)(t.code,{children:"query:<name>"}),'", "',(0,r.jsx)(t.code,{children:"param:<name>"}),'", "',(0,r.jsx)(t.code,{children:"form:<name>"}),'", "',(0,r.jsx)(t.code,{children:"cookie:<name>"}),'". Ignored if an Extractor is explicitly set.']}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:['"header',":X-CSRF-Token",'"']})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"CookieName"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Name of the csrf cookie. This cookie will store the csrf key."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:'"csrf_"'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"CookieDomain"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Domain of the CSRF cookie."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"CookiePath"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Path of the CSRF cookie."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"CookieSecure"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"bool"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Indicates if the CSRF cookie is secure."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"CookieHTTPOnly"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"bool"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Indicates if the CSRF cookie is HTTP-only."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"CookieSameSite"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Value of SameSite cookie."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:'"Lax"'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"CookieSessionOnly"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"bool"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Decides whether the cookie should last for only the browser session. (cookie expires on close)."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"IdleTimeout"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"time.Duration"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"IdleTimeout is the duration of inactivity before the CSRF token will expire."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"30 * time.Minute"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"KeyGenerator"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func() string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"KeyGenerator creates a new CSRF token."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"utils.UUID"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ErrorHandler"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"fiber.ErrorHandler"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ErrorHandler is executed when an error is returned from fiber.Handler."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"DefaultErrorHandler"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Extractor"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"func(fiber.Ctx) (string, error)"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Extractor returns the CSRF token. If set, this will be used in place of an Extractor based on KeyLookup."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Extractor based on KeyLookup"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"SingleUseToken"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"bool"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"SingleUseToken indicates if the CSRF token be destroyed and a new one generated on each use. (See TokenLifecycle)"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Storage"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"fiber.Storage"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Store is used to store the state of the middleware."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nil"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Session"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"*session.Store"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Session is used to store the state of the middleware. Overrides Storage if set."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nil"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"TrustedOrigins"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"[]string"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:'TrustedOrigins is a list of trusted origins for unsafe requests. This supports subdomain matching, so you can use a value like "https://*.example.com" to allow any subdomain of example.com to submit requests.'}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"[]"})})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"default-config",children:"Default Config"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n    KeyLookup:         "header:" + HeaderName,\n    CookieName:        "csrf_",\n    CookieSameSite:    "Lax",\n    IdleTimeout:       30 * time.Minute,\n    KeyGenerator:      utils.UUIDv4,\n    ErrorHandler:      defaultErrorHandler,\n    Extractor:         FromHeader(HeaderName),\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"recommended-config-with-session",children:"Recommended Config (with session)"}),"\n",(0,r.jsxs)(t.p,{children:["It's recommended to use this middleware with ",(0,r.jsx)(t.a,{href:"https://docs.gofiber.io/api/middleware/session",children:"fiber/middleware/session"})," to store the CSRF token within the session. This is generally more secure than the default configuration."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n    KeyLookup:         "header:" + HeaderName,\n    CookieName:        "__Host-csrf_",\n    CookieSameSite:    "Lax",\n    CookieSecure:       true,\n    CookieSessionOnly: true,\n    CookieHTTPOnly:    true,\n    IdleTimeout:       30 * time.Minute,\n    KeyGenerator:      utils.UUIDv4,\n    ErrorHandler:      defaultErrorHandler,\n    Extractor:         FromHeader(HeaderName),\n    Session:           session.Store,\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"trusted-origins",children:"Trusted Origins"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"TrustedOrigins"})," option is used to specify a list of trusted origins for unsafe requests. This is useful when you want to allow requests from other origins. This supports matching subdomains at any level. This means you can use a value like ",(0,r.jsx)(t.code,{children:'"https://*.example.com"'})," to allow any subdomain of ",(0,r.jsx)(t.code,{children:"example.com"})," to submit requests, including multiple subdomain levels such as ",(0,r.jsx)(t.code,{children:'"https://sub.sub.example.com"'}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["To ensure that the provided ",(0,r.jsx)(t.code,{children:"TrustedOrigins"})," origins are correctly formatted, this middleware validates and normalizes them. It checks for valid schemes, i.e., HTTP or HTTPS, and it will automatically remove trailing slashes. If the provided origin is invalid, the middleware will panic."]}),"\n",(0,r.jsx)(t.h4,{id:"example-with-explicit-origins",children:"Example with Explicit Origins"}),"\n",(0,r.jsxs)(t.p,{children:["In the following example, the CSRF middleware will allow requests from ",(0,r.jsx)(t.code,{children:"trusted.example.com"}),", in addition to the current host."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'app.Use(csrf.New(csrf.Config{\n    TrustedOrigins: []string{"https://trusted.example.com"},\n}))\n'})}),"\n",(0,r.jsx)(t.h4,{id:"example-with-subdomain-matching",children:"Example with Subdomain Matching"}),"\n",(0,r.jsxs)(t.p,{children:["In the following example, the CSRF middleware will allow requests from any subdomain of ",(0,r.jsx)(t.code,{children:"example.com"}),", in addition to the current host."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'app.Use(csrf.New(csrf.Config{\n    TrustedOrigins: []string{"https://*.example.com"},\n}))\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["When using ",(0,r.jsx)(t.code,{children:"TrustedOrigins"})," with subdomain matching, make sure you control and trust all the subdomains, including all subdomain levels. If not, an attacker could create a subdomain under a trusted origin and use it to send harmful requests."]})}),"\n",(0,r.jsx)(t.h2,{id:"constants",children:"Constants"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'const (\n    HeaderName = "X-Csrf-Token"\n)\n'})}),"\n",(0,r.jsx)(t.h2,{id:"sentinel-errors",children:"Sentinel Errors"}),"\n",(0,r.jsxs)(t.p,{children:["The CSRF middleware utilizes a set of sentinel errors to handle various scenarios and communicate errors effectively. These can be used within a ",(0,r.jsx)(t.a,{href:"#custom-error-handler",children:"custom error handler"})," to handle errors returned by the middleware."]}),"\n",(0,r.jsx)(t.h3,{id:"errors-returned-to-error-handler",children:"Errors Returned to Error Handler"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ErrTokenNotFound"}),": Indicates that the CSRF token was not found."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ErrTokenInvalid"}),": Indicates that the CSRF token is invalid."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ErrRefererNotFound"}),": Indicates that the referer was not supplied."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ErrRefererInvalid"}),": Indicates that the referer is invalid."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ErrRefererNoMatch"}),": Indicates that the referer does not match host and is not a trusted origin."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ErrOriginInvalid"}),": Indicates that the origin is invalid."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ErrOriginNoMatch"}),": Indicates that the origin does not match host and is not a trusted origin."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"If you use the default error handler, the client will receive a 403 Forbidden error without any additional information."}),"\n",(0,r.jsx)(t.h2,{id:"custom-error-handler",children:"Custom Error Handler"}),"\n",(0,r.jsx)(t.p,{children:"You can use a custom error handler to handle errors returned by the CSRF middleware. The error handler is executed when an error is returned from the middleware. The error handler is passed the error returned from the middleware and the fiber.Ctx."}),"\n",(0,r.jsx)(t.p,{children:"Example, returning a JSON response for API requests and rendering an error page for other requests:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'app.Use(csrf.New(csrf.Config{\n    ErrorHandler: func(c fiber.Ctx, err error) error {\n        accepts := c.Accepts("html", "json")\n        path := c.Path()\n        if accepts == "json" || strings.HasPrefix(path, "/api/") {\n            return c.Status(fiber.StatusForbidden).JSON(fiber.Map{\n                "error": "Forbidden",\n            })\n        }\n        return c.Status(fiber.StatusForbidden).Render("error", fiber.Map{\n            "Title": "Forbidden",\n            "Status": fiber.StatusForbidden,\n        }, "layouts/main")\n    },\n}))\n'})}),"\n",(0,r.jsx)(t.h2,{id:"custom-storagedatabase",children:"Custom Storage/Database"}),"\n",(0,r.jsxs)(t.p,{children:["You can use any storage from our ",(0,r.jsx)(t.a,{href:"https://github.com/gofiber/storage/",children:"storage"})," package."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"storage := sqlite3.New() // From github.com/gofiber/storage/sqlite3\napp.Use(csrf.New(csrf.Config{\n    Storage: storage,\n}))\n"})}),"\n",(0,r.jsx)(t.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,r.jsx)(t.h3,{id:"token-generation",children:"Token Generation"}),"\n",(0,r.jsxs)(t.p,{children:["CSRF tokens are generated on 'safe' requests and when the existing token has expired or hasn't been set yet. If ",(0,r.jsx)(t.code,{children:"SingleUseToken"})," is ",(0,r.jsx)(t.code,{children:"true"}),", a new token is generated after each use.  Retrieve the CSRF token using ",(0,r.jsx)(t.code,{children:"csrf.TokenFromContext(c)"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,r.jsx)(t.p,{children:"This middleware is designed to protect against CSRF attacks but does not protect against other attack vectors, such as XSS. It should be used in combination with other security measures."}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsx)(t.p,{children:"Never use 'safe' methods to mutate data, for example, never use a GET request to modify a resource. This middleware will not protect against CSRF attacks on 'safe' methods."})}),"\n",(0,r.jsx)(t.h2,{id:"token-validation-patterns",children:"Token Validation Patterns"}),"\n",(0,r.jsx)(t.h3,{id:"double-submit-cookie-pattern-default",children:"Double Submit Cookie Pattern (Default)"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the middleware generates and stores tokens using the ",(0,r.jsx)(t.code,{children:"fiber.Storage"})," interface. These tokens are not linked to any particular user session, and they are validated using the Double Submit Cookie pattern.  The token is stored in a cookie, and then sent as a header on requests. The middleware compares the cookie value with the header value to validate the token. This is a secure pattern that does not require a user session."]}),"\n",(0,r.jsxs)(t.p,{children:["When the authorization status changes, the previously issued token MUST be deleted, and a new one generated. See ",(0,r.jsx)(t.a,{href:"#token-lifecycle",children:"Token Lifecycle"})," ",(0,r.jsx)(t.a,{href:"#deleting-tokens",children:"Deleting Tokens"})," for more information."]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["When using this pattern, it's important to set the ",(0,r.jsx)(t.code,{children:"CookieSameSite"})," option to ",(0,r.jsx)(t.code,{children:"Lax"})," or ",(0,r.jsx)(t.code,{children:"Strict"})," and ensure that the Extractor is not ",(0,r.jsx)(t.code,{children:"FromCookie"}),", and KeyLookup is not ",(0,r.jsx)(t.code,{children:"cookie:<name>"}),"."]})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["When using this pattern, this middleware uses our ",(0,r.jsx)(t.a,{href:"https://github.com/gofiber/storage",children:"Storage"})," package to support various databases through a single interface. The default configuration for Storage saves data to memory. See ",(0,r.jsx)(t.a,{href:"#custom-storagedatabase",children:"Custom Storage/Database"})," for customizing the storage."]})}),"\n",(0,r.jsx)(t.h3,{id:"synchronizer-token-pattern-with-session",children:"Synchronizer Token Pattern (with Session)"}),"\n",(0,r.jsx)(t.p,{children:"When using this middleware with a user session, the middleware can be configured to store the token within the session. This method is recommended when using a user session, as it is generally more secure than the Double Submit Cookie Pattern."}),"\n",(0,r.jsxs)(t.p,{children:["When using this pattern it's important to regenerate the session when the authorization status changes, this will also delete the token. See: ",(0,r.jsx)(t.a,{href:"#token-lifecycle",children:"Token Lifecycle"})," for more information."]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"Pre-sessions are required and will be created automatically if not present. Use a session value to indicate authentication instead of relying on the presence of a session."})}),"\n",(0,r.jsx)(t.h2,{id:"defense-in-depth",children:"Defense In Depth"}),"\n",(0,r.jsxs)(t.p,{children:["When using this middleware, it's recommended to serve your pages over HTTPS, set the ",(0,r.jsx)(t.code,{children:"CookieSecure"})," option to ",(0,r.jsx)(t.code,{children:"true"}),", and set the ",(0,r.jsx)(t.code,{children:"CookieSameSite"})," option to ",(0,r.jsx)(t.code,{children:"Lax"})," or ",(0,r.jsx)(t.code,{children:"Strict"}),". This ensures that the cookie is only sent over HTTPS and not on requests from external sites."]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.p,{children:["Cookie prefixes ",(0,r.jsx)(t.code,{children:"__Host-"})," and ",(0,r.jsx)(t.code,{children:"__Secure-"})," can be used to further secure the cookie. Note that these prefixes are not supported by all browsers and there are other limitations. See ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#cookie_prefixes",children:"MDN#Set-Cookie#cookie_prefixes"})," for more information."]}),(0,r.jsxs)(t.p,{children:["To use these prefixes, set the ",(0,r.jsx)(t.code,{children:"CookieName"})," option to ",(0,r.jsx)(t.code,{children:"__Host-csrf_"})," or ",(0,r.jsx)(t.code,{children:"__Secure-csrf_"}),"."]})]}),"\n",(0,r.jsx)(t.h2,{id:"referer-checking",children:"Referer Checking"}),"\n",(0,r.jsx)(t.p,{children:"For HTTPS requests, this middleware performs strict referer checking. Even if a subdomain can set or modify cookies on your domain, it can't force a user to post to your application, since that request won't come from your own exact domain."}),"\n",(0,r.jsxs)(t.admonition,{type:"caution",children:[(0,r.jsx)(t.p,{children:"When HTTPS requests are protected by CSRF, referer checking is always carried out."}),(0,r.jsx)(t.p,{children:"The Referer header is automatically included in requests by all modern browsers, including those made using the JS Fetch API. However, if you're making use of this middleware with a custom client, it's important to ensure that the client sends a valid Referer header."})]}),"\n",(0,r.jsx)(t.h2,{id:"token-lifecycle",children:"Token Lifecycle"}),"\n",(0,r.jsx)(t.p,{children:"Tokens are valid until they expire or until they are deleted. By default, tokens are valid for 30 minutes, and each subsequent request extends the expiration by the idle timeout. The token only expires if the user doesn't make a request for the duration of the idle timeout."}),"\n",(0,r.jsx)(t.h3,{id:"token-reuse",children:"Token Reuse"}),"\n",(0,r.jsxs)(t.p,{children:["By default, tokens may be used multiple times. If you want to delete the token after it has been used, you can set the ",(0,r.jsx)(t.code,{children:"SingleUseToken"})," option to ",(0,r.jsx)(t.code,{children:"true"}),". This will delete the token after it has been used, and a new token will be generated on the next request."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Using ",(0,r.jsx)(t.code,{children:"SingleUseToken"})," comes with usability trade-offs and is not enabled by default. For example, it can interfere with the user experience if the user has multiple tabs open or uses the back button."]})}),"\n",(0,r.jsx)(t.h3,{id:"deleting-tokens",children:"Deleting Tokens"}),"\n",(0,r.jsxs)(t.p,{children:["When the authorization status changes, the CSRF token MUST be deleted, and a new one generated. This can be done by calling ",(0,r.jsx)(t.code,{children:"handler.DeleteToken(c)"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"handler := csrf.HandlerFromContext(ctx)\nif handler != nil {\n    if err := handler.DeleteToken(app.AcquireCtx(ctx)); err != nil {\n        // handle error\n    }\n}\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["If you are using this middleware with the fiber session middleware, then you can simply call ",(0,r.jsx)(t.code,{children:"session.Destroy()"}),", ",(0,r.jsx)(t.code,{children:"session.Regenerate()"}),", or ",(0,r.jsx)(t.code,{children:"session.Reset()"})," to delete the session and the token stored therein."]})}),"\n",(0,r.jsx)(t.h2,{id:"breach",children:"BREACH"}),"\n",(0,r.jsxs)(t.p,{children:["It's important to note that the token is sent as a header on every request. If you include the token in a page that is vulnerable to ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/BREACH",children:"BREACH"}),", an attacker may be able to extract the token. To mitigate this, ensure your pages are served over HTTPS, disable HTTP compression, and implement rate limiting for requests."]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var i=n(67294);let r={},s=i.createContext(r);function o(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);