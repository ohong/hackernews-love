import Link from "next/link";
import { Icon } from "./icons";

export function Hero({ count }: { count: number }) {
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-intro">
        <p className="eyebrow">
          <span className="orange-dot" /> A small library of big what-ifs
        </p>
        <h1 id="hero-title">
          Good ideas.
          <br />
          <em>Mixed reviews.</em>
        </h1>
      </div>
      <div className="hero-aside">
        <span className="editorial-star" aria-hidden="true">
          ✳
        </span>
        <p>
          Before they were familiar,
          <br />
          they were up for debate.
        </p>
        <p className="hero-description">
          {count} stories from the Hacker News archives.
          <br className="desktop-break" /> The doubts, the breakthroughs, and
          the
          <br className="desktop-break" /> things that are still worth
          questioning.
        </p>
        <Link href="#collection" className="text-link">
          Find your next rabbit hole <Icon name="arrow" />
        </Link>
      </div>
    </section>
  );
}
