"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["64246"],{59093:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>s,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>a});var r=JSON.parse('{"id":"middleware/timeout","title":"Timeout","description":"There exist two distinct implementations of timeout middleware Fiber.","source":"@site/docs/core/middleware/timeout.md","sourceDirName":"middleware","slug":"/middleware/timeout","permalink":"/next/middleware/timeout","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/middleware/timeout.md","tags":[],"version":"current","lastUpdatedAt":1736253587000,"frontMatter":{"id":"timeout"},"sidebar":"left_sidebar","previous":{"title":"Static","permalink":"/next/middleware/static"},"next":{"title":"\uD83C\uDF0E Client","permalink":"/next/category/-client"}}'),i=t("85893"),o=t("50065");let a={id:"timeout"},s="Timeout",l={},c=[{value:"New",id:"new",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"timeout",children:"Timeout"})}),"\n",(0,i.jsxs)(n.p,{children:["There exist two distinct implementations of timeout middleware ",(0,i.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"new",children:"New"}),"\n",(0,i.jsxs)(n.p,{children:["As a ",(0,i.jsx)(n.code,{children:"fiber.Handler"})," wrapper, it creates a context with ",(0,i.jsx)(n.code,{children:"context.WithTimeout"})," which is then used with ",(0,i.jsx)(n.code,{children:"c.Context()"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If the context passed executions (eg. DB ops, Http calls) takes longer than the given duration to return, the timeout error is set and forwarded to the centralized ",(0,i.jsx)(n.code,{children:"ErrorHandler"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["It does not cancel long running executions. Underlying executions must handle timeout by using ",(0,i.jsx)(n.code,{children:"context.Context"})," parameter."]}),"\n",(0,i.jsx)(n.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func New(handler fiber.Handler, timeout time.Duration, timeoutErrors ...error) fiber.Handler\n"})}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Import the middleware package that is part of the Fiber web framework"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/timeout"\n)\n'})}),"\n",(0,i.jsx)(n.p,{children:"After you initiate your Fiber app, you can use the following possibilities:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func main() {\n    app := fiber.New()\n    h := func(c fiber.Ctx) error {\n        sleepTime, _ := time.ParseDuration(c.Params("sleepTime") + "ms")\n        if err := sleepWithContext(c.Context(), sleepTime); err != nil {\n            return fmt.Errorf("%w: execution error", err)\n        }\n        return nil\n    }\n\n    app.Get("/foo/:sleepTime", timeout.New(h, 2*time.Second))\n    log.Fatal(app.Listen(":3000"))\n}\n\nfunc sleepWithContext(ctx context.Context, d time.Duration) error {\n    timer := time.NewTimer(d)\n\n    select {\n    case <-ctx.Done():\n        if !timer.Stop() {\n            <-timer.C\n        }\n        return context.DeadlineExceeded\n    case <-timer.C:\n    }\n    return nil\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Test http 200 with curl:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl --location -I --request GET 'http://localhost:3000/foo/1000' \n"})}),"\n",(0,i.jsx)(n.p,{children:"Test http 408 with curl:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl --location -I --request GET 'http://localhost:3000/foo/3000' \n"})}),"\n",(0,i.jsx)(n.p,{children:"Use with custom error:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'var ErrFooTimeOut = errors.New("foo context canceled")\n\nfunc main() {\n    app := fiber.New()\n    h := func(c fiber.Ctx) error {\n        sleepTime, _ := time.ParseDuration(c.Params("sleepTime") + "ms")\n        if err := sleepWithContextWithCustomError(c.Context(), sleepTime); err != nil {\n            return fmt.Errorf("%w: execution error", err)\n        }\n        return nil\n    }\n\n    app.Get("/foo/:sleepTime", timeout.New(h, 2*time.Second, ErrFooTimeOut))\n    log.Fatal(app.Listen(":3000"))\n}\n\nfunc sleepWithContextWithCustomError(ctx context.Context, d time.Duration) error {\n    timer := time.NewTimer(d)\n    select {\n    case <-ctx.Done():\n        if !timer.Stop() {\n            <-timer.C\n        }\n        return ErrFooTimeOut\n    case <-timer.C:\n    }\n    return nil\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample usage with a DB call:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func main() {\n    app := fiber.New()\n    db, _ := gorm.Open(postgres.Open("postgres://localhost/foodb"), &gorm.Config{})\n\n    handler := func(ctx fiber.Ctx) error {\n        tran := db.WithContext(ctx.Context()).Begin()\n        \n        if tran = tran.Exec("SELECT pg_sleep(50)"); tran.Error != nil {\n            return tran.Error\n        }\n        \n        if tran = tran.Commit(); tran.Error != nil {\n            return tran.Error\n        }\n\n        return nil\n    }\n\n    app.Get("/foo", timeout.New(handler, 10*time.Second))\n    log.Fatal(app.Listen(":3000"))\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var r=t(67294);let i={},o=r.createContext(i);function a(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);