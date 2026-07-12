// Dependency-free TypeScript port of a subset of Fiber v3's route matcher,
// used by the route playground in guide/routing.md. The algorithm mirrors
// path.go (parseRoute, addParameterMetaInfo, getMatch, findParamLen family)
// and constraint.go from gofiber/fiber at the time of writing; the committed
// match-vectors.json fixture, generated against the real matcher via
// scripts/route-vectors, guards against divergence.
//
// Fixed behavior, matching fiber.New() defaults: case-insensitive matching,
// non-strict trailing slashes. Not simulated: datetime constraints (rejected
// at compile time), custom constraints and Config.RegexHandler (unknown
// constraint names are ignored exactly like Fiber ignores unregistered ones),
// and Use/group prefix matching. regex() uses the JS RegExp engine instead of
// Go's RE2; exotic patterns can behave differently.
//
// Byte semantics: Go matches on bytes, JS on UTF-16 code units. Length
// constraints use the UTF-8 byte length to match Go; multi-byte characters in
// paths combined with adjacent single-character parameters are the one known
// divergence and are not worth simulating.

export type Constraint = {
    rawName: string;
    kind: string; // canonical built-in name, "" when unknown (ignored)
    args: string[]; // raw args as they appear between the parentheses
    // Precomputed at compile time, mirroring ConstraintAnalyzer:
    num1?: number;
    num2?: number;
    regex?: RegExp;
    analyzeFailed?: boolean; // Analyze() errored: the constraint never matches
};

export type RouteSegment = {
    constPart: string;
    paramName: string;
    comparePart: string;
    constraints: Constraint[];
    partCount: number;
    length: number;
    isParam: boolean;
    isGreedy: boolean;
    isOptional: boolean;
    isLast: boolean;
    hasOptionalSlash: boolean;
};

export type CompiledRoute = {
    pattern: string; // pattern as typed by the user
    segs: RouteSegment[];
    paramNames: string[];
    warnings: string[];
};

export type CompileResult =
    | { ok: true; route: CompiledRoute; warnings: string[] }
    | { ok: false; error: string };

export type MatchResult =
    | { ok: true; params: Record<string, string> }
    | { ok: false; reason: string };

export const MAX_PATTERN_LENGTH = 100;

const PARAM_START_CHARS = new Set(["*", "+", ":"]);
// paramStarterChar, escapeChar plus the route delimiters '/', '-', '.'
const PARAM_DELIMITER_CHARS = new Set([":", "\\", "/", "-", "."]);
const PARAM_END_CHARS = new Set(["?", ":", "\\", "/", "-", "."]);

const BOOL_LITERALS = new Set(["1", "t", "T", "TRUE", "true", "True", "0", "f", "F", "FALSE", "false", "False"]);
const INT64_MAX = BigInt("9223372036854775807");
const INT64_MIN = BigInt("-9223372036854775808");

const encoder = new TextEncoder();

function byteLength(s: string): number {
    return encoder.encode(s).length;
}

// ASCII-only lowercase, mirroring utils.ToLower: Go never lowercases
// multi-byte characters here, and full toLowerCase() could change lengths.
function asciiLower(s: string): string {
    return s.replace(/[A-Z]/g, (c) => c.toLowerCase());
}

function trimTrailingSlashes(s: string): string {
    let out = s;
    while (out.length > 1 && out.endsWith("/")) {
        out = out.slice(0, -1);
    }
    return out;
}

// RemoveEscapeChar: drops every backslash byte.
function removeEscapeChar(s: string): string {
    return s.split("\\").join("");
}

// GetTrimmedParam: trims the leading ':' and a trailing '?'.
function getTrimmedParam(param: string): string {
    let start = 0;
    let end = param.length;
    if (end === 0 || param[start] !== ":") {
        return param;
    }
    start++;
    if (param[end - 1] === "?") {
        end--;
    }
    return param.slice(start, end);
}

function findNextNonEscapedCharPosition(search: string, char: string): number {
    for (let i = 0; i < search.length; i++) {
        if (search[i] === char && (i === 0 || search[i - 1] !== "\\")) {
            return i;
        }
    }
    return -1;
}

function splitNonEscaped(s: string, sep: string): string[] {
    const result: string[] = [];
    let rest = s;
    let i = findNextNonEscapedCharPosition(rest, sep);
    while (i > -1) {
        result.push(rest.slice(0, i));
        rest = rest.slice(i + 1);
        i = findNextNonEscapedCharPosition(rest, sep);
    }
    result.push(rest);
    return result;
}

function findNextParamPosition(pattern: string): number {
    let next = -1;
    for (let i = 0; i < pattern.length; i++) {
        if (PARAM_START_CHARS.has(pattern[i]) && (i === 0 || pattern[i - 1] !== "\\")) {
            next = i;
            break;
        }
    }
    if (next > 0 && pattern[next] !== "*") {
        // the found parameter start char may be part of a cluster like "::"
        for (let i = next + 1; i < pattern.length; i++) {
            if (!PARAM_START_CHARS.has(pattern[i])) {
                return i - 1;
            }
        }
        return pattern.length - 1;
    }
    return next;
}

// strconv.Atoi equivalent: optional sign, decimal digits, must fit int64.
function parseGoInt(s: string): number | null {
    if (!/^[+-]?[0-9]+$/.test(s)) {
        return null;
    }
    const value = BigInt(s);
    if (value > INT64_MAX || value < INT64_MIN) {
        return null;
    }
    return Number(value);
}

// strconv.ParseFloat(s, 32) equivalent for the common literal forms.
// Go also accepts hex floats and digit-separating underscores; those are rare
// in URLs and not simulated.
function isGoFloat(s: string): boolean {
    if (/^[+-]?(inf|infinity|nan)$/i.test(s)) {
        return true;
    }
    return /^[+-]?([0-9]+(\.[0-9]*)?|\.[0-9]+)([eE][+-]?[0-9]+)?$/.test(s);
}

// google/uuid.Parse accepts the canonical form plus urn:uuid:, braces, and
// the 32-character form without hyphens.
function isGoUUID(s: string): boolean {
    let value = s;
    if (/^urn:uuid:/i.test(value)) {
        value = value.slice(9);
    }
    if (value.startsWith("{") && value.endsWith("}")) {
        value = value.slice(1, -1);
    }
    if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(value)) {
        return true;
    }
    return /^[0-9a-fA-F]{32}$/.test(value);
}

// resolveConstraintName: only the length aliases are case-insensitive.
function resolveConstraintName(name: string): string {
    switch (name.toLowerCase()) {
        case "minlen":
            return "minLen";
        case "maxlen":
            return "maxLen";
        case "betweenlen":
            return "betweenLen";
        default:
            return name;
    }
}

const BUILTIN_CONSTRAINTS = new Set([
    "int",
    "bool",
    "float",
    "alpha",
    "datetime",
    "guid",
    "minLen",
    "maxLen",
    "len",
    "betweenLen",
    "min",
    "max",
    "range",
    "regex",
]);

function lookupConstraintKind(rawName: string): string {
    if (BUILTIN_CONSTRAINTS.has(rawName)) {
        return rawName;
    }
    const resolved = resolveConstraintName(rawName);
    if (resolved !== rawName && BUILTIN_CONSTRAINTS.has(resolved)) {
        return resolved;
    }
    return "";
}

// parseConstraintArgs: single raw arg is split on non-escaped commas and
// unescaped. regex() is the exception and keeps its raw argument.
function parseConstraintArgs(args: string[]): string[] {
    if (args.length !== 1) {
        return args;
    }
    return splitNonEscaped(args[0], ",").map(removeEscapeChar);
}

type ConstraintSetup =
    | { constraint: Constraint }
    | { error: string }
    | { warning: string };

function setupConstraint(rawName: string, args: string[]): ConstraintSetup {
    const kind = lookupConstraintKind(rawName);
    if (kind === "") {
        return {
            warning: `unknown constraint "${rawName}" is ignored (Fiber skips unregistered constraints)`,
        };
    }
    if (kind === "datetime") {
        return { error: "the datetime constraint is not simulated in this playground" };
    }
    const constraint: Constraint = { rawName, kind, args };

    switch (kind) {
        case "minLen":
        case "maxLen":
        case "len":
        case "min":
        case "max": {
            const parsed = parseConstraintArgs(args);
            const n = parsed.length > 0 ? parseGoInt(parsed[0]) : null;
            if (n === null) {
                constraint.analyzeFailed = true;
            } else {
                constraint.num1 = n;
            }
            break;
        }
        case "betweenLen":
        case "range": {
            const parsed = parseConstraintArgs(args);
            const lo = parsed.length > 0 ? parseGoInt(parsed[0]) : null;
            const hi = parsed.length > 1 ? parseGoInt(parsed[1]) : null;
            if (lo === null || hi === null) {
                constraint.analyzeFailed = true;
            } else {
                constraint.num1 = lo;
                constraint.num2 = hi;
            }
            break;
        }
        case "regex": {
            if (args.length === 0) {
                constraint.analyzeFailed = true;
                break;
            }
            try {
                constraint.regex = new RegExp(args[0]);
            } catch {
                return { error: `invalid regex constraint: ${args[0]}` };
            }
            break;
        }
        default:
            break;
    }
    return { constraint };
}

function executeConstraint(constraint: Constraint, param: string): boolean {
    if (constraint.analyzeFailed) {
        return false;
    }
    switch (constraint.kind) {
        case "int":
            return parseGoInt(param) !== null;
        case "bool":
            return BOOL_LITERALS.has(param);
        case "float":
            return isGoFloat(param);
        case "alpha":
            return /^\p{L}*$/u.test(param);
        case "guid":
            return isGoUUID(param);
        case "minLen":
            return byteLength(param) >= (constraint.num1 as number);
        case "maxLen":
            return byteLength(param) <= (constraint.num1 as number);
        case "len":
            return byteLength(param) === (constraint.num1 as number);
        case "betweenLen": {
            const length = byteLength(param);
            return length >= (constraint.num1 as number) && length <= (constraint.num2 as number);
        }
        case "min": {
            const n = parseGoInt(param);
            return n !== null && n >= (constraint.num1 as number);
        }
        case "max": {
            const n = parseGoInt(param);
            return n !== null && n <= (constraint.num1 as number);
        }
        case "range": {
            const n = parseGoInt(param);
            return n !== null && n >= (constraint.num1 as number) && n <= (constraint.num2 as number);
        }
        case "regex":
            return constraint.regex !== undefined && constraint.regex.test(param);
        default:
            return true;
    }
}

type ParseState = {
    segs: RouteSegment[];
    paramNames: string[];
    wildCardCount: number;
    plusCount: number;
    warnings: string[];
    error: string | null;
};

function newSegment(): RouteSegment {
    return {
        constPart: "",
        paramName: "",
        comparePart: "",
        constraints: [],
        partCount: 0,
        length: 0,
        isParam: false,
        isGreedy: false,
        isOptional: false,
        isLast: false,
        hasOptionalSlash: false,
    };
}

function analyseConstantPart(pattern: string, nextParamPosition: number): { n: number; seg: RouteSegment } {
    let processedPart = pattern;
    if (nextParamPosition !== -1) {
        processedPart = pattern.slice(0, nextParamPosition);
    }
    const constPart = removeEscapeChar(processedPart);
    const seg = newSegment();
    seg.constPart = constPart;
    seg.length = constPart.length;
    return { n: processedPart.length, seg };
}

function analyseParameterPart(pattern: string, state: ParseState): { n: number; seg: RouteSegment } {
    const isWildCard = pattern[0] === "*";
    const isPlusParam = pattern[0] === "+";

    let paramEndPosition = 0;
    let paramConstraintStartPosition = -1;
    let paramConstraintEndPosition = -1;

    if (!isWildCard && !isPlusParam) {
        paramEndPosition = -1;
        const search = pattern.slice(1);
        for (let i = 0; i < search.length; i++) {
            if (paramConstraintStartPosition === -1 && search[i] === "<" && (i === 0 || search[i - 1] !== "\\")) {
                paramConstraintStartPosition = i + 1;
                continue;
            }
            if (paramConstraintStartPosition !== -1 && search[i] === ">" && (i === 0 || search[i - 1] !== "\\")) {
                paramConstraintEndPosition = i + 1;
                continue;
            }
            if (PARAM_END_CHARS.has(search[i])) {
                if (
                    (paramConstraintStartPosition === -1 && paramConstraintEndPosition === -1) ||
                    (paramConstraintStartPosition !== -1 && paramConstraintEndPosition !== -1)
                ) {
                    paramEndPosition = i;
                    break;
                }
            }
        }
        if (paramEndPosition === -1) {
            paramEndPosition = pattern.length - 1;
        } else if (!PARAM_DELIMITER_CHARS.has(pattern[paramEndPosition + 1])) {
            paramEndPosition++;
        }
    }

    const processedPart = pattern.slice(0, paramEndPosition + 1);
    const n = paramEndPosition + 1;
    let paramName = removeEscapeChar(getTrimmedParam(processedPart));

    const constraints: Constraint[] = [];
    if (paramConstraintStartPosition !== -1 && paramConstraintEndPosition !== -1) {
        const constraintString = pattern.slice(paramConstraintStartPosition + 1, paramConstraintEndPosition);
        for (const c of splitNonEscaped(constraintString, ";")) {
            const start = findNextNonEscapedCharPosition(c, "(");
            const end = c.lastIndexOf(")");
            let rawName: string;
            let data: string[];
            if (start !== -1 && end !== -1) {
                rawName = c.slice(0, start);
                data = [c.slice(start + 1, end)];
            } else {
                rawName = c;
                data = [];
            }
            const setup = setupConstraint(rawName, data);
            if ("error" in setup) {
                state.error = setup.error;
                break;
            }
            if ("warning" in setup) {
                state.warnings.push(setup.warning);
                continue;
            }
            constraints.push(setup.constraint);
        }
        paramName = removeEscapeChar(getTrimmedParam(pattern.slice(0, paramConstraintStartPosition)));
    }

    if (isWildCard) {
        state.wildCardCount++;
        paramName += String(state.wildCardCount);
    } else if (isPlusParam) {
        state.plusCount++;
        paramName += String(state.plusCount);
    }

    const seg = newSegment();
    seg.paramName = paramName;
    seg.isParam = true;
    seg.isOptional = isWildCard || pattern[paramEndPosition] === "?";
    seg.isGreedy = isWildCard || isPlusParam;
    seg.constraints = constraints;
    return { n, seg };
}

function addParameterMetaInfo(segs: RouteSegment[]): void {
    let comparePart = "";
    // loop from end to beginning: assign each parameter its compare part
    for (let i = segs.length - 1; i >= 0; i--) {
        if (segs[i].isParam) {
            segs[i].comparePart = removeEscapeChar(comparePart);
        } else {
            comparePart = segs[i].constPart;
            if (comparePart.length > 1) {
                comparePart = trimTrailingSlashes(comparePart);
            }
        }
    }
    // loop from beginning to end: lengths, part counts, optional slashes
    for (let i = 0; i < segs.length; i++) {
        if (segs[i].isParam) {
            if (segs.length > i + 1 && !segs[i].isGreedy && segs[i + 1].isParam && !segs[i + 1].isGreedy) {
                segs[i].length = 1;
            }
            if (segs[i].comparePart === "") {
                continue;
            }
            for (let j = i + 1; j < segs.length; j++) {
                if (!segs[j].isParam) {
                    segs[i].partCount += countOccurrences(segs[j].constPart, segs[i].comparePart);
                }
            }
        } else if (
            segs[i].constPart[segs[i].constPart.length - 1] === "/" &&
            (segs[i].isLast || (segs.length > i + 1 && segs[i + 1].isOptional))
        ) {
            segs[i].hasOptionalSlash = true;
        }
    }
}

function countOccurrences(haystack: string, needle: string): number {
    if (needle === "") {
        return 0;
    }
    let count = 0;
    let index = haystack.indexOf(needle);
    while (index !== -1) {
        count++;
        index = haystack.indexOf(needle, index + needle.length);
    }
    return count;
}

export function compileRoute(rawPattern: string): CompileResult {
    if (rawPattern.length > MAX_PATTERN_LENGTH) {
        return { ok: false, error: `pattern is longer than ${MAX_PATTERN_LENGTH} characters` };
    }
    let pattern = rawPattern;
    if (pattern === "") {
        pattern = "/";
    }
    if (pattern[0] !== "/") {
        return { ok: false, error: "route pattern must start with /" };
    }

    // fiber.New() defaults: case-insensitive, non-strict routing
    let normalized = asciiLower(pattern);
    normalized = trimTrailingSlashes(normalized);

    const state: ParseState = {
        segs: [],
        paramNames: [],
        wildCardCount: 0,
        plusCount: 0,
        warnings: [],
        error: null,
    };

    let rest = normalized;
    while (rest !== "") {
        const nextParamPosition = findNextParamPosition(rest);
        if (nextParamPosition === 0) {
            const { n, seg } = analyseParameterPart(rest, state);
            if (state.error !== null) {
                return { ok: false, error: state.error };
            }
            state.paramNames.push(seg.paramName);
            state.segs.push(seg);
            rest = rest.slice(n);
        } else {
            const { n, seg } = analyseConstantPart(rest, nextParamPosition);
            state.segs.push(seg);
            rest = rest.slice(n);
        }
    }
    if (state.segs.length > 0) {
        state.segs[state.segs.length - 1].isLast = true;
    }
    addParameterMetaInfo(state.segs);

    return {
        ok: true,
        route: {
            pattern: rawPattern,
            segs: state.segs,
            paramNames: state.paramNames,
            warnings: state.warnings,
        },
        warnings: state.warnings,
    };
}

// findParamLen and helpers: expressjs wildcard behavior, greedy right to left.
function findParamLen(s: string, segment: RouteSegment): number {
    if (segment.isLast) {
        return findParamLenForLastSegment(s, segment);
    }
    if (segment.length !== 0 && s.length >= segment.length) {
        return segment.length;
    }
    if (segment.isGreedy) {
        const searchCount = countOccurrences(s, segment.comparePart);
        if (searchCount > 1) {
            return findGreedyParamLen(s, searchCount, segment);
        }
    }
    if (segment.comparePart.length === 1) {
        const constPosition = s.indexOf(segment.comparePart);
        if (constPosition !== -1) {
            return constPosition;
        }
    } else {
        const constPosition = s.indexOf(segment.comparePart);
        if (constPosition !== -1) {
            // a non-greedy parameter must not span a '/' before its next
            // constant part: /api/:param/fixedEnd rejects /api/123/456/fixedEnd
            if (!segment.isGreedy && s.slice(0, constPosition).includes("/")) {
                return 0;
            }
            return constPosition;
        }
    }
    return s.length;
}

function findParamLenForLastSegment(s: string, seg: RouteSegment): number {
    if (!seg.isGreedy) {
        const i = s.indexOf("/");
        if (i !== -1) {
            return i;
        }
    }
    return s.length;
}

function findGreedyParamLen(s: string, searchCount: number, segment: RouteSegment): number {
    let rest = s;
    let remaining = searchCount;
    for (let i = segment.partCount; i > 0 && remaining > 0; i--) {
        remaining--;
        const constPosition = rest.lastIndexOf(segment.comparePart);
        if (constPosition === -1) {
            break;
        }
        rest = rest.slice(0, constPosition);
    }
    return rest.length;
}

// matchPath ports getMatch: it walks the segments over the detection path
// (lowercased, trailing slashes trimmed) while parameter values are sliced
// from the original path so they keep their case.
export function matchPath(route: CompiledRoute, rawPath: string): MatchResult {
    let path = rawPath;
    if (path === "") {
        path = "/";
    }
    let detectionPath = trimTrailingSlashes(asciiLower(path));

    const values: string[] = [];
    let offset = 0;
    for (const segment of route.segs) {
        const partLen = detectionPath.length;
        let i: number;
        if (!segment.isParam) {
            i = segment.length;
            if (
                segment.hasOptionalSlash &&
                partLen === i - 1 &&
                detectionPath === segment.constPart.slice(0, i - 1)
            ) {
                i--;
            } else if (i > detectionPath.length || detectionPath.slice(0, i) !== segment.constPart) {
                return {
                    ok: false,
                    reason: `static part "${segment.constPart}" does not match at "${detectionPath || "(end of path)"}"`,
                };
            }
        } else {
            i = findParamLen(detectionPath, segment);
            if (!segment.isOptional && i === 0) {
                return { ok: false, reason: `required parameter "${segment.paramName}" has no value` };
            }
            const value = path.slice(offset, offset + i);
            values.push(value);
            if (!segment.isOptional || i !== 0) {
                for (const constraint of segment.constraints) {
                    if (!executeConstraint(constraint, value)) {
                        const argText = constraint.args.length > 0 ? `(${constraint.args.join(",")})` : "";
                        return {
                            ok: false,
                            reason: `value "${value}" fails the ${constraint.rawName}${argText} constraint`,
                        };
                    }
                }
            }
        }
        if (partLen > 0) {
            detectionPath = detectionPath.slice(i);
            offset += i;
        }
    }
    if (detectionPath !== "") {
        return { ok: false, reason: `path has an unmatched remainder "${detectionPath}"` };
    }

    const params: Record<string, string> = {};
    for (let i = 0; i < route.paramNames.length && i < values.length; i++) {
        params[route.paramNames[i]] = values[i];
    }
    return { ok: true, params };
}
