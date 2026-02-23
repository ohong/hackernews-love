import { Post } from "@/lib/types";

export function PostCard({ post }: { post: Post }) {
  return (
    <section
      id={post.id}
      data-section
      className="group relative flex min-h-screen flex-col items-center justify-center px-6 py-20"
    >
      {/* Company name — large ghosted text behind */}
      <h2 className="text-center font-serif text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
        <a
          href={post.hnThreadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {post.companyName}
        </a>
      </h2>

      {/* Date */}
      <span className="mt-3 text-sm tracking-wide text-muted/60">
        {post.month} {post.year}
      </span>

      {/* Quotes — editorial pull-quote style */}
      <div className="mt-12 flex w-full max-w-xl flex-col gap-10">
        {post.dismissiveQuotes.map((quote, i) => (
          <blockquote key={i} className="border-l-2 border-muted/20 pl-6">
            <p className="font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
              &ldquo;{quote.text}&rdquo;
            </p>
            <footer className="mt-3 text-sm text-muted/60">
              &mdash; {quote.author}
            </footer>
          </blockquote>
        ))}
      </div>

      {/* Editorial context */}
      <p className="mt-10 max-w-lg text-center font-serif text-base italic leading-[1.6] text-muted md:text-lg">
        {post.editorialContext}
      </p>

      {/* What happened — boxed card */}
      <div className="mt-10 w-full max-w-lg rounded-xl border border-border bg-surface px-8 py-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted/50">
          What happened
        </p>
        <p className="mt-3 font-serif text-base leading-[1.6] text-foreground md:text-lg">
          {post.outcome}
        </p>
      </div>

      {/* CTA */}
      <a
        href={post.hnThreadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 text-sm text-muted/40 transition-colors hover:text-foreground"
      >
        Read the post on HN &rarr;
      </a>
    </section>
  );
}
