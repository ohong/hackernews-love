# Hacker News Love

**Good ideas. Mixed reviews.** A browsable library of first impressions, later milestones, and unresolved questions from the Hacker News archives.

[Visit the site](https://hackernews.love)

## Development

```sh
bun install
bun run dev
```

## Verification

```sh
bun run check
bunx playwright install chromium webkit
bun run test:e2e
bun run verify:quotes
```

Browser tests use the production build on port 3007. The quote audit checks live HN records through Algolia; it needs network access. Browser tests do not depend on third-party sites being available.

## Structure

- `data/posts.ts` is the source of truth for stories, cover identities, comment permalinks, and dated sources.
- `/` contains the interactive bookshelf and collection. Search, topic, sort, and view are stored in the URL.
- `/stories/[id]` prerenders each reading page. Content and links work without JavaScript.
- Saved stories stay in the current browser, with an in-memory fallback when storage is blocked.
- CSS supplies book depth and restrained motion. No WebGL or animation runtime is required.

[Contributing](CONTRIBUTING.md) · [Design and verification notes](docs/redesign.md) · [Artwork provenance](docs/artwork.md)
