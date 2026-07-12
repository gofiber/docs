import React, { useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import styles from "./styles.module.css";

// TabbedShowcase is the shared shell behind the homepage "Fiber in Action"
// box and the docs "What Can You Build?" widget: a tab list on the left (on
// top on small screens) and a showroom panel with a description and a code
// block. Consumers restyle the frame through the custom properties declared
// in styles.module.css (radius, border color, shadow) via className.

export type ShowcaseTab = {
    key: string;
    label: string;
    icon: string;
    description: React.ReactNode;
    code: string;
};

export default function TabbedShowcase({
    tabs,
    ariaLabel,
    className,
}: {
    tabs: ShowcaseTab[];
    ariaLabel: string;
    className?: string;
}): JSX.Element {
    const [active, setActive] = useState(0);

    return (
        <div className={`${styles.box} ${className ?? ""}`}>
            <div className={styles.tabList} role="tablist" aria-label={ariaLabel}>
                {tabs.map((tab, i) => (
                    <button
                        key={tab.key}
                        type="button"
                        role="tab"
                        aria-selected={i === active}
                        className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
                        onClick={() => setActive(i)}
                    >
                        <span className={styles.tabIcon} aria-hidden>
                            {tab.icon}
                        </span>
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className={styles.panels}>
                {tabs.map((tab, i) => (
                    <div
                        key={tab.key}
                        role="tabpanel"
                        aria-hidden={i !== active}
                        className={`${styles.panel} ${i === active ? styles.panelActive : ""}`}
                    >
                        <p className={styles.desc}>{tab.description}</p>
                        <div className={styles.code}>
                            <CodeBlock language="go">{tab.code}</CodeBlock>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
