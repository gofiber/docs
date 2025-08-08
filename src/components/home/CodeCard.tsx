import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import styles from './CodeCard.module.scss';

export default function CodeCard({ title, children }: { title: string; children: string }) {
    return (
        <div className={styles.codeCard}>
            <h3>{title}</h3>
            <CodeBlock language="go">{children}</CodeBlock>
        </div>
    );
}
