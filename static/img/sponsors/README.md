# Sponsor logos

The homepage `SponsorsBlock` accepts any URL in its `logo` field, so most
sponsors are linked directly from their own CDN to avoid shipping binary
assets in this repo. Drop a logo here only if the sponsor does not host one
publicly or if you want a snapshot copy under our control.

Convention when self-hosting:

- Filename: lowercase sponsor handle, e.g. `coderabbit.svg`.
- Format: SVG preferred so the logo scales cleanly.
- Reference from `SponsorsBlock.tsx` as `/img/sponsors/<file>.svg`.

For sponsors with separate light- and dark-mode marks, set both `logo` and
`logoDark` on the entry. The component swaps to the dark variant when
`[data-theme='dark']` is active and keeps showing the single logo otherwise.
