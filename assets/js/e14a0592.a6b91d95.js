"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["30724"],{22242:function(e,i,n){n.r(i),n.d(i,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"email-verification/README","title":"Email Verification Service","description":"Email verification service with code generation and validation","source":"@site/docs/recipes/email-verification/README.md","sourceDirName":"email-verification","slug":"/email-verification/","permalink":"/recipes/email-verification/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/email-verification/README.md","tags":[],"version":"current","lastUpdatedAt":1744205860000,"frontMatter":{"title":"Email Verification Service","keywords":["email","verification","smtp","golang","fiber"],"description":"Email verification service with code generation and validation"},"sidebar":"left_sidebar","previous":{"title":"Dummy JSON Proxy","permalink":"/recipes/dummyjson/"},"next":{"title":"Entgo ORM (MySQL)","permalink":"/recipes/ent-mysql/"}}'),t=n("85893"),s=n("50065");let a={title:"Email Verification Service",keywords:["email","verification","smtp","golang","fiber"],description:"Email verification service with code generation and validation"},l="Email Verification Service with Fiber",c={},o=[{value:"Features",id:"features",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Configuration",id:"configuration",level:2},{value:"API Endpoints",id:"api-endpoints",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Response Examples",id:"response-examples",level:2},{value:"How to Run",id:"how-to-run",level:2},{value:"Dependencies",id:"dependencies",level:2}];function d(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"email-verification-service-with-fiber",children:"Email Verification Service with Fiber"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://github.com/gofiber/recipes/tree/master/email-verification",children:(0,t.jsx)(i.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,t.jsx)(i.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/email-verification",children:(0,t.jsx)(i.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,t.jsx)(i.p,{children:"A clean architecture based email verification service that generates and validates verification codes."}),"\n",(0,t.jsx)(i.h2,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Clean Architecture implementation"}),"\n",(0,t.jsx)(i.li,{children:"In-memory verification code storage"}),"\n",(0,t.jsx)(i.li,{children:"SMTP email service integration"}),"\n",(0,t.jsx)(i.li,{children:"Code generation and hashing"}),"\n",(0,t.jsx)(i.li,{children:"Configurable code expiration"}),"\n",(0,t.jsx)(i.li,{children:"Thread-safe operations"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"email-verification/\n\u251C\u2500\u2500 api/\n\u2502   \u2514\u2500\u2500 handlers/         # HTTP handlers\n\u251C\u2500\u2500 application/          # Application business logic\n\u251C\u2500\u2500 domain/              # Domain models and interfaces\n\u251C\u2500\u2500 infrastructure/      # External implementations\n\u2502   \u251C\u2500\u2500 code/           # Code generation\n\u2502   \u251C\u2500\u2500 email/          # SMTP service\n\u2502   \u2514\u2500\u2500 repository/     # Data storage\n\u2514\u2500\u2500 config/             # Configuration\n"})}),"\n",(0,t.jsx)(i.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(i.p,{children:["Update ",(0,t.jsx)(i.code,{children:"config/config.go"})," with your SMTP settings:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:'func GetConfig() *Config {\n    return &Config{\n        SMTPHost:       "smtp.gmail.com",\n        SMTPPort:       587,\n        SMTPUser:       "your-email@gmail.com",\n        SMTPPassword:   "your-app-password",\n        CodeExpiration: time.Minute * 1,\n    }\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"api-endpoints",children:"API Endpoints"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Method"}),(0,t.jsx)(i.th,{children:"URL"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"POST"}),(0,t.jsxs)(i.td,{children:["/verify/send/",":email"]}),(0,t.jsx)(i.td,{children:"Send verification code"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"POST"}),(0,t.jsxs)(i.td,{children:["/verify/check/",":email","/",":code"]}),(0,t.jsx)(i.td,{children:"Verify the received code"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Send verification code:"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"curl -X POST http://localhost:3000/verify/send/user@example.com\n"})}),"\n",(0,t.jsxs)(i.ol,{start:"2",children:["\n",(0,t.jsx)(i.li,{children:"Verify code:"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"curl -X POST http://localhost:3000/verify/check/user@example.com/123456\n"})}),"\n",(0,t.jsx)(i.h2,{id:"response-examples",children:"Response Examples"}),"\n",(0,t.jsx)(i.p,{children:"Success:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n    "message": "Code verified successfully"\n}\n'})}),"\n",(0,t.jsx)(i.p,{children:"Error:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n    "error": "invalid code"\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"how-to-run",children:"How to Run"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Configure SMTP settings in ",(0,t.jsx)(i.code,{children:"config/config.go"})]}),"\n",(0,t.jsx)(i.li,{children:"Run the application:"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"go run main.go\n"})}),"\n",(0,t.jsx)(i.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/gofiber/fiber",children:"Fiber v2"})}),"\n",(0,t.jsx)(i.li,{children:"Go 1.21+"}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return l},a:function(){return a}});var r=n(67294);let t={},s=r.createContext(t);function a(e){let i=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);