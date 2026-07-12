// Command route-vectors generates the match-vectors.json fixture for the
// route playground's TypeScript matcher (src/components/route-playground).
//
// For every vector it registers the routes on a real fiber.New() app with
// default config, fires the request through app.Test, and records the status,
// the index of the route that answered, and the extracted parameters. The
// TypeScript matcher is tested against this fixture with `npm run
// test:matcher`, so it cannot silently diverge from the real matcher.
//
// Run from this directory:
//
//	go run . > ../../src/components/route-playground/match-vectors.json
//
// Re-run and commit the output whenever Fiber's matcher semantics change.
package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http/httptest"
	"os"
	"strings"

	"github.com/gofiber/fiber/v3"
)

type routeDef struct {
	Method  string `json:"method"`
	Pattern string `json:"pattern"`
}

type request struct {
	Method string `json:"method"`
	Path   string `json:"path"`
}

type expectation struct {
	Status       int               `json:"status"`
	MatchedIndex *int              `json:"matchedIndex"`
	Params       map[string]string `json:"params,omitempty"`
}

type vector struct {
	Name    string      `json:"name"`
	Routes  []routeDef  `json:"routes"`
	Request request     `json:"request"`
	Expect  expectation `json:"expect"`
}

type spec struct {
	name    string
	routes  []string // "METHOD pattern"
	request string   // "METHOD path"
}

type echoPayload struct {
	Index  int               `json:"index"`
	Params map[string]string `json:"params"`
}

var specs = []spec{
	// static routes and normalization
	{"root", []string{"GET /"}, "GET /"},
	{"root-no-match", []string{"GET /"}, "GET /users"},
	{"static-exact", []string{"GET /about"}, "GET /about"},
	{"static-no-subpath", []string{"GET /users"}, "GET /users/42"},
	{"trailing-slash-non-strict", []string{"GET /users"}, "GET /users/"},
	{"multiple-trailing-slashes", []string{"GET /users"}, "GET /users///"},
	{"case-insensitive-pattern", []string{"GET /USERS"}, "GET /users"},
	{"case-insensitive-path", []string{"GET /users"}, "GET /UsErS"},

	// named parameters
	{"param-basic", []string{"GET /users/:id"}, "GET /users/42"},
	{"param-keeps-case", []string{"GET /users/:id"}, "GET /users/MiXeD42"},
	{"param-missing-value", []string{"GET /users/:id"}, "GET /users/"},
	{"param-two-segments", []string{"GET /user/:name/books/:title"}, "GET /user/karl/books/go"},
	{"param-does-not-cross-slash", []string{"GET /users/:id"}, "GET /users/42/extra"},

	// optional parameters
	{"optional-present", []string{"GET /user/:name?"}, "GET /user/fenny"},
	{"optional-absent", []string{"GET /user/:name?"}, "GET /user"},
	{"optional-trailing-slash", []string{"GET /user/:name?"}, "GET /user/"},
	{"optional-no-deep-path", []string{"GET /user/:name?"}, "GET /user/john/doe"},

	// greedy parameters
	{"plus-deep", []string{"GET /user/+"}, "GET /user/john/doe"},
	{"plus-requires-value", []string{"GET /user/+"}, "GET /user/"},
	{"wildcard-empty", []string{"GET /user/*"}, "GET /user/"},
	{"wildcard-deep", []string{"GET /user/*"}, "GET /user/a/b/c"},
	{"root-wildcard-deep", []string{"GET /*"}, "GET /anything/here"},
	{"root-wildcard-root", []string{"GET /*"}, "GET /"},

	// multiple parameters in one segment, literal separators
	{"sign-and-param", []string{"GET /:sign:param"}, "GET /@v1"},
	{"literal-dash-prefix", []string{"GET /api-:name"}, "GET /api-v1"},
	{"literal-dash-between", []string{"GET /flights/:from-:to"}, "GET /flights/LAX-SFO"},
	{"literal-dot-between", []string{"GET /plantae/:genus.:species"}, "GET /plantae/prunus.persica"},
	{"literal-colon-between", []string{"GET /shop/product/color::color/size::size"}, "GET /shop/product/color:blue/size:xs"},
	{"double-wildcard-inline", []string{"GET /*v1*/proxy"}, "GET /customer/v1/cart/proxy"},
	{"double-wildcard-segments", []string{"GET /v1/*/shop/*"}, "GET /v1/brand/4/shop/blue/xs"},
	{"adjacent-params", []string{"GET /:a:b"}, "GET /xy"},
	{"adjacent-params-too-short", []string{"GET /:a:b"}, "GET /x"},

	// escaping
	{"escaped-colon", []string{`GET /v1/some/resource/name\:customVerb`}, "GET /v1/some/resource/name:customVerb"},
	{"escaped-colon-no-match", []string{`GET /v1/some/resource/name\:customVerb`}, "GET /v1/some/resource/nameXcustomVerb"},

	// parameter followed by a fixed end
	{"fixed-end-match", []string{"GET /api/:param/fixedEnd"}, "GET /api/123/fixedEnd"},
	{"fixed-end-no-slash-crossing", []string{"GET /api/:param/fixedEnd"}, "GET /api/123/456/fixedEnd"},

	// registration order and methods
	{"static-registered-first", []string{"GET /users/new", "GET /users/:id"}, "GET /users/new"},
	{"param-registered-first", []string{"GET /users/:id", "GET /users/new"}, "GET /users/new"},
	{"method-not-allowed", []string{"GET /users"}, "POST /users"},
	{"no-route-at-all", []string{"GET /users"}, "POST /nope"},
	{"query-method-match", []string{"QUERY /search"}, "QUERY /search"},
	{"query-method-not-allowed", []string{"GET /search"}, "QUERY /search"},
	{"all-matches-any-method", []string{"ALL /ping"}, "QUERY /ping"},
	{"all-registered-second", []string{"GET /ping", "ALL /ping"}, "POST /ping"},
	{"constraint-fail-falls-through", []string{"GET /users/:id<int>", "GET /users/:slug"}, "GET /users/abc"},

	// int constraint
	{"int-ok", []string{"GET /:id<int>"}, "GET /123"},
	{"int-negative", []string{"GET /:id<int>"}, "GET /-123"},
	{"int-plus-sign", []string{"GET /:id<int>"}, "GET /+42"},
	{"int-rejects-float", []string{"GET /:id<int>"}, "GET /7.0"},
	{"int-overflow", []string{"GET /:id<int>"}, "GET /9223372036854775808"},

	// bool constraint
	{"bool-one", []string{"GET /:v<bool>"}, "GET /1"},
	{"bool-upper-true", []string{"GET /:v<bool>"}, "GET /TRUE"},
	{"bool-rejects-yes", []string{"GET /:v<bool>"}, "GET /yes"},

	// float constraint
	{"float-exponent", []string{"GET /:w<float>"}, "GET /-1001.01e8"},
	{"float-inf", []string{"GET /:w<float>"}, "GET /inf"},
	{"float-rejects-text", []string{"GET /:w<float>"}, "GET /abc"},

	// alpha constraint
	{"alpha-ok", []string{"GET /:name<alpha>"}, "GET /Rick"},
	{"alpha-rejects-digits", []string{"GET /:name<alpha>"}, "GET /Rick42"},

	// guid constraint
	{"guid-canonical", []string{"GET /:id<guid>"}, "GET /CD2C1638-1638-72D5-1638-DEADBEEF1638"},
	{"guid-no-hyphens", []string{"GET /:id<guid>"}, "GET /CD2C1638163872D51638DEADBEEF1638"},
	{"guid-rejects-text", []string{"GET /:id<guid>"}, "GET /notaguid"},

	// length constraints
	{"minlen-ok", []string{"GET /:u<minLen(4)>"}, "GET /Test"},
	{"minlen-too-short", []string{"GET /:u<minLen(4)>"}, "GET /abc"},
	{"minlen-lowercase-alias", []string{"GET /:u<minlen(4)>"}, "GET /Test"},
	{"maxlen-ok", []string{"GET /:f<maxLen(8)>"}, "GET /MyFile"},
	{"maxlen-too-long", []string{"GET /:f<maxLen(8)>"}, "GET /verylongfilename"},
	{"len-exact", []string{"GET /:f<len(12)>"}, "GET /somefile.txt"},
	{"len-wrong", []string{"GET /:f<len(12)>"}, "GET /short"},
	{"betweenlen-alias-ok", []string{"GET /:x<betweenlen(2,4)>"}, "GET /abc"},
	{"betweenlen-too-long", []string{"GET /:x<betweenlen(2,4)>"}, "GET /abcde"},

	// numeric range constraints
	{"min-ok", []string{"GET /:age<min(18)>"}, "GET /19"},
	{"min-too-small", []string{"GET /:age<min(18)>"}, "GET /17"},
	{"max-ok", []string{"GET /:age<max(120)>"}, "GET /91"},
	{"max-too-big", []string{"GET /:age<max(120)>"}, "GET /121"},
	{"range-ok", []string{"GET /:age<range(18,120)>"}, "GET /91"},
	{"range-outside", []string{"GET /:age<range(18,120)>"}, "GET /200"},

	// chained constraints
	{"chained-ok", []string{"GET /:test<min(100);maxLen(5)>"}, "GET /250"},
	{"chained-fails-maxlen", []string{"GET /:test<min(100);maxLen(5)>"}, "GET /120000"},
	{"chained-fails-min", []string{"GET /:test<min(100);maxLen(5)>"}, "GET /1"},

	// constraints on optional parameters
	{"optional-int-present", []string{"GET /:test<int>?"}, "GET /42"},
	{"optional-int-empty-skips-constraint", []string{"GET /:test<int>?"}, "GET /"},
	{"optional-int-invalid", []string{"GET /:test<int>?"}, "GET /7.0"},
	{"optional-int-nested-empty", []string{"GET /users/:id<int>?"}, "GET /users/"},

	// regex constraint
	{"regex-date-ok", []string{`GET /:date<regex(\d{4}-\d{2}-\d{2})>`}, "GET /2022-08-27"},
	{"regex-date-rejects", []string{`GET /:date<regex(\d{4}-\d{2}-\d{2})>`}, "GET /125"},

	// constraint name resolution quirks
	{"unknown-constraint-ignored", []string{"GET /:id<foo>"}, "GET /anything"},
	{"capitalized-int-ignored", []string{"GET /:id<Int>"}, "GET /abc"},
	{"min-invalid-arg-never-matches", []string{"GET /:id<min(abc)>"}, "GET /5"},
}

func parseDef(s string) (method, rest string, err error) {
	idx := strings.IndexByte(s, ' ')
	if idx == -1 {
		return "", "", fmt.Errorf("invalid def %q", s)
	}
	return s[:idx], s[idx+1:], nil
}

func echoHandler(index int) fiber.Handler {
	return func(c fiber.Ctx) error {
		params := map[string]string{}
		for _, name := range c.Route().Params {
			params[name] = c.Params(name)
		}
		return c.JSON(echoPayload{Index: index, Params: params})
	}
}

func run(s spec) (vector, error) {
	v := vector{Name: s.name}

	app := fiber.New()
	for i, def := range s.routes {
		method, pattern, err := parseDef(def)
		if err != nil {
			return v, err
		}
		v.Routes = append(v.Routes, routeDef{Method: method, Pattern: pattern})
		if method == "ALL" {
			app.All(pattern, echoHandler(i))
		} else {
			app.Add([]string{method}, pattern, echoHandler(i))
		}
	}

	method, path, err := parseDef(s.request)
	if err != nil {
		return v, err
	}
	v.Request = request{Method: method, Path: path}

	resp, err := app.Test(httptest.NewRequest(method, path, nil))
	if err != nil {
		return v, fmt.Errorf("%s: %w", s.name, err)
	}
	defer resp.Body.Close() //nolint:errcheck // test helper

	v.Expect.Status = resp.StatusCode
	if resp.StatusCode == fiber.StatusOK {
		body, err := io.ReadAll(resp.Body)
		if err != nil {
			return v, fmt.Errorf("%s: %w", s.name, err)
		}
		var payload echoPayload
		if err := json.Unmarshal(body, &payload); err != nil {
			return v, fmt.Errorf("%s: %s: %w", s.name, body, err)
		}
		index := payload.Index
		v.Expect.MatchedIndex = &index
		v.Expect.Params = payload.Params
	}
	return v, nil
}

func main() {
	vectors := make([]vector, 0, len(specs))
	for _, s := range specs {
		v, err := run(s)
		if err != nil {
			fmt.Fprintln(os.Stderr, err)
			os.Exit(1)
		}
		vectors = append(vectors, v)
	}
	out, err := json.MarshalIndent(vectors, "", "  ")
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
	fmt.Println(string(out))
}
