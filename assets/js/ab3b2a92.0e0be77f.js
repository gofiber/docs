"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([["76546"],{27068:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>l});var i=JSON.parse('{"id":"jwt/jwt","title":"JWT","description":"Release","source":"@site/contrib_versioned_docs/version-loadshed_v0.x.x/jwt/README.md","sourceDirName":"jwt","slug":"/jwt/","permalink":"/contrib/loadshed_v0.x.x/jwt/","draft":false,"unlisted":false,"editUrl":"https://github.com/gofiber/contrib/edit/main/jwt/README.md","tags":[],"version":"loadshed_v0.x.x","lastUpdatedAt":1731767144000,"frontMatter":{"id":"jwt"},"sidebar":"tutorialSidebar","previous":{"title":"HCaptcha","permalink":"/contrib/loadshed_v0.x.x/hcaptcha/"},"next":{"title":"LoadShed","permalink":"/contrib/loadshed_v0.x.x/loadshed/"}}'),r=t("85893"),s=t("50065");let l={id:"jwt"},d="JWT",c={},a=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:2},{value:"Config",id:"config",level:2},{value:"HS256 Example",id:"hs256-example",level:2},{value:"HS256 Test",id:"hs256-test",level:2},{value:"RS256 Example",id:"rs256-example",level:2},{value:"RS256 Test",id:"rs256-test",level:2},{value:"JWK Set Test",id:"jwk-set-test",level:2},{value:"Custom KeyFunc example",id:"custom-keyfunc-example",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"jwt",children:"JWT"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=jwt*",alt:"Release"}),"\n",(0,r.jsx)(n.a,{href:"https://gofiber.io/discord",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})}),"\n",(0,r.jsx)(n.img,{src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,r.jsx)(n.img,{src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,r.jsx)(n.img,{src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})]}),"\n",(0,r.jsx)(n.p,{children:'JWT returns a JSON Web Token (JWT) auth middleware.\nFor valid token, it sets the user in Ctx.Locals and calls next handler.\nFor invalid token, it returns "401 - Unauthorized" error.\nFor missing token, it returns "400 - Bad Request" error.'}),"\n",(0,r.jsxs)(n.p,{children:["Special thanks and credits to ",(0,r.jsx)(n.a,{href:"https://echo.labstack.com/middleware/jwt",children:"Echo"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Note: Requires Go 1.19 and above"})}),"\n",(0,r.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,r.jsx)(n.p,{children:"This middleware supports Fiber v1 & v2, install accordingly."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/jwt\ngo get -u github.com/golang-jwt/jwt/v5\n"})}),"\n",(0,r.jsx)(n.h2,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"jwtware.New(config ...jwtware.Config) func(*fiber.Ctx) error\n"})}),"\n",(0,r.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Filter"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"func(*fiber.Ctx) bool"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Defines a function to skip middleware"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"nil"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"SuccessHandler"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"func(*fiber.Ctx) error"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"SuccessHandler defines a function which is executed for a valid token."}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"nil"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"ErrorHandler"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"func(*fiber.Ctx, error) error"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"ErrorHandler defines a function which is executed for an invalid token."}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"401 Invalid or expired JWT"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"SigningKey"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"interface{}"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Signing key to validate token. Used as fallback if SigningKeys has length 0."}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"nil"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"SigningKeys"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"map[string]interface{}"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Map of signing keys to validate token with kid field usage."}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"nil"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"ContextKey"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Context key to store user information from the token into context."}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:'"user"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Claims"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"jwt.Claim"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Claims are extendable claims data defining token content."}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"jwt.MapClaims{}"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"TokenLookup"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["TokenLookup is a string in the form of ",(0,r.jsx)(n.code,{children:"<source>:<name>"})," that is used"]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:'"header:Authorization"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"AuthScheme"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["AuthScheme to be used in the Authorization header. The default value (",(0,r.jsx)(n.code,{children:'"Bearer"'}),") will only be used in conjuction with the default ",(0,r.jsx)(n.code,{children:"TokenLookup"})," value."]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:'"Bearer"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"KeyFunc"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"func() jwt.Keyfunc"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"KeyFunc defines a user-defined function that supplies the public key for a token validation."}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"jwtKeyFunc"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"JWKSetURLs"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"[]string"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"A slice of unique JSON Web Key (JWK) Set URLs to used to parse JWTs."}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"nil"})})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"hs256-example",children:"HS256 Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n	"time"\n\n	"github.com/gofiber/fiber/v2"\n\n	jwtware "github.com/gofiber/contrib/jwt"\n	"github.com/golang-jwt/jwt/v5"\n)\n\nfunc main() {\n	app := fiber.New()\n\n	// Login route\n	app.Post("/login", login)\n\n	// Unauthenticated route\n	app.Get("/", accessible)\n\n	// JWT Middleware\n	app.Use(jwtware.New(jwtware.Config{\n		SigningKey: jwtware.SigningKey{Key: []byte("secret")},\n	}))\n\n	// Restricted Routes\n	app.Get("/restricted", restricted)\n\n	app.Listen(":3000")\n}\n\nfunc login(c *fiber.Ctx) error {\n	user := c.FormValue("user")\n	pass := c.FormValue("pass")\n\n	// Throws Unauthorized error\n	if user != "john" || pass != "doe" {\n		return c.SendStatus(fiber.StatusUnauthorized)\n	}\n\n	// Create the Claims\n	claims := jwt.MapClaims{\n		"name":  "John Doe",\n		"admin": true,\n		"exp":   time.Now().Add(time.Hour * 72).Unix(),\n	}\n\n	// Create token\n	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)\n\n	// Generate encoded token and send it as response.\n	t, err := token.SignedString([]byte("secret"))\n	if err != nil {\n		return c.SendStatus(fiber.StatusInternalServerError)\n	}\n\n	return c.JSON(fiber.Map{"token": t})\n}\n\nfunc accessible(c *fiber.Ctx) error {\n	return c.SendString("Accessible")\n}\n\nfunc restricted(c *fiber.Ctx) error {\n	user := c.Locals("user").(*jwt.Token)\n	claims := user.Claims.(jwt.MapClaims)\n	name := claims["name"].(string)\n	return c.SendString("Welcome " + name)\n}\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"hs256-test",children:"HS256 Test"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Login using username and password to retrieve a token."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'curl --data "user=john&pass=doe" http://localhost:3000/login\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjE5NTcxMzZ9.RB3arc4-OyzASAaUhC2W3ReWaXAt_z2Fd3BN4aWTgEY"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Request a restricted resource using the token in Authorization request header."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'curl localhost:3000/restricted -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NjE5NTcxMzZ9.RB3arc4-OyzASAaUhC2W3ReWaXAt_z2Fd3BN4aWTgEY"\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Response"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Welcome John Doe\n"})}),"\n",(0,r.jsx)(n.h2,{id:"rs256-example",children:"RS256 Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n	"crypto/rand"\n	"crypto/rsa"\n	"log"\n	"time"\n\n	"github.com/gofiber/fiber/v2"\n\n	"github.com/golang-jwt/jwt/v5"\n\n	jwtware "github.com/gofiber/contrib/jwt"\n)\n\nvar (\n	// Obviously, this is just a test example. Do not do this in production.\n	// In production, you would have the private key and public key pair generated\n	// in advance. NEVER add a private key to any GitHub repo.\n	privateKey *rsa.PrivateKey\n)\n\nfunc main() {\n	app := fiber.New()\n\n	// Just as a demo, generate a new private/public key pair on each run. See note above.\n	rng := rand.Reader\n	var err error\n	privateKey, err = rsa.GenerateKey(rng, 2048)\n	if err != nil {\n		log.Fatalf("rsa.GenerateKey: %v", err)\n	}\n\n	// Login route\n	app.Post("/login", login)\n\n	// Unauthenticated route\n	app.Get("/", accessible)\n\n	// JWT Middleware\n	app.Use(jwtware.New(jwtware.Config{\n		SigningKey: jwtware.SigningKey{\n			JWTAlg: jwtware.RS256,\n			Key:    privateKey.Public(),\n		},\n	}))\n\n	// Restricted Routes\n	app.Get("/restricted", restricted)\n\n	app.Listen(":3000")\n}\n\nfunc login(c *fiber.Ctx) error {\n	user := c.FormValue("user")\n	pass := c.FormValue("pass")\n\n	// Throws Unauthorized error\n	if user != "john" || pass != "doe" {\n		return c.SendStatus(fiber.StatusUnauthorized)\n	}\n\n	// Create the Claims\n	claims := jwt.MapClaims{\n		"name":  "John Doe",\n		"admin": true,\n		"exp":   time.Now().Add(time.Hour * 72).Unix(),\n	}\n\n	// Create token\n	token := jwt.NewWithClaims(jwt.SigningMethodRS256, claims)\n\n	// Generate encoded token and send it as response.\n	t, err := token.SignedString(privateKey)\n	if err != nil {\n		log.Printf("token.SignedString: %v", err)\n		return c.SendStatus(fiber.StatusInternalServerError)\n	}\n\n	return c.JSON(fiber.Map{"token": t})\n}\n\nfunc accessible(c *fiber.Ctx) error {\n	return c.SendString("Accessible")\n}\n\nfunc restricted(c *fiber.Ctx) error {\n	user := c.Locals("user").(*jwt.Token)\n	claims := user.Claims.(jwt.MapClaims)\n	name := claims["name"].(string)\n	return c.SendString("Welcome " + name)\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"rs256-test",children:"RS256 Test"}),"\n",(0,r.jsx)(n.p,{children:"The RS256 is actually identical to the HS256 test above."}),"\n",(0,r.jsx)(n.h2,{id:"jwk-set-test",children:"JWK Set Test"}),"\n",(0,r.jsxs)(n.p,{children:["The tests are identical to basic ",(0,r.jsx)(n.code,{children:"JWT"})," tests above, with exception that ",(0,r.jsx)(n.code,{children:"JWKSetURLs"})," to valid public keys collection in JSON Web Key (JWK) Set format should be supplied. See ",(0,r.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc7517",children:"RFC 7517"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"custom-keyfunc-example",children:"Custom KeyFunc example"}),"\n",(0,r.jsx)(n.p,{children:"KeyFunc defines a user-defined function that supplies the public key for a token validation.\nThe function shall take care of verifying the signing algorithm and selecting the proper key.\nA user-defined KeyFunc can be useful if tokens are issued by an external party."}),"\n",(0,r.jsx)(n.p,{children:"When a user-defined KeyFunc is provided, SigningKey, SigningKeys, and SigningMethod are ignored.\nThis is one of the three options to provide a token validation key.\nThe order of precedence is a user-defined KeyFunc, SigningKeys and SigningKey.\nRequired if neither SigningKeys nor SigningKey is provided.\nDefault to an internal implementation verifying the signing algorithm and selecting the proper key."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n	"fmt"\n  "github.com/gofiber/fiber/v2"\n\n  jwtware "github.com/gofiber/contrib/jwt"\n  "github.com/golang-jwt/jwt/v5"\n)\n\nfunc main() {\n	app := fiber.New()\n\n	app.Use(jwtware.New(jwtware.Config{\n		KeyFunc: customKeyFunc(),\n	}))\n\n	app.Get("/ok", func(c *fiber.Ctx) error {\n		return c.SendString("OK")\n	})\n}\n\nfunc customKeyFunc() jwt.Keyfunc {\n	return func(t *jwt.Token) (interface{}, error) {\n		// Always check the signing method\n		if t.Method.Alg() != jwtware.HS256 {\n			return nil, fmt.Errorf("Unexpected jwt signing method=%v", t.Header["alg"])\n		}\n\n		// TODO custom implementation of loading signing key like from a database\n    signingKey := "secret"\n\n		return []byte(signingKey), nil\n	}\n}\n'})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var i=t(67294);let r={},s=i.createContext(r);function l(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);