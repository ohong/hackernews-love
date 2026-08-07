export function Hero() {
  return (
    <section id="home" data-section className="relative flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="max-w-3xl text-center font-serif text-5xl leading-[1.1] tracking-tight text-foreground md:text-8xl">
        Every great project was once called{" "}
        <em className="italic">a bad idea</em>
      </h1>
      <p className="mx-auto mt-8 max-w-lg text-center font-serif text-lg leading-[1.6] text-muted">
        A two-decade retrospective of launches Hacker News dismissed. And what happened next.
      </p>
      <p
        aria-label="Use the arrow keys to flip through entries"
        className="mt-10 flex items-center justify-center gap-2 text-xs tracking-wide text-muted/50"
      >
        <span>Flip through</span>
        <span className="flex items-center gap-1" aria-hidden="true">
          <kbd className="rounded border border-border px-1.5 py-0.5 font-sans text-[0.7rem] leading-none">
            &larr;
          </kbd>
          <kbd className="rounded border border-border px-1.5 py-0.5 font-sans text-[0.7rem] leading-none">
            &uarr;
          </kbd>
          <kbd className="rounded border border-border px-1.5 py-0.5 font-sans text-[0.7rem] leading-none">
            &darr;
          </kbd>
          <kbd className="rounded border border-border px-1.5 py-0.5 font-sans text-[0.7rem] leading-none">
            &rarr;
          </kbd>
        </span>
        <span>to explore</span>
      </p>
    </section>
  );
}
