"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { posts } from "@/data/posts";
import { Book } from "./book";
import { Icon } from "./icons";

export function Bookshelf() {
  const [selected, setSelected] = useState(0);
  const [pointerSelection, setPointerSelection] = useState(false);
  const rail = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = rail.current;
    const book = container?.querySelector<HTMLElement>(".selected");
    if (!container || !book) return;
    const bounds = container.getBoundingClientRect();
    const target = book.getBoundingClientRect();
    // Reveal only within the shelf; browsing must never move the document vertically.
    if (target.left < bounds.left || target.right > bounds.right) {
      container.scrollLeft +=
        target.left - bounds.left - (bounds.width - target.width) / 2;
    }
  }, [selected]);
  const post = posts[selected];
  function select(index: number, pointer: boolean) {
    setPointerSelection(pointer);
    setSelected(index);
  }
  function surprise(pointer: boolean) {
    select(
      (selected + 1 + Math.floor(Math.random() * (posts.length - 1))) %
        posts.length,
      pointer,
    );
  }
  return (
    <section className="shelf-section wrap" aria-label="Explore the bookshelf">
      <div className="shelf-caption">
        <span>
          THE BROWSING SHELF{" "}
          <span className="caption-detail">
            — Pick a spine. Follow a story.
          </span>
        </span>
        <button
          type="button"
          className="text-link surprise-button"
          onClick={(event) => surprise(event.detail > 0)}
        >
          <Icon name="shuffle" width="16" height="16" /> Surprise me
        </button>
      </div>
      <div
        ref={rail}
        className="shelf-scroll"
        tabIndex={0}
        aria-label="Book spines. Scroll horizontally for more stories."
      >
        <div className="shelf-books" data-pointer-selection={pointerSelection}>
          {posts.map((item, index) => (
            <button
              type="button"
              key={item.id}
              className={`shelf-volume ${selected === index ? "selected" : ""}`}
              aria-label={`Preview ${item.companyName}`}
              aria-pressed={selected === index}
              onClick={(event) => select(index, event.detail > 0)}
              style={
                {
                  "--book-color": item.coverColor,
                  "--spine-height": `${206 + ((index * 17) % 39)}px`,
                } as CSSProperties
              }
            >
              {selected === index ? (
                <Book post={item} index={index} />
              ) : (
                <span className="book-spine">
                  <span className="spine-year">{item.year}</span>
                  <span className="spine-name">{item.companyName}</span>
                  <span className="spine-mark">✳</span>
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="shelf-ledge" aria-hidden="true" />
      <div className="shelf-selection" aria-live="polite" aria-atomic="true">
        <div className="shelf-selection-title">
          <span className="volume-number">
            {String(selected + 1).padStart(2, "0")} / {posts.length}
          </span>
          <Link href={`/stories/${post.id}`} className="selected-company">
            {post.companyName}
          </Link>
          <span className="selection-year">{post.year}</span>
        </div>
        <p>{post.description}</p>
        <Link href={`/stories/${post.id}`} className="text-link">
          Open the story <Icon name="arrow" width="17" height="17" />
        </Link>
      </div>
    </section>
  );
}
