"use client";

import { Icon } from "./icons";

export function ThemeToggle() {
  function toggle() {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* Theme remains usable when storage is unavailable. */
    }
  }
  return (
    <button
      type="button"
      onClick={toggle}
      className="icon-button theme-toggle"
      aria-label="Toggle light or dark theme"
      title="Toggle light or dark theme"
    >
      <span className="theme-moon">
        <Icon name="moon" />
      </span>
      <span className="theme-sun">
        <Icon name="sun" />
      </span>
    </button>
  );
}
