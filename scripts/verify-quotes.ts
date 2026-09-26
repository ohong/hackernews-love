import { posts } from "../data/posts";

type Item = {
  id: number;
  author: string | null;
  title: string | null;
  text: string | null;
  type: string;
  created_at: string;
  children: Item[];
};
function plainText(html: string) {
  const entities: Record<string, string> = {
    amp: "&",
    quot: '"',
    apos: "'",
    lt: "<",
    gt: ">",
    nbsp: " ",
  };
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi, (whole, entity: string) => {
      if (entity.startsWith("#x"))
        return String.fromCodePoint(parseInt(entity.slice(2), 16));
      if (entity.startsWith("#"))
        return String.fromCodePoint(parseInt(entity.slice(1), 10));
      return entities[entity] ?? whole;
    })
    .replace(/\s+/g, " ")
    .trim();
}
const results = await Promise.allSettled(
  posts.map(async (post) => {
    const id = new URL(post.hnThreadUrl).searchParams.get("id");
    const response = await fetch(`https://hn.algolia.com/api/v1/items/${id}`, {
      signal: AbortSignal.timeout(20000),
    });
    if (!response.ok)
      throw new Error(`${post.id}: HN API returned ${response.status}`);
    const root: Item = await response.json();
    if (
      root.type !== "story" ||
      root.title !== post.hnPostTitle ||
      root.created_at.slice(0, 10) !== post.discussionDate
    )
      throw new Error(`${post.id}: discussion title/date mismatch`);
    const comments = new Map<number, Item>();
    function visit(item: Item) {
      comments.set(item.id, item);
      item.children.forEach(visit);
    }
    visit(root);
    for (const quote of post.quotes) {
      const comment = comments.get(
        Number(new URL(quote.url).searchParams.get("id")),
      );
      if (
        !comment ||
        comment.author !== quote.author ||
        !plainText(comment.text ?? "").includes(quote.text)
      )
        throw new Error(
          `${post.id}: excerpt or attribution mismatch for ${quote.author}`,
        );
    }
    return post.quotes.length;
  }),
);
let verified = 0;
for (const result of results) {
  if (result.status === "rejected") {
    console.error(result.reason);
    process.exitCode = 1;
  } else verified += result.value;
}
console.log(
  `${verified} quotes verified across ${results.filter((result) => result.status === "fulfilled").length} discussions. Only HTML markup/entities and whitespace are normalized.`,
);
