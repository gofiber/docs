"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["5976"],{29660:function(e,i,n){n.r(i),n.d(i,{metadata:()=>t,contentTitle:()=>l,default:()=>p,assets:()=>a,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"geoip/README","title":"GeoIP","description":"Geolocation with GeoIP.","source":"@site/docs/recipes/geoip/README.md","sourceDirName":"geoip","slug":"/geoip/","permalink":"/recipes/geoip/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/geoip/README.md","tags":[],"version":"current","lastUpdatedAt":1735889916000,"frontMatter":{"title":"GeoIP","keywords":["geoip","maxmind","ip"],"description":"Geolocation with GeoIP."},"sidebar":"left_sidebar","previous":{"title":"Google Cloud Firebase","permalink":"/recipes/gcloud-firebase/"},"next":{"title":"GeoIP + MaxMind","permalink":"/recipes/geoip-maxmind/"}}'),r=n("85893"),s=n("50065");let o={title:"GeoIP",keywords:["geoip","maxmind","ip"],description:"Geolocation with GeoIP."},l="GeoIP Example",a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}];function d(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"geoip-example",children:"GeoIP Example"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"https://github.com/gofiber/recipes/tree/master/geoip",children:(0,r.jsx)(i.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,r.jsx)(i.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/geoip",children:(0,r.jsx)(i.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,r.jsx)(i.p,{children:"This project demonstrates how to set up a GeoIP lookup service in a Go application using the Fiber framework."}),"\n",(0,r.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(i.p,{children:"Ensure you have the following installed:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Golang"}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," package"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"https://github.com/oschwald/geoip2-golang",children:"MaxMind GeoIP2"})," package"]}),"\n",(0,r.jsxs)(i.li,{children:["GeoIP2 database file (e.g., ",(0,r.jsx)(i.code,{children:"GeoLite2-City.mmdb"}),")"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Clone the repository:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/geoip\n"})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Install dependencies:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"go get\n"})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Download the GeoIP2 database file and place it in the project directory."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Start the application:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Access the application at ",(0,r.jsx)(i.code,{children:"http://localhost:3000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(i.p,{children:["Here is an example ",(0,r.jsx)(i.code,{children:"main.go"})," file for the Fiber application with GeoIP lookup:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-go",children:'package main\n\nimport (\n    "log"\n    "github.com/gofiber/fiber/v2"\n    "github.com/oschwald/geoip2-golang"\n    "net"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    db, err := geoip2.Open("GeoLite2-City.mmdb")\n    if err != nil {\n        log.Fatal(err)\n    }\n    defer db.Close()\n\n    app.Get("/geoip/:ip", func(c *fiber.Ctx) error {\n        ip := c.Params("ip")\n        parsedIP := net.ParseIP(ip)\n        record, err := db.City(parsedIP)\n        if err != nil {\n            return c.Status(500).SendString(err.Error())\n        }\n        return c.JSON(record)\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,r.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://pkg.go.dev/github.com/oschwald/geoip2-golang",children:"MaxMind GeoIP2 Documentation"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://dev.maxmind.com/geoip/geolite2-free-geolocation-data",children:"GeoIP2 Database"})}),"\n"]})]})}function p(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return l},a:function(){return o}});var t=n(67294);let r={},s=t.createContext(r);function o(e){let i=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);