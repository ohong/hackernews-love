import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Newsreader } from "next/font/google";
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
  title: "hackernews.love \u2014 Every great company was once someone\u2019s bad idea",
  description:
    "A curated collection of Hacker News posts where commenters dismissed companies that went on to become wildly successful. Don\u2019t let the critics discourage you.",
  openGraph: {
    title: "hackernews.love",
    description: "Every great company was once someone\u2019s bad idea.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "hackernews.love",
    description: "Every great company was once someone\u2019s bad idea.",
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
      </body>
    </html>
  );
}
