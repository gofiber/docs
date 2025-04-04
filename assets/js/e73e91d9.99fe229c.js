"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["53883"],{25032:function(e,r,i){i.r(r),i.d(r,{default:()=>u,frontMatter:()=>c,metadata:()=>t,assets:()=>a,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"circuitbreaker/circuitbreaker","title":"Circuit Breaker Middleware for [Fiber](https://github.com/gofiber/fiber)","description":"A Circuit Breaker is a software design pattern used to prevent system failures when a service is experiencing high failures or slow responses. It helps improve system resilience by stopping requests to an unhealthy service and allowing recovery once it stabilizes.","source":"@site/contrib_versioned_docs/version-fiberi18n_v2.x.x/circuitbreaker/README.md","sourceDirName":"circuitbreaker","slug":"/circuitbreaker/","permalink":"/contrib/fiberi18n_v2.x.x/circuitbreaker/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/circuitbreaker/README.md","tags":[],"version":"fiberi18n_v2.x.x","lastUpdatedAt":1743771956000,"frontMatter":{"id":"circuitbreaker"},"sidebar":"left_sidebar","previous":{"title":"Casbin","permalink":"/contrib/fiberi18n_v2.x.x/casbin/"},"next":{"title":"Fgprof","permalink":"/contrib/fiberi18n_v2.x.x/fgprof/"}}'),n=i("85893"),s=i("50065");let c={id:"circuitbreaker"},l="Circuit Breaker Middleware for Fiber",a={},o=[{value:"How It Works",id:"how-it-works",level:2},{value:"Benefits of Using a Circuit Breaker",id:"benefits-of-using-a-circuit-breaker",level:2},{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:2},{value:"Config",id:"config",level:2},{value:"Circuit Breaker Usage in Fiber (Example)",id:"circuit-breaker-usage-in-fiber-example",level:2},{value:"1. Basic Setup",id:"1-basic-setup",level:3},{value:"2. Route &amp; Route-Group Specific Circuit Breaker",id:"2-route--route-group-specific-circuit-breaker",level:3},{value:"3. Circuit Breaker with Custom Failure Handling",id:"3-circuit-breaker-with-custom-failure-handling",level:3},{value:"4. Circuit Breaker for External API Calls",id:"4-circuit-breaker-for-external-api-calls",level:3},{value:"5. Circuit Breaker with Concurrent Requests Handling",id:"5-circuit-breaker-with-concurrent-requests-handling",level:3},{value:"6. Circuit Breaker with Custom Metrics",id:"6-circuit-breaker-with-custom-metrics",level:3},{value:"7. Advanced: Multiple Circuit Breakers for Different Services",id:"7-advanced-multiple-circuit-breakers-for-different-services",level:3}];function d(e){let r={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsxs)(r.h1,{id:"circuit-breaker-middleware-for-fiber",children:["Circuit Breaker Middleware for ",(0,n.jsx)(r.a,{href:"https://github.com/gofiber/fiber",children:"Fiber"})]})}),"\n",(0,n.jsxs)(r.p,{children:["A ",(0,n.jsx)(r.strong,{children:"Circuit Breaker"})," is a software design pattern used to prevent system failures when a service is experiencing high failures or slow responses. It helps improve system resilience by ",(0,n.jsx)(r.strong,{children:"stopping requests"})," to an unhealthy service and ",(0,n.jsx)(r.strong,{children:"allowing recovery"})," once it stabilizes."]}),"\n",(0,n.jsx)(r.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Closed State:"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Requests are allowed to pass normally."}),"\n",(0,n.jsx)(r.li,{children:"Failures are counted."}),"\n",(0,n.jsxs)(r.li,{children:["If failures exceed a defined ",(0,n.jsx)(r.strong,{children:"threshold"}),", the circuit switches to ",(0,n.jsx)(r.strong,{children:"Open"})," state."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Open State:"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Requests are ",(0,n.jsx)(r.strong,{children:"blocked immediately"})," to prevent overload."]}),"\n",(0,n.jsxs)(r.li,{children:["The circuit stays open for a ",(0,n.jsx)(r.strong,{children:"timeout period"})," before moving to ",(0,n.jsx)(r.strong,{children:"Half-Open"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Half-Open State:"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Allows a limited number of requests to test service recovery."}),"\n",(0,n.jsxs)(r.li,{children:["If requests ",(0,n.jsx)(r.strong,{children:"succeed"}),", the circuit resets to ",(0,n.jsx)(r.strong,{children:"Closed"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["If requests ",(0,n.jsx)(r.strong,{children:"fail"}),", the circuit returns to ",(0,n.jsx)(r.strong,{children:"Open"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"benefits-of-using-a-circuit-breaker",children:"Benefits of Using a Circuit Breaker"}),"\n",(0,n.jsxs)(r.p,{children:["\u2705 ",(0,n.jsx)(r.strong,{children:"Prevents cascading failures"})," in microservices.",(0,n.jsx)(r.br,{}),"\n","\u2705 ",(0,n.jsx)(r.strong,{children:"Improves system reliability"})," by avoiding repeated failed requests.",(0,n.jsx)(r.br,{}),"\n","\u2705 ",(0,n.jsx)(r.strong,{children:"Reduces load on struggling services"})," and allows recovery."]}),"\n",(0,n.jsx)(r.h2,{id:"install",children:"Install"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/circuitbreaker\n"})}),"\n",(0,n.jsx)(r.h2,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",children:"circuitbreaker.New(config ...circuitbreaker.Config) *circuitbreaker.Middleware \n"})}),"\n",(0,n.jsx)(r.h2,{id:"config",children:"Config"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Property"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"FailureThreshold"}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"int"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Number of consecutive errors required to open the circuit"}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"5"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Timeout"}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"time.Duration"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Timeout for the circuit breaker"}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"10 * time.Second"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"SuccessThreshold"}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"int"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Number of successful requests required to close the circuit"}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"5"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"HalfOpenMaxConcurrent"}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"int"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Max concurrent requests in half-open state"}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"1"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"IsFailure"}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"func(error) bool"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Custom function to determine if an error is a failure"}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"Status >= 500"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"OnOpen"}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"func(*fiber.Ctx)"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Callback function when the circuit is opened"}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"503 response"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"OnClose"}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"func(*fiber.Ctx)"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Callback function when the circuit is closed"}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"Continue request"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"OnHalfOpen"}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"func(*fiber.Ctx)"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Callback function when the circuit is half-open"}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"429 response"})})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"circuit-breaker-usage-in-fiber-example",children:"Circuit Breaker Usage in Fiber (Example)"}),"\n",(0,n.jsx)(r.p,{children:"This guide explains how to use a Circuit Breaker in a Fiber application at different levels, from basic setup to advanced customization."}),"\n",(0,n.jsx)(r.h3,{id:"1-basic-setup",children:"1. Basic Setup"}),"\n",(0,n.jsxs)(r.p,{children:["A ",(0,n.jsx)(r.strong,{children:"global"})," Circuit Breaker protects all routes."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Example: Applying Circuit Breaker to All Routes"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",children:'package main\n\nimport (\n	"github.com/gofiber/fiber/v2"\n	"github.com/gofiber/contrib/circuitbreaker"\n)\n\nfunc main() {\n	app := fiber.New()\n	\n	// Create a new Circuit Breaker with custom configuration\n	cb := circuitbreaker.New(circuitbreaker.Config{\n		FailureThreshold: 3,               // Max failures before opening the circuit\n		Timeout:          5 * time.Second, // Wait time before retrying\n		SuccessThreshold: 2,               // Required successes to move back to closed state\n	})\n\n	// Apply Circuit Breaker to ALL routes\n	app.Use(circuitbreaker.Middleware(cb))\n\n	// Sample Route\n	app.Get("/", func(c *fiber.Ctx) error {\n		return c.SendString("Hello, world!")\n	})\n\n	// Optional: Expose health check endpoint\n	app.Get("/health/circuit", cb.HealthHandler())\n\n	// Optional: Expose metrics about the circuit breaker:\n	app.Get("/metrics/circuit", func(c *fiber.Ctx) error {\n  		return c.JSON(cb.GetStateStats())\n	})\n\n	app.Listen(":3000")\n\n	// In your application shutdown logic\n	app.Shutdown(func() {\n		// Make sure to stop the circuit breaker when your application shuts down:\n		cb.Stop()\n	})\n}\n'})}),"\n",(0,n.jsx)(r.h3,{id:"2-route--route-group-specific-circuit-breaker",children:"2. Route & Route-Group Specific Circuit Breaker"}),"\n",(0,n.jsxs)(r.p,{children:["Apply the Circuit Breaker ",(0,n.jsx)(r.strong,{children:"only to specific routes"}),"."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",children:'app.Get("/protected", circuitbreaker.Middleware(cb), func(c *fiber.Ctx) error {\n	return c.SendString("Protected service running")\n})\n'})}),"\n",(0,n.jsxs)(r.p,{children:["Apply the Circuit Breaker ",(0,n.jsx)(r.strong,{children:"only to specific routes groups"}),"."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",children:'app := route.Group("/api")\napp.Use(circuitbreaker.Middleware(cb))\n\n// All routes in this group will be protected\napp.Get("/users", getUsersHandler)\napp.Post("/users", createUserHandler)\n'})}),"\n",(0,n.jsx)(r.h3,{id:"3-circuit-breaker-with-custom-failure-handling",children:"3. Circuit Breaker with Custom Failure Handling"}),"\n",(0,n.jsxs)(r.p,{children:["Customize the response when the circuit ",(0,n.jsx)(r.strong,{children:"opens"}),"."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",children:'cb := circuitbreaker.New(circuitbreaker.Config{\n	FailureThreshold: 3,\n	Timeout:   10 * time.Second,\n	OnOpen: func(c *fiber.Ctx) error {\n		return c.Status(fiber.StatusServiceUnavailable).\n			JSON(fiber.Map{"error": "Circuit Open: Service unavailable"})\n	},\n	OnHalfOpen: func(c *fiber.Ctx) error {\n		return c.Status(fiber.StatusTooManyRequests).\n			JSON(fiber.Map{"error": "Circuit Half-Open: Retrying service"})\n	},\n	OnClose: func(c *fiber.Ctx) error {\n		return c.Status(fiber.StatusOK).\n			JSON(fiber.Map{"message": "Circuit Closed: Service recovered"})\n	},\n})\n\n// Apply to a specific route\napp.Get("/custom", circuitbreaker.Middleware(cb), func(c *fiber.Ctx) error {\n	return c.SendString("This service is protected by a Circuit Breaker")\n})\n'})}),"\n",(0,n.jsxs)(r.p,{children:["\u2705 Now, when failures exceed the threshold, *",(0,n.jsx)(r.strong,{children:"custom error responses"})," will be sent."]}),"\n",(0,n.jsx)(r.h3,{id:"4-circuit-breaker-for-external-api-calls",children:"4. Circuit Breaker for External API Calls"}),"\n",(0,n.jsxs)(r.p,{children:["Use a Circuit Breaker ",(0,n.jsx)(r.strong,{children:"when calling an external API."})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",children:'\napp.Get("/external-api", circuitbreaker.Middleware(cb), func(c *fiber.Ctx) error {\n	// Simulating an external API call\n	resp, err := fiber.Get("https://example.com/api")\n	if err != nil {\n		return fiber.NewError(fiber.StatusInternalServerError, "External API failed")\n	}\n	return c.SendString(resp.Body())\n})\n'})}),"\n",(0,n.jsxs)(r.p,{children:["\u2705 If the external API fails repeatedly, ",(0,n.jsx)(r.strong,{children:"the circuit breaker prevents further calls."})]}),"\n",(0,n.jsx)(r.h3,{id:"5-circuit-breaker-with-concurrent-requests-handling",children:"5. Circuit Breaker with Concurrent Requests Handling"}),"\n",(0,n.jsxs)(r.p,{children:["Use a ",(0,n.jsx)(r.strong,{children:"semaphore-based"})," approach to ",(0,n.jsx)(r.strong,{children:"limit concurrent requests."})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",children:'cb := circuitbreaker.New(circuitbreaker.Config{\n	FailureThreshold:  3,\n	Timeout:           5 * time.Second,\n	SuccessThreshold:  2,\n	HalfOpenSemaphore: make(chan struct{}, 2), // Allow only 2 concurrent requests\n})\n\napp.Get("/half-open-limit", circuitbreaker.Middleware(cb), func(c *fiber.Ctx) error {\n	time.Sleep(2 * time.Second) // Simulating slow response\n	return c.SendString("Half-Open: Limited concurrent requests")\n})\n'})}),"\n",(0,n.jsxs)(r.p,{children:["\u2705 When in ",(0,n.jsx)(r.strong,{children:"half-open"})," state, only ",(0,n.jsx)(r.strong,{children:"2 concurrent requests are allowed"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"6-circuit-breaker-with-custom-metrics",children:"6. Circuit Breaker with Custom Metrics"}),"\n",(0,n.jsxs)(r.p,{children:["Integrate ",(0,n.jsx)(r.strong,{children:"Prometheus metrics"})," and ",(0,n.jsx)(r.strong,{children:"structured logging"}),"."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",children:'cb := circuitbreaker.New(circuitbreaker.Config{\n	FailureThreshold: 5,\n	Timeout:   10 * time.Second,\n	OnOpen: func(c *fiber.Ctx) error {\n		log.Println("Circuit Breaker Opened!")\n		prometheus.Inc("circuit_breaker_open_count")\n		return c.Status(fiber.StatusServiceUnavailable).JSON(fiber.Map{"error": "Service Down"})\n	},\n})\n'})}),"\n",(0,n.jsx)(r.p,{children:"\u2705 Logs when the circuit opens & increments Prometheus metrics."}),"\n",(0,n.jsx)(r.h3,{id:"7-advanced-multiple-circuit-breakers-for-different-services",children:"7. Advanced: Multiple Circuit Breakers for Different Services"}),"\n",(0,n.jsx)(r.p,{children:"Use different Circuit Breakers for different services."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",children:'\ndbCB := circuitbreaker.New(circuitbreaker.Config{FailureThreshold: 5, Timeout: 10 * time.Second})\napiCB := circuitbreaker.New(circuitbreaker.Config{FailureThreshold: 3, Timeout: 5 * time.Second})\n\napp.Get("/db-service", circuitbreaker.Middleware(dbCB), func(c *fiber.Ctx) error {\n	return c.SendString("DB service request")\n})\n\napp.Get("/api-service", circuitbreaker.Middleware(apiCB), func(c *fiber.Ctx) error {\n	return c.SendString("External API service request")\n})\n'})}),"\n",(0,n.jsx)(r.p,{children:"\u2705 Each service has its own failure threshold & timeout."})]})}function u(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,r,i){i.d(r,{Z:function(){return l},a:function(){return c}});var t=i(67294);let n={},s=t.createContext(n);function c(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);