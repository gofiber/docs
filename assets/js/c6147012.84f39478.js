"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[1450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,c=m["".concat(o,".").concat(u)]||m[u]||g[u]||i;return n?a.createElement(c,l(l({ref:t},d),{},{components:n})):a.createElement(c,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={id:"app",title:"\ud83d\ude80 App",description:"The app instance conventionally denotes the Fiber application.",sidebar_position:1},l=void 0,p={unversionedId:"api/app",id:"version-v1.x/api/app",title:"\ud83d\ude80 App",description:"The app instance conventionally denotes the Fiber application.",source:"@site/versioned_docs/version-v1.x/api/app.md",sourceDirName:"api",slug:"/api/app",permalink:"/v1.x/api/app",draft:!1,tags:[],version:"v1.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1684491885,formattedLastUpdatedAt:"May 19, 2023",sidebarPosition:1,frontMatter:{id:"app",title:"\ud83d\ude80 App",description:"The app instance conventionally denotes the Fiber application.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/v1.x/category/api"},next:{title:"\ud83e\udde0 Ctx",permalink:"/v1.x/api/ctx"}},o={},s=[{value:"New",id:"new",level:2},{value:"Settings",id:"settings",level:2},{value:"Static",id:"static",level:2},{value:"HTTP Methods",id:"http-methods",level:2},{value:"Group",id:"group",level:2},{value:"Stack",id:"stack",level:2},{value:"Listen",id:"listen",level:2},{value:"Listener",id:"listener",level:2},{value:"Test",id:"test",level:2}],d={toc:s},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"new"},"New"),(0,r.kt)("p",null,"This method creates a new ",(0,r.kt)("strong",{parentName:"p"},"App")," named instance. You can pass optional ",(0,r.kt)("a",{parentName:"p",href:"#settings"},"settings "),"when creating a new instance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"fiber.New(settings ...*Settings) *App\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'package main\n\nimport "github.com/gofiber/fiber"\n\nfunc main() {\n    app := fiber.New()\n\n    // ...\n\n    app.Listen(3000)\n}\n')),(0,r.kt)("h2",{id:"settings"},"Settings"),(0,r.kt)("p",null,"You can pass application settings when calling ",(0,r.kt)("inlineCode",{parentName:"p"},"New"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'func main() {\n    // Pass Settings creating a new instance\n    app := fiber.New(&fiber.Settings{\n        Prefork:       true,\n        CaseSensitive: true,\n        StrictRouting: true,\n        ServerHeader:  "Fiber",\n    })\n\n    // ...\n\n    app.Listen(3000)\n}\n')),(0,r.kt)("p",null,"Or change the settings after initializing an ",(0,r.kt)("inlineCode",{parentName:"p"},"app"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'func main() {\n    app := fiber.New()\n\n    // Or change Settings after creating an instance\n    app.Settings.Prefork = true\n    app.Settings.CaseSensitive = true\n    app.Settings.StrictRouting = true\n    app.Settings.ServerHeader = "Fiber"\n\n    // ...\n\n    app.Listen(3000)\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Settings")," ",(0,r.kt)("strong",{parentName:"p"},"fields")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Prefork"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enables use of the",(0,r.kt)("a",{parentName:"td",href:"https://lwn.net/Articles/542629/"},(0,r.kt)("inlineCode",{parentName:"a"},"SO_REUSEPORT")),"socket option. This will spawn multiple Go processes listening on the same port. learn more about ",(0,r.kt)("a",{parentName:"td",href:"https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/"},"socket sharding"),"."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ServerHeader"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enables the ",(0,r.kt)("inlineCode",{parentName:"td"},"Server")," HTTP header with the given value."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"StrictRouting"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"When enabled, the router treats ",(0,r.kt)("inlineCode",{parentName:"td"},"/foo")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"/foo/")," as different. Otherwise, the router treats ",(0,r.kt)("inlineCode",{parentName:"td"},"/foo")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"/foo/")," as the same."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CaseSensitive"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"When enabled, ",(0,r.kt)("inlineCode",{parentName:"td"},"/Foo")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"/foo")," are different routes. When disabled, ",(0,r.kt)("inlineCode",{parentName:"td"},"/Foo"),"and ",(0,r.kt)("inlineCode",{parentName:"td"},"/foo")," are treated the same."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Immutable"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"When enabled, all values returned by context methods are immutable. By default, they are valid until you return from the handler; see the issue ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/gofiber/fiber/issues/185"},"#","185"),"."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"UnescapePath"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Converts all encoded characters in the route back before setting the path for the context, so that the routing can also work with urlencoded special characters"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BodyLimit"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sets the maximum allowed size for a request body, if the size exceeds the configured limit, it sends ",(0,r.kt)("inlineCode",{parentName:"td"},"413 - Request Entity Too Large")," response."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"4 * 1024 * 1024"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CompressedFileSuffix"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Adds suffix to the original file name and tries saving the resulting compressed file under the new file name."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'".fiber.gz"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Concurrency"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Maximum number of concurrent connections."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"256 * 1024"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DisableKeepalive"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Disable keep-alive connections, the server will close incoming connections after sending the first response to client"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DisableDefaultDate"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"When set to true causes the default date header to be excluded from the response."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DisableDefaultContentType"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"When set to true, causes the default Content-Type header to be excluded from the Response."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DisableStartupMessage"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},'When set to true, it will not print out the fiber ASCII and "listening" on message'),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DisableHeaderNormalizing"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"By default all header names are normalized: conteNT-tYPE -",">"," Content-Type"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ETag"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable or disable ETag header generation, since both weak and strong etags are generated using the same hashing method ","(","CRC-32",")",". Weak ETags are the default when enabled."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Views"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Views")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Views is the interface that wraps the Render function. See our ",(0,r.kt)("strong",{parentName:"td"},"Template Middleware")," for supported engines."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ReadTimeout"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of time allowed to read the full request, including body. The default timeout is unlimited."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"WriteTimeout"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The maximum duration before timing out writes of the response. The default timeout is unlimited."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"IdleTimeout"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"time.Duration")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The maximum amount of time to wait for the next request when keep-alive is enabled. If IdleTimeout is zero, the value of ReadTimeout is used."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ReadBufferSize"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"left"},"per-connection buffer size for requests' reading. This also limits the maximum header size. Increase this buffer if your clients send multi-KB RequestURIs and/or multi-KB headers ","(","for example, BIG cookies",")","."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"4096"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"WriteBufferSize"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Per-connection buffer size for responses' writing."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"4096"))))),(0,r.kt)("h2",{id:"static"},"Static"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("strong",{parentName:"p"},"Static")," method to serve static files such as ",(0,r.kt)("strong",{parentName:"p"},"images"),", ",(0,r.kt)("strong",{parentName:"p"},"CSS")," and ",(0,r.kt)("strong",{parentName:"p"},"JavaScript"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"By default, ",(0,r.kt)("strong",{parentName:"p"},"Static")," will serve ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," files in response to a request on a directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"app.Static(prefix, root string, config ...Static) // => with prefix\n")),(0,r.kt)("p",null,"Use the following code to serve files in a directory named ",(0,r.kt)("inlineCode",{parentName:"p"},"./public")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'app.Static("/", "./public")\n\n// => http://localhost:3000/hello.html\n// => http://localhost:3000/js/jquery.js\n// => http://localhost:3000/css/style.css\n')),(0,r.kt)("p",null,"To serve from multiple directories, you can use ",(0,r.kt)("strong",{parentName:"p"},"Static")," numerous times."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'// Serve files from "./public" directory:\napp.Static("/", "./public")\n\n// Serve files from "./files" directory:\napp.Static("/", "./files")\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Use a reverse proxy cache like ",(0,r.kt)("a",{parentName:"p",href:"https://www.nginx.com/resources/wiki/start/topics/examples/reverseproxycachingexample/"},(0,r.kt)("strong",{parentName:"a"},"NGINX"))," to improve performance of serving static assets.")),(0,r.kt)("p",null,"You can use any virtual path prefix ","(",(0,r.kt)("em",{parentName:"p"},"where the path does not actually exist in the file system"),")"," for files that are served by the ",(0,r.kt)("strong",{parentName:"p"},"Static")," method, specify a prefix path for the static directory, as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'app.Static("/static", "./public")\n\n// => http://localhost:3000/static/hello.html\n// => http://localhost:3000/static/js/jquery.js\n// => http://localhost:3000/static/css/style.css\n')),(0,r.kt)("p",null,"If you want to have a little bit more control regarding the settings for serving static files. You could use the ",(0,r.kt)("inlineCode",{parentName:"p"},"fiber.Static")," struct to enable specific settings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="fiber.Static{}"',title:'"fiber.Static{}"'},'// Static represents settings for serving static files\ntype Static struct {\n    // Transparently compresses responses if set to true\n    // This works differently than the github.com/gofiber/compression middleware\n    // The server tries minimizing CPU usage by caching compressed files.\n    // It adds ".fiber.gz" suffix to the original file name.\n    // Optional. Default value false\n    Compress bool\n    // Enables byte-range requests if set to true.\n    // Optional. Default value false\n    ByteRange bool\n    // Enable directory browsing.\n    // Optional. Default value false.\n    Browse bool\n    // File to serve when requesting a directory path.\n    // Optional. Default value "index.html".\n    Index string\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'app.Static("/", "./public", fiber.Static{\n  Compress:   true,\n  ByteRange:  true,\n  Browse:     true,\n  Index:      "john.html"\n})\n')),(0,r.kt)("h2",{id:"http-methods"},"HTTP Methods"),(0,r.kt)("p",null,"Routes an HTTP request, where ",(0,r.kt)("strong",{parentName:"p"},"METHOD")," is the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"},"HTTP method")," of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signatures"',title:'"Signatures"'},'// Add allows you to specifiy a method as value\napp.Add(method, path string, handlers ...func(*Ctx)) Router\n\n// All will register the route on all methods\napp.All(path string, handlers ...func(*Ctx)) Router\n\n// HTTP methods\napp.Get(path string, handlers ...func(*Ctx)) Router\napp.Put(path string, handlers ...func(*Ctx)) Router\napp.Post(path string, handlers ...func(*Ctx)) Router\napp.Head(path string, handlers ...func(*Ctx)) Router\napp.Patch(path string, handlers ...func(*Ctx)) Router\napp.Trace(path string, handlers ...func(*Ctx)) Router\napp.Delete(path string, handlers ...func(*Ctx)) Router\napp.Connect(path string, handlers ...func(*Ctx)) Router\napp.Options(path string, handlers ...func(*Ctx)) Router\n\n// Use is mostly used for middleware modules\n// These routes will only match the beggining of each path\n// i.e. "/john" will match "/john/doe", "/johnnnn"\napp.Use(handlers ...func(*Ctx)) Router\napp.Use(prefix string, handlers ...func(*Ctx)) Router\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'app.Use("/api", func(c *fiber.Ctx) {\n  c.Set("X-Custom-Header", random.String(32))\n  c.Next()\n})\napp.Get("/api/list", func(c *fiber.Ctx) {\n  c.Send("I\'m a GET request!")\n})\napp.Post("/api/register", func(c *fiber.Ctx) {\n  c.Send("I\'m a POST request!")\n})\n')),(0,r.kt)("h2",{id:"group"},"Group"),(0,r.kt)("p",null,"You can group routes by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"*Group")," struct."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"app.Group(prefix string, handlers ...func(*Ctx)) Router\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api", handler)  // /api\n\n  v1 := api.Group("/v1", handler)   // /api/v1\n  v1.Get("/list", handler)          // /api/v1/list\n  v1.Get("/user", handler)          // /api/v1/user\n\n  v2 := api.Group("/v2", handler) // /api/v2\n  v2.Get("/list", handler)          // /api/v2/list\n  v2.Get("/user", handler)          // /api/v2/user\n\n  app.Listen(3000)\n}\n')),(0,r.kt)("h2",{id:"stack"},"Stack"),(0,r.kt)("p",null,"This method returns the original router stack"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"app.Stack() [][]*Route\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'app := fiber.New()\n\napp.Use(handler)\napp.Get("/john", handler)\napp.Post("/register", handler)\napp.Get("/v1/users", handler)\napp.Put("/user/:id", handler)\napp.Head("/xhr", handler)\n\ndata, _ := json.MarshalIndent(app.Stack(), "", "  ")\nfmt.Println(string(data))\n')),(0,r.kt)("h2",{id:"listen"},"Listen"),(0,r.kt)("p",null,"Binds and listens for connections on the specified address. This can be an ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," for port or ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," for address. This will listen either on ",(0,r.kt)("inlineCode",{parentName:"p"},"tcp4")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"tcp6")," depending on the address input ","(","i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},":3000")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"[::1]:3000")," ",")","."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"app.Listen(address interface{}, tls ...*tls.Config) error\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Examples"',title:'"Examples"'},'app.Listen(8080)\napp.Listen("8080")\napp.Listen(":8080")\napp.Listen("127.0.0.1:8080")\napp.Listen("[::1]:8080")\n')),(0,r.kt)("p",null,"To enable ",(0,r.kt)("strong",{parentName:"p"},"TLS/HTTPS")," you can append a ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/pkg/crypto/tls/#Config"},(0,r.kt)("strong",{parentName:"a"},"TLS config")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'cer, err := tls.LoadX509KeyPair("server.crt", "server.key")\nif err != nil {\n    log.Fatal(err)\n}\nconfig := &tls.Config{Certificates: []tls.Certificate{cer}}\n\napp.Listen(443, config)\n')),(0,r.kt)("h2",{id:"listener"},"Listener"),(0,r.kt)("p",null,"You can pass your own ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/pkg/net/#Listener"},(0,r.kt)("inlineCode",{parentName:"a"},"net.Listener"))," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Listener")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"app.Listener(ln net.Listener, tls ...*tls.Config) error\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Listener")," does not support the ",(0,r.kt)("a",{parentName:"p",href:"#settings"},(0,r.kt)("strong",{parentName:"a"},"Prefork"))," feature.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'if ln, err = net.Listen("tcp", ":8080"); err != nil {\n    log.Fatal(err)\n}\n\napp.Listener(ln)\n')),(0,r.kt)("h2",{id:"test"},"Test"),(0,r.kt)("p",null,"Testing your application is done with the ",(0,r.kt)("strong",{parentName:"p"},"Test")," method. Use this method for creating ",(0,r.kt)("inlineCode",{parentName:"p"},"_test.go")," files or when you need to debug your routing logic. The default timeout is ",(0,r.kt)("inlineCode",{parentName:"p"},"200ms")," if you want to disable a timeout altogether, pass ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," as a second argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Signature"',title:'"Signature"'},"app.Test(req *http.Request, msTimeout ...int) (*http.Response, error)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'// Create route with GET method for test:\napp.Get("/", func(c *Ctx) {\n  fmt.Println(c.BaseURL())              // => http://google.com\n  fmt.Println(c.Get("X-Custom-Header")) // => hi\n\n  c.Send("hello, World!")\n})\n\n// http.Request\nreq := httptest.NewRequest("GET", "http://google.com", nil)\nreq.Header.Set("X-Custom-Header", "hi")\n\n// http.Response\nresp, _ := app.Test(req)\n\n// Do something with results:\nif resp.StatusCode == 200 {\n  body, _ := ioutil.ReadAll(resp.Body)\n  fmt.Println(string(body)) // => Hello, World!\n}\n')))}g.isMDXComponent=!0}}]);