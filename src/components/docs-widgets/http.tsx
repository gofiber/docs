import React from "react";
import styles from "./widgets.module.css";

// SimResponse is a hand-authored HTTP exchange rendered by the interactive
// docs widgets. Values are verified against a real Fiber v3 app when written;
// only the headers relevant to the lesson are included.
export type SimResponse = {
    status: number;
    statusText: string;
    headers?: Record<string, string>;
    body: string;
};

const METHOD_CLASS: Record<string, string> = {
    GET: "methodGet",
    POST: "methodPost",
};

export function MethodBadge({ method }: { method: string }): JSX.Element {
    const extra = METHOD_CLASS[method] ? styles[METHOD_CLASS[method]] : "";
    return <span className={`${styles.badge} ${extra}`}>{method}</span>;
}

function statusClass(status: number): string {
    if (status >= 500) return styles.statusServerErr;
    if (status >= 400) return styles.statusClientErr;
    if (status >= 300) return styles.statusRedirect;
    return styles.statusOk;
}

// The terminal keeps its own dark palette in both color modes, so it needs
// status colors that stay readable on the dark background.
function terminalStatusClass(status: number): string {
    if (status >= 500) return styles.termServerErr;
    if (status >= 400) return styles.termClientErr;
    if (status >= 300) return styles.termRedirect;
    return styles.termOk;
}

// TerminalWindow renders a simulated curl exchange inside a terminal frame:
// the command line, the response status line, headers, body, and an optional
// note shown as a shell comment.
export function TerminalWindow({
    command,
    response,
    note,
}: {
    command: string;
    response: SimResponse;
    note?: string;
}): JSX.Element {
    return (
        <div
            className={styles.terminal}
            role="region"
            aria-live="polite"
            aria-label="Simulated terminal"
        >
            <div className={styles.terminalBar} aria-hidden>
                <span className={styles.terminalDot} />
                <span className={styles.terminalDot} />
                <span className={styles.terminalDot} />
                <span className={styles.terminalTitle}>terminal</span>
            </div>
            <pre className={styles.terminalBody}>
                <span className={styles.prompt}>{"$ "}</span>
                <span className={styles.command}>{command}</span>
                {"\n"}
                <span className={terminalStatusClass(response.status)}>
                    {`HTTP/1.1 ${response.status} ${response.statusText}`}
                </span>
                {"\n"}
                {Object.entries(response.headers ?? {}).map(([name, value]) => (
                    <React.Fragment key={name}>
                        <span className={styles.terminalHeaderName}>{name}:</span>
                        {` ${value}\n`}
                    </React.Fragment>
                ))}
                {response.body !== "" ? `\n${response.body}\n` : ""}
                {note ? <span className={styles.terminalNote}>{`\n# ${note}`}</span> : null}
            </pre>
        </div>
    );
}

export function ResponsePanel({
    response,
    note,
    placeholder = "Send a request to see the response.",
}: {
    response: SimResponse | null;
    note?: string;
    placeholder?: string;
}): JSX.Element {
    return (
        <div
            className={styles.panel}
            role="region"
            aria-live="polite"
            aria-label="Simulated HTTP response"
        >
            {response === null ? (
                <p className={styles.placeholder}>{placeholder}</p>
            ) : (
                <>
                    <div className={`${styles.statusLine} ${statusClass(response.status)}`}>
                        {`HTTP/1.1 ${response.status} ${response.statusText}`}
                    </div>
                    {response.headers ? (
                        <div className={styles.headers}>
                            {Object.entries(response.headers).map(([name, value]) => (
                                <div key={name}>
                                    <span className={styles.headerName}>{name}:</span> {value}
                                </div>
                            ))}
                        </div>
                    ) : null}
                    {response.body !== "" ? <pre className={styles.body}>{response.body}</pre> : null}
                    {note ? <p className={styles.note}>{note}</p> : null}
                </>
            )}
        </div>
    );
}
