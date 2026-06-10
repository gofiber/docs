// src/components/home/Ecosystem.tsx
import React from 'react';
import styles from './Ecosystem.module.scss';
import shared from './shared.module.scss';

type EcosystemCategory = {
    count: string;
    title: string;
    description: string;
    items: string[];
    more?: string;
    href: string;
    cta: string;
};

// Keep counts rough ("30+") so the homepage doesn't go stale with every new package.
const categories: EcosystemCategory[] = [
    {
        count: '30+',
        title: 'Built-in Middleware',
        description:
            'Everything you need ships with the framework: authentication, caching, compression, rate limiting, security headers, sessions, and more.',
        items: [
            'Logger', 'CORS', 'CSRF', 'Helmet', 'Limiter', 'Cache',
            'Compress', 'Session', 'Proxy', 'Static', 'RequestID', 'SSE',
        ],
        more: '+ many more',
        href: 'https://docs.gofiber.io/category/-middleware',
        cta: 'Explore middleware',
    },
    {
        count: '30+',
        title: 'Storage Drivers',
        description:
            'One unified interface for every major database and key-value store. Plug them into sessions, caching, or rate limiting without changing your code.',
        items: [
            'Redis', 'PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'S3',
            'DynamoDB', 'Memcache', 'NATS', 'etcd', 'Badger', 'ClickHouse',
        ],
        more: '+ many more',
        href: 'https://docs.gofiber.io/storage/next/',
        cta: 'Browse storage drivers',
    },
    {
        count: '9',
        title: 'Template Engines',
        description:
            'Render views with the engine you already know. The official template package wraps the most popular engines behind a single interface.',
        items: [
            'HTML', 'Django', 'Handlebars', 'Pug', 'Jet',
            'Mustache', 'Ace', 'Amber', 'Slim',
        ],
        href: 'https://docs.gofiber.io/template/next/',
        cta: 'Pick your engine',
    },
    {
        count: '20+',
        title: 'Contrib Packages',
        description:
            'Officially maintained integrations with the wider ecosystem: tracing, logging, authentication, API documentation, and real-time communication.',
        items: [
            'JWT', 'WebSocket', 'OpenTelemetry', 'Swagger', 'Casbin', 'Sentry',
            'Zap', 'Zerolog', 'Socket.io', 'Circuit Breaker', 'i18n', 'Paseto',
        ],
        more: '+ many more',
        href: 'https://docs.gofiber.io/contrib/next/',
        cta: 'Discover contrib',
    },
];

export default function Ecosystem() {
    return (
        <section data-stripe>
            <div className={`${shared.mid} ${shared.midWide}`}>
                <div className={shared.center}>
                    <h2>Batteries Included</h2>
                    <p className={styles.tagline}>
                        Fiber is more than a router. It comes with a complete ecosystem of
                        middleware, storage drivers, template engines, and contrib packages,
                        all maintained by the core team.
                    </p>
                </div>
                <div className={styles.grid}>
                    {categories.map((cat) => (
                        <a
                            key={cat.title}
                            href={cat.href}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.card}
                        >
                            <div className={styles.cardHead}>
                                <span className={styles.count}>{cat.count}</span>
                                <h3 className={styles.cardTitle}>{cat.title}</h3>
                            </div>
                            <p className={styles.cardDesc}>{cat.description}</p>
                            <div className={styles.chips}>
                                {cat.items.map((item) => (
                                    <span key={item} className={styles.chip}>{item}</span>
                                ))}
                                {cat.more && (
                                    <span className={`${styles.chip} ${styles.chipMore}`}>{cat.more}</span>
                                )}
                            </div>
                            <span className={styles.cardCta}>{cat.cta} →</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
