import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://hackernews.love", priority: 1 },
    ...posts.map((post) => ({
      url: `https://hackernews.love/stories/${post.id}`,
      priority: 0.8,
    })),
  ];
}
