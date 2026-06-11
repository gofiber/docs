// src/components/home/InAction.tsx
// Tabbed code tour of Fiber's everyday building blocks.
import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';
import styles from './InAction.module.scss';
import shared from './shared.module.scss';

type Tab = {
    key: string;
    label: string;
    icon: string;
    description: React.ReactNode;
    code: string;
};

const tabs: Tab[] = [
    {
        key: 'routing',
        label: 'Routing',
        icon: '🔀',
        description: (
            <>
                Routes are declared Express-style with a method, a path, and a handler.
                Dynamic segments like <code>:name</code> are captured and read through{' '}
                <code>c.Params</code>, and wildcards like <code>*</code> match everything
                below a prefix.{' '}
                <a href="https://docs.gofiber.io/guide/routing/" target="_blank" rel="noreferrer">Routing guide →</a>
            </>
        ),
        code: `app.Get("/", func(c fiber.Ctx) error {
    return c.SendString("Hello, World!")
})

app.Get("/user/:name", func(c fiber.Ctx) error {
    return c.SendString("Hello, " + c.Params("name"))
})

app.Get("/files/*", func(c fiber.Ctx) error {
    return c.SendString("Path: " + c.Params("*"))
})`,
    },
    {
        key: 'middleware',
        label: 'Middleware',
        icon: '🧬',
        description: (
            <>
                <code>app.Use</code> chains middleware into the request cycle. Here{' '}
                <code>logger.New()</code> prints every request and <code>limiter.New()</code>{' '}
                throttles abusive clients. Middleware runs in the order you register it,
                so requests flow through the chain top to bottom.{' '}
                <a href="https://docs.gofiber.io/category/-middleware" target="_blank" rel="noreferrer">Middleware overview →</a>
            </>
        ),
        code: `import (
    "github.com/gofiber/fiber/v3/middleware/limiter"
    "github.com/gofiber/fiber/v3/middleware/logger"
)

// Log every request
app.Use(logger.New())

// 20 requests per 30 seconds per client
app.Use(limiter.New(limiter.Config{
    Max:        20,
    Expiration: 30 * time.Second,
}))`,
    },
    {
        key: 'json',
        label: 'JSON APIs',
        icon: '📦',
        description: (
            <>
                <code>c.JSON</code> serializes structs or a <code>fiber.Map</code> straight
                into the response body, and status codes chain through <code>c.Status</code>.
                Reading request data works the same way in reverse with <code>c.Bind</code>.{' '}
                <a href="https://docs.gofiber.io/api/ctx/" target="_blank" rel="noreferrer">Context API →</a>
            </>
        ),
        code: `app.Get("/api/posts", func(c fiber.Ctx) error {
    posts := getPosts() // your logic
    if len(posts) == 0 {
        return c.Status(404).JSON(&fiber.Map{
            "success": false,
            "error":   "There are no posts!",
        })
    }
    return c.JSON(&fiber.Map{
        "success": true,
        "posts":   posts,
    })
})`,
    },
    {
        key: 'static',
        label: 'Static Files',
        icon: '📁',
        description: (
            <>
                <code>static.New</code> serves HTML, CSS, JavaScript, and images from one or
                more directories on the same route, with options like compression, caching,
                and directory browsing.{' '}
                <a href="https://docs.gofiber.io/middleware/static/" target="_blank" rel="noreferrer">Static middleware →</a>
            </>
        ),
        code: `import "github.com/gofiber/fiber/v3/middleware/static"

app.Get("/*", static.New("./public"))

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css`,
    },
    {
        key: 'templates',
        label: 'Templates',
        icon: '📝',
        description: (
            <>
                Set a <code>Views</code> engine and <code>c.Render</code> fills your
                templates server-side. Engines are swappable behind the same interface,
                so your handlers never change.{' '}
                <a href="https://docs.gofiber.io/template/next/" target="_blank" rel="noreferrer">Template engines →</a>
            </>
        ),
        code: `import "github.com/gofiber/template/html/v3"

app := fiber.New(fiber.Config{
    Views: html.New("./views", ".html"),
})

app.Get("/", func(c fiber.Ctx) error {
    return c.Render("index", fiber.Map{
        "Title": "Hello, World!",
    })
})`,
    },
];

export default function InAction() {
    const [active, setActive] = useState(0);

    return (
        <section id="fiber-in-action" data-stripe>
            <div className={`${shared.mid} ${shared.midWide}`}>
                <div className={shared.center}>
                    <h2>Fiber in Action</h2>
                    <p className={styles.tagline}>
                        How Fiber applications are built: pick a topic, read the code.
                    </p>
                </div>
                <div className={styles.box}>
                    <div className={styles.tabList} role="tablist" aria-label="Fiber concepts">
                        {tabs.map((t, i) => (
                            <button
                                key={t.key}
                                role="tab"
                                aria-selected={i === active}
                                className={`${styles.tab} ${i === active ? styles.tabActive : ''}`}
                                onClick={() => setActive(i)}
                            >
                                <span className={styles.tabIcon} aria-hidden>{t.icon}</span>
                                {t.label}
                            </button>
                        ))}
                    </div>
                    <div className={styles.panels}>
                        {tabs.map((t, i) => (
                            <div
                                key={t.key}
                                role="tabpanel"
                                aria-hidden={i !== active}
                                className={`${styles.panel} ${i === active ? styles.panelActive : ''}`}
                            >
                                <p className={styles.desc}>{t.description}</p>
                                <div className={styles.code}>
                                    <CodeBlock language="go">{t.code}</CodeBlock>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
