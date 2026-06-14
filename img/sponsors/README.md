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
`logoDark` on the entry. The component renders them via Docusaurus'
`@theme/ThemedImage`, which handles the swap during theme changes natively
(no custom CSS required). Sponsors that ship only one logo just leave
`logoDark` unset and the single logo is reused in both themes.
