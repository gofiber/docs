import React, { useMemo, useState } from "react";
import { compileRoute, matchPath, MAX_PATTERN_LENGTH } from "./matcher";
import { MethodBadge } from "../docs-widgets/http";
import widgetStyles from "../docs-widgets/widgets.module.css";
import styles from "./styles.module.css";

// RoutePlayground lets the reader edit a route table and a request, then
// shows which route wins, why the others lose, and which parameters are
// extracted. Matching runs in matcher.ts, a port of Fiber's matcher that is
// tested against fixtures generated from the real thing (match-vectors.json).

type RouteRow = {
    method: string;
    pattern: string;
};

type RowVerdict =
    | { kind: "invalid"; text: string }
    | { kind: "winner"; text: string }
    | { kind: "fail"; text: string }
    | { kind: "method"; text: string }
    | { kind: "notTried"; text: string };

const REQUEST_METHODS = ["GET", "POST", "PUT", "DELETE", "PATCH", "QUERY"];
// Routes can additionally be registered with All: exact path, every method.
const ROUTE_METHODS = [...REQUEST_METHODS, "ALL"];
const MAX_ROUTES = 8;

const DEFAULT_ROUTES: RouteRow[] = [
    { method: "GET", pattern: "/" },
    { method: "GET", pattern: "/users/new" },
    { method: "GET", pattern: "/users/:id<int>" },
    { method: "GET", pattern: "/users/:id/files/*" },
    { method: "POST", pattern: "/users" },
    { method: "GET", pattern: "/files/+" },
];

const DEFAULT_REQUEST = { method: "GET", path: "/users/42" };

type Evaluation = {
    verdicts: RowVerdict[];
    warnings: string[][];
    status: 200 | 404 | 405;
    winnerIndex: number;
    params: Record<string, string>;
};

function evaluate(routes: RouteRow[], reqMethod: string, path: string): Evaluation {
    const verdicts: RowVerdict[] = [];
    const warnings: string[][] = [];
    let winnerIndex = -1;
    let params: Record<string, string> = {};
    let pathMatchesOtherMethod = false;

    for (const row of routes) {
        const compiled = compileRoute(row.pattern);
        if (!compiled.ok) {
            verdicts.push({ kind: "invalid", text: compiled.error });
            warnings.push([]);
            continue;
        }
        warnings.push(compiled.warnings);
        if (winnerIndex !== -1) {
            verdicts.push({ kind: "notTried", text: "not tried, an earlier route already matched" });
            continue;
        }
        const result = matchPath(compiled.route, path);
        const methodOk = row.method === "ALL" || row.method === reqMethod;
        if (!methodOk) {
            if (result.ok) {
                pathMatchesOtherMethod = true;
                verdicts.push({
                    kind: "method",
                    text: "different method; the path itself would match, so Fiber answers 405 if nothing else does",
                });
            } else {
                verdicts.push({ kind: "method", text: "different method" });
            }
            continue;
        }
        if (result.ok) {
            winnerIndex = verdicts.length;
            params = result.params;
            verdicts.push({ kind: "winner", text: "matches, first match wins" });
        } else {
            verdicts.push({ kind: "fail", text: result.reason });
        }
    }

    const status = winnerIndex !== -1 ? 200 : pathMatchesOtherMethod ? 405 : 404;
    return { verdicts, warnings, status, winnerIndex, params };
}

export default function RoutePlayground(): JSX.Element {
    const [routes, setRoutes] = useState<RouteRow[]>(DEFAULT_ROUTES);
    const [reqMethod, setReqMethod] = useState(DEFAULT_REQUEST.method);
    const [reqPath, setReqPath] = useState(DEFAULT_REQUEST.path);

    const path = reqPath.startsWith("/") ? reqPath : `/${reqPath}`;
    const evaluation = useMemo(() => evaluate(routes, reqMethod, path), [routes, reqMethod, path]);

    const updateRoute = (index: number, patch: Partial<RouteRow>) => {
        setRoutes((previous) => previous.map((row, i) => (i === index ? { ...row, ...patch } : row)));
    };

    const removeRoute = (index: number) => {
        setRoutes((previous) => previous.filter((_, i) => i !== index));
    };

    const addRoute = () => {
        setRoutes((previous) =>
            previous.length >= MAX_ROUTES ? previous : [...previous, { method: "GET", pattern: "/" }],
        );
    };

    const reset = () => {
        setRoutes(DEFAULT_ROUTES);
        setReqMethod(DEFAULT_REQUEST.method);
        setReqPath(DEFAULT_REQUEST.path);
    };

    const winner = evaluation.winnerIndex !== -1 ? routes[evaluation.winnerIndex] : null;
    const paramEntries = Object.entries(evaluation.params);

    const statusText =
        evaluation.status === 200
            ? "200 OK"
            : evaluation.status === 405
              ? "405 Method Not Allowed"
              : "404 Not Found";
    const statusClass =
        evaluation.status === 200 ? widgetStyles.statusOk : widgetStyles.statusClientErr;

    return (
        <div className={styles.playground}>
            <div className={styles.tableWrap}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Method</th>
                            <th scope="col">Pattern</th>
                            <th scope="col">Result</th>
                            <th scope="col">
                                <span className={styles.visuallyHidden}>Remove</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {routes.map((row, i) => {
                            const verdict = evaluation.verdicts[i];
                            return (
                                <tr key={i} className={verdict.kind === "winner" ? styles.winnerRow : ""}>
                                    <td className={styles.indexCell}>{i + 1}</td>
                                    <td>
                                        <select
                                            className={styles.methodSelect}
                                            aria-label={`Route ${i + 1} method`}
                                            value={row.method}
                                            onChange={(event) => updateRoute(i, { method: event.target.value })}
                                        >
                                            {ROUTE_METHODS.map((m) => (
                                                <option key={m} value={m}>
                                                    {m}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td>
                                        <input
                                            className={styles.patternInput}
                                            type="text"
                                            aria-label={`Route ${i + 1} pattern`}
                                            value={row.pattern}
                                            maxLength={MAX_PATTERN_LENGTH}
                                            spellCheck={false}
                                            onChange={(event) => updateRoute(i, { pattern: event.target.value })}
                                        />
                                    </td>
                                    <td className={styles.resultCell}>
                                        <span className={styles[verdict.kind]}>{verdict.text}</span>
                                        {evaluation.warnings[i].map((warning) => (
                                            <span key={warning} className={styles.warning}>
                                                {warning}
                                            </span>
                                        ))}
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            className={styles.removeButton}
                                            aria-label={`Remove route ${i + 1}`}
                                            onClick={() => removeRoute(i)}
                                            disabled={routes.length === 1}
                                        >
                                            {"×"}
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className={styles.actions}>
                <button
                    type="button"
                    className={styles.actionButton}
                    onClick={addRoute}
                    disabled={routes.length >= MAX_ROUTES}
                >
                    Add route
                </button>
                <button type="button" className={styles.actionButton} onClick={reset}>
                    Reset examples
                </button>
            </div>

            <div className={styles.requestRow}>
                <span className={styles.requestLabel}>Request:</span>
                <select
                    className={styles.methodSelect}
                    aria-label="Request method"
                    value={reqMethod}
                    onChange={(event) => setReqMethod(event.target.value)}
                >
                    {REQUEST_METHODS.map((m) => (
                        <option key={m} value={m}>
                            {m}
                        </option>
                    ))}
                </select>
                <input
                    className={styles.pathInput}
                    type="text"
                    aria-label="Request path"
                    value={reqPath}
                    maxLength={200}
                    spellCheck={false}
                    onChange={(event) => setReqPath(event.target.value)}
                />
            </div>

            <div className={styles.verdict} role="region" aria-live="polite" aria-label="Match result">
                <p className={`${styles.verdictStatus} ${statusClass}`}>{statusText}</p>
                {winner !== null ? (
                    <>
                        <p className={styles.verdictText}>
                            Route {evaluation.winnerIndex + 1} answers:{" "}
                            <MethodBadge method={winner.method} />{" "}
                            <code>{winner.pattern}</code>
                        </p>
                        {paramEntries.length > 0 ? (
                            <table className={styles.paramsTable}>
                                <thead>
                                    <tr>
                                        <th scope="col">Parameter</th>
                                        <th scope="col">Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paramEntries.map(([name, value]) => (
                                        <tr key={name}>
                                            <td>
                                                <code>{name}</code>
                                            </td>
                                            <td>
                                                <code>{value === "" ? '""' : value}</code>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className={styles.verdictText}>The route extracts no parameters.</p>
                        )}
                    </>
                ) : evaluation.status === 405 ? (
                    <p className={styles.verdictText}>
                        A route matches this path with a different method, so Fiber answers 405 instead of
                        404.
                    </p>
                ) : (
                    <p className={styles.verdictText}>No route matches; Fiber answers with its 404 handler.</p>
                )}
            </div>

            <p className={styles.disclaimer}>
                Simulates Fiber&apos;s matcher with default settings (case-insensitive, non-strict
                routing). Verified against the real matcher; datetime and custom constraints are not
                simulated, and regex() runs on the JS engine.
            </p>
        </div>
    );
}
