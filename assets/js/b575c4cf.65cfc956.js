"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[30826],{10929:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var n=s(74848),r=s(28453);const t={id:"cors"},l="CORS",o={id:"middleware/cors",title:"CORS",description:"CORS (Cross-Origin Resource Sharing) is a middleware for Fiber that allows servers to specify who can access its resources and how. It's not a security feature, but a way to relax the security model of web browsers for cross-origin requests. You can learn more about CORS on Mozilla Developer Network.",source:"@site/docs/core/middleware/cors.md",sourceDirName:"middleware",slug:"/middleware/cors",permalink:"/next/middleware/cors",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/middleware/cors.md",tags:[],version:"current",lastUpdatedAt:1724653574e3,frontMatter:{id:"cors"},sidebar:"tutorialSidebar",previous:{title:"Compress",permalink:"/next/middleware/compress"},next:{title:"CSRF",permalink:"/next/middleware/csrf"}},d={},c=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Custom configuration (specific origins, headers, etc.)",id:"custom-configuration-specific-origins-headers-etc",level:3},{value:"Dynamic origin validation",id:"dynamic-origin-validation",level:3},{value:"Prohibited usage",id:"prohibited-usage",level:3},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Subdomain Matching",id:"subdomain-matching",level:2},{value:"Example",id:"example",level:3},{value:"How It Works",id:"how-it-works",level:2},{value:"Security Considerations",id:"security-considerations",level:2},{value:"Secure Configurations",id:"secure-configurations",level:3},{value:"Common Pitfalls",id:"common-pitfalls",level:3}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"cors",children:"CORS"}),"\n",(0,n.jsxs)(i.p,{children:["CORS (Cross-Origin Resource Sharing) is a middleware for ",(0,n.jsx)(i.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that allows servers to specify who can access its resources and how. It's not a security feature, but a way to relax the security model of web browsers for cross-origin requests. You can learn more about CORS on ",(0,n.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",children:"Mozilla Developer Network"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"This middleware works by adding CORS headers to responses from your Fiber application. These headers specify which origins, methods, and headers are allowed for cross-origin requests. It also handles preflight requests, which are a CORS mechanism to check if the actual request is safe to send."}),"\n",(0,n.jsxs)(i.p,{children:["The middleware uses the ",(0,n.jsx)(i.code,{children:"AllowOrigins"})," option to control which origins can make cross-origin requests. It supports single origin, multiple origins, subdomain matching, and wildcard origin. It also allows programmatic origin validation with the ",(0,n.jsx)(i.code,{children:"AllowOriginsFunc"})," option."]}),"\n",(0,n.jsxs)(i.p,{children:["To ensure that the provided ",(0,n.jsx)(i.code,{children:"AllowOrigins"})," origins are correctly formatted, this middleware validates and normalizes them. It checks for valid schemes, i.e., HTTP or HTTPS, and it will automatically remove trailing slashes. If the provided origin is invalid, the middleware will panic."]}),"\n",(0,n.jsxs)(i.p,{children:["When configuring CORS, it's important to avoid ",(0,n.jsx)(i.a,{href:"#common-pitfalls",children:"common pitfalls"})," like using a wildcard origin with credentials, being overly permissive with origins, and inadequate validation with ",(0,n.jsx)(i.code,{children:"AllowOriginsFunc"}),". Misconfiguration can expose your application to various security risks."]}),"\n",(0,n.jsx)(i.h2,{id:"signatures",children:"Signatures"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\n"})}),"\n",(0,n.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(i.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-go",children:'import (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/cors"\n)\n'})}),"\n",(0,n.jsx)(i.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,n.jsx)(i.h3,{id:"basic-usage",children:"Basic usage"}),"\n",(0,n.jsxs)(i.p,{children:["To use the default configuration, simply use ",(0,n.jsx)(i.code,{children:"cors.New()"}),". This will allow wildcard origins '*', all methods, no credentials, and no headers or exposed headers."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-go",children:"app.Use(cors.New())\n"})}),"\n",(0,n.jsx)(i.h3,{id:"custom-configuration-specific-origins-headers-etc",children:"Custom configuration (specific origins, headers, etc.)"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-go",children:'// Initialize default config\napp.Use(cors.New())\n\n// Or extend your config for customization\napp.Use(cors.New(cors.Config{\n    AllowOrigins: "https://gofiber.io, https://gofiber.net",\n    AllowHeaders: "Origin, Content-Type, Accept",\n}))\n'})}),"\n",(0,n.jsx)(i.h3,{id:"dynamic-origin-validation",children:"Dynamic origin validation"}),"\n",(0,n.jsxs)(i.p,{children:["You can use ",(0,n.jsx)(i.code,{children:"AllowOriginsFunc"})," to programmatically determine whether to allow a request based on its origin. This is useful when you need to validate origins against a database or other dynamic sources. The function should return ",(0,n.jsx)(i.code,{children:"true"})," if the origin is allowed, and ",(0,n.jsx)(i.code,{children:"false"})," otherwise."]}),"\n",(0,n.jsxs)(i.p,{children:["Be sure to review the ",(0,n.jsx)(i.a,{href:"#security-considerations",children:"security considerations"})," when using ",(0,n.jsx)(i.code,{children:"AllowOriginsFunc"}),"."]}),"\n",(0,n.jsxs)(i.admonition,{type:"caution",children:[(0,n.jsxs)(i.p,{children:["Never allow ",(0,n.jsx)(i.code,{children:"AllowOriginsFunc"})," to return ",(0,n.jsx)(i.code,{children:"true"})," for all origins. This is particularly crucial when ",(0,n.jsx)(i.code,{children:"AllowCredentials"})," is set to ",(0,n.jsx)(i.code,{children:"true"}),". Doing so can bypass the restriction of using a wildcard origin with credentials, exposing your application to serious security threats."]}),(0,n.jsxs)(i.p,{children:["If you need to allow wildcard origins, use ",(0,n.jsx)(i.code,{children:"AllowOrigins"})," with a wildcard ",(0,n.jsx)(i.code,{children:'"*"'})," instead of ",(0,n.jsx)(i.code,{children:"AllowOriginsFunc"}),"."]})]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-go",children:'// dbCheckOrigin checks if the origin is in the list of allowed origins in the database.\nfunc dbCheckOrigin(db *sql.DB, origin string) bool {\n    // Placeholder query - adjust according to your database schema and query needs\n    query := "SELECT COUNT(*) FROM allowed_origins WHERE origin = $1"\n    \n    var count int\n    err := db.QueryRow(query, origin).Scan(&count)\n    if err != nil {\n      // Handle error (e.g., log it); for simplicity, we return false here\n      return false\n    }\n    \n    return count > 0\n}\n\n// ...\n\napp.Use(cors.New(cors.Config{\n    AllowOriginsFunc: func(origin string) bool {\n      return dbCheckOrigin(db, origin)\n    },\n}))\n'})}),"\n",(0,n.jsx)(i.h3,{id:"prohibited-usage",children:"Prohibited usage"}),"\n",(0,n.jsxs)(i.p,{children:["The following example is prohibited because it can expose your application to security risks. It sets ",(0,n.jsx)(i.code,{children:"AllowOrigins"})," to ",(0,n.jsx)(i.code,{children:'"*"'})," (a wildcard) and ",(0,n.jsx)(i.code,{children:"AllowCredentials"})," to ",(0,n.jsx)(i.code,{children:"true"}),"."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-go",children:'app.Use(cors.New(cors.Config{\n    AllowOrigins: []string{"*"},\n    AllowCredentials: true,\n}))\n'})}),"\n",(0,n.jsx)(i.p,{children:"This will result in the following panic:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-text",children:"panic: [CORS] Configuration error: When 'AllowCredentials' is set to true, 'AllowOrigins' cannot contain a wildcard origin '*'. Please specify allowed origins explicitly or adjust 'AllowCredentials' setting.\n"})}),"\n",(0,n.jsx)(i.h2,{id:"config",children:"Config"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Property"}),(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"AllowCredentials"}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"bool"})}),(0,n.jsxs)(i.td,{style:{textAlign:"left"},children:["AllowCredentials indicates whether or not the response to the request can be exposed when the credentials flag is true. When used as part of a response to a preflight request, this indicates whether or not the actual request can be made using credentials. Note: If true, AllowOrigins cannot be set to a wildcard (",(0,n.jsx)(i.code,{children:'"*"'}),") to prevent security vulnerabilities."]}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"false"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"AllowHeaders"}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"[]string"})}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"AllowHeaders defines a list of request headers that can be used when making the actual request. This is in response to a preflight request."}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"[]"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"AllowMethods"}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"[]string"})}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"AllowMethods defines a list of methods allowed when accessing the resource. This is used in response to a preflight request."}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:'"GET, POST, HEAD, PUT, DELETE, PATCH"'})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"AllowOrigins"}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"[]string"})}),(0,n.jsxs)(i.td,{style:{textAlign:"left"},children:['AllowOrigins defines a list of origins that may access the resource. This supports subdomain matching, so you can use a value like "https://*.example.com" to allow any subdomain of example.com to submit requests. If the special wildcard ',(0,n.jsx)(i.code,{children:'"*"'})," is present in the list, all origins will be allowed."]}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:'["*"]'})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"AllowOriginsFunc"}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"func(origin string) bool"})}),(0,n.jsxs)(i.td,{style:{textAlign:"left"},children:[(0,n.jsx)(i.code,{children:"AllowOriginsFunc"})," is a function that dynamically determines whether to allow a request based on its origin. If this function returns ",(0,n.jsx)(i.code,{children:"true"}),", the 'Access-Control-Allow-Origin' response header will be set to the request's 'origin' header. This function is only used if the request's origin doesn't match any origin in ",(0,n.jsx)(i.code,{children:"AllowOrigins"}),"."]}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"nil"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"AllowPrivateNetwork"}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"bool"})}),(0,n.jsxs)(i.td,{style:{textAlign:"left"},children:["Indicates whether the ",(0,n.jsx)(i.code,{children:"Access-Control-Allow-Private-Network"})," response header should be set to ",(0,n.jsx)(i.code,{children:"true"}),", allowing requests from private networks. This aligns with modern security practices for web applications interacting with private networks."]}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"false"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"ExposeHeaders"}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"string"})}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"ExposeHeaders defines whitelist headers that clients are allowed to access."}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"[]"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"MaxAge"}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"int"})}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"MaxAge indicates how long (in seconds) the results of a preflight request can be cached. If you pass MaxAge 0, the Access-Control-Max-Age header will not be added and the browser will use 5 seconds by default. To disable caching completely, pass MaxAge value negative. It will set the Access-Control-Max-Age header to 0."}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"0"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"Next"}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"func(fiber.Ctx) bool"})}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"nil"})})]})]})]}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["If AllowOrigins is a zero value ",(0,n.jsx)(i.code,{children:"[]string{}"}),', and AllowOriginsFunc is provided, the middleware will not default to allowing all origins with the wildcard value "*". Instead, it will rely on the AllowOriginsFunc to dynamically determine whether to allow a request based on its origin. This provides more flexibility and control over which origins are allowed.']})}),"\n",(0,n.jsx)(i.h2,{id:"default-config",children:"Default Config"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-go",children:'var ConfigDefault = Config{\n    Next:             nil,\n    AllowOriginsFunc: nil,\n    AllowOrigins:     []string{"*"},\n    AllowMethods: []string{\n        fiber.MethodGet,\n        fiber.MethodPost,\n        fiber.MethodHead,\n        fiber.MethodPut,\n        fiber.MethodDelete,\n        fiber.MethodPatch,\n    },\n    AllowHeaders:        []string{},\n    AllowCredentials:    false,\n    ExposeHeaders:       []string{},\n    MaxAge:              0,\n    AllowPrivateNetwork: false,\n}\n'})}),"\n",(0,n.jsx)(i.h2,{id:"subdomain-matching",children:"Subdomain Matching"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"AllowOrigins"})," configuration supports matching subdomains at any level. This means you can use a value like ",(0,n.jsx)(i.code,{children:'"https://*.example.com"'})," to allow any subdomain of ",(0,n.jsx)(i.code,{children:"example.com"})," to submit requests, including multiple subdomain levels such as ",(0,n.jsx)(i.code,{children:'"https://sub.sub.example.com"'}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(i.p,{children:["If you want to allow CORS requests from any subdomain of ",(0,n.jsx)(i.code,{children:"example.com"}),", including nested subdomains, you can configure the ",(0,n.jsx)(i.code,{children:"AllowOrigins"})," like so:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-go",children:'app.Use(cors.New(cors.Config{\n    AllowOrigins: "https://*.example.com",\n}))\n'})}),"\n",(0,n.jsx)(i.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,n.jsx)(i.p,{children:"The CORS middleware works by adding the necessary CORS headers to responses from your Fiber application. These headers tell browsers what origins, methods, and headers are allowed for cross-origin requests."}),"\n",(0,n.jsx)(i.p,{children:"When a request comes in, the middleware first checks if it's a preflight request, which is a CORS mechanism to determine whether the actual request is safe to send. Preflight requests are HTTP OPTIONS requests with specific CORS headers. If it's a preflight request, the middleware responds with the appropriate CORS headers and ends the request."}),"\n",(0,n.jsx)(i.p,{children:"If it's not a preflight request, the middleware adds the CORS headers to the response and passes the request to the next handler. The actual CORS headers added depend on the configuration of the middleware."}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"AllowOrigins"})," option controls which origins can make cross-origin requests. The middleware handles different ",(0,n.jsx)(i.code,{children:"AllowOrigins"})," configurations as follows:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Single origin:"})," If ",(0,n.jsx)(i.code,{children:"AllowOrigins"})," is set to a single origin like ",(0,n.jsx)(i.code,{children:'"http://www.example.com"'}),", and that origin matches the origin of the incoming request, the middleware adds the header ",(0,n.jsx)(i.code,{children:"Access-Control-Allow-Origin: http://www.example.com"})," to the response."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Multiple origins:"})," If ",(0,n.jsx)(i.code,{children:"AllowOrigins"})," is set to multiple origins like ",(0,n.jsx)(i.code,{children:'"https://example.com, https://www.example.com"'}),", the middleware picks the origin that matches the origin of the incoming request."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Subdomain matching:"})," If ",(0,n.jsx)(i.code,{children:"AllowOrigins"})," includes ",(0,n.jsx)(i.code,{children:'"https://*.example.com"'}),", a subdomain like ",(0,n.jsx)(i.code,{children:"https://sub.example.com"})," will be matched and ",(0,n.jsx)(i.code,{children:'"https://sub.example.com"'})," will be the header. This will also match ",(0,n.jsx)(i.code,{children:"https://sub.sub.example.com"})," and so on, but not ",(0,n.jsx)(i.code,{children:"https://example.com"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Wildcard origin:"})," If ",(0,n.jsx)(i.code,{children:"AllowOrigins"})," is set to ",(0,n.jsx)(i.code,{children:'"*"'}),", the middleware uses that and adds the header ",(0,n.jsx)(i.code,{children:"Access-Control-Allow-Origin: *"})," to the response."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["In all cases above, except the ",(0,n.jsx)(i.strong,{children:"Wildcard origin"}),", the middleware will either add the ",(0,n.jsx)(i.code,{children:"Access-Control-Allow-Origin"})," header to the response matching the origin of the incoming request, or it will not add the header at all if the origin is not allowed."]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Programmatic origin validation:"}),": The middleware also handles the ",(0,n.jsx)(i.code,{children:"AllowOriginsFunc"})," option, which allows you to programmatically determine if an origin is allowed. If ",(0,n.jsx)(i.code,{children:"AllowOriginsFunc"})," returns ",(0,n.jsx)(i.code,{children:"true"})," for an origin, the middleware sets the ",(0,n.jsx)(i.code,{children:"Access-Control-Allow-Origin"})," header to that origin."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"AllowMethods"})," option controls which HTTP methods are allowed. For example, if ",(0,n.jsx)(i.code,{children:"AllowMethods"})," is set to ",(0,n.jsx)(i.code,{children:'"GET, POST"'}),", the middleware adds the header ",(0,n.jsx)(i.code,{children:"Access-Control-Allow-Methods: GET, POST"})," to the response."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"AllowHeaders"})," option specifies which headers are allowed in the actual request. The middleware sets the Access-Control-Allow-Headers response header to the value of ",(0,n.jsx)(i.code,{children:"AllowHeaders"}),". This informs the client which headers it can use in the actual request."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"AllowCredentials"})," option indicates whether the response to the request can be exposed when the credentials flag is true. If ",(0,n.jsx)(i.code,{children:"AllowCredentials"})," is set to ",(0,n.jsx)(i.code,{children:"true"}),", the middleware adds the header ",(0,n.jsx)(i.code,{children:"Access-Control-Allow-Credentials: true"})," to the response. To prevent security vulnerabilities, ",(0,n.jsx)(i.code,{children:"AllowCredentials"})," cannot be set to ",(0,n.jsx)(i.code,{children:"true"})," if ",(0,n.jsx)(i.code,{children:"AllowOrigins"})," is set to a wildcard (",(0,n.jsx)(i.code,{children:"*"}),")."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"ExposeHeaders"})," option defines a whitelist of headers that clients are allowed to access. If ",(0,n.jsx)(i.code,{children:"ExposeHeaders"})," is set to ",(0,n.jsx)(i.code,{children:'"X-Custom-Header"'}),", the middleware adds the header ",(0,n.jsx)(i.code,{children:"Access-Control-Expose-Headers: X-Custom-Header"})," to the response."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"MaxAge"})," option indicates how long the results of a preflight request can be cached. If ",(0,n.jsx)(i.code,{children:"MaxAge"})," is set to ",(0,n.jsx)(i.code,{children:"3600"}),", the middleware adds the header ",(0,n.jsx)(i.code,{children:"Access-Control-Max-Age: 3600"})," to the response."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"Vary"})," header is used in this middleware to inform the client that the server's response to a request. For or both preflight and actual requests, the Vary header is set to ",(0,n.jsx)(i.code,{children:"Access-Control-Request-Method"})," and ",(0,n.jsx)(i.code,{children:"Access-Control-Request-Headers"}),". For preflight requests, the Vary header is also set to ",(0,n.jsx)(i.code,{children:"Origin"}),". The ",(0,n.jsx)(i.code,{children:"Vary"})," header is important for caching. It helps caches (like a web browser's cache or a CDN) determine when a cached response can be used in response to a future request, and when the server needs to be queried for a new response."]}),"\n",(0,n.jsx)(i.h2,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,n.jsx)(i.p,{children:"When configuring CORS, misconfiguration can potentially expose your application to various security risks. Here are some secure configurations and common pitfalls to avoid:"}),"\n",(0,n.jsx)(i.h3,{id:"secure-configurations",children:"Secure Configurations"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Specify Allowed Origins"}),": Instead of using a wildcard (",(0,n.jsx)(i.code,{children:'"*"'}),"), specify the exact domains allowed to make requests. For example, ",(0,n.jsx)(i.code,{children:'AllowOrigins: "https://www.example.com, https://api.example.com"'})," ensures only these domains can make cross-origin requests to your application."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Use Credentials Carefully"}),": If your application needs to support credentials in cross-origin requests, ensure ",(0,n.jsx)(i.code,{children:"AllowCredentials"})," is set to ",(0,n.jsx)(i.code,{children:"true"})," and specify exact origins in ",(0,n.jsx)(i.code,{children:"AllowOrigins"}),". Do not use a wildcard origin in this case."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Limit Exposed Headers"}),": Only whitelist headers that are necessary for the client-side application by setting ",(0,n.jsx)(i.code,{children:"ExposeHeaders"})," appropriately. This minimizes the risk of exposing sensitive information."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"common-pitfalls",children:"Common Pitfalls"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Wildcard Origin with Credentials"}),": Setting ",(0,n.jsx)(i.code,{children:"AllowOrigins"})," to ",(0,n.jsx)(i.code,{children:'"*"'})," (a wildcard) and ",(0,n.jsx)(i.code,{children:"AllowCredentials"})," to ",(0,n.jsx)(i.code,{children:"true"})," is a common misconfiguration. This combination is prohibited because it can expose your application to security risks."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Overly Permissive Origins"}),": Specifying too many origins or using overly broad patterns (e.g., ",(0,n.jsx)(i.code,{children:"https://*.example.com"}),") can inadvertently allow malicious sites to interact with your application. Be as specific as possible with allowed origins."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsxs)(i.strong,{children:["Inadequate ",(0,n.jsx)(i.code,{children:"AllowOriginsFunc"})," Validation"]}),": When using ",(0,n.jsx)(i.code,{children:"AllowOriginsFunc"})," for dynamic origin validation, ensure the function includes robust checks to prevent unauthorized origins from being accepted. Overly permissive validation can lead to security vulnerabilities. Never allow ",(0,n.jsx)(i.code,{children:"AllowOriginsFunc"})," to return ",(0,n.jsx)(i.code,{children:"true"})," for all origins. This is particularly crucial when ",(0,n.jsx)(i.code,{children:"AllowCredentials"})," is set to ",(0,n.jsx)(i.code,{children:"true"}),". Doing so can bypass the restriction of using a wildcard origin with credentials, exposing your application to serious security threats. If you need to allow wildcard origins, use ",(0,n.jsx)(i.code,{children:"AllowOrigins"})," with a wildcard ",(0,n.jsx)(i.code,{children:'"*"'})," instead of ",(0,n.jsx)(i.code,{children:"AllowOriginsFunc"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Remember, the key to secure CORS configuration is specificity and caution. By carefully selecting which origins, methods, and headers are allowed, you can help protect your application from cross-origin attacks."})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>l,x:()=>o});var n=s(96540);const r={},t=n.createContext(r);function l(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);