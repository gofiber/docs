// Fidelity tests for the route playground matcher. Every vector in
// match-vectors.json was generated against the real Fiber v3 matcher by
// scripts/route-vectors (see its header for how to regenerate); this suite
// replays them against the TypeScript port. Run with `npm run test:matcher`.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { compileRoute, matchPath } from "./matcher.ts";

type Vector = {
    name: string;
    routes: { method: string; pattern: string }[];
    request: { method: string; path: string };
    expect: {
        status: number;
        matchedIndex: number | null;
        params?: Record<string, string>;
    };
};

const vectors: Vector[] = JSON.parse(
    readFileSync(new URL("./match-vectors.json", import.meta.url), "utf8"),
);

for (const vector of vectors) {
    test(vector.name, () => {
        let matchedIndex: number | null = null;
        let params: Record<string, string> = {};
        let pathMatchedOtherMethod = false;

        for (let i = 0; i < vector.routes.length; i++) {
            const compiled = compileRoute(vector.routes[i].pattern);
            assert.equal(compiled.ok, true, `route ${i} (${vector.routes[i].pattern}) failed to compile`);
            if (!compiled.ok) {
                continue;
            }
            const result = matchPath(compiled.route, vector.request.path);
            if (!result.ok) {
                continue;
            }
            const methodOk =
                vector.routes[i].method === "ALL" ||
                vector.routes[i].method === vector.request.method;
            if (methodOk) {
                if (matchedIndex === null) {
                    matchedIndex = i;
                    params = result.params;
                }
            } else {
                pathMatchedOtherMethod = true;
            }
        }

        const status = matchedIndex !== null ? 200 : pathMatchedOtherMethod ? 405 : 404;
        assert.equal(status, vector.expect.status, "status");
        assert.equal(matchedIndex, vector.expect.matchedIndex, "matched route index");
        if (vector.expect.status === 200) {
            assert.deepEqual(params, vector.expect.params ?? {}, "extracted params");
        }
    });
}
