import React, { useEffect, useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import { ResponsePanel } from "../docs-widgets/http";
import { chainCode, scenarios, stations } from "./scenarios";
import styles from "./styles.module.css";

// MiddlewareVisualizer steps one request through a logger -> auth -> handler
// chain. Every frame highlights the code that is executing right now, while
// the flow diagram shows the packet travelling along the request lane (top),
// turning around, and bubbling back along the response lane (bottom). Lane
// segments stay colored once traversed, so the covered path is always
// visible; in the short-circuit scenario the handler segment never lights up.

export default function MiddlewareVisualizer(): JSX.Element {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [frameIndex, setFrameIndex] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    const scenario = scenarios[scenarioIndex];
    const frame = scenario.frames[frameIndex];
    const lastFrame = scenario.frames.length - 1;

    // Deepest station reached so far: forward lane segments up to this point
    // have been traversed.
    const deepest = Math.max(-1, ...scenario.frames.slice(0, frameIndex + 1).map((f) => f.active));

    // The response lane takes the error color when the scenario ends in an
    // error response (the short circuit's 401).
    const finalResponse = scenario.frames[lastFrame].response;
    const isErrorResponse = (finalResponse?.status ?? 200) >= 400;

    useEffect(() => {
        const query = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(query.matches);
        const onChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
        query.addEventListener("change", onChange);
        return () => query.removeEventListener("change", onChange);
    }, []);

    // Auto-play walks the flow slowly, one frame at a time, and stops at the
    // final frame.
    useEffect(() => {
        if (!playing) {
            return undefined;
        }
        if (frameIndex >= lastFrame) {
            setPlaying(false);
            return undefined;
        }
        const timer = window.setTimeout(() => setFrameIndex(frameIndex + 1), 1600);
        return () => window.clearTimeout(timer);
    }, [playing, frameIndex, lastFrame]);

    const selectScenario = (index: number) => {
        setScenarioIndex(index);
        setFrameIndex(0);
        setPlaying(false);
    };

    const togglePlay = () => {
        if (!playing && frameIndex >= lastFrame) {
            setFrameIndex(0);
        }
        setPlaying(!playing);
    };

    const stepTo = (index: number) => {
        setFrameIndex(index);
        setPlaying(false);
    };

    const packet = (
        <span
            className={[
                styles.packet,
                frame.direction === "in" ? styles.packetTop : styles.packetBottom,
                frame.direction === "out"
                    ? isErrorResponse
                        ? styles.packetErr
                        : styles.packetOut
                    : "",
            ].join(" ")}
            aria-hidden
        />
    );

    return (
        <div className={styles.visualizer}>
            <div className={styles.scenarioRow} role="group" aria-label="Scenario">
                {scenarios.map((s, i) => (
                    <button
                        key={s.id}
                        type="button"
                        className={`${styles.scenarioButton} ${i === scenarioIndex ? styles.scenarioButtonActive : ""}`}
                        aria-pressed={i === scenarioIndex}
                        onClick={() => selectScenario(i)}
                    >
                        {s.label}
                    </button>
                ))}
            </div>
            <p className={styles.request}>{scenario.request}</p>

            <CodeBlock language="go" metastring={frame.highlight}>
                {chainCode}
            </CodeBlock>

            <div className={styles.flowWrap}>
                <div className={styles.flowTrack}>
                    <div
                        className={`${styles.node} ${styles.clientNode} ${frame.active === -1 ? styles.nodeActive : ""}`}
                        aria-current={frame.active === -1 ? "true" : undefined}
                    >
                        client
                        {frame.active === -1 ? packet : null}
                    </div>
                    {stations.map((station, k) => {
                        const fwdOn = deepest >= k;
                        const retOn =
                            frame.direction === "out" && k > frame.active && k <= deepest;
                        const isActive = frame.active === k;
                        const isSkipped = frame.skipped?.includes(k) ?? false;
                        return (
                            <React.Fragment key={station.name}>
                                <span className={styles.gap} aria-hidden>
                                    <span
                                        className={`${styles.lane} ${styles.laneFwd} ${fwdOn ? styles.laneOn : ""}`}
                                    />
                                    <span
                                        className={`${styles.lane} ${styles.laneRet} ${retOn ? (isErrorResponse ? styles.laneOnErr : styles.laneOnOut) : ""}`}
                                    />
                                </span>
                                <div
                                    className={`${styles.node} ${isActive ? styles.nodeActive : ""} ${isSkipped ? styles.nodeSkipped : ""}`}
                                    aria-current={isActive ? "true" : undefined}
                                >
                                    {station.name}
                                    {isSkipped ? (
                                        <span className={styles.skippedTag}> (skipped)</span>
                                    ) : null}
                                    {isActive ? packet : null}
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
            <div className={styles.legend} aria-hidden>
                <span className={styles.legendItem}>
                    <span className={`${styles.legendLane} ${styles.laneOn}`} /> request path
                </span>
                <span className={styles.legendItem}>
                    <span
                        className={`${styles.legendLane} ${isErrorResponse ? styles.laneOnErr : styles.laneOnOut}`}
                    />{" "}
                    response path
                </span>
            </div>

            <p className={styles.frameLog} aria-live="polite">
                {frame.log}
            </p>

            <div className={styles.controls}>
                {!reducedMotion ? (
                    <button
                        type="button"
                        className={`${styles.controlButton} ${playing ? "" : styles.playButton}`}
                        aria-pressed={playing}
                        onClick={togglePlay}
                    >
                        {playing ? "Pause" : "Play"}
                    </button>
                ) : null}
                <button
                    type="button"
                    className={styles.controlButton}
                    onClick={() => stepTo(frameIndex - 1)}
                    disabled={frameIndex === 0}
                >
                    Back
                </button>
                <button
                    type="button"
                    className={styles.controlButton}
                    onClick={() => stepTo(frameIndex + 1)}
                    disabled={frameIndex === lastFrame}
                >
                    Next step
                </button>
                <button
                    type="button"
                    className={styles.controlButton}
                    onClick={() => stepTo(0)}
                    disabled={frameIndex === 0}
                >
                    Reset
                </button>
                <span className={styles.frameCounter}>
                    {frameIndex + 1} / {scenario.frames.length}
                </span>
            </div>

            {frame.response ? <ResponsePanel response={frame.response} /> : null}
        </div>
    );
}
