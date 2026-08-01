// src/components/home/Ecosystem.tsx
import React from 'react';
import Heading from '@theme/Heading';
import { usePluginData } from '@docusaurus/useGlobalData';
import {
    CATALOG_PLUGIN_NAME,
    type CatalogEntry,
    type CatalogKey,
    type FiberCatalogs,
} from '../../types/catalogs';
import styles from './Ecosystem.module.scss';
import shared from './shared.module.scss';

type EcosystemCategory = {
    icon: string;
    /** Catalog this card counts and lists, read from the docs at build time. */
    catalog: CatalogKey;
    /** Noun of the count badge, as in "34 drivers". */
    noun: string;
    /** Badge text used when the catalog cannot be read. */
    fallbackBadge: string;
    title: string;
    description: string;
    /**
     * Ordering hint only: these packages lead the chip list so the most
     * recognizable names show up first, everything else follows alphabetically.
     * Unknown ids are ignored and new packages need no entry here.
     */
    featured: string[];
    href: string;
    cta: string;
};

// Number of example chips per card; the rest is summarized as "+ N more".
const MAX_CHIPS = 12;

const categories: EcosystemCategory[] = [
    {
        icon: '🧬',
        catalog: 'middleware',
        noun: 'middleware',
        fallbackBadge: '30+ middleware',
        title: 'Core Middleware',
        description:
            'The deepest catalog in the box: authentication, caching, compression, rate limiting, security headers, sessions, and more, each one app.Use away.',
        featured: [
            'logger', 'cors', 'csrf', 'helmet', 'limiter', 'cache',
            'compress', 'session', 'proxy', 'static', 'requestid', 'sse',
        ],
        href: 'https://docs.gofiber.io/category/-middleware',
        cta: 'Explore middleware',
    },
    {
        icon: '🗄️',
        catalog: 'storage',
        noun: 'drivers',
        fallbackBadge: '30+ drivers',
        title: 'Storage Drivers',
        description:
            'One unified interface for every major database and key-value store. Plug them into sessions, caching, or rate limiting without changing your code.',
        featured: [
            'redis', 'postgres', 'mysql', 'mongodb', 'sqlite3', 's3',
            'dynamodb', 'memcache', 'nats', 'etcd', 'badger', 'clickhouse',
        ],
        href: 'https://docs.gofiber.io/storage/',
        cta: 'Browse storage drivers',
    },
    {
        icon: '📝',
        catalog: 'template',
        noun: 'engines',
        fallbackBadge: '9 engines',
        title: 'Template Engines',
        description:
            'Server-side rendering with the syntax you already know. One official package, one interface, your choice of engine.',
        featured: [
            'html', 'django', 'handlebars', 'pug', 'jet',
            'mustache', 'ace', 'amber', 'slim',
        ],
        href: 'https://docs.gofiber.io/template/',
        cta: 'Pick your engine',
    },
    {
        icon: '🧩',
        catalog: 'contrib',
        noun: 'packages',
        fallbackBadge: '20+ packages',
        title: 'Contrib Packages',
        description:
            'Officially maintained integrations with the wider ecosystem: tracing, logging, authentication, API documentation, and real-time communication.',
        featured: [
            'jwt', 'websocket', 'otel', 'swaggerui', 'casbin', 'sentry',
            'zap', 'zerolog', 'socketio', 'circuitbreaker', 'i18n', 'paseto',
        ],
        href: 'https://docs.gofiber.io/contrib/',
        cta: 'Discover contrib',
    },
];

function orderByFeatured(entries: CatalogEntry[], featured: string[]): CatalogEntry[] {
    const rank = new Map(featured.map((id, index) => [id, index]));
    return [...entries].sort((a, b) => {
        const rankA = rank.get(a.id) ?? Number.MAX_SAFE_INTEGER;
        const rankB = rank.get(b.id) ?? Number.MAX_SAFE_INTEGER;
        return rankA === rankB ? a.label.localeCompare(b.label) : rankA - rankB;
    });
}

export default function Ecosystem() {
    // Counts and chips come from the docs catalogs, so a new middleware,
    // driver, engine, or contrib package shows up here without an edit.
    const catalogs = usePluginData(CATALOG_PLUGIN_NAME) as FiberCatalogs | undefined;

    return (
        <section data-stripe>
            <div className={`${shared.mid} ${shared.midWide}`}>
                <div className={shared.center}>
                    <p className={shared.kicker}>Beyond the core</p>
                    <Heading as="h2" id="official-ecosystem">The Official Ecosystem</Heading>
                    <p className={styles.tagline}>
                        Complete catalogs of official building blocks: middleware, storage
                        drivers, template engines, and contrib integrations, all maintained
                        by the Fiber team.
                    </p>
                </div>
                <div className={styles.grid}>
                    {categories.map((cat) => {
                        const entries = orderByFeatured(
                            catalogs?.[cat.catalog] ?? [],
                            cat.featured,
                        );
                        const chips = entries.slice(0, MAX_CHIPS);
                        const remaining = entries.length - chips.length;
                        const badge =
                            entries.length > 0
                                ? `${entries.length} ${cat.noun}`
                                : cat.fallbackBadge;

                        return (
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
                                    <span className={styles.countBadge}>{badge}</span>
                                </div>
                                <p className={styles.cardDesc}>{cat.description}</p>
                                <div className={styles.chips}>
                                    {chips.map((item) => (
                                        <span key={item.id} className={styles.chip}>{item.label}</span>
                                    ))}
                                    {remaining > 0 && (
                                        <span className={`${styles.chip} ${styles.chipMore}`}>
                                            + {remaining} more
                                        </span>
                                    )}
                                </div>
                                <span className={styles.cardCta}>
                                    {cat.cta} <span className={styles.ctaArrow} aria-hidden>→</span>
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
