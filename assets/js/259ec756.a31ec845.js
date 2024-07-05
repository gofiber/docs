"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[69293],{30217:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>g});var l=o(74848),t=o(28453);const r={id:"log",title:"\ud83d\udcc3 Log",description:"Fiber's built-in log package",sidebar_position:6},i=void 0,s={id:"api/log",title:"\ud83d\udcc3 Log",description:"Fiber's built-in log package",source:"@site/versioned_docs/version-v2.x/api/log.md",sourceDirName:"api",slug:"/api/log",permalink:"/api/log",draft:!1,unlisted:!1,tags:[],version:"v2.x",lastUpdatedAt:1720163171e3,sidebarPosition:6,frontMatter:{id:"log",title:"\ud83d\udcc3 Log",description:"Fiber's built-in log package",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf0e Client",permalink:"/api/client"},next:{title:"\ud83e\uddec Middleware",permalink:"/category/-middleware"}},a={},g=[{value:"Log levels",id:"log-levels",level:2},{value:"Custom log",id:"custom-log",level:2},{value:"Print log",id:"print-log",level:2},{value:"Global log",id:"global-log",level:2},{value:"Set Level",id:"set-level",level:2},{value:"Set output",id:"set-output",level:2},{value:"Bind context",id:"bind-context",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"We can use logs to observe program behavior, diagnose problems, or configure corresponding alarms.\nAnd defining a well structured log can improve search efficiency and facilitate handling of problems."}),"\n",(0,l.jsxs)(n.p,{children:["Fiber provides a default way to print logs in the standard output.\nIt also provides several global functions, such as ",(0,l.jsx)(n.code,{children:"log.Info"}),", ",(0,l.jsx)(n.code,{children:"log.Errorf"}),", ",(0,l.jsx)(n.code,{children:"log.Warnw"}),", etc."]}),"\n",(0,l.jsx)(n.h2,{id:"log-levels",children:"Log levels"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"const (\n\tLevelTrace Level = iota\n\tLevelDebug\n\tLevelInfo\n\tLevelWarn\n\tLevelError\n\tLevelFatal\n\tLevelPanic\n)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"custom-log",children:"Custom log"}),"\n",(0,l.jsxs)(n.p,{children:["Fiber provides the ",(0,l.jsx)(n.code,{children:"AllLogger"})," interface for adapting the various log libraries."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"type CommonLogger interface {\n    Logger\n    FormatLogger\n    WithLogger\n}\n\ntype AllLogger interface {\n    CommonLogger\n    ControlLogger\n    WithLogger\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"print-log",children:"Print log"}),"\n",(0,l.jsx)(n.p,{children:"Note: The method of calling the Fatal level will interrupt the program running after printing the log, please use it with caution.\nDirectly print logs of different levels, which will be entered into messageKey, the default is msg."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'log.Info("Hello, World!")\nlog.Debug("Are you OK?")\nlog.Info("42 is the answer to life, the universe, and everything")\nlog.Warn("We are under attack!")\nlog.Error("Houston, we have a problem.")\nlog.Fatal("So Long, and Thanks for All the Fislog.")\nlog.Panic("The system is down.")\n'})}),"\n",(0,l.jsx)(n.p,{children:"Format and print logs of different levels, all methods end with f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'log.Debugf("Hello %s", "boy")\nlog.Infof("%d is the answer to life, the universe, and everything", 233)\nlog.Warnf("We are under attack %s!", "boss")\nlog.Errorf("%s, we have a problem.", "Master Shifu")\nlog.Fatalf("So Long, and Thanks for All the %s.", "banana")\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Print a message with the key and value, or ",(0,l.jsx)(n.code,{children:"KEYVALS UNPAIRED"})," if the key and value are not a pair."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'log.Debugw("", "Hello", "boy")\nlog.Infow("", "number", 233)\nlog.Warnw("", "job", "boss")\nlog.Errorw("", "name", "Master Shifu")\nlog.Fatalw("", "fruit", "banana")\n'})}),"\n",(0,l.jsx)(n.h2,{id:"global-log",children:"Global log"}),"\n",(0,l.jsx)(n.p,{children:"If you are in a project and just want to use a simple log function that can be printed at any time in the global, we provide a global log."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/fiber/v2/log"\n\nlog.Info("info")\nlog.Warn("warn")\n'})}),"\n",(0,l.jsxs)(n.p,{children:["The above is using the default ",(0,l.jsx)(n.code,{children:"log.DefaultLogger"})," standard output.\nYou can also find an already implemented adaptation under contrib, or use your own implemented Logger and use ",(0,l.jsx)(n.code,{children:"log.SetLogger"})," to set the global log logger."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'import (\n    "log"\n    fiberlog "github.com/gofiber/fiber/v2/log"\n)\n\nvar _ log.AllLogger = (*customLogger)(nil)\n\ntype customLogger struct {\n    stdlog *log.Logger\n}\n\n// ...\n// inject your custom logger\nfiberlog.SetLogger(customLogger)\n'})}),"\n",(0,l.jsx)(n.h2,{id:"set-level",children:"Set Level"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"log.SetLevel"})," sets the level of logs below which logs will not be output.\nThe default logger is LevelTrace."]}),"\n",(0,l.jsxs)(n.p,{children:["Note that this method is not ",(0,l.jsx)(n.strong,{children:"concurrent-safe"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'import "github.com/gofiber/fiber/v2/log"\n\nlog.SetLevel(log.LevelInfo)\n'})}),"\n",(0,l.jsx)(n.h2,{id:"set-output",children:"Set output"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"log.SetOutput"})," sets the output destination of the logger. The default logger types the log in the console."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'var logger AllLogger = &defaultLogger{\n    stdlog: log.New(os.Stderr, "", log.LstdFlags|log.Lshortfile|log.Lmicroseconds),\n    depth:  4,\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"Set the output destination to the file."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'// Output to ./test.log file\nf, err := os.OpenFile("test.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)\nif err != nil {\n    return\n}\nlog.SetOutput(f)\n'})}),"\n",(0,l.jsx)(n.p,{children:"Set the output destination to the console and file."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'// Output to ./test.log file\nfile, _ := os.OpenFile("test.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)\niw := io.MultiWriter(os.Stdout, file)\nlog.SetOutput(iw)\n'})}),"\n",(0,l.jsx)(n.h2,{id:"bind-context",children:"Bind context"}),"\n",(0,l.jsxs)(n.p,{children:["Set the context, using the following method will return a ",(0,l.jsx)(n.code,{children:"CommonLogger"})," instance bound to the specified context"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'commonLogger := log.WithContext(ctx)\ncommonLogger.Info("info")\n'})})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>s});var l=o(96540);const t={},r=l.createContext(t);function i(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);