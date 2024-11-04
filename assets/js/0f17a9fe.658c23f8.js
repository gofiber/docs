"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[50012],{57656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"api/middleware/timeout","title":"Timeout","description":"There exist two distinct implementations of timeout middleware Fiber.","source":"@site/versioned_docs/version-v2.x/api/middleware/timeout.md","sourceDirName":"api/middleware","slug":"/api/middleware/timeout","permalink":"/api/middleware/timeout","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1730726092000,"frontMatter":{"id":"timeout"},"sidebar":"tutorialSidebar","previous":{"title":"Skip","permalink":"/api/middleware/skip"},"next":{"title":"Guide","permalink":"/category/guide"}}');var i=n(74848),o=n(28453);const s={id:"timeout"},a="Timeout",c={},l=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"timeout",children:"Timeout"})}),"\n",(0,i.jsxs)(t.p,{children:["There exist two distinct implementations of timeout middleware ",(0,i.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"New"})}),"\n",(0,i.jsxs)(t.p,{children:["Wraps a ",(0,i.jsx)(t.code,{children:"fiber.Handler"})," with a timeout. If the handler takes longer than the given duration to return, the timeout error is set and forwarded to the centralized ",(0,i.jsx)(t.a,{href:"https://docs.gofiber.io/error-handling",children:"ErrorHandler"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"This has been deprecated since it raises race conditions."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"NewWithContext"})}),"\n",(0,i.jsxs)(t.p,{children:["As a ",(0,i.jsx)(t.code,{children:"fiber.Handler"})," wrapper, it creates a context with ",(0,i.jsx)(t.code,{children:"context.WithTimeout"})," and pass it in ",(0,i.jsx)(t.code,{children:"UserContext"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If the context passed executions (eg. DB ops, Http calls) takes longer than the given duration to return, the timeout error is set and forwarded to the centralized ",(0,i.jsx)(t.code,{children:"ErrorHandler"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["It does not cancel long running executions. Underlying executions must handle timeout by using ",(0,i.jsx)(t.code,{children:"context.Context"})," parameter."]}),"\n",(0,i.jsx)(t.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func New(handler fiber.Handler, timeout time.Duration, timeoutErrors ...error) fiber.Handler\nfunc NewWithContext(handler fiber.Handler, timeout time.Duration, timeoutErrors ...error) fiber.Handler\n"})}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/timeout"\n)\n'})}),"\n",(0,i.jsx)(t.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'func main() {\n\tapp := fiber.New()\n\n\th := func(c *fiber.Ctx) error {\n\t\tsleepTime, _ := time.ParseDuration(c.Params("sleepTime") + "ms")\n\t\tif err := sleepWithContext(c.UserContext(), sleepTime); err != nil {\n\t\t\treturn fmt.Errorf("%w: execution error", err)\n\t\t}\n\t\treturn nil\n\t}\n\n\tapp.Get("/foo/:sleepTime", timeout.New(h, 2*time.Second))\n\tlog.Fatal(app.Listen(":3000"))\n}\n\nfunc sleepWithContext(ctx context.Context, d time.Duration) error {\n\ttimer := time.NewTimer(d)\n\n\tselect {\n\tcase <-ctx.Done():\n\t\tif !timer.Stop() {\n\t\t\t<-timer.C\n\t\t}\n\t\treturn context.DeadlineExceeded\n\tcase <-timer.C:\n\t}\n\treturn nil\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Test http 200 with curl:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"curl --location -I --request GET 'http://localhost:3000/foo/1000' \n"})}),"\n",(0,i.jsx)(t.p,{children:"Test http 408 with curl:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"curl --location -I --request GET 'http://localhost:3000/foo/3000' \n"})}),"\n",(0,i.jsx)(t.p,{children:"Use with custom error:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'var ErrFooTimeOut = errors.New("foo context canceled")\n\nfunc main() {\n\tapp := fiber.New()\n\th := func(c *fiber.Ctx) error {\n\t\tsleepTime, _ := time.ParseDuration(c.Params("sleepTime") + "ms")\n\t\tif err := sleepWithContextWithCustomError(c.UserContext(), sleepTime); err != nil {\n\t\t\treturn fmt.Errorf("%w: execution error", err)\n\t\t}\n\t\treturn nil\n\t}\n\n\tapp.Get("/foo/:sleepTime", timeout.NewWithContext(h, 2*time.Second, ErrFooTimeOut))\n\tlog.Fatal(app.Listen(":3000"))\n}\n\nfunc sleepWithContextWithCustomError(ctx context.Context, d time.Duration) error {\n\ttimer := time.NewTimer(d)\n\tselect {\n\tcase <-ctx.Done():\n\t\tif !timer.Stop() {\n\t\t\t<-timer.C\n\t\t}\n\t\treturn ErrFooTimeOut\n\tcase <-timer.C:\n\t}\n\treturn nil\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample usage with a DB call:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'func main() {\n\tapp := fiber.New()\n\tdb, _ := gorm.Open(postgres.Open("postgres://localhost/foodb"), &gorm.Config{})\n\n\thandler := func(ctx *fiber.Ctx) error {\n\t\ttran := db.WithContext(ctx.UserContext()).Begin()\n\t\t\n\t\tif tran = tran.Exec("SELECT pg_sleep(50)"); tran.Error != nil {\n\t\t\treturn tran.Error\n\t\t}\n\t\t\n\t\tif tran = tran.Commit(); tran.Error != nil {\n\t\t\treturn tran.Error\n\t\t}\n\n\t\treturn nil\n\t}\n\n\tapp.Get("/foo", timeout.NewWithContext(handler, 10*time.Second))\n\tlog.Fatal(app.Listen(":3000"))\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);