"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[11555],{54002:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=s(74848),r=s(28453);const o={id:"response",title:"\ud83d\udce5 Response",description:"Response methods of Gofiber HTTP client.",sidebar_position:3},i=void 0,l={id:"client/response",title:"\ud83d\udce5 Response",description:"Response methods of Gofiber HTTP client.",source:"@site/docs/core/client/response.md",sourceDirName:"client",slug:"/client/response",permalink:"/next/client/response",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/client/response.md",tags:[],version:"current",lastUpdatedAt:1723619721e3,sidebarPosition:3,frontMatter:{id:"response",title:"\ud83d\udce5 Response",description:"Response methods of Gofiber HTTP client.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udce4 Request",permalink:"/next/client/request"},next:{title:"\ud83c\udfa3 Hooks",permalink:"/next/client/hooks"}},a={},c=[{value:"AcquireResponse",id:"acquireresponse",level:2},{value:"ReleaseResponse",id:"releaseresponse",level:2},{value:"Status",id:"status",level:2},{value:"StatusCode",id:"statuscode",level:2},{value:"Protocol",id:"protocol",level:2},{value:"Header",id:"header",level:2},{value:"Cookies",id:"cookies",level:2},{value:"Body",id:"body",level:2},{value:"String",id:"string",level:2},{value:"JSON",id:"json",level:2},{value:"XML",id:"xml",level:2},{value:"Save",id:"save",level:2},{value:"Reset",id:"reset",level:2},{value:"Close",id:"close",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Response"})," structure in Gofiber's HTTP client represents the server's response to an HTTP request. It contains all the necessary information received from the server. This includes:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Status Code"}),": The HTTP status code returned by the server (e.g., 200 OK, 404 Not Found)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Headers"}),": HTTP headers received from the server that provide additional information about the response."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Body"}),": The data received from the server, typically in the form of a JSON, XML, or plain text format."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cookies"}),": Any cookies sent by the server along with the response."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This structure allows users to easily access and manage the data returned by the server, facilitating efficient handling of HTTP responses."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type Response struct {\n    client  *Client\n    request *Request\n    cookie  []*fasthttp.Cookie\n\n    RawResponse *fasthttp.Response\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"acquireresponse",children:"AcquireResponse"}),"\n",(0,t.jsx)(n.p,{children:"AcquireResponse returns an empty response object from the pool.\nThe returned response may be returned to the pool with ReleaseResponse when no longer needed.\nThis allows reducing GC load."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func AcquireResponse() *Response\n"})}),"\n",(0,t.jsx)(n.h2,{id:"releaseresponse",children:"ReleaseResponse"}),"\n",(0,t.jsx)(n.p,{children:"ReleaseResponse returns the object acquired via AcquireResponse to the pool.\nDo not access the released Response object; otherwise, data races may occur."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func ReleaseResponse(resp *Response)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,t.jsx)(n.p,{children:"Status method returns the HTTP status string for the executed request."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) Status() string\n"})}),"\n",(0,t.jsx)(n.h2,{id:"statuscode",children:"StatusCode"}),"\n",(0,t.jsx)(n.p,{children:"StatusCode method returns the HTTP status code for the executed request."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) StatusCode() int\n"})}),"\n",(0,t.jsx)(n.h2,{id:"protocol",children:"Protocol"}),"\n",(0,t.jsx)(n.p,{children:"Protocol method returns the HTTP response protocol used for the request."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) Protocol() string\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'resp, err := client.Get("https://httpbin.org/get")\nif err != nil {\n    panic(err)\n}\n\nfmt.Println(resp.Protocol())\n'})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Click here to see the result"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"HTTP/1.1\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,t.jsx)(n.p,{children:"Header method returns the response headers."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) Header(key string) string\n"})}),"\n",(0,t.jsx)(n.h2,{id:"cookies",children:"Cookies"}),"\n",(0,t.jsx)(n.p,{children:"Cookies method to access all the response cookies."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) Cookies() []*fasthttp.Cookie\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'resp, err := client.Get("https://httpbin.org/cookies/set/go/fiber")\nif err != nil {\n    panic(err)\n}\n\ncookies := resp.Cookies()\nfor _, cookie := range cookies {\n    fmt.Printf("%s => %s\\n", string(cookie.Key()), string(cookie.Value()))\n}\n'})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Click here to see the result"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"go => fiber\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"body",children:"Body"}),"\n",(0,t.jsx)(n.p,{children:"Body method returns HTTP response as []byte array for the executed request."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) Body() []byte\n"})}),"\n",(0,t.jsx)(n.h2,{id:"string",children:"String"}),"\n",(0,t.jsx)(n.p,{children:"String method returns the body of the server response as String."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) String() string\n"})}),"\n",(0,t.jsx)(n.h2,{id:"json",children:"JSON"}),"\n",(0,t.jsx)(n.p,{children:"JSON method will unmarshal body to json."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) JSON(v any) error\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Example"',children:'type Body struct {\n    Slideshow struct {\n        Author string `json:"author"`\n        Date   string `json:"date"`\n        Title  string `json:"title"`\n    } `json:"slideshow"`\n}\nvar out Body\n\nresp, err := client.Get("https://httpbin.org/json")\nif err != nil {\n    panic(err)\n}\n\nerr = resp.JSON(&out)\nif err != nil {\n    panic(err)\n}\n\nfmt.Printf("%+v\\n", out)\n'})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Click here to see the result"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"{Slideshow:{Author:Yours Truly Date:date of publication Title:Sample Slide Show}}\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"xml",children:"XML"}),"\n",(0,t.jsx)(n.p,{children:"XML method will unmarshal body to xml."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) XML(v any) error\n"})}),"\n",(0,t.jsx)(n.h2,{id:"save",children:"Save"}),"\n",(0,t.jsx)(n.p,{children:"Save method will save the body to a file or io.Writer."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) Save(v any) error\n"})}),"\n",(0,t.jsx)(n.h2,{id:"reset",children:"Reset"}),"\n",(0,t.jsx)(n.p,{children:"Reset clears the Response object."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) Reset() \n"})}),"\n",(0,t.jsx)(n.h2,{id:"close",children:"Close"}),"\n",(0,t.jsx)(n.p,{children:"Close method will release the Request and Response objects; after calling Close, please do not use these objects."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (r *Response) Close()\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(96540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);