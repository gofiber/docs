"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["5383"],{28441:function(e,i,t){t.r(i),t.d(i,{metadata:()=>n,contentTitle:()=>r,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>o});var n=JSON.parse('{"id":"geoip-maxmind/README","title":"GeoIP + MaxMind","description":"Geolocation with GeoIP and MaxMind databases.","source":"@site/docs/recipes/geoip-maxmind/README.md","sourceDirName":"geoip-maxmind","slug":"/geoip-maxmind/","permalink":"/recipes/geoip-maxmind/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/geoip-maxmind/README.md","tags":[],"version":"current","lastUpdatedAt":1732892323000,"frontMatter":{"title":"GeoIP + MaxMind","keywords":["geoip","maxmind","databases"],"description":"Geolocation with GeoIP and MaxMind databases."},"sidebar":"left_sidebar","previous":{"title":"GeoIP","permalink":"/recipes/geoip/"},"next":{"title":"GORM","permalink":"/recipes/gorm/"}}'),s=t("85893"),a=t("50065");let o={title:"GeoIP + MaxMind",keywords:["geoip","maxmind","databases"],description:"Geolocation with GeoIP and MaxMind databases."},r="GeoIP (with MaxMind databases)",d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Example response",id:"example-response",level:3}];function c(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"geoip-with-maxmind-databases",children:"GeoIP (with MaxMind databases)"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"https://github.com/gofiber/recipes/tree/master/geoip-maxmind",children:(0,s.jsx)(i.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,s.jsx)(i.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/geoip-maxmind",children:(0,s.jsx)(i.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,s.jsx)(i.p,{children:"This is an alternative method to resolve IP addresses to real-world location data using MaxMind GeoLite2 City databases."}),"\n",(0,s.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(i.p,{children:["Before you run this, you must first download a database from the MaxMind website - ",(0,s.jsx)(i.a,{href:"https://dev.maxmind.com/geoip/geoip2/geolite2/",children:"https://dev.maxmind.com/geoip/geoip2/geolite2/"}),". To do this, you may need to register for a free account."]}),"\n",(0,s.jsxs)(i.p,{children:["The database you need to download is the one with the edition ID ",(0,s.jsx)(i.code,{children:"GeoLite2-City"}),". Place it in this folder and run"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"go run geoip-maxmind\n"})}),"\n",(0,s.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(i.p,{children:["Make a request to ",(0,s.jsx)(i.code,{children:"http://127.0.0.1:3000/geo/178.62.56.160"}),", for example. You can omit an IP address to use your current IP address, or replace to use another. If the IP address is invalid, a HTTP 400 is returned."]}),"\n",(0,s.jsxs)(i.p,{children:["The response fields can be modified from the ",(0,s.jsx)(i.code,{children:"ipLookup"})," struct, found in the ",(0,s.jsx)(i.code,{children:"handlers/handlers.go"})," file."]}),"\n",(0,s.jsx)(i.h3,{id:"example-response",children:"Example response"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'{\n  "City": {\n    "GeoNameID": 2643743,\n    "Names": {\n      "de": "London",\n      "en": "London",\n      "es": "Londres",\n      "fr": "Londres",\n      "ja": "\u30ED\u30F3\u30C9\u30F3",\n      "pt-BR": "Londres",\n      "ru": "\u041B\u043E\u043D\u0434\u043E\u043D",\n      "zh-CN": "\u4F26\u6566"\n    }\n  },\n  "Country": {\n    "IsoCode": "GB"\n  },\n  "Location": {\n    "AccuracyRadius": 50\n  }\n}\n'})})]})}function h(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return r},a:function(){return o}});var n=t(67294);let s={},a=n.createContext(s);function o(e){let i=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);