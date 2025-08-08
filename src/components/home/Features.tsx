// src/components/home/Features.tsx
import React from 'react';
import styles from './Features.module.scss';
import shared from './shared.module.scss';
import Feature from './Feature';
import { features } from './feature.list';

export default function Features() {
    return (
        <section className={styles.features}>
            <div className={styles.bands}>
                {features.map((f, i) => (
                    <div key={f.title ?? i} className={styles.band} data-stripe>
                        <div className={`${shared.mid} ${shared.midWide}`}>
                            <Feature
                                {...f}
                                reversed={i % 2 === 1}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
