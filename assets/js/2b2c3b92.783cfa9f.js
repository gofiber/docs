"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["43006"],{60911:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>a,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"neo4j/neo4j","title":"Neo4j","description":"Release","source":"@site/storage_versioned_docs/version-leveldb_v0.x.x/neo4j/README.md","sourceDirName":"neo4j","slug":"/neo4j/","permalink":"/docs/storage/leveldb_v0.x.x/neo4j/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/storage/edit/main/neo4j/README.md","tags":[],"version":"leveldb_v0.x.x","lastUpdatedAt":1744830196000,"frontMatter":{"id":"neo4j","title":"Neo4j"},"sidebar":"left_sidebar","previous":{"title":"Nats","permalink":"/docs/storage/leveldb_v0.x.x/nats/"},"next":{"title":"Pebble","permalink":"/docs/storage/leveldb_v0.x.x/pebble/"}}'),o=t("85893"),s=t("50065");let r={id:"neo4j",title:"Neo4j"},l=void 0,a={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"A note on Authentication",id:"a-note-on-authentication",level:4},{value:"Default Config",id:"default-config",level:3}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=neo4j*",alt:"Release"}),"\n",(0,o.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,o.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,o.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-neo4j.yml?label=Tests",alt:"Test"}),"\n",(0,o.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,o.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,o.jsxs)(n.p,{children:["A Neo4j storage driver using ",(0,o.jsx)(n.a,{href:"https://github.com/neo4j/neo4j-go-driver",children:"neo4j/neo4j-go-driver"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Note: Requires latest two releases of Golang"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) *Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() neo4j.DriverWithContext\n"})}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.p,{children:["Neo4j is tested on the 2 last ",(0,o.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,o.jsx)(n.p,{children:"And then install the neo4j implementation:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/neo4j\n"})}),"\n",(0,o.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/neo4j"\n'})}),"\n",(0,o.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"neo4j"})," package name used in this example is the package name (and default import name) for this storage driver. Feel free import it with a custom name to avoid confusing it with the neo4j-go-driver package which also uses ",(0,o.jsx)(n.code,{children:"neo4j"})," as package name (and default import name)."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// Initialize default config\nstore := neo4j.New()\n\n// Initialize custom config\nstore := neo4j.New(neo4j.Config{\n DB:              driver,\n Node:            "fiber_storage",\n Reset:           false,\n GCInterval:      10 * time.Second,\n})\n'})}),"\n",(0,o.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"neo4j"}),", ",(0,o.jsx)(n.code,{children:"auth"}),", and ",(0,o.jsx)(n.code,{children:"config"})," package names used here belong to the neo4j-go-driver package."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// Config defines the config for storage.\ntype Config struct {\n // Connection pool\n //\n // DB neo4j.DriverWithContext object will override connection URI and other connection fields.\n //\n // Optional. Default is nil.\n DB neo4j.DriverWithContext\n\n // Target Server\n //\n // Optional. Default is "neo4j://localhost"\n URI string\n\n // Connection authentication\n //\n // Auth auth.TokenManager will override Username and Password fields\n //\n // Optional. Default is nil.\n Auth auth.TokenManager\n\n // Connection configurations\n //\n // Optional. Default is nil\n Configurations []func(*config.Config)\n\n // Server username\n //\n // Optional. Default is ""\n Username string\n\n // Server password\n //\n // Optional. Default is ""\n Password string\n\n // Node name\n //\n // Optional. Default is "fiber_storage"\n Node string\n\n // Reset clears any existing keys (Nodes)\n //\n // Optional. Default is false\n Reset bool\n\n // Time before deleting expired keys (Nodes)\n //\n // Optional. Default is 10 * time.Second\n GCInterval time.Duration\n}\n'})}),"\n",(0,o.jsx)(n.h4,{id:"a-note-on-authentication",children:"A note on Authentication"}),"\n",(0,o.jsx)(n.p,{children:"If auth is enabled on your server, then authentication must be provided in one of the three ways (the previous overrides the next):"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Via the connection pool, ",(0,o.jsx)(n.code,{children:"neo4j.DriverWithContext"}),", provided on the ",(0,o.jsx)(n.code,{children:"DB"})," field."]}),"\n",(0,o.jsxs)(n.li,{children:["Via the ",(0,o.jsx)(n.code,{children:"Auth"})," field: it must be an ",(0,o.jsx)(n.code,{children:"auth.TokenManager"})," whose value is any one but ",(0,o.jsx)(n.code,{children:"neo4j.NoAuth()"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["By setting both ",(0,o.jsx)(n.code,{children:"Username"})," and ",(0,o.jsx)(n.code,{children:"Password"})," fields: This will cause this storage driver to use Basic Auth."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Otherwise, your neo4j driver will panic with authorization error."}),"\n",(0,o.jsx)(n.p,{children:"In contrast, if auth is disabled on your server, there's no need to provide any authentication parameter."}),"\n",(0,o.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,o.jsx)(n.p,{children:"Used only for optional fields"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'var ConfigDefault = Config{\n URI: "neo4j://localhost",\n Node:          "fiber_storage",\n Reset:         false,\n GCInterval:    10 * time.Second,\n}\n'})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var i=t(67294);let o={},s=i.createContext(o);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);