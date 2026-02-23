import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Newsreader } from "next/font/google";
import { Agentation } from "agentation";
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
  title: "Every great project was once called a bad idea",
  description:
    "A two-decade retrospective of launches Hacker News dismissed. And what happened next.",
  openGraph: {
    title: "Every great project was once called a bad idea",
    description:
      "A two-decade retrospective of launches Hacker News dismissed. And what happened next.",
    url: "https://hackernews.love",
    siteName: "hackernews.love",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Every great project was once called a bad idea",
    description:
      "A two-decade retrospective of launches Hacker News dismissed. And what happened next.",
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
            __html: `try{if(localStorage.theme==='dark'){document.documentElement.classList.add('dark')}}catch(_){}`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${newsreader.variable} antialiased`}
      >
        {children}
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
