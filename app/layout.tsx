import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Agentation } from "agentation";
import { TopBar } from "@/components/top-bar";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hackernews.love"),
  title: "Good ideas. Mixed reviews. · Hacker News Love",
  description:
    "A small library of big what-ifs. Explore the first impressions, later chapters, and open questions behind 22 projects from the Hacker News archives.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Good ideas. Mixed reviews. · Hacker News Love",
    description:
      "A small library of big what-ifs. The doubts, the breakthroughs, and the things still worth questioning.",
    url: "https://hackernews.love",
    siteName: "hackernews.love",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Good ideas. Mixed reviews. · Hacker News Love",
    description:
      "A small library of big what-ifs. The doubts, the breakthroughs, and the things still worth questioning.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `var d=matchMedia('(prefers-color-scheme: dark)').matches;try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')d=t==='dark'}catch(_){}document.documentElement.classList.toggle('dark',d)`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${newsreader.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <TopBar />
        {children}
        <Footer />
        <Analytics />
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
