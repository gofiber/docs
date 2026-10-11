// The search plugin builds one index per docs version, puts the whole blog into
// each of them and parses the HTML on the main thread, which is the single
// biggest block of the build. Two patches fix that:
//
//   - blogInRootIndexOnly(): the blog stays in the root index, the one searched
//     from the blog and from the latest docs. Older versions lose it, so a
//     search there no longer finds blog posts.
//   - parallelSearchParse(): the pages of one index are independent, so parse
//     them in worker threads and hand the plugin a filled cache. This one does
//     not change a byte of what is written.
//
// Both patch the plugin's own functions and let its unchanged code do the
// indexing. They reach into the package's internals: re-check them when upgrading.

const os = require('node:os');
const { Worker } = require('node:worker_threads');

const UTILS = '@easyops-cn/docusaurus-search-local/dist/server/server/utils/';
const POOL_SIZE = Math.max(1, Math.min(os.availableParallelism(), 8));
const PATCHED = Symbol.for('fiber-docs.parallel-search-parse');

const WORKER_SRC = `
const { parentPort, workerData } = require('node:worker_threads');
const fs = require('node:fs');
const { parse } = require(workerData.parsePath);

parentPort.on('message', ({ items, config }) => {
    parentPort.postMessage(items.map((item) => {
        try {
            const html = fs.readFileSync(item.filePath, 'utf8');
            return { ok: true, value: parse(html, item.type, item.url, config) };
        } catch {
            // Let the plugin hit it again on the main thread and fail there.
            return { ok: false };
        }
    }));
});
`;

/** One request per worker at a time, so the response is simply the next message. */
function ask(worker, payload) {
    return new Promise((resolve, reject) => {
        const cleanup = () => {
            worker.off('message', onMessage);
            worker.off('error', onError);
            worker.unref();
        };
        const onMessage = (results) => {
            cleanup();
            resolve(results);
        };
        const onError = (error) => {
            cleanup();
            reject(error);
        };

        worker.ref();
        worker.once('message', onMessage);
        worker.once('error', onError);
        worker.postMessage(payload);
    });
}

/** Round-robin so a few big pages do not land in the same worker. */
function spread(items, buckets) {
    const chunks = Array.from({ length: buckets }, () => []);
    items.forEach((item, index) => chunks[index % buckets].push(item));
    return chunks;
}

function parallelSearchParse() {
    let parsePath;
    let parseModule;
    let scanModule;
    try {
        parsePath = require.resolve(`${UTILS}parse`);
        parseModule = require(parsePath);
        scanModule = require(`${UTILS}scanDocuments`);
    } catch {
        throw new Error(`${UTILS} is gone: update or drop parallelSearchParse().`);
    }

    // Docusaurus evaluates the config twice, and patching twice would run two
    // pools over the same pages. The marker sits on the shared plugin module.
    if (parseModule[PATCHED]) {
        return;
    }
    parseModule[PATCHED] = true;

    const parse = parseModule.parse;
    const scanDocuments = scanModule.scanDocuments;

    // A page lands in exactly one index, so its parse is dropped once that index
    // is written.
    const cache = new Map();

    parseModule.parse = (html, type, url, config) => {
        if (!cache.has(url)) {
            cache.set(url, parse(html, type, url, config));
        }
        return cache.get(url);
    };

    let pool = null;
    let parallel = true;

    scanModule.scanDocuments = async (items, config) => {
        if (parallel) {
            try {
                pool ??= Array.from({ length: POOL_SIZE }, () => {
                    const worker = new Worker(WORKER_SRC, { eval: true, workerData: { parsePath } });
                    worker.unref();
                    return worker;
                });

                const pending = items.filter((item) => !cache.has(item.url));
                const chunks = spread(pending, pool.length);
                const results = await Promise.all(
                    chunks.map((chunk, index) => (chunk.length ? ask(pool[index], { items: chunk, config }) : [])),
                );

                chunks.forEach((chunk, index) => {
                    chunk.forEach((item, position) => {
                        const result = results[index][position];
                        if (result.ok) {
                            cache.set(item.url, result.value);
                        }
                    });
                });
            } catch (error) {
                parallel = false;
                console.warn(`parallel-search-parse: falling back to the main thread (${error.message})`);
            }
        }

        try {
            return await scanDocuments(items, config);
        } finally {
            cache.clear();
        }
    };
}

function blogInRootIndexOnly() {
    let docInfos;
    try {
        docInfos = require(`${UTILS}processDocInfos`);
    } catch {
        throw new Error(`${UTILS} is gone: update or drop blogInRootIndexOnly().`);
    }

    const processDocInfos = docInfos.processDocInfos;

    docInfos.processDocInfos = (buildData, config) => {
        const indexes = processDocInfos(buildData, config);
        const isRoot = (index) => index.outDir === buildData.outDir;

        // Without a root index the blog would silently drop out of the search.
        if (!indexes.some(isRoot)) {
            throw new Error('The search plugin built no root index: re-check blogInRootIndexOnly().');
        }

        return indexes.map((index) =>
            isRoot(index) ? index : { ...index, paths: index.paths.filter((page) => page.type !== 'blog') },
        );
    };
}

module.exports = { blogInRootIndexOnly, parallelSearchParse };
