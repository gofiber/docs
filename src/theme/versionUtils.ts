// Shared helpers for decoding the GoFiber multi-package version scheme.
//
// The contrib/storage/template doc instances pack a sub-package name AND its
// major version into each Docusaurus version string, e.g.:
//   "v3_websocket_v1.x.x" -> Fiber v3 era, package "websocket", major 1
//   "websocket_v1.x.x"    -> Fiber v2 era, package "websocket", major 1
//   "redis_v3.x.x"        -> storage package "redis", major 3 (no Fiber era)
//   "v2.1.0_v2.x.x"       -> legacy template release tag "v2.1.0"

export interface ParsedVersion {
    /** Fiber era prefix: 3 for "v3_*", -1 when unprefixed. */
    prefix: number;
    /** Sub-package name as encoded in the version string. */
    pkg: string;
    /** Major version of the sub-package. */
    version: number;
}

// Map Fiber-v2-era package names onto their Fiber-v3-era counterparts so both
// eras of the same logical middleware group under one switcher.
const PACKAGE_ALIASES: Record<string, string> = {
    fiberi18n: 'i18n',
    fibernewrelic: 'newrelic',
    fibersentry: 'sentry',
    fiberzap: 'zap',
    fiberzerolog: 'zerolog',
    opafiber: 'opa',
    otelfiber: 'otel',
};

export const parseVersionEntry = (entry: string): ParsedVersion => {
    const versionMatch = entry.match(/_v(\d+)\.x\.x$/);
    const version = versionMatch ? parseInt(versionMatch[1], 10) : 0;
    const rest = versionMatch ? entry.slice(0, versionMatch.index!) : entry;

    const prefixMatch = rest.match(/^v(\d+)_(.+)$/);
    if (prefixMatch) {
        return {prefix: parseInt(prefixMatch[1], 10), pkg: prefixMatch[2], version};
    }
    return {prefix: -1, pkg: rest, version};
};

export const getPackageName = (version: string): string => parseVersionEntry(version).pkg;

/** Collapse aliased v2/v3 package names onto a single canonical key. */
export const canonicalPackage = (pkg: string): string => PACKAGE_ALIASES[pkg] ?? pkg;

/** Package of the page being viewed: version string when versioned, doc folder on "current". */
export const activePackageName = (docId: string | undefined, versionName: string | undefined): string => {
    if (versionName && versionName !== 'current') {
        return parseVersionEntry(versionName).pkg;
    }
    return docId?.split('/')?.[0] ?? '';
};

/** Sort comparator: "current" first, then newest Fiber era, then highest major. newest-first. */
export const byNewestVersion = (a: string, b: string): number => {
    if (a === 'current') return -1;
    if (b === 'current') return 1;
    const av = parseVersionEntry(a);
    const bv = parseVersionEntry(b);
    if (av.prefix !== bv.prefix) return bv.prefix - av.prefix;
    return bv.version - av.version;
};

// Find the best matching version for a package, preferring prefixed and highest versions.
export const findBestVersion = (versions: string[], packageName: string): string | undefined => {
    return versions
        .filter((v) => parseVersionEntry(v).pkg === packageName)
        .sort(byNewestVersion)[0];
};

/**
 * Human-readable label for a version string, e.g.
 *   contrib  "v3_websocket_v1.x.x" -> "v1.x (Fiber v3)"
 *   contrib  "websocket_v1.x.x"    -> "v1.x (Fiber v2)"
 *   storage  "redis_v3.x.x"        -> "v3.x"
 *   template "v2.1.0_v2.x.x"       -> "Legacy v2.1.0"
 */
export const friendlyLabel = (entry: string, pluginId?: string): string => {
    if (entry === 'current') return 'Next (unreleased)';
    const {prefix, pkg, version} = parseVersionEntry(entry);

    // Legacy template release tags ("v1.6.30", "v2.1.0") were the monorepo-wide
    // versions before the engines were split out per package.
    if (/^v\d+(\.\d+)+$/.test(pkg)) return `Legacy ${pkg}`;

    const base = `v${version}.x`;
    // Only contrib carries a Fiber-era axis (the "v3_" prefix). storage and
    // template version solely by package major, so no era suffix there.
    if (pluginId === 'contrib') {
        if (prefix === 3) return `${base} (Fiber v3)`;
        if (prefix === -1) return `${base} (Fiber v2)`;
    }
    return base;
};
