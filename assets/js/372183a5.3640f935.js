"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[30927],{87126:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>a});var s=n(74848),r=n(28453);const l={id:"whats_new",title:"\ud83c\udd95 Whats New in v3",sidebar_position:2},d=void 0,t={id:"whats_new",title:"\ud83c\udd95 Whats New in v3",description:"Its a draft, not finished yet.",source:"@site/docs/core/whats_new.md",sourceDirName:".",slug:"/whats_new",permalink:"/next/whats_new",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/whats_new.md",tags:[],version:"current",lastUpdatedAt:1714133252e3,sidebarPosition:2,frontMatter:{id:"whats_new",title:"\ud83c\udd95 Whats New in v3",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc4b Welcome",permalink:"/next/"},next:{title:"\ud83d\udee0\ufe0f API",permalink:"/next/category/\ufe0f-api"}},o={},a=[{value:"\ud83c\udf89 Welcome to Fiber v3",id:"-welcome-to-fiber-v3",level:2},{value:"\ud83d\ude80 Highlights",id:"-highlights",level:2},{value:"Drop for old Go versions",id:"drop-for-old-go-versions",level:3},{value:"App changes",id:"app-changes",level:3},{value:"new methods",id:"new-methods",level:4},{value:"removed methods",id:"removed-methods",level:4},{value:"changed methods",id:"changed-methods",level:4},{value:"Context change",id:"context-change",level:3},{value:"interface",id:"interface",level:4},{value:"customizable",id:"customizable",level:4},{value:"new methods",id:"new-methods-1",level:4},{value:"removed methods",id:"removed-methods-1",level:4},{value:"changed methods",id:"changed-methods-1",level:4},{value:"Client package",id:"client-package",level:3},{value:"Binding",id:"binding",level:3},{value:"Generic functions",id:"generic-functions",level:3},{value:"Middleware refactoring",id:"middleware-refactoring",level:3},{value:"Updates to CORS Middleware",id:"updates-to-cors-middleware",level:3},{value:"New Struct Fields",id:"new-struct-fields",level:4},{value:"Updated Struct Fields",id:"updated-struct-fields",level:4},{value:"Session middleware",id:"session-middleware",level:4},{value:"Filesystem middleware",id:"filesystem-middleware",level:4},{value:"Monitor middleware",id:"monitor-middleware",level:3},{value:"Migration guide",id:"migration-guide",level:2},{value:"CORS Middleware",id:"cors-middleware",level:3}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.admonition,{type:"caution",children:(0,s.jsx)(i.p,{children:"Its a draft, not finished yet."})}),"\n",(0,s.jsx)(i.h2,{id:"-welcome-to-fiber-v3",children:"\ud83c\udf89 Welcome to Fiber v3"}),"\n",(0,s.jsx)(i.p,{children:"We are excited to announce the release of Fiber v3! \ud83d\ude80"}),"\n",(0,s.jsx)(i.p,{children:"Fiber v3 is a major release with a lot of new features, improvements, and breaking changes. We have worked hard to make Fiber even faster, more flexible, and easier to use."}),"\n",(0,s.jsx)(i.h2,{id:"-highlights",children:"\ud83d\ude80 Highlights"}),"\n",(0,s.jsx)(i.h3,{id:"drop-for-old-go-versions",children:"Drop for old Go versions"}),"\n",(0,s.jsx)(i.p,{children:"Fiber v3 drops support for Go versions below 1.21. We recommend upgrading to Go 1.21 or higher to use Fiber v3."}),"\n",(0,s.jsx)(i.h3,{id:"app-changes",children:"App changes"}),"\n",(0,s.jsx)(i.p,{children:"We have made several changes to the Fiber app, including:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Listen -> unified with config"}),"\n",(0,s.jsxs)(i.li,{children:["app.Config properties moved to listen config","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"DisableStartupMessage"}),"\n",(0,s.jsx)(i.li,{children:"EnablePrefork -> previously Prefork"}),"\n",(0,s.jsx)(i.li,{children:"EnablePrintRoutes"}),"\n",(0,s.jsx)(i.li,{children:"ListenerNetwork -> previously Network"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"new-methods",children:"new methods"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"RegisterCustomBinder"}),"\n",(0,s.jsx)(i.li,{children:"RegisterCustomConstraint"}),"\n",(0,s.jsx)(i.li,{children:"NewCtxFunc"}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"removed-methods",children:"removed methods"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Mount -> Use app.Use() instead"}),"\n",(0,s.jsx)(i.li,{children:"ListenTLS -> Use app.Listen() with tls.Config"}),"\n",(0,s.jsx)(i.li,{children:"ListenTLSWithCertificate -> Use app.Listen() with tls.Config"}),"\n",(0,s.jsx)(i.li,{children:"ListenMutualTLS -> Use app.Listen() with tls.Config"}),"\n",(0,s.jsx)(i.li,{children:"ListenMutualTLSWithCertificate -> Use app.Listen() with tls.Config"}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"changed-methods",children:"changed methods"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Routing methods -> Get(), Post(), Put(), Delete(), Patch(), Options(), Trace(), Connect() and All()"}),"\n",(0,s.jsx)(i.li,{children:"Use -> can be used for app mounting"}),"\n",(0,s.jsx)(i.li,{children:"Test -> timeout changed to 1 second"}),"\n",(0,s.jsx)(i.li,{children:"Listen -> has a config parameter"}),"\n",(0,s.jsx)(i.li,{children:"Listener -> has a config parameter"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"context-change",children:"Context change"}),"\n",(0,s.jsx)(i.h4,{id:"interface",children:"interface"}),"\n",(0,s.jsx)(i.h4,{id:"customizable",children:"customizable"}),"\n",(0,s.jsx)(i.h4,{id:"new-methods-1",children:"new methods"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"AutoFormat -> ExpressJs like"}),"\n",(0,s.jsx)(i.li,{children:"Host -> ExpressJs like"}),"\n",(0,s.jsx)(i.li,{children:"Port -> ExpressJs like"}),"\n",(0,s.jsx)(i.li,{children:"IsProxyTrusted"}),"\n",(0,s.jsx)(i.li,{children:"Reset"}),"\n",(0,s.jsx)(i.li,{children:"Schema -> ExpressJs like"}),"\n",(0,s.jsx)(i.li,{children:"SendStream -> ExpressJs like"}),"\n",(0,s.jsx)(i.li,{children:"SendString -> ExpressJs like"}),"\n",(0,s.jsx)(i.li,{children:"String -> ExpressJs like"}),"\n",(0,s.jsx)(i.li,{children:"ViewBind -> instead of Bind"}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"removed-methods-1",children:"removed methods"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"AllParams -> c.Bind().URL() ?"}),"\n",(0,s.jsx)(i.li,{children:"ParamsInt -> Params Generic"}),"\n",(0,s.jsx)(i.li,{children:"QueryBool -> Query Generic"}),"\n",(0,s.jsx)(i.li,{children:"QueryFloat -> Query Generic"}),"\n",(0,s.jsx)(i.li,{children:"QueryInt -> Query Generic"}),"\n",(0,s.jsx)(i.li,{children:"BodyParser -> c.Bind().Body()"}),"\n",(0,s.jsx)(i.li,{children:"CookieParser -> c.Bind().Cookie()"}),"\n",(0,s.jsx)(i.li,{children:"ParamsParser -> c.Bind().URL()"}),"\n",(0,s.jsx)(i.li,{children:"RedirectToRoute -> c.Redirect().Route()"}),"\n",(0,s.jsx)(i.li,{children:"RedirectBack -> c.Redirect().Back()"}),"\n",(0,s.jsx)(i.li,{children:"ReqHeaderParser -> c.Bind().Header()"}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"changed-methods-1",children:"changed methods"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Bind -> for Binding instead of View, us c.ViewBind()"}),"\n",(0,s.jsxs)(i.li,{children:["Format -> Param: body interface"," -> handlers ...ResFmt"]}),"\n",(0,s.jsx)(i.li,{children:"Redirect -> c.Redirect().To()"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"client-package",children:"Client package"}),"\n",(0,s.jsx)(i.h3,{id:"binding",children:"Binding"}),"\n",(0,s.jsx)(i.h3,{id:"generic-functions",children:"Generic functions"}),"\n",(0,s.jsx)(i.h3,{id:"middleware-refactoring",children:"Middleware refactoring"}),"\n",(0,s.jsx)(i.h3,{id:"updates-to-cors-middleware",children:"Updates to CORS Middleware"}),"\n",(0,s.jsx)(i.p,{children:"We've made some changes to the CORS middleware to improve its functionality and flexibility. Here's what's new:"}),"\n",(0,s.jsx)(i.h4,{id:"new-struct-fields",children:"New Struct Fields"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Config.AllowPrivateNetwork"}),": This new field is a boolean that allows you to control whether private networks are allowed. This is related to the ",(0,s.jsx)(i.a,{href:"https://wicg.github.io/private-network-access/",children:"Private Network Access (PNA)"})," specification from the Web Incubator Community Group (WICG). When set to ",(0,s.jsx)(i.code,{children:"true"}),", the CORS middleware will allow CORS preflight requests from private networks and respond with the ",(0,s.jsx)(i.code,{children:"Access-Control-Allow-Private-Network: true"})," header. This could be useful in development environments or specific use cases, but should be done with caution due to potential security risks."]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"updated-struct-fields",children:"Updated Struct Fields"}),"\n",(0,s.jsx)(i.p,{children:"We've updated several fields from a single string (containing comma-separated values) to slices, allowing for more explicit declaration of multiple values. Here are the updated fields:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Config.AllowOrigins"}),": Now accepts a slice of strings, each representing an allowed origin."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Config.AllowMethods"}),": Now accepts a slice of strings, each representing an allowed method."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Config.AllowHeaders"}),": Now accepts a slice of strings, each representing an allowed header."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Config.ExposeHeaders"}),": Now accepts a slice of strings, each representing an exposed header."]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"session-middleware",children:"Session middleware"}),"\n",(0,s.jsx)(i.h4,{id:"filesystem-middleware",children:"Filesystem middleware"}),"\n",(0,s.jsx)(i.h3,{id:"monitor-middleware",children:"Monitor middleware"}),"\n",(0,s.jsx)(i.p,{children:"Monitor middleware is now in Contrib package."}),"\n",(0,s.jsx)(i.h2,{id:"migration-guide",children:"Migration guide"}),"\n",(0,s.jsx)(i.h3,{id:"cors-middleware",children:"CORS Middleware"}),"\n",(0,s.jsxs)(i.p,{children:["The CORS middleware has been updated to use slices instead of strings for the ",(0,s.jsx)(i.code,{children:"AllowOrigins"}),", ",(0,s.jsx)(i.code,{children:"AllowMethods"}),", ",(0,s.jsx)(i.code,{children:"AllowHeaders"}),", and ",(0,s.jsx)(i.code,{children:"ExposeHeaders"})," fields. Here's how you can update your code:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-go",children:'// Before\napp.Use(cors.New(cors.Config{\n  AllowOrigins: "https://example.com,https://example2.com",\n  AllowMethods: strings.Join([]string{fiber.MethodGet, fiber.MethodPost}, ","),\n  AllowHeaders: "Content-Type",\n  ExposeHeaders: "Content-Length",\n}))\n\n// After\napp.Use(cors.New(cors.Config{\n  AllowOrigins: []string{"https://example.com", "https://example2.com"},\n  AllowMethods: []string{fiber.MethodGet, fiber.MethodPost},\n  AllowHeaders: []string{"Content-Type"},\n  ExposeHeaders: []string{"Content-Length"},\n}))\n'})}),"\n",(0,s.jsx)(i.p,{children:"..."})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>t});var s=n(96540);const r={},l=s.createContext(r);function d(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);