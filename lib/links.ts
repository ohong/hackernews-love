export const repositoryUrl = "https://github.com/ohong/hackernews-love";
export const discussionUrl = "https://news.ycombinator.com/item?id=47120188";
export const suggestUrl = `${repositoryUrl}/issues/new?${new URLSearchParams({
  title: "Suggest: [Project name]",
  body: "## Project\n\n## Original HN discussion\n\n## Comments, with direct links\n\n## What happened later (with sources and dates)\n\n## What the criticism got right\n",
  labels: "suggestion",
})}`;
