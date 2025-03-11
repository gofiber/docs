"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["1976"],{43576:function(e,n,t){t.r(n),t.d(n,{default:()=>f,frontMatter:()=>o,metadata:()=>r,assets:()=>s,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"addon/retry","title":"Retry Addon","description":"Retry addon for Fiber designed to apply retry mechanism for unsuccessful network","source":"@site/docs/core/addon/retry.md","sourceDirName":"addon","slug":"/addon/retry","permalink":"/next/addon/retry","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/addon/retry.md","tags":[],"version":"current","lastUpdatedAt":1741678803000,"frontMatter":{"id":"retry"},"sidebar":"left_sidebar","previous":{"title":"\uD83D\uDD0C Addon","permalink":"/next/category/-addon"},"next":{"title":"\uD83C\uDF0E Client","permalink":"/next/category/-client"}}'),i=t("85893"),a=t("50065");let o={id:"retry"},l="Retry Addon",s={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Custom Config",id:"custom-config",level:2},{value:"Config",id:"config",level:2},{value:"Default Config Example",id:"default-config-example",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"retry-addon",children:"Retry Addon"})}),"\n",(0,i.jsxs)(n.p,{children:["Retry addon for ",(0,i.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," designed to apply retry mechanism for unsuccessful network\noperations. This addon uses an exponential backoff algorithm with jitter. It calls the function multiple times and tries\nto make it successful. If all calls are failed, then, it returns an error. It adds a jitter at each retry step because adding\na jitter is a way to break synchronization across the client and avoid collision."]}),"\n",(0,i.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#retry-addon",children:"Retry Addon"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#table-of-contents",children:"Table of Contents"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#custom-config",children:"Custom Config"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#default-config-example",children:"Default Config Example"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"signatures",children:"Signatures"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func NewExponentialBackoff(config ...retry.Config) *retry.ExponentialBackoff\n"})}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gofiber/fiber/v3/addon/retry"\n    "github.com/gofiber/fiber/v3/client"\n)\n\nfunc main() {\n    expBackoff := retry.NewExponentialBackoff(retry.Config{})\n\n    // Local variables that will be used inside of Retry\n    var resp *client.Response\n    var err error\n\n    // Retry a network request and return an error to signify to try again\n    err = expBackoff.Retry(func() error {\n        client := client.New()\n        resp, err = client.Get("https://gofiber.io")\n        if err != nil {\n            return fmt.Errorf("GET gofiber.io failed: %w", err)\n        }\n        if resp.StatusCode() != 200 {\n            return fmt.Errorf("GET gofiber.io did not return OK 200")\n        }\n        return nil\n    })\n\n    // If all retries failed, panic\n    if err != nil {\n        panic(err)\n    }\n    fmt.Printf("GET gofiber.io succeeded with status code %d\\n", resp.StatusCode())\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"default-config",children:"Default Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"retry.NewExponentialBackoff()\n"})}),"\n",(0,i.jsx)(n.h2,{id:"custom-config",children:"Custom Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"retry.NewExponentialBackoff(retry.Config{\n    InitialInterval: 2 * time.Second,\n    MaxBackoffTime:  64 * time.Second,\n    Multiplier:      2.0,\n    MaxRetryCount:   15,\n})\n"})}),"\n",(0,i.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// Config defines the config for addon.\ntype Config struct {\n    // InitialInterval defines the initial time interval for backoff algorithm.\n    //\n    // Optional. Default: 1 * time.Second\n    InitialInterval time.Duration\n\n    // MaxBackoffTime defines maximum time duration for backoff algorithm. When\n    // the algorithm is reached this time, rest of the retries will be maximum\n    // 32 seconds.\n    //\n    // Optional. Default: 32 * time.Second\n    MaxBackoffTime time.Duration\n\n    // Multiplier defines multiplier number of the backoff algorithm.\n    //\n    // Optional. Default: 2.0\n    Multiplier float64\n\n    // MaxRetryCount defines maximum retry count for the backoff algorithm.\n    //\n    // Optional. Default: 10\n    MaxRetryCount int\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"default-config-example",children:"Default Config Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// DefaultConfig is the default config for retry.\nvar DefaultConfig = Config{\n    InitialInterval: 1 * time.Second,\n    MaxBackoffTime:  32 * time.Second,\n    Multiplier:      2.0,\n    MaxRetryCount:   10,\n    currentInterval: 1 * time.Second,\n}\n"})})]})}function f(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var r=t(67294);let i={},a=r.createContext(i);function o(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);