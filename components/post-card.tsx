import { Post, patternLabels } from "@/lib/types";

export function PostCard({ post }: { post: Post }) {
  const quote = post.dismissiveQuotes[0];

  return (
    <a
      href={post.hnThreadUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex min-h-screen snap-start flex-col items-center justify-center px-6 py-16"
    >
      {/* Header metadata */}
      <div className="flex items-center gap-3">
        <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
          {patternLabels[post.pattern]}
        </span>
        <span className="text-sm text-muted">{post.year}</span>
      </div>

      {/* Company name */}
      <h2 className="mt-4 text-center font-serif text-5xl font-semibold text-foreground md:text-7xl">
        {post.companyName}
      </h2>

      {/* Quote card */}
      <div className="mt-8 w-full max-w-lg rounded-2xl border border-border bg-surface p-8">
        <blockquote>
          <p className="font-serif text-lg italic leading-relaxed text-foreground">
            &ldquo;{quote.text}&rdquo;
          </p>
          <footer className="mt-4 text-sm text-muted">
            &mdash; {quote.author}
          </footer>
        </blockquote>
      </div>

      {/* Outcome */}
      <p className="mt-8 max-w-md text-center text-sm leading-relaxed text-muted">
        {post.outcome}
      </p>

      {/* CTA */}
      <span className="mt-6 text-sm text-muted/60 transition-colors group-hover:text-foreground">
        Read the thread &rarr;
      </span>
    </a>
  );
}
