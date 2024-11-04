"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[76175],{34415:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>g,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"id":"api/log","title":"\ud83d\udcc3 Log","description":"Fiber\'s built-in log package","source":"@site/docs/core/api/log.md","sourceDirName":"api","slug":"/api/log","permalink":"/next/api/log","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/fiber/edit/main/docs/api/log.md","tags":[],"version":"current","lastUpdatedAt":1730726092000,"sidebarPosition":6,"frontMatter":{"id":"log","title":"\ud83d\udcc3 Log","description":"Fiber\'s built-in log package","sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udd04 Redirect","permalink":"/next/api/redirect"},"next":{"title":"\ud83c\udfa3 Hooks","permalink":"/next/api/hooks"}}');var t=n(74848),i=n(28453);const r={id:"log",title:"\ud83d\udcc3 Log",description:"Fiber's built-in log package",sidebar_position:6},s=void 0,g={},a=[{value:"Log levels",id:"log-levels",level:2},{value:"Custom log",id:"custom-log",level:2},{value:"Print log",id:"print-log",level:2},{value:"Basic Logging",id:"basic-logging",level:3},{value:"Formatted Logging",id:"formatted-logging",level:3},{value:"Key-Value Logging",id:"key-value-logging",level:3},{value:"Global log",id:"global-log",level:2},{value:"Set Level",id:"set-level",level:2},{value:"Set output",id:"set-output",level:2},{value:"Writing logs to stderr",id:"writing-logs-to-stderr",level:3},{value:"Writing logs to a file",id:"writing-logs-to-a-file",level:3},{value:"Writing logs to both console and file",id:"writing-logs-to-both-console-and-file",level:3},{value:"Bind context",id:"bind-context",level:2}];function c(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:"Logs serve as an essential tool for observing program behavior, diagnosing issues, and setting up corresponding alerts. Well-structured logs can significantly enhance search efficiency and streamline the troubleshooting process."}),"\n",(0,t.jsxs)(o.p,{children:["Fiber offers a default mechanism for logging to standard output. Additionally, it provides several global functions, including ",(0,t.jsx)(o.code,{children:"log.Info"}),", ",(0,t.jsx)(o.code,{children:"log.Errorf"}),", ",(0,t.jsx)(o.code,{children:"log.Warnw"}),", among others, to facilitate comprehensive logging capabilities."]}),"\n",(0,t.jsx)(o.h2,{id:"log-levels",children:"Log levels"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:"const (\n    LevelTrace Level = iota\n    LevelDebug\n    LevelInfo\n    LevelWarn\n    LevelError\n    LevelFatal\n    LevelPanic\n)\n"})}),"\n",(0,t.jsx)(o.h2,{id:"custom-log",children:"Custom log"}),"\n",(0,t.jsxs)(o.p,{children:["Fiber provides the ",(0,t.jsx)(o.code,{children:"AllLogger"})," interface for adapting the various log libraries."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:"type CommonLogger interface {\n    Logger\n    FormatLogger\n    WithLogger\n}\n\ntype AllLogger interface {\n    CommonLogger\n    ControlLogger\n    WithLogger\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"print-log",children:"Print log"}),"\n",(0,t.jsx)(o.p,{children:"Note: The Fatal level method will terminate the program after printing the log message. Please use it with caution."}),"\n",(0,t.jsx)(o.h3,{id:"basic-logging",children:"Basic Logging"}),"\n",(0,t.jsxs)(o.p,{children:["Logs of different levels can be directly printed. These will be entered into ",(0,t.jsx)(o.code,{children:"messageKey"}),", with the default key being ",(0,t.jsx)(o.code,{children:"msg"}),"."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'log.Info("Hello, World!")\nlog.Debug("Are you OK?")\nlog.Info("42 is the answer to life, the universe, and everything")\nlog.Warn("We are under attack!")\nlog.Error("Houston, we have a problem.")\nlog.Fatal("So Long, and Thanks for All the Fislog.")\nlog.Panic("The system is down.")\n'})}),"\n",(0,t.jsx)(o.h3,{id:"formatted-logging",children:"Formatted Logging"}),"\n",(0,t.jsxs)(o.p,{children:["Logs of different levels can be formatted before printing. All such methods end with an ",(0,t.jsx)(o.code,{children:"f"}),"."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'log.Debugf("Hello %s", "boy")\nlog.Infof("%d is the answer to life, the universe, and everything", 233)\nlog.Warnf("We are under attack %s!", "boss")\nlog.Errorf("%s, we have a problem.", "Master Shifu")\nlog.Fatalf("So Long, and Thanks for All the %s.", "banana")\n'})}),"\n",(0,t.jsx)(o.h3,{id:"key-value-logging",children:"Key-Value Logging"}),"\n",(0,t.jsxs)(o.p,{children:["Print a message with key-value pairs. If the key and value are not paired correctly, the log will output ",(0,t.jsx)(o.code,{children:"KEYVALS UNPAIRED"}),"."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'log.Debugw("", "Hello", "boy")\nlog.Infow("", "number", 233)\nlog.Warnw("", "job", "boss")\nlog.Errorw("", "name", "Master Shifu")\nlog.Fatalw("", "fruit", "banana")\n'})}),"\n",(0,t.jsx)(o.h2,{id:"global-log",children:"Global log"}),"\n",(0,t.jsx)(o.p,{children:"For projects that require a simple, global logging function to print messages at any time, Fiber provides a global log."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'import "github.com/gofiber/fiber/v3/log"\n\nlog.Info("info")\nlog.Warn("warn")\n'})}),"\n",(0,t.jsx)(o.p,{children:"These global log functions allow you to log messages conveniently throughout your project."}),"\n",(0,t.jsxs)(o.p,{children:["The above example uses the default ",(0,t.jsx)(o.code,{children:"log.DefaultLogger"})," for standard output. You can also find various pre-implemented adapters under the ",(0,t.jsx)(o.a,{href:"https://github.com/gofiber/contrib",children:"contrib"})," package such as ",(0,t.jsx)(o.code,{children:"fiberzap"})," and ",(0,t.jsx)(o.code,{children:"fiberzerolog"}),", or you can implement your own logger and set it as the global logger using ",(0,t.jsx)(o.code,{children:"log.SetLogger"}),".This flexibility allows you to tailor the logging behavior to suit your project's needs."]}),"\n",(0,t.jsx)(o.p,{children:"Here's an example using a custom logger:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'import (\n    "log"\n    fiberlog "github.com/gofiber/fiber/v3/log"\n)\n\nvar _ log.AllLogger = (*customLogger)(nil)\n\ntype customLogger struct {\n    stdlog *log.Logger\n}\n\n// ...\n// inject your custom logger\nfiberlog.SetLogger(customLogger)\n'})}),"\n",(0,t.jsx)(o.h2,{id:"set-level",children:"Set Level"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"log.SetLevel"})," sets the minimum level of logs that will be output. The default log level is ",(0,t.jsx)(o.code,{children:"LevelTrace"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["Note that this method is not ",(0,t.jsx)(o.strong,{children:"concurrent-safe"}),"."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'import "github.com/gofiber/fiber/v3/log"\n\nlog.SetLevel(log.LevelInfo)\n'})}),"\n",(0,t.jsx)(o.p,{children:"Setting the log level allows you to control the verbosity of the logs, filtering out messages below the specified level."}),"\n",(0,t.jsx)(o.h2,{id:"set-output",children:"Set output"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"log.SetOutput"})," sets the output destination of the logger. By default, the logger outputs logs to the console."]}),"\n",(0,t.jsx)(o.h3,{id:"writing-logs-to-stderr",children:"Writing logs to stderr"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'var logger AllLogger = &defaultLogger{\n    stdlog: log.New(os.Stderr, "", log.LstdFlags|log.Lshortfile|log.Lmicroseconds),\n    depth:  4,\n}\n'})}),"\n",(0,t.jsx)(o.p,{children:"This allows you to customize where the logs are written, such as to a file, an external logging service, or any other desired destination."}),"\n",(0,t.jsx)(o.h3,{id:"writing-logs-to-a-file",children:"Writing logs to a file"}),"\n",(0,t.jsxs)(o.p,{children:["Set the output destination to the file, in this case ",(0,t.jsx)(o.code,{children:"test.log"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'// Output to ./test.log file\nf, err := os.OpenFile("test.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)\nif err != nil {\n    return\n}\nlog.SetOutput(f)\n'})}),"\n",(0,t.jsx)(o.h3,{id:"writing-logs-to-both-console-and-file",children:"Writing logs to both console and file"}),"\n",(0,t.jsxs)(o.p,{children:["The following example will write the logs to both ",(0,t.jsx)(o.code,{children:"test.log"})," and ",(0,t.jsx)(o.code,{children:"stdout"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'// Output to ./test.log file\nfile, _ := os.OpenFile("test.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)\niw := io.MultiWriter(os.Stdout, file)\nlog.SetOutput(iw)\n'})}),"\n",(0,t.jsx)(o.h2,{id:"bind-context",children:"Bind context"}),"\n",(0,t.jsxs)(o.p,{children:["To bind a logger to a specific context, use the following method. This will return a ",(0,t.jsx)(o.code,{children:"CommonLogger"})," instance that is bound to the specified context."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'commonLogger := log.WithContext(ctx)\ncommonLogger.Info("info")\n'})}),"\n",(0,t.jsx)(o.p,{children:"Binding the logger to a context allows you to include context-specific information in your logs, improving traceability and debugging."})]})}function d(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>s});var l=n(96540);const t={},i=l.createContext(t);function r(e){const o=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(i.Provider,{value:o},e.children)}}}]);