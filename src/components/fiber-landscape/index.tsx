import React, { useLayoutEffect, useRef, useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import Link from "@docusaurus/Link";
import { useActiveDocContext, useAllDocsData } from "@docusaurus/plugin-content-docs/client";
import { nodes, type LandscapeNode } from "./nodes";
import styles from "./styles.module.css";

// FiberLandscape renders the ecosystem as an explorable architecture diagram:
// your application on top, the core module with its building blocks
// underneath, and every satellite repo connected through measured SVG edges.
// Contrib and storage dock at the middleware block, schema at the bind block.
// Selecting a card lights up its connection and fills the detail panel; the
// middleware and bind blocks are selectable themselves and light up every
// edge that docks onto them. Hovering previews a connection. All package
// chips come from the docs plugin global data, never from a hardcoded list.

type EdgeGeometry = {
    nodeKey: string;
    kind: "app" | "extension" | "foundation";
    target: "card" | "middleware" | "bind";
    d: string;
    mid: { x: number; y: number };
    label: string;
};

// Core building blocks; the ones with an id are docking targets for edges
// and selectable for their own detail view.
const CORE_CHIPS: { id: "bind" | "middleware" | null; label: string }[] = [
    { id: null, label: "Router" },
    { id: null, label: "fiber.Ctx" },
    { id: "bind", label: "Bind & Validation" },
    { id: null, label: "HTTP Client" },
    { id: null, label: "Hooks" },
    { id: "middleware", label: "30+ Middleware" },
];

type ChipDetail = {
    title: string;
    blurb: string;
    catalog?: "middleware";
    relatedLabel: string;
    related: string[]; // node keys, rendered as jump buttons
    docHref?: { href: string; label: string };
};

const CHIP_DETAILS: Record<string, ChipDetail> = {
    "chip:middleware": {
        title: "Built-in middleware",
        blurb:
            "Everything below ships inside the core module itself, without any extra dependency. Two satellite repos dock exactly here: contrib extends the catalog with middleware that need external dependencies, and storage drivers plug into the stateful ones such as session, limiter, cache, and idempotency.",
        catalog: "middleware",
        relatedLabel: "docked by",
        related: ["contrib", "storage"],
    },
    "chip:bind": {
        title: "Bind & Validation",
        blurb:
            "c.Bind() maps request data (body, query, headers, cookies, and more) onto your Go structs and runs the validator you configured. The standalone schema package does the decoding work under the hood.",
        relatedLabel: "powered by",
        related: ["schema"],
        docHref: { href: "https://docs.gofiber.io/api/bind/", label: "Bind API reference" },
    },
};

type CatalogChip = { label: string; to: string };

type GlobalDocLite = { id: string; path: string };
type GlobalVersionLite = { name: string; isLast: boolean; docs: GlobalDocLite[] };

// Reads the package catalogs from the docs plugin global data, so the chips
// always mirror the synced docs and link to the real pages. The middleware
// catalog comes from the docs version the reader is currently on; contrib,
// storage, and template come from their own plugin instances. Packages are
// recognized by their public URL (one path segment below the instance root),
// because many upstream READMEs override the doc id via front matter.
function useCatalogs(): Record<string, CatalogChip[]> {
    const allDocs = useAllDocsData() as unknown as Record<
        string,
        { versions: GlobalVersionLite[] } | undefined
    >;
    const { activeVersion } = useActiveDocContext(undefined) as unknown as {
        activeVersion?: GlobalVersionLite;
    };

    const catalogs: Record<string, CatalogChip[]> = {};

    if (activeVersion) {
        catalogs.middleware = activeVersion.docs
            .filter((doc) => doc.id.startsWith("middleware/"))
            .map((doc) => ({ label: doc.id.slice("middleware/".length), to: doc.path }))
            .sort((a, b) => a.label.localeCompare(b.label));
    }

    for (const key of ["contrib", "storage", "template"] as const) {
        const versions = allDocs[key]?.versions ?? [];
        const version = versions.find((v) => v.name === "current") ?? versions.find((v) => v.isLast);
        if (!version) {
            continue;
        }
        const pattern = new RegExp(`^(?:.*)?/${key}/([^/]+)/?$`);
        const seen = new Set<string>();
        catalogs[key] = version.docs
            .map((doc) => {
                const match = doc.path.match(pattern);
                return match ? { label: match[1], to: doc.path } : null;
            })
            .filter((chip): chip is CatalogChip => {
                if (chip === null || seen.has(chip.label)) {
                    return false;
                }
                seen.add(chip.label);
                return true;
            })
            .sort((a, b) => a.label.localeCompare(b.label));
    }
    return catalogs;
}

// Cubic bezier point at t = 0.5, used to place the edge label pills.
function bezierMid(sx: number, sy: number, c1x: number, c1y: number, c2x: number, c2y: number, tx: number, ty: number) {
    return {
        x: Math.round((sx + 3 * c1x + 3 * c2x + tx) / 8),
        y: Math.round((sy + 3 * c1y + 3 * c2y + ty) / 8),
    };
}

export default function FiberLandscape(): JSX.Element {
    const [selectedKey, setSelectedKey] = useState("core");
    const [hoverKey, setHoverKey] = useState<string | null>(null);
    const [edges, setEdges] = useState<EdgeGeometry[]>([]);
    const catalogs = useCatalogs();
    const containerRef = useRef<HTMLDivElement | null>(null);
    const appRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<Record<string, HTMLElement | null>>({});
    const chipRefs = useRef<Record<string, HTMLElement | null>>({});

    const selectedNode = nodes.find((node) => node.key === selectedKey) ?? null;
    const hoverNode = nodes.find((node) => node.key === hoverKey) ?? null;
    const chipDetail = CHIP_DETAILS[selectedKey] ?? null;
    const core = nodes.find((node) => node.key === "core") ?? nodes[0];
    const extensions = nodes.filter((node) => node.kind === "extension");
    const foundations = nodes.filter((node) => node.kind === "foundation");
    const learning = nodes.filter((node) => node.kind === "learning");

    const select = (key: string) => {
        setSelectedKey(key);
    };

    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) {
            return undefined;
        }

        const measure = () => {
            const containerRect = container.getBoundingClientRect();
            const rel = (el: Element) => {
                const r = el.getBoundingClientRect();
                return {
                    left: r.left - containerRect.left,
                    top: r.top - containerRect.top,
                    width: r.width,
                    height: r.height,
                };
            };
            const coreEl = cardRefs.current.core;
            if (!coreEl) {
                return;
            }
            const coreRect = rel(coreEl);
            const coreBottom = coreRect.top + coreRect.height;
            const found: EdgeGeometry[] = [];

            if (appRef.current) {
                const a = rel(appRef.current);
                const sx = a.left + a.width / 2;
                const sy = a.top + a.height;
                const tx = coreRect.left + coreRect.width / 2;
                const ty = coreRect.top;
                const c1 = { x: sx, y: sy + 20 };
                const c2 = { x: tx, y: ty - 20 };
                found.push({
                    nodeKey: "core",
                    kind: "app",
                    target: "card",
                    d: `M ${sx} ${sy} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${tx} ${ty}`,
                    mid: bezierMid(sx, sy, c1.x, c1.y, c2.x, c2.y, tx, ty),
                    label: "go get github.com/gofiber/fiber/v3",
                });
            }

            for (const node of nodes) {
                if (!node.edgeTarget || !node.port) {
                    continue;
                }
                const el = cardRefs.current[node.key];
                if (!el) {
                    continue;
                }
                const s = rel(el);
                const sx = s.left + s.width / 2;
                const sy = s.top;

                // Dock at the core's bottom edge, at the x of the target chip
                // when the node connects to a specific building block.
                let tx = coreRect.left + coreRect.width / 2;
                if (node.edgeTarget !== "card") {
                    const chip = chipRefs.current[node.edgeTarget];
                    if (chip) {
                        const c = rel(chip);
                        tx = c.left + c.width / 2;
                    }
                }
                const ty = coreBottom;

                let c1: { x: number; y: number };
                let c2: { x: number; y: number };
                if (node.kind === "foundation") {
                    // Foundations sit one row lower: sweep around the sides so
                    // the lines do not cut through the extension cards.
                    const outward = sx < containerRect.width / 2 ? 14 : containerRect.width - 14;
                    c1 = { x: outward, y: sy - 30 };
                    c2 = { x: outward, y: ty + 30 };
                } else {
                    c1 = { x: sx, y: sy - 44 };
                    c2 = { x: tx, y: ty + 44 };
                }
                found.push({
                    nodeKey: node.key,
                    kind: node.kind === "foundation" ? "foundation" : "extension",
                    target: node.edgeTarget,
                    d: `M ${sx} ${sy} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${tx} ${ty}`,
                    mid: bezierMid(sx, sy, c1.x, c1.y, c2.x, c2.y, tx, ty),
                    label: node.port,
                });
            }
            setEdges(found);
        };

        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(container);
        window.addEventListener("resize", measure);
        return () => {
            observer.disconnect();
            window.removeEventListener("resize", measure);
        };
    }, []);

    const isEdgeActive = (edge: EdgeGeometry) => {
        if (hoverKey !== null && edge.nodeKey === hoverKey) {
            return true;
        }
        if (selectedKey === "core") {
            return true;
        }
        if (selectedKey === edge.nodeKey) {
            return true;
        }
        if (selectedKey === "chip:middleware" && edge.target === "middleware") {
            return true;
        }
        if (selectedKey === "chip:bind" && edge.target === "bind") {
            return true;
        }
        return false;
    };

    const isChipHighlighted = (id: "bind" | "middleware") =>
        selectedKey === `chip:${id}` ||
        selectedNode?.edgeTarget === id ||
        hoverNode?.edgeTarget === id;

    const edgeKindClass = (edge: EdgeGeometry) =>
        edge.kind === "app"
            ? styles.edgeApp
            : edge.kind === "foundation"
              ? styles.edgeFoundation
              : styles.edgeExtension;

    const badgeText = (node: LandscapeNode) => {
        const catalog = node.catalog ? catalogs[node.catalog] : undefined;
        if (node.badgeNoun && catalog && catalog.length > 0) {
            return `${catalog.length} ${node.badgeNoun}`;
        }
        return node.badge;
    };

    const card = (node: LandscapeNode) => (
        <button
            key={node.key}
            type="button"
            ref={(el) => {
                cardRefs.current[node.key] = el;
            }}
            className={[
                styles.card,
                node.kind === "extension" ? styles.cardExtension : "",
                node.kind === "foundation" ? styles.cardFoundation : "",
                node.kind === "learning" ? styles.cardLearning : "",
                selectedKey === node.key ? styles.cardSelected : "",
            ].join(" ")}
            aria-pressed={selectedKey === node.key}
            onClick={() => select(node.key)}
            onMouseEnter={() => setHoverKey(node.key)}
            onMouseLeave={() => setHoverKey(null)}
            onFocus={() => setHoverKey(node.key)}
            onBlur={() => setHoverKey(null)}
        >
            <span className={styles.cardHead}>
                <span className={styles.cardLabel}>{node.label}</span>
                {badgeText(node) ? <span className={styles.cardBadge}>{badgeText(node)}</span> : null}
            </span>
            <span className={styles.cardRepo}>{node.repo}</span>
            {node.port ? <span className={styles.portFallback}>{node.port}</span> : null}
        </button>
    );

    const detailCatalogKey = chipDetail ? chipDetail.catalog : selectedNode?.catalog;
    const detailCatalog = detailCatalogKey ? (catalogs[detailCatalogKey] ?? []) : [];

    return (
        <div className={styles.landscape}>
            <div className={styles.map} ref={containerRef}>
                <svg className={styles.edgeLayer} aria-hidden>
                    {edges.map((edge) => (
                        <path
                            key={edge.nodeKey + edge.label}
                            d={edge.d}
                            className={`${styles.edge} ${edgeKindClass(edge)} ${isEdgeActive(edge) ? styles.edgeActive : styles.edgeDim}`}
                        />
                    ))}
                </svg>
                {edges.map((edge) => (
                    <span
                        key={`label-${edge.nodeKey}-${edge.label}`}
                        className={`${styles.edgeLabel} ${isEdgeActive(edge) ? styles.edgeLabelActive : styles.edgeLabelDim}`}
                        style={{ left: edge.mid.x, top: edge.mid.y }}
                        aria-hidden
                    >
                        {edge.label}
                    </span>
                ))}

                <div className={styles.appBar} ref={appRef}>
                    your application
                </div>

                <div
                    ref={(el) => {
                        cardRefs.current.core = el;
                    }}
                    className={`${styles.coreCard} ${selectedKey === "core" ? styles.cardSelected : ""}`}
                >
                    <button
                        type="button"
                        className={styles.coreHead}
                        aria-pressed={selectedKey === "core"}
                        onClick={() => select("core")}
                    >
                        <span className={styles.cardHead}>
                            <span className={styles.cardLabel}>{core.label}</span>
                            <span className={styles.cardBadge}>{core.badge}</span>
                        </span>
                        <span className={styles.cardRepo}>{core.repo}</span>
                    </button>
                    <span className={styles.coreChips}>
                        {CORE_CHIPS.map((chip) =>
                            chip.id ? (
                                <button
                                    key={chip.label}
                                    type="button"
                                    ref={(el) => {
                                        chipRefs.current[chip.id as string] = el;
                                    }}
                                    className={[
                                        styles.blockChip,
                                        styles.blockChipButton,
                                        isChipHighlighted(chip.id) ? styles.blockChipTarget : "",
                                        selectedKey === `chip:${chip.id}` ? styles.blockChipSelected : "",
                                    ].join(" ")}
                                    aria-pressed={selectedKey === `chip:${chip.id}`}
                                    onClick={() => select(`chip:${chip.id}`)}
                                >
                                    {chip.label}
                                </button>
                            ) : (
                                <span key={chip.label} className={styles.blockChip}>
                                    {chip.label}
                                </span>
                            ),
                        )}
                    </span>
                    {catalogs.middleware && catalogs.middleware.length > 0 ? (
                        <span className={styles.coreExamples}>
                            {catalogs.middleware
                                .slice(0, 12)
                                .map((chip) => chip.label)
                                .join(", ")}
                            , ...
                        </span>
                    ) : null}
                </div>

                <p className={styles.tierCaption}>plugs into the core</p>
                <div className={styles.extRow}>{extensions.map((node) => card(node))}</div>

                <p className={styles.tierCaption}>inside the core</p>
                <div className={styles.foundRow}>{foundations.map((node) => card(node))}</div>

                <p className={styles.tierCaption}>learn and explore</p>
                <div className={styles.learnRow}>{learning.map((node) => card(node))}</div>

                <div className={styles.legend} aria-hidden>
                    <span className={styles.legendItem}>
                        <span className={`${styles.legendSwatch} ${styles.legendCore}`} /> core module
                    </span>
                    <span className={styles.legendItem}>
                        <span className={`${styles.legendSwatch} ${styles.legendExtension}`} /> plugs in
                    </span>
                    <span className={styles.legendItem}>
                        <span className={`${styles.legendSwatch} ${styles.legendFoundation}`} /> inside the core
                    </span>
                    <span className={styles.legendItem}>
                        <span className={`${styles.legendSwatch} ${styles.legendLearning}`} /> learn
                    </span>
                </div>
            </div>

            <div className={styles.detail} aria-live="polite">
                {chipDetail ? (
                    <>
                        <p className={styles.detailTitle}>
                            {chipDetail.title}
                            {chipDetail.catalog && detailCatalog.length > 0 ? (
                                <span className={styles.detailBadge}>{detailCatalog.length} built in</span>
                            ) : null}
                        </p>
                        <p className={styles.detailBlurb}>{chipDetail.blurb}</p>
                        <p className={styles.detailConnection}>
                            {chipDetail.relatedLabel}{" "}
                            {chipDetail.related.map((key) => {
                                const related = nodes.find((node) => node.key === key);
                                return related ? (
                                    <button
                                        key={key}
                                        type="button"
                                        className={styles.relatedButton}
                                        onClick={() => select(key)}
                                    >
                                        {related.label}
                                    </button>
                                ) : null;
                            })}
                        </p>
                    </>
                ) : selectedNode ? (
                    <>
                        <p className={styles.detailTitle}>
                            {selectedNode.label}
                            {badgeText(selectedNode) ? (
                                <span className={styles.detailBadge}>{badgeText(selectedNode)}</span>
                            ) : null}
                            <span className={styles.detailRepo}>{selectedNode.repo}</span>
                        </p>
                        {selectedNode.port ? (
                            <p className={styles.detailConnection}>
                                connects via <span className={styles.detailPort}>{selectedNode.port}</span>
                            </p>
                        ) : null}
                        <p className={styles.detailBlurb}>{selectedNode.blurb}</p>
                    </>
                ) : null}
                {detailCatalog.length > 0 ? (
                    <div className={styles.detailChips}>
                        {detailCatalog.map((chip) => (
                            <Link key={chip.to} className={styles.chipLink} to={chip.to}>
                                {chip.label}
                            </Link>
                        ))}
                    </div>
                ) : null}
                {chipDetail?.docHref ? (
                    <p className={styles.detailLink}>
                        <a href={chipDetail.docHref.href}>{chipDetail.docHref.label} →</a>
                    </p>
                ) : null}
                {!chipDetail && selectedNode?.snippet ? (
                    <>
                        <p className={styles.snippetCaption}>{selectedNode.snippet.caption}</p>
                        <CodeBlock language={selectedNode.snippet.language}>
                            {selectedNode.snippet.code}
                        </CodeBlock>
                    </>
                ) : null}
                {!chipDetail && selectedNode ? (
                    <p className={styles.detailLink}>
                        <a href={selectedNode.link.href}>{selectedNode.link.label} →</a>
                    </p>
                ) : null}
            </div>
        </div>
    );
}
