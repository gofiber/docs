"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[35087],{15126:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=r(74848),i=r(28453);const l={id:"otelfiber"},s="Otelfiber",o={id:"otelfiber/otelfiber",title:"Otelfiber",description:"Release",source:"@site/contrib_versioned_docs/version-hcaptcha_v0.x.x/otelfiber/README.md",sourceDirName:"otelfiber",slug:"/otelfiber/",permalink:"/contrib/hcaptcha_v0.x.x/otelfiber/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/otelfiber/README.md",tags:[],version:"hcaptcha_v0.x.x",lastUpdatedAt:1720020621e3,frontMatter:{id:"otelfiber"},sidebar:"tutorialSidebar",previous:{title:"Opafiber",permalink:"/contrib/hcaptcha_v0.x.x/opafiber/"},next:{title:"Example",permalink:"/contrib/hcaptcha_v0.x.x/otelfiber/example/"}},c={},d=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:2},{value:"Config",id:"config",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"otelfiber",children:"Otelfiber"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=otelfiber*",alt:"Release"}),"\n",(0,n.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,n.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,n.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,n.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://opentelemetry.io/",children:"OpenTelemetry"})," support for Fiber."]}),"\n",(0,n.jsxs)(t.p,{children:["Can be found on ",(0,n.jsx)(t.a,{href:"https://opentelemetry.io/registry/instrumentation-go-fiber/",children:"OpenTelemetry Registry"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Note: Requires Go 1.19 and above"})}),"\n",(0,n.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,n.jsx)(t.p,{children:"This middleware supports Fiber v2."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"go get -u github.com/gofiber/contrib/otelfiber/v2\n"})}),"\n",(0,n.jsx)(t.h2,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"otelfiber.Middleware(opts ...otelfiber.Option) fiber.Handler\n"})}),"\n",(0,n.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,n.jsx)(t.p,{children:"You can configure the middleware using functional parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Function"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Argument Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"WithNext"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Define a function to skip this middleware when returned true ."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"nil"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"WithTracerProvider"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"oteltrace.TracerProvider"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Specifies a tracer provider to use for creating a tracer."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"nil - the global tracer provider is used"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"WithMeterProvider"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"otelmetric.MeterProvider"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Specifies a meter provider to use for reporting."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"nil - the global meter provider is used"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"WithPort"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"int"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Specifies the value to use when setting the ",(0,n.jsx)(t.code,{children:"net.host.port"})," attribute on metrics/spans."]}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Defaults to (",(0,n.jsx)(t.code,{children:"80"})," for ",(0,n.jsx)(t.code,{children:"http"}),", ",(0,n.jsx)(t.code,{children:"443"})," for ",(0,n.jsx)(t.code,{children:"https"}),")"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"WithPropagators"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"propagation.TextMapPropagator"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Specifies propagators to use for extracting information from the HTTP requests."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"If none are specified, global ones will be used"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"WithServerName"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Specifies the value to use when setting the ",(0,n.jsx)(t.code,{children:"http.server_name"})," attribute on metrics/spans."]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"WithSpanNameFormatter"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"func(*fiber.Ctx) string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Takes a function that will be called on every request and the returned string will become the span Name."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Default formatter returns the route pathRaw"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"WithCustomAttributes"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"func(*fiber.Ctx) []attribute.KeyValue"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Define a function to add custom attributes to the span."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"nil"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"WithCollectClientIP"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"bool"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Specifies whether to collect the client's IP address from the request."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"true"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["Please refer to ",(0,n.jsx)(t.a,{href:"./example",children:"example"})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"context"\n\t"errors"\n\t"log"\n\n\t"go.opentelemetry.io/otel/sdk/resource"\n\n\t"github.com/gofiber/fiber/v2"\n\n\t"github.com/gofiber/contrib/otelfiber"\n\t"go.opentelemetry.io/otel"\n\t"go.opentelemetry.io/otel/attribute"\n\tstdout "go.opentelemetry.io/otel/exporters/stdout/stdouttrace"\n\n\t//"go.opentelemetry.io/otel/exporters/jaeger"\n\t"go.opentelemetry.io/otel/propagation"\n\tsdktrace "go.opentelemetry.io/otel/sdk/trace"\n\tsemconv "go.opentelemetry.io/otel/semconv/v1.4.0"\n\toteltrace "go.opentelemetry.io/otel/trace"\n)\n\nvar tracer = otel.Tracer("fiber-server")\n\nfunc main() {\n\ttp := initTracer()\n\tdefer func() {\n\t\tif err := tp.Shutdown(context.Background()); err != nil {\n\t\t\tlog.Printf("Error shutting down tracer provider: %v", err)\n\t\t}\n\t}()\n\n\tapp := fiber.New()\n\n\tapp.Use(otelfiber.Middleware())\n\n\tapp.Get("/error", func(ctx *fiber.Ctx) error {\n\t\treturn errors.New("abc")\n\t})\n\n\tapp.Get("/users/:id", func(c *fiber.Ctx) error {\n\t\tid := c.Params("id")\n\t\tname := getUser(c.UserContext(), id)\n\t\treturn c.JSON(fiber.Map{"id": id, name: name})\n\t})\n\n\tlog.Fatal(app.Listen(":3000"))\n}\n\nfunc initTracer() *sdktrace.TracerProvider {\n\texporter, err := stdout.New(stdout.WithPrettyPrint())\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\ttp := sdktrace.NewTracerProvider(\n\t\tsdktrace.WithSampler(sdktrace.AlwaysSample()),\n\t\tsdktrace.WithBatcher(exporter),\n\t\tsdktrace.WithResource(\n\t\t\tresource.NewWithAttributes(\n\t\t\t\tsemconv.SchemaURL,\n\t\t\t\tsemconv.ServiceNameKey.String("my-service"),\n\t\t\t)),\n\t)\n\totel.SetTracerProvider(tp)\n\totel.SetTextMapPropagator(propagation.NewCompositeTextMapPropagator(propagation.TraceContext{}, propagation.Baggage{}))\n\treturn tp\n}\n\nfunc getUser(ctx context.Context, id string) string {\n\t_, span := tracer.Start(ctx, "getUser", oteltrace.WithAttributes(attribute.String("id", id)))\n\tdefer span.End()\n\tif id == "123" {\n\t\treturn "otelfiber tester"\n\t}\n\treturn "unknown"\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var n=r(96540);const i={},l=n.createContext(i);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);