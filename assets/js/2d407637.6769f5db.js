"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["8649"],{25767:function(e,s,t){t.r(s),t.d(s,{default:()=>d,frontMatter:()=>o,metadata:()=>n,assets:()=>c,toc:()=>a,contentTitle:()=>l});var n=JSON.parse('{"id":"csrf/README","title":"CSRF","description":"Cross-Site Request Forgery (CSRF) protection.","source":"@site/docs/recipes/csrf/README.md","sourceDirName":"csrf","slug":"/csrf/","permalink":"/recipes/csrf/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/csrf/README.md","tags":[],"version":"current","lastUpdatedAt":1741158213000,"frontMatter":{"title":"CSRF","keywords":["csrf","security","hacking","vulnerability"],"description":"Cross-Site Request Forgery (CSRF) protection."},"sidebar":"left_sidebar","previous":{"title":"Colly Gorm","permalink":"/recipes/colly-gorm/"},"next":{"title":"CSRF + Session","permalink":"/recipes/csrf-with-session/"}}'),r=t("85893"),i=t("50065");let o={title:"CSRF",keywords:["csrf","security","hacking","vulnerability"],description:"Cross-Site Request Forgery (CSRF) protection."},l="CSRF Examples",c={},a=[{value:"Requirements",id:"requirements",level:2},{value:"Install Go Modules",id:"install-go-modules",level:2},{value:"Try the demo",id:"try-the-demo",level:2},{value:"See the &quot;fixed&quot; version",id:"see-the-fixed-version",level:2},{value:"Going further",id:"going-further",level:2}];function h(e){let s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"csrf-examples",children:"CSRF Examples"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://github.com/gofiber/recipes/tree/master/csrf",children:(0,r.jsx)(s.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,r.jsx)(s.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/csrf",children:(0,r.jsx)(s.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,r.jsx)(s.p,{children:"Example Cross Site Request Forgery (CSRF) vulnerabilities in action."}),"\n",(0,r.jsx)(s.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://git-scm.com/downloads",children:"git"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://golang.org/",children:"Golang"})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"install-go-modules",children:"Install Go Modules"}),"\n",(0,r.jsx)(s.p,{children:'Like any golang project, you will need to download and install the required modules for the project to run. Change into the "csrf" directory:'}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"cd csrf\n"})}),"\n",(0,r.jsx)(s.p,{children:"And then:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"go mod vendor && go mod download && go mod tidy\n"})}),"\n",(0,r.jsxs)(s.p,{children:["This command installs the golang dependencies needed to run the project in a new directory named ",(0,r.jsx)(s.code,{children:"vendor"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Once the modules have finished installing, you can run the project like this:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"go run main.go\n"})}),"\n",(0,r.jsx)(s.p,{children:"OR"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"go run main.go withoutCsrf\n"})}),"\n",(0,r.jsx)(s.p,{children:"You should see the following if everything is OK:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"Server started and listening at localhost:3000\n"})}),"\n",(0,r.jsx)(s.h2,{id:"try-the-demo",children:"Try the demo"}),"\n",(0,r.jsx)(s.p,{children:"Start the server without csrf, to see the dangers of these attacks"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"go run main.go withoutCsrf\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Open your browser to and navigate to ",(0,r.jsx)(s.a,{href:"http://localhost:3000",children:"localhost:3000"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Login using the test account:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Username: ",(0,r.jsx)(s.code,{children:"bob"})]}),"\n",(0,r.jsxs)(s.li,{children:["Password: ",(0,r.jsx)(s.code,{children:"test"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["In a new tab, navigate to ",(0,r.jsx)(s.a,{href:"http://localhost:3001",children:"localhost:3001"})," to view some examples of CSRF exploits. You will notice that the balance goes down everytime you load that page. This is because the page is successfully exploiting a CSRF vulnerability."]}),"\n",(0,r.jsx)(s.h2,{id:"see-the-fixed-version",children:'See the "fixed" version'}),"\n",(0,r.jsxs)(s.p,{children:["To see the csrf version of this demo, just stop the server by pressing ",(0,r.jsx)(s.strong,{children:"CTRL + C"})," to kill the server process and then run"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"go run main.go\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Navigate again to ",(0,r.jsx)(s.a,{href:"http://localhost:3000",children:"localhost:3000"})," and login to the test account."]}),"\n",(0,r.jsxs)(s.p,{children:["And once more try the page with the CSRF exploits: ",(0,r.jsx)(s.a,{href:"http://localhost:3001",children:"localhost:3001"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"You will notice now that the account balance is unchanged."}),"\n",(0,r.jsx)(s.h2,{id:"going-further",children:"Going further"}),"\n",(0,r.jsx)(s.p,{children:"Here are some useful links where you can learn more about this topic:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery",children:"https://en.wikipedia.org/wiki/Cross-site_request_forgery"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)",children:"https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)"})}),"\n"]})]})}function d(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,s,t){t.d(s,{Z:function(){return l},a:function(){return o}});var n=t(67294);let r={},i=n.createContext(r);function o(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);