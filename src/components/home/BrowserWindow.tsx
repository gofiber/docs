import React, { ReactNode } from 'react';
import styles from './BrowserWindow.module.scss';

export default function BrowserWindow({ url, children }: { url: string; children?: ReactNode }) {
    return (
        <div className={styles.browser}>
            <div className={styles.window}>
                <div className={styles.titlebar}>
                    <div className={styles.titlebarButtons}>
                        <span className={styles.btn} />
                        <span className={styles.btn} />
                        <span className={styles.btn} />
                    </div>
                    <div className={styles.urlBar}>{url}</div>
                </div>
                <div className={styles.windowContent}>
                    <div className={styles.browserContent}>{children}</div>
                </div>
            </div>
        </div>
    );
}
