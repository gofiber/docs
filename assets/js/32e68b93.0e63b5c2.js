"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["37824"],{96296:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>f,assets:()=>d,toc:()=>a,frontMatter:()=>o});var r=JSON.parse('{"id":"guide/faster-fiber","title":"\u26A1 Make Fiber Faster","description":"Custom JSON Encoder/Decoder","source":"@site/docs/core/guide/faster-fiber.md","sourceDirName":"guide","slug":"/guide/faster-fiber","permalink":"/next/guide/faster-fiber","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/guide/faster-fiber.md","tags":[],"version":"current","lastUpdatedAt":1735889916000,"sidebarPosition":7,"frontMatter":{"id":"faster-fiber","title":"\u26A1 Make Fiber Faster","sidebar_position":7},"sidebar":"left_sidebar","previous":{"title":"\uD83D\uDD0E Validation","permalink":"/next/guide/validation"},"next":{"title":"\uD83E\uDDF0 Utils","permalink":"/next/guide/utils"}}'),t=i("85893"),s=i("50065");let o={id:"faster-fiber",title:"\u26A1 Make Fiber Faster",sidebar_position:7},c=void 0,d={},a=[{value:"Custom JSON Encoder/Decoder",id:"custom-json-encoderdecoder",level:2},{value:"References",id:"references",level:3}];function l(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"custom-json-encoderdecoder",children:"Custom JSON Encoder/Decoder"}),"\n",(0,t.jsxs)(n.p,{children:["Since Fiber v2.32.0, we have adopted ",(0,t.jsx)(n.code,{children:"encoding/json"})," as the default JSON library for its stability and reliability. However, the standard library can be slower than some third-party alternatives. If you find the performance of ",(0,t.jsx)(n.code,{children:"encoding/json"})," unsatisfactory, we suggest considering these libraries:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/goccy/go-json",children:"goccy/go-json"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/bytedance/sonic",children:"bytedance/sonic"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/segmentio/encoding",children:"segmentio/encoding"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/minio/simdjson-go",children:"minio/simdjson-go"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'package main\n\nimport "github.com/gofiber/fiber/v3"\nimport "github.com/goccy/go-json"\n\nfunc main() {\n    app := fiber.New(fiber.Config{\n        JSONEncoder: json.Marshal,\n        JSONDecoder: json.Unmarshal,\n    })\n\n    # ...\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/client/rest#setjsonmarshal",children:"Set custom JSON encoder for client"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/client/rest#setjsonunmarshal",children:"Set custom JSON decoder for client"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/api/fiber#jsonencoder",children:"Set custom JSON encoder for application"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/next/api/fiber#jsondecoder",children:"Set custom JSON decoder for application"})}),"\n"]})]})}function f(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return o}});var r=i(67294);let t={},s=r.createContext(t);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);