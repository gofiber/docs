import { h } from "preact";

/**
 * Shim untuk `@theme/CodeBlock` milik Docusaurus.
 * Hanya memakai props yang dipakai komponen Fiber: language, title, metastring.
 * ponytail: tanpa syntax highlight (Docusaurus butuh Prism), cukup blok <pre>.
 * Ganti ke shiki/prism kalau halaman perlu pewarnaan token.
 */
export default function CodeBlock({ language, title, metastring, children }) {
  const code = typeof children === "string" ? children : String(children ?? "");
  return h("div", { class: "shim-codeblock" }, [
    title ? h("div", { class: "shim-codeblock__title" }, title) : null,
    h("pre", { "data-language": language, "data-meta": metastring }, h("code", null, code)),
  ]);
}
