// src/components/home/Ecosystem.tsx
import React from 'react';
import styles from './Ecosystem.module.scss';
import shared from './shared.module.scss';

type EcosystemCategory = {
    icon: string;
    badge: string;
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
        icon: '🧬',
        badge: '30+ middleware',
        title: 'Core Middleware',
        description:
            'The deepest catalog in the box: authentication, caching, compression, rate limiting, security headers, sessions, and more, each one app.Use away.',
        items: [
            'Logger', 'CORS', 'CSRF', 'Helmet', 'Limiter', 'Cache',
            'Compress', 'Session', 'Proxy', 'Static', 'RequestID', 'SSE',
        ],
        more: '+ many more',
        href: 'https://docs.gofiber.io/category/-middleware',
        cta: 'Explore middleware',
    },
    {
        icon: '🗄️',
        badge: '30+ drivers',
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
        icon: '📝',
        badge: '9 engines',
        title: 'Template Engines',
        description:
            'Server-side rendering with the syntax you already know. One official package, one interface, your choice of engine.',
        items: [
            'HTML', 'Django', 'Handlebars', 'Pug', 'Jet',
            'Mustache', 'Ace', 'Amber', 'Slim',
        ],
        href: 'https://docs.gofiber.io/template/next/',
        cta: 'Pick your engine',
    },
    {
        icon: '🧩',
        badge: '20+ packages',
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
                    <p className={shared.kicker}>Beyond the core</p>
                    <h2>The Official Ecosystem</h2>
                    <p className={styles.tagline}>
                        Complete catalogs of official building blocks: middleware, storage
                        drivers, template engines, and contrib integrations, all maintained
                        by the Fiber team.
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
                                <span className={styles.cardIcon} aria-hidden>{cat.icon}</span>
                                <h3 className={styles.cardTitle}>{cat.title}</h3>
                                <span className={styles.countBadge}>{cat.badge}</span>
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
                            <span className={styles.cardCta}>
                                {cat.cta} <span className={styles.ctaArrow} aria-hidden>→</span>
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
