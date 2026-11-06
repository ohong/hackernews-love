# Contributing

Use **Suggest a story** on the site to open a pre-filled GitHub issue, or add an entry to `data/posts.ts` in a pull request.

Include:

1. The original HN discussion, its exact title, and its date.
2. Short, verbatim excerpts with usernames and direct comment links.
3. A later milestone with a dated primary source.
4. The valid concerns or limits that the milestone does not resolve.
5. A category, cover color, editorial title, and brief description.

Keep the array in discussion-date order. Cover volume numbers follow that order. The date on a cover is the HN discussion year, not the company's founding year.

Do not describe individual comments as a community verdict. Do not present funding, valuations, downloads, or GitHub stars as proof that criticism was wrong. Keep metrics dated and distinguish company claims from independent measurements.

Run `bun run verify:quotes` to check attribution, excerpts, discussion titles, and dates against the live HN archive. Whitespace and HTML entities are normalized; wording and punctuation are not. Read the surrounding comments too: a matching phrase alone cannot establish its meaning.

Run `bun run check` and `bun run test:e2e` before opening a PR. Preview long cover titles on both desktop and mobile.
