"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["80482"],{65908:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>a});var s=JSON.parse('{"id":"api/middleware/healthcheck","title":"Health Check","description":"Liveness and readiness probes middleware for Fiber that provides two endpoints for checking the liveness and readiness state of HTTP applications.","source":"@site/versioned_docs/version-v2.x/api/middleware/healthcheck.md","sourceDirName":"api/middleware","slug":"/api/middleware/healthcheck","permalink":"/api/middleware/healthcheck","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1732893234000,"frontMatter":{"id":"healthcheck"},"sidebar":"tutorialSidebar","previous":{"title":"FileSystem","permalink":"/api/middleware/filesystem"},"next":{"title":"Helmet","permalink":"/api/middleware/helmet"}}'),r=i("85893"),t=i("50065");let a={id:"healthcheck"},l="Health Check",o={},d=[{value:"Overview",id:"overview",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"health-check",children:"Health Check"})}),"\n",(0,r.jsxs)(n.p,{children:["Liveness and readiness probes middleware for ",(0,r.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," that provides two endpoints for checking the liveness and readiness state of HTTP applications."]}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Liveness Probe"}),": Checks if the server is up and running."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default Endpoint"}),": ",(0,r.jsx)(n.code,{children:"/livez"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Behavior"}),": By default returns ",(0,r.jsx)(n.code,{children:"true"})," immediately when the server is operational."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Readiness Probe"}),": Assesses if the application is ready to handle requests."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default Endpoint"}),": ",(0,r.jsx)(n.code,{children:"/readyz"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Behavior"}),": By default returns ",(0,r.jsx)(n.code,{children:"true"})," immediately when the server is operational."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"HTTP Status Codes"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"200 OK"}),": Returned when the checker function evaluates to ",(0,r.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"503 Service Unavailable"}),": Returned when the checker function evaluates to ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"signatures",children:"Signatures"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func New(config Config) fiber.Handler\n"})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.p,{children:["Import the middleware package that is part of the ",(0,r.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," web framework"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/healthcheck"\n)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["After you initiate your ",(0,r.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," app, you can use the following possibilities:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// Provide a minimal config\napp.Use(healthcheck.New())\n\n// Or extend your config for customization\napp.Use(healthcheck.New(healthcheck.Config{\n    LivenessProbe: func(c *fiber.Ctx) bool {\n        return true\n    },\n    LivenessEndpoint: "/live",\n    ReadinessProbe: func(c *fiber.Ctx) bool {\n        return serviceA.Ready() && serviceB.Ready() && ...\n    },\n    ReadinessEndpoint: "/ready",\n}))\n'})}),"\n",(0,r.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'type Config struct {\n	// Next defines a function to skip this middleware when returned true.\n	//\n	// Optional. Default: nil\n	Next func(c *fiber.Ctx) bool\n\n	// Function used for checking the liveness of the application. Returns true if the application\n	// is running and false if it is not. The liveness probe is typically used to indicate if \n	// the application is in a state where it can handle requests (e.g., the server is up and running).\n	//\n	// Optional. Default: func(c *fiber.Ctx) bool { return true }\n	LivenessProbe HealthChecker\n\n	// HTTP endpoint at which the liveness probe will be available.\n	//\n	// Optional. Default: "/livez"\n	LivenessEndpoint string\n\n	// Function used for checking the readiness of the application. Returns true if the application\n	// is ready to process requests and false otherwise. The readiness probe typically checks if all necessary\n	// services, databases, and other dependencies are available for the application to function correctly.\n	//\n	// Optional. Default: func(c *fiber.Ctx) bool { return true }\n	ReadinessProbe HealthChecker\n\n	// HTTP endpoint at which the readiness probe will be available.\n	// Optional. Default: "/readyz"\n	ReadinessEndpoint string\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"default-config",children:"Default Config"}),"\n",(0,r.jsx)(n.p,{children:"The default configuration used by this middleware is defined as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func defaultLivenessProbe(*fiber.Ctx) bool { return true }\n\nfunc defaultReadinessProbe(*fiber.Ctx) bool { return true }\n\nvar ConfigDefault = Config{\n	LivenessProbe:     defaultLivenessProbe,\n	ReadinessProbe:    defaultReadinessProbe,\n	LivenessEndpoint:  "/livez",\n	ReadinessEndpoint: "/readyz",\n}\n'})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return a}});var s=i(67294);let r={},t=s.createContext(r);function a(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);