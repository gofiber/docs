"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["49795"],{95703:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>l});var r=JSON.parse('{"id":"client/response","title":"\uD83D\uDCE5 Response","description":"Response methods of Gofiber HTTP client.","source":"@site/docs/core/client/response.md","sourceDirName":"client","slug":"/client/response","permalink":"/next/client/response","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/client/response.md","tags":[],"version":"current","lastUpdatedAt":1741678803000,"sidebarPosition":3,"frontMatter":{"id":"response","title":"\uD83D\uDCE5 Response","description":"Response methods of Gofiber HTTP client.","sidebar_position":3},"sidebar":"left_sidebar","previous":{"title":"\uD83D\uDCE4 Request","permalink":"/next/client/request"},"next":{"title":"\uD83C\uDFA3 Hooks","permalink":"/next/client/hooks"}}'),t=n("85893"),i=n("50065");let o={id:"response",title:"\uD83D\uDCE5 Response",description:"Response methods of Gofiber HTTP client.",sidebar_position:3},l=void 0,c={},a=[{value:"AcquireResponse",id:"acquireresponse",level:2},{value:"ReleaseResponse",id:"releaseresponse",level:2},{value:"Status",id:"status",level:2},{value:"StatusCode",id:"statuscode",level:2},{value:"Protocol",id:"protocol",level:2},{value:"Header",id:"header",level:2},{value:"Headers",id:"headers",level:2},{value:"Cookies",id:"cookies",level:2},{value:"Body",id:"body",level:2},{value:"String",id:"string",level:2},{value:"JSON",id:"json",level:2},{value:"XML",id:"xml",level:2},{value:"CBOR",id:"cbor",level:2},{value:"Save",id:"save",level:2},{value:"Reset",id:"reset",level:2},{value:"Close",id:"close",level:2}];function d(e){let s={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:n}=s;return n||function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"Response"})," structure in Gofiber's HTTP client represents the server's response to an HTTP request. It includes:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Status Code"}),": The HTTP status code returned by the server (e.g., ",(0,t.jsx)(s.code,{children:"200 OK"}),", ",(0,t.jsx)(s.code,{children:"404 Not Found"}),")."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Headers"}),": All HTTP headers returned by the server, providing additional response-related information."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Body"}),": The response body content, which can be JSON, XML, plain text, or other formats."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Cookies"}),": Any cookies the server sent along with the response."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"This structure makes it easy to inspect and handle the data sent back by the server."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:"type Response struct {\n    client      *Client\n    request     *Request\n    cookie      []*fasthttp.Cookie\n    RawResponse *fasthttp.Response\n}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"acquireresponse",children:"AcquireResponse"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"AcquireResponse"})," returns a new (pooled) ",(0,t.jsx)(s.code,{children:"Response"})," object. When finished, release it using ",(0,t.jsx)(s.code,{children:"ReleaseResponse"})," to reduce GC overhead."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:'title="Signature"',children:"func AcquireResponse() *Response\n"})}),"\n",(0,t.jsx)(s.h2,{id:"releaseresponse",children:"ReleaseResponse"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"ReleaseResponse"})," returns the ",(0,t.jsx)(s.code,{children:"Response"})," object to the pool. Avoid using the response after releasing it to prevent data races."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:'title="Signature"',children:"func ReleaseResponse(resp *Response)\n"})}),"\n",(0,t.jsx)(s.h2,{id:"status",children:"Status"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Status"})," returns the HTTP status message (e.g., ",(0,t.jsx)(s.code,{children:"OK"}),", ",(0,t.jsx)(s.code,{children:"Not Found"}),") associated with the response."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) Status() string\n"})}),"\n",(0,t.jsx)(s.h2,{id:"statuscode",children:"StatusCode"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"StatusCode"})," returns the numeric HTTP status code of the response."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) StatusCode() int\n"})}),"\n",(0,t.jsx)(s.h2,{id:"protocol",children:"Protocol"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Protocol"})," returns the HTTP protocol used (e.g., ",(0,t.jsx)(s.code,{children:"HTTP/1.1"}),", ",(0,t.jsx)(s.code,{children:"HTTP/2"}),") for the response."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) Protocol() string\n"})}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Example"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:'title="Example"',children:'resp, err := client.Get("https://httpbin.org/get")\nif err != nil {\n    panic(err)\n}\n\nfmt.Println(resp.Protocol())\n'})}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Output:"})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",children:"HTTP/1.1\n"})})]}),"\n",(0,t.jsx)(s.h2,{id:"header",children:"Header"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Header"})," retrieves the value of a specific response header by key. If multiple values exist for the same header, this returns the first one."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) Header(key string) string\n"})}),"\n",(0,t.jsx)(s.h2,{id:"headers",children:"Headers"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Headers"})," returns an iterator over all response headers. Use ",(0,t.jsx)(s.code,{children:"maps.Collect()"})," to convert them into a map if desired. The returned values are only valid until the response is released, so make copies if needed."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) Headers() iter.Seq2[string, []string] \n"})}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Example"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:'title="Example"',children:'resp, err := client.Get("https://httpbin.org/get")\nif err != nil {\n    panic(err)\n}\n\nfor key, values := range resp.Headers() {\n    fmt.Printf("%s => %s\\n", key, strings.Join(values, ", "))\n}\n'})}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Output:"})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",children:"Date => Wed, 04 Dec 2024 15:28:29 GMT\nConnection => keep-alive\nAccess-Control-Allow-Origin => *\nAccess-Control-Allow-Credentials => true\n"})})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Example with maps.Collect()"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:'title="Example with maps.Collect()"',children:'resp, err := client.Get("https://httpbin.org/get")\nif err != nil {\n    panic(err)\n}\n\nheaders := maps.Collect(resp.Headers())\nfor key, values := range headers {\n    fmt.Printf("%s => %s\\n", key, strings.Join(values, ", "))\n}\n'})}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Output:"})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",children:"Date => Wed, 04 Dec 2024 15:28:29 GMT\nConnection => keep-alive\nAccess-Control-Allow-Origin => *\nAccess-Control-Allow-Credentials => true\n"})})]}),"\n",(0,t.jsx)(s.h2,{id:"cookies",children:"Cookies"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Cookies"})," returns a slice of all cookies set by the server in this response. The slice is only valid until the response is released."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) Cookies() []*fasthttp.Cookie\n"})}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Example"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:'title="Example"',children:'resp, err := client.Get("https://httpbin.org/cookies/set/go/fiber")\nif err != nil {\n    panic(err)\n}\n\ncookies := resp.Cookies()\nfor _, cookie := range cookies {\n    fmt.Printf("%s => %s\\n", string(cookie.Key()), string(cookie.Value()))\n}\n'})}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Output:"})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",children:"go => fiber\n"})})]}),"\n",(0,t.jsx)(s.h2,{id:"body",children:"Body"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Body"})," returns the raw response body as a byte slice."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) Body() []byte\n"})}),"\n",(0,t.jsx)(s.h2,{id:"string",children:"String"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"String"})," returns the response body as a trimmed string."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) String() string\n"})}),"\n",(0,t.jsx)(s.h2,{id:"json",children:"JSON"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"JSON"})," unmarshals the response body into the provided variable ",(0,t.jsx)(s.code,{children:"v"})," using JSON. ",(0,t.jsx)(s.code,{children:"v"})," should be a pointer to a struct or a type compatible with JSON unmarshalling."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) JSON(v any) error\n"})}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Example"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:'title="Example"',children:'type Body struct {\n    Slideshow struct {\n        Author string `json:"author"`\n        Date   string `json:"date"`\n        Title  string `json:"title"`\n    } `json:"slideshow"`\n}\nvar out Body\n\nresp, err := client.Get("https://httpbin.org/json")\nif err != nil {\n    panic(err)\n}\n\nif err = resp.JSON(&out); err != nil {\n    panic(err)\n}\n\nfmt.Printf("%+v\\n", out)\n'})}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Output:"})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",children:"{Slideshow:{Author:Yours Truly Date:date of publication Title:Sample Slide Show}}\n"})})]}),"\n",(0,t.jsx)(s.h2,{id:"xml",children:"XML"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"XML"})," unmarshals the response body into the provided variable ",(0,t.jsx)(s.code,{children:"v"})," using XML decoding."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) XML(v any) error\n"})}),"\n",(0,t.jsx)(s.h2,{id:"cbor",children:"CBOR"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"CBOR"})," unmarshals the response body into ",(0,t.jsx)(s.code,{children:"v"})," using CBOR decoding."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) CBOR(v any) error\n"})}),"\n",(0,t.jsx)(s.h2,{id:"save",children:"Save"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Save"})," writes the response body to a file or an ",(0,t.jsx)(s.code,{children:"io.Writer"}),". If ",(0,t.jsx)(s.code,{children:"v"})," is a string, it interprets it as a file path, creates the file (and directories if needed), and writes the response to it. If ",(0,t.jsx)(s.code,{children:"v"})," is an ",(0,t.jsx)(s.code,{children:"io.Writer"}),", it writes directly to it."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) Save(v any) error\n"})}),"\n",(0,t.jsx)(s.h2,{id:"reset",children:"Reset"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Reset"})," clears the ",(0,t.jsx)(s.code,{children:"Response"})," object, making it ready for reuse by ",(0,t.jsx)(s.code,{children:"ReleaseResponse"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) Reset()\n"})}),"\n",(0,t.jsx)(s.h2,{id:"close",children:"Close"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Close"})," releases both the associated ",(0,t.jsx)(s.code,{children:"Request"})," and ",(0,t.jsx)(s.code,{children:"Response"})," objects back to their pools."]}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsxs)(s.p,{children:["After calling ",(0,t.jsx)(s.code,{children:"Close"}),", any attempt to use the request or response may result in data races or undefined behavior. Ensure all processing is complete before closing."]})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) Close()\n"})})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return o}});var r=n(67294);let t={},i=r.createContext(t);function o(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);