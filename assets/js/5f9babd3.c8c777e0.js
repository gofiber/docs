"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["56675"],{5564:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"rss-feed/README","title":"RSS Feed","description":"Generating an RSS feed.","source":"@site/docs/recipes/rss-feed/README.md","sourceDirName":"rss-feed","slug":"/rss-feed/","permalink":"/recipes/rss-feed/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/recipes/edit/master/rss-feed/README.md","tags":[],"version":"current","lastUpdatedAt":1733054881000,"frontMatter":{"title":"RSS Feed","keywords":["rss","feed"],"description":"Generating an RSS feed."},"sidebar":"left_sidebar","previous":{"title":"Recover Middleware","permalink":"/recipes/recover/"},"next":{"title":"Server Timing","permalink":"/recipes/server-timing/"}}'),s=i("85893"),t=i("50065");let l={title:"RSS Feed",keywords:["rss","feed"],description:"Generating an RSS feed."},o="RSS Feed",a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Example",id:"example",level:2},{value:"References",id:"references",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"rss-feed",children:"RSS Feed"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/gofiber/recipes/tree/master/rss-feed",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=Github&color=2ea44f&style=for-the-badge&logo=github",alt:"Github"})})," ",(0,s.jsx)(n.a,{href:"https://stackblitz.com/github/gofiber/recipes/tree/master/rss-feed",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/static/v1?label=&message=StackBlitz&color=2ea44f&style=for-the-badge&logo=StackBlitz",alt:"StackBlitz"})})]}),"\n",(0,s.jsx)(n.p,{children:"This project demonstrates how to create an RSS feed in a Go application using the Fiber framework."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Ensure you have the following installed:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Golang"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})," package"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Clone the repository:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/gofiber/recipes.git\ncd recipes/rss-feed\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install dependencies:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"go get\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Start the application:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"go run main.go\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Here is an example of how to create an RSS feed in a Fiber application:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gorilla/feeds"\n    "time"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/rss", func(c *fiber.Ctx) error {\n        feed := &feeds.Feed{\n            Title:       "Example RSS Feed",\n            Link:        &feeds.Link{Href: "http://example.com/rss"},\n            Description: "This is an example RSS feed",\n            Author:      &feeds.Author{Name: "John Doe", Email: "john@example.com"},\n            Created:     time.Now(),\n        }\n\n        feed.Items = []*feeds.Item{\n            {\n                Title:       "First Post",\n                Link:        &feeds.Link{Href: "http://example.com/post/1"},\n                Description: "This is the first post",\n                Author:      &feeds.Author{Name: "John Doe", Email: "john@example.com"},\n                Created:     time.Now(),\n            },\n            {\n                Title:       "Second Post",\n                Link:        &feeds.Link{Href: "http://example.com/post/2"},\n                Description: "This is the second post",\n                Author:      &feeds.Author{Name: "Jane Doe", Email: "jane@example.com"},\n                Created:     time.Now(),\n            },\n        }\n\n        rss, err := feed.ToRss()\n        if err != nil {\n            return err\n        }\n\n        c.Set("Content-Type", "application/rss+xml")\n        return c.SendString(rss)\n    })\n\n    app.Listen(":3000")\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.gofiber.io",children:"Fiber Documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gorilla/feeds",children:"Gorilla Feeds Documentation"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return l}});var r=i(67294);let s={},t=r.createContext(s);function l(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);