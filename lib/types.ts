export const categories = [
  "Everyday life",
  "Developer tools",
  "AI & agents",
] as const;
export type Category = (typeof categories)[number];

export interface CommentQuote {
  text: string;
  author: string;
  url: string;
}

export interface Source {
  label: string;
  url: string;
}

export interface Post {
  id: string;
  companyName: string;
  month: string;
  year: number;
  discussionDate: string;
  hnThreadUrl: string;
  hnPostTitle: string;
  quotes: CommentQuote[];
  editorialContext: string;
  outcome: string;
  category: Category;
  coverColor: string;
  coverTitle: string;
  description: string;
  nuance: string;
  outcomeSource: Source & { date: string };
  contextSource?: Source;
}
