"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[90951],{52380:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=o(74848),r=o(28453);const s={},i="Coherence",c={id:"coherence/README",title:"Coherence",description:"A Coherence storage driver using https://github.com/oracle/coherence-go-client.",source:"@site/storage_versioned_docs/version-coherence_v0.x.x/coherence/README.md",sourceDirName:"coherence",slug:"/coherence/",permalink:"/storage/coherence_v0.x.x/coherence/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/storage/edit/main/coherence/README.md",tags:[],version:"coherence_v0.x.x",lastUpdatedAt:1721372462e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bbolt",permalink:"/storage/coherence_v0.x.x/bbolt/"},next:{title:"Couchbase",permalink:"/storage/coherence_v0.x.x/couchbase/"}},l={},a=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"coherence",children:"Coherence"}),"\n",(0,t.jsxs)(n.p,{children:["A Coherence storage driver using ",(0,t.jsx)(n.a,{href:"https://github.com/oracle/coherence-go-client",children:"https://github.com/oracle/coherence-go-client"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) (*Storage, error)\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *Session\n"})}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"Coherence is supported on Go versions 1.19 and above:"}),"\n",(0,t.jsx)(n.p,{children:"Install the coherence implementation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/coherence\n"})}),"\n",(0,t.jsx)(n.p,{children:"Before running or testing this implementation, you must ensure a Coherence cluster is available.\nFor local development, we recommend using the Coherence CE Docker image; it contains everything\nnecessary for the client to operate correctly."}),"\n",(0,t.jsx)(n.p,{children:"To start a Coherence cluster using Docker, issue the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run -d -p 1408:1408 ghcr.io/oracle/coherencestore-ce:22.06.5\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See the documentation ",(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/oracle/coherence-go-client/coherence#hdr-Obtaining_a_Session",children:"here"})," on connection options\nwhen creating a Coherence session."]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/coherence"\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// Initialize default config, to connect to localhost:1408 using plain text\nstore, err := coherence.New()\n\n// Initialize custom config to connect to a different host/port and use plaint ext.\nstore, err := coherence.New(coherence.Config{\n    Address: "my-host:myport",\n})\n\n// Initialize to connect with TLS enabled with your own tls.Config\ntlsConfig := config := &tls.Config{...}\n\nstore, err := coherence.New(coherence.Config{\n    Address: "my-host:myport",\n    TLSConfig: tlsConfig,\n})\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Note: If you create two stores using ",(0,t.jsx)(n.code,{children:"coherence.New()"})," they will effectivity be idential.\nIf you wish to have two separate stores, then you can use:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'store1, err := coherence.New(Config{ScopeName: "scope1"})\nstore2, err := coherence.New(Config{ScopeName: "scope2"})\n'})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// Config defines configuration options for Coherence connection.\ntype Config struct {\n    // Address to connect to, defaults to "localhost:1408"\n    Address string\n\n    // Timeout is the default session timeout to connect to Coherence, defaults to 30s\n    Timeout time.Duration\n\t\n    // ScopeName defines a scope allowing for multiple storage sessions\n    ScopeName string\n\n    // Reset indicates if the store should be reset after being created\n    Reset bool\n\n    // TLSConfig specifies tls.Config to use when connecting, if nil then plain text is used \n    TLSConfig *tls.Config\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'var DefaultConfig = Config{\n    Address:   "localhost:1408",\n    Timeout:   time.Duration(30) * time.Millisecond,\n    ScopeName: defaultScopeName,\n    Reset:     false,\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var t=o(96540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);