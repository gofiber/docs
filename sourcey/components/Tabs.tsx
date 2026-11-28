import { h } from "preact";

/**
 * Shim @theme/Tabs — dirender saat build, jadi tanpa hook: semua panel
 * ditulis, dibuka-tutup lewat <details> bawaan browser.
 * ponytail: tanpa deep-link/URL state; tambah kalau tab perlu bisa dibagi lewat link.
 */
export default function Tabs({ children, groupId }) {
  const items = [];
  const walk = (nodes) => {
    for (const n of [].concat(nodes ?? [])) {
      if (!n) continue;
      if (n.props?.label) items.push(n);
      else if (n.props?.children) walk(n.props.children);
    }
  };
  walk(children);
  return h("div", { class: "shim-tabs", "data-group": groupId }, items.map((it, i) =>
    h("details", { class: "shim-tabs__item", open: i === 0 }, [
      h("summary", { class: "shim-tabs__tab" }, it.props.label),
      h("div", { class: "shim-tabs__panel" }, it.props.children),
    ])));
}
