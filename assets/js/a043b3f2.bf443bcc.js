"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[58962],{48317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var l=n(74848),i=n(28453);const r={id:"logger"},s="Logger",o={id:"middleware/logger",title:"Logger",description:"Logger middleware for Fiber that logs HTTP request/response details.",source:"@site/docs/core/middleware/logger.md",sourceDirName:"middleware",slug:"/middleware/logger",permalink:"/next/middleware/logger",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/middleware/logger.md",tags:[],version:"current",lastUpdatedAt:1716274626e3,frontMatter:{id:"logger"},sidebar:"tutorialSidebar",previous:{title:"Limiter",permalink:"/next/middleware/limiter"},next:{title:"Monitor",permalink:"/next/middleware/monitor"}},d={},a=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Config",id:"config-1",level:3},{value:"Default Config",id:"default-config",level:2},{value:"Constants",id:"constants",level:2}];function g(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"logger",children:"Logger"}),"\n",(0,l.jsxs)(t.p,{children:["Logger middleware for ",(0,l.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that logs HTTP request/response details."]}),"\n",(0,l.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:"func New(config ...Config) fiber.Handler\n"})}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'import (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/logger"\n)\n'})}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsx)(t.p,{children:"The order of registration plays a role. Only all routes that are registered after this one will be logged.\nThe middleware should therefore be one of the first to be registered."})}),"\n",(0,l.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'// Initialize default config\napp.Use(logger.New())\n\n// Or extend your config for customization\n// Logging remote IP and Port\napp.Use(logger.New(logger.Config{\n    Format: "[${ip}]:${port} ${status} - ${method} ${path}\\n",\n}))\n\n// Logging Request ID\napp.Use(requestid.New())\napp.Use(logger.New(logger.Config{\n    // For more options, see the Config section\n    Format: "${pid} ${locals:requestid} ${status} - ${method} ${path}\u200b\\n",\n}))\n\n// Changing TimeZone & TimeFormat\napp.Use(logger.New(logger.Config{\n    Format:     "${pid} ${status} - ${method} ${path}\\n",\n    TimeFormat: "02-Jan-2006",\n    TimeZone:   "America/New_York",\n}))\n\n// Custom File Writer\nfile, err := os.OpenFile("./123.log", os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)\nif err != nil {\n    log.Fatalf("error opening file: %v", err)\n}\ndefer file.Close()\napp.Use(logger.New(logger.Config{\n    Output: file,\n}))\n\n// Add Custom Tags\napp.Use(logger.New(logger.Config{\n    CustomTags: map[string]logger.LogFunc{\n        "custom_tag": func(output logger.Buffer, c fiber.Ctx, data *logger.Data, extraParam string) (int, error) {\n            return output.WriteString("it is a custom tag")\n        },\n    },\n}))\n\n// Callback after log is written\napp.Use(logger.New(logger.Config{\n    TimeFormat: time.RFC3339Nano,\n    TimeZone:   "Asia/Shanghai",\n    Done: func(c fiber.Ctx, logString []byte) {\n        if c.Response().StatusCode() != fiber.StatusOK {\n            reporter.SendToSlack(logString) \n        }\n    },\n}))\n\n// Disable colors when outputting to default format\napp.Use(logger.New(logger.Config{\n    DisableColors: true,\n}))\n'})}),"\n",(0,l.jsxs)(t.admonition,{type:"tip",children:[(0,l.jsx)(t.mdxAdmonitionTitle,{}),(0,l.jsx)(t.p,{children:"Writing to os.File is goroutine-safe, but if you are using a custom Output that is not goroutine-safe, make sure to implement locking to properly serialize writes."})]}),"\n",(0,l.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,l.jsx)(t.h3,{id:"config-1",children:"Config"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Next"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"func(fiber.Ctx) bool"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Next defines a function to skip this middleware when returned true."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"nil"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Done"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"func(fiber.Ctx, []byte)"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Done is a function that is called after the log string for a request is written to Output, and pass the log string as parameter."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"nil"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"CustomTags"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"map[string]LogFunc"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"tagFunctions defines the custom tag action."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"map[string]LogFunc"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Format"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Format defines the logging tags."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"[${time}] ${ip} ${status} - ${latency} ${method} ${path} ${error}\\n"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"TimeFormat"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"TimeFormat defines the time format for log timestamps."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"15:04:05"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"TimeZone"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:'TimeZone can be specified, such as "UTC" and "America/New_York" and "Asia/Chongqing", etc'}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:'"Local"'})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"TimeInterval"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"time.Duration"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"TimeInterval is the delay before the timestamp is updated."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"500 * time.Millisecond"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Output"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"io.Writer"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Output is a writer where logs are written."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"os.Stdout"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"DisableColors"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"bool"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"DisableColors defines if the logs output should be colorized."}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"false"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"enableColors"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"bool"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Internal field for enabling colors in the log output. (This is not a user-configurable field)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"enableLatency"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"bool"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Internal field for enabling latency measurement in logs. (This is not a user-configurable field)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"timeZoneLocation"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"*time.Location"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Internal field for the time zone location. (This is not a user-configurable field)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"default-config",children:"Default Config"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'var ConfigDefault = Config{\n    Next:          nil,\n    Done:          nil,\n    Format:        "[${time}] ${ip} ${status} - ${latency} ${method} ${path} ${error}\\n",\n    TimeFormat:    "15:04:05",\n    TimeZone:      "Local",\n    TimeInterval:  500 * time.Millisecond,\n    Output:        os.Stdout,\n    DisableColors: false,\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"constants",children:"Constants"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'// Logger variables\nconst (\n    TagPid               = "pid"\n    TagTime              = "time"\n    TagReferer           = "referer"\n    TagProtocol          = "protocol"\n    TagPort              = "port"\n    TagIP                = "ip"\n    TagIPs               = "ips"\n    TagHost              = "host"\n    TagMethod            = "method"\n    TagPath              = "path"\n    TagURL               = "url"\n    TagUA                = "ua"\n    TagLatency           = "latency"\n    TagStatus            = "status"         // response status\n    TagResBody           = "resBody"        // response body\n    TagReqHeaders        = "reqHeaders"\n    TagQueryStringParams = "queryParams"    // request query parameters\n    TagBody              = "body"           // request body\n    TagBytesSent         = "bytesSent"\n    TagBytesReceived     = "bytesReceived"\n    TagRoute             = "route"\n    TagError             = "error"\n    // DEPRECATED: Use TagReqHeader instead\n    TagHeader            = "header:"        // request header\n    TagReqHeader         = "reqHeader:"     // request header\n    TagRespHeader        = "respHeader:"    // response header\n    TagQuery             = "query:"         // request query\n    TagForm              = "form:"          // request form\n    TagCookie            = "cookie:"        // request cookie\n    TagLocals            = "locals:"\n    // colors\n    TagBlack             = "black"\n    TagRed               = "red"\n    TagGreen             = "green"\n    TagYellow            = "yellow"\n    TagBlue              = "blue"\n    TagMagenta           = "magenta"\n    TagCyan              = "cyan"\n    TagWhite             = "white"\n    TagReset             = "reset"\n)\n'})})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(g,{...e})}):g(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var l=n(96540);const i={},r=l.createContext(i);function s(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);