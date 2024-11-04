"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[61622],{4240:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"middleware/timeout","title":"Timeout","description":"There exist two distinct implementations of timeout middleware Fiber.","source":"@site/docs/core/middleware/timeout.md","sourceDirName":"middleware","slug":"/middleware/timeout","permalink":"/next/middleware/timeout","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/middleware/timeout.md","tags":[],"version":"current","lastUpdatedAt":1730726092000,"frontMatter":{"id":"timeout"},"sidebar":"tutorialSidebar","previous":{"title":"Static","permalink":"/next/middleware/static"},"next":{"title":"\ud83c\udf0e Client","permalink":"/next/category/-client"}}');var i=t(74848),o=t(28453);const s={id:"timeout"},a="Timeout",c={},l=[{value:"New",id:"new",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"timeout",children:"Timeout"})}),"\n",(0,i.jsxs)(n.p,{children:["There exist two distinct implementations of timeout middleware ",(0,i.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"new",children:"New"}),"\n",(0,i.jsxs)(n.p,{children:["As a ",(0,i.jsx)(n.code,{children:"fiber.Handler"})," wrapper, it creates a context with ",(0,i.jsx)(n.code,{children:"context.WithTimeout"})," and pass it in ",(0,i.jsx)(n.code,{children:"UserContext"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If the context passed executions (eg. DB ops, Http calls) takes longer than the given duration to return, the timeout error is set and forwarded to the centralized ",(0,i.jsx)(n.code,{children:"ErrorHandler"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["It does not cancel long running executions. Underlying executions must handle timeout by using ",(0,i.jsx)(n.code,{children:"context.Context"})," parameter."]}),"\n",(0,i.jsx)(n.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func New(handler fiber.Handler, timeout time.Duration, timeoutErrors ...error) fiber.Handler\n"})}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/timeout"\n)\n'})}),"\n",(0,i.jsx)(n.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func main() {\n    app := fiber.New()\n    h := func(c fiber.Ctx) error {\n        sleepTime, _ := time.ParseDuration(c.Params("sleepTime") + "ms")\n        if err := sleepWithContext(c.UserContext(), sleepTime); err != nil {\n            return fmt.Errorf("%w: execution error", err)\n        }\n        return nil\n    }\n\n    app.Get("/foo/:sleepTime", timeout.New(h, 2*time.Second))\n    log.Fatal(app.Listen(":3000"))\n}\n\nfunc sleepWithContext(ctx context.Context, d time.Duration) error {\n    timer := time.NewTimer(d)\n\n    select {\n    case <-ctx.Done():\n        if !timer.Stop() {\n            <-timer.C\n        }\n        return context.DeadlineExceeded\n    case <-timer.C:\n    }\n    return nil\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Test http 200 with curl:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl --location -I --request GET 'http://localhost:3000/foo/1000' \n"})}),"\n",(0,i.jsx)(n.p,{children:"Test http 408 with curl:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl --location -I --request GET 'http://localhost:3000/foo/3000' \n"})}),"\n",(0,i.jsx)(n.p,{children:"Use with custom error:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'var ErrFooTimeOut = errors.New("foo context canceled")\n\nfunc main() {\n    app := fiber.New()\n    h := func(c fiber.Ctx) error {\n        sleepTime, _ := time.ParseDuration(c.Params("sleepTime") + "ms")\n        if err := sleepWithContextWithCustomError(c.UserContext(), sleepTime); err != nil {\n            return fmt.Errorf("%w: execution error", err)\n        }\n        return nil\n    }\n\n    app.Get("/foo/:sleepTime", timeout.New(h, 2*time.Second, ErrFooTimeOut))\n    log.Fatal(app.Listen(":3000"))\n}\n\nfunc sleepWithContextWithCustomError(ctx context.Context, d time.Duration) error {\n    timer := time.NewTimer(d)\n    select {\n    case <-ctx.Done():\n        if !timer.Stop() {\n            <-timer.C\n        }\n        return ErrFooTimeOut\n    case <-timer.C:\n    }\n    return nil\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample usage with a DB call:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func main() {\n    app := fiber.New()\n    db, _ := gorm.Open(postgres.Open("postgres://localhost/foodb"), &gorm.Config{})\n\n    handler := func(ctx fiber.Ctx) error {\n        tran := db.WithContext(ctx.UserContext()).Begin()\n        \n        if tran = tran.Exec("SELECT pg_sleep(50)"); tran.Error != nil {\n            return tran.Error\n        }\n        \n        if tran = tran.Commit(); tran.Error != nil {\n            return tran.Error\n        }\n\n        return nil\n    }\n\n    app.Get("/foo", timeout.New(handler, 10*time.Second))\n    log.Fatal(app.Listen(":3000"))\n}\n'})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(96540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);