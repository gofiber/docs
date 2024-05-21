"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[65111],{79125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=n(74848),r=n(28453);const s={id:"jwt"},l="JWT",c={id:"jwt/jwt",title:"JWT",description:"Release",source:"@site/contrib_versioned_docs/version-websocket_v1.x.x/jwt/README.md",sourceDirName:"jwt",slug:"/jwt/",permalink:"/contrib/jwt/",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/jwt/README.md",tags:[],version:"websocket_v1.x.x",lastUpdatedAt:1716274626e3,frontMatter:{id:"jwt"},sidebar:"tutorialSidebar",previous:{title:"Fiberzerolog",permalink:"/contrib/fiberzerolog/"},next:{title:"LoadShed",permalink:"/contrib/loadshed/"}},d={},o=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:2},{value:"Config",id:"config",level:2},{value:"HS256 Example",id:"hs256-example",level:2},{value:"HS256 Test",id:"hs256-test",level:2},{value:"RS256 Example",id:"rs256-example",level:2},{value:"RS256 Test",id:"rs256-test",level:2},{value:"JWK Set Test",id:"jwk-set-test",level:2},{value:"Custom KeyFunc example",id:"custom-keyfunc-example",level:2}];function a(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"jwt",children:"JWT"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=jwt*",alt:"Release"}),"\n",(0,i.jsx)(t.a,{href:"https://gofiber.io/discord",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.jsx)(t.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,i.jsx)(t.p,{children:'JWT returns a JSON Web Token (JWT) auth middleware.\nFor valid token, it sets the user in Ctx.Locals and calls next handler.\nFor invalid token, it returns "401 - Unauthorized" error.\nFor missing token, it returns "400 - Bad Request" error.'}),"\n",(0,i.jsxs)(t.p,{children:["Special thanks and credits to ",(0,i.jsx)(t.a,{href:"https://echo.labstack.com/middleware/jwt",children:"Echo"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Note: Requires Go 1.19 and above"})}),"\n",(0,i.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(t.p,{children:"This middleware supports Fiber v1 & v2, install accordingly."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/jwt\ngo get -u github.com/golang-jwt/jwt/v5\n"})}),"\n",(0,i.jsx)(t.h2,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"jwtware.New(config ...jwtware.Config) func(*fiber.Ctx) error\n"})}),"\n",(0,i.jsx)(t.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Filter"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(*fiber.Ctx) bool"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Defines a function to skip middleware"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SuccessHandler"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(*fiber.Ctx) error"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SuccessHandler defines a function which is executed for a valid token."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ErrorHandler"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func(*fiber.Ctx, error) error"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ErrorHandler defines a function which is executed for an invalid token."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"401 Invalid or expired JWT"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SigningKey"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"interface{}"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Signing key to validate token. Used as fallback if SigningKeys has length 0."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SigningKeys"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"map[string]interface{}"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Map of signing keys to validate token with kid field usage."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ContextKey"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Context key to store user information from the token into context."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:'"user"'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Claims"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"jwt.Claim"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Claims are extendable claims data defining token content."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"jwt.MapClaims{}"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"TokenLookup"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["TokenLookup is a string in the form of ",(0,i.jsx)(t.code,{children:"<source>:<name>"})," that is used"]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:'"header:Authorization"'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"AuthScheme"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["AuthScheme to be used in the Authorization header. The default value (",(0,i.jsx)(t.code,{children:'"Bearer"'}),") will only be used in conjuction with the default ",(0,i.jsx)(t.code,{children:"TokenLookup"})," value."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:'"Bearer"'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"KeyFunc"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"func() jwt.Keyfunc"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"KeyFunc defines a user-defined function that supplies the public key for a token validation."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"jwtKeyFunc"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"JWKSetURLs"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"[]string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"A slice of unique JSON Web Key (JWK) Set URLs to used to parse JWTs."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nil"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"hs256-example",children:"HS256 Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"time"\n\n\t"github.com/gofiber/fiber/v2"\n\n\tjwtware "github.com/gofiber/contrib/jwt"\n\t"github.com/golang-jwt/jwt/v5"\n)\n\nfunc main() {\n\tapp := fiber.New()\n\n\t// Login route\n\tapp.Post("/login", login)\n\n\t// Unauthenticated route\n\tapp.Get("/", accessible)\n\n\t// JWT Middleware\n\tapp.Use(jwtware.New(jwtware.Config{\n\t\tSigningKey: jwtware.SigningKey{Key: []byte("secret")},\n\t}))\n\n\t// Restricted Routes\n\tapp.Get("/restricted", restricted)\n\n\tapp.Listen(":3000")\n}\n\nfunc login(c *fiber.Ctx) error {\n\tuser := c.FormValue("user")\n\tpass := c.FormValue("pass")\n\n\t// Throws Unauthorized error\n\tif user != "john" || pass != "doe" {\n\t\treturn c.SendStatus(fiber.StatusUnauthorized)\n\t}\n\n\t// Create the Claims\n\tclaims := jwt.MapClaims{\n\t\t"name":  "John Doe",\n\t\t"admin": true,\n\t\t"exp":   time.Now().Add(time.Hour * 72).Unix(),\n\t}\n\n\t// Create token\n\ttoken := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)\n\n\t// Generate encoded token and send it as response.\n\tt, err := token.SignedString([]byte("secret"))\n\tif err != nil {\n\t\treturn c.SendStatus(fiber.StatusInternalServerError)\n\t}\n\n\treturn c.JSON(fiber.Map{"token": t})\n}\n\nfunc accessible(c *fiber.Ctx) error {\n\treturn c.SendString("Accessible")\n}\n\nfunc restricted(c *fiber.Ctx) error {\n\tuser := c.Locals("user").(*jwt.Token)\n\tclaims := user.Claims.(jwt.MapClaims)\n\tname := claims["name"].(string)\n\treturn c.SendString("Welcome " + name)\n}\n\n'})}),"\n",(0,i.jsx)(t.h2,{id:"hs256-test",children:"HS256 Test"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Login using username and password to retrieve a token."})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'curl --data "user=john&pass=doe" http://localhost:3000/login\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Response"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjE5NTcxMzZ9.RB3arc4-OyzASAaUhC2W3ReWaXAt_z2Fd3BN4aWTgEY"\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Request a restricted resource using the token in Authorization request header."})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'curl localhost:3000/restricted -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjE5NTcxMzZ9.RB3arc4-OyzASAaUhC2W3ReWaXAt_z2Fd3BN4aWTgEY"\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Response"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Welcome John Doe\n"})}),"\n",(0,i.jsx)(t.h2,{id:"rs256-example",children:"RS256 Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"crypto/rand"\n\t"crypto/rsa"\n\t"log"\n\t"time"\n\n\t"github.com/gofiber/fiber/v2"\n\n\t"github.com/golang-jwt/jwt/v5"\n\n\tjwtware "github.com/gofiber/contrib/jwt"\n)\n\nvar (\n\t// Obviously, this is just a test example. Do not do this in production.\n\t// In production, you would have the private key and public key pair generated\n\t// in advance. NEVER add a private key to any GitHub repo.\n\tprivateKey *rsa.PrivateKey\n)\n\nfunc main() {\n\tapp := fiber.New()\n\n\t// Just as a demo, generate a new private/public key pair on each run. See note above.\n\trng := rand.Reader\n\tvar err error\n\tprivateKey, err = rsa.GenerateKey(rng, 2048)\n\tif err != nil {\n\t\tlog.Fatalf("rsa.GenerateKey: %v", err)\n\t}\n\n\t// Login route\n\tapp.Post("/login", login)\n\n\t// Unauthenticated route\n\tapp.Get("/", accessible)\n\n\t// JWT Middleware\n\tapp.Use(jwtware.New(jwtware.Config{\n\t\tSigningKey: jwtware.SigningKey{\n\t\t\tJWTAlg: jwtware.RS256,\n\t\t\tKey:    privateKey.Public(),\n\t\t},\n\t}))\n\n\t// Restricted Routes\n\tapp.Get("/restricted", restricted)\n\n\tapp.Listen(":3000")\n}\n\nfunc login(c *fiber.Ctx) error {\n\tuser := c.FormValue("user")\n\tpass := c.FormValue("pass")\n\n\t// Throws Unauthorized error\n\tif user != "john" || pass != "doe" {\n\t\treturn c.SendStatus(fiber.StatusUnauthorized)\n\t}\n\n\t// Create the Claims\n\tclaims := jwt.MapClaims{\n\t\t"name":  "John Doe",\n\t\t"admin": true,\n\t\t"exp":   time.Now().Add(time.Hour * 72).Unix(),\n\t}\n\n\t// Create token\n\ttoken := jwt.NewWithClaims(jwt.SigningMethodRS256, claims)\n\n\t// Generate encoded token and send it as response.\n\tt, err := token.SignedString(privateKey)\n\tif err != nil {\n\t\tlog.Printf("token.SignedString: %v", err)\n\t\treturn c.SendStatus(fiber.StatusInternalServerError)\n\t}\n\n\treturn c.JSON(fiber.Map{"token": t})\n}\n\nfunc accessible(c *fiber.Ctx) error {\n\treturn c.SendString("Accessible")\n}\n\nfunc restricted(c *fiber.Ctx) error {\n\tuser := c.Locals("user").(*jwt.Token)\n\tclaims := user.Claims.(jwt.MapClaims)\n\tname := claims["name"].(string)\n\treturn c.SendString("Welcome " + name)\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"rs256-test",children:"RS256 Test"}),"\n",(0,i.jsx)(t.p,{children:"The RS256 is actually identical to the HS256 test above."}),"\n",(0,i.jsx)(t.h2,{id:"jwk-set-test",children:"JWK Set Test"}),"\n",(0,i.jsxs)(t.p,{children:["The tests are identical to basic ",(0,i.jsx)(t.code,{children:"JWT"})," tests above, with exception that ",(0,i.jsx)(t.code,{children:"JWKSetURLs"})," to valid public keys collection in JSON Web Key (JWK) Set format should be supplied. See ",(0,i.jsx)(t.a,{href:"https://www.rfc-editor.org/rfc/rfc7517",children:"RFC 7517"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"custom-keyfunc-example",children:"Custom KeyFunc example"}),"\n",(0,i.jsx)(t.p,{children:"KeyFunc defines a user-defined function that supplies the public key for a token validation.\nThe function shall take care of verifying the signing algorithm and selecting the proper key.\nA user-defined KeyFunc can be useful if tokens are issued by an external party."}),"\n",(0,i.jsx)(t.p,{children:"When a user-defined KeyFunc is provided, SigningKey, SigningKeys, and SigningMethod are ignored.\nThis is one of the three options to provide a token validation key.\nThe order of precedence is a user-defined KeyFunc, SigningKeys and SigningKey.\nRequired if neither SigningKeys nor SigningKey is provided.\nDefault to an internal implementation verifying the signing algorithm and selecting the proper key."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n  "github.com/gofiber/fiber/v2"\n\n  jwtware "github.com/gofiber/contrib/jwt"\n  "github.com/golang-jwt/jwt/v5"\n)\n\nfunc main() {\n\tapp := fiber.New()\n\n\tapp.Use(jwtware.New(jwtware.Config{\n\t\tKeyFunc: customKeyFunc(),\n\t}))\n\n\tapp.Get("/ok", func(c *fiber.Ctx) error {\n\t\treturn c.SendString("OK")\n\t})\n}\n\nfunc customKeyFunc() jwt.Keyfunc {\n\treturn func(t *jwt.Token) (interface{}, error) {\n\t\t// Always check the signing method\n\t\tif t.Method.Alg() != jwtware.HS256 {\n\t\t\treturn nil, fmt.Errorf("Unexpected jwt signing method=%v", t.Header["alg"])\n\t\t}\n\n\t\t// TODO custom implementation of loading signing key like from a database\n    signingKey := "secret"\n\n\t\treturn []byte(signingKey), nil\n\t}\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var i=n(96540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);