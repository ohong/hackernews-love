import { Post } from "@/lib/types";

export function PostCard({ post }: { post: Post }) {
  return (
    <a
      href={post.hnThreadUrl}
      target="_blank"
      rel="noopener noreferrer"
      id={post.id}
      data-section
      className="group relative flex min-h-screen snap-start flex-col items-center justify-center px-6 py-16"
    >
      {/* Year */}
      <span className="text-sm text-muted">{post.year}</span>

      {/* Company name */}
      <h2 className="mt-4 text-center font-serif text-5xl font-semibold text-foreground md:text-7xl">
        {post.companyName}
      </h2>

      {/* Quote cards */}
      <div className="mt-8 flex w-full max-w-lg flex-col gap-4">
        {post.dismissiveQuotes.map((quote, i) => (
          <div key={i} className="rounded-2xl border border-border bg-surface p-8">
            <blockquote>
              <p className="font-serif text-lg italic leading-relaxed text-foreground">
                &ldquo;{quote.text}&rdquo;
              </p>
              <footer className="mt-4 text-sm text-muted">
                &mdash; {quote.author}
              </footer>
            </blockquote>
          </div>
        ))}
      </div>

      {/* Editorial context */}
      <p className="mt-6 max-w-md text-center text-sm italic leading-relaxed text-muted">
        {post.editorialContext}
      </p>

      {/* What happened */}
      <div className="mt-6 max-w-md text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-muted/50">
          What happened
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          {post.outcome}
        </p>
      </div>

      {/* CTA */}
      <span className="mt-8 text-sm text-muted/60 transition-colors group-hover:text-foreground">
        Read the thread &rarr;
      </span>
    </a>
  );
}
