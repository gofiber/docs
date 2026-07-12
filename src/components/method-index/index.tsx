import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./styles.module.css";

// MethodIndex renders a filterable index of every h3 heading on the page it
// is embedded in (api/ctx.md, api/app.md, api/bind.md, api/fiber.md). It
// reads the rendered headings from the DOM instead of keeping its own data
// file, so it stays current when the page changes: each h3 becomes an entry,
// grouped under the nearest preceding h2 (h3s before the first h2 fall into
// defaultCategory). Server-side it renders an empty shell; the effect fills
// it on the client. If the heading structure ever changes, it renders
// nothing instead of junk.

type Entry = {
    id: string;
    name: string;
    category: string;
};

function headingText(heading: Element): string {
    const clone = heading.cloneNode(true) as Element;
    clone.querySelectorAll(".hash-link").forEach((el) => el.remove());
    return (clone.textContent ?? "").trim();
}

export default function MethodIndex({
    defaultCategory = "General",
    itemNoun = "entries",
    placeholder = "Filter by name",
}: {
    defaultCategory?: string;
    itemNoun?: string;
    placeholder?: string;
}): JSX.Element {
    const rootRef = useRef<HTMLDivElement>(null);
    const [entries, setEntries] = useState<Entry[]>([]);
    const [selected, setSelected] = useState<Set<string>>(new Set());
    const [query, setQuery] = useState("");

    useEffect(() => {
        const article = rootRef.current?.closest("article");
        if (!article) {
            return;
        }
        const found: Entry[] = [];
        let category = defaultCategory;
        article.querySelectorAll(".markdown h2[id], .markdown h3[id]").forEach((heading) => {
            const text = headingText(heading);
            if (text === "") {
                return;
            }
            if (heading.tagName === "H2") {
                category = text;
            } else {
                found.push({ id: heading.id, name: text, category });
            }
        });
        setEntries(found);
        setSelected(new Set(found.map((entry) => entry.category)));
    }, [defaultCategory]);

    const categories = useMemo(() => {
        const seen: string[] = [];
        for (const entry of entries) {
            if (!seen.includes(entry.category)) {
                seen.push(entry.category);
            }
        }
        return seen;
    }, [entries]);

    const toggleCategory = (category: string) => {
        setSelected((previous) => {
            const next = new Set(previous);
            if (next.has(category)) {
                next.delete(category);
            } else {
                next.add(category);
            }
            return next;
        });
    };

    const normalizedQuery = query.trim().toLowerCase();
    const filtered = entries.filter(
        (entry) =>
            selected.has(entry.category) &&
            (normalizedQuery === "" || entry.name.toLowerCase().includes(normalizedQuery)),
    );

    return (
        <div ref={rootRef}>
            {entries.length > 0 ? (
                <div className={styles.index}>
                    <div className={styles.controls}>
                        <input
                            type="search"
                            className={styles.search}
                            placeholder={placeholder}
                            aria-label={placeholder}
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        <div className={styles.pills} role="group" aria-label="Filter by category">
                            {categories.map((category) => {
                                const active = selected.has(category);
                                const count = entries.filter((e) => e.category === category).length;
                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        className={`${styles.pill} ${active ? styles.pillActive : ""}`}
                                        aria-pressed={active}
                                        onClick={() => toggleCategory(category)}
                                    >
                                        {category} <span className={styles.pillCount}>{count}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.chips}>
                        {filtered.map((entry) => (
                            <a key={entry.id} className={styles.chip} href={`#${entry.id}`}>
                                {entry.name}
                            </a>
                        ))}
                    </div>
                    <p className={styles.count} aria-live="polite">
                        {filtered.length} of {entries.length} {itemNoun} shown
                    </p>
                </div>
            ) : null}
        </div>
    );
}
