// src/components/home/Ecosystem.tsx
import React from 'react';
import Heading from '@theme/Heading';
import catalogsFile from '../../data/catalogs.json';
import type { CatalogKey, CatalogsFile } from '../../types/catalogs';
import styles from './Ecosystem.module.scss';
import shared from './shared.module.scss';

// Package names and counts come from the docs, generated into catalogs.json
// by scripts/generate-catalogs.mjs before every build.
const { catalogs } = catalogsFile as CatalogsFile;

type EcosystemCategory = {
    icon: string;
    /** Catalog this card counts and lists, read from the docs at build time. */
    catalog: CatalogKey;
    /** Noun of the count badge, as in "34 drivers". */
    noun: string;
    title: string;
    description: string;
    href: string;
    cta: string;
};

// Only the wording of a card lives here. Its badge count and its package
// chips come from the docs, so a new middleware, driver, engine, or contrib
// package appears on the homepage without touching this file.
const categories: EcosystemCategory[] = [
    {
        icon: '🧬',
        catalog: 'middleware',
        noun: 'middleware',
        title: 'Core Middleware',
        description:
            'The deepest catalog in the box: authentication, caching, compression, rate limiting, security headers, sessions, and more, each one app.Use away.',
        href: 'https://docs.gofiber.io/category/-middleware',
        cta: 'Explore middleware',
    },
    {
        icon: '🗄️',
        catalog: 'storage',
        noun: 'drivers',
        title: 'Storage Drivers',
        description:
            'One unified interface for every major database and key-value store. Plug them into sessions, caching, or rate limiting without changing your code.',
        href: 'https://docs.gofiber.io/storage/',
        cta: 'Browse storage drivers',
    },
    {
        icon: '📝',
        catalog: 'template',
        noun: 'engines',
        title: 'Template Engines',
        description:
            'Server-side rendering with the syntax you already know. One official package, one interface, your choice of engine.',
        href: 'https://docs.gofiber.io/template/',
        cta: 'Pick your engine',
    },
    {
        icon: '🧩',
        catalog: 'contrib',
        noun: 'packages',
        title: 'Contrib Packages',
        description:
            'Officially maintained integrations with the wider ecosystem: tracing, logging, authentication, API documentation, and real-time communication.',
        href: 'https://docs.gofiber.io/contrib/',
        cta: 'Discover contrib',
    },
];

export default function Ecosystem() {
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
                        const entries = catalogs[cat.catalog];

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
                                    <span className={styles.countBadge}>
                                        {entries.length} {cat.noun}
                                    </span>
                                </div>
                                <p className={styles.cardDesc}>{cat.description}</p>
                                <div className={styles.chips}>
                                    {entries.map((item) => (
                                        <span key={item.id} className={styles.chip}>{item.label}</span>
                                    ))}
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
