# Fiber API reference — maintainer report

Sourcey documentation site for the `github.com/gofiber/fiber/v3` Go package,
generated from the pinned source commit
`0d4d872a29e844159a59b0b9f4cd7afab6ec624a` (26 Nov 2026, MIT).
Built with Sourcey 3.9.5 using the godoc adapter in snapshot mode:
a `godoc.json` snapshot of the root package (**811 public API symbols**)
plus an overview, a quickstart, and five guides condensed from the
project's own README at the pinned commit. The static site has 10 pages.

Intended public URL (pending merge of the docs PR into `gofiber/docs`):
`https://docs.gofiber.io/sourcey/`

## What this documents

- The full root-package API: 79 types, 30 package-level functions,
  367 methods, 271 constants, 64 variables — including `App`, `Ctx`,
  `Config`, `Router`, `Route`, `Bind`, `BindError`, `Cookie`, `Constraint`,
  and the error helpers.
- Guides: routing and context, middleware (`Use`/`Next`, logger, CORS),
  static files and error handling (including a corrected 404 example),
  the zero-allocation contract, and v2→v3 migration plus limits.

## Gaps this reference exposes (maintainer-facing)

1. **No generated API reference on docs.gofiber.io.** The official docs are
   hand-written guides; the complete 811-symbol root-package reference with
   per-symbol source links at a pinned commit exists only on pkg.go.dev,
   outside the docs site's navigation. This Sourcey site closes that gap.
2. **Zero-allocation behavior is not documented per API.** The README states
   the reuse rule in one paragraph, but no symbol documents which `Ctx`
   methods allocate, copy, or return reused buffers. Callers discover this
   only by reading source or by getting bitten.
3. **Binder error taxonomy has no central page.** `BindError`,
   `ConversionError`, and the binder idempotency fix merged 26 Nov 2026
   (PR #4924) show the binder has sharp edges; there is no single page
   explaining which failures each error type covers.
4. **The v3 constraint system is undocumented as a guide.**
   `Constraint`, `ConstraintAnalyzer`, and `ConstraintHandler` are a new
   API surface with no walkthrough in the official docs.
5. **Middleware ordering rules are unstated.** Prefix-scoped `Use`,
   registration order, and the interaction between `Use` and route
   matching are described only by example, never as rules.
6. **Subpackages are not covered.** This reference covers the root package
   only. `middleware/*`, `client`, `addon`, and `binder` have no API
   reference pages here — the same coverage boundary as the guides.
7. **No per-release API diff.** The docs site versions its guides, but
   there is no generated changelog mapping which symbols were added,
   changed, or removed per release.
8. **A doc bug found while building: the README's custom-404 example does
   not compile as printed.** It calls `static.New` without importing the
   `static` middleware package. The guide in this site includes the
   missing import.

## Verification

- `sourcey godoc -m ./fiber -p . -o ./fiber/godoc.json` — exit 0,
  1 package, snapshot generated 2026-11-27T03:35:50Z (Go 1.27.4).
- `sourcey build -c sourcey.config.ts -o dist` — exit 0, 10 pages, 3.6s.
- API minimum required: 20 symbols. This site: **811**.
- Asset paths in the built HTML are prefixed `/sourcey/` (matching the
  intended deploy path under `docs.gofiber.io`), so CSS/JS resolve when
  served from `static/sourcey/` in the docs repo.
- Deploy pipeline verified before building: `gofiber/docs`
  `.github/workflows/deploy.yaml` builds Docusaurus on push to `master`
  and publishes `./build` to GitHub Pages with CNAME `docs.gofiber.io`;
  `docusaurus.config.ts` sets `url: 'https://docs.gofiber.io'`,
  `baseUrl: '/'`; `static/manifest.json` returns HTTP 200 live, proving
  `static/` files are served verbatim at the site root.

## Receipt

Governed validation run sealed with runx CLI 0.11.1 — see `receipt.json`
(`runx:receipt:sha256:…`). Public runx.ai URL pending notarization
(needs a browser login; the receipt itself is valid and verifiable
locally with `runx verify`).
