"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["48587"],{51342:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>s});var r=JSON.parse('{"id":"guide/faster-fiber","title":"\u26A1 Make Fiber Faster","description":"Custom JSON Encoder/Decoder","source":"@site/versioned_docs/version-v2.x/guide/faster-fiber.md","sourceDirName":"guide","slug":"/guide/faster-fiber","permalink":"/guide/faster-fiber","draft":false,"unlisted":false,"tags":[],"version":"v2.x","lastUpdatedAt":1738624341000,"sidebarPosition":7,"frontMatter":{"id":"faster-fiber","title":"\u26A1 Make Fiber Faster","sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"\uD83C\uDFA3 Hooks","permalink":"/guide/hooks"},"next":{"title":"Extra","permalink":"/category/extra"}}'),t=i("85893"),o=i("50065");let s={id:"faster-fiber",title:"\u26A1 Make Fiber Faster",sidebar_position:7},c=void 0,a={},d=[{value:"Custom JSON Encoder/Decoder",id:"custom-json-encoderdecoder",level:2},{value:"References",id:"references",level:3}];function l(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"custom-json-encoderdecoder",children:"Custom JSON Encoder/Decoder"}),"\n",(0,t.jsxs)(n.p,{children:["Since Fiber v2.32.0, we use ",(0,t.jsx)(n.strong,{children:"encoding/json"})," as default json library due to stability and producibility. However, the standard library is a bit slow compared to 3rd party libraries. If you're not happy with the performance of ",(0,t.jsx)(n.strong,{children:"encoding/json"}),", we recommend you to use these libraries:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/goccy/go-json",children:"goccy/go-json"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/bytedance/sonic",children:"bytedance/sonic"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/segmentio/encoding",children:"segmentio/encoding"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/mailru/easyjson",children:"mailru/easyjson"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/minio/simdjson-go",children:"minio/simdjson-go"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/wI2L/jettison",children:"wI2L/jettison"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'package main\n\nimport "github.com/gofiber/fiber/v2"\nimport "github.com/goccy/go-json"\n\nfunc main() {\n	app := fiber.New(fiber.Config{\n		JSONEncoder: json.Marshal,\n		JSONDecoder: json.Unmarshal,\n	})\n\n	# ...\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/client#jsonencoder",children:"Set custom JSON encoder for client"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/client#jsondecoder",children:"Set custom JSON decoder for client"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/fiber#config",children:"Set custom JSON encoder for application"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/fiber#config",children:"Set custom JSON decoder for application"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return s}});var r=i(67294);let t={},o=r.createContext(t);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);