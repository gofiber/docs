"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["50863"],{9166:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>u,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"client/examples","title":"\uD83C\uDF73 Examples","description":"Client usage examples.","source":"@site/docs/core/client/examples.md","sourceDirName":"client","slug":"/client/examples","permalink":"/next/client/examples","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/client/examples.md","tags":[],"version":"current","lastUpdatedAt":1736513694000,"sidebarPosition":5,"frontMatter":{"id":"examples","title":"\uD83C\uDF73 Examples","description":"Client usage examples.","sidebar_position":5},"sidebar":"left_sidebar","previous":{"title":"\uD83C\uDFA3 Hooks","permalink":"/next/client/hooks"},"next":{"title":"\uD83D\uDCD6 Guide","permalink":"/next/category/-guide"}}'),i=r("85893"),a=r("50065"),l=r("47902"),s=r("5525");let o={id:"examples",title:"\uD83C\uDF73 Examples",description:"Client usage examples.",sidebar_position:5},c=void 0,u={},d=[{value:"Basic Auth",id:"basic-auth",level:2},{value:"TLS",id:"tls",level:2},{value:"Cookiejar",id:"cookiejar",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},{value:"Response 2",id:"response-2",level:3}];function p(e){let n={code:"code",h2:"h2",h3:"h3",pre:"pre",...(0,a.a)(),...e.components},{Details:r}=n;return!r&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"basic-auth",children:"Basic Auth"}),"\n",(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(s.Z,{value:"client",label:"Client",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "encoding/base64"\n    "fmt"\n\n    "github.com/gofiber/fiber/v3/client"\n)\n\nfunc main() {\n    cc := client.New()\n\n    out := base64.StdEncoding.EncodeToString([]byte("john:doe"))\n    resp, err := cc.Get("http://localhost:3000", client.Config{\n        Header: map[string]string{\n            "Authorization": "Basic " + out,\n        },\n    })\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Print(string(resp.Body()))\n}\n'})})}),(0,i.jsx)(s.Z,{value:"server",label:"Server",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gofiber/fiber/v3"\n    "github.com/gofiber/fiber/v3/middleware/basicauth"\n)\n\nfunc main() {\n    app := fiber.New()\n    app.Use(\n        basicauth.New(basicauth.Config{\n            Users: map[string]string{\n                "john": "doe",\n            },\n        }),\n    )\n\n    app.Get("/", func(c fiber.Ctx) error {\n        return c.SendString("Hello, World!")\n    })\n\n    app.Listen(":3000")\n}\n'})})})]}),"\n",(0,i.jsx)(n.h2,{id:"tls",children:"TLS"}),"\n",(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(s.Z,{value:"client",label:"Client",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "crypto/tls"\n    "crypto/x509"\n    "fmt"\n    "os"\n\n    "github.com/gofiber/fiber/v3/client"\n)\n\nfunc main() {\n    cc := client.New()\n\n    certPool, err := x509.SystemCertPool()\n    if err != nil {\n        panic(err)\n    }\n\n    cert, err := os.ReadFile("ssl.cert")\n    if err != nil {\n        panic(err)\n    }\n\n    certPool.AppendCertsFromPEM(cert)\n    cc.SetTLSConfig(&tls.Config{\n        RootCAs: certPool,\n    })\n\n    resp, err := cc.Get("https://localhost:3000")\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Print(string(resp.Body()))\n}\n'})})}),(0,i.jsx)(s.Z,{value:"server",label:"Server",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gofiber/fiber/v3"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/", func(c fiber.Ctx) error {\n        return c.SendString("Hello, World!")\n    })\n\n    err := app.Listen(":3000", fiber.ListenConfig{\n        CertFile:    "ssl.cert",\n        CertKeyFile: "ssl.key",\n    })\n    if err != nil {\n        panic(err)\n    }\n}\n'})})})]}),"\n",(0,i.jsx)(n.h2,{id:"cookiejar",children:"Cookiejar"}),"\n",(0,i.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func main() {\n    jar := client.AcquireCookieJar()\n    defer client.ReleaseCookieJar(jar)\n\n    cc := client.New()\n    cc.SetCookieJar(jar)\n\n    jar.SetKeyValueBytes("httpbin.org", []byte("john"), []byte("doe"))\n\n    resp, err := cc.Get("https://httpbin.org/cookies")\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Println(string(resp.Body()))\n}\n'})}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Click here to see the result"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "cookies": {\n    "john": "doe"\n  }\n}\n'})})]}),"\n",(0,i.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func main() {\n    jar := client.AcquireCookieJar()\n    defer client.ReleaseCookieJar(jar)\n\n    cc := client.New()\n    cc.SetCookieJar(jar)\n\n    _, err := cc.Get("https://httpbin.org/cookies/set/john/doe")\n    if err != nil {\n        panic(err)\n    }\n\n    uri := fasthttp.AcquireURI()\n    defer fasthttp.ReleaseURI(uri)\n\n    uri.SetHost("httpbin.org")\n    uri.SetPath("/cookies")\n    fmt.Println(jar.Get(uri))\n}\n'})}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Click here to see the result"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"[john=doe; path=/]\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"response-2",children:"Response 2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func main() {\n    jar := client.AcquireCookieJar()\n    defer client.ReleaseCookieJar(jar)\n\n    cc := client.New()\n    cc.SetCookieJar(jar)\n\n    _, err := cc.Get("https://httpbin.org/cookies/set/john/doe")\n    if err != nil {\n        panic(err)\n    }\n\n    resp, err := cc.Get("https://httpbin.org/cookies")\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Println(resp.String())\n}\n'})}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Click here to see the result"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "cookies": {\n    "john": "doe"\n  }\n}\n'})})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},5525:function(e,n,r){r.d(n,{Z:()=>l});var t=r("85893");r("67294");var i=r("67026");let a="tabItem_Ymn6";function l(e){let{children:n,hidden:r,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a,l),hidden:r,children:n})}},47902:function(e,n,r){r.d(n,{Z:()=>v});var t=r("85893"),i=r("67294"),a=r("67026"),l=r("69599"),s=r("16550"),o=r("32000"),c=r("4520"),u=r("38341"),d=r("76009");function p(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var f=r("7227");let m="tabList__CuJ",g="tabItem_LNqP";function b(e){let{className:n,block:r,selectedValue:i,selectValue:s,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{let n=e.currentTarget,r=o[c.indexOf(n)].value;r!==i&&(u(n),s(r))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{let r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:l}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:p,onClick:d,...l,className:(0,a.Z)("tabs__item",g,l?.className,{"tabs__item--active":i===n}),children:r??n},n)})})}function x(e){let{lazy:n,children:r,selectedValue:l}=e,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===l);return e?(0,i.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function j(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,a=function(e){let{values:n,children:r}=e;return(0,i.useMemo)(()=>{let e=n??p(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[l,f]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:a})),[m,g]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r}),l=(0,c._X)(a);return[l,(0,i.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})},[a,t])]}({queryString:r,groupId:t}),[b,x]=function(e){var n;let{groupId:r}=e;let t=(n=r)?`docusaurus.tab.${n}`:null,[a,l]=(0,d.Nk)(t);return[a,(0,i.useCallback)(e=>{if(!!t)l.set(e)},[t,l])]}({groupId:t}),j=(()=>{let e=m??b;return h({value:e,tabValues:a})?e:null})();return(0,o.Z)(()=>{j&&f(j)},[j]),{selectedValue:l,selectValue:(0,i.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);f(e),g(e),x(e)},[g,x,a]),tabValues:a}}(e);return(0,t.jsxs)("div",{className:(0,a.Z)("tabs-container",m),children:[(0,t.jsx)(b,{...n,...e}),(0,t.jsx)(x,{...n,...e})]})}function v(e){let n=(0,f.Z)();return(0,t.jsx)(j,{...e,children:p(e.children)},String(n))}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return l}});var t=r(67294);let i={},a=t.createContext(i);function l(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);