"use client";

import { ThemeToggle } from "./theme-toggle";

const REPO = "ohong/hackernews-love";

const suggestUrl =
  `https://github.com/${REPO}/issues/new?` +
  new URLSearchParams({
    title: "Suggest: [Company Name]",
    body: "## Company\n\n## HN Thread URL\n\n## Dismissive Quote(s)\n\n## What Actually Happened\n",
    labels: "suggestion",
  }).toString();

export function TopBar() {
  return (
    <div className="fixed top-4 right-4 z-40 flex items-center gap-2">
      <a
        href={suggestUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-sm text-muted/70 backdrop-blur-sm transition-colors hover:text-foreground"
      >
        Add Suggestions
      </a>
      <ThemeToggle />
    </div>
  );
}
