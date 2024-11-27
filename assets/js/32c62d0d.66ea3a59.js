"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["89255"],{59782:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>t,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>d});var i=JSON.parse('{"id":"middleware/session","title":"Session Middleware for [Fiber](https://github.com/gofiber/fiber)","description":"The session middleware provides session management for Fiber applications, utilizing the Storage package for multi-database support via a unified interface. By default, session data is stored in memory, but custom storage options are easily configurable (see examples below).","source":"@site/docs/core/middleware/session.md","sourceDirName":"middleware","slug":"/middleware/session","permalink":"/next/middleware/session","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/middleware/session.md","tags":[],"version":"current","lastUpdatedAt":1732702215000,"frontMatter":{"id":"session"},"sidebar":"left_sidebar","previous":{"title":"Rewrite","permalink":"/next/middleware/rewrite"},"next":{"title":"Skip","permalink":"/next/middleware/skip"}}'),r=s("85893"),o=s("50065");let d={id:"session"},t="Session Middleware for Fiber",l={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Migration Guide",id:"migration-guide",level:2},{value:"v2 to v3",id:"v2-to-v3",level:3},{value:"Migrating v2 to v3 Example (Legacy Approach)",id:"migrating-v2-to-v3-example-legacy-approach",level:3},{value:"Example Conversion",id:"example-conversion",level:4},{value:"v3 Example (Recommended Middleware Handler)",id:"v3-example-recommended-middleware-handler",level:3},{value:"Types",id:"types",level:2},{value:"Config",id:"config",level:3},{value:"Middleware",id:"middleware",level:3},{value:"Session",id:"session",level:3},{value:"Store",id:"store",level:3},{value:"Signatures",id:"signatures",level:2},{value:"Session Package Functions",id:"session-package-functions",level:3},{value:"Config Methods",id:"config-methods",level:3},{value:"Middleware Methods",id:"middleware-methods",level:3},{value:"Session Methods",id:"session-methods",level:3},{value:"Store Methods",id:"store-methods",level:3},{value:"<code>GetByID</code> Method",id:"getbyid-method",level:4},{value:"Key Features",id:"key-features",level:5},{value:"Usage Considerations",id:"usage-considerations",level:5},{value:"Example Use Cases",id:"example-use-cases",level:5},{value:"Examples",id:"examples",level:2},{value:"Middleware Handler (Recommended)",id:"middleware-handler-recommended",level:3},{value:"Custom Storage Example",id:"custom-storage-example",level:3},{value:"Session Without Middleware Handler",id:"session-without-middleware-handler",level:3},{value:"Custom Types in Session Data",id:"custom-types-in-session-data",level:3},{value:"Config",id:"config-1",level:2},{value:"Default Config",id:"default-config",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsxs)(n.h1,{id:"session-middleware-for-fiber",children:["Session Middleware for ",(0,r.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})]})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"session"})," middleware provides session management for Fiber applications, utilizing the ",(0,r.jsx)(n.a,{href:"https://github.com/gofiber/storage",children:"Storage"})," package for multi-database support via a unified interface. By default, session data is stored in memory, but custom storage options are easily configurable (see examples below)."]}),"\n",(0,r.jsx)(n.p,{children:"As of v3, we recommend using the middleware handler for session management. However, for backward compatibility, v2's session methods are still available, allowing you to continue using the session management techniques from earlier versions of Fiber. Both methods are demonstrated in the examples."}),"\n",(0,r.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#migration-guide",children:"Migration Guide"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#v2-to-v3",children:"v2 to v3"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#types",children:"Types"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#middleware",children:"Middleware"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#session",children:"Session"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#store",children:"Store"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#signatures",children:"Signatures"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#session-package-functions",children:"Session Package Functions"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#config-methods",children:"Config Methods"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#middleware-methods",children:"Middleware Methods"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#session-methods",children:"Session Methods"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#store-methods",children:"Store Methods"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#examples",children:"Examples"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#middleware-handler-recommended",children:"Middleware Handler (Recommended)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#custom-storage-example",children:"Custom Storage Example"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#session-without-middleware-handler",children:"Session Without Middleware Handler"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#custom-types-in-session-data",children:"Custom Types in Session Data"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"migration-guide",children:"Migration Guide"}),"\n",(0,r.jsx)(n.h3,{id:"v2-to-v3",children:"v2 to v3"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Function Signature Change"}),": In v3, the ",(0,r.jsx)(n.code,{children:"New"})," function now returns a middleware handler instead of a ",(0,r.jsx)(n.code,{children:"*Store"}),". To access the store, use the ",(0,r.jsx)(n.code,{children:"Store"})," method on ",(0,r.jsx)(n.code,{children:"*Middleware"})," (obtained from ",(0,r.jsx)(n.code,{children:"session.FromContext(c)"})," in a handler) or use ",(0,r.jsx)(n.code,{children:"NewStore"})," or ",(0,r.jsx)(n.code,{children:"NewWithStore"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Session Lifecycle Management"}),": The ",(0,r.jsx)(n.code,{children:"*Store.Save"})," method no longer releases the instance automatically. You must manually call ",(0,r.jsx)(n.code,{children:"sess.Release()"})," after using the session to manage its lifecycle properly."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Expiration Handling"}),": Previously, the ",(0,r.jsx)(n.code,{children:"Expiration"})," field represented the maximum session duration before expiration. However, it would extend every time the session was saved, making its behavior a mix between session duration and session idle timeout. The ",(0,r.jsx)(n.code,{children:"Expiration"})," field has been removed and replaced with ",(0,r.jsx)(n.code,{children:"IdleTimeout"})," and ",(0,r.jsx)(n.code,{children:"AbsoluteTimeout"})," fields, which explicitly defines the session's idle and absolute timeout periods."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Idle Timeout"}),": The new ",(0,r.jsx)(n.code,{children:"IdleTimeout"}),", handles session inactivity. If the session is idle for the specified duration, it will expire. The idle timeout is updated when the session is saved. If you are using the middleware handler, the idle timeout will be updated automatically."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Absolute Timeout"}),": The ",(0,r.jsx)(n.code,{children:"AbsoluteTimeout"})," field has been added. If you need to set an absolute session timeout, you can use this field to define the duration. The session will expire after the specified duration, regardless of activity."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For more details about Fiber v3, see ",(0,r.jsx)(n.a,{href:"https://github.com/gofiber/fiber/blob/main/docs/whats_new.md",children:"What\u2019s New"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"migrating-v2-to-v3-example-legacy-approach",children:"Migrating v2 to v3 Example (Legacy Approach)"}),"\n",(0,r.jsx)(n.p,{children:"To convert a v2 example to use the v3 legacy approach, follow these steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Initialize with Store"}),": Use ",(0,r.jsx)(n.code,{children:"session.NewStore()"})," to obtain a store."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Retrieve Session"}),": Access the session store using the ",(0,r.jsx)(n.code,{children:"store.Get(c)"})," method."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Release Session"}),": Ensure that you call ",(0,r.jsx)(n.code,{children:"sess.Release()"})," after you are done with the session to manage its lifecycle."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"When using the legacy approach, the IdleTimeout will be updated when the session is saved."})}),"\n",(0,r.jsx)(n.h4,{id:"example-conversion",children:"Example Conversion"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"v2 Example:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'store := session.New()\n\napp.Get("/", func(c *fiber.Ctx) error {\n    sess, err := store.Get(c)\n    if err != nil {\n        return err\n    }\n\n    key, ok := sess.Get("key").(string)\n    if !ok {\n        return c.SendStatus(fiber.StatusInternalServerError)\n    }\n\n    sess.Set("key", "value")\n\n    err = sess.Save()\n    if err != nil {\n        return c.SendStatus(fiber.StatusInternalServerError)\n    }\n\n    return nil\n})\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"v3 Legacy Approach:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'store := session.NewStore()\n\napp.Get("/", func(c fiber.Ctx) error {\n    sess, err := store.Get(c)\n    if err != nil {\n        return err\n    }\n    defer sess.Release() // Important: Release the session\n\n    key, ok := sess.Get("key").(string)\n    if !ok {\n        return c.SendStatus(fiber.StatusInternalServerError)\n    }\n\n    sess.Set("key", "value")\n\n    err = sess.Save()\n    if err != nil {\n        return c.SendStatus(fiber.StatusInternalServerError)\n    }\n\n    return nil\n})\n'})}),"\n",(0,r.jsx)(n.h3,{id:"v3-example-recommended-middleware-handler",children:"v3 Example (Recommended Middleware Handler)"}),"\n",(0,r.jsxs)(n.p,{children:["Do not call ",(0,r.jsx)(n.code,{children:"sess.Release()"})," when using the middleware handler. ",(0,r.jsx)(n.code,{children:"sess.Save()"})," is also not required, as the middleware automatically saves the session data."]}),"\n",(0,r.jsxs)(n.p,{children:["For the recommended approach, use the middleware handler. See the ",(0,r.jsx)(n.a,{href:"#middleware-handler-recommended",children:"Middleware Handler (Recommended)"})," section for details."]}),"\n",(0,r.jsx)(n.h2,{id:"types",children:"Types"}),"\n",(0,r.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,r.jsx)(n.p,{children:"Defines the configuration options for the session middleware."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type Config struct {\n    Storage           fiber.Storage\n    Next              func(fiber.Ctx) bool\n    Store             *Store\n    ErrorHandler      func(fiber.Ctx, error)\n    KeyGenerator      func() string\n    KeyLookup         string\n    CookieDomain      string\n    CookiePath        string\n    CookieSameSite    string\n    IdleTimeout       time.Duration\n    AbsoluteTimeout   time.Duration\n    CookieSecure      bool\n    CookieHTTPOnly    bool\n    CookieSessionOnly bool\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"middleware",children:"Middleware"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Middleware"})," struct encapsulates the session middleware configuration and storage, created via ",(0,r.jsx)(n.code,{children:"New"})," or ",(0,r.jsx)(n.code,{children:"NewWithStore"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type Middleware struct {\n    Session *Session\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"session",children:"Session"}),"\n",(0,r.jsxs)(n.p,{children:["Represents a user session, accessible through ",(0,r.jsx)(n.code,{children:"FromContext"})," or ",(0,r.jsx)(n.code,{children:"Store.Get"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type Session struct {}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"store",children:"Store"}),"\n",(0,r.jsxs)(n.p,{children:["Handles session data management and is created using ",(0,r.jsx)(n.code,{children:"NewStore"}),", ",(0,r.jsx)(n.code,{children:"NewWithStore"})," or by accessing the ",(0,r.jsx)(n.code,{children:"Store"})," method of a middleware instance."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type Store struct {\n    Config\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"signatures",children:"Signatures"}),"\n",(0,r.jsx)(n.h3,{id:"session-package-functions",children:"Session Package Functions"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) *Middleware\nfunc NewWithStore(config ...Config) (fiber.Handler, *Store)\nfunc FromContext(c fiber.Ctx) *Middleware\n"})}),"\n",(0,r.jsx)(n.h3,{id:"config-methods",children:"Config Methods"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func DefaultErrorHandler(fiber.Ctx, err error)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"middleware-methods",children:"Middleware Methods"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func (m *Middleware) Set(key string, value any)\nfunc (m *Middleware) Get(key string) any\nfunc (m *Middleware) Delete(key string)\nfunc (m *Middleware) Destroy() error\nfunc (m *Middleware) Reset() error\nfunc (m *Middleware) Store() *Store\n"})}),"\n",(0,r.jsx)(n.h3,{id:"session-methods",children:"Session Methods"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func (s *Session) Fresh() bool\nfunc (s *Session) ID() string\nfunc (s *Session) Get(key string) any\nfunc (s *Session) Set(key string, val any)\nfunc (s *Session) Destroy() error\nfunc (s *Session) Regenerate() error\nfunc (s *Session) Release()\nfunc (s *Session) Reset() error\nfunc (s *Session) Save() error\nfunc (s *Session) Keys() []string\nfunc (s *Session) SetIdleTimeout(idleTimeout time.Duration)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"store-methods",children:"Store Methods"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func (*Store) RegisterType(i any)\nfunc (s *Store) Get(c fiber.Ctx) (*Session, error)\nfunc (s *Store) GetByID(id string) (*Session, error)\nfunc (s *Store) Reset() error\nfunc (s *Store) Delete(id string) error\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.h4,{id:"getbyid-method",children:[(0,r.jsx)(n.code,{children:"GetByID"})," Method"]}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"GetByID"})," method retrieves a session from storage using its session ID. Unlike ",(0,r.jsx)(n.code,{children:"Get"}),", which ties the session to a ",(0,r.jsx)(n.code,{children:"fiber.Ctx"})," (request-response cycle), ",(0,r.jsx)(n.code,{children:"GetByID"})," operates independently of any HTTP context. This makes it ideal for scenarios such as background processing, scheduled tasks, or non-HTTP-related session management."]}),(0,r.jsx)(n.h5,{id:"key-features",children:"Key Features"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Context Independence"}),": Sessions retrieved via ",(0,r.jsx)(n.code,{children:"GetByID"})," are not bound to ",(0,r.jsx)(n.code,{children:"fiber.Ctx"}),". This means the session can be manipulated in contexts that aren't tied to an active HTTP request-response cycle."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Background Task Suitability"}),": Use this method when you need to manage sessions outside of the standard HTTP workflow, such as in scheduled jobs, background tasks, or any non-HTTP context where session data needs to be accessed or modified."]}),"\n"]}),(0,r.jsx)(n.h5,{id:"usage-considerations",children:"Usage Considerations"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Manual Persistence"}),": Since there is no associated ",(0,r.jsx)(n.code,{children:"fiber.Ctx"}),", changes made to the session (e.g., modifying data) will ",(0,r.jsx)(n.strong,{children:"not"})," automatically be saved to storage. You ",(0,r.jsx)(n.strong,{children:"must"})," call ",(0,r.jsx)(n.code,{children:"session.Save()"})," explicitly to persist any updates to storage."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"No Automatic Cookie Handling"}),": Any updates made to the session will ",(0,r.jsx)(n.strong,{children:"not"})," affect the client-side cookies. If the session changes need to be reflected in the client (e.g., in a future HTTP response), you will need to handle this manually by setting the cookies via other methods."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Resource Management"}),": After using a session retrieved by ",(0,r.jsx)(n.code,{children:"GetByID"}),", you should call ",(0,r.jsx)(n.code,{children:"session.Release()"})," to properly release the session back to the pool and free up resources."]}),"\n"]}),(0,r.jsx)(n.h5,{id:"example-use-cases",children:"Example Use Cases"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Scheduled Jobs"}),": Retrieve and update session data periodically without triggering an HTTP request."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Background Processing"}),": Manage sessions for tasks running in the background, such as user inactivity checks or batch processing."]}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Security Notice"}),": For robust security, especially during sensitive operations like account changes or transactions, consider using CSRF protection. Fiber provides a ",(0,r.jsx)(n.a,{href:"https://docs.gofiber.io/api/middleware/csrf",children:"CSRF Middleware"})," that can be used with sessions to prevent CSRF attacks."]})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Middleware Order"}),": The order of middleware matters. The session middleware should come before any handler or middleware that uses the session (for example, the CSRF middleware)."]})}),"\n",(0,r.jsx)(n.h3,{id:"middleware-handler-recommended",children:"Middleware Handler (Recommended)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/csrf"\n    "github.com/gofiber/fiber/v3/middleware/session"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    sessionMiddleware, sessionStore := session.NewWithStore()\n\n    app.Use(sessionMiddleware)\n    app.Use(csrf.New(csrf.Config{\n        Store: sessionStore,\n    }))\n\n    app.Get("/", func(c fiber.Ctx) error {\n        sess := session.FromContext(c)\n        if sess == nil {\n            return c.SendStatus(fiber.StatusInternalServerError)\n        }\n\n        name, ok := sess.Get("name").(string)\n        if !ok {\n            return c.SendString("Welcome anonymous user!")\n        }\n\n        return c.SendString("Welcome " + name)\n    })\n\n    app.Listen(":3000")\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"custom-storage-example",children:"Custom Storage Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/storage/sqlite3"\n    "github.com/gofiber/fiber/v3/middleware/csrf"\n    "github.com/gofiber/fiber/v3/middleware/session"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    storage := sqlite3.New()\n    sessionMiddleware, sessionStore := session.NewWithStore(session.Config{\n        Storage: storage,\n    })\n\n    app.Use(sessionMiddleware)\n    app.Use(csrf.New(csrf.Config{\n        Store: sessionStore,\n    }))\n\n    app.Listen(":3000")\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"session-without-middleware-handler",children:"Session Without Middleware Handler"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/csrf"\n    "github.com/gofiber/fiber/v3/middleware/session"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    sessionStore := session.NewStore()\n\n    app.Use(csrf.New(csrf.Config{\n        Store: sessionStore,\n    }))\n\n    app.Get("/", func(c fiber.Ctx) error {\n        sess, err := sessionStore.Get(c)\n        if err != nil {\n            return c.SendStatus(fiber.StatusInternalServerError)\n        }\n        defer sess.Release()\n\n        name, ok := sess.Get("name").(string)\n        if !ok {\n            return c.SendString("Welcome anonymous user!")\n        }\n\n        return c.SendString("Welcome " + name)\n    })\n\n    app.Post("/login", func(c fiber.Ctx) error {\n        sess, err := sessionStore.Get(c)\n        if err != nil {\n            return c.SendStatus(fiber.StatusInternalServerError)\n        }\n        defer sess.Release()\n\n        if !sess.Fresh() {\n            if err := sess.Regenerate(); err != nil {\n                return c.SendStatus(fiber.StatusInternalServerError)\n            }\n        }\n\n        sess.Set("name", "John Doe")\n\n        err = sess.Save()\n        if err != nil {\n            return c.SendStatus(fiber.StatusInternalServerError)\n        }\n\n        return c.SendString("Logged in!")\n    })\n\n    app.Listen(":3000")\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"custom-types-in-session-data",children:"Custom Types in Session Data"}),"\n",(0,r.jsx)(n.p,{children:"Session data can only be of the following types by default:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"string"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"int"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"int8"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"int16"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"int32"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"int64"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"uint"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"uint8"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"uint16"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"uint32"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"uint64"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"bool"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"float32"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"float64"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"[]byte"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"complex64"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"complex128"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"interface{}"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To support other types in session data, you can register custom types. Here is an example of how to register a custom type:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/session"\n)\n\ntype User struct {\n    Name string\n    Age  int\n}\n\nfunc main() {\n    app := fiber.New()\n\n    sessionMiddleware, sessionStore := session.NewWithStore()\n    sessionStore.RegisterType(User{})\n\n    app.Use(sessionMiddleware)\n\n    app.Listen(":3000")\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"config-1",children:"Config"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Storage"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"fiber.Storage"})}),(0,r.jsx)(n.td,{children:"Defines where session data is stored."}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"nil"})," (in-memory storage)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Next"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func(c fiber.Ctx) bool"})}),(0,r.jsx)(n.td,{children:"Function to skip this middleware under certain conditions."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"nil"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"ErrorHandler"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func(c fiber.Ctx, err error)"})}),(0,r.jsx)(n.td,{children:"Custom error handler for session middleware errors."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"nil"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"KeyGenerator"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"func() string"})}),(0,r.jsx)(n.td,{children:"Function to generate session IDs."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"UUID()"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"KeyLookup"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"Key used to store session ID in cookie or header."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"cookie:session_id"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"CookieDomain"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"The domain scope of the session cookie."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'""'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"CookiePath"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"The path scope of the session cookie."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"/"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"CookieSameSite"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"The SameSite attribute of the session cookie."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"Lax"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"IdleTimeout"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"time.Duration"})}),(0,r.jsx)(n.td,{children:"Maximum duration of inactivity before session expires."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"30 * time.Minute"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"AbsoluteTimeout"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"time.Duration"})}),(0,r.jsx)(n.td,{children:"Maximum duration before session expires."}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"0"})," (no expiration)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"CookieSecure"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"bool"})}),(0,r.jsx)(n.td,{children:"Ensures session cookie is only sent over HTTPS."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"CookieHTTPOnly"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"bool"})}),(0,r.jsx)(n.td,{children:"Ensures session cookie is not accessible to JavaScript (HTTP only)."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"CookieSessionOnly"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"bool"})}),(0,r.jsx)(n.td,{children:"Prevents session cookie from being saved after the session ends (cookie expires on close)."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"default-config",children:"Default Config"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'session.Config{\n    Storage:           memory.New(),\n    Next:              nil,\n    Store:             nil,\n    ErrorHandler:      nil,\n    KeyGenerator:      utils.UUIDv4,\n    KeyLookup:         "cookie:session_id",\n    CookieDomain:      "",\n    CookiePath:        "",\n    CookieSameSite:    "Lax",\n    IdleTimeout:       30 * time.Minute,\n    AbsoluteTimeout:   0,\n    CookieSecure:      false,\n    CookieHTTPOnly:    false,\n    CookieSessionOnly: false,\n}\n'})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return d}});var i=s(67294);let r={},o=i.createContext(r);function d(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);