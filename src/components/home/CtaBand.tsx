// src/components/home/CtaBand.tsx
// Mid-page conversion band with its own background (not part of the striping).
import React from 'react';
import styles from './CtaBand.module.scss';

export default function CtaBand() {
    return (
        <section className={styles.band}>
            <div className={styles.inner}>
                <h2 className={styles.title}>Ready to ship something fast?</h2>
                <div className={styles.buttons}>
                    <a className={styles.primary} href="https://docs.gofiber.io/">Get Started →</a>
                    <a className={styles.outline} href="https://docs.gofiber.io/recipes/">Browse Recipes</a>
                </div>
            </div>
        </section>
    );
}
