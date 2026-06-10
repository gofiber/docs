// src/components/home/MoreFeatures.tsx
// Compact 3-per-row matrix for the long tail of features.
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
        icon: '🔌',
        title: 'WebSockets',
        description: 'Real-time, bidirectional messaging with the official contrib middleware.',
        href: 'https://docs.gofiber.io/contrib/next/websocket/',
    },
    {
        icon: '⏱️',
        title: 'Rate Limiting',
        description: 'Throttle repeated requests to your public APIs and endpoints.',
        href: 'https://docs.gofiber.io/middleware/limiter/',
    },
    {
        icon: '📡',
        title: 'Server-Sent Events',
        description: 'Stream live updates to the browser without polling.',
        href: 'https://docs.gofiber.io/middleware/sse/',
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
        description: 'Test handlers without a running server using app.Test.',
        href: 'https://docs.gofiber.io/api/app/#test',
    },
    {
        icon: '🪝',
        title: 'Hooks & Services',
        description: 'React to app lifecycle events and wire up backing services.',
        href: 'https://docs.gofiber.io/api/hooks/',
    },
    {
        icon: '🪶',
        title: 'Low Memory Footprint',
        description: 'Zero-allocation design keeps memory usage tiny under load.',
        href: 'https://docs.gofiber.io/extra/benchmarks/',
    },
    {
        icon: '⚡',
        title: 'Rapid Development',
        description: 'An easy-to-learn API that turns ideas into servers in minutes.',
        href: 'https://docs.gofiber.io/',
    },
    {
        icon: '💬',
        title: 'Community',
        description: 'Thousands of developers help each other on our Discord.',
        href: 'https://gofiber.io/discord',
    },
];

export default function MoreFeatures() {
    return (
        <section data-stripe>
            <div className={`${shared.mid} ${shared.midWide}`}>
                <div className={shared.center}>
                    <h2>More in the Box</h2>
                    <p className={styles.tagline}>
                        Everything below ships with Fiber or an official package.
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
                            <span className={styles.iconWrap} aria-hidden>{tile.icon}</span>
                            <span className={styles.tileTitle}>{tile.title}</span>
                            <span className={styles.tileDesc}>{tile.description}</span>
                            <span className={styles.tileLink}>Learn more →</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
