// Shape of src/data/catalogs.json, the package catalogs generated from the
// docs folder by scripts/generate-catalogs.mjs. Both the homepage and the
// ecosystem landscape read that file, so neither has to carry package lists
// or counts of its own.

export type CatalogKey = 'middleware' | 'contrib' | 'storage' | 'template';

export type CatalogEntry = {
    /** Doc id, i.e. the directory or file name such as "redis". */
    id: string;
    /** Display name taken from the doc itself, such as "Redis". */
    label: string;
    /** Path of the doc page on the docs site, such as "/storage/redis". */
    path: string;
};

/** Every official package catalog, alphabetically sorted by label. */
export type FiberCatalogs = Record<CatalogKey, CatalogEntry[]>;

export type CatalogsFile = {
    generatedBy: string;
    catalogs: FiberCatalogs;
};
