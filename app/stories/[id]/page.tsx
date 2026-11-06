import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import { Book } from "@/components/book";
import { Icon } from "@/components/icons";
import { SaveButton } from "@/components/save-button";

type Props = { params: Promise<{ id: string }> };
export function generateStaticParams() {
  return posts.map((post) => ({ id: post.id }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = posts.find((item) => item.id === id);
  if (!post) return { title: "Story not found" };
  return {
    title: `${post.companyName}: ${post.coverTitle} · Hacker News Love`,
    description: post.description,
    alternates: { canonical: `/stories/${post.id}` },
    openGraph: {
      title: `${post.companyName}: ${post.coverTitle}`,
      description: post.description,
      url: `/stories/${post.id}`,
    },
  };
}
export default async function Story({ params }: Props) {
  const { id } = await params;
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) notFound();
  const post = posts[index];
  const next = posts[(index + 1) % posts.length];
  const words = [
    post.editorialContext,
    post.outcome,
    post.nuance,
    ...post.quotes.map((quote) => quote.text),
  ]
    .join(" ")
    .split(/\s+/).length;
  return (
    <main id="main-content" className="wrap">
      <div className="story-breadcrumb">
        <Link href="/#collection">
          <Icon name="arrow" width="15" height="15" /> Back to the collection
        </Link>
        <span>
          VOLUME {String(index + 1).padStart(2, "0")} OF {posts.length}
        </span>
      </div>
      <article>
        <header className="story-opening">
          <div className="story-art">
            <Book post={post} index={index} />
          </div>
          <div className="story-opening-copy">
            <p className="eyebrow">
              {post.category} · {post.year}
            </p>
            <h1>{post.coverTitle}</h1>
            <p className="story-dek">{post.description}</p>
            <p className="story-byline">
              The {post.companyName} story ·{" "}
              {Math.max(1, Math.ceil(words / 200))} min read
            </p>
            <div className="story-actions">
              <a href="#the-discussion" className="button-primary">
                Read the first impressions{" "}
                <Icon name="arrow" width="16" height="16" />
              </a>
              <SaveButton id={post.id} name={post.companyName} showLabel />
            </div>
          </div>
        </header>
        <div className="story-body">
          <nav className="story-index" aria-label="In this story">
            <p>IN THIS STORY</p>
            <a href="#the-beginning">01 &nbsp; The beginning</a>
            <a href="#the-discussion">02 &nbsp; First impressions</a>
            <a href="#what-happened">03 &nbsp; The next chapter</a>
            <a href="#the-other-side">04 &nbsp; The other side</a>
          </nav>
          <div className="story-prose">
            <section id="the-beginning">
              <p className="section-kicker">
                01 / {post.month} {post.year}
              </p>
              <h2>The beginning</h2>
              <p className="body-copy">{post.editorialContext}</p>
              <div className="thread-title">
                <span>THE ORIGINAL HN SUBMISSION</span>
                <a
                  href={post.hnThreadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.hnPostTitle}{" "}
                  <span className="sr-only">
                    (opens Hacker News in a new tab)
                  </span>
                </a>
              </div>
            </section>
            <section id="the-discussion">
              <p className="section-kicker">02 / In the comments</p>
              <h2>First impressions</h2>
              <p className="quote-note">
                Selected excerpts from the discussion. These are individual
                views, not a community verdict. Read the thread for replies and
                context.
              </p>
              {post.quotes.map((quote, quoteIndex) => (
                <blockquote
                  className="story-quote"
                  key={`${quote.author}-${quoteIndex}`}
                >
                  <p>“{quote.text}”</p>
                  <footer>
                    <span>— {quote.author}</span>
                    <a
                      href={quote.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Original comment
                      <Icon name="diagonal" width="12" height="12" />
                    </a>
                  </footer>
                </blockquote>
              ))}
            </section>
            <section id="what-happened" className="outcome-section">
              <p className="section-kicker">03 / Beyond the thread</p>
              <h2>The next chapter</h2>
              <p className="outcome-date">{post.outcomeSource.date}</p>
              <p className="body-copy">{post.outcome}</p>
              <a
                href={post.outcomeSource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                {post.outcomeSource.label}
                <Icon name="diagonal" width="13" height="13" />
              </a>
            </section>
            <section id="the-other-side" className="nuance-section">
              <p className="section-kicker">04 / Worth remembering</p>
              <h2>The other side of the story</h2>
              <p className="body-copy">{post.nuance}</p>
              {post.contextSource && (
                <a
                  href={post.contextSource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="source-link"
                >
                  {post.contextSource.label}
                  <Icon name="diagonal" width="13" height="13" />
                </a>
              )}
            </section>
            <p className="story-endnote">
              An independent editorial selection. Milestones describe a moment
              in time, not a verdict on a product or its critics.{" "}
              <Link href="/#about">How to read this collection.</Link>
            </p>
          </div>
        </div>
      </article>
      <aside className="next-story" aria-label="Next story">
        <div>
          <p className="eyebrow">Keep a good rabbit hole going</p>
          <h2>
            {next.companyName} <span>{next.coverTitle}</span>
          </h2>
        </div>
        <Link href={`/stories/${next.id}`}>
          Next story <Icon name="arrow" width="18" height="18" />
        </Link>
      </aside>
    </main>
  );
}
