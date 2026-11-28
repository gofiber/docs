import type { SimResponse } from "../docs-widgets/http";

// Hand-authored frames for the middleware chain visualizer. Each frame
// highlights the code that executes at that moment; a generator would be more
// code than the data. Both scenarios run against the same code sample below.

export const chainCode = [
    "app.Use(func(c fiber.Ctx) error { // logger",
    "    start := time.Now()",
    "    err := c.Next() // hand over to auth",
    '    log.Printf("%s %s took %v", c.Method(), c.Path(), time.Since(start))',
    "    return err",
    "})",
    "",
    "app.Use(func(c fiber.Ctx) error { // auth",
    '    if c.Get("Authorization") == "" {',
    "        return fiber.ErrUnauthorized // stop here, no c.Next()",
    "    }",
    "    return c.Next() // hand over to the handler",
    "})",
    "",
    'app.Get("/admin", func(c fiber.Ctx) error { // handler',
    '    return c.SendString("Admin dashboard")',
    "})",
].join("\n");

export type Station = {
    name: string;
    kind: "middleware" | "handler";
};

export type Frame = {
    // Station index the request is currently in; -1 while outside the chain.
    active: number;
    // Whether the request travels into the chain or the response bubbles out.
    direction: "in" | "out";
    // CodeBlock highlight metastring for the lines executing now, "" for none.
    highlight: string;
    log: string;
    // Station indexes known to be skipped as of this frame.
    skipped?: number[];
    response?: SimResponse;
};

export type Scenario = {
    id: string;
    label: string;
    request: string;
    frames: Frame[];
};

export const stations: Station[] = [
    { name: "logger", kind: "middleware" },
    { name: "auth", kind: "middleware" },
    { name: "GET /admin", kind: "handler" },
];

const TEXT_PLAIN = "text/plain; charset=utf-8";

export const scenarios: Scenario[] = [
    {
        id: "authorized",
        label: "Authorized",
        request: 'GET /admin with header "Authorization: Bearer ..."',
        frames: [
            {
                active: -1,
                direction: "in",
                highlight: "",
                log: "The request arrives with a valid Authorization header and enters the chain.",
            },
            {
                active: 0,
                direction: "in",
                highlight: "{1-3}",
                log: "logger runs first: it notes the start time, then hands the request on with c.Next().",
            },
            {
                active: 1,
                direction: "in",
                highlight: "{8,9,12}",
                log: "auth finds a token, so the guard clause does not fire and c.Next() calls the handler.",
            },
            {
                active: 2,
                direction: "in",
                highlight: "{15-16}",
                log: "The handler writes the 200 response body and returns nil.",
            },
            {
                active: 1,
                direction: "out",
                highlight: "{12}",
                log: "c.Next() returns inside auth. There is no code after it here, so auth just passes the result up.",
            },
            {
                active: 0,
                direction: "out",
                highlight: "{4-5}",
                log: "Back in logger: the lines after c.Next() run now and log method, path, and duration.",
            },
            {
                active: -1,
                direction: "out",
                highlight: "",
                log: "The response leaves the app.",
                response: {
                    status: 200,
                    statusText: "OK",
                    headers: { "Content-Type": TEXT_PLAIN },
                    body: "Admin dashboard",
                },
            },
        ],
    },
    {
        id: "short-circuit",
        label: "Short circuit (401)",
        request: "GET /admin without an Authorization header",
        frames: [
            {
                active: -1,
                direction: "in",
                highlight: "",
                log: "The request arrives without an Authorization header and enters the chain.",
            },
            {
                active: 0,
                direction: "in",
                highlight: "{1-3}",
                log: "logger runs first: it notes the start time, then hands the request on with c.Next().",
            },
            {
                active: 1,
                direction: "in",
                highlight: "{8-10}",
                log: "auth finds no token and returns fiber.ErrUnauthorized without calling c.Next(): the handler never runs.",
                skipped: [2],
            },
            {
                active: 0,
                direction: "out",
                highlight: "{4-5}",
                log: "logger still finishes: its lines after c.Next() run and log the failed request.",
                skipped: [2],
            },
            {
                active: -1,
                direction: "out",
                highlight: "",
                log: "The error handler turns fiber.ErrUnauthorized into the 401 response.",
                skipped: [2],
                response: {
                    status: 401,
                    statusText: "Unauthorized",
                    headers: { "Content-Type": TEXT_PLAIN },
                    body: "Unauthorized",
                },
            },
        ],
    },
];
