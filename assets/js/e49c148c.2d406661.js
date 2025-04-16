"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["53708"],{19672:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>a,assets:()=>c,toc:()=>o,contentTitle:()=>l});var a=JSON.parse('{"id":"api/state","title":"\uD83D\uDDC2\uFE0F State Management","description":"The State Management provides a global key\u2013value store for managing application dependencies and runtime data. This store is shared across the entire application and remains consistent between requests. It is implemented using Go\u2019s sync.Map to ensure safe concurrent access.","source":"@site/docs/core/api/state.md","sourceDirName":"api","slug":"/api/state","permalink":"/docs/next/api/state","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/api/state.md","tags":[],"version":"current","lastUpdatedAt":1744830196000,"sidebarPosition":8,"frontMatter":{"id":"state","title":"\uD83D\uDDC2\uFE0F State Management","sidebar_position":8},"sidebar":"left_sidebar","previous":{"title":"\uD83C\uDFA3 Hooks","permalink":"/docs/next/api/hooks"},"next":{"title":"\uD83D\uDCCB Constants","permalink":"/docs/next/api/constants"}}'),i=t("85893"),r=t("50065");let s={id:"state",title:"\uD83D\uDDC2\uFE0F State Management",sidebar_position:8},l=void 0,c={},o=[{value:"State Type",id:"state-type",level:2},{value:"Definition",id:"definition",level:3},{value:"Methods on State",id:"methods-on-state",level:2},{value:"Set",id:"set",level:3},{value:"Get",id:"get",level:3},{value:"MustGet",id:"mustget",level:3},{value:"Has",id:"has",level:3},{value:"Delete",id:"delete",level:3},{value:"Reset",id:"reset",level:3},{value:"Keys",id:"keys",level:3},{value:"Len",id:"len",level:3},{value:"GetString",id:"getstring",level:3},{value:"GetInt",id:"getint",level:3},{value:"GetBool",id:"getbool",level:3},{value:"GetFloat64",id:"getfloat64",level:3},{value:"GetUint",id:"getuint",level:3},{value:"GetInt8",id:"getint8",level:3},{value:"GetInt16",id:"getint16",level:3},{value:"GetInt32",id:"getint32",level:3},{value:"GetInt64",id:"getint64",level:3},{value:"GetUint8",id:"getuint8",level:3},{value:"GetUint16",id:"getuint16",level:3},{value:"GetUint32",id:"getuint32",level:3},{value:"GetUint64",id:"getuint64",level:3},{value:"GetUintptr",id:"getuintptr",level:3},{value:"GetFloat32",id:"getfloat32",level:3},{value:"GetComplex64",id:"getcomplex64",level:3},{value:"GetComplex128",id:"getcomplex128",level:3},{value:"Generic Functions",id:"generic-functions",level:2},{value:"GetState",id:"getstate",level:3},{value:"MustGetState",id:"mustgetstate",level:3},{value:"GetStateWithDefault",id:"getstatewithdefault",level:3},{value:"Comprehensive Examples",id:"comprehensive-examples",level:2},{value:"Example: Request Counter",id:"example-request-counter",level:3},{value:"Example: Environment\u2013Specific Configuration",id:"example-environmentspecific-configuration",level:3},{value:"Example: Dependency Injection with State Management",id:"example-dependency-injection-with-state-management",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The State Management provides a global key\u2013value store for managing application dependencies and runtime data. This store is shared across the entire application and remains consistent between requests. It is implemented using Go\u2019s ",(0,i.jsx)(n.code,{children:"sync.Map"})," to ensure safe concurrent access."]}),"\n",(0,i.jsx)(n.h2,{id:"state-type",children:"State Type"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"State"})," is a key\u2013value store built on top of ",(0,i.jsx)(n.code,{children:"sync.Map"}),". It allows storage and retrieval of dependencies and configurations in a Fiber application as well as thread\u2013safe access to runtime data."]}),"\n",(0,i.jsx)(n.h3,{id:"definition",children:"Definition"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// State is a key\u2013value store for Fiber's app, used as a global storage for the app's dependencies.\n// It is a thread\u2013safe implementation of a map[string]any, using sync.Map.\ntype State struct {\n    dependencies sync.Map\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"methods-on-state",children:"Methods on State"}),"\n",(0,i.jsx)(n.h3,{id:"set",children:"Set"}),"\n",(0,i.jsx)(n.p,{children:"Set adds or updates a key\u2013value pair in the State."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// Set adds or updates a key\u2013value pair in the State.\nfunc (s *State) Set(key string, value any)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'app.State().Set("appName", "My Fiber App")\n'})}),"\n",(0,i.jsx)(n.h3,{id:"get",children:"Get"}),"\n",(0,i.jsx)(n.p,{children:"Get retrieves a value from the State."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) Get(key string) (any, bool)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'value, ok := app.State().Get("appName")\nif ok {\n    fmt.Println("App Name:", value)\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"mustget",children:"MustGet"}),"\n",(0,i.jsx)(n.p,{children:"MustGet retrieves a value from the State and panics if the key is not found."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) MustGet(key string) any\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'appName := app.State().MustGet("appName")\nfmt.Println("App Name:", appName)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"has",children:"Has"}),"\n",(0,i.jsx)(n.p,{children:"Has checks if a key exists in the State."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"s',children:"func (s *State) Has(key string) bool\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'if app.State().Has("appName") {\n    fmt.Println("App Name is set.")\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"delete",children:"Delete"}),"\n",(0,i.jsx)(n.p,{children:"Delete removes a key\u2013value pair from the State."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) Delete(key string)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'app.State().Delete("obsoleteKey")\n'})}),"\n",(0,i.jsx)(n.h3,{id:"reset",children:"Reset"}),"\n",(0,i.jsx)(n.p,{children:"Reset removes all keys from the State."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) Reset()\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"app.State().Reset()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keys",children:"Keys"}),"\n",(0,i.jsx)(n.p,{children:"Keys returns a slice containing all keys present in the State."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) Keys() []string\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'keys := app.State().Keys()\nfmt.Println("State Keys:", keys)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"len",children:"Len"}),"\n",(0,i.jsx)(n.p,{children:"Len returns the number of keys in the State."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// Len returns the number of keys in the State.\nfunc (s *State) Len() int\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'fmt.Printf("Total State Entries: %d\\n", app.State().Len())\n'})}),"\n",(0,i.jsx)(n.h3,{id:"getstring",children:"GetString"}),"\n",(0,i.jsx)(n.p,{children:"GetString retrieves a string value from the State. It returns the string and a boolean indicating a successful type assertion."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) GetString(key string) (string, bool)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'if appName, ok := app.State().GetString("appName"); ok {\n    fmt.Println("App Name:", appName)\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"getint",children:"GetInt"}),"\n",(0,i.jsx)(n.p,{children:"GetInt retrieves an integer value from the State. It returns the int and a boolean indicating a successful type assertion."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) GetInt(key string) (int, bool)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'if count, ok := app.State().GetInt("userCount"); ok {\n    fmt.Printf("User Count: %d\\n", count)\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"getbool",children:"GetBool"}),"\n",(0,i.jsx)(n.p,{children:"GetBool retrieves a boolean value from the State. It returns the bool and a boolean indicating a successful type assertion."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) GetBool(key string) (value, bool)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'if debug, ok := app.State().GetBool("debugMode"); ok {\n    fmt.Printf("Debug Mode: %v\\n", debug)\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"getfloat64",children:"GetFloat64"}),"\n",(0,i.jsx)(n.p,{children:"GetFloat64 retrieves a float64 value from the State. It returns the float64 and a boolean indicating a successful type assertion."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) GetFloat64(key string) (float64, bool)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:'if ratio, ok := app.State().GetFloat64("scalingFactor"); ok {\n    fmt.Printf("Scaling Factor: %f\\n", ratio)\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"getuint",children:"GetUint"}),"\n",(0,i.jsxs)(n.p,{children:["GetUint retrieves a ",(0,i.jsx)(n.code,{children:"uint"})," value from the State."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) GetUint(key string) (uint, bool)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'if val, ok := app.State().GetUint("maxConnections"); ok {\n    fmt.Printf("Max Connections: %d\\n", val)\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"getint8",children:"GetInt8"}),"\n",(0,i.jsxs)(n.p,{children:["GetInt8 retrieves an ",(0,i.jsx)(n.code,{children:"int8"})," value from the State."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) GetInt8(key string) (int8, bool)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'if val, ok := app.State().GetInt8("threshold"); ok {\n    fmt.Printf("Threshold: %d\\n", val)\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"getint16",children:"GetInt16"}),"\n",(0,i.jsxs)(n.p,{children:["GetInt16 retrieves an ",(0,i.jsx)(n.code,{children:"int16"})," value from the State."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) GetInt16(key string) (int16, bool)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'if val, ok := app.State().GetInt16("minValue"); ok {\n    fmt.Printf("Minimum Value: %d\\n", val)\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"getint32",children:"GetInt32"}),"\n",(0,i.jsxs)(n.p,{children:["GetInt32 retrieves an ",(0,i.jsx)(n.code,{children:"int32"})," value from the State."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) GetInt32(key string) (int32, bool)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'if val, ok := app.State().GetInt32("portNumber"); ok {\n    fmt.Printf("Port Number: %d\\n", val)\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"getint64",children:"GetInt64"}),"\n",(0,i.jsxs)(n.p,{children:["GetInt64 retrieves an ",(0,i.jsx)(n.code,{children:"int64"})," value from the State."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) GetInt64(key string) (int64, bool)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'if val, ok := app.State().GetInt64("fileSize"); ok {\n    fmt.Printf("File Size: %d\\n", val)\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"getuint8",children:"GetUint8"}),"\n",(0,i.jsxs)(n.p,{children:["GetUint8 retrieves a ",(0,i.jsx)(n.code,{children:"uint8"})," value from the State."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) GetUint8(key string) (uint8, bool)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'if val, ok := app.State().GetUint8("byteValue"); ok {\n    fmt.Printf("Byte Value: %d\\n", val)\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"getuint16",children:"GetUint16"}),"\n",(0,i.jsxs)(n.p,{children:["GetUint16 retrieves a ",(0,i.jsx)(n.code,{children:"uint16"})," value from the State."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) GetUint16(key string) (uint16, bool)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'if val, ok := app.State().GetUint16("limit"); ok {\n    fmt.Printf("Limit: %d\\n", val)\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"getuint32",children:"GetUint32"}),"\n",(0,i.jsxs)(n.p,{children:["GetUint32 retrieves a ",(0,i.jsx)(n.code,{children:"uint32"})," value from the State."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) GetUint32(key string) (uint32, bool)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'if val, ok := app.State().GetUint32("timeout"); ok {\n    fmt.Printf("Timeout: %d\\n", val)\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"getuint64",children:"GetUint64"}),"\n",(0,i.jsxs)(n.p,{children:["GetUint64 retrieves a ",(0,i.jsx)(n.code,{children:"uint64"})," value from the State."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) GetUint64(key string) (uint64, bool)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'if val, ok := app.State().GetUint64("maxSize"); ok {\n    fmt.Printf("Max Size: %d\\n", val)\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"getuintptr",children:"GetUintptr"}),"\n",(0,i.jsxs)(n.p,{children:["GetUintptr retrieves a ",(0,i.jsx)(n.code,{children:"uintptr"})," value from the State."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) GetUintptr(key string) (uintptr, bool)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'if val, ok := app.State().GetUintptr("pointerValue"); ok {\n    fmt.Printf("Pointer Value: %d\\n", val)\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"getfloat32",children:"GetFloat32"}),"\n",(0,i.jsxs)(n.p,{children:["GetFloat32 retrieves a ",(0,i.jsx)(n.code,{children:"float32"})," value from the State."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) GetFloat32(key string) (float32, bool)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'if val, ok := app.State().GetFloat32("scalingFactor32"); ok {\n    fmt.Printf("Scaling Factor (float32): %f\\n", val)\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"getcomplex64",children:"GetComplex64"}),"\n",(0,i.jsxs)(n.p,{children:["GetComplex64 retrieves a ",(0,i.jsx)(n.code,{children:"complex64"})," value from the State."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) GetComplex64(key string) (complex64, bool)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'if val, ok := app.State().GetComplex64("complexVal"); ok {\n    fmt.Printf("Complex Value (complex64): %v\\n", val)\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"getcomplex128",children:"GetComplex128"}),"\n",(0,i.jsxs)(n.p,{children:["GetComplex128 retrieves a ",(0,i.jsx)(n.code,{children:"complex128"})," value from the State."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (s *State) GetComplex128(key string) (complex128, bool)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'if val, ok := app.State().GetComplex128("complexVal128"); ok {\n    fmt.Printf("Complex Value (complex128): %v\\n", val)\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"generic-functions",children:"Generic Functions"}),"\n",(0,i.jsx)(n.p,{children:"Fiber provides generic functions to retrieve state values with type safety and fallback options."}),"\n",(0,i.jsx)(n.h3,{id:"getstate",children:"GetState"}),"\n",(0,i.jsx)(n.p,{children:"GetState retrieves a value from the State and casts it to the desired type. It returns the cast value and a boolean indicating if the cast was successful."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func GetState[T any](s *State, key string) (T, bool)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// Retrieve an integer value safely.\nuserCount, ok := GetState[int](app.State(), "userCount")\nif ok {\n    fmt.Printf("User Count: %d\\n", userCount)\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"mustgetstate",children:"MustGetState"}),"\n",(0,i.jsx)(n.p,{children:"MustGetState retrieves a value from the State and casts it to the desired type. It panics if the key is not found or if the type assertion fails."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func MustGetState[T any](s *State, key string) T\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// Retrieve the value or panic if it is not present.\nconfig := MustGetState[string](app.State(), "configFile")\nfmt.Println("Config File:", config)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"getstatewithdefault",children:"GetStateWithDefault"}),"\n",(0,i.jsx)(n.p,{children:"GetStateWithDefault retrieves a value from the State, casting it to the desired type. If the key is not present, it returns the provided default value."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func GetStateWithDefault[T any](s *State, key string, defaultVal T) T\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// Retrieve a value with a default fallback.\nrequestCount := GetStateWithDefault[int](app.State(), "requestCount", 0)\nfmt.Printf("Request Count: %d\\n", requestCount)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"comprehensive-examples",children:"Comprehensive Examples"}),"\n",(0,i.jsx)(n.h3,{id:"example-request-counter",children:"Example: Request Counter"}),"\n",(0,i.jsx)(n.p,{children:"This example demonstrates how to track the number of requests using the State."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gofiber/fiber/v3"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    // Initialize state with a counter.\n    app.State().Set("requestCount", 0)\n\n    // Middleware: Increase counter for every request.\n    app.Use(func(c fiber.Ctx) error {\n        count, _ := c.App().State().GetInt("requestCount")\n        app.State().Set("requestCount", count+1)\n        return c.Next()\n    })\n\n    app.Get("/", func(c fiber.Ctx) error {\n        return c.SendString("Hello World!")\n    })\n\n    app.Get("/stats", func(c fiber.Ctx) error {\n        count, _ := c.App().State().Get("requestCount")\n        return c.SendString(fmt.Sprintf("Total requests: %d", count))\n    })\n\n    app.Listen(":3000")\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"example-environmentspecific-configuration",children:"Example: Environment\u2013Specific Configuration"}),"\n",(0,i.jsx)(n.p,{children:"This example shows how to configure different settings based on the environment."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "os"\n\n    "github.com/gofiber/fiber/v3"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    // Determine environment.\n    environment := os.Getenv("ENV")\n    if environment == "" {\n        environment = "development"\n    }\n    app.State().Set("environment", environment)\n\n    // Set environment-specific configurations.\n    if environment == "development" {\n        app.State().Set("apiUrl", "http://localhost:8080/api")\n        app.State().Set("debug", true)\n    } else {\n        app.State().Set("apiUrl", "https://api.production.com")\n        app.State().Set("debug", false)\n    }\n\n    app.Get("/config", func(c fiber.Ctx) error {\n        config := map[string]any{\n            "environment": environment,\n            "apiUrl":      fiber.GetStateWithDefault(c.App().State(), "apiUrl", ""),\n            "debug":       fiber.GetStateWithDefault(c.App().State(), "debug", false),\n        }\n        return c.JSON(config)\n    })\n\n    app.Listen(":3000")\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"example-dependency-injection-with-state-management",children:"Example: Dependency Injection with State Management"}),"\n",(0,i.jsx)(n.p,{children:"This example demonstrates how to use the State for dependency injection in a Fiber application."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "log"\n\n    "github.com/gofiber/fiber/v3"\n    "github.com/redis/go-redis/v9"\n)\n\ntype User struct {\n    ID    int    `query:"id"`\n    Name  string `query:"name"`\n    Email string `query:"email"`\n}\n\nfunc main() {\n    app := fiber.New()\n    ctx := context.Background()\n\n    // Initialize Redis client.\n    rdb := redis.NewClient(&redis.Options{\n        Addr:     "localhost:6379",\n        Password: "",\n        DB:       0,\n    })\n\n    // Check the Redis connection.\n    if err := rdb.Ping(ctx).Err(); err != nil {\n        log.Fatalf("Could not connect to Redis: %v", err)\n    }\n\n    // Inject the Redis client into Fiber\'s State for dependency injection.\n    app.State().Set("redis", rdb)\n\n    app.Get("/user/create", func(c fiber.Ctx) error {\n        var user User\n        if err := c.Bind().Query(&user); err != nil {\n            return c.Status(fiber.StatusBadRequest).SendString(err.Error())\n        }\n\n        // Save the user to the database.\n        rdb, ok := fiber.GetState[*redis.Client](c.App().State(), "redis")\n        if !ok {\n            return c.Status(fiber.StatusInternalServerError).SendString("Redis client not found")\n        }\n\n        // Save the user to the database.\n        key := fmt.Sprintf("user:%d", user.ID)\n        err := rdb.HSet(ctx, key, "name", user.Name, "email", user.Email).Err()\n        if err != nil {\n            return c.Status(fiber.StatusInternalServerError).SendString(err.Error())\n        }\n\n        return c.JSON(user)\n    })\n\n    app.Get("/user/:id", func(c fiber.Ctx) error {\n        id := c.Params("id")\n\n        rdb, ok := fiber.GetState[*redis.Client](c.App().State(), "redis")\n        if !ok {\n            return c.Status(fiber.StatusInternalServerError).SendString("Redis client not found")\n        }\n\n        key := fmt.Sprintf("user:%s", id)\n        user, err := rdb.HGetAll(ctx, key).Result()\n        if err == redis.Nil {\n            return c.Status(fiber.StatusNotFound).SendString("User not found")\n        } else if err != nil {\n            return c.Status(fiber.StatusInternalServerError).SendString(err.Error())\n        }\n\n        return c.JSON(user)\n    })\n\n    app.Listen(":3000")\n}\n'})})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var a=t(67294);let i={},r=a.createContext(i);function s(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);