// Guards the one thing parallel-search-parse.js must never get wrong: the
// documents it hands the search plugin have to be the ones the plugin would
// have built on its own. Run it after upgrading @easyops-cn/docusaurus-search-local.

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const scanModule = require('@easyops-cn/docusaurus-search-local/dist/server/server/utils/scanDocuments');
const plain = scanModule.scanDocuments;

const { parallelSearchParse } = require('./parallel-search-parse');

const config = { ignoreCssSelectors: [], forceIgnoreNoIndex: false };

function page(n) {
    return `<!doctype html><html><head>
<meta name="description" content="Description of page ${n}">
<meta name="keywords" content="fiber,go">
</head><body><div class="main-wrapper"><article>
<header><h1>Title ${n}<a class="hash-link" href="#title-${n}">#</a></h1></header>
<p>Intro paragraph of page ${n}.</p>
<h2>Section A<a class="hash-link" href="#section-a">#</a></h2>
<p>Body of section A on page ${n}.</p>
<h3>Section B<a class="hash-link" href="#section-b">#</a></h3>
<p>Body of section B on page ${n}.</p>
</article></div></body></html>`;
}

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'parallel-search-parse-'));
const items = Array.from({ length: 12 }, (_, n) => {
    const filePath = path.join(dir, `page-${n}.html`);
    fs.writeFileSync(filePath, page(n));
    return { filePath, url: `/page-${n}/`, type: n % 4 === 0 ? 'blog' : 'docs' };
});

/** Ids run off a counter that keeps climbing across calls, so compare them relative. */
function normalize(groups) {
    const ids = groups.flat().map((doc) => doc.i);
    const base = Math.min(...ids);
    return groups.map((group) =>
        group.map((doc) => ({ ...doc, i: doc.i - base, ...(doc.p === undefined ? {} : { p: doc.p - base }) })),
    );
}

test('parallel parsing yields the documents the plugin builds on its own', async () => {
    const expected = normalize(await plain(items, config));

    const warnings = [];
    const warn = console.warn;
    console.warn = (message) => warnings.push(message);
    try {
        parallelSearchParse();
        assert.deepEqual(normalize(await scanModule.scanDocuments(items, config)), expected);
        // Second pass: the blog cache is warm and must still return the same docs.
        assert.deepEqual(normalize(await scanModule.scanDocuments(items, config)), expected);
    } finally {
        console.warn = warn;
        fs.rmSync(dir, { recursive: true, force: true });
    }

    assert.deepEqual(warnings, [], 'worker pool fell back to the main thread');
});
