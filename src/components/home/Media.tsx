// src/components/home/Media.tsx
import React from 'react';
import styles from './Media.module.scss';
import shared from './shared.module.scss';
import mediaList from './media.json';

type Item = {
    url: string;
    title: string;
    author?: string;
    date?: string;
    website?: string;
};

const items: Item[] = mediaList;

function host(url: string, fallback?: string) {
    try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return fallback ?? ''; }
}

export default function Media() {
    return (
        <section className={styles.mediaSection} data-stripe>
            <div className={styles.band}>
                <div className={shared.mid}>
                    <h2 className={styles.heading}>Media</h2>
                    <div className={styles.list}>
                        {items.map((it) => {
                            const meta = [it.author, it.date, it.website || host(it.url)].filter(Boolean).join(' • ');
                            return (
                                <a key={it.url} href={it.url} target="_blank" rel="noreferrer" className={styles.item}>
                                    <div className={styles.text}>
                                        <div className={styles.title}>{it.title}</div>
                                        {meta && <div className={styles.meta}>{meta}</div>}
                                    </div>
                                    <span className={styles.arrow} aria-hidden>→</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
