import { Post } from "@/lib/types";

export const posts: Post[] = [
  {
    id: "dropbox",
    companyName: "Dropbox",
    year: 2007,
    hnThreadUrl: "https://news.ycombinator.com/item?id=8863",
    hnPostTitle: "My YC app: Dropbox \u2013 Throw away your USB drive",
    dismissiveQuotes: [
      {
        text: "For a Linux user, you can already build such a system yourself quite trivially by getting an FTP account, mounting it locally with curlftpfs, and then using SVN or CVS on the mounted filesystem.",
        author: "BrandonM",
      },
      {
        text: "It doesn't seem very viral or income generating.",
        author: "Anonymous",
      },
    ],
    editorialContext:
      "The most famous bad take in HN history \u2014 the \u2018I could build this myself with existing unix tools\u2019 archetype.",
    outcome:
      "Dropbox IPO\u2019d in 2018 at a $12B valuation. Drew Houston later thanked BrandonM by name when Dropbox went public.",
    pattern: "build-it-yourself",
  },
  {
    id: "bitcoin",
    companyName: "Bitcoin",
    year: 2009,
    hnThreadUrl: "https://news.ycombinator.com/item?id=599852",
    hnPostTitle:
      "Bitcoin: peer-to-peer network based anonymous digital currency",
    dismissiveQuotes: [
      {
        text: "Well this is an exceptionally cute idea, but there is absolutely no way that anyone is going to have any faith in this currency.",
        author: "jdoliner",
      },
    ],
    editorialContext:
      "The entire thread had just 3 comments and 5 upvotes. Three comments. For what would become a $2 trillion asset class.",
    outcome:
      "A single bitcoin went from fractions of a cent in 2009 to over $100,000 by 2024. Total crypto market cap exceeded $3 trillion.",
    pattern: "nobody-wants-this",
  },
  {
    id: "airbnb",
    companyName: "Airbnb",
    year: 2011,
    hnThreadUrl: "https://news.ycombinator.com/item?id=2180321",
    hnPostTitle: "Airbnb",
    dismissiveQuotes: [
      {
        text: "Renting a room/bed out of your home like a hotel most likely violates multiple tax and business laws in just about every US city\u2026 If I was a VC, I wouldn\u2019t touch this site.",
        author: "callmeed",
      },
    ],
    editorialContext:
      "A textbook example of the \u2018it\u2019s illegal therefore it will fail\u2019 fallacy \u2014 which also managed to preemptively dismiss Uber at the same time.",
    outcome:
      "Airbnb IPO\u2019d in 2020 at a $100B+ valuation and is now worth over $80 billion. One of YC\u2019s most successful companies ever.",
    pattern: "its-illegal",
  },
  {
    id: "figma",
    companyName: "Figma",
    year: 2015,
    hnThreadUrl: "https://news.ycombinator.com/item?id=10685407",
    hnPostTitle: "Launch of Figma, a collaborative interface design tool",
    dismissiveQuotes: [
      {
        text: "MEH",
        author: "williamle8300",
      },
      {
        text: "I just want a solid desktop app that isn\u2019t a web wrapper or lives in the browser. I can\u2019t stand web apps to be honest.",
        author: "EC1",
      },
      {
        text: "$18MM to spend only to see if you got it wrong is a rather interesting approach.",
        author: "salimmadjd",
      },
    ],
    editorialContext:
      'An entire comment. Just "MEH." For a company that would be valued at $20 billion.',
    outcome:
      "Adobe tried to acquire Figma for $20 billion in 2022. Figma IPO\u2019d in 2025 at a $60B+ market cap.",
    pattern: "drive-by-dismissal",
  },
  {
    id: "cursor-mar-2023",
    companyName: "Cursor",
    year: 2023,
    hnThreadUrl: "https://news.ycombinator.com/item?id=35285047",
    hnPostTitle: "Cursor: A code editor built for programming with AI",
    dismissiveQuotes: [
      {
        text: "There\u2019s nothing on the official website or GitHub that indicates what this software is, other than a cropped screenshot that looks like vscode with a prompt pop up over it.",
        author: "yakaccount4",
      },
      {
        text: "So looking through the dependencies, it\u2019s CodeMirror with a VsCode theme on top of it, that includes Copilot. Why wouldn\u2019t I just use an existing editor with Copilot support?",
        author: "Deukhoofd",
      },
    ],
    editorialContext:
      "The first Show HN got just 14 upvotes. Fourteen. For what would become the dominant AI code editor.",
    outcome:
      "By 2025, 1 billion lines of code were being written on Cursor every day. Valued at $10 billion.",
    pattern: "build-it-yourself",
  },
  {
    id: "cursor-oct-2023",
    companyName: "Cursor",
    year: 2023,
    hnThreadUrl: "https://news.ycombinator.com/item?id=37888477",
    hnPostTitle: "Cursor \u2013 The AI-First Code Editor",
    dismissiveQuotes: [
      {
        text: "Seeing all these blue check AI hype men do their \u2018thoughtleading\u2019 is an instant red flag for me. It\u2019s the exact same crypto bro bullshit all over again.",
        author: "madeofpalk",
      },
      {
        text: "The NFT grifters have simply moved on to AI. I wonder what shiny object will infatuate them next?",
        author: "wildrhythms",
      },
      {
        text: "Good for extracting money from dumb VCs, bad for users.",
        author: "the_gipsy",
      },
    ],
    editorialContext:
      "The second HN post drew confident declarations that AI coding tools were just another crypto-bro grift.",
    outcome:
      "$10 billion valuation. One billion lines of code per day. The most widely adopted AI coding tool in existence.",
    pattern: "hype-cycle",
  },
  {
    id: "instacart",
    companyName: "Instacart",
    year: 2012,
    hnThreadUrl: "https://news.ycombinator.com/item?id=4388793",
    hnPostTitle:
      "Instacart (YC S12) wants to be Amazon with 1 hour delivery",
    dismissiveQuotes: [
      {
        text: "A lot of really smart people have tried and failed to accomplish this sort of thing before. Amazon invested $60 million in Kozmo.com back in the late 90\u2019s, and they couldn\u2019t make it work.",
        author: "cs702",
      },
    ],
    editorialContext:
      "The \u2018this was tried before and failed\u2019 argument. The classic graveyard-pointing fallacy.",
    outcome:
      "Instacart IPO\u2019d in 2023 and is worth over $12 billion. COVID-19 turned grocery delivery from a novelty into a necessity.",
    pattern: "tried-before",
  },
  {
    id: "windsurf",
    companyName: "Windsurf",
    year: 2022,
    hnThreadUrl: "https://news.ycombinator.com/item?id=33344107",
    hnPostTitle: "Show HN: Codeium \u2014 a free, fast AI codegen extension",
    dismissiveQuotes: [
      {
        text: "I\u2019ll go ahead and ask the obvious question. What\u2019s the difference with Copilot? In my exactly 3 minutes test, it did worse, even if only slightly.",
        author: "micoloth",
      },
    ],
    editorialContext:
      "Three minutes. The commenter gave it exactly three minutes before pronouncing judgment.",
    outcome:
      "Windsurf was acquired in a deal worth $2.4 billion, with its CEO and key employees joining Google.",
    pattern: "drive-by-dismissal",
  },
  {
    id: "react",
    companyName: "React",
    year: 2013,
    hnThreadUrl: "https://news.ycombinator.com/item?id=5789055",
    hnPostTitle: "React: Facebook\u2019s latest open source JavaScript library",
    dismissiveQuotes: [
      {
        text: "We spent so long taking logic out of the HTML that now we want to go ahead and instead put HTML in the logic?",
        author: "HN Commenter",
      },
    ],
    editorialContext:
      "The developer community overwhelmingly felt React violated fundamental software engineering principles. \u2018Separation of concerns\u2019 was the rallying cry against it.",
    outcome:
      "React became the most popular UI library in the world, used by over 20 million developers. In 2025, Meta donated React to the Linux Foundation.",
    pattern: "wrong-approach",
  },
  {
    id: "stripe",
    companyName: "Stripe",
    year: 2011,
    hnThreadUrl: "https://news.ycombinator.com/item?id=3053883",
    hnPostTitle: "Stripe: instant payment processing for developers",
    dismissiveQuotes: [
      {
        text: "I really don\u2019t get or see how Stripe is different? Why would I use it instead of PayPal, 2CheckOut, e-junkie, etc?",
        author: "powertower",
      },
      {
        text: "I have no need of a fancy API\u2026 PayPal lets me specify basics and fire off simple Post.",
        author: "david5342",
      },
    ],
    editorialContext:
      "The launch thread was full of commenters doing unfavorable price comparisons to PayPal. Posted by Patrick Collison himself.",
    outcome:
      "Stripe reached a $106B+ valuation and processed $1.4 trillion in payments in 2024. The \u2018fancy API\u2019 became the default payments infrastructure for the internet.",
    pattern: "build-it-yourself",
  },
  {
    id: "product-hunt",
    companyName: "Product Hunt",
    year: 2014,
    hnThreadUrl: "https://news.ycombinator.com/item?id=7144815",
    hnPostTitle: "Show HN: Product Hunt \u2013 Hacker News for Products",
    dismissiveQuotes: [
      {
        text: "I looked at the page for like 30 seconds, thinking to myself, \u2018What is this?\u2019\u2026 literally incomprehensible to a typical reader.",
        author: "vitd",
      },
      {
        text: "The big interface problem with the website is that it makes the user work extremely hard to figure out what the hell each product is about.",
        author: "kmfrk",
      },
    ],
    editorialContext:
      "Commenters couldn\u2019t figure out what Product Hunt was after 30 seconds. It went on to become the definitive launchpad for tech products.",
    outcome:
      "Product Hunt became the go-to platform for launching tech products, was accepted into Y Combinator, raised from Andreessen Horowitz, and was acquired by AngelList.",
    pattern: "drive-by-dismissal",
  },
  {
    id: "segment",
    companyName: "Segment",
    year: 2012,
    hnThreadUrl: "https://news.ycombinator.com/item?id=4912076",
    hnPostTitle:
      "Show HN: Analytics.js \u2013 The analytics API you\u2019ve always wanted",
    dismissiveQuotes: [
      {
        text: "It includes code to load up various analytics tools even if you never use them.",
        author: "bluesmoon",
      },
      {
        text: "A Mixpanel-style event model doesn\u2019t cleanly map to Google Analytics, SnowPlow, or Omniture\u2019s event structures.",
        author: "alexdean",
      },
    ],
    editorialContext:
      "Commenters argued the abstraction layer couldn\u2019t work across fundamentally different analytics providers. The founders later wrote \u2018From Show HN to Series D.\u2019",
    outcome:
      "Segment was acquired by Twilio for $3.2 billion in 2020 \u2014 one of the largest acquisitions in developer tooling history.",
    pattern: "wrong-approach",
  },
  {
    id: "chatgpt",
    companyName: "ChatGPT",
    year: 2022,
    hnThreadUrl: "https://news.ycombinator.com/item?id=33804874",
    hnPostTitle: "OpenAI ChatGPT: Optimizing language models for dialogue",
    dismissiveQuotes: [
      {
        text: "This thing is a cute toy that doesn\u2019t understand reality.",
        author: "SequoiaHope",
      },
      {
        text: "Complete lack of humour or wit\u2026 mind-numbingly dull.",
        author: "jw1224",
      },
    ],
    editorialContext:
      "One commenter tested a word-counting edge case and declared the entire technology a toy. Posted the same day ChatGPT launched.",
    outcome:
      "ChatGPT became the fastest-growing consumer app in history \u2014 100 million users in 2 months. OpenAI reached a $157B valuation.",
    pattern: "nobody-wants-this",
  },
  {
    id: "claude-code",
    companyName: "Claude Code",
    year: 2025,
    hnThreadUrl: "https://news.ycombinator.com/item?id=43163011",
    hnPostTitle: "Claude 3.7 Sonnet and Claude Code",
    dismissiveQuotes: [
      {
        text: "I paid for it for a while, but I kept running out of usage limits right in the middle of work every day\u2026 I don\u2019t recommend using it in a professional setting.",
        author: "mianos",
      },
      {
        text: "If I have to be so cautious while using a tool might as well write the code myself.",
        author: "BeetleB",
      },
    ],
    editorialContext:
      "Critics focused on rate limits and cost. The thread got 2,127 points and 963 comments \u2014 a sign of just how much people actually cared.",
    outcome:
      "Claude Code hit $1B in annualized revenue within 6 months of GA \u2014 faster than ChatGPT. By early 2026 it surpassed $2.5B ARR.",
    pattern: "wrong-approach",
  },
  {
    id: "openclaw",
    companyName: "OpenClaw",
    year: 2026,
    hnThreadUrl: "https://news.ycombinator.com/item?id=46760237",
    hnPostTitle: "Clawdbot \u2013 open source personal AI assistant",
    dismissiveQuotes: [
      {
        text: "This is a user using a GitHub feature and claiming it\u2019s a clawdbot feature\u2026 No. This is a GitHub user on GitHub using a GitHub feature through the GitHub interface.",
        author: "kristopolous",
      },
      {
        text: "Memetics in action, lots of AI influencers make their living pumping the thing of the week.",
        author: "david_shi",
      },
    ],
    editorialContext:
      "The project hit 60,000 GitHub stars overnight. Critics called it hype \u2014 then Anthropic asked for a name change, and OpenAI acquired the creator.",
    outcome:
      "Creator Peter Steinberger joined OpenAI to work on AI agents. The project surpassed 145,000+ GitHub stars and spawned an entire ecosystem of derivative projects.",
    pattern: "hype-cycle",
  },
];
