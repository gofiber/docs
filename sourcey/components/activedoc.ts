/** Shim `useActiveDocContext` — hanya butuh doc yang sedang dibuka (kosong di build statis). */
export function useActiveDocContext() {
  return { activeDoc: null };
}
