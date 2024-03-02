"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[42969],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var n=o.createContext({}),g=function(e){var t=o.useContext(n),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=g(e.components);return o.createElement(n.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,n=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=g(r),b=a,f=m["".concat(n,".").concat(b)]||m[b]||h[b]||s;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=b;var l={};for(var n in t)hasOwnProperty.call(t,n)&&(l[n]=t[n]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var g=2;g<s;g++)i[g]=r[g];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},10694:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>n,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>g});var o=r(87462),a=(r(67294),r(3905));const s={title:"\ud83d\udc4b Welcome",description:"\ud83d\udce6 Premade storage drivers for \ud83d\ude80 Fiber.",sidebar_position:1},i=void 0,l={unversionedId:"README",id:"version-redis_v2.x.x/README",title:"\ud83d\udc4b Welcome",description:"\ud83d\udce6 Premade storage drivers for \ud83d\ude80 Fiber.",source:"@site/storage_versioned_docs/version-redis_v2.x.x/README.md",sourceDirName:".",slug:"/",permalink:"/storage/redis_v2.x.x/",draft:!1,editUrl:"https://github.com/gofiber/storage/edit/main/README.md",tags:[],version:"redis_v2.x.x",lastUpdatedAt:1709403067,formattedLastUpdatedAt:"Mar 2, 2024",sidebarPosition:1,frontMatter:{title:"\ud83d\udc4b Welcome",description:"\ud83d\udce6 Premade storage drivers for \ud83d\ude80 Fiber.",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"ArangoDB",permalink:"/storage/redis_v2.x.x/arangodb/"}},n={},g=[{value:"\ud83d\udcd1 Storage Implementations",id:"-storage-implementations",level:2}],c={toc:g},m="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/storage/master/.github/logo-dark.svg#gh-dark-mode-only"}),(0,a.kt)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/storage/master/.github/logo.svg#gh-light-mode-only"}),(0,a.kt)("br",null),(0,a.kt)("h1",{id:"-storage"},"\ud83d\udce6 Storage"),(0,a.kt)("a",{href:"https://pkg.go.dev/github.com/gofiber/storage?tab=doc"},(0,a.kt)("img",{src:"https://img.shields.io/badge/%F0%9F%93%9A%20godoc-pkg-00ACD7.svg?color=00ACD7&style=flat"})),(0,a.kt)("a",{href:"https://goreportcard.com/report/github.com/gofiber/storage"},(0,a.kt)("img",{src:"https://img.shields.io/badge/%F0%9F%93%9D%20goreport-A%2B-75C46B"})),(0,a.kt)("a",{href:"https://gofiber.io/discord"},(0,a.kt)("img",{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7"}))),(0,a.kt)("p",null,"Premade storage drivers that implement the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/storage/blob/main/storage.go"},(0,a.kt)("inlineCode",{parentName:"a"},"Storage"))," interface, designed to be used with various ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber/tree/master/middleware"},"Fiber middlewares"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Storage interface for communicating with different database/key-value\n// providers. Visit https://github.com/gofiber/storage for more info.\ntype Storage interface {\n    // Get gets the value for the given key.\n    // `nil, nil` is returned when the key does not exist\n    Get(key string) ([]byte, error)\n\n    // Set stores the given value for the given key along\n    // with an expiration value, 0 means no expiration.\n    // Empty key or value will be ignored without an error.\n    Set(key string, val []byte, exp time.Duration) error\n\n    // Delete deletes the value for the given key.\n    // It returns no error if the storage does not contain the key,\n    Delete(key string) error\n\n    // Reset resets the storage and delete all keys.\n    Reset() error\n\n    // Close closes the storage and will stop any running garbage\n    // collectors and open connections.\n    Close() error\n}\n")),(0,a.kt)("h2",{id:"-storage-implementations"},"\ud83d\udcd1 Storage Implementations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/redis_v2.x.x/arangodb/"},"ArangoDB")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+ArangoDB%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-arangodb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/redis_v2.x.x/azureblob/"},"AzureBlob")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Azure+Blob%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-azureblob.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/redis_v2.x.x/badger/"},"Badger")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Badger%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-badger.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./bbolt"},"Bbolt")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Bbolt%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-bbolt.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/redis_v2.x.x/couchbase/"},"Couchbase")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Couchbase%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-couchbase.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/redis_v2.x.x/dynamodb/"},"DynamoDB")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+DynamoDB%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-dynamodb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/redis_v2.x.x/etcd/"},"Etcd")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Etcd%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-etcd.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/redis_v2.x.x/memcache/"},"Memcache")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Memcache%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-memcache.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/redis_v2.x.x/memory/"},"Memory")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Local+Storage%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-memory.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/redis_v2.x.x/mongodb/"},"MongoDB")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Mongodb%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mongodb.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/redis_v2.x.x/mssql/"},"MSSQL")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+MSSQL%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mssql.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/redis_v2.x.x/mysql/"},"MySQL")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+MySQL%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-mysql.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/redis_v2.x.x/pebble/"},"Pebble")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Pebble%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-pebble.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/redis_v2.x.x/postgres/"},"Postgres")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Postgres%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-postgres.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/redis_v2.x.x/redis/"},"Redis")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Redis%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-redis.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/redis_v2.x.x/s3/"},"S3")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+S3%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-s3.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/storage/redis_v2.x.x/sqlite3/"},"SQLite3")," ",(0,a.kt)("a",{href:"https://github.com/gofiber/storage/actions?query=workflow%3A%22Tests+Sqlite3%22"}," ",(0,a.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/storage/test-sqlite3.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "))))}h.isMDXComponent=!0}}]);