import type { Post } from "@/lib/types";

export const posts: Post[] = [
  {
    id: "dropbox",
    companyName: "Dropbox",
    month: "April",
    year: 2007,
    hnThreadUrl: "https://news.ycombinator.com/item?id=8863",
    hnPostTitle: "My YC app: Dropbox - Throw away your USB drive",
    editorialContext:
      "Drew Houston shared Dropbox as his Y Combinator application. The discussion compared effortless file sync with tools that technical users already had.",
    outcome:
      "Dropbox went public in March 2018. File sync became a business used by individuals and teams.",
    category: "Everyday life",
    coverColor: "#294f70",
    coverTitle: "The cloud in a box",
    description: "A USB drive you could never leave at home.",
    nuance:
      "The famous FTP comment was about a YC application, and specifically Linux users. HN moderator dang later explained that its author was trying to help. Trust and competition were reasonable concerns.",
    outcomeSource: {
      label: "Dropbox IPO announcement",
      url: "https://investors.dropbox.com/news-releases/news-release-details/dropbox-announces-pricing-initial-public-offering",
      date: "March 2018",
    },
    contextSource: {
      label: "Read dang’s explanation",
      url: "https://news.ycombinator.com/item?id=27067281",
    },
    discussionDate: "2007-04-04",
    quotes: [
      {
        text: "For a Linux user, you can already build such a system yourself quite trivially by getting an FTP account, mounting it locally with curlftpfs, and then using SVN or CVS on the mounted filesystem.",
        author: "BrandonM",
        url: "https://news.ycombinator.com/item?id=9224",
      },
      {
        text: "who the hell is this guy, and why should I trust my code to be on his server!?",
        author: "markovich",
        url: "https://news.ycombinator.com/item?id=8887",
      },
    ],
  },
  {
    id: "github",
    companyName: "GitHub",
    month: "April",
    year: 2008,
    hnThreadUrl: "https://news.ycombinator.com/item?id=160162",
    hnPostTitle: "GitHub now open to everyone. Here is the pricing.",
    editorialContext:
      "GitHub opened its doors in 2008. Some commenters wanted to understand what a hosted service offered over a server they controlled.",
    outcome:
      "Microsoft completed its $7.5 billion acquisition of GitHub in October 2018.",
    category: "Developer tools",
    coverColor: "#574469",
    coverTitle: "A home for code",
    description: "What if the repository was also a meeting place?",
    nuance:
      "Self-hosting remains a valid choice. Questions about pricing and a solo developer’s needs are different from predicting that collaboration has no value.",
    outcomeSource: {
      label: "Microsoft acquisition announcement",
      url: "https://blogs.microsoft.com/blog/2018/10/26/microsoft-completes-github-acquisition/",
      date: "October 2018",
    },
    discussionDate: "2008-04-10",
    quotes: [
      {
        text: "I still don't exactly understand what they are offering?",
        author: "Tichy",
        url: "https://news.ycombinator.com/item?id=160250",
      },
      {
        text: "Doesn't the pricing seem a bit too granular, though? I suspect the pricing categories will collapse into 3, maybe 4, levels eventually.",
        author: "revolvingcur",
        url: "https://news.ycombinator.com/item?id=160296",
      },
    ],
  },
  {
    id: "duckduckgo",
    companyName: "DuckDuckGo",
    month: "February",
    year: 2009,
    hnThreadUrl: "https://news.ycombinator.com/item?id=460877",
    hnPostTitle: 'DuckDuckGo is top result for "new search engine"',
    editorialContext:
      "In 2009, commenters questioned DuckDuckGo’s name, discoverability, and search quality. Those were three different objections.",
    outcome:
      "DuckDuckGo developed from a search engine into a privacy-focused search and browser company.",
    category: "Everyday life",
    coverColor: "#ac593b",
    coverTitle: "A different way to search",
    description: "A little duck in a very big pond.",
    nuance:
      "Peter Cooper, quoted here, returned to our launch discussion to explain that his 2009 criticism described the product then. He welcomed its later improvement.",
    outcomeSource: {
      label: "DuckDuckGo’s history",
      url: "https://duckduckgo.com/about",
      date: "Source checked September 2026",
    },
    contextSource: {
      label: "Peter Cooper’s follow-up",
      url: "https://news.ycombinator.com/item?id=47120188",
    },
    discussionDate: "2009-02-01",
    quotes: [
      {
        text: "This site is going to have to change it's name to get to the next level. I can't ever see anyone saying \"just duckduckgo it\".",
        author: "mattmaroon",
        url: "https://news.ycombinator.com/item?id=460956",
      },
      {
        text: "Sadly I don't find their actual search engine very useful at all, but the widget is excellent!",
        author: "petercooper",
        url: "https://news.ycombinator.com/item?id=461089",
      },
    ],
  },
  {
    id: "bitcoin",
    companyName: "Bitcoin",
    month: "May",
    year: 2009,
    hnThreadUrl: "https://news.ycombinator.com/item?id=599852",
    hnPostTitle:
      "Bitcoin: peer-to-peer network based anonymous digital currency",
    editorialContext:
      "An early HN submission introduced a peer-to-peer currency. The small discussion raised the most basic question: why would anyone trust it?",
    outcome:
      "Bitcoin continued as an open-source network. Its design and software remain publicly available.",
    category: "Everyday life",
    coverColor: "#a65c31",
    coverTitle: "In code we trust",
    description: "An experiment in money without a central issuer.",
    nuance:
      "Adoption does not settle questions about volatility, energy use, or usefulness. This is a story about an experiment persisting.",
    outcomeSource: {
      label: "Bitcoin project documentation",
      url: "https://bitcoin.org/en/how-it-works",
      date: "Source checked September 2026",
    },
    discussionDate: "2009-05-08",
    quotes: [
      {
        text: "Well this is an exceptionally cute idea, but there is absolutely no way that anyone is going to have any faith in this currency.",
        author: "jdoliner",
        url: "https://news.ycombinator.com/item?id=600813",
      },
      {
        text: "i'm having trouble wrapping my head around the logistics of this...",
        author: "ram1024",
        url: "https://news.ycombinator.com/item?id=599936",
      },
    ],
  },
  {
    id: "uber",
    companyName: "Uber",
    month: "August",
    year: 2010,
    hnThreadUrl: "https://news.ycombinator.com/item?id=1649136",
    hnPostTitle: "UberCab to disrupt the Taxi/Limo business",
    editorialContext:
      "The UberCab discussion focused on taxi licensing, passenger safety, and the risks of matching strangers through an app.",
    outcome: "Uber became a public company in May 2019.",
    category: "Everyday life",
    coverColor: "#393e3d",
    coverTitle: "A ride, reimagined",
    description: "A button, a car, and a city full of questions.",
    nuance:
      "Regulatory and safety concerns were substantive. A company growing does not make its social costs disappear or prove every critic mistaken.",
    outcomeSource: {
      label: "Uber IPO announcement",
      url: "https://investor.uber.com/news-events/news/press-release-details/2019/Uber-Announces-Pricing-of-Initial-Public-Offering/default.aspx",
      date: "May 2019",
    },
    discussionDate: "2010-08-31",
    quotes: [
      {
        text: "The entrenched interests of the taxi companies are simply too big (and they have the political clout) to let this one slide under the radar.",
        author: "keltex",
        url: "https://news.ycombinator.com/item?id=1649335",
      },
      {
        text: "The first time an UberCab driver gets into a wreck without insurance or licensing should be interesting.",
        author: "jonknee",
        url: "https://news.ycombinator.com/item?id=1650207",
      },
    ],
  },
  {
    id: "airbnb",
    companyName: "Airbnb",
    month: "March",
    year: 2011,
    hnThreadUrl: "https://news.ycombinator.com/item?id=2337093",
    hnPostTitle: "Subject: Airbnb",
    editorialContext:
      "Commenters asked whether home-sharing could scale when reliability and trust varied from one host to the next.",
    outcome: "Airbnb went public in December 2020.",
    category: "Everyday life",
    coverColor: "#9e4b4a",
    coverTitle: "A stranger’s spare room",
    description: "The hard part was never just finding a bed.",
    nuance:
      "Trust, local housing supply, and regulation remain separate questions from business growth. Airbnb did not need to replace every hotel to find a market.",
    outcomeSource: {
      label: "Airbnb IPO announcement",
      url: "https://investors.airbnb.com/press-releases/news-details/2020/Airbnb-Announces-Pricing-of-Initial-Public-Offering/default.aspx",
      date: "December 2020",
    },
    discussionDate: "2011-03-17",
    quotes: [
      {
        text: "All my experiences with it as a user have been too unreliable to expect that it can scale to truly massive usability.",
        author: "quickpost",
        url: "https://news.ycombinator.com/item?id=2337356",
      },
      {
        text: "This exchange cements my concerns about AirBNB only being huge if they can end-run the hotel regulatory system.",
        author: "nupark",
        url: "https://news.ycombinator.com/item?id=2337954",
      },
    ],
  },
  {
    id: "stripe",
    companyName: "Stripe",
    month: "September",
    year: 2011,
    hnThreadUrl: "https://news.ycombinator.com/item?id=3053883",
    hnPostTitle: "Stripe: instant payment processing for developers",
    editorialContext:
      "Stripe’s launch invited comparisons with PayPal and other processors. Developers weighed API convenience against pricing and account structure.",
    outcome:
      "Stripe reported that businesses on its platform generated $1.9 trillion in total payment volume in 2025.",
    category: "Developer tools",
    coverColor: "#61517b",
    coverTitle: "Seven lines of possibility",
    description: "Making payments something a developer could love.",
    nuance:
      "Asking how a product differs from its competitors is useful feedback. Payment volume is not Stripe’s revenue or profit.",
    outcomeSource: {
      label: "Stripe’s 2025 annual update",
      url: "https://stripe.com/newsroom/news/stripe-2025-update",
      date: "February 2026",
    },
    discussionDate: "2011-09-29",
    quotes: [
      {
        text: "I really don't get or see how Stripe is different? Why would I use it instead of PayPal, 2CheckOut, e-junkie, etc?",
        author: "powertower",
        url: "https://news.ycombinator.com/item?id=3055084",
      },
      {
        text: "I have no need of a fancy API, either--PayPal lets me specify the basics and fire off a simple Post from my PHP code.",
        author: "david5342",
        url: "https://news.ycombinator.com/item?id=3054023",
      },
    ],
  },
  {
    id: "instacart",
    companyName: "Instacart",
    month: "August",
    year: 2012,
    hnThreadUrl: "https://news.ycombinator.com/item?id=4325317",
    hnPostTitle: "Instacart (YC S12) wants to be Amazon with 1 hour delivery",
    editorialContext:
      "Commenters remembered earlier delivery failures. They questioned labor costs, delivery fees, and the difficulty of real-time operations.",
    outcome: "Instacart priced its initial public offering in September 2023.",
    category: "Everyday life",
    coverColor: "#53694a",
    coverTitle: "This time, the groceries",
    description: "A familiar idea meets a different moment.",
    nuance:
      "The commenters hoped the service would succeed while questioning its economics. The operational questions did not vanish. An IPO does not mean every delivery business has a viable business model.",
    outcomeSource: {
      label: "Instacart IPO announcement",
      url: "https://company.instacart.com/pressreleases/instacart-announces-pricing-of-initial-public-offering",
      date: "September 2023",
    },
    discussionDate: "2012-08-01",
    quotes: [
      {
        author: "cs702",
        text: "That said, I can't help but wonder whether the company will find a business model with sustainable economics.",
        url: "https://news.ycombinator.com/item?id=4325726",
      },
      {
        author: "LargeWu",
        text: "I just do not see how this scales, as your marginal labor costs have got to be a very high portion of your revenues.",
        url: "https://news.ycombinator.com/item?id=4325930",
      },
    ],
  },
  {
    id: "typescript",
    companyName: "TypeScript",
    month: "October",
    year: 2012,
    hnThreadUrl: "https://news.ycombinator.com/item?id=4597716",
    hnPostTitle:
      "TypeScript: a language for application-scale JavaScript development",
    editorialContext:
      "The first TypeScript release was an early version of a new language. Commenters questioned its maturity and Microsoft’s approach.",
    outcome:
      "TypeScript became the most-used language on GitHub in August 2025, according to GitHub’s Octoverse report.",
    category: "Developer tools",
    coverColor: "#346481",
    coverTitle: "A little more certainty",
    description: "JavaScript, with a few things written down.",
    nuance:
      "The early language lacked features it later gained. GitHub activity is not a measurement of all JavaScript developers.",
    outcomeSource: {
      label: "GitHub Octoverse 2025",
      url: "https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/",
      date: "October 2025",
    },
    discussionDate: "2012-10-01",
    quotes: [
      {
        text: "I think you'd be a damned fool to invest in this technology for any serious project. Right now this is a toy.",
        author: "oinksoft",
        url: "https://news.ycombinator.com/item?id=4599183",
      },
      {
        text: "Where's all that great refactoring support if everything is made `dynamic` and stringly typed?",
        author: "skrebbel",
        url: "https://news.ycombinator.com/item?id=4598738",
      },
    ],
  },
  {
    id: "segment",
    companyName: "Segment",
    month: "December",
    year: 2012,
    hnThreadUrl: "https://news.ycombinator.com/item?id=4912076",
    hnPostTitle:
      "Show HN: Analytics.js – The analytics API you've always wanted",
    editorialContext:
      "Analytics.js offered one interface to several analytics services. The thread questioned payload size and whether different tools could share a useful abstraction.",
    outcome:
      "Twilio completed its acquisition of Segment in November 2020, in a transaction valued at approximately $3.2 billion.",
    category: "Developer tools",
    coverColor: "#3b7465",
    coverTitle: "One connection, many worlds",
    description: "A small abstraction with a much bigger future.",
    nuance:
      "A valuable business can still contain imperfect abstractions. The original technical questions deserve to be read on their own terms.",
    outcomeSource: {
      label: "Twilio acquisition announcement",
      url: "https://www.twilio.com/en-us/press/releases/twilio-completes-acquisition-segment-market-leading-customer-data-platform",
      date: "November 2020",
    },
    discussionDate: "2012-12-12",
    quotes: [
      {
        text: "I was hoping that this would be an open source version of Google Analytics.",
        author: "tarr11",
        url: "https://news.ycombinator.com/item?id=4912378",
      },
      {
        text: "Google Analytics has a new api currently in beta that is also called analytics.js. This will be confusing.",
        author: "dudus",
        url: "https://news.ycombinator.com/item?id=4912291",
      },
    ],
  },
  {
    id: "react",
    companyName: "React",
    month: "May",
    year: 2013,
    hnThreadUrl: "https://news.ycombinator.com/item?id=5789055",
    hnPostTitle: "React, a JavaScript library for building user interfaces",
    editorialContext:
      "React put markup and logic together in components. The discussion questioned whether that choice undermined separation of concerns.",
    outcome:
      "The React Foundation launched under the Linux Foundation in February 2026.",
    category: "Developer tools",
    coverColor: "#3f737b",
    coverTitle: "A different kind of composition",
    description: "An old argument about a new way to build.",
    nuance:
      "Component boundaries are one way to organize code. React’s adoption does not make other approaches invalid or erase the costs of its ecosystem.",
    outcomeSource: {
      label: "React Foundation announcement",
      url: "https://react.dev/blog/2026/02/24/the-react-foundation",
      date: "February 2026",
    },
    discussionDate: "2013-05-29",
    quotes: [
      {
        text: "did we really not learn anything from PHP days? Are we seriously going to mix markup and logic again?",
        author: "mavdi",
        url: "https://news.ycombinator.com/item?id=5791776",
      },
      {
        text: "OMG, JSX.. why? just why?? Stop ruining js people!",
        author: "lardissone",
        url: "https://news.ycombinator.com/item?id=5794696",
      },
    ],
  },
  {
    id: "product-hunt",
    companyName: "Product Hunt",
    month: "January",
    year: 2014,
    hnThreadUrl: "https://news.ycombinator.com/item?id=7144815",
    hnPostTitle: "Show HN: Product Hunt – Hacker News for Products",
    editorialContext:
      "Product Hunt’s early interface left some visitors unsure of its purpose. Others wondered why another discovery site was needed.",
    outcome: "Product Hunt joined AngelList in December 2016.",
    category: "Everyday life",
    coverColor: "#a2573e",
    coverTitle: "Something new, every day",
    description: "A place for people who like finding things first.",
    nuance:
      "Confusing onboarding was actionable feedback. A product can improve after criticism; its eventual audience does not make early usability problems imaginary.",
    outcomeSource: {
      label: "Product Hunt joins AngelList",
      url: "https://www.ryanhoover.me/post/product-hunt-angellist",
      date: "December 2016",
    },
    discussionDate: "2014-01-29",
    quotes: [
      {
        text: "I mean this in the most helpful way possible: the interface is really, really bad at serving one of its basic, fundamental functions.",
        author: "kmfrk",
        url: "https://news.ycombinator.com/item?id=7145432",
      },
      {
        text: "I can get everything I need on HN. Ultimately the best products will make the front page here, no need to look around.",
        author: "suyash",
        url: "https://news.ycombinator.com/item?id=7145378",
      },
    ],
  },
  {
    id: "airtable",
    companyName: "Airtable",
    month: "September",
    year: 2014,
    hnThreadUrl: "https://news.ycombinator.com/item?id=8373914",
    hnPostTitle: "Show HN: Airtable, a real-time spreadsheet-database hybrid",
    editorialContext:
      "Airtable proposed a spreadsheet-database hybrid. Commenters questioned demand and whether ordinary spreadsheet users would change their habits.",
    outcome:
      "Airtable reports that more than 450,000 organizations use its platform.",
    category: "Developer tools",
    coverColor: "#98763d",
    coverTitle: "Beyond the spreadsheet",
    description: "Rows and columns, with room for more.",
    nuance:
      "Company-reported adoption is not the same as paying customers. Performance and switching costs can matter even when a product finds an audience.",
    outcomeSource: {
      label: "Airtable newsroom",
      url: "https://www.airtable.com/newsroom",
      date: "Source checked September 2026",
    },
    discussionDate: "2014-09-26",
    quotes: [
      {
        text: "No way this a spreadsheet. This is just a CRUD app with data displayed in rows. Zero chance of catching with spreadsheet users.",
        author: "fiatjaf",
        url: "https://news.ycombinator.com/item?id=8376087",
      },
      {
        text: "Very difficult to get non technical peeps just suddenly ditch spreadsheets.",
        author: "livestyle",
        url: "https://news.ycombinator.com/item?id=8374678",
      },
    ],
  },
  {
    id: "figma",
    companyName: "Figma",
    month: "December",
    year: 2015,
    hnThreadUrl: "https://news.ycombinator.com/item?id=10685407",
    hnPostTitle: "Launch of Figma, a collaborative interface design tool",
    editorialContext:
      "Figma asked designers to work in a browser. The thread questioned performance, switching costs, and why the web was an advantage.",
    outcome:
      "Figma priced its IPO at $33 per share in July 2025. Adobe’s earlier proposed acquisition did not close.",
    category: "Developer tools",
    coverColor: "#80594d",
    coverTitle: "A canvas without walls",
    description: "Could the browser become the design studio?",
    nuance:
      "Desktop preferences and switching costs were real concerns. The proposed $20 billion Adobe deal should not be confused with a completed acquisition.",
    outcomeSource: {
      label: "Figma IPO announcement",
      url: "https://investor.figma.com/news-events/news/news-details/2025/Figma-Announces-Pricing-of-Initial-Public-Offering/default.aspx",
      date: "July 2025",
    },
    discussionDate: "2015-12-06",
    quotes: [
      {
        text: "The main differentiator and focus of the post is \"we're making this run in the browser\". But nowhere does it explain why that's better for designers.",
        author: "abalone",
        url: "https://news.ycombinator.com/item?id=10686302",
      },
      {
        text: "I just want a solid desktop app that isn't a web wrapper or lives in the browser. I can't stand web apps to be honest.",
        author: "EC1",
        url: "https://news.ycombinator.com/item?id=10685571",
      },
    ],
  },
  {
    id: "tailwind",
    companyName: "Tailwind CSS",
    month: "August",
    year: 2020,
    hnThreadUrl: "https://news.ycombinator.com/item?id=24031290",
    hnPostTitle:
      "Tailwind CSS: From Side-Project Byproduct to Multi-Million Dollar Business",
    editorialContext:
      "Tailwind’s utility classes reopened an old argument about where presentation belongs. The linked thread discussed the business as well as the approach.",
    outcome:
      "Tailwind continued developing its utility-first framework, including a ground-up v4 release in January 2025.",
    category: "Developer tools",
    coverColor: "#376f7d",
    coverTitle: "Style, outside the lines",
    description: "The separation-of-concerns debate gets a sequel.",
    nuance:
      "The first commenter later edited their comment to say they understood the approach better. Popularity cannot settle a question of maintainability; the trade-offs depend on the team and project.",
    outcomeSource: {
      label: "Tailwind CSS v4 announcement",
      url: "https://tailwindcss.com/blog/tailwindcss-v4",
      date: "January 2025",
    },
    discussionDate: "2020-08-02",
    quotes: [
      {
        text: "I don't understand tailwind. The entire point of CSS is to separate style from structure.",
        author: "_AzMoo",
        url: "https://news.ycombinator.com/item?id=24034453",
      },
      {
        text: "I don’t get it either. Start putting css in the style attribute while you’re at it.",
        author: "devmunchies",
        url: "https://news.ycombinator.com/item?id=24034492",
      },
    ],
  },
  {
    id: "synthesia",
    companyName: "Synthesia",
    discussionDate: "2021-05-29",
    month: "May",
    year: 2021,
    hnThreadUrl: "https://news.ycombinator.com/item?id=27328205",
    hnPostTitle: "Create AI videos by simply typing in text",
    editorialContext: "An early Synthesia discussion asked who would want to watch AI presenters. Other commenters saw uses in training, education, and marketing.",
    outcome: "Synthesia reported approximately $140 million in annual recurring revenue in February 2026.",
    category: "AI & agents",
    coverColor: "#566d78",
    coverTitle: "A presenter made of pixels",
    description: "A script, an avatar, and a question about who would watch.",
    nuance: "The 2021 discussion was mixed. Subscription revenue shows demand, but does not answer every objection to artificial presenters or make the original videos less uncanny.",
    outcomeSource: {
      label: "Synthesia’s revenue retrospective",
      url: "https://www.synthesia.io/post/how-we-scaled-our-billing-system-from-40m-to-140m-arr",
      date: "February 2026"
    },
    quotes: [
      {
        text: "Can you think of one good use for this product?",
        author: "question000",
        url: "https://news.ycombinator.com/item?id=27329887"
      }
    ]
  },
  {
    id: "runway",
    companyName: "Runway",
    discussionDate: "2021-07-07",
    month: "July",
    year: 2021,
    hnThreadUrl: "https://news.ycombinator.com/item?id=27766655",
    hnPostTitle: "Runway – Create impossible video",
    editorialContext: "A commenter with professional editing and VFX experience questioned whether Runway could earn a place beside established production tools.",
    outcome: "Runway’s later generative video tools were used to create stage visuals for Madonna’s 2023–24 Celebration Tour.",
    category: "AI & agents",
    coverColor: "#6c6554",
    coverTitle: "A place in the production",
    description: "An experiment in video finds its way onto a world stage.",
    nuance: "The 2021 criticism concerned the early editor’s scope and switching costs. The tour used later Gen-1 and Gen-2 tools. Professional use does not mean the original editor replaced established VFX software.",
    outcomeSource: {
      label: "Madonna’s tour content director on using Runway",
      url: "https://runway.com/customers/generating-new-worlds-for-madonnas-celebration-tour",
      date: "2023–24 tour"
    },
    quotes: [
      {
        text: "This will not get used among professionals.",
        author: "DoctorOW",
        url: "https://news.ycombinator.com/item?id=27768165"
      }
    ]
  },
  {
    id: "warp",
    companyName: "Warp",
    month: "April",
    year: 2022,
    hnThreadUrl: "https://news.ycombinator.com/item?id=30921231",
    hnPostTitle: "Show HN: Warp, a Rust-based terminal",
    editorialContext:
      "Warp’s launch prompted objections to mandatory login, telemetry, licensing, and venture funding for a terminal.",
    outcome:
      "Warp announced a $50 million Series B led by Sequoia in June 2023.",
    category: "Developer tools",
    coverColor: "#4e526f",
    coverTitle: "A new window to the terminal",
    description: "Even a command line can start an argument.",
    nuance:
      "Funding is not proof of profitability or a rebuttal to privacy concerns. This milestone says what was funded, not that every objection was resolved.",
    outcomeSource: {
      label: "Warp Series B announcement",
      url: "https://www.warp.dev/blog/warp-drive-series-b",
      date: "June 2023",
    },
    discussionDate: "2022-04-05",
    quotes: [
      {
        text: "No one should use a for-profit terminal emulator, especially one created by a VC-backed startup, full stop.",
        author: "smt88",
        url: "https://news.ycombinator.com/item?id=30934144",
      },
      {
        text: "downloaded the image, installed it and was greeted by a mandatory login. Next step was uninstall and delete the dmg image. What a waste of time.",
        author: "lodovic",
        url: "https://news.ycombinator.com/item?id=30941066",
      },
    ],
  },
  {
    id: "hugging-face",
    companyName: "Hugging Face",
    discussionDate: "2022-05-09",
    month: "May",
    year: 2022,
    hnThreadUrl: "https://news.ycombinator.com/item?id=31314026",
    hnPostTitle: "We raised $100M for open and collaborative machine learning",
    editorialContext: "Hugging Face’s Series C announcement prompted questions about how an open model hub could earn money. Some commenters saw hosting; others saw a valuable developer community.",
    outcome: "NVIDIA announced an agreement to acquire Hugging Face for $12.93 billion in September 2026. It reported more than 18 million people using the platform.",
    category: "AI & agents",
    coverColor: "#a47a37",
    coverTitle: "A home for open models",
    description: "Could hosting other people’s models become a lasting business?",
    nuance: "This was a funding discussion about an established company. The quoted commenter acknowledged the community’s value while questioning monetization. NVIDIA announced an acquisition agreement; a completed transaction is not established by that announcement.",
    outcomeSource: {
      label: "NVIDIA’s Hugging Face acquisition agreement",
      url: "https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/",
      date: "September 2026"
    },
    quotes: [
      {
        text: "Also, HF doesn't really have any technical moat. Other people research and train those models, they just provide the hosting.",
        author: "fxtentacle",
        url: "https://news.ycombinator.com/item?id=31317978"
      }
    ]
  },
  {
    id: "bun",
    companyName: "Bun",
    month: "July",
    year: 2022,
    hnThreadUrl: "https://news.ycombinator.com/item?id=31993429",
    hnPostTitle:
      "Bun: Fast JavaScript runtime, transpiler, and NPM client written in Zig",
    editorialContext:
      "Bun combined a runtime, package manager, and tooling. Commenters worried about ambition and compatibility with Node.js.",
    outcome: "Anthropic announced its acquisition of Bun in December 2025.",
    category: "Developer tools",
    coverColor: "#69583f",
    coverTitle: "A faster kind of bun",
    description: "How much JavaScript tooling fits in one toolkit?",
    nuance:
      "An acquisition does not prove complete compatibility. Teams still need to test their own applications before changing runtimes.",
    outcomeSource: {
      label: "Anthropic acquires Bun",
      url: "https://www.anthropic.com/news/anthropic-acquires-bun-as-claude-code-reaches-usd1b-milestone",
      date: "December 2025",
    },
    discussionDate: "2022-07-05",
    quotes: [
      {
        text: "I love these super-ambitious projects (see Parcel, Rome.js) because after several years they will still fail in many areas at once!",
        author: "wonderbore",
        url: "https://news.ycombinator.com/item?id=31998967",
      },
      {
        text: "moving to a reimplementation of core Node APIs is a terrifying prospect.",
        author: "julienb_sea",
        url: "https://news.ycombinator.com/item?id=31994101",
      },
    ],
  },
  {
    id: "chatgpt",
    companyName: "ChatGPT",
    month: "November",
    year: 2022,
    hnThreadUrl: "https://news.ycombinator.com/item?id=33804874",
    hnPostTitle: "ChatGPT: Optimizing language models for dialogue",
    editorialContext:
      "Early ChatGPT users found an engaging conversational interface alongside false answers and an uneven tone.",
    outcome:
      "In March 2026, OpenAI reported that ChatGPT had more than 900 million weekly active users.",
    category: "AI & agents",
    coverColor: "#426f61",
    coverTitle: "A conversation begins",
    description: "Fluent answers. Difficult questions.",
    nuance:
      "Fluency is not accuracy. Adoption is not evidence that a particular answer is reliable. The concerns about false answers deserve to be evaluated separately from audience size.",
    outcomeSource: {
      label: "OpenAI’s March 2026 update",
      url: "https://openai.com/index/accelerating-the-next-phase-ai/",
      date: "March 2026",
    },
    discussionDate: "2022-11-30",
    quotes: [
      {
        text: "The complete lack of humour or wit is what breaks the illusion for me. Its responses are extremely human-like, but mind-numbingly dull.",
        author: "jw1224",
        url: "https://news.ycombinator.com/item?id=33808898",
      },
      {
        text: "It's interesting how ChatGPT feels much more filtered, reserved, and somehow judgmental than GPT-3.",
        author: "yawnxyz",
        url: "https://news.ycombinator.com/item?id=33808731",
      },
    ],
  },
  {
    id: "cursor",
    companyName: "Cursor",
    month: "March",
    year: 2023,
    hnThreadUrl: "https://news.ycombinator.com/item?id=35285047",
    hnPostTitle: "Cursor: A code editor built for programming with AI",
    editorialContext:
      "Cursor brought AI into a code editor. Commenters asked what the product actually did and why they should use it instead of adding AI to an existing editor.",
    outcome:
      "In November 2025, Cursor announced a $2.3 billion Series D at a $29.3 billion post-money valuation.",
    category: "AI & agents",
    coverColor: "#4d4b46",
    coverTitle: "The editor writes back",
    description: "An assistant moves into the place where code lives.",
    nuance:
      "A financing valuation is not revenue, profit, or proof of lasting advantage. Reliability and vendor dependence still deserve scrutiny.",
    outcomeSource: {
      label: "Cursor Series D announcement",
      url: "https://cursor.com/blog/series-d",
      date: "November 2025",
    },
    discussionDate: "2023-03-24",
    quotes: [
      {
        text: "There's nothing on the official website or GitHub that indicates what this software is, other than a cropped screenshot that looks like vscode with a prompt pop up over it.",
        author: "yakaccount4",
        url: "https://news.ycombinator.com/item?id=35286151",
      },
      {
        text: "So looking through the dependencies, it's CodeMirror with a VsCode theme on top of it, that includes Copilot. Why wouldn't I just use an existing editor with Copilot support?",
        author: "Deukhoofd",
        url: "https://news.ycombinator.com/item?id=35286547",
      },
    ],
  },
  {
    id: "langchain",
    companyName: "LangChain",
    discussionDate: "2023-07-08",
    month: "July",
    year: 2023,
    hnThreadUrl: "https://news.ycombinator.com/item?id=36645575",
    hnPostTitle: "Langchain Is Pointless",
    editorialContext: "About nine months after LangChain’s first package commit, an HN discussion challenged its abstractions. Some developers preferred calling model APIs directly.",
    outcome: "In October 2025, LangChain reported that 35% of the Fortune 500 used its services. LangChain and LangGraph had a combined 90 million monthly downloads.",
    category: "AI & agents",
    coverColor: "#536c5f",
    coverTitle: "The chain that kept growing",
    description: "A library called pointless becomes an ecosystem for agents.",
    nuance: "LangChain expanded into LangGraph and LangSmith and rewrote its original package. Later adoption does not disprove criticism of the 2023 code. Download counts do not measure unique developers.",
    outcomeSource: {
      label: "LangChain’s platform and adoption announcement",
      url: "https://www.langchain.com/blog/series-b",
      date: "October 2025"
    },
    quotes: [
      {
        text: "Everyone was so hyped up by this useless thing that I thought I was going crazy.",
        author: "anonzzzies",
        url: "https://news.ycombinator.com/item?id=36652133"
      }
    ]
  },
  {
    id: "devin",
    companyName: "Devin",
    discussionDate: "2024-03-12",
    month: "March",
    year: 2024,
    hnThreadUrl: "https://news.ycombinator.com/item?id=39679787",
    hnPostTitle: "Devin: AI Software Engineer",
    editorialContext: "Devin’s launch drew a large debate about autonomous software engineering. Commenters questioned whether the agent could do useful work beyond its demonstration.",
    outcome: "Cognition reported that Devin reached $73 million in annual recurring revenue in June 2025, before it acquired Windsurf.",
    category: "AI & agents",
    coverColor: "#48677b",
    coverTitle: "An engineer of its own",
    description: "A coding agent launches into a debate about what it can do.",
    nuance: "The revenue figure is specific to Devin before the Windsurf acquisition. Commercial adoption does not establish how well the launch version performed or settle separate criticism of its demonstration.",
    outcomeSource: {
      label: "Cognition’s standalone Devin revenue milestone",
      url: "https://cognition.com/blog/funding-growth-and-the-next-frontier-of-ai-coding-agents",
      date: "September 2025"
    },
    quotes: [
      {
        text: "I guarantee this product actually sucks and is totally useless in practice.",
        author: "jackblemming",
        url: "https://news.ycombinator.com/item?id=39681576"
      }
    ]
  },
  {
    id: "suno",
    companyName: "Suno",
    discussionDate: "2024-03-18",
    month: "March",
    year: 2024,
    hnThreadUrl: "https://news.ycombinator.com/item?id=39746163",
    hnPostTitle: "Suno, an AI music generator",
    editorialContext: "Suno’s early discussion mixed enthusiasm with doubts about creative control and lasting interest. One commenter expected the novelty of generating songs to fade.",
    outcome: "Suno reported more than two million paid subscribers as of early 2026 and a $300 million annual revenue run rate.",
    category: "AI & agents",
    coverColor: "#895760",
    coverTitle: "A song from a sentence",
    description: "Would making music with a prompt remain more than a novelty?",
    nuance: "The full comment argues that music requires taste and ideas. Paid adoption shows demand, but does not settle artistic quality, copyright concerns, or long-term retention. Many early commenters were enthusiastic.",
    outcomeSource: {
      label: "Suno’s company subscriber and revenue figures",
      url: "https://about.suno.com/careers",
      date: "Source checked October 2026"
    },
    quotes: [
      {
        text: "after a while the novelty will wear off",
        author: "chasing",
        url: "https://news.ycombinator.com/item?id=39750611"
      }
    ]
  },
  {
    id: "lovable",
    companyName: "Lovable",
    discussionDate: "2024-08-28",
    month: "August",
    year: 2024,
    hnThreadUrl: "https://news.ycombinator.com/item?id=41380814",
    hnPostTitle: "Show HN: Claude Artifacts but creating real web apps",
    editorialContext: "The founders introduced gptengineer.app on HN before renaming it Lovable. Commenters questioned whether an AI app builder could move beyond basic applications.",
    outcome: "Lovable reported $200 million in annual recurring revenue in November 2025, with 100,000 new projects created daily.",
    category: "AI & agents",
    coverColor: "#96695c",
    coverTitle: "From a prompt to a product",
    description: "A builder for basic apps grows into a business of its own.",
    nuance: "The discussion concerned the August 2024 beta, then called gptengineer.app. Revenue establishes demand, but does not prove that the early version could build every complex application.",
    outcomeSource: {
      label: "Lovable’s first-year revenue milestone",
      url: "https://lovable.dev/blog/one-year-of-lovable",
      date: "November 2025"
    },
    contextSource: {
      label: "The founder’s Lovable launch and former product name",
      url: "https://news.ycombinator.com/item?id=42206666"
    },
    quotes: [
      {
        text: "This is good for like basic apps and stuff but nothing major beyond that",
        author: "ilrwbwrkhv",
        url: "https://news.ycombinator.com/item?id=41382639"
      }
    ]
  },
  {
    id: "notebooklm",
    companyName: "NotebookLM",
    discussionDate: "2024-09-30",
    month: "September",
    year: 2024,
    hnThreadUrl: "https://news.ycombinator.com/item?id=41693087",
    hnPostTitle: "NotebookLM's automatically generated podcasts are surprisingly effective",
    editorialContext: "NotebookLM’s new Audio Overviews drew praise and sharp dissent. Some commenters questioned whether a synthetic conversation could add value to the source material.",
    outcome: "Google reported more than 30 million people and 600,000 organizations using NotebookLM in July 2026, when it renamed the product Gemini Notebook.",
    category: "AI & agents",
    coverColor: "#655f83",
    coverTitle: "A conversation with your notes",
    description: "Research notes find a voice, and an audience.",
    nuance: "The thread’s title and many replies were positive. The quote disputes the value of synthetic discussion. The user figure covers the full product, while generated audio duration does not measure listening time.",
    outcomeSource: {
      label: "Google’s NotebookLM adoption and renaming announcement",
      url: "https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/",
      date: "July 2026"
    },
    contextSource: {
      label: "Google’s early Audio Overviews usage figures",
      url: "https://blog.google/innovation-and-ai/models-and-research/google-labs/notebooklm-new-features-december-2024/"
    },
    quotes: [
      {
        text: "completely and utterly worthless",
        author: "handelaar",
        url: "https://news.ycombinator.com/item?id=41697066"
      }
    ]
  },
  {
    id: "windsurf",
    companyName: "Windsurf",
    month: "November",
    year: 2024,
    hnThreadUrl: "https://news.ycombinator.com/item?id=42127882",
    hnPostTitle: "Show HN: Windsurf – Agentic IDE",
    editorialContext:
      "Windsurf entered a crowded field of AI coding tools. Its thread questioned differentiation and the durability of the business.",
    outcome:
      "Cognition announced an agreement to acquire Windsurf in July 2025 after some of its leadership and researchers moved to Google.",
    category: "AI & agents",
    coverColor: "#3e7773",
    coverTitle: "Following a new current",
    description: "A coding assistant, and a changing company.",
    nuance:
      "Google did not acquire the entire company. The team move and Cognition’s acquisition agreement were different events; the cited announcement gives no purchase price.",
    outcomeSource: {
      label: "Cognition acquisition announcement",
      url: "https://cognition.com/blog/windsurf",
      date: "July 2025",
    },
    discussionDate: "2024-11-13",
    quotes: [
      {
        text: "It's a cool idea but i really don't see how this is any diff from Cursor IDE.",
        author: "ned99",
        url: "https://news.ycombinator.com/item?id=42142586",
      },
      {
        text: "Of course it's not going to be sustainable.",
        author: "agluszak",
        url: "https://news.ycombinator.com/item?id=42142854",
      },
    ],
  },
  {
    id: "claude-code",
    companyName: "Claude Code",
    month: "February",
    year: 2025,
    hnThreadUrl: "https://news.ycombinator.com/item?id=43163011",
    hnPostTitle: "Claude 3.7 Sonnet and Claude Code",
    editorialContext:
      "Claude Code launched alongside Claude 3.7 Sonnet. Some commenters questioned the terminal interface and the cost of watching an agent work.",
    outcome:
      "Anthropic reported that Claude Code reached $1 billion in run-rate revenue six months after public availability.",
    category: "AI & agents",
    coverColor: "#aa6950",
    coverTitle: "A collaborator in the terminal",
    description: "An agent at the command line, with a meter running.",
    nuance:
      "Run-rate revenue is an annualized pace, not a year of booked revenue. Growth does not resolve an individual developer’s cost or reliability concerns.",
    outcomeSource: {
      label: "Anthropic’s Claude Code milestone",
      url: "https://www.anthropic.com/news/anthropic-acquires-bun-as-claude-code-reaches-usd1b-milestone",
      date: "December 2025",
    },
    discussionDate: "2025-02-24",
    quotes: [
      {
        text: "Tried claude code, and have an empty unresponsive terminal.",
        author: "frankfrank13",
        url: "https://news.ycombinator.com/item?id=43163319",
      },
      {
        text: "Watching Claude Code fumble around trying to edit text and double checking the hex output of a .cpp file and cd around a folder all while burning actual dollars and context is the opposite of endearing.",
        author: "whywhywhywhy",
        url: "https://news.ycombinator.com/item?id=43168115",
      },
    ],
  },
  {
    id: "openclaw",
    companyName: "OpenClaw",
    month: "January",
    year: 2026,
    hnThreadUrl: "https://news.ycombinator.com/item?id=46760237",
    hnPostTitle: "Clawdbot - open source personal AI assistant",
    editorialContext:
      "The OpenClaw discussion raised concrete concerns about permissions, credentials, token costs, and autonomous access to a computer.",
    outcome:
      "Creator Peter Steinberger announced in February 2026 that he was joining OpenAI and that OpenClaw would move to an independent foundation.",
    category: "AI & agents",
    coverColor: "#944b40",
    coverTitle: "An agent of its own",
    description: "What happens when an assistant can take action?",
    nuance:
      "Attention and GitHub stars do not establish safety. Security objections need technical answers. A founder joining a company is not an acquisition of the project.",
    outcomeSource: {
      label: "Peter Steinberger’s announcement",
      url: "https://steipete.me/posts/2026/openclaw",
      date: "February 2026",
    },
    discussionDate: "2026-01-26",
    quotes: [
      {
        text: "It's quite wild to give root access to a process that has access to the internet without any guardrails.",
        author: "suriya-ganesh",
        url: "https://news.ycombinator.com/item?id=46760878",
      },
      {
        text: "It is clearly capable of doing a lot of stuff, but where is the real impact?",
        author: "blainstorming",
        url: "https://news.ycombinator.com/item?id=46760574",
      },
    ],
  },
];
