// flexible feature: split (text|right), full-width, or pair (two texts)
import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import styles from './Feature.module.scss';
import { FeatureItem } from './feature.list';

type FeatureProps = FeatureItem & { reversed?: boolean };

export default function Feature({
                                    title,
                                    description,
                                    code,
                                    right,
                                    layout = 'split',
                                    columns,
                                    reversed = false,
                                }: FeatureProps) {
    if (layout === 'full') {
        return (
            <div className={styles.featureFull}>
                {title && <h3 className={styles.title}>{title}</h3>}
                {description && <div className={styles.desc}>{description}</div>}
                {code && (
                    <div className={styles.fullCode}>
                        <CodeBlock language="go">{code}</CodeBlock>
                    </div>
                )}
            </div>
        );
    }

    if (layout === 'pair' && columns && columns.length === 2) {
        return (
            <div className={styles.textPairRow}>
                {columns.map((col, i) => (
                    <div key={i} className={styles.textPanel}>
                        <h3 className={styles.title}>{col.title}</h3>
                        <div className={styles.desc}>{col.description}</div>
                    </div>
                ))}
            </div>
        );
    }

    // split
    return (
        <div className={`${styles.featureRow} ${reversed ? styles.reverse : ''}`}>
            <div className={styles.textCol}>
                {title && <h3 className={styles.title}>{title}</h3>}
                {description && <div className={styles.desc}>{description}</div>}
            </div>
            {right ? (
                <div className={styles.codeCol}>{right}</div>
            ) : code ? (
                <div className={styles.codeCol}>
                    <CodeBlock language="go">{code}</CodeBlock>
                </div>
            ) : null}
        </div>
    );
}
