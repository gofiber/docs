"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[42017],{68123:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(74848),a=r(28453);const o={id:"constants",title:"\ud83d\udccb Constants",description:"Some constants for Fiber.",sidebar_position:8},s=void 0,i={id:"api/constants",title:"\ud83d\udccb Constants",description:"Some constants for Fiber.",source:"@site/docs/core/api/constants.md",sourceDirName:"api",slug:"/api/constants",permalink:"/next/api/constants",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/api/constants.md",tags:[],version:"current",lastUpdatedAt:1724653574e3,sidebarPosition:8,frontMatter:{id:"constants",title:"\ud83d\udccb Constants",description:"Some constants for Fiber.",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfa3 Hooks",permalink:"/next/api/hooks"},next:{title:"\ud83e\uddec Middleware",permalink:"/next/category/-middleware"}},d={},c=[{value:"HTTP methods were copied from net/http",id:"http-methods-were-copied-from-nethttp",level:3},{value:"MIME types that are commonly used",id:"mime-types-that-are-commonly-used",level:3},{value:"Errors",id:"errors",level:3}];function u(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"http-methods-were-copied-from-nethttp",children:"HTTP methods were copied from net/http"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'const (\n    MethodGet     = "GET"     // RFC 7231, 4.3.1\n    MethodHead    = "HEAD"    // RFC 7231, 4.3.2\n    MethodPost    = "POST"    // RFC 7231, 4.3.3\n    MethodPut     = "PUT"     // RFC 7231, 4.3.4\n    MethodPatch   = "PATCH"   // RFC 5789\n    MethodDelete  = "DELETE"  // RFC 7231, 4.3.5\n    MethodConnect = "CONNECT" // RFC 7231, 4.3.6\n    MethodOptions = "OPTIONS" // RFC 7231, 4.3.7\n    MethodTrace   = "TRACE"   // RFC 7231, 4.3.8\n    methodUse     = "USE"\n)\n'})}),"\n",(0,n.jsx)(t.h3,{id:"mime-types-that-are-commonly-used",children:"MIME types that are commonly used"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'const (\n    MIMETextXML         = "text/xml"\n    MIMETextHTML        = "text/html"\n    MIMETextPlain       = "text/plain"\n    MIMETextJavaScript  = "text/javascript"\n    MIMETextCSS         = "text/css"\n    MIMEApplicationXML  = "application/xml"\n    MIMEApplicationJSON = "application/json"\n    MIMEApplicationJavaScript = "application/javascript"\n    MIMEApplicationForm       = "application/x-www-form-urlencoded"\n    MIMEOctetStream           = "application/octet-stream"\n    MIMEMultipartForm         = "multipart/form-data"\n\n    MIMETextXMLCharsetUTF8         = "text/xml; charset=utf-8"\n    MIMETextHTMLCharsetUTF8        = "text/html; charset=utf-8"\n    MIMETextPlainCharsetUTF8       = "text/plain; charset=utf-8"\n    MIMETextJavaScriptCharsetUTF8  = "text/javascript; charset=utf-8"\n    MIMETextCSSCharsetUTF8         = "text/css; charset=utf-8"\n    MIMEApplicationXMLCharsetUTF8  = "application/xml; charset=utf-8"\n    MIMEApplicationJSONCharsetUTF8 = "application/json; charset=utf-8"\n    MIMEApplicationJavaScriptCharsetUTF8 = "application/javascript; charset=utf-8"\n)```\n\n### HTTP status codes were copied from net/http.\n\n```go\nconst (\n    StatusContinue                      = 100 // RFC 7231, 6.2.1\n    StatusSwitchingProtocols            = 101 // RFC 7231, 6.2.2\n    StatusProcessing                    = 102 // RFC 2518, 10.1\n    StatusEarlyHints                    = 103 // RFC 8297\n    StatusOK                            = 200 // RFC 7231, 6.3.1\n    StatusCreated                       = 201 // RFC 7231, 6.3.2\n    StatusAccepted                      = 202 // RFC 7231, 6.3.3\n    StatusNonAuthoritativeInformation   = 203 // RFC 7231, 6.3.4\n    StatusNoContent                     = 204 // RFC 7231, 6.3.5\n    StatusResetContent                  = 205 // RFC 7231, 6.3.6\n    StatusPartialContent                = 206 // RFC 7233, 4.1\n    StatusMultiStatus                   = 207 // RFC 4918, 11.1\n    StatusAlreadyReported               = 208 // RFC 5842, 7.1\n    StatusIMUsed                        = 226 // RFC 3229, 10.4.1\n    StatusMultipleChoices               = 300 // RFC 7231, 6.4.1\n    StatusMovedPermanently              = 301 // RFC 7231, 6.4.2\n    StatusFound                         = 302 // RFC 7231, 6.4.3\n    StatusSeeOther                      = 303 // RFC 7231, 6.4.4\n    StatusNotModified                   = 304 // RFC 7232, 4.1\n    StatusUseProxy                      = 305 // RFC 7231, 6.4.5\n    StatusTemporaryRedirect             = 307 // RFC 7231, 6.4.7\n    StatusPermanentRedirect             = 308 // RFC 7538, 3\n    StatusBadRequest                    = 400 // RFC 7231, 6.5.1\n    StatusUnauthorized                  = 401 // RFC 7235, 3.1\n    StatusPaymentRequired               = 402 // RFC 7231, 6.5.2\n    StatusForbidden                     = 403 // RFC 7231, 6.5.3\n    StatusNotFound                      = 404 // RFC 7231, 6.5.4\n    StatusMethodNotAllowed              = 405 // RFC 7231, 6.5.5\n    StatusNotAcceptable                 = 406 // RFC 7231, 6.5.6\n    StatusProxyAuthRequired             = 407 // RFC 7235, 3.2\n    StatusRequestTimeout                = 408 // RFC 7231, 6.5.7\n    StatusConflict                      = 409 // RFC 7231, 6.5.8\n    StatusGone                          = 410 // RFC 7231, 6.5.9\n    StatusLengthRequired                = 411 // RFC 7231, 6.5.10\n    StatusPreconditionFailed            = 412 // RFC 7232, 4.2\n    StatusRequestEntityTooLarge         = 413 // RFC 7231, 6.5.11\n    StatusRequestURITooLong             = 414 // RFC 7231, 6.5.12\n    StatusUnsupportedMediaType          = 415 // RFC 7231, 6.5.13\n    StatusRequestedRangeNotSatisfiable  = 416 // RFC 7233, 4.4\n    StatusExpectationFailed             = 417 // RFC 7231, 6.5.14\n    StatusTeapot                        = 418 // RFC 7168, 2.3.3\n    StatusMisdirectedRequest            = 421 // RFC 7540, 9.1.2\n    StatusUnprocessableEntity           = 422 // RFC 4918, 11.2\n    StatusLocked                        = 423 // RFC 4918, 11.3\n    StatusFailedDependency              = 424 // RFC 4918, 11.4\n    StatusTooEarly                      = 425 // RFC 8470, 5.2.\n    StatusUpgradeRequired               = 426 // RFC 7231, 6.5.15\n    StatusPreconditionRequired          = 428 // RFC 6585, 3\n    StatusTooManyRequests               = 429 // RFC 6585, 4\n    StatusRequestHeaderFieldsTooLarge   = 431 // RFC 6585, 5\n    StatusUnavailableForLegalReasons    = 451 // RFC 7725, 3\n    StatusInternalServerError           = 500 // RFC 7231, 6.6.1\n    StatusNotImplemented                = 501 // RFC 7231, 6.6.2\n    StatusBadGateway                    = 502 // RFC 7231, 6.6.3\n    StatusServiceUnavailable            = 503 // RFC 7231, 6.6.4\n    StatusGatewayTimeout                = 504 // RFC 7231, 6.6.5\n    StatusHTTPVersionNotSupported       = 505 // RFC 7231, 6.6.6\n    StatusVariantAlsoNegotiates         = 506 // RFC 2295, 8.1\n    StatusInsufficientStorage           = 507 // RFC 4918, 11.5\n    StatusLoopDetected                  = 508 // RFC 5842, 7.2\n    StatusNotExtended                   = 510 // RFC 2774, 7\n    StatusNetworkAuthenticationRequired = 511 // RFC 6585, 6\n)\n'})}),"\n",(0,n.jsx)(t.h3,{id:"errors",children:"Errors"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"var (\n    ErrBadRequest                    = NewError(StatusBadRequest)                    // RFC 7231, 6.5.1\n    ErrUnauthorized                  = NewError(StatusUnauthorized)                  // RFC 7235, 3.1\n    ErrPaymentRequired               = NewError(StatusPaymentRequired)               // RFC 7231, 6.5.2\n    ErrForbidden                     = NewError(StatusForbidden)                     // RFC 7231, 6.5.3\n    ErrNotFound                      = NewError(StatusNotFound)                      // RFC 7231, 6.5.4\n    ErrMethodNotAllowed              = NewError(StatusMethodNotAllowed)              // RFC 7231, 6.5.5\n    ErrNotAcceptable                 = NewError(StatusNotAcceptable)                 // RFC 7231, 6.5.6\n    ErrProxyAuthRequired             = NewError(StatusProxyAuthRequired)             // RFC 7235, 3.2\n    ErrRequestTimeout                = NewError(StatusRequestTimeout)                // RFC 7231, 6.5.7\n    ErrConflict                      = NewError(StatusConflict)                      // RFC 7231, 6.5.8\n    ErrGone                          = NewError(StatusGone)                          // RFC 7231, 6.5.9\n    ErrLengthRequired                = NewError(StatusLengthRequired)                // RFC 7231, 6.5.10\n    ErrPreconditionFailed            = NewError(StatusPreconditionFailed)            // RFC 7232, 4.2\n    ErrRequestEntityTooLarge         = NewError(StatusRequestEntityTooLarge)         // RFC 7231, 6.5.11\n    ErrRequestURITooLong             = NewError(StatusRequestURITooLong)             // RFC 7231, 6.5.12\n    ErrUnsupportedMediaType          = NewError(StatusUnsupportedMediaType)          // RFC 7231, 6.5.13\n    ErrRequestedRangeNotSatisfiable  = NewError(StatusRequestedRangeNotSatisfiable)  // RFC 7233, 4.4\n    ErrExpectationFailed             = NewError(StatusExpectationFailed)             // RFC 7231, 6.5.14\n    ErrTeapot                        = NewError(StatusTeapot)                        // RFC 7168, 2.3.3\n    ErrMisdirectedRequest            = NewError(StatusMisdirectedRequest)            // RFC 7540, 9.1.2\n    ErrUnprocessableEntity           = NewError(StatusUnprocessableEntity)           // RFC 4918, 11.2\n    ErrLocked                        = NewError(StatusLocked)                        // RFC 4918, 11.3\n    ErrFailedDependency              = NewError(StatusFailedDependency)              // RFC 4918, 11.4\n    ErrTooEarly                      = NewError(StatusTooEarly)                      // RFC 8470, 5.2.\n    ErrUpgradeRequired               = NewError(StatusUpgradeRequired)               // RFC 7231, 6.5.15\n    ErrPreconditionRequired          = NewError(StatusPreconditionRequired)          // RFC 6585, 3\n    ErrTooManyRequests               = NewError(StatusTooManyRequests)               // RFC 6585, 4\n    ErrRequestHeaderFieldsTooLarge   = NewError(StatusRequestHeaderFieldsTooLarge)   // RFC 6585, 5\n    ErrUnavailableForLegalReasons    = NewError(StatusUnavailableForLegalReasons)    // RFC 7725, 3\n    ErrInternalServerError           = NewError(StatusInternalServerError)           // RFC 7231, 6.6.1\n    ErrNotImplemented                = NewError(StatusNotImplemented)                // RFC 7231, 6.6.2\n    ErrBadGateway                    = NewError(StatusBadGateway)                    // RFC 7231, 6.6.3\n    ErrServiceUnavailable            = NewError(StatusServiceUnavailable)            // RFC 7231, 6.6.4\n    ErrGatewayTimeout                = NewError(StatusGatewayTimeout)                // RFC 7231, 6.6.5\n    ErrHTTPVersionNotSupported       = NewError(StatusHTTPVersionNotSupported)       // RFC 7231, 6.6.6\n    ErrVariantAlsoNegotiates         = NewError(StatusVariantAlsoNegotiates)         // RFC 2295, 8.1\n    ErrInsufficientStorage           = NewError(StatusInsufficientStorage)           // RFC 4918, 11.5\n    ErrLoopDetected                  = NewError(StatusLoopDetected)                  // RFC 5842, 7.2\n    ErrNotExtended                   = NewError(StatusNotExtended)                   // RFC 2774, 7\n    ErrNetworkAuthenticationRequired = NewError(StatusNetworkAuthenticationRequired) // RFC 6585, 6\n)\n"})}),"\n",(0,n.jsx)(t.p,{children:"HTTP Headers were copied from net/http."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'const (\n    HeaderAuthorization                   = "Authorization"\n    HeaderProxyAuthenticate               = "Proxy-Authenticate"\n    HeaderProxyAuthorization              = "Proxy-Authorization"\n    HeaderWWWAuthenticate                 = "WWW-Authenticate"\n    HeaderAge                             = "Age"\n    HeaderCacheControl                    = "Cache-Control"\n    HeaderClearSiteData                   = "Clear-Site-Data"\n    HeaderExpires                         = "Expires"\n    HeaderPragma                          = "Pragma"\n    HeaderWarning                         = "Warning"\n    HeaderAcceptCH                        = "Accept-CH"\n    HeaderAcceptCHLifetime                = "Accept-CH-Lifetime"\n    HeaderContentDPR                      = "Content-DPR"\n    HeaderDPR                             = "DPR"\n    HeaderEarlyData                       = "Early-Data"\n    HeaderSaveData                        = "Save-Data"\n    HeaderViewportWidth                   = "Viewport-Width"\n    HeaderWidth                           = "Width"\n    HeaderETag                            = "ETag"\n    HeaderIfMatch                         = "If-Match"\n    HeaderIfModifiedSince                 = "If-Modified-Since"\n    HeaderIfNoneMatch                     = "If-None-Match"\n    HeaderIfUnmodifiedSince               = "If-Unmodified-Since"\n    HeaderLastModified                    = "Last-Modified"\n    HeaderVary                            = "Vary"\n    HeaderConnection                      = "Connection"\n    HeaderKeepAlive                       = "Keep-Alive"\n    HeaderAccept                          = "Accept"\n    HeaderAcceptCharset                   = "Accept-Charset"\n    HeaderAcceptEncoding                  = "Accept-Encoding"\n    HeaderAcceptLanguage                  = "Accept-Language"\n    HeaderCookie                          = "Cookie"\n    HeaderExpect                          = "Expect"\n    HeaderMaxForwards                     = "Max-Forwards"\n    HeaderSetCookie                       = "Set-Cookie"\n    HeaderAccessControlAllowCredentials   = "Access-Control-Allow-Credentials"\n    HeaderAccessControlAllowHeaders       = "Access-Control-Allow-Headers"\n    HeaderAccessControlAllowMethods       = "Access-Control-Allow-Methods"\n    HeaderAccessControlAllowOrigin        = "Access-Control-Allow-Origin"\n    HeaderAccessControlExposeHeaders      = "Access-Control-Expose-Headers"\n    HeaderAccessControlMaxAge             = "Access-Control-Max-Age"\n    HeaderAccessControlRequestHeaders     = "Access-Control-Request-Headers"\n    HeaderAccessControlRequestMethod      = "Access-Control-Request-Method"\n    HeaderOrigin                          = "Origin"\n    HeaderTimingAllowOrigin               = "Timing-Allow-Origin"\n    HeaderXPermittedCrossDomainPolicies   = "X-Permitted-Cross-Domain-Policies"\n    HeaderDNT                             = "DNT"\n    HeaderTk                              = "Tk"\n    HeaderContentDisposition              = "Content-Disposition"\n    HeaderContentEncoding                 = "Content-Encoding"\n    HeaderContentLanguage                 = "Content-Language"\n    HeaderContentLength                   = "Content-Length"\n    HeaderContentLocation                 = "Content-Location"\n    HeaderContentType                     = "Content-Type"\n    HeaderForwarded                       = "Forwarded"\n    HeaderVia                             = "Via"\n    HeaderXForwardedFor                   = "X-Forwarded-For"\n    HeaderXForwardedHost                  = "X-Forwarded-Host"\n    HeaderXForwardedProto                 = "X-Forwarded-Proto"\n    HeaderXForwardedProtocol              = "X-Forwarded-Protocol"\n    HeaderXForwardedSsl                   = "X-Forwarded-Ssl"\n    HeaderXUrlScheme                      = "X-Url-Scheme"\n    HeaderLocation                        = "Location"\n    HeaderFrom                            = "From"\n    HeaderHost                            = "Host"\n    HeaderReferer                         = "Referer"\n    HeaderReferrerPolicy                  = "Referrer-Policy"\n    HeaderUserAgent                       = "User-Agent"\n    HeaderAllow                           = "Allow"\n    HeaderServer                          = "Server"\n    HeaderAcceptRanges                    = "Accept-Ranges"\n    HeaderContentRange                    = "Content-Range"\n    HeaderIfRange                         = "If-Range"\n    HeaderRange                           = "Range"\n    HeaderContentSecurityPolicy           = "Content-Security-Policy"\n    HeaderContentSecurityPolicyReportOnly = "Content-Security-Policy-Report-Only"\n    HeaderCrossOriginResourcePolicy       = "Cross-Origin-Resource-Policy"\n    HeaderExpectCT                        = "Expect-CT"\n    HeaderFeaturePolicy                   = "Feature-Policy"\n    HeaderPublicKeyPins                   = "Public-Key-Pins"\n    HeaderPublicKeyPinsReportOnly         = "Public-Key-Pins-Report-Only"\n    HeaderStrictTransportSecurity         = "Strict-Transport-Security"\n    HeaderUpgradeInsecureRequests         = "Upgrade-Insecure-Requests"\n    HeaderXContentTypeOptions             = "X-Content-Type-Options"\n    HeaderXDownloadOptions                = "X-Download-Options"\n    HeaderXFrameOptions                   = "X-Frame-Options"\n    HeaderXPoweredBy                      = "X-Powered-By"\n    HeaderXXSSProtection                  = "X-XSS-Protection"\n    HeaderLastEventID                     = "Last-Event-ID"\n    HeaderNEL                             = "NEL"\n    HeaderPingFrom                        = "Ping-From"\n    HeaderPingTo                          = "Ping-To"\n    HeaderReportTo                        = "Report-To"\n    HeaderTE                              = "TE"\n    HeaderTrailer                         = "Trailer"\n    HeaderTransferEncoding                = "Transfer-Encoding"\n    HeaderSecWebSocketAccept              = "Sec-WebSocket-Accept"\n    HeaderSecWebSocketExtensions          = "Sec-WebSocket-Extensions"\n    HeaderSecWebSocketKey                 = "Sec-WebSocket-Key"\n    HeaderSecWebSocketProtocol            = "Sec-WebSocket-Protocol"\n    HeaderSecWebSocketVersion             = "Sec-WebSocket-Version"\n    HeaderAcceptPatch                     = "Accept-Patch"\n    HeaderAcceptPushPolicy                = "Accept-Push-Policy"\n    HeaderAcceptSignature                 = "Accept-Signature"\n    HeaderAltSvc                          = "Alt-Svc"\n    HeaderDate                            = "Date"\n    HeaderIndex                           = "Index"\n    HeaderLargeAllocation                 = "Large-Allocation"\n    HeaderLink                            = "Link"\n    HeaderPushPolicy                      = "Push-Policy"\n    HeaderRetryAfter                      = "Retry-After"\n    HeaderServerTiming                    = "Server-Timing"\n    HeaderSignature                       = "Signature"\n    HeaderSignedHeaders                   = "Signed-Headers"\n    HeaderSourceMap                       = "SourceMap"\n    HeaderUpgrade                         = "Upgrade"\n    HeaderXDNSPrefetchControl             = "X-DNS-Prefetch-Control"\n    HeaderXPingback                       = "X-Pingback"\n    HeaderXRequestID                      = "X-Request-ID"\n    HeaderXRequestedWith                  = "X-Requested-With"\n    HeaderXRobotsTag                      = "X-Robots-Tag"\n    HeaderXUACompatible                   = "X-UA-Compatible"\n)\n'})})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(96540);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);