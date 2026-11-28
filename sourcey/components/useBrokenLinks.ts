/** Shim `@docusaurus/useBrokenLinks` — tidak ada pengecekan tautan saat build. */
export default function useBrokenLinks() {
  return { collectLinks() {}, collectAnchor() {} };
}
