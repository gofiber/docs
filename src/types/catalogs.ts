// Shared contract between the build-time catalog plugin
// (fiber-catalogs-plugin.ts) and the components that render the catalogs.
// Kept free of Node imports so it can be pulled into the client bundle.

export const CATALOG_PLUGIN_NAME = 'fiber-catalogs';

export type CatalogKey = 'middleware' | 'contrib' | 'storage' | 'template';

export type CatalogEntry = {
    /** Doc id, i.e. the directory or file name such as "redis". */
    id: string;
    /** Display name taken from the doc itself, such as "Redis". */
    label: string;
};

/** Every official package catalog, alphabetically sorted by label. */
export type FiberCatalogs = Record<CatalogKey, CatalogEntry[]>;
