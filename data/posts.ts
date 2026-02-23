import { Post } from "@/lib/types";

export const posts: Post[] = [
  {
    id: "dropbox",
    companyName: "Dropbox",
    month: "April",
    year: 2007,
    hnThreadUrl: "https://news.ycombinator.com/item?id=8863",
    hnPostTitle: "My YC app: Dropbox \u2013 Throw away your USB drive",
    dismissiveQuotes: [
      {
        text: "For a Linux user, you can already build such a system yourself quite trivially by getting an FTP account, mounting it locally with curlftpfs, and then using SVN or CVS on the mounted filesystem. From Windows or Mac, this FTP account could be accessed through built-in software.",
        author: "BrandonM",
      },
      {
        text: "It does not seem very \u2018viral\u2019 or income-generating.",
        author: "BrandonM",
      },
      {
        text: "It\u2019s pretty nice, and I was thinking to myself \u2014 hey cool, I could make an online backup of my code. Then it occurred to me \u2014 who the hell is this guy, and why should I trust my code to be on his server!?",
        author: "markovich",
      },
      {
        text: "It\u2019s a pretty crowded space. And XDrive gets you 5 GB for free, 50 GB for $9.95 a month. I think competitors can duplicate Dropbox\u2019s nice front end.",
        author: "jganetsk",
      },
    ],
    editorialContext:
      "The most famous bad take in HN history \u2014 the \u2018I could build this myself with existing unix tools\u2019 archetype.",
    outcome:
      "Dropbox IPO\u2019d in 2018 at a $12B valuation. Drew Houston later thanked BrandonM by name when Dropbox went public.",
    pattern: "build-it-yourself",
  },
  {
    id: "github",
    companyName: "GitHub",
    month: "April",
    year: 2008,
    hnThreadUrl: "https://news.ycombinator.com/item?id=160162",
    hnPostTitle: "GitHub now open to everyone. Here is the pricing.",
    dismissiveQuotes: [
      {
        text: "I still don\u2019t exactly understand what they are offering? Is there an advantage to using GitHub versus dumping some (yet to be created) virtual machine image on a cheap virtual server?",
        author: "Tichy",
      },
      {
        text: "Don\u2019t you think that git\u2019s advantage over SVN evaporates when there is only one user on a team? I run my private Subversion repository which I use for everything (not just code).",
        author: "tx",
      },
      {
        text: "Doesn\u2019t the pricing seem a bit too granular, though? I suspect the pricing categories will collapse into 3, maybe 4, levels eventually.",
        author: "revolvingcur",
      },
    ],
    editorialContext:
      "The opening comment literally couldn\u2019t see the point. GitHub was perceived as \u2018just a git host\u2019 \u2014 the social layer, the network effects, the open source ecosystem it would enable were all invisible.",
    outcome:
      "Microsoft acquired GitHub in 2018 for $7.5 billion. GitHub now hosts 100M+ developers and 420M+ repositories. It became the connective tissue of the entire software industry.",
    pattern: "build-it-yourself",
  },
  {
    id: "bitcoin",
    companyName: "Bitcoin",
    month: "June",
    year: 2009,
    hnThreadUrl: "https://news.ycombinator.com/item?id=599852",
    hnPostTitle:
      "Bitcoin: peer-to-peer network based anonymous digital currency",
    dismissiveQuotes: [
      {
        text: "Well this is an exceptionally cute idea, but there is absolutely no way that anyone is going to have any faith in this currency.",
        author: "jdoliner",
      },
      {
        text: "I\u2019m having trouble wrapping my head around the logistics of this...",
        author: "ram1024",
      },
    ],
    editorialContext:
      "The entire thread had just 3 comments and 5 upvotes. Three comments. For what would become a $2 trillion asset class.",
    outcome:
      "A single bitcoin went from fractions of a cent in 2009 to over $100,000 by 2024. Total crypto market cap exceeded $3 trillion.",
    pattern: "nobody-wants-this",
  },
  {
    id: "duckduckgo",
    companyName: "DuckDuckGo",
    month: "February",
    year: 2009,
    hnThreadUrl: "https://news.ycombinator.com/item?id=460877",
    hnPostTitle: "DuckDuckGo \u2013 a new search engine",
    dismissiveQuotes: [
      {
        text: "I can\u2019t ever see anyone saying \u2018just duckduckgo it.\u2019 The name just sounds silly. It makes me think it\u2019s a search engine for toddlers.",
        author: "mattmaroon",
      },
      {
        text: "DuckDuckGo is childish. I think that name will hold them back.",
        author: "mattmaroon",
      },
      {
        text: "How many people would go to Google and search for \u2018new search engine\u2019? DuckDuckGo is not even in the top 10 pages.",
        author: "vaksel",
      },
      {
        text: "I don\u2019t find their actual search engine very useful at all.",
        author: "petercooper",
      },
    ],
    editorialContext:
      "The name \u2014 the name! \u2014 was the biggest objection. Nobody could get past it. Meanwhile, Google itself was once mocked for being a misspelling of a number.",
    outcome:
      "DuckDuckGo grew to over 100 million daily search queries and became the default search engine in many privacy-focused browsers. Valued at over $600 million.",
    pattern: "drive-by-dismissal",
  },
  {
    id: "uber",
    companyName: "Uber",
    month: "September",
    year: 2010,
    hnThreadUrl: "https://news.ycombinator.com/item?id=1649136",
    hnPostTitle: "UberCab to disrupt the Taxi/Limo business",
    dismissiveQuotes: [
      {
        text: "Unfortunately taxis are a regulated industry in most major cities. The entrenched interests of the taxi companies are simply too big \u2014 and they have the political clout \u2014 to let this one slide under the radar.",
        author: "keltex",
      },
      {
        text: "If this service became at all popular, it is very likely that cities would immediately include \u2018mobile hailing\u2019 as also requiring a license.",
        author: "keltex",
      },
      {
        text: "Driving a gypsy cab (which is what UberCab is) is a dangerous business. A bad guy could simply place an order for an out-of-the-way alley or warehouse and know that the cabbie is going to be driving a really nice car.",
        author: "jtbigwoo",
      },
      {
        text: "The first time an UberCab driver gets into a wreck without insurance or licensing should be interesting.",
        author: "jonknee",
      },
      {
        text: "This drastically idealizes UberCab profiles. It gets a lot shadier when UberCab is one of 10 companies doing this, and when it starts to become worth it to game profiles.",
        author: "tptacek",
      },
    ],
    editorialContext:
      "Two months after this thread, Uber received an actual cease-and-desist from San Francisco \u2014 seemingly validating every skeptic. Travis Kalanick\u2019s response was to ignore it and expand to five more cities.",
    outcome:
      "Uber IPO\u2019d in 2019 and is now worth over $160 billion. NYC taxi medallions, which sold for $1.3M in 2014, collapsed to under $80K. The regulation that was supposed to stop Uber became its origin story.",
    pattern: "its-illegal",
  },
  {
    id: "airbnb",
    companyName: "Airbnb",
    month: "March",
    year: 2011,
    hnThreadUrl: "https://news.ycombinator.com/item?id=2337093",
    hnPostTitle: "Airbnb",
    dismissiveQuotes: [
      {
        text: "All my experiences with it as a user have been too unreliable to expect that it can scale to truly massive usability. I just don\u2019t see it swallowing up the whole hotel industry.",
        author: "quickpost",
      },
      {
        text: "This exchange cements my concerns about Airbnb only being huge if they can end-run the hotel regulatory system.",
        author: "nupark",
      },
      {
        text: "Airbnb is almost more like a dating service than a marketplace\u2026 a buyer and seller who prove compatible will never need to use the service again.",
        author: "CamperBob",
      },
      {
        text: "Airbnb is great unless you\u2019re the kind of person that doesn\u2019t trust strangers. Sadly, in the United States, the tendency to not trust strangers has been on the upswing for the last few decades.",
        author: "ryandvm",
      },
    ],
    editorialContext:
      "The top comment sided with the skeptics. Commenters argued Airbnb couldn\u2019t scale, couldn\u2019t survive regulation, and couldn\u2019t solve the fundamental trust problem of sleeping in a stranger\u2019s home.",
    outcome:
      "Airbnb IPO\u2019d in 2020 at a $100B+ valuation and is now worth over $80 billion. One of YC\u2019s most successful companies ever.",
    pattern: "its-illegal",
  },
  {
    id: "stripe",
    companyName: "Stripe",
    month: "October",
    year: 2011,
    hnThreadUrl: "https://news.ycombinator.com/item?id=3053883",
    hnPostTitle: "Stripe: instant payment processing for developers",
    dismissiveQuotes: [
      {
        text: "I really don\u2019t get or see how Stripe is different? Why would I use it instead of PayPal, 2CheckOut, e-junkie, etc?",
        author: "powertower",
      },
      {
        text: "I have no need of a fancy API either \u2014 PayPal lets me specify the basics and fire off a simple Post from my PHP code.",
        author: "david5342",
      },
      {
        text: "Stripe gets added to the bookmark collection for \u2018services to use should I ever have a problem with PayPal.\u2019",
        author: "dangrossman",
      },
      {
        text: "Pretty much every company in payment processing that does not use segregated merchant accounts sooner or later goes bust.",
        author: "0x12",
      },
    ],
    editorialContext:
      "The launch thread was full of commenters doing unfavorable price comparisons to PayPal. Posted by Patrick Collison himself.",
    outcome:
      "Stripe reached a $106B+ valuation and processed $1.4 trillion in payments in 2024. The \u2018fancy API\u2019 became the default payments infrastructure for the internet.",
    pattern: "build-it-yourself",
  },
  {
    id: "instacart",
    companyName: "Instacart",
    month: "August",
    year: 2012,
    hnThreadUrl: "https://news.ycombinator.com/item?id=4388793",
    hnPostTitle:
      "Instacart (YC S12) wants to be Amazon with 1 hour delivery",
    dismissiveQuotes: [
      {
        text: "A lot of really smart people have tried and failed to accomplish this sort of thing before. Amazon invested $60 million in Kozmo.com back in the late 90\u2019s, and they couldn\u2019t make it work.",
        author: "cs702",
      },
      {
        text: "I just do not see how this scales, as your marginal labor costs have got to be a very high portion of your revenues.",
        author: "LargeWu",
      },
      {
        text: "Having a delivery fee is a non-starter. \u2018I can get it in 2 days free with Amazon, or $4 today...\u2019 People will spend huge amounts of time and effort to not pay delivery charges.",
        author: "aidenn0",
      },
      {
        text: "I\u2019ve built a few real-time delivery businesses, and I\u2019m pessimistic. Real-time operations are costly to manage. Not being Amazon and not being able to control inventory hurts.",
        author: "jonmc12",
      },
    ],
    editorialContext:
      "The top comment pointed to the graveyard of companies that tried before. The entire thread read like a post-mortem for a company that hadn\u2019t even launched yet.",
    outcome:
      "Instacart IPO\u2019d in 2023 and is worth over $12 billion. COVID-19 turned grocery delivery from a novelty into a necessity.",
    pattern: "tried-before",
  },
  {
    id: "segment",
    companyName: "Segment",
    month: "November",
    year: 2012,
    hnThreadUrl: "https://news.ycombinator.com/item?id=4912076",
    hnPostTitle:
      "Show HN: Analytics.js \u2013 The analytics API you\u2019ve always wanted",
    dismissiveQuotes: [
      {
        text: "It includes code to load up various analytics tools even if you never use them. For example, if I only use GA and Mixpanel, do I really want to serve the bytes for all the other plugins?",
        author: "bluesmoon",
      },
      {
        text: "It\u2019s going to be really hard to make a generic, non-lossy mapping in a static, stateless JS script.",
        author: "alexdean",
      },
      {
        text: "I was hoping that this would be an open source version of Google Analytics.",
        author: "tarr11",
      },
      {
        text: "Google Analytics has a new API currently in beta that is also called analytics.js. This will be confusing.",
        author: "dudus",
      },
    ],
    editorialContext:
      "Commenters argued the abstraction layer couldn\u2019t work across fundamentally different analytics providers. The founders later wrote \u2018From Show HN to Series D.\u2019",
    outcome:
      "Segment was acquired by Twilio for $3.2 billion in 2020 \u2014 one of the largest acquisitions in developer tooling history.",
    pattern: "wrong-approach",
  },
  {
    id: "typescript",
    companyName: "TypeScript",
    month: "October",
    year: 2012,
    hnThreadUrl: "https://news.ycombinator.com/item?id=4597716",
    hnPostTitle: "TypeScript: JavaScript Development at Application Scale",
    dismissiveQuotes: [
      {
        text: "I think you\u2019d be a damned fool to invest in this technology for any serious project. Right now this is a toy.",
        author: "oinksoft",
      },
      {
        text: "I have more than a sneaking suspicion that this project is essentially a proof-of-concept, and that it is not heavily used at Microsoft.",
        author: "oinksoft",
      },
      {
        text: "Where\u2019s all that great refactoring support if everything is made dynamic and stringly typed?",
        author: "skrebbel",
      },
    ],
    editorialContext:
      "Microsoft + new language + compile-to-JS triggered every distrust reflex at once. The phrase \u2018damned fool\u2019 was deployed with full sincerity.",
    outcome:
      "TypeScript is now used by 80%+ of JavaScript developers and is the default language for virtually every major web framework. It\u2019s arguably the most impactful programming language of the 2010s.",
    pattern: "nobody-wants-this",
  },
  {
    id: "react",
    companyName: "React",
    month: "June",
    year: 2013,
    hnThreadUrl: "https://news.ycombinator.com/item?id=5789055",
    hnPostTitle: "React: Facebook\u2019s latest open source JavaScript library",
    dismissiveQuotes: [
      {
        text: "This is terrible. Did we really not learn anything from PHP days? Are we seriously going to mix markup and logic again?",
        author: "mavdi",
      },
      {
        text: "OMG, JSX\u2026 why? Just why?? Stop ruining JS people!",
        author: "lardissone",
      },
      {
        text: "The current fad of quasi-declarative web components looks like early Ext to me, and I think everyone knows how that turned out.",
        author: "smrtinsert",
      },
      {
        text: "Mixing JS and XML syntax, variables in docblocks, DOM components that are not really DOM components\u2026 Yikes. Thank you, but no, thank you.",
        author: "leecGoimik7",
      },
      {
        text: "Meh.",
        author: "achalv",
      },
    ],
    editorialContext:
      "The developer community overwhelmingly felt React violated fundamental software engineering principles. \u2018Separation of concerns\u2019 was the rallying cry against it.",
    outcome:
      "React became the most popular UI library in the world, used by over 20 million developers. In 2025, Meta donated React to the Linux Foundation.",
    pattern: "wrong-approach",
  },
  {
    id: "product-hunt",
    companyName: "Product Hunt",
    month: "February",
    year: 2014,
    hnThreadUrl: "https://news.ycombinator.com/item?id=7144815",
    hnPostTitle: "Show HN: Product Hunt \u2013 Hacker News for Products",
    dismissiveQuotes: [
      {
        text: "I mean this in the most helpful way possible: the interface is really, really bad at serving one of its basic, fundamental functions.",
        author: "kmfrk",
      },
      {
        text: "I can get everything I need on HN. Ultimately the best products will make the front page here, no need to look around.",
        author: "suyash",
      },
      {
        text: "I looked at the page for like 30 seconds, thinking to myself, \u2018What is this?\u2019\u2026 literally incomprehensible to a typical reader.",
        author: "vitd",
      },
      {
        text: "Here\u2019s a few things I couldn\u2019t easily figure out on your site: What is a best new product? How is this different than a linked list on a blog? Is this site for me or for someone else?",
        author: "gblanston",
      },
    ],
    editorialContext:
      "Commenters couldn\u2019t figure out what Product Hunt was after 30 seconds. It went on to become the definitive launchpad for tech products.",
    outcome:
      "Product Hunt became the go-to platform for launching tech products, was accepted into Y Combinator, raised from Andreessen Horowitz, and was acquired by AngelList.",
    pattern: "drive-by-dismissal",
  },
  {
    id: "airtable",
    companyName: "Airtable",
    month: "September",
    year: 2014,
    hnThreadUrl: "https://news.ycombinator.com/item?id=8373914",
    hnPostTitle:
      "Show HN: Airtable, a real-time spreadsheet-database hybrid",
    dismissiveQuotes: [
      {
        text: "No way this a spreadsheet. This is just a CRUD app with data displayed in rows. Zero chance of catching with spreadsheet users.",
        author: "fiatjaf",
      },
      {
        text: "The demand for an Access-like or \u2018better spreadsheet\u2019 product is all of the \u2018Oh yeah, it sounds cool\u2019 variety that never results in sales.",
        author: "sedachv",
      },
      {
        text: "Very difficult to get non technical peeps just suddenly ditch spreadsheets.",
        author: "livestyle",
      },
      {
        text: "Your app seems sluggish to scroll compared to Google Docs at that size, and the record density seems low.",
        author: "Erwin",
      },
    ],
    editorialContext:
      "Commenters predicted zero market demand. The \u2018better spreadsheet\u2019 category was seen as a graveyard of failed attempts.",
    outcome:
      "Airtable reached an $11 billion valuation and is used by over 300,000 organizations including Netflix, Shopify, and Nike. It created an entirely new product category.",
    pattern: "tried-before",
  },
  {
    id: "figma",
    companyName: "Figma",
    month: "November",
    year: 2015,
    hnThreadUrl: "https://news.ycombinator.com/item?id=10685407",
    hnPostTitle: "Launch of Figma, a collaborative interface design tool",
    dismissiveQuotes: [
      {
        text: "This service allows me to solve this communication problem by asking designers to learn this tool \u2014 which is new to them, requires time, and also isn\u2019t as powerful as Photoshop.",
        author: "golergka",
      },
      {
        text: "The main differentiator is \u2018we\u2019re making this run in the browser.\u2019 But nowhere does it explain why that\u2019s better for designers.",
        author: "abalone",
      },
      {
        text: "I just want a solid desktop app that isn\u2019t a web wrapper or lives in the browser. I can\u2019t stand web apps to be honest.",
        author: "EC1",
      },
      {
        text: "$18MM to spend only to see if you got it wrong is a rather interesting approach.",
        author: "salimmadjd",
      },
      {
        text: "MEH",
        author: "williamle8300",
      },
    ],
    editorialContext:
      "An entire comment. Just \u201cMEH.\u201d For a company that would be valued at $20 billion.",
    outcome:
      "Adobe tried to acquire Figma for $20 billion in 2022. Figma IPO\u2019d in 2025 at a $60B+ market cap.",
    pattern: "drive-by-dismissal",
  },
  {
    id: "tailwind",
    companyName: "Tailwind CSS",
    month: "July",
    year: 2020,
    hnThreadUrl: "https://news.ycombinator.com/item?id=24034453",
    hnPostTitle:
      "Tailwind CSS: From Side-Project Byproduct to Multi-Million Dollar Business",
    dismissiveQuotes: [
      {
        text: "I don\u2019t understand Tailwind. The entire point of CSS is to separate style from structure. How does applying composable utility classes differ from the old days of using HTML attributes for styling?",
        author: "_AzMoo",
      },
      {
        text: "This is essentially the same as inlining all of your styles in a style attribute on every element. I don\u2019t see how you would ever reasonably want to use this in a project.",
        author: "Etheryte",
      },
      {
        text: "Wasn\u2019t the whole point of CSS to separate presentation from data, and move away from things like <font color=...>? This is still considered bad practice, right?",
        author: "aspyct",
      },
      {
        text: "I don\u2019t get it either. Start putting CSS in the style attribute while you\u2019re at it.",
        author: "devmunchies",
      },
      {
        text: "The emperor has no clothes.",
        author: "encom",
      },
    ],
    editorialContext:
      "The exact same \u2018separation of concerns\u2019 argument was levelled against React in 2013. HN missed it twice.",
    outcome:
      "Tailwind CSS became the most-downloaded CSS framework in the world with 100M+ npm downloads per month. It\u2019s now the default styling choice for millions of developers, used by Shopify, OpenAI, Netflix, and GitHub itself.",
    pattern: "wrong-approach",
  },
  {
    id: "warp",
    companyName: "Warp",
    month: "April",
    year: 2022,
    hnThreadUrl: "https://news.ycombinator.com/item?id=30921231",
    hnPostTitle: "Show HN: Warp, a Rust-based terminal",
    dismissiveQuotes: [
      {
        text: "No one should use a for-profit terminal emulator, especially one created by a VC-backed startup, full stop.",
        author: "smt88",
      },
      {
        text: "Downloaded the image, installed it and was greeted by a mandatory login. Next step was uninstall and delete the dmg image. What a waste of time.",
        author: "lodovic",
      },
      {
        text: "You like people to contribute for free but refuse to give them an actual FOSS client. This is bound to fail.",
        author: "wildmanx",
      },
      {
        text: "Warp\u2019s VC decide they want an exit and Warp becomes 50usd/month SaaS. Your workflow, scripts, etc. are basically dead.",
        author: "wraptile",
      },
    ],
    editorialContext:
      "A VC-backed terminal? Requiring login? With telemetry? HN reached for the pitchforks. The thread read like a restraining order.",
    outcome:
      "Warp raised $78 million, grew to hundreds of thousands of users, and became the most popular modern terminal. Login removed, telemetry made optional \u2014 every criticism addressed.",
    pattern: "wrong-approach",
  },
  {
    id: "bun",
    companyName: "Bun",
    month: "July",
    year: 2022,
    hnThreadUrl: "https://news.ycombinator.com/item?id=31993429",
    hnPostTitle:
      "Bun: Fast JavaScript runtime, transpiler, and NPM client written in Zig",
    dismissiveQuotes: [
      {
        text: "I love these super-ambitious projects (see Parcel, Rome.js) because after several years they will still fail in many areas at once!",
        author: "wonderbore",
      },
      {
        text: "Moving to a reimplementation of core Node APIs is a terrifying prospect.",
        author: "julienb_sea",
      },
      {
        text: "Something has done a bit wrong if you\u2019re running any of those tools in production.",
        author: "onion2k",
      },
    ],
    editorialContext:
      "One commenter preemptively grouped Bun with Parcel and Rome.js \u2014 ambitious projects that burned out. 1,431 upvotes said otherwise.",
    outcome:
      "Bun 1.0 shipped 14 months later. It\u2019s now a legitimate Node.js alternative with 80,000+ GitHub stars, backed by $7M+ in funding, and used in production worldwide.",
    pattern: "tried-before",
  },
  {
    id: "chatgpt",
    companyName: "ChatGPT",
    month: "December",
    year: 2022,
    hnThreadUrl: "https://news.ycombinator.com/item?id=33804874",
    hnPostTitle: "OpenAI ChatGPT: Optimizing language models for dialogue",
    dismissiveQuotes: [
      {
        text: "I asked the chatbot broad questions and got answers that were straight-up false. These chatbots instill a delusion of consciousness in people. Every new technology has initially had cases where people could be deluded into thinking it was magic.",
        author: "joe_the_user",
      },
      {
        text: "The complete lack of humour or wit is what breaks the illusion for me. Its responses are extremely human-like, but mind-numbingly dull.",
        author: "jw1224",
      },
      {
        text: "What if the real result of \u2018AI safety\u2019 is making models like this boring as hell?",
        author: "slibhb",
      },
      {
        text: "It\u2019s interesting how ChatGPT feels much more filtered, reserved, and somehow judgmental than GPT-3.",
        author: "yawnxyz",
      },
    ],
    editorialContext:
      "Posted the same day ChatGPT launched. Commenters called it dull, filtered, and delusional \u2014 the same day the fastest-growing consumer app in history was born.",
    outcome:
      "ChatGPT became the fastest-growing consumer app in history \u2014 100 million users in 2 months. OpenAI reached a $157B valuation.",
    pattern: "nobody-wants-this",
  },
  {
    id: "cursor",
    companyName: "Cursor",
    month: "March",
    year: 2023,
    hnThreadUrl: "https://news.ycombinator.com/item?id=35285047",
    hnPostTitle: "Cursor: A code editor built for programming with AI",
    dismissiveQuotes: [
      {
        text: "There\u2019s nothing on the official website or GitHub that indicates what this software is, other than a cropped screenshot that looks like VSCode with a prompt pop up over it.",
        author: "yakaccount4",
      },
      {
        text: "So looking through the dependencies, it\u2019s CodeMirror with a VSCode theme on top of it, that includes Copilot. Why wouldn\u2019t I just use an existing editor with Copilot support?",
        author: "Deukhoofd",
      },
      {
        text: "AI is still in an info-phase Bitcoin was in before 2017. Expected to see an avalanche of fake/fraud/phony products based on it.",
        author: "wruza",
      },
    ],
    editorialContext:
      "The first Show HN got just 14 upvotes. Fourteen. The thread had 5 comments. One commenter couldn\u2019t tell if it was \u2018some sarcastic joke software.\u2019",
    outcome:
      "By 2025, 1 billion lines of code were being written on Cursor every day. Valued at $10 billion.",
    pattern: "hype-cycle",
  },
  {
    id: "windsurf",
    companyName: "Windsurf",
    month: "November",
    year: 2024,
    hnThreadUrl: "https://news.ycombinator.com/item?id=42127882",
    hnPostTitle: "Show HN: Windsurf \u2014 Agentic IDE",
    dismissiveQuotes: [
      {
        text: "While and after watching the video, I wasn\u2019t sure if the whole thing isn\u2019t just a parody of AI companies.",
        author: "j-pb",
      },
      {
        text: "It\u2019s a cool idea but I really don\u2019t see how this is any different from Cursor IDE.",
        author: "ned99",
      },
      {
        text: "Of course it\u2019s not going to be sustainable.",
        author: "agluszak",
      },
      {
        text: "Totally useless and I\u2019m sure I will not be subscribing to it at any cost. It gets easily confused and cannot troubleshoot or understand a bit of the environment.",
        author: "indianmouse",
      },
    ],
    editorialContext:
      "One commenter thought the entire launch video was a parody. Another gave it exactly three minutes before declaring judgment.",
    outcome:
      "Windsurf was acquired in a deal worth $2.4 billion, with its CEO and key employees joining Google.",
    pattern: "drive-by-dismissal",
  },
  {
    id: "claude-code",
    companyName: "Claude Code",
    month: "February",
    year: 2025,
    hnThreadUrl: "https://news.ycombinator.com/item?id=43163011",
    hnPostTitle: "Claude 3.7 Sonnet and Claude Code",
    dismissiveQuotes: [
      {
        text: "It\u2019s clear that progress is incremental at this point. Anthropic and OpenAI are bleeding money. It\u2019s unclear to me how they\u2019ll shift to making money while providing almost no enhanced value.",
        author: "mikae1",
      },
      {
        text: "I paid for it for a while, but I kept running out of usage limits right in the middle of work every day. I don\u2019t recommend using it in a professional setting.",
        author: "mianos",
      },
      {
        text: "It's not hard to make, it's a relatively simple CLI tool so there's no moat.",
        author: "sangnoir",
      },
      {
        text: "Watching Claude Code fumble around... all while burning actual dollars and context is the opposite of endearing.",
        author: "whywhywhywhy",
      },
      {
        text: "Tried claude code, and have an empty unresponsive terminal. Looks cool in the demo though, but not sure this is going to perform better than Cursor, and shipping this as an interactive CLI instead of an extension is... a choice.",
        author: "frankfrank13",
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
    month: "February",
    year: 2026,
    hnThreadUrl: "https://news.ycombinator.com/item?id=46760237",
    hnPostTitle: "Clawdbot \u2013 open source personal AI assistant",
    dismissiveQuotes: [
      {
        text: "This thing chews through tokens. I\u2019ve spent $300+ in the last 2 days doing fairly basic tasks. Also, it\u2019s terrifying \u2014 no directory sandboxing. It can modify anything on my machine.",
        author: "mgdev",
      },
      {
        text: "There are 300 open GitHub issues. One of them is a security report claiming hundreds of high-risk issues, including hard-coded, unencrypted OAuth credentials. I am disinclined to install this software.",
        author: "xtagon",
      },
      {
        text: "I just don\u2019t trust an AI enough to run unprompted with root access to a machine 24/7. Most of the cool stuff here you can also just vibecode in an afternoon using regular Claude Code.",
        author: "vanillameow",
      },
      {
        text: "Layers and layers of security practices over the past decade are just going out the window. It\u2019s quite wild to give root access to a process that has access to the internet without any guardrails.",
        author: "suriya-ganesh",
      },
      {
        text: "This is all starting to feel like the productivity theater rabbit hole people went down with Notion/Obsidian. It is clearly capable of doing a lot of stuff, but where is the real impact?",
        author: "blainstorming",
      },
    ],
    editorialContext:
      "The project hit 60,000 GitHub stars overnight. Critics called it hype \u2014 then Anthropic asked for a name change, and OpenAI acquired the creator.",
    outcome:
      "Creator Peter Steinberger joined OpenAI to work on AI agents. The project surpassed 145,000+ GitHub stars and spawned an entire ecosystem of derivative projects.",
    pattern: "hype-cycle",
  },
];
