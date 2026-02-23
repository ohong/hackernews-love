"use client";

import { useEffect, useState } from "react";
import { posts } from "@/data/posts";

const navItems = [
  { id: "home", label: "Home", year: null },
  ...posts.map((p) => ({ id: p.id, label: p.companyName, year: p.year })),
];

function NavList({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <ul className="mt-6 space-y-0.5">
      {navItems.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => onSelect(item.id)}
            className={`flex w-full items-baseline gap-2 rounded px-2 py-1.5 text-left transition-colors ${
              activeId === item.id
                ? "text-foreground"
                : "text-muted hover:text-foreground/70"
            }`}
          >
            <span className="text-sm">{item.label}</span>
            {item.year && (
              <span className="shrink-0 text-xs text-muted/40">
                {item.year}
              </span>
            )}
          </button>
        </li>
      ))}
    </ul>
  );
}

export function SideNav() {
  const [activeId, setActiveId] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { root: container, threshold: 0.5 }
    );

    container
      .querySelectorAll("[data-section]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const container = document.getElementById("scroll-container");
    const el = document.getElementById(id);
    if (!container || !el) return;
    container.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="hidden lg:flex w-48 flex-shrink-0 flex-col border-r border-border bg-background px-3 py-8 overflow-y-auto">
        <span className="px-2 text-xs font-medium uppercase tracking-widest text-muted/50">
          hackernews.love
        </span>
        <NavList activeId={activeId} onSelect={scrollTo} />
      </nav>

      {/* Mobile: hamburger button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation"
        className="lg:hidden fixed top-4 left-4 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted shadow-sm transition-colors hover:text-foreground"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          aria-hidden
        >
          <path
            d="M2 4.5h11M2 7.5h11M2 10.5h11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Mobile: backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile: slide-in drawer */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 flex flex-col border-r border-border bg-background px-3 py-8 overflow-y-auto transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-2">
          <span className="text-xs font-medium uppercase tracking-widest text-muted/50">
            hackernews.love
          </span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
            className="text-muted hover:text-foreground transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
              <path
                d="M3 3l9 9M12 3l-9 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <NavList activeId={activeId} onSelect={scrollTo} />
      </div>
    </>
  );
}
