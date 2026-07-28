// src/components/home/CtaBand.tsx
// Mid-page conversion panel floating between the sections (not part of the striping).
import React from 'react';
import Heading from '@theme/Heading';
import styles from './CtaBand.module.scss';

export default function CtaBand() {
    return (
        <section className={styles.band}>
            <div className={styles.inner}>
                <Heading as="h2" id="ready-to-ship" className={styles.title}>Ready to ship something fast?</Heading>
                <p className={styles.subtitle}>
                    Start with one file, add middleware as you grow, and deploy a single binary.
                </p>
                <div className={styles.buttons}>
                    <a className={styles.primary} href="https://docs.gofiber.io/">Get Started →</a>
                    <a className={styles.outline} href="https://docs.gofiber.io/recipes/">Browse Recipes</a>
                </div>
            </div>
        </section>
    );
}
