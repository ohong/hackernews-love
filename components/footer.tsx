import { ThemeToggle } from "./theme-toggle";

const REPO = "ohong/hackernews-love";

const suggestUrl =
  `https://github.com/${REPO}/issues/new?` +
  new URLSearchParams({
    title: "Suggest: [Company Name]",
    body: "## Company\n\n## HN Thread URL\n\n## Dismissive Quote(s)\n\n## What Actually Happened\n",
    labels: "suggestion",
  }).toString();

export function Footer() {
  return (
    <section id="footer" data-section className="flex min-h-screen snap-start flex-col items-center justify-center px-6">
      <p className="max-w-md text-center font-serif text-xl italic leading-relaxed text-muted md:text-2xl">
        &ldquo;For the broader community, I think the takeaway is intentionally
        being almost unreasonably supportive of people building things.&rdquo;
      </p>
      <p className="mt-4 text-sm text-muted/60">&mdash; HN commenter</p>

      <div className="mt-12 flex items-center gap-4">
        <a
          href={suggestUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-foreground hover:text-foreground"
        >
          Suggest an Addition
        </a>
        <ThemeToggle />
      </div>

      <p className="mt-16 text-xs text-muted/40">
        A love letter to builders. Don&apos;t let the critics discourage you.
      </p>
    </section>
  );
}
