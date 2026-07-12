import type { SimResponse } from "../docs-widgets/http";

// Data for the interactive get-started walkthrough on the docs intro page.
// One program grows across the steps: every line of the final main.go is
// tagged with the step that introduces it (and optionally the step that
// removes it), so each step renders a real, runnable snapshot with the new
// lines highlighted.
//
// The simulated responses are verified against a real Fiber v3 app; only the
// headers each step teaches about are shown.

export type CodeLine = {
    text: string;
    step: number;
    removedIn?: number;
};

export type SimRequest = {
    method: "GET" | "POST";
    path: string;
    response: SimResponse;
    note?: string;
};

export type Step = {
    id: string;
    title: string;
    explanation: string;
    requests: SimRequest[];
};

const TEXT_PLAIN = "text/plain; charset=utf-8";

export const program: CodeLine[] = [
    { text: "package main", step: 1 },
    { text: "", step: 1 },
    { text: "import (", step: 1 },
    { text: '    "log"', step: 1 },
    { text: "", step: 1 },
    { text: '    "github.com/gofiber/fiber/v3"', step: 1 },
    { text: '    "github.com/gofiber/fiber/v3/middleware/static"', step: 3 },
    { text: ")", step: 1 },
    { text: "", step: 1 },
    { text: "func main() {", step: 1 },
    { text: "    app := fiber.New()", step: 1 },
    { text: "", step: 4 },
    { text: "    // Runs first on every request", step: 4 },
    { text: "    app.Use(func(c fiber.Ctx) error {", step: 4 },
    { text: '        c.Set("X-Powered-By", "Fiber")', step: 4 },
    { text: "        return c.Next()", step: 4 },
    { text: "    })", step: 4 },
    { text: "", step: 3 },
    { text: "    // Serve files from ./public", step: 3 },
    { text: '    app.Use("/", static.New("./public"))', step: 3 },
    { text: "", step: 1 },
    { text: '    app.Get("/", func(c fiber.Ctx) error {', step: 1 },
    { text: '        return c.SendString("Hello, World!")', step: 1 },
    { text: "    })", step: 1 },
    { text: "", step: 2 },
    { text: '    app.Get("/users/:id", func(c fiber.Ctx) error {', step: 2 },
    { text: '        return c.SendString("User ID: " + c.Params("id"))', step: 2 },
    { text: "    })", step: 2 },
    { text: "", step: 5 },
    { text: '    app.Get("/api/users", func(c fiber.Ctx) error {', step: 5 },
    { text: "        return c.JSON([]fiber.Map{", step: 5 },
    { text: '            {"id": 1, "name": "Alice"},', step: 5 },
    { text: '            {"id": 2, "name": "Bob"},', step: 5 },
    { text: "        })", step: 5 },
    { text: "    })", step: 5 },
    { text: "", step: 6 },
    { text: '    app.Get("/admin", func(c fiber.Ctx) error {', step: 6 },
    { text: "        return fiber.ErrForbidden", step: 6 },
    { text: "    })", step: 6 },
    { text: "", step: 1 },
    { text: '    log.Fatal(app.Listen(":3000"))', step: 1 },
    { text: "}", step: 1 },
];

export const steps: Step[] = [
    {
        id: "hello-world",
        title: "Hello, World",
        explanation:
            "fiber.New() creates the app, app.Get registers a handler for GET requests to /, and app.Listen starts the server on port 3000. " +
            "Every handler receives a fiber.Ctx and returns an error. Requests that match no route get Fiber's default 404 response.",
        requests: [
            {
                method: "GET",
                path: "/",
                response: {
                    status: 200,
                    statusText: "OK",
                    headers: { "Content-Type": TEXT_PLAIN },
                    body: "Hello, World!",
                },
            },
            {
                method: "GET",
                path: "/nope",
                response: {
                    status: 404,
                    statusText: "Not Found",
                    headers: { "Content-Type": TEXT_PLAIN },
                    body: "Not Found",
                },
                note: "No route matches /nope, so Fiber's default handler answers.",
            },
        ],
    },
    {
        id: "route-parameter",
        title: "Add a route parameter",
        explanation:
            ":id is a route parameter: it captures whatever sits in that path segment, and c.Params(\"id\") reads the value inside the handler. " +
            "A named parameter is required by default, so /users/ without a value does not match.",
        requests: [
            {
                method: "GET",
                path: "/users/42",
                response: {
                    status: 200,
                    statusText: "OK",
                    headers: { "Content-Type": TEXT_PLAIN },
                    body: "User ID: 42",
                },
            },
            {
                method: "GET",
                path: "/users/alice",
                response: {
                    status: 200,
                    statusText: "OK",
                    headers: { "Content-Type": TEXT_PLAIN },
                    body: "User ID: alice",
                },
                note: "Parameters are plain strings; route constraints like :id<int> can restrict them.",
            },
            {
                method: "GET",
                path: "/users/",
                response: {
                    status: 404,
                    statusText: "Not Found",
                    headers: { "Content-Type": TEXT_PLAIN },
                    body: "Not Found",
                },
                note: "The parameter is required, so the route does not match without a value.",
            },
        ],
    },
    {
        id: "static-files",
        title: "Serve static files",
        explanation:
            "static.New(\"./public\") is middleware: registered with app.Use, it answers with a matching file from ./public if one exists and passes the request on otherwise. " +
            "In this example the folder holds a single file, css/style.css.",
        requests: [
            {
                method: "GET",
                path: "/css/style.css",
                response: {
                    status: 200,
                    statusText: "OK",
                    headers: { "Content-Type": "text/css; charset=utf-8" },
                    body: "h1 { color: teal; }",
                },
            },
            {
                method: "GET",
                path: "/missing.css",
                response: {
                    status: 404,
                    statusText: "Not Found",
                    headers: { "Content-Type": TEXT_PLAIN },
                    body: "Not Found",
                },
                note: "No file and no route: the request falls through to the default 404.",
            },
            {
                method: "GET",
                path: "/",
                response: {
                    status: 200,
                    statusText: "OK",
                    headers: { "Content-Type": TEXT_PLAIN },
                    body: "Hello, World!",
                },
                note: "./public has no index.html, so the request falls through to your handler.",
            },
        ],
    },
    {
        id: "middleware",
        title: "Write your own middleware",
        explanation:
            "Middleware runs before the routes registered after it. This one sets a response header and calls c.Next() to hand the request to the next handler in the chain. " +
            "Registered first, it applies to every response, including static files and even errors.",
        requests: [
            {
                method: "GET",
                path: "/users/7",
                response: {
                    status: 200,
                    statusText: "OK",
                    headers: { "X-Powered-By": "Fiber", "Content-Type": TEXT_PLAIN },
                    body: "User ID: 7",
                },
            },
            {
                method: "GET",
                path: "/css/style.css",
                response: {
                    status: 200,
                    statusText: "OK",
                    headers: { "X-Powered-By": "Fiber", "Content-Type": "text/css; charset=utf-8" },
                    body: "h1 { color: teal; }",
                },
                note: "The header shows up on static files too, because the middleware runs first.",
            },
            {
                method: "GET",
                path: "/nope",
                response: {
                    status: 404,
                    statusText: "Not Found",
                    headers: { "X-Powered-By": "Fiber", "Content-Type": TEXT_PLAIN },
                    body: "Not Found",
                },
                note: "Even the 404 response passes through the middleware and carries the header.",
            },
        ],
    },
    {
        id: "json",
        title: "Return JSON",
        explanation:
            "c.JSON serializes any Go value and sets the Content-Type header for you. " +
            "A []fiber.Map is the quickest way to shape ad hoc JSON; real apps usually marshal structs the same way.",
        requests: [
            {
                method: "GET",
                path: "/api/users",
                response: {
                    status: 200,
                    statusText: "OK",
                    headers: { "Content-Type": "application/json; charset=utf-8" },
                    body: '[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}]',
                },
            },
            {
                method: "GET",
                path: "/users/42",
                response: {
                    status: 200,
                    statusText: "OK",
                    headers: { "Content-Type": TEXT_PLAIN },
                    body: "User ID: 42",
                },
                note: "Plain-text routes are unaffected; each handler picks its own response shape.",
            },
        ],
    },
    {
        id: "errors",
        title: "Handle errors",
        explanation:
            "Handlers return errors instead of writing error responses by hand. fiber.ErrForbidden is a predefined *fiber.Error with status 403; " +
            "the app's error handler turns any returned error into the HTTP response, one central place you can customize.",
        requests: [
            {
                method: "GET",
                path: "/admin",
                response: {
                    status: 403,
                    statusText: "Forbidden",
                    headers: { "Content-Type": TEXT_PLAIN },
                    body: "Forbidden",
                },
            },
            {
                method: "GET",
                path: "/nope",
                response: {
                    status: 404,
                    statusText: "Not Found",
                    headers: { "Content-Type": TEXT_PLAIN },
                    body: "Not Found",
                },
                note: "The default 404 is just another error flowing through the same error handler.",
            },
        ],
    },
];
