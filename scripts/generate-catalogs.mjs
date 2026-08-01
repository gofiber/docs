#!/usr/bin/env node
// Generates src/data/catalogs.json from the docs folder: the official package
// catalogs (middleware, contrib, storage, template) with their display names
// and doc paths. Both the homepage and the ecosystem landscape read that file,
// so counts and package lists never have to be maintained by hand.
//
// Runs from the pre* hooks of the start and build scripts (see package.json)
// and uses nothing but Node builtins, so it also works before an install.
//
// A package is one page directly below a catalog root; nested pages such as
// contrib/socketio/legacy are part of their package, not packages of their own.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const siteDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outFile = path.join(siteDir, 'src/data/catalogs.json');

// Catalogs of one directory per package, served at /<routeBasePath>/<id>.
const DIR_CATALOGS = {
    contrib: { dir: 'docs/contrib', routeBasePath: 'contrib' },
    storage: { dir: 'docs/storage', routeBasePath: 'storage' },
    template: { dir: 'docs/template', routeBasePath: 'template' },
};

const INDEX_FILES = ['README.md', 'README.mdx', 'index.md', 'index.mdx'];

const FRONT_MATTER = /^---\r?\n([\s\S]*?)\r?\n---/;
const FRONT_MATTER_TITLE = /^title:[ \t]*(.+?)[ \t]*$/m;
const FIRST_HEADING = /^#[ \t]+(.+?)[ \t]*$/m;

/**
 * The middleware of the docs version served at the docs site root, which is
 * the newest entry of versions.json. Falls back to the unreleased docs when
 * no version has been cut yet.
 */
function coreMiddlewareDir() {
    try {
        const versions = JSON.parse(fs.readFileSync(path.join(siteDir, 'versions.json'), 'utf8'));
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
function readLabel(file, id) {
    // Some synced READMEs carry a BOM, which would hide the front matter.
    const raw = fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '');

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
function cleanLabel(label) {
    return label
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
        .replace(/[`*_]/g, '')
        .trim();
}

function byLabel(a, b) {
    return a.label.localeCompare(b.label, 'en');
}

/** Catalogs whose packages are a directory with an index doc. */
function readPackageDirs(root, routeBasePath) {
    return fs
        .readdirSync(root, { withFileTypes: true })
        .filter((entry) => entry.isDirectory() && !entry.name.startsWith('_'))
        .map((entry) => {
            const index = INDEX_FILES.map((name) => path.join(root, entry.name, name)).find((file) =>
                fs.existsSync(file),
            );
            if (!index) {
                return null;
            }
            return {
                id: entry.name,
                label: readLabel(index, entry.name),
                path: `/${routeBasePath}/${entry.name}`,
            };
        })
        .filter((entry) => entry !== null)
        .sort(byLabel);
}

/** Catalogs whose packages are a single doc file, such as the middleware. */
function readPackageFiles(root, routeBasePath) {
    return fs
        .readdirSync(root, { withFileTypes: true })
        .filter((entry) => entry.isFile() && /\.mdx?$/.test(entry.name) && !entry.name.startsWith('_'))
        .map((entry) => {
            const id = entry.name.replace(/\.mdx?$/, '');
            return {
                id,
                label: readLabel(path.join(root, entry.name), id),
                path: `/${routeBasePath}/${id}`,
            };
        })
        .sort(byLabel);
}

const catalogs = {
    middleware: readPackageFiles(coreMiddlewareDir(), 'middleware'),
    ...Object.fromEntries(
        Object.entries(DIR_CATALOGS).map(([key, { dir, routeBasePath }]) => [
            key,
            readPackageDirs(path.join(siteDir, dir), routeBasePath),
        ]),
    ),
};

const empty = Object.keys(catalogs).filter((key) => catalogs[key].length === 0);
if (empty.length > 0) {
    console.error(
        `generate-catalogs: no packages found for ${empty.join(', ')}. Are the docs synced?`,
    );
    process.exit(1);
}

const contents = `${JSON.stringify(
    {
        generatedBy: 'scripts/generate-catalogs.mjs, do not edit by hand',
        catalogs,
    },
    null,
    2,
)}\n`;

// Only touch the file when it actually changed, so watchers stay quiet.
const changed = !fs.existsSync(outFile) || fs.readFileSync(outFile, 'utf8') !== contents;
if (changed) {
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, contents);
}

const summary = Object.entries(catalogs)
    .map(([key, entries]) => `${key} ${entries.length}`)
    .join(', ');
console.log(`generate-catalogs: ${summary}${changed ? '' : ' (unchanged)'}`);
