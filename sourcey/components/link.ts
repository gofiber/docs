import { h } from "preact";

/** Shim `@docusaurus/Link` — cukup anchor biasa. */
export default function Link({ to, href, children, ...rest }) {
  return h("a", { ...rest, href: to ?? href }, children);
}
