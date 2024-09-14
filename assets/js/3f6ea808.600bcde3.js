"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[50352],{64769:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var o=r(74848),s=r(28453);const t={id:"hooks",title:"\ud83c\udfa3 Hooks",description:"Hooks are used to manipulate request/response process of Fiber client.",sidebar_position:4},i=void 0,c={id:"client/hooks",title:"\ud83c\udfa3 Hooks",description:"Hooks are used to manipulate request/response process of Fiber client.",source:"@site/docs/core/client/hooks.md",sourceDirName:"client",slug:"/client/hooks",permalink:"/next/client/hooks",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/client/hooks.md",tags:[],version:"current",lastUpdatedAt:1726328537e3,sidebarPosition:4,frontMatter:{id:"hooks",title:"\ud83c\udfa3 Hooks",description:"Hooks are used to manipulate request/response process of Fiber client.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udce5 Response",permalink:"/next/client/response"},next:{title:"\ud83c\udf73 Examples",permalink:"/next/client/examples"}},l={},a=[{value:"Request Hooks",id:"request-hooks",level:2},{value:"Response Hooks",id:"response-hooks",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"With hooks, you can manipulate the client on before request/after response stages or more complex logging/tracing cases."}),"\n",(0,o.jsx)(n.p,{children:"There are 2 kinds of hooks:"}),"\n",(0,o.jsx)(n.h2,{id:"request-hooks",children:"Request Hooks"}),"\n",(0,o.jsx)(n.p,{children:"They are called before the HTTP request has been sent. You can use them make changes on Request object."}),"\n",(0,o.jsxs)(n.p,{children:["You need to use ",(0,o.jsx)(n.code,{children:"RequestHook func(*Client, *Request) error"})," function signature while creating the hooks. You can use request hooks to change host URL, log request properties etc. Here is an example about how to create request hooks:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'type Repository struct {\n    Name        string `json:"name"`\n    FullName    string `json:"full_name"`\n    Description string `json:"description"`\n    Homepage    string `json:"homepage"`\n\n    Owner struct {\n        Login string `json:"login"`\n    } `json:"owner"`\n}\n\nfunc main() {\n    cc := client.New()\n\n    cc.AddRequestHook(func(c *client.Client, r *client.Request) error {\n        r.SetURL("https://api.github.com/" + r.URL())\n\n        return nil\n    })\n\n    resp, err := cc.Get("repos/gofiber/fiber")\n    if err != nil {\n        panic(err)\n    }\n\n    var repo Repository\n    if err := resp.JSON(&repo); err != nil {\n        panic(err)\n    }\n\n    fmt.Printf("Status code: %d\\n", resp.StatusCode())\n\n    fmt.Printf("Repository: %s\\n", repo.FullName)\n    fmt.Printf("Description: %s\\n", repo.Description)\n    fmt.Printf("Homepage: %s\\n", repo.Homepage)\n    fmt.Printf("Owner: %s\\n", repo.Owner.Login)\n    fmt.Printf("Name: %s\\n", repo.Name)\n    fmt.Printf("Full Name: %s\\n", repo.FullName)\n}\n'})}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"Click here to see the result"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-plaintext",children:"Status code: 200\nRepository: gofiber/fiber\nDescription: \u26a1\ufe0f Express inspired web framework written in Go\nHomepage: https://gofiber.io\nOwner: gofiber\nName: fiber\nFull Name: gofiber/fiber\n"})})]}),"\n",(0,o.jsx)(n.p,{children:"There are also some builtin request hooks provide some functionalities for Fiber client. Here is a list of them:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/gofiber/fiber/blob/main/client/hooks.go#L62",children:"parserRequestURL"}),": parserRequestURL customizes the URL according to the path params and query params. It's necessary for ",(0,o.jsx)(n.code,{children:"PathParam"})," and ",(0,o.jsx)(n.code,{children:"QueryParam"})," methods."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/gofiber/fiber/blob/main/client/hooks.go#L113",children:"parserRequestHeader"}),": parserRequestHeader sets request headers, cookies, body type, referer, user agent according to client and request properties. It's necessary to make request header and cookiejar methods functional."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/gofiber/fiber/blob/main/client/hooks.go#L178",children:"parserRequestBody"}),": parserRequestBody serializes the body automatically. It is useful for XML, JSON, form, file bodies."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"If any error returns from request hook execution, it will interrupt the request and return the error."})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'func main() {\n    cc := client.New()\n\n    cc.AddRequestHook(func(c *client.Client, r *client.Request) error {\n        fmt.Println("Hook 1")\n        return errors.New("error")\n    })\n\n    cc.AddRequestHook(func(c *client.Client, r *client.Request) error {\n        fmt.Println("Hook 2")\n        return nil\n    })\n\n    _, err := cc.Get("https://example.com/")\n    if err != nil {\n        panic(err)\n    }\n}\n'})}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"Click here to see the result"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"Hook 1.\npanic: error\n\ngoroutine 1 [running]:\nmain.main()\n        main.go:25 +0xaa\nexit status 2\n"})})]}),"\n",(0,o.jsx)(n.h2,{id:"response-hooks",children:"Response Hooks"}),"\n",(0,o.jsx)(n.p,{children:"They are called after the HTTP response has been completed. You can use them to get some information about response and request."}),"\n",(0,o.jsxs)(n.p,{children:["You need to use ",(0,o.jsx)(n.code,{children:"ResponseHook func(*Client, *Response, *Request) error"})," function signature while creating the hooks. You can use response hook for logging, tracing etc. Here is an example about how to create response hooks:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'func main() {\n    cc := client.New()\n\n    cc.AddResponseHook(func(c *client.Client, resp *client.Response, req *client.Request) error {\n        fmt.Printf("Response Status Code: %d\\n", resp.StatusCode())\n        fmt.Printf("HTTP protocol: %s\\n\\n", resp.Protocol())\n\n        fmt.Println("Response Headers:")\n        resp.RawResponse.Header.VisitAll(func(key, value []byte) {\n            fmt.Printf("%s: %s\\n", key, value)\n        })\n\n        return nil\n    })\n\n    _, err := cc.Get("https://example.com/")\n    if err != nil {\n        panic(err)\n    }\n}\n'})}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"Click here to see the result"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-plaintext",children:'Response Status Code: 200\nHTTP protocol: HTTP/1.1\n\nResponse Headers:\nContent-Length: 1256\nContent-Type: text/html; charset=UTF-8\nServer: ECAcc (dcd/7D5A)\nAge: 216114\nCache-Control: max-age=604800\nDate: Fri, 10 May 2024 10:49:10 GMT\nEtag: "3147526947+gzip+ident"\nExpires: Fri, 17 May 2024 10:49:10 GMT\nLast-Modified: Thu, 17 Oct 2019 07:18:26 GMT\nVary: Accept-Encoding\nX-Cache: HIT\n'})})]}),"\n",(0,o.jsx)(n.p,{children:"There are also some builtin request hooks provide some functionalities for Fiber client. Here is a list of them:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/gofiber/fiber/blob/main/client/hooks.go#L293",children:"parserResponseCookie"}),": parserResponseCookie parses cookies and saves into the response objects and cookiejar if it's exists."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/gofiber/fiber/blob/main/client/hooks.go#L319",children:"logger"}),": logger prints some RawRequest and RawResponse information. It uses ",(0,o.jsx)(n.a,{href:"https://github.com/gofiber/fiber/blob/main/log/log.go#L49",children:"log.CommonLogger"})," interface for logging."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"If any error is returned from executing the response hook, it will return the error without executing other response hooks."})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'func main() {\n    cc := client.New()\n\n    cc.AddResponseHook(func(c *client.Client, r1 *client.Response, r2 *client.Request) error {\n        fmt.Println("Hook 1")\n        return nil\n    })\n\n    cc.AddResponseHook(func(c *client.Client, r1 *client.Response, r2 *client.Request) error {\n        fmt.Println("Hook 2")\n        return errors.New("error")\n    })\n\n    cc.AddResponseHook(func(c *client.Client, r1 *client.Response, r2 *client.Request) error {\n        fmt.Println("Hook 3")\n        return nil\n    })\n\n    _, err := cc.Get("https://example.com/")\n    if err != nil {\n        panic(err)\n    }\n}\n'})}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"Click here to see the result"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"Hook 1\nHook 2\npanic: error\n\ngoroutine 1 [running]:\nmain.main()\n        main.go:30 +0xd6\nexit status 2\n"})})]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Hooks work as FIFO (first-in-first-out). You need to check the order while adding the hooks."})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'func main() {\n    cc := client.New()\n\n    cc.AddRequestHook(func(c *client.Client, r *client.Request) error {\n        fmt.Println("Hook 1")\n        return nil\n    })\n\n    cc.AddRequestHook(func(c *client.Client, r *client.Request) error {\n        fmt.Println("Hook 2")\n        return nil\n    })\n\n    _, err := cc.Get("https://example.com/")\n    if err != nil {\n        panic(err)\n    }\n}\n'})}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"Click here to see the result"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-plaintext",children:"Hook 1\nHook 2\n"})})]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var o=r(96540);const s={},t=o.createContext(s);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);