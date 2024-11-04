"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[40877],{36630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"clickhouse/README","title":"Clickhouse","description":"A Clickhouse storage driver using https://github.com/ClickHouse/clickhouse-go.","source":"@site/docs/storage/clickhouse/README.md","sourceDirName":"clickhouse","slug":"/clickhouse/","permalink":"/storage/next/clickhouse/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/storage/edit/main/clickhouse/README.md","tags":[],"version":"current","lastUpdatedAt":1730726092000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Bbolt","permalink":"/storage/next/bbolt/"},"next":{"title":"Cloudflare KV","permalink":"/storage/next/cloudflarekv/"}}');var s=t(74848),i=t(28453);const l={},r="Clickhouse",a={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Running the tests",id:"running-the-tests",level:3},{value:"Local development",id:"local-development",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"clickhouse",children:"Clickhouse"})}),"\n",(0,s.jsxs)(n.p,{children:["A Clickhouse storage driver using ",(0,s.jsx)(n.a,{href:"https://github.com/ClickHouse/clickhouse-go",children:"https://github.com/ClickHouse/clickhouse-go"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) (*Storage, error)\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *Session\n"})}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.p,{children:"Clickhouse is supported on the latest two versions of Go:"}),"\n",(0,s.jsx)(n.p,{children:"Install the clickhouse implementation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/clickhouse\n"})}),"\n",(0,s.jsx)(n.h3,{id:"running-the-tests",children:"Running the tests"}),"\n",(0,s.jsxs)(n.p,{children:["This module uses ",(0,s.jsx)(n.a,{href:"https://github.com/testcontainers/testcontainers-go/",children:"Testcontainers for Go"})," to run integration tests, which will start a local instance of Clickhouse as a Docker container under the hood. To run the tests, you must have Docker (or another container runtime 100% compatible with the Docker APIs) installed on your machine."]}),"\n",(0,s.jsx)(n.h3,{id:"local-development",children:"Local development"}),"\n",(0,s.jsx)(n.p,{children:"Before running this implementation, you must ensure a Clickhouse cluster is available.\nFor local development, we recommend using the Clickhouse Docker image; it contains everything\nnecessary for the client to operate correctly."}),"\n",(0,s.jsx)(n.p,{children:"To start Clickhouse using Docker, issue the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run -d -p 9000:9000 --name some-clickhouse-server --ulimit nofile=262144:262144 clickhouse/clickhouse-server\n"})}),"\n",(0,s.jsx)(n.p,{children:"After running this command you're ready to start using the storage and connecting to the database."}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"You can use the following options to create a clickhouse storage driver:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/clickhouse"\n\n// Initialize default config, to connect to localhost:9000 using the memory engine and with a clean table.\nstore, err := clickhouse.New(clickhouse.Config{\n    Host: "localhost",\n    Port: 9000,\n    Clean: true,\n})\n\n// Initialize custom config to connect to a different host/port and use custom engine and with clean table.\nstore, err := clickhouse.New(clickhouse.Config{\n    Host: "some-ip-address",\n    Port: 9000,\n    Engine: clickhouse.MergeTree,\n    Clean: true,\n})\n\n// Initialize to connect with TLS enabled with your own tls.Config and with clean table.\ntlsConfig := config := &tls.Config{...}\n\nstore, err := clickhouse.New(clickhouse.Config{\n    Host: "some-ip-address",\n    Port: 9000,\n    Clean: true,\n    TLSConfig: tlsConfig,\n})\n'})}),"\n",(0,s.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// Config defines configuration options for Clickhouse connection.\ntype Config struct {\n    // The host of the database. Ex: 127.0.0.1\n    Host string\n    // The port where the database is supposed to listen to. Ex: 9000\n    Port int\n    // The database that the connection should authenticate from\n    Database string\n    // The username to be used in the authentication\n    Username string\n    // The password to be used in the authentication\n    Password string\n    // The name of the table that will store the data\n    Table string\n    // The engine that should be used in the table\n    Engine string\n    // Should start a clean table, default false\n    Clean bool\n    // TLS configuration, default nil\n    TLSConfig *tls.Config\n    // Should the connection be in debug mode, default false\n    Debug bool\n    // The function to use with the debug config, default print function. It only works when debug is true\n    Debugf func(format string, v ...any)\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'var DefaultConfig = Config{\n    Host:      "localhost",\n    Port:      9000,\n    Engine:    "Memory",\n    Clean:     false,\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var o=t(96540);const s={},i=o.createContext(s);function l(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);