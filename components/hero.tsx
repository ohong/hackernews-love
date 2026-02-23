export function Hero() {
  return (
    <section id="home" data-section className="relative flex min-h-screen snap-start flex-col items-center justify-center px-6">
      <h1 className="font-serif text-6xl font-semibold tracking-tight text-foreground md:text-8xl">
        hackernews.love
      </h1>
      <p className="mt-6 max-w-xl text-center font-serif text-xl italic text-muted md:text-2xl">
        Every great company was once someone&apos;s bad idea.
      </p>
      <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-muted">
        A curated collection of early Hacker News posts about now-wildly-successful
        companies &mdash; where the pundits were wrong.
      </p>
      <div className="mt-16 animate-bounce text-muted">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
