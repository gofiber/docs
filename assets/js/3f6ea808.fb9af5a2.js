"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["13903"],{22677:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>i});var s=JSON.parse('{"id":"client/hooks","title":"\uD83C\uDFA3 Hooks","description":"Hooks are used to manipulate the request/response process of the Fiber client.","source":"@site/docs/core/client/hooks.md","sourceDirName":"client","slug":"/client/hooks","permalink":"/next/client/hooks","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/client/hooks.md","tags":[],"version":"current","lastUpdatedAt":1736149068000,"sidebarPosition":4,"frontMatter":{"id":"hooks","title":"\uD83C\uDFA3 Hooks","description":"Hooks are used to manipulate the request/response process of the Fiber client.","sidebar_position":4},"sidebar":"left_sidebar","previous":{"title":"\uD83D\uDCE5 Response","permalink":"/next/client/response"},"next":{"title":"\uD83C\uDF73 Examples","permalink":"/next/client/examples"}}'),o=r("85893"),t=r("50065");let i={id:"hooks",title:"\uD83C\uDFA3 Hooks",description:"Hooks are used to manipulate the request/response process of the Fiber client.",sidebar_position:4},l=void 0,c={},a=[{value:"Request Hooks",id:"request-hooks",level:2},{value:"Built-in Request Hooks",id:"built-in-request-hooks",level:3},{value:"Response Hooks",id:"response-hooks",level:2},{value:"Built-in Response Hooks",id:"built-in-response-hooks",level:3},{value:"Hook Execution Order",id:"hook-execution-order",level:2}];function d(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:r}=n;return!r&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Hooks allow you to intercept and modify the request or response flow of the Fiber client. They are particularly useful for:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Changing request parameters (e.g., URL, headers) before sending the request."}),"\n",(0,o.jsx)(n.li,{children:"Logging request and response details."}),"\n",(0,o.jsx)(n.li,{children:"Integrating complex tracing or monitoring tools."}),"\n",(0,o.jsx)(n.li,{children:"Handling authentication, retries, or other custom logic."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"There are two kinds of hooks:"}),"\n",(0,o.jsx)(n.h2,{id:"request-hooks",children:"Request Hooks"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Request hooks"})," are functions executed before the HTTP request is sent. They follow the signature:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"type RequestHook func(*Client, *Request) error\n"})}),"\n",(0,o.jsxs)(n.p,{children:["A request hook receives both the ",(0,o.jsx)(n.code,{children:"Client"})," and the ",(0,o.jsx)(n.code,{children:"Request"})," objects, allowing you to modify the request before it leaves your application. For example, you could:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Change the host URL."}),"\n",(0,o.jsx)(n.li,{children:"Log request details (method, URL, headers)."}),"\n",(0,o.jsx)(n.li,{children:"Add or modify headers or query parameters."}),"\n",(0,o.jsx)(n.li,{children:"Intercept and apply custom authentication logic."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'type Repository struct {\n    Name        string `json:"name"`\n    FullName    string `json:"full_name"`\n    Description string `json:"description"`\n    Homepage    string `json:"homepage"`\n\n    Owner struct {\n        Login string `json:"login"`\n    } `json:"owner"`\n}\n\nfunc main() {\n    cc := client.New()\n\n    // Add a request hook that modifies the request URL before sending.\n    cc.AddRequestHook(func(c *client.Client, r *client.Request) error {\n        r.SetURL("https://api.github.com/" + r.URL())\n        return nil\n    })\n\n    resp, err := cc.Get("repos/gofiber/fiber")\n    if err != nil {\n        panic(err)\n    }\n\n    var repo Repository\n    if err := resp.JSON(&repo); err != nil {\n        panic(err)\n    }\n\n    fmt.Printf("Status code: %d\\n", resp.StatusCode())\n    fmt.Printf("Repository: %s\\n", repo.FullName)\n    fmt.Printf("Description: %s\\n", repo.Description)\n    fmt.Printf("Homepage: %s\\n", repo.Homepage)\n    fmt.Printf("Owner: %s\\n", repo.Owner.Login)\n    fmt.Printf("Name: %s\\n", repo.Name)\n    fmt.Printf("Full Name: %s\\n", repo.FullName)\n}\n'})}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"Click here to see the result"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-plaintext",children:"Status code: 200\nRepository: gofiber/fiber\nDescription: \u26A1\uFE0F Express inspired web framework written in Go\nHomepage: https://gofiber.io\nOwner: gofiber\nName: fiber\nFull Name: gofiber/fiber\n"})})]}),"\n",(0,o.jsx)(n.h3,{id:"built-in-request-hooks",children:"Built-in Request Hooks"}),"\n",(0,o.jsx)(n.p,{children:"Fiber provides some built-in request hooks:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"parserRequestURL"}),": Normalizes and customizes the URL based on path and query parameters. Required for ",(0,o.jsx)(n.code,{children:"PathParam"})," and ",(0,o.jsx)(n.code,{children:"QueryParam"})," methods."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"parserRequestHeader"}),": Sets request headers, cookies, content type, referer, and user agent based on client and request properties."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"parserRequestBody"}),": Automatically serializes the request body (JSON, XML, form, file uploads, etc.)."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"If any request hook returns an error, the request is interrupted and the error is returned immediately."})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example with Multiple Hooks:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'func main() {\n    cc := client.New()\n\n    cc.AddRequestHook(func(c *client.Client, r *client.Request) error {\n        fmt.Println("Hook 1")\n        return errors.New("error")\n    })\n\n    cc.AddRequestHook(func(c *client.Client, r *client.Request) error {\n        fmt.Println("Hook 2")\n        return nil\n    })\n\n    _, err := cc.Get("https://example.com/")\n    if err != nil {\n        panic(err)\n    }\n}\n'})}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"Click here to see the result"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"Hook 1.\npanic: error\n\ngoroutine 1 [running]:\nmain.main()\n        main.go:25 +0xaa\nexit status 2\n"})})]}),"\n",(0,o.jsx)(n.h2,{id:"response-hooks",children:"Response Hooks"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Response hooks"})," are functions executed after the HTTP response is received. They follow the signature:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"type ResponseHook func(*Client, *Response, *Request) error\n"})}),"\n",(0,o.jsxs)(n.p,{children:["A response hook receives the ",(0,o.jsx)(n.code,{children:"Client"}),", ",(0,o.jsx)(n.code,{children:"Response"}),", and ",(0,o.jsx)(n.code,{children:"Request"})," objects, allowing you to inspect and modify the response or perform additional actions such as logging, tracing, or processing response data."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'func main() {\n    cc := client.New()\n\n    cc.AddResponseHook(func(c *client.Client, resp *client.Response, req *client.Request) error {\n        fmt.Printf("Response Status Code: %d\\n", resp.StatusCode())\n        fmt.Printf("HTTP protocol: %s\\n\\n", resp.Protocol())\n\n        fmt.Println("Response Headers:")\n        resp.RawResponse.Header.VisitAll(func(key, value []byte) {\n            fmt.Printf("%s: %s\\n", key, value)\n        })\n\n        return nil\n    })\n\n    _, err := cc.Get("https://example.com/")\n    if err != nil {\n        panic(err)\n    }\n}\n'})}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"Click here to see the result"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-plaintext",children:'Response Status Code: 200\nHTTP protocol: HTTP/1.1\n\nResponse Headers:\nContent-Length: 1256\nContent-Type: text/html; charset=UTF-8\nServer: ECAcc (dcd/7D5A)\nAge: 216114\nCache-Control: max-age=604800\nDate: Fri, 10 May 2024 10:49:10 GMT\nEtag: "3147526947+gzip+ident"\nExpires: Fri, 17 May 2024 10:49:10 GMT\nLast-Modified: Thu, 17 Oct 2019 07:18:26 GMT\nVary: Accept-Encoding\nX-Cache: HIT\n'})})]}),"\n",(0,o.jsx)(n.h3,{id:"built-in-response-hooks",children:"Built-in Response Hooks"}),"\n",(0,o.jsx)(n.p,{children:"Fiber provides built-in response hooks:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"parserResponseCookie"}),": Parses cookies from the response and stores them in the response object and cookie jar if available."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"logger"}),": Logs information about the raw request and response. It uses the ",(0,o.jsx)(n.code,{children:"log.CommonLogger"})," interface."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"If a response hook returns an error, it stops executing any further hooks and returns the error."})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example with Multiple Response Hooks:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'func main() {\n    cc := client.New()\n\n    cc.AddResponseHook(func(c *client.Client, r1 *client.Response, r2 *client.Request) error {\n        fmt.Println("Hook 1")\n        return nil\n    })\n\n    cc.AddResponseHook(func(c *client.Client, r1 *client.Response, r2 *client.Request) error {\n        fmt.Println("Hook 2")\n        return errors.New("error")\n    })\n\n    cc.AddResponseHook(func(c *client.Client, r1 *client.Response, r2 *client.Request) error {\n        fmt.Println("Hook 3")\n        return nil\n    })\n\n    _, err := cc.Get("https://example.com/")\n    if err != nil {\n        panic(err)\n    }\n}\n'})}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"Click here to see the result"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"Hook 1\nHook 2\npanic: error\n\ngoroutine 1 [running]:\nmain.main()\n        main.go:30 +0xd6\nexit status 2\n"})})]}),"\n",(0,o.jsx)(n.h2,{id:"hook-execution-order",children:"Hook Execution Order"}),"\n",(0,o.jsx)(n.p,{children:"Hooks run in FIFO order (First-In-First-Out). That means hooks are executed in the order they were added. Keep this in mind when adding multiple hooks, as the order can affect the outcome."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'func main() {\n    cc := client.New()\n\n    cc.AddRequestHook(func(c *client.Client, r *client.Request) error {\n        fmt.Println("Hook 1")\n        return nil\n    })\n\n    cc.AddRequestHook(func(c *client.Client, r *client.Request) error {\n        fmt.Println("Hook 2")\n        return nil\n    })\n\n    _, err := cc.Get("https://example.com/")\n    if err != nil {\n        panic(err)\n    }\n}\n'})}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"Click here to see the result"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-plaintext",children:"Hook 1\nHook 2\n"})})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var s=r(67294);let o={},t=s.createContext(o);function i(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);