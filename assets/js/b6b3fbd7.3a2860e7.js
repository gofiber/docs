"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["25471"],{41264:function(e,s,n){n.r(s),n.d(s,{default:()=>d,frontMatter:()=>o,metadata:()=>i,assets:()=>a,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"csrf-with-session/README","title":"CSRF + Session","description":"Cross-Site Request Forgery (CSRF) protection with session management.","source":"@site/docs/recipes/csrf-with-session/README.md","sourceDirName":"csrf-with-session","slug":"/csrf-with-session/","permalink":"/recipes/csrf-with-session/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/csrf-with-session/README.md","tags":[],"version":"current","lastUpdatedAt":1741158213000,"frontMatter":{"title":"CSRF + Session","keywords":["csrf","security","hacking","vulnerability","session"],"description":"Cross-Site Request Forgery (CSRF) protection with session management."},"sidebar":"left_sidebar","previous":{"title":"CSRF","permalink":"/recipes/csrf/"},"next":{"title":"Docker + MariaDB","permalink":"/recipes/docker-mariadb-clean-arch/"}}'),t=n("85893"),r=n("50065");let o={title:"CSRF + Session",keywords:["csrf","security","hacking","vulnerability","session"],description:"Cross-Site Request Forgery (CSRF) protection with session management."},l="CSRF-with-session Example",a={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Install Go Modules",id:"install-go-modules",level:2},{value:"Try the demo",id:"try-the-demo",level:2},{value:"Accept the self-signed certificate warning and visit the site.",id:"accept-the-self-signed-certificate-warning-and-visit-the-site",level:3},{value:"Try to access the /protected page",id:"try-to-access-the-protected-page",level:3},{value:"Submit the form on the /protected page",id:"submit-the-form-on-the-protected-page",level:3},{value:"CSRF Protection",id:"csrf-protection",level:2},{value:"Token Lifecycle",id:"token-lifecycle",level:2},{value:"Session Storage",id:"session-storage",level:2},{value:"Note on pre-sessions",id:"note-on-pre-sessions",level:3},{value:"Going further",id:"going-further",level:2}];function h(e){let s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"csrf-with-session-example",children:"CSRF-with-session Example"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://github.com/gofiber/recipes/tree/master/csrf-with-session",children:(0,t.jsx)(s.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,t.jsx)(s.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/csrf-with-session",children:(0,t.jsx)(s.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,t.jsx)(s.p,{children:"Example GoFiber web app using Cross Site Request Forgery (CSRF) middleware with session."}),"\n",(0,t.jsx)(s.p,{children:"This example impliments multiple best-practices for CSRF protection:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"CSRF Tokens are linked to the user's session."}),"\n",(0,t.jsx)(s.li,{children:"Pre-sessions are used, so that CSRF tokens are always available, even for anonymous users (eg for login forms)."}),"\n",(0,t.jsxs)(s.li,{children:["Cookies are set with a defense-in-depth approach:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Secure: true"}),"\n",(0,t.jsx)(s.li,{children:"HttpOnly: true"}),"\n",(0,t.jsx)(s.li,{children:"SameSite: Lax"}),"\n",(0,t.jsx)(s.li,{children:"Expiration: 30 minutes (of inactivity)"}),"\n",(0,t.jsxs)(s.li,{children:['Cookie names are prefixed with "__Host-" (see ',(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie",children:"MDN-Set-Cookie"})," for more information))"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://git-scm.com/downloads",children:"git"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://golang.org/",children:"Golang"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"install-go-modules",children:"Install Go Modules"}),"\n",(0,t.jsx)(s.p,{children:'Like any golang project, you will need to download and install the required modules for the project to run. Change into the "csrf-with-session" directory:'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"cd csrf-with-session\n"})}),"\n",(0,t.jsx)(s.p,{children:"And then:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"go mod vendor && go mod download && go mod tidy\n"})}),"\n",(0,t.jsxs)(s.p,{children:["This command installs the golang dependencies needed to run the project in a new directory named ",(0,t.jsx)(s.code,{children:"vendor"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Once the modules have finished installing, you can run the project like this:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"go run main.go\n"})}),"\n",(0,t.jsx)(s.p,{children:"You should see the following if everything is OK:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"Server started and listening at 127.0.0.1:8443\n"})}),"\n",(0,t.jsx)(s.h2,{id:"try-the-demo",children:"Try the demo"}),"\n",(0,t.jsx)(s.p,{children:"Start the server by running:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"go run main.go\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Open your browser to and navigate to ",(0,t.jsx)(s.a,{href:"http://127.0.0.1:8443",children:"127.0.0.1:8443"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"accept-the-self-signed-certificate-warning-and-visit-the-site",children:"Accept the self-signed certificate warning and visit the site."}),"\n",(0,t.jsx)(s.p,{children:"In Chrome:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'Click on "Advanced"'}),"\n",(0,t.jsx)(s.li,{children:'Click on "Proceed to 127.0.0.1:8443 (unsafe)"'}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"In Firefox:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'Click on "Advanced"'}),"\n",(0,t.jsx)(s.li,{children:'Click on "Accept the Risk and Continue"'}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"In Safari:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'Click on "Show Details"'}),"\n",(0,t.jsx)(s.li,{children:'Click on "visit this website"'}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"try-to-access-the-protected-page",children:"Try to access the /protected page"}),"\n",(0,t.jsx)(s.p,{children:"Login using one of the test accounts:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Username: ",(0,t.jsx)(s.code,{children:"user1"})]}),"\n",(0,t.jsxs)(s.li,{children:["Password: ",(0,t.jsx)(s.code,{children:"password1"}),"\nOR"]}),"\n",(0,t.jsxs)(s.li,{children:["Username: ",(0,t.jsx)(s.code,{children:"user2"})]}),"\n",(0,t.jsxs)(s.li,{children:["Password: ",(0,t.jsx)(s.code,{children:"password2"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Once logged in, you will be able to see the /protected page."}),"\n",(0,t.jsx)(s.h3,{id:"submit-the-form-on-the-protected-page",children:"Submit the form on the /protected page"}),"\n",(0,t.jsx)(s.p,{children:"Once logged in, you will be able to see the /protected page. The /protected page contains a form that submits to the /protected page. If you try to submit the form without a valid CSRF token, you will get a 403 Forbidden error."}),"\n",(0,t.jsx)(s.h2,{id:"csrf-protection",children:"CSRF Protection"}),"\n",(0,t.jsx)(s.p,{children:"All methods except GET, HEAD, OPTIONS, and TRACE are checked for the CSRF token. If the token is not present or does not match the token in the session, the request is aborted with a 403 Forbidden error."}),"\n",(0,t.jsx)(s.h2,{id:"token-lifecycle",children:"Token Lifecycle"}),"\n",(0,t.jsx)(s.p,{children:"The CSRF token is generated when the user visits any page on the site. The token is stored in the session and is valid for until it expires, or the authorization scope changes (e.g. the user logs in, or logs out)."}),"\n",(0,t.jsx)(s.p,{children:"It is important that CSRF tokens do not persist beyond the scope of the user's session, that a new session is created when the user logs in, and that the session is destroyed when the user logs out."}),"\n",(0,t.jsxs)(s.p,{children:["The CSRF middleware has a ",(0,t.jsx)(s.code,{children:"SingleUseToken"})," configuration option that can be used to generate a new token for each request. This is useful for some applications, but is not used in this example. Single use tokens have usability implications in scenarios where the user has multiple tabs open, or when the user uses the back button in their browser."]}),"\n",(0,t.jsx)(s.h2,{id:"session-storage",children:"Session Storage"}),"\n",(0,t.jsxs)(s.p,{children:["Sessions are stored in memory for this example, but you can use any session store you like. See the ",(0,t.jsx)(s.a,{href:"https://docs.gofiber.io/api/middleware/session",children:"Fiber session documentation"})," for more information."]}),"\n",(0,t.jsx)(s.h3,{id:"note-on-pre-sessions",children:"Note on pre-sessions"}),"\n",(0,t.jsxs)(s.p,{children:["GoFiber's CSRF middleware will automatically create a session if one does not exist. That means that we always have pre-sessions when using the CSRF middleware. In this example we set a session variable ",(0,t.jsx)(s.code,{children:"loggedIn"}),"\nto ",(0,t.jsx)(s.code,{children:"true"})," when the user logs in, in order to distinguish between logged in and logged out users."]}),"\n",(0,t.jsx)(s.h2,{id:"going-further",children:"Going further"}),"\n",(0,t.jsx)(s.p,{children:"Here are some useful links where you can learn more about this topic:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery",children:"https://en.wikipedia.org/wiki/Cross-site_request_forgery"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)",children:"https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)"})}),"\n"]})]})}function d(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},50065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return o}});var i=n(67294);let t={},r=i.createContext(t);function o(e){let s=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);