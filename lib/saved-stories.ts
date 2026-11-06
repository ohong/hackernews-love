"use client";
import { useSyncExternalStore } from "react";
const KEY = "hn-love-saved";
const EVENT = "hn-love-saved-change";
let cachedRaw: string | null = null;
let cachedIds: string[] = [];
const EMPTY: string[] = [];
let memoryOnly = false;
function read() {
  if (memoryOnly) return cachedIds;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw !== cachedRaw) {
      const parsed: unknown = raw ? JSON.parse(raw) : [];
      cachedIds = Array.isArray(parsed)
        ? parsed.filter((id): id is string => typeof id === "string")
        : [];
      cachedRaw = raw;
    }
  } catch {
    /* Fall back to this tab's in-memory reading list. */
  }
  return cachedIds;
}
function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}
export function useSavedStories() {
  const ids = useSyncExternalStore(subscribe, read, () => EMPTY);
  function toggle(id: string) {
    const current = read();
    cachedIds = current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id];
    cachedRaw = JSON.stringify(cachedIds);
    try {
      localStorage.setItem(KEY, cachedRaw);
    } catch {
      memoryOnly = true;
    }
    window.dispatchEvent(new Event(EVENT));
  }
  return { ids, toggle };
}
