"use client";

import { useMemo } from "react";
import Link from "next/link";
import { posts } from "@/data/posts";
import { categories, type Category } from "@/lib/types";
import { useCollectionLocation } from "@/lib/collection-location";
import { useSavedStories } from "@/lib/saved-stories";
import { Book } from "./book";
import { SaveButton } from "./save-button";
import { Icon } from "./icons";

type Filter = "All stories" | Category | "Saved";
export function Collection() {
  const { params, update } = useCollectionLocation();
  const query = params.get("q") || "";
  const requestedFilter = params.get("category");
  const filter: Filter = ([...categories, "Saved"] as string[]).includes(
    requestedFilter || "",
  )
    ? (requestedFilter as Filter)
    : "All stories";
  const view = params.get("view") === "list" ? "list" : "covers";
  const requestedSort = params.get("sort");
  const sort =
    requestedSort === "az" || requestedSort === "newest"
      ? requestedSort
      : "oldest";
  const setQuery = (value: string) => update({ q: value });
  const setFilter = (value: Filter) =>
    update({ category: value === "All stories" ? "" : value });
  const setView = (value: string) =>
    update({ view: value === "covers" ? "" : value });
  const setSort = (value: string) =>
    update({ sort: value === "oldest" ? "" : value });
  const { ids } = useSavedStories();
  const filtered = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return posts
      .filter(
        (post) =>
          (filter === "All stories" ||
            (filter === "Saved"
              ? ids.includes(post.id)
              : post.category === filter)) &&
          terms.every((term) =>
            `${post.companyName} ${post.description} ${post.coverTitle} ${post.year} ${post.quotes.map((q) => q.text).join(" ")}`
              .toLowerCase()
              .includes(term),
          ),
      )
      .sort((a, b) =>
        sort === "az"
          ? a.companyName.localeCompare(b.companyName)
          : sort === "newest"
            ? b.discussionDate.localeCompare(a.discussionDate)
            : a.discussionDate.localeCompare(b.discussionDate),
      );
  }, [query, filter, sort, ids]);
  return (
    <section
      id="collection"
      className="collection wrap"
      aria-labelledby="collection-title"
    >
      <div className="collection-heading">
        <div>
          <p className="eyebrow">A few chapters from the internet</p>
          <h2 id="collection-title">
            The collection<span className="heading-count">{posts.length}</span>
          </h2>
        </div>
        <label className="search-box">
          <Icon name="search" width="18" height="18" />
          <span className="sr-only">Search stories</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="A company, an idea, a year…"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
            >
              <Icon name="close" width="16" height="16" />
            </button>
          )}
        </label>
      </div>
      <div className="collection-toolbar">
        <div className="filter-tabs" role="group" aria-label="Filter stories">
          {(["All stories", ...categories, "Saved"] as Filter[]).map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
              className={filter === item ? "active" : ""}
            >
              {item === "Saved" && (
                <Icon name="bookmark" width="14" height="14" />
              )}
              {item}
              {item === "Saved" && ids.length > 0 && <span>{ids.length}</span>}
            </button>
          ))}
        </div>
        <div className="collection-options">
          <label className="sort-control">
            <span className="sr-only">Sort stories</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              <option value="oldest">Oldest first</option>
              <option value="newest">Newest first</option>
              <option value="az">A to Z</option>
            </select>
          </label>
          <div
            className="view-switch"
            role="group"
            aria-label="Collection view"
          >
            <button
              type="button"
              aria-label="Book covers view"
              aria-pressed={view === "covers"}
              onClick={() => setView("covers")}
            >
              <Icon name="grid" width="17" height="17" />
            </button>
            <button
              type="button"
              aria-label="List view"
              aria-pressed={view === "list"}
              onClick={() => setView("list")}
            >
              <Icon name="list" width="18" height="18" />
            </button>
          </div>
        </div>
      </div>
      <p className="results-count" role="status">
        {filtered.length} {filtered.length === 1 ? "story" : "stories"}
        {filter !== "All stories"
          ? ` · ${filter === "Saved" ? "Saved in this browser" : filter}`
          : " · From first impressions to second thoughts"}
      </p>
      {filtered.length ? (
        <div className={`collection-items ${view}`}>
          {filtered.map((post) => {
            const index = posts.findIndex((item) => item.id === post.id);
            return (
              <article key={post.id} className="collection-item">
                <Link
                  href={`/stories/${post.id}`}
                  className="cover-link"
                  aria-label={`Read ${post.companyName}: ${post.coverTitle}`}
                >
                  <Book post={post} index={index} compact />
                  <span className="cover-read">
                    Open story <Icon name="arrow" width="16" height="16" />
                  </span>
                </Link>
                <div className="catalogue-entry">
                  <div className="catalogue-title">
                    <Link href={`/stories/${post.id}`}>{post.companyName}</Link>
                    <SaveButton id={post.id} name={post.companyName} />
                  </div>
                  <p className="catalogue-description">{post.description}</p>
                  <p className="catalogue-meta">
                    <span>{post.year}</span>
                    <span>{post.category}</span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="empty-state">
          <Icon
            name={filter === "Saved" ? "bookmark" : "search"}
            width="32"
            height="32"
          />
          <h3>
            {filter === "Saved" && !query
              ? "Keep a little curiosity for later."
              : "That story isn’t on this shelf. Yet."}
          </h3>
          <p>
            {filter === "Saved" && !query
              ? "Use the bookmark beside any story to start your reading list. It stays in this browser."
              : "Try another company, idea, or year, or explore the whole collection."}
          </p>
          <button
            type="button"
            className="button-primary"
            onClick={() => {
              update({ q: "", category: "" });
            }}
          >
            Browse all stories <Icon name="arrow" width="16" height="16" />
          </button>
        </div>
      )}
    </section>
  );
}
