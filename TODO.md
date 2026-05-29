# TODO: Re-architect sub-package documentation versioning (Weg B)

Status: planned (not started). Tracked here so we do not lose the context.

## The problem

`contrib`, `storage` and `template` are each a **monorepo of independently
versioned sub-packages** (e.g. storage `redis` is at v3 while `mongodb` is at
v2; contrib `websocket` v1 alongside `zap` v3). Docusaurus per-plugin
versioning is **linear** (one product, v1/v2/v3) and cannot natively model
"many packages, each with its own version line".

### Current workaround (what we ship today)

One `@docusaurus/plugin-content-docs` instance per monorepo, abusing the
version string to encode `<pkg>_v<major>.x.x` (contrib also prefixes the Fiber
era, `v3_<pkg>_v<major>.x.x`). See `contrib_versions.json`,
`storage_versions.json`, `template_versions.json` and the
`*_versioned_docs/` / `*_versioned_sidebars/` folders.

### Why this is bad

- **Massive duplication.** Every `docusaurus docs:version` snapshot freezes a
  copy of *all* sub-packages, not just the one that was released. Measured:
  contrib 1236 markdown files but only ~88 unique (~14x), storage 1694,
  template 726. A `websocket` release pointlessly re-freezes `zap`/`redis`.
- **Cryptic, unusable version dropdown (partially mitigated, see below).**
  Raw entries like `v3_websocket_v1.x.x` mixed across every package.
- **Naming drift across eras.** Fiber v2 era uses `fiberzap`/`fiberi18n`/
  `opafiber`/`otelfiber`; Fiber v3 era renamed them to `zap`/`i18n`/`opa`/
  `otel`. Cross-era doc links cannot resolve because the doc IDs differ
  (`zap/zap` vs `fiberzap/fiberzap`).
- **Generation lives upstream.** The snapshots are produced and committed by
  GitHub Actions in the source repos (gofiber/contrib, /storage, /template,
  /fiber) on each package release ("Sync docs for release ..." commits). This
  repo only consumes them, so any encoding change must be coordinated with
  that upstream automation.

## What Weg A already fixed (shipped, theme-only, in this repo)

These were incremental, low-risk UX fixes and do NOT solve the duplication or
the encoding. Files:

- `src/theme/versionUtils.ts` - decodes the encoded version strings, maps
  v2/v3 package aliases, produces friendly labels.
- `src/theme/NavbarItem/DocsVersionDropdownNavbarItem.tsx` - filters the
  version dropdown to **only the package the user is reading**, with readable
  labels (`v1.x (Fiber v3)`, `v2.x`, `Next (unreleased)`) and a package-name
  header.
- `src/theme/DocVersionBanner/index.tsx` - clearer banner copy + fixed a React
  rules-of-hooks violation (`useDocusaurusContext` was called conditionally).

Still open after Weg A: the ~14x file duplication, the broken cross-era doc
links, and the fundamentally non-native versioning model.

## The idea (Weg B): one plugin instance per sub-package, generated from a manifest

Recommended direction (a.k.a. "Option D"):

1. **Define a manifest** of sub-packages, e.g.
   `{ repo, pkg, routeBasePath, editUrl }` for each of contrib/storage/template.
2. **Generate one `plugin-content-docs` instance per sub-package** in
   `docusaurus.config.ts` by looping the manifest (e.g. `contrib-websocket`,
   `contrib-zap`, `storage-redis`, ...). Each instance gets **proper linear
   Docusaurus versioning** (`v1`, `v2`, `v3`) and its own clean version
   dropdown - native banner, "current"/"latest", everything works again.
3. **Replace the per-monorepo navbar dropdowns** with a single custom navbar
   component that **groups packages per monorepo** (Contrib > websocket > v1/v2)
   so the navbar does not explode into ~58 dropdowns.
4. **Delete** the encoded-string parser (`versionUtils.ts`) and the custom
   banner override once native versioning is restored.

### Expected outcome

- Cross-package duplication **eliminated** (a release syncs only its own
  package subtree; far fewer total pages, build likely faster despite more
  plugin instances).
- Per-package version switcher shows real `v1/v2/v3` for that package only.
- URLs become per-package, e.g. `/contrib/websocket/` with native version
  routing.

### Migration cost / risks

- One-time **migration script** to de-interleave existing snapshots into
  per-package version folders + per-package `versions.json`.
- **Coordinate the upstream sync automation** (the source-repo GitHub Actions)
  to push into per-package version dirs instead of monorepo-wide snapshots.
- Watch **build memory** with ~58+ plugin instances (should be fine; total
  page count drops sharply, but validate).
- Navbar UX: needs the grouped custom dropdown so we are not showing dozens of
  top-level version dropdowns.

## Industry precedent (validates the direction)

- **Terraform Registry** - docs versioning is a property of each provider; a
  header switcher shows only that provider's versions, version in the URL.
  Closest analog. https://developer.hashicorp.com/terraform/registry/providers/docs
- **AWS CDK Construct Hub** - per-package page with a scoped version selector,
  version in the URL path. https://constructs.dev/packages/aws-cdk-lib
- **Docusaurus** has no native "many independently versioned packages" feature;
  the canonical request is open: https://github.com/facebook/docusaurus/issues/852
  Multi-instance docs (already used here) only model doc-sets, not packages:
  https://docusaurus.io/docs/docs-multi-instance
- Most JS monorepos (Babel/Jest/Storybook/Apollo/Nx) document **latest only**
  and defer history to changelogs/GitHub Releases - a lighter alternative worth
  considering for packages that do not truly need version-pinned docs.
