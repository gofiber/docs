"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["14032"],{71021:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>a,toc:()=>o,contentTitle:()=>c});var i=JSON.parse('{"id":"https-pkcs12-tls/README","title":"HTTPS with PKCS12 TLS","description":"Setting up an HTTPS server with PKCS12 TLS certificates.","source":"@site/docs/recipes/https-pkcs12-tls/README.md","sourceDirName":"https-pkcs12-tls","slug":"/https-pkcs12-tls/","permalink":"/recipes/https-pkcs12-tls/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/https-pkcs12-tls/README.md","tags":[],"version":"current","lastUpdatedAt":1740509232000,"frontMatter":{"title":"HTTPS with PKCS12 TLS","keywords":["https","tls","pkcs12"],"description":"Setting up an HTTPS server with PKCS12 TLS certificates."},"sidebar":"left_sidebar","previous":{"title":"Hexagonal Architecture","permalink":"/recipes/hexagonal/"},"next":{"title":"HTTPS with TLS","permalink":"/recipes/https-tls/"}}'),r=n("85893"),s=n("50065");let l={title:"HTTPS with PKCS12 TLS",keywords:["https","tls","pkcs12"],description:"Setting up an HTTPS server with PKCS12 TLS certificates."},c="HTTPS with PKCS12 TLS Example",a={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}];function p(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"https-with-pkcs12-tls-example",children:"HTTPS with PKCS12 TLS Example"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/gofiber/recipes/tree/master/https-pkcs12-tls",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,r.jsx)(t.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/https-pkcs12-tls",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,r.jsx)(t.p,{children:"This project demonstrates how to set up an HTTPS server with PKCS12 TLS in a Go application using the Fiber framework."}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"Ensure you have the following installed:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Golang"}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," package"]}),"\n",(0,r.jsxs)(t.li,{children:["PKCS12 certificate file (",(0,r.jsx)(t.code,{children:"cert.p12"}),")"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Clone the repository:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/https-pkcs12-tls\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Install dependencies:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"go get\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Place your PKCS12 certificate file (",(0,r.jsx)(t.code,{children:"cert.p12"}),") in the project directory."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Start the application:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Access the application at ",(0,r.jsx)(t.code,{children:"https://localhost:3000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"Here is an example of how to set up an HTTPS server with PKCS12 TLS in a Fiber application:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "crypto/tls"\n    "crypto/x509"\n    "encoding/pem"\n    "io/ioutil"\n    "log"\n\n    "github.com/gofiber/fiber/v2"\n    "golang.org/x/crypto/pkcs12"\n)\n\nfunc main() {\n    // Load PKCS12 certificate\n    p12Data, err := ioutil.ReadFile("cert.p12")\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // Decode PKCS12 certificate\n    blocks, err := pkcs12.ToPEM(p12Data, "password")\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    var pemData []byte\n    for _, b := range blocks {\n        pemData = append(pemData, pem.EncodeToMemory(b)...)\n    }\n\n    // Load certificate and key\n    cert, err := tls.X509KeyPair(pemData, pemData)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // Create TLS configuration\n    tlsConfig := &tls.Config{\n        Certificates: []tls.Certificate{cert},\n        ClientCAs:    x509.NewCertPool(),\n    }\n\n    // Fiber instance\n    app := fiber.New()\n\n    // Routes\n    app.Get("/", func(c *fiber.Ctx) error {\n        return c.SendString("Hello, HTTPS with PKCS12 TLS!")\n    })\n\n    // Start server with TLS\n    log.Fatal(app.ListenTLS(":3000", tlsConfig))\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://golang.org/pkg/crypto/tls/",children:"TLS in Go"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://pkg.go.dev/golang.org/x/crypto/pkcs12",children:"PKCS12 in Go"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return l}});var i=n(67294);let r={},s=i.createContext(r);function l(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);