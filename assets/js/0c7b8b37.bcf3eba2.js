"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["7982"],{60680:function(e,n,o){o.r(n),o.d(n,{default:()=>d,frontMatter:()=>s,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>c});var t=JSON.parse('{"id":"coherence/README","title":"Coherence","description":"A Coherence storage driver using https://github.com/oracle/coherence-go-client.","source":"@site/storage_versioned_docs/version-coherence_v0.x.x/coherence/README.md","sourceDirName":"coherence","slug":"/coherence/","permalink":"/storage/coherence_v0.x.x/coherence/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/storage/edit/main/coherence/README.md","tags":[],"version":"coherence_v0.x.x","lastUpdatedAt":1743510804000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Bbolt","permalink":"/storage/coherence_v0.x.x/bbolt/"},"next":{"title":"Couchbase","permalink":"/storage/coherence_v0.x.x/couchbase/"}}'),r=o("85893"),i=o("50065");let s={},c="Coherence",l={},a=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"coherence",children:"Coherence"})}),"\n",(0,r.jsxs)(n.p,{children:["A Coherence storage driver using ",(0,r.jsx)(n.a,{href:"https://github.com/oracle/coherence-go-client",children:"https://github.com/oracle/coherence-go-client"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) (*Storage, error)\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *Session\n"})}),"\n",(0,r.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.p,{children:"Coherence is supported on Go versions 1.19 and above:"}),"\n",(0,r.jsx)(n.p,{children:"Install the coherence implementation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/coherence\n"})}),"\n",(0,r.jsx)(n.p,{children:"Before running or testing this implementation, you must ensure a Coherence cluster is available.\nFor local development, we recommend using the Coherence CE Docker image; it contains everything\nnecessary for the client to operate correctly."}),"\n",(0,r.jsx)(n.p,{children:"To start a Coherence cluster using Docker, issue the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -d -p 1408:1408 ghcr.io/oracle/coherencestore-ce:22.06.5\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See the documentation ",(0,r.jsx)(n.a,{href:"https://pkg.go.dev/github.com/oracle/coherence-go-client/coherence#hdr-Obtaining_a_Session",children:"here"})," on connection options\nwhen creating a Coherence session."]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/coherence"\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// Initialize default config, to connect to localhost:1408 using plain text\nstore, err := coherence.New()\n\n// Initialize custom config to connect to a different host/port and use plaint ext.\nstore, err := coherence.New(coherence.Config{\n    Address: "my-host:myport",\n})\n\n// Initialize to connect with TLS enabled with your own tls.Config\ntlsConfig := config := &tls.Config{...}\n\nstore, err := coherence.New(coherence.Config{\n    Address: "my-host:myport",\n    TLSConfig: tlsConfig,\n})\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Note: If you create two stores using ",(0,r.jsx)(n.code,{children:"coherence.New()"})," they will effectivity be idential.\nIf you wish to have two separate stores, then you can use:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'store1, err := coherence.New(Config{ScopeName: "scope1"})\nstore2, err := coherence.New(Config{ScopeName: "scope2"})\n'})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// Config defines configuration options for Coherence connection.\ntype Config struct {\n    // Address to connect to, defaults to "localhost:1408"\n    Address string\n\n    // Timeout is the default session timeout to connect to Coherence, defaults to 30s\n    Timeout time.Duration\n	\n    // ScopeName defines a scope allowing for multiple storage sessions\n    ScopeName string\n\n    // Reset indicates if the store should be reset after being created\n    Reset bool\n\n    // TLSConfig specifies tls.Config to use when connecting, if nil then plain text is used \n    TLSConfig *tls.Config\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'var DefaultConfig = Config{\n    Address:   "localhost:1408",\n    Timeout:   time.Duration(30) * time.Millisecond,\n    ScopeName: defaultScopeName,\n    Reset:     false,\n}\n'})})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return c},a:function(){return s}});var t=o(67294);let r={},i=t.createContext(r);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);