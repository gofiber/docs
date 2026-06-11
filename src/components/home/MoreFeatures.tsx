// src/components/home/MoreFeatures.tsx
// Core framework capabilities, 3 per row. Every tile is something the fiber
// module does by itself; official packages live in the Ecosystem section.
import React from 'react';
import styles from './MoreFeatures.module.scss';
import shared from './shared.module.scss';

type Tile = {
    icon: string;
    title: string;
    description: string;
    href: string;
};

const tiles: Tile[] = [
    {
        icon: '📥',
        title: 'Request Binding',
        description: 'Parse JSON bodies, forms, query strings, and headers into Go structs with c.Bind.',
        href: 'https://docs.gofiber.io/api/bind/',
    },
    {
        icon: '🧭',
        title: 'Route Constraints',
        description: 'Validate parameters in the route pattern itself: :id<int> never matches "abc".',
        href: 'https://docs.gofiber.io/guide/routing/#constraints',
    },
    {
        icon: '🧯',
        title: 'Error Handling',
        description: 'Return errors from handlers and shape every response in one central ErrorHandler.',
        href: 'https://docs.gofiber.io/guide/error-handling/',
    },
    {
        icon: '🌐',
        title: 'HTTP Client',
        description: 'Call other services with the built-in, Fasthttp-powered client.',
        href: 'https://docs.gofiber.io/client/rest/',
    },
    {
        icon: '🧪',
        title: 'Testing',
        description: 'Test handlers in-process with app.Test, no port and no running server needed.',
        href: 'https://docs.gofiber.io/api/app/#test',
    },
    {
        icon: '🪝',
        title: 'Hooks & Services',
        description: 'React to lifecycle events, and let Fiber start and stop your backing services.',
        href: 'https://docs.gofiber.io/api/hooks/',
    },
    {
        icon: '🗂️',
        title: 'State Management',
        description: 'Share typed application state across handlers without global variables.',
        href: 'https://docs.gofiber.io/api/state/',
    },
    {
        icon: '🛬',
        title: 'Graceful Shutdown',
        description: 'Finish in-flight requests and run cleanup hooks before the process exits.',
        href: 'https://docs.gofiber.io/api/fiber/#server-shutdown',
    },
    {
        icon: '🎯',
        title: 'Type-Safe Helpers',
        description: 'Read params, query values, and locals as real Go types with generic helpers.',
        href: 'https://docs.gofiber.io/api/ctx/',
    },
];

export default function MoreFeatures() {
    return (
        <section data-stripe>
            <div className={`${shared.mid} ${shared.midWide}`}>
                <div className={shared.center}>
                    <p className={shared.kicker}>The framework</p>
                    <h2>Built into the Core</h2>
                    <p className={styles.tagline}>
                        Everyday capabilities that ship with the framework itself.
                        No extra packages, nothing else to install.
                    </p>
                </div>
                <div className={styles.grid}>
                    {tiles.map((tile) => (
                        <a
                            key={tile.title}
                            href={tile.href}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.tile}
                        >
                            <span className={styles.tileTop}>
                                <span className={styles.iconWrap} aria-hidden>{tile.icon}</span>
                                <span className={styles.tileArrow} aria-hidden>↗</span>
                            </span>
                            <span className={styles.tileTitle}>{tile.title}</span>
                            <span className={styles.tileDesc}>{tile.description}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
