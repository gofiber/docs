import fs from 'node:fs';
import path from 'node:path';
import type { LoadContext, Plugin } from '@docusaurus/types';
import {
    CATALOG_PLUGIN_NAME,
    type CatalogEntry,
    type CatalogKey,
    type FiberCatalogs,
} from './src/types/catalogs';

// Reads the official package catalogs (middleware, contrib, storage, template)
// straight from the synced docs at build time and publishes them as global
// data. Anything rendering counts or package names can therefore derive them
// instead of hardcoding: a package added to the docs shows up on its own.
//
// The docs build already has this information in the docs plugin global data
// (see src/components/fiber-landscape), but the homepage build ships without
// any docs plugin, so the catalogs are read from the file system here. The
// rule matches what the landscape does: one entry per package page directly
// below the catalog root, nested pages (contrib/socketio/legacy, ...) are not
// packages of their own.

const CATALOG_ROOTS: Record<Exclude<CatalogKey, 'middleware'>, string> = {
    contrib: 'docs/contrib',
    storage: 'docs/storage',
    template: 'docs/template',
};

const INDEX_FILES = ['README.md', 'README.mdx', 'index.md', 'index.mdx'];

const FRONT_MATTER = /^---\r?\n([\s\S]*?)\r?\n---/;
const FRONT_MATTER_TITLE = /^title:[ \t]*(.+?)[ \t]*$/m;
const FIRST_HEADING = /^#[ \t]+(.+?)[ \t]*$/m;

/**
 * The middleware catalog of the docs version served at the docs site root,
 * which is the newest entry of versions.json. Falls back to the unreleased
 * docs when no version has been cut yet.
 */
function coreMiddlewareDir(siteDir: string): string {
    try {
        const versions = JSON.parse(
            fs.readFileSync(path.join(siteDir, 'versions.json'), 'utf8'),
        ) as string[];
        const dir = path.join(siteDir, 'versioned_docs', `version-${versions[0]}`, 'middleware');
        if (fs.existsSync(dir)) {
            return dir;
        }
    } catch {
        // No versions.json (or an unreadable one): use the current docs.
    }
    return path.join(siteDir, 'docs/core/middleware');
}

/** Title of a doc: front matter `title`, else its first heading, else the id. */
function readLabel(file: string, id: string): string {
    let raw: string;
    try {
        // Some synced READMEs carry a BOM, which would hide the front matter.
        raw = fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '');
    } catch {
        return id;
    }

    const frontMatter = raw.match(FRONT_MATTER);
    const title = frontMatter?.[1].match(FRONT_MATTER_TITLE)?.[1];
    if (title) {
        return cleanLabel(title.replace(/^['"]|['"]$/g, ''));
    }

    const body = frontMatter ? raw.slice(frontMatter[0].length) : raw;
    const heading = body.match(FIRST_HEADING)?.[1];
    return heading ? cleanLabel(heading) : id;
}

/** Strips the markdown a heading may carry: links, code spans, emphasis. */
function cleanLabel(label: string): string {
    return label
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
        .replace(/[`*_]/g, '')
        .trim();
}

function byLabel(a: CatalogEntry, b: CatalogEntry): number {
    return a.label.localeCompare(b.label);
}

/** Catalogs whose packages are a directory with an index doc. */
function readPackageDirs(root: string): CatalogEntry[] {
    if (!fs.existsSync(root)) {
        return [];
    }
    return fs
        .readdirSync(root, { withFileTypes: true })
        .filter((entry) => entry.isDirectory() && !entry.name.startsWith('_'))
        .map((entry) => {
            const index = INDEX_FILES.map((name) => path.join(root, entry.name, name)).find(
                (file) => fs.existsSync(file),
            );
            return index ? { id: entry.name, label: readLabel(index, entry.name) } : null;
        })
        .filter((entry): entry is CatalogEntry => entry !== null)
        .sort(byLabel);
}

/** Catalogs whose packages are a single doc file, such as the middleware. */
function readPackageFiles(root: string): CatalogEntry[] {
    if (!fs.existsSync(root)) {
        return [];
    }
    return fs
        .readdirSync(root, { withFileTypes: true })
        .filter(
            (entry) => entry.isFile() && /\.mdx?$/.test(entry.name) && !entry.name.startsWith('_'),
        )
        .map((entry) => {
            const id = entry.name.replace(/\.mdx?$/, '');
            return { id, label: readLabel(path.join(root, entry.name), id) };
        })
        .sort(byLabel);
}

function readCatalogs(siteDir: string): FiberCatalogs {
    return {
        middleware: readPackageFiles(coreMiddlewareDir(siteDir)),
        contrib: readPackageDirs(path.join(siteDir, CATALOG_ROOTS.contrib)),
        storage: readPackageDirs(path.join(siteDir, CATALOG_ROOTS.storage)),
        template: readPackageDirs(path.join(siteDir, CATALOG_ROOTS.template)),
    };
}

export default function fiberCatalogsPlugin(context: LoadContext): Plugin<FiberCatalogs> {
    return {
        name: CATALOG_PLUGIN_NAME,
        async loadContent() {
            return readCatalogs(context.siteDir);
        },
        async contentLoaded({ content, actions }) {
            actions.setGlobalData(content);
        },
        getPathsToWatch() {
            return [
                coreMiddlewareDir(context.siteDir),
                ...Object.values(CATALOG_ROOTS).map((root) => path.join(context.siteDir, root)),
            ];
        },
    };
}
