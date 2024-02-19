"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[74559],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(t),m=i,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return t?n.createElement(d,a(a({ref:r},s),{},{components:t})):n.createElement(d,a({ref:r},s))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[f]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53059:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(87462),i=(t(67294),t(3905));const o={id:"otelfiber-example"},a="Example",l={unversionedId:"otelfiber/example/otelfiber-example",id:"version-fibernewrelic_v1.x.x/otelfiber/example/otelfiber-example",title:"Example",description:"An HTTP server using gofiber fiber and instrumentation. The server has a",source:"@site/contrib_versioned_docs/version-fibernewrelic_v1.x.x/otelfiber/example/README.md",sourceDirName:"otelfiber/example",slug:"/otelfiber/example/",permalink:"/contrib/fibernewrelic_v1.x.x/otelfiber/example/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/otelfiber/example/README.md",tags:[],version:"fibernewrelic_v1.x.x",lastUpdatedAt:1708310554,formattedLastUpdatedAt:"Feb 19, 2024",frontMatter:{id:"otelfiber-example"},sidebar:"tutorialSidebar",previous:{title:"Otelfiber",permalink:"/contrib/fibernewrelic_v1.x.x/otelfiber/"},next:{title:"Paseto",permalink:"/contrib/fibernewrelic_v1.x.x/paseto/"}},p={},c=[],s={toc:c},f="wrapper";function u(e){let{components:r,...t}=e;return(0,i.kt)(f,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"example"},"Example"),(0,i.kt)("p",null,"An HTTP server using gofiber fiber and instrumentation. The server has a\n",(0,i.kt)("inlineCode",{parentName:"p"},"/users/:id")," endpoint. The server generates span information to\n",(0,i.kt)("inlineCode",{parentName:"p"},"stdout"),"."),(0,i.kt)("p",null,"These instructions expect you have\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"docker-compose")," installed."),(0,i.kt)("p",null,"Bring up the ",(0,i.kt)("inlineCode",{parentName:"p"},"fiber-server")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"fiber-client")," services to run the\nexample:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up --detach fiber-server fiber-client\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"fiber-client")," service sends just one HTTP request to ",(0,i.kt)("inlineCode",{parentName:"p"},"fiber-server"),"\nand then exits. View the span generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"fiber-server")," in the logs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose logs fiber-server\n")),(0,i.kt)("p",null,"Shut down the services when you are finished with the example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose down\n")))}u.isMDXComponent=!0}}]);