"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[68693],{98723:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var t=s(74848),i=s(28453);const l={id:"scylladb",title:"ScyllaDb"},o="ScyllaDb",a={id:"scylladb/scylladb",title:"ScyllaDb",description:"Release",source:"@site/storage_versioned_docs/version-bbolt_v2.x.x/scylladb/README.md",sourceDirName:"scylladb",slug:"/scylladb/",permalink:"/storage/bbolt_v2.x.x/scylladb/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/storage/edit/main/scylladb/README.md",tags:[],version:"bbolt_v2.x.x",lastUpdatedAt:1720020621e3,frontMatter:{id:"scylladb",title:"ScyllaDb"},sidebar:"tutorialSidebar",previous:{title:"S3",permalink:"/storage/bbolt_v2.x.x/s3/"},next:{title:"SQLite3",permalink:"/storage/bbolt_v2.x.x/sqlite3/"}},r={},c=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}];function f(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=scylladb*",alt:"Release"}),"\n",(0,t.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,t.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-scylladb.yml?label=Tests",alt:"Test"}),"\n",(0,t.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,t.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,t.jsx)(n.h1,{id:"scylladb",children:"ScyllaDb"}),"\n",(0,t.jsxs)(n.p,{children:["A ScyllaDb storage engine for ",(0,t.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," using ",(0,t.jsx)(n.a,{href:"https://github.com/scylladb/gocql",children:"gocql"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"signatures",children:"Signatures"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func New(config ...Config) Storage\nfunc (s *Storage) Get(key string) ([]byte, error)\nfunc (s *Storage) Set(key string, value []byte, expire time.Duration) error\nfunc (s *Storage) Delete(key string) error\nfunc (s *Storage) Reset() error\nfunc (s *Storage) Close() error\nfunc (s *Storage) Conn() *gocql.Session\n"})}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["ScyllaDb is tested on the 2 last ",(0,t.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,t.jsx)(n.p,{children:"And then install the scylladb implementation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/scylladb\n"})}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/scylladb"\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// Initialize default config\nstore := scylladb.New()\n\n// Initialize custom config\nstore := scylladb.New(scylladb.Config{\n    Keyspace:       "fiber",\n    Hosts:          []string{"127.0.0.1"},\n    Port:           9042,\n    Table:          "fiber_storage",\n    Consistency:    "ONE",\n    Reset:          false,\n})\n\n// Initialize with support for TLS (SslOptions configures TLS use)\n//  \n//      InsecureSkipVerify and EnableHostVerification interact as follows:\n//\n//      |Config.InsecureSkipVerify | EnableHostVerification | Result             |\n//      |--------------------------|------------------------|--------------------|\n//      |Config is nil             | false                  | do not verify host |\n//      |Config is nil             | true                   | verify host        |\n//      |false                     | false                  | verify host        |\n//      |true                      | false                  | do not verify host |\n//      |false                     | true                   | verify host        |\n//      |true                      | true                   | verify host        |\nstore := New(\n    Config{\n        Keyspace:    "fiber",\n        Hosts:       []string{"127.0.0.1"},\n        Port:        9042,\n        Table:       "fiber_storage",\n        Consistency: "ONE",\n        SslOpts: &gocql.SslOptions{\n            Config: &tls.Config{\n                InsecureSkipVerify: false, // Set this too false to enable certificate verification\n            },\n                CertPath:               "/path/to/client_cert.pem", // Path to the client certificate\n                KeyPath:                "/path/to/client_key.pem",  // Path to the client certificate\'s private key\n                CaPath:                 "/path/to/ca_cert.pem",     // Path to the CA certificate\n                EnableHostVerification: true,                       // Enable hostname verification\n        },\n        Reset: false,\n    },\n)\n\n// Initialize custom config using scylladb connection\ncluster, _ := gocql.NewCluster("127.0.0.1")\ncluster.Keyspace = "fiber"\ncluster.Port = 9042\n\nsession, _ := cluster.CreateSession()\nstore := scylladb.New(scylladb.Config{\n    Session:         session,\n    Keyspace:        "fiber",\n    Table:           "fiber_storage",\n    Reset:           false,\n})\n'})}),"\n",(0,t.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'type Config struct {\n    // Session is provided by the user to use an existing ScyllaDb session\n    // Session Will override Keyspace and all other authentication values if used\n    //\n    // Optional. Default is nil\n    Session *gocql.Session\n\n    // Keyspace name\n    //\n    // Optional. Default is "fiber"\n    Keyspace string\n\n    // Hosts are an array of network addresses for establishing initial connections\n    // You have the flexibility to specify one or multiple addresses as needed\n    //\n    // Optional. Default is "127.0.0.1"\n    Hosts []string\n\n    // Port where the ScyllaDb cluster is listening on\n    //\n    // Optional. Default is 9042\n    Port int\n\n    // Username for ScyllaDb cluster\n    //\n    // Optional. Default is ""\n    Username string\n\n    // Password for ScyllaDb cluster\n    //\n    // Optional. Default is ""\n    Password string\n\n    // Table name\n    //\n    // Optional. Default is "fiber_storage"\n    Table string\n\n    // Level of the consistency\n    //\n    // Optional. Default is "LOCAL_ONE"\n    Consistency string\n\n    // SslOpts configures TLS use.\n    //\n    // Optional. Default is nil\n    SslOpts *gocql.SslOptions\n    \n    // Reset clears any existing keys in existing Table\n    //\n    // Optional. Default is false\n    Reset bool\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"default-config",children:"Default Config"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// ConfigDefault is the default config\nvar ConfigDefault = Config{\n    Session:     nil,\n    Keyspace:    "fiber",\n    Hosts:       []string{"127.0.0.1"},\n    Username:    "",\n    Password:    "",\n    Port:        9042,\n    Table:       "fiber_storage",\n    Consistency: "LOCAL_ONE",\n    SslOpts:     nil,\n    Reset:       false,\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const i={},l=t.createContext(i);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);