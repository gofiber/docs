// Data for the Fiber landscape map. The package catalogs (middleware,
// contrib, storage, template) are NOT listed here: the component reads them
// from the docs plugin global data at build time, so the chips always mirror
// the synced docs and link to the real pages. Links here are absolute like
// the other cross-section links in the docs.

export type LandscapeNode = {
    key: string;
    label: string;
    repo: string;
    kind: "core" | "extension" | "foundation" | "learning";
    // Where this node's connection line docks onto the core: the whole card
    // or one specific building block chip inside it.
    edgeTarget?: "card" | "middleware" | "bind";
    // Connection label, rendered as a pill on the line (and as the mobile
    // fallback port chip).
    port?: string;
    // Static badge fallback; when a dynamic catalog is available the badge
    // becomes "<count> <badgeNoun>" and can never go stale.
    badge?: string;
    badgeNoun?: string;
    // Which dynamic catalog fills the detail chips for this node.
    catalog?: "middleware" | "contrib" | "storage" | "template";
    blurb: string;
    snippet?: { caption: string; language: string; code: string };
    link: { href: string; label: string };
};

export const nodes: LandscapeNode[] = [
    {
        key: "core",
        label: "Fiber core",
        repo: "github.com/gofiber/fiber",
        kind: "core",
        badge: "one import",
        catalog: "middleware",
        blurb:
            "Everything a production web service needs behind one import: the router, the request context, binding and validation, an HTTP client, hooks, and the built-in middleware catalog below.",
        snippet: {
            caption: "One module, no extra dependencies:",
            language: "bash",
            code: "go get github.com/gofiber/fiber/v3",
        },
        link: { href: "https://docs.gofiber.io/", label: "Core documentation" },
    },
    {
        key: "template",
        label: "Template Engines",
        repo: "github.com/gofiber/template",
        kind: "extension",
        edgeTarget: "card",
        port: "fiber.Config.Views",
        badge: "engines",
        badgeNoun: "engines",
        catalog: "template",
        blurb:
            "Official server-side template engines behind one Views interface; swap the engine without touching your handlers, c.Render stays the same.",
        snippet: {
            caption: "Plugs into the core through the Views interface:",
            language: "go",
            code: 'import "github.com/gofiber/template/html/v3"\n\napp := fiber.New(fiber.Config{\n    Views: html.New("./views", ".html"),\n})',
        },
        link: { href: "https://docs.gofiber.io/template/", label: "Template docs" },
    },
    {
        key: "contrib",
        label: "Contrib Middleware",
        repo: "github.com/gofiber/contrib",
        kind: "extension",
        edgeTarget: "middleware",
        port: "adds middleware",
        badge: "20+ packages",
        badgeNoun: "packages",
        catalog: "contrib",
        blurb:
            "Officially maintained middleware whose dependencies stay out of the core: real-time transports, auth, logging adapters, observability, and more. They extend the same middleware catalog the core ships with.",
        snippet: {
            caption: "Used like any built-in middleware, just a separate import:",
            language: "go",
            code: 'import "github.com/gofiber/contrib/websocket"\n\napp.Get("/ws", websocket.New(func(c *websocket.Conn) {\n    // ...\n}))',
        },
        link: { href: "https://docs.gofiber.io/contrib/", label: "Contrib docs" },
    },
    {
        key: "storage",
        label: "Storage Drivers",
        repo: "github.com/gofiber/storage",
        kind: "extension",
        edgeTarget: "middleware",
        port: "fiber.Storage",
        badge: "30+ drivers",
        badgeNoun: "drivers",
        catalog: "storage",
        blurb:
            "One small Storage interface, many backends. Every driver plugs into the stateful middleware of the core: session, limiter, cache, and idempotency.",
        snippet: {
            caption: "Any driver slots into the Storage field of a middleware config:",
            language: "go",
            code: "store := redis.New() // or memory, postgres, s3, ...\n\napp.Use(limiter.New(limiter.Config{\n    Storage: store,\n}))",
        },
        link: { href: "https://docs.gofiber.io/storage/", label: "Storage docs" },
    },
    {
        key: "utils",
        label: "Utils",
        repo: "github.com/gofiber/utils",
        kind: "foundation",
        edgeTarget: "card",
        port: "zero-alloc helpers",
        blurb:
            "The zero-allocation helper toolbox (string and byte conversions, parsing, assertions) that the core and the official packages share under the hood.",
        link: { href: "https://github.com/gofiber/utils", label: "Utils repository" },
    },
    {
        key: "schema",
        label: "Schema",
        repo: "github.com/gofiber/schema",
        kind: "foundation",
        edgeTarget: "bind",
        port: "powers c.Bind()",
        blurb:
            "The struct decoder behind binding: it maps query, form, and header data onto your Go structs when you call c.Bind().",
        link: { href: "https://github.com/gofiber/schema", label: "Schema repository" },
    },
    {
        key: "recipes",
        label: "Recipes",
        repo: "github.com/gofiber/recipes",
        kind: "learning",
        blurb:
            "Dozens of runnable example projects, from JWT auth and GORM to Docker and clean architecture. Copy a working starting point instead of a blank file.",
        link: { href: "https://docs.gofiber.io/recipes/", label: "Browse recipes" },
    },
    {
        key: "awesome",
        label: "Awesome Fiber",
        repo: "github.com/gofiber/awesome-fiber",
        kind: "learning",
        blurb:
            "The curated community list: articles, boilerplates, third-party middleware, and tools built around Fiber by the community.",
        link: { href: "https://github.com/gofiber/awesome-fiber", label: "Awesome Fiber list" },
    },
];
