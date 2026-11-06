import { posts } from "@/data/posts";
import { Hero } from "@/components/hero";
import { Bookshelf } from "@/components/bookshelf";
import { Collection } from "@/components/collection";
import { Icon } from "@/components/icons";
import { discussionUrl } from "@/lib/links";

export default function Home() {
  return (
    <main id="main-content">
      <Hero count={posts.length} />
      <Bookshelf />
      <div className="editorial-strip wrap">
        <span className="little-asterisk" aria-hidden="true">
          ✳
        </span>
        <p>
          A comment isn’t a consensus. A success isn’t a rebuttal.{" "}
          <a href="#about">There’s more to the story.</a>
        </p>
      </div>
      <Collection />
      <section
        id="about"
        className="about-note wrap"
        aria-labelledby="about-heading"
      >
        <div className="about-note-heading">
          <p className="eyebrow">A note from the editor</p>
          <h2 id="about-heading">
            Hindsight is easy.
            <br />
            <em>Building things isn’t.</em>
          </h2>
        </div>
        <div className="about-note-copy">
          <p>
            This is a collection of first impressions, not a scoreboard. These
            projects attracted doubt, enthusiasm, and useful criticism. The
            comments here are selected excerpts, not a measure of what Hacker
            News thought.
          </p>
          <p>
            We chose projects with a later chapter worth reading. That creates
            survivorship bias: this collection cannot tell you how often
            skeptics are right. Funding, popularity, and a good product are
            different things.
          </p>
          <p>
            Read the original discussions. Give the commenters the same
            generosity you’d want for an old opinion of your own.
          </p>
          <a
            href={discussionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Our readers helped us see that{" "}
            <Icon name="diagonal" width="16" height="16" />
          </a>
        </div>
      </section>
    </main>
  );
}
