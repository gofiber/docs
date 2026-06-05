import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import styles from './SponsorsBlock.module.scss';
import shared from './shared.module.scss';

interface Sponsor {
    name: string;
    url: string;
    /**
     * Logo source. Accepts an external URL (preferred so we don't ship binary
     * assets in the repo) or a path under `/img/sponsors/`. SVG preferred so
     * the logo scales cleanly.
     */
    logo: string;
    /** Optional logo variant shown in dark mode. Defaults to `logo`. */
    logoDark?: string;
}

// Curated list of top-tier ($100+/month) GitHub Sponsors with their official
// branding. Update when a new top-tier sponsor joins or an existing one leaves.
// The long tail of supporters lives on the gofiber sponsors page and is
// auto-synced into each repository README by .github/workflows/sync-sponsors.yml.
const sponsors: Sponsor[] = [
    {
        name: 'CodeRabbit',
        url: 'https://www.coderabbit.ai/?utm_source=gofiber&utm_medium=sponsor&utm_content=homepage',
        logo: 'https://www.coderabbit.ai/images/logo-orange.svg',
        logoDark: 'https://www.coderabbit.ai/images/logo-dark.svg',
    },
];

export default function SponsorsBlock() {
    if (sponsors.length === 0) return null;

    return (
        <section data-stripe>
            <div className={shared.mid}>
                <h2 className={shared.center}>Official Sponsors</h2>
                <p className={shared.center}>
                    Fiber is supported by these organisations. Want to join them?{' '}
                    <a
                        href="https://github.com/sponsors/gofiber"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Become a sponsor on GitHub
                    </a>
                    .
                </p>
                <div className={styles.sponsors}>
                    {sponsors.map((sponsor) => (
                        <a
                            key={sponsor.url}
                            href={sponsor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={sponsor.name}
                            className={styles.sponsor}
                        >
                            <ThemedImage
                                alt={sponsor.name}
                                sources={{
                                    light: sponsor.logo,
                                    dark: sponsor.logoDark ?? sponsor.logo,
                                }}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
