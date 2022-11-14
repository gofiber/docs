import lunr from "lunr";
import { searchIndexUrl } from "../../utils/proxiedGenerated";
const cache = new Map();
export function fetchIndexes(baseUrl, searchContext) {
    const cacheKey = `${baseUrl}${searchContext}`;
    let promise = cache.get(cacheKey);
    if (!promise) {
        promise = legacyFetchIndexes(baseUrl, searchContext);
        cache.set(cacheKey, promise);
    }
    return promise;
}
export async function legacyFetchIndexes(baseUrl, searchContext) {
    if (process.env.NODE_ENV === "production") {
        const url = `${baseUrl}${searchIndexUrl.replace("{dir}", searchContext ? `-${searchContext.replace(/\//g, "-")}` : "")}`;
        // Catch potential attacks.
        const fullUrl = new URL(url, location.origin);
        if (fullUrl.origin !== location.origin) {
            throw new Error("Unexpected version url");
        }
        const json = (await (await fetch(url)).json());
        const wrappedIndexes = json.map(({ documents, index }, type) => ({
            type: type,
            documents,
            index: lunr.Index.load(index),
        }));
        const zhDictionary = json.reduce((acc, item) => {
            for (const tuple of item.index.invertedIndex) {
                if (/\p{Unified_Ideograph}/u.test(tuple[0][0])) {
                    acc.add(tuple[0]);
                }
            }
            return acc;
        }, new Set());
        return {
            wrappedIndexes,
            zhDictionary: Array.from(zhDictionary),
        };
    }
    // The index does not exist in development, therefore load a dummy index here.
    return {
        wrappedIndexes: [],
        zhDictionary: [],
    };
}
