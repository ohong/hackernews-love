"use client";
import { useSyncExternalStore } from "react";
const EVENT = "hn-love-collection-change";
function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener(EVENT, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(EVENT, callback);
  };
}
// URL state lets Back restore the reader's search and makes collections shareable.
export function useCollectionLocation() {
  const search = useSyncExternalStore(
    subscribe,
    () => window.location.search,
    () => "",
  );
  function update(values: Record<string, string>) {
    const url = new URL(window.location.href);
    for (const [key, value] of Object.entries(values)) {
      if (value) url.searchParams.set(key, value);
      else url.searchParams.delete(key);
    }
    window.history.replaceState(window.history.state, "", url);
    window.dispatchEvent(new Event(EVENT));
  }
  return { params: new URLSearchParams(search), update };
}
