import React, { useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import { MethodBadge, TerminalWindow } from "../docs-widgets/http";
import { program, steps } from "./steps";
import styles from "./styles.module.css";

// GetStartedWalkthrough renders a stepper that grows one main.go across six
// steps. Each step shows the full program with the new lines highlighted and
// a set of clickable example requests whose exchange is rendered as a curl
// session in a simulated terminal.

// Collapses sorted 1-based line numbers into a Docusaurus highlight
// metastring, e.g. [2,7,8,9] -> "{2,7-9}".
function toMetastring(lines: number[]): string {
    if (lines.length === 0) {
        return "";
    }
    const parts: string[] = [];
    let start = lines[0];
    let prev = lines[0];
    for (const n of lines.slice(1)) {
        if (n === prev + 1) {
            prev = n;
            continue;
        }
        parts.push(start === prev ? `${start}` : `${start}-${prev}`);
        start = n;
        prev = n;
    }
    parts.push(start === prev ? `${start}` : `${start}-${prev}`);
    return `{${parts.join(",")}}`;
}

export default function GetStartedWalkthrough(): JSX.Element {
    const [stepIndex, setStepIndex] = useState(0);
    const [requestIndex, setRequestIndex] = useState(0);

    const stepNumber = stepIndex + 1;
    const step = steps[stepIndex];

    const visible = program.filter(
        (line) =>
            line.step <= stepNumber &&
            (line.removedIn === undefined || stepNumber < line.removedIn),
    );
    const code = visible.map((line) => line.text).join("\n");
    const highlighted = visible
        .map((line, i) => (line.step === stepNumber && line.text.trim() !== "" ? i + 1 : 0))
        .filter((n) => n > 0);

    const selectStep = (index: number) => {
        setStepIndex(index);
        setRequestIndex(0);
    };

    const request = step.requests[requestIndex] ?? step.requests[0];
    const command =
        request.method === "GET"
            ? `curl -i http://localhost:3000${request.path}`
            : `curl -i -X ${request.method} http://localhost:3000${request.path}`;

    return (
        <div className={styles.walkthrough}>
            <nav aria-label="Walkthrough steps" className={styles.stepNav}>
                <button
                    type="button"
                    className={styles.navButton}
                    onClick={() => selectStep(stepIndex - 1)}
                    disabled={stepIndex === 0}
                >
                    Back
                </button>
                <ol className={styles.stepList}>
                    {steps.map((s, i) => (
                        <li
                            key={s.id}
                            className={`${styles.stepItem} ${i <= stepIndex ? styles.stepItemReached : ""}`}
                        >
                            <button
                                type="button"
                                className={`${styles.stepDot} ${i === stepIndex ? styles.stepDotActive : ""} ${i < stepIndex ? styles.stepDotDone : ""}`}
                                aria-current={i === stepIndex ? "step" : undefined}
                                title={s.title}
                                onClick={() => selectStep(i)}
                            >
                                {i + 1}
                            </button>
                            <span
                                className={`${styles.stepLabel} ${i === stepIndex ? styles.stepLabelActive : ""}`}
                            >
                                {s.title}
                            </span>
                        </li>
                    ))}
                </ol>
                <button
                    type="button"
                    className={styles.navButton}
                    onClick={() => selectStep(stepIndex + 1)}
                    disabled={stepIndex === steps.length - 1}
                >
                    Next
                </button>
            </nav>

            <p className={styles.stepTitle}>
                Step {stepNumber} of {steps.length}: {step.title}
            </p>
            <p className={styles.explanation}>{step.explanation}</p>

            <CodeBlock language="go" title="main.go" metastring={toMetastring(highlighted)}>
                {code}
            </CodeBlock>

            <div className={styles.requestRail} role="group" aria-label="Example requests">
                <span className={styles.tryLabel}>Try a request:</span>
                {step.requests.map((r, i) => (
                    <button
                        key={`${r.method} ${r.path}`}
                        type="button"
                        className={`${styles.requestButton} ${i === requestIndex ? styles.requestButtonActive : ""}`}
                        aria-pressed={i === requestIndex}
                        onClick={() => setRequestIndex(i)}
                    >
                        <MethodBadge method={r.method} /> {r.path}
                    </button>
                ))}
            </div>

            <TerminalWindow command={command} response={request.response} note={request.note} />
            <p className={styles.disclaimer}>
                Responses are simulated and show only the headers each step is about.
            </p>
        </div>
    );
}
