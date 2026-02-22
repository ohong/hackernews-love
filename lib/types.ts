export type DismissalPattern =
  | "build-it-yourself"
  | "its-illegal"
  | "tried-before"
  | "hype-cycle"
  | "drive-by-dismissal"
  | "nobody-wants-this"
  | "wrong-approach";

export interface DismissiveQuote {
  text: string;
  author: string;
}

export interface Post {
  id: string;
  companyName: string;
  year: number;
  hnThreadUrl: string;
  hnPostTitle: string;
  dismissiveQuotes: DismissiveQuote[];
  editorialContext: string;
  outcome: string;
  pattern: DismissalPattern;
}

export const patternLabels: Record<DismissalPattern, string> = {
  "build-it-yourself": "I can build this myself",
  "its-illegal": "It's illegal",
  "tried-before": "Tried before, failed",
  "hype-cycle": "Just hype",
  "drive-by-dismissal": "Drive-by dismissal",
  "nobody-wants-this": "Nobody wants this",
  "wrong-approach": "Wrong approach",
};
