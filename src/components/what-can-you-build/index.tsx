import React from "react";
import TabbedShowcase, { type ShowcaseTab } from "../tabbed-showcase";
import styles from "./styles.module.css";

// WhatCanYouBuild is the docs-side sibling of the homepage "Fiber in Action"
// box: a tabbed tour of typical Fiber use cases with one code teaser each,
// rendered through the shared TabbedShowcase shell. Links are absolute like
// the other cross-section links on the intro page.

const cases: ShowcaseTab[] = [
    {
        key: "json-apis",
        label: "JSON APIs",
        icon: "📦",
        description: (
            <>
                Route parameters with <code>constraints</code>, request binding, and{" "}
                <code>c.JSON</code> keep classic REST services short.{" "}
                <a href="https://docs.gofiber.io/guide/routing/">Routing guide →</a>
            </>
        ),
        code: `app.Get("/api/users/:id<int>", func(c fiber.Ctx) error {
    return c.JSON(fiber.Map{"id": c.Params("id"), "name": "Alice"})
})`,
    },
    {
        key: "static-spa",
        label: "Static Sites and SPAs",
        icon: "📁",
        description: (
            <>
                The <code>static</code> middleware serves files with caching, byte ranges, and
                compression; one wildcard route turns it into an SPA host.{" "}
                <a href="https://docs.gofiber.io/middleware/static/">Static middleware →</a>
            </>
        ),
        code: `app.Use("/", static.New("./dist"))

app.Get("/*", func(c fiber.Ctx) error {
    return c.SendFile("./dist/index.html") // SPA fallback
})`,
    },
    {
        key: "server-rendered",
        label: "Server-Rendered Apps",
        icon: "📝",
        description: (
            <>
                Plug any of the official template engines into the <code>Views</code> interface
                and render HTML on the server with <code>c.Render</code>.{" "}
                <a href="https://docs.gofiber.io/guide/templates/">Templates guide →</a>
            </>
        ),
        code: `app := fiber.New(fiber.Config{
    Views: html.New("./views", ".html"),
})

app.Get("/", func(c fiber.Ctx) error {
    return c.Render("index", fiber.Map{"Title": "Hello"})
})`,
    },
    {
        key: "proxies",
        label: "Proxies and Gateways",
        icon: "🔁",
        description: (
            <>
                The <code>proxy</code> middleware forwards or load-balances requests to upstream
                servers, so Fiber also works as a lightweight gateway.{" "}
                <a href="https://docs.gofiber.io/middleware/proxy/">Proxy middleware →</a>
            </>
        ),
        code: `app.Use(proxy.Balancer(proxy.Config{
    Servers: []string{
        "http://localhost:3001",
        "http://localhost:3002",
    },
}))`,
    },
    {
        key: "realtime",
        label: "Real-Time and Streaming",
        icon: "📡",
        description: (
            <>
                Server-sent events stream live updates over plain HTTP; WebSocket support lives
                in the contrib collection.{" "}
                <a href="https://docs.gofiber.io/middleware/sse/">SSE middleware →</a>
            </>
        ),
        code: `app.Get("/events", sse.New(sse.Config{
    Handler: func(c fiber.Ctx, stream *sse.Stream) error {
        return stream.Event(sse.Event{
            Name: "message",
            Data: fiber.Map{"hello": "world"},
        })
    },
}))`,
    },
    {
        key: "microservices",
        label: "Microservices",
        icon: "⚡",
        description: (
            <>
                Zero-allocation routing, health probes, and a built-in HTTP client on the same
                Fasthttp engine keep service-to-service hops cheap.{" "}
                <a href="https://docs.gofiber.io/client/rest/">HTTP client →</a>
            </>
        ),
        code: `app.Get(healthcheck.LivenessEndpoint, healthcheck.New())

cc := client.New()
resp, err := cc.Get("http://user-service:3000/api/users/42")`,
    },
];

export default function WhatCanYouBuild(): JSX.Element {
    return <TabbedShowcase tabs={cases} ariaLabel="Fiber use cases" className={styles.docsBox} />;
}
