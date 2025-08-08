import React from 'react';
import styles from './Support.module.scss';
import shared from './shared.module.scss';

export default function Support() {
    return (
        <section data-stripe>
            <div className={shared.mid}>
                <div className={styles.supportCols}>
                    <div>
                        <h2>Help &amp; Support</h2>
                        <p>Join our community on <strong>Discord</strong> — ask questions, share, help others.</p>
                    </div>
                    <div className={styles.discordIframeWrap}>
                        <iframe
                            src="https://discordapp.com/widget?id=704680098577514527&theme=dark"
                            width="350"
                            height="300"
                            frameBorder={0}
                            title="Discord"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
