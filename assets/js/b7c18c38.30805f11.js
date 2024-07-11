"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[37996],{35784:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(74848),o=t(28453);const r={id:"mockstorage",title:"MockStorage"},i=void 0,a={id:"mockstorage/mockstorage",title:"MockStorage",description:"Release",source:"@site/storage_versioned_docs/version-couchbase_v2.x.x/mockstorage/README.md",sourceDirName:"mockstorage",slug:"/mockstorage/",permalink:"/storage/couchbase_v2.x.x/mockstorage/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/storage/edit/main/mockstorage/README.md",tags:[],version:"couchbase_v2.x.x",lastUpdatedAt:1720707448e3,frontMatter:{id:"mockstorage",title:"MockStorage"},sidebar:"tutorialSidebar",previous:{title:"Minio",permalink:"/storage/couchbase_v2.x.x/minio/"},next:{title:"MongoDB",permalink:"/storage/couchbase_v2.x.x/mongodb/"}},l={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Structs",id:"structs",level:3},{value:"Functions",id:"functions",level:3},{value:"Installation",id:"installation",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/storage?filter=mockstorage*",alt:"Release"}),"\n",(0,s.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mockstorage.yml?label=Tests",alt:"Test"}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/gosec.yml?label=Security",alt:"Security"}),"\n",(0,s.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/linter.yml?label=Linter",alt:"Linter"})]}),"\n",(0,s.jsx)(n.p,{children:"A mock storage implementation for Fiber. This storage is not persistent and is only used for testing purposes."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note: Requires Go 1.21 and above"})}),"\n",(0,s.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#signatures",children:"Signatures"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#config",children:"Config"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#default-config",children:"Default Config"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"signatures",children:"Signatures"}),"\n",(0,s.jsx)(n.h3,{id:"structs",children:"Structs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"type Storage struct {\n    // contains filtered or unexported fields\n}\n\ntype Entry struct {\n    Value []byte\n    Exp   time.Time\n}\n\ntype Config struct {\n    CustomFuncs *CustomFuncs\n}\n\ntype CustomFuncs struct {\n    GetFunc    func(key string) ([]byte, error)\n    SetFunc    func(key string, val []byte, exp time.Duration) error\n    DeleteFunc func(key string) error\n    ResetFunc  func() error\n    CloseFunc  func() error\n    ConnFunc   func() map[string]Entry\n    KeysFunc   func() ([][]byte, error)\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// New creates a new Storage instance. You can optionally pass a Config.\nfunc New(config ...Config) *Storage\n\n// Get retrieves the value associated with the given key.\nfunc (s *Storage) Get(key string) ([]byte, error)\n\n// Set sets the value for the given key, with an optional expiration duration.\nfunc (s *Storage) Set(key string, val []byte, exp time.Duration) error\n\n// Delete removes the value associated with the given key.\nfunc (s *Storage) Delete(key string) error\n\n// Reset clears all values from the storage.\nfunc (s *Storage) Reset() error\n\n// Close performs any necessary cleanup when the storage is no longer needed.\nfunc (s *Storage) Close() error\n\n// Conn returns a copy of the current state of the storage.\nfunc (s *Storage) Conn() map[string]Entry\n\n// Keys returns a list of all keys in the storage.\nfunc (s *Storage) Keys() ([][]byte, error)\n\n// SetCustomFuncs allows you to set custom functions for the storage operations.\nfunc (s *Storage) SetCustomFuncs(custom *CustomFuncs)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["MockStorage is tested on the 2 last ",(0,s.jsx)(n.a,{href:"https://golang.org/dl/",children:"Go versions"})," with support for modules. So make sure to initialize one first if you didn't do that yet:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go mod init github.com/<user>/<repo>\n"})}),"\n",(0,s.jsx)(n.p,{children:"And then install the mockstorage implementation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go get github.com/gofiber/storage/mockstorage\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Import the storage package."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/storage/mockstorage"\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can use the following possibilities to create a storage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// Initialize default config\nstore := mockstorage.New()\n\n// Set a value in the storage.\nerr := store.Set("key1", []byte("value1"), 0)\nif err != nil {\n    // handle error\n}\n\n// Get a value from the storage.\nval, err := store.Get("key1")\nif err != nil {\n    // handle error\n}\nfmt.Println(string(val)) // prints "value1"\n\n// Delete a value from the storage.\nerr = store.Delete("key1")\nif err != nil {\n\t// handle error\n}\n\n// Mocking storage operations in tests:\nfunc TestMyFunction(t *testing.T) {\n    // Create a new instance of MockStorage\n    store := mockstorage.New()\n\n    // Mock the Set function\n    store.SetCustomFuncs(&mockstorage.CustomFuncs{\n        Set: func(key string, val []byte, exp time.Duration) error {\n            if key == "expectedKey" && string(val) == "expectedValue" {\n                return nil\n            }\n            return errors.New("unexpected key or value")\n        },\n    })\n\n    // Call the function you want to test, which should call store.Set\n    err := MyFunction(store)\n\n    // Check that the function behaved as expected\n    if err != nil {\n        t.Errorf("MyFunction returned an error: %v", err)\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," In the ",(0,s.jsx)(n.code,{children:"mockstorage"})," package, expiration of data is not handled automatically in the background. The data is only marked as expired and removed when you attempt to ",(0,s.jsx)(n.code,{children:"Get()"})," it after its expiration time. If you're using a custom ",(0,s.jsx)(n.code,{children:"Get()"})," function or accessing the data directly using the ",(0,s.jsx)(n.code,{children:"Conn()"})," function, expired data will not be removed. Keep this in mind when writing your tests."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"type Config struct {\n\tCustomFuncs *CustomFuncs\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"default-config",children:"Default Config"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"var ConfigDefault = Config{\n\tCustomFuncs: &CustomFuncs{\n\t\tGetFunc:    nil,\n\t\tSetFunc:    nil,\n\t\tDeleteFunc: nil,\n\t\tResetFunc:  nil,\n\t\tCloseFunc:  nil,\n\t\tConnFunc:   nil,\n\t\tKeysFunc:   nil,\n\t},\n}\n"})})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(96540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);