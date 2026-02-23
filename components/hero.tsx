export function Hero() {
  return (
    <section id="home" data-section className="relative flex min-h-screen snap-start flex-col items-center justify-center px-6">
      <h1 className="max-w-3xl text-center font-serif text-5xl leading-[1.1] tracking-tight text-foreground md:text-8xl">
        Every great project was once called{" "}
        <em className="italic">a bad idea</em>
      </h1>
      <p className="mx-auto mt-8 max-w-lg text-center font-serif text-lg leading-[1.6] text-muted">
        A two-decade retrospective of launches Hacker News dismissed. And what happened next.
      </p>
    </section>
  );
}
