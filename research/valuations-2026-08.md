# August 2026 valuation and outcome refresh

Research date: August 5, 2026, Pacific Time. This note audits the current claims in `data/posts.ts` and proposes source-grounded replacements. It is research only; it does not edit production code.

## Method and interpretation

- Public-company figures below are dated exchange snapshots, not evergreen valuations. The market caps are the official exchange values returned for the stated date; they can change intraday.
- Private-company figures are the latest company-announced financing, tender-offer, or transaction valuation located in a primary source. They are not public-market caps, and they should not be presented as inferred current values.
- A claim is marked “not responsibly refreshable” when I could not find a current company announcement, filing, official investor-relations release, or official exchange/market page that supports it.
- “Current” means current as of the cited snapshot or announcement date. Historical IPO and acquisition prices should stay explicitly historical.

## Executive summary

The current file still contains several old values and unsupported outcome formulations, and the public-market numbers need to match the official exchange snapshots below. In particular, the August 5 snapshots are approximately **$138.79B for Uber, $91.91B for Airbnb, $10.66B for Instacart, $14.87B for Figma, and $8.17B for Dropbox**. The source records are linked in the table that follows.

The strongest private-company updates are **OpenAI at an $852B post-money valuation**, **Stripe at a $159B tender-offer valuation**, and **Cursor/Anysphere at a $29.3B post-money valuation**. Airtable is different: its latest company-announced valuation located is **$5.77B post-money from its March 2021 Series E**, while its current official newsroom provides scale and funding figures but not a newer valuation.

Several outcome claims need wording corrections rather than new numbers: Adobe’s Figma deal terminated; Google did not acquire Windsurf; Anthropic’s Claude Code figures are run-rate revenue rather than a standalone valuation or necessarily ARR; React is now stewarded by the React Foundation; and OpenClaw moved to a foundation and remained independent after Peter Steinberger joined OpenAI.

## Official public-market snapshots

These are the latest official exchange snapshots retrieved for August 5, 2026. “Market cap” is the exchange-reported value, rounded only in the proposed copy.

| Company | Official snapshot | Proposed site value | Source |
| --- | --- | --- | --- |
| Uber (NYSE: UBER) | Last sale **$68.18**; market cap **$138,787,140,706**; timestamp **August 5, 2026, 7:00 PM ET** | “about **$138.8B** as of August 5, 2026” | [NYSE UBER quote data](https://www.nyse.com/api/nyseservice/v1/quotes?symbol=UBER) |
| Airbnb (Nasdaq: ABNB) | Last sale **$152.49** on August 5, 2026; market cap **$91,906,473,708** | “about **$91.9B** as of August 5, 2026” | [Nasdaq ABNB quote data](https://api.nasdaq.com/api/quote/ABNB/info?assetclass=stocks) and [Nasdaq ABNB summary](https://api.nasdaq.com/api/quote/ABNB/summary?assetclass=stocks) |
| Instacart (Nasdaq: CART) | Last sale **$45.35** on August 5, 2026; market cap **$10,658,602,065** | “about **$10.7B** as of August 5, 2026” | [Nasdaq CART quote data](https://api.nasdaq.com/api/quote/CART/info?assetclass=stocks) and [Nasdaq CART summary](https://api.nasdaq.com/api/quote/CART/summary?assetclass=stocks) |
| Figma (NYSE: FIG) | Last sale **$28.15**; market cap **$14,873,800,530**; timestamp **August 5, 2026, 7:00 PM ET** | “about **$14.9B** as of August 5, 2026” (or the simpler rounded “$15B”) | [NYSE FIG quote data](https://www.nyse.com/api/nyseservice/v1/quotes?symbol=FIG) |
| Dropbox (Nasdaq: DBX) | Last sale **$35.00** on August 5, 2026; market cap **$8,165,522,715** | “about **$8.2B** as of August 5, 2026” | [Nasdaq DBX quote data](https://api.nasdaq.com/api/quote/DBX/info?assetclass=stocks) and [Nasdaq DBX summary](https://api.nasdaq.com/api/quote/DBX/summary?assetclass=stocks) |

## Private-company valuation evidence

| Company | Latest primary-source evidence located | Correct framing |
| --- | --- | --- |
| OpenAI | OpenAI says its March 2026 funding round closed with **$122B in committed capital at an $852B post-money valuation**. The same announcement says ChatGPT had **more than 900M weekly active users**. | Keep the number, but call it a **private financing post-money valuation**, not a market cap. See [OpenAI’s March 31, 2026 announcement](https://openai.com/index/accelerating-the-next-phase-ai/). |
| Stripe | Stripe says its February 2026 tender offer valued the company at **$159B** and that businesses on Stripe generated **$1.9T in total volume in 2025**. | Keep the number, but call it a **tender-offer valuation**. See [Stripe’s 2025 update](https://stripe.com/in/newsroom/news/stripe-2025-update). |
| Cursor / Anysphere | Cursor says it raised a **$2.3B Series D at a $29.3B post-money valuation**, crossed **$1B in annualized revenue**, and had more than 300 people as of November 2025. | Keep the financing and revenue figures. The “1B lines of code every day” claim is not supported by a current primary source located in this pass and should be removed or separately sourced. See [Cursor’s Series D announcement](https://cursor.com/blog/series-d). |
| Airtable | Airtable’s official Series E announcement says **$270M at a $5.77B post-money valuation** in March 2021. Its current official newsroom key facts say **450,000+ organizations** and **$1.36B total funding to date**. | Do not present the current `$11B Series F pre-money` line as primary-source verified. The responsible replacement is: “Airtable reports 450,000+ organizations and $1.36B in total funding; its latest company-announced valuation located was $5.77B post-money in the 2021 Series E.” Current valuation is not responsibly refreshable from the official sources located. See [Airtable’s Series E announcement](https://www.airtable.com/newsroom/series-e-funding-announcement) and [Airtable’s newsroom key facts](https://www.airtable.com/newsroom). |
| Anthropic | Anthropic announced a **$65B Series H at a $965B post-money valuation** on May 28, 2026, and separately reported Claude Code run-rate revenue above **$2.5B** in February and **$47B** in May. | The $965B figure is Anthropic’s company-level private financing valuation, not Claude Code’s standalone value. Use it only as clearly separated company context. See [Anthropic’s Series H announcement](https://www.anthropic.com/news/series-h) and [its February 2026 funding announcement](https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation). |

## Claim-by-claim proposed replacements

### Dropbox — `data/posts.ts:31-32`

The official Dropbox IPO release says the company sold **36M shares at $21 per share** in March 2018 and began trading on Nasdaq as DBX. It does not state a `$12B` valuation in the release, so that number should be labeled as an inference or removed. A current replacement would be:

> Dropbox IPO-priced at $21 per share in March 2018. On August 5, 2026, Nasdaq showed DBX at $35.00 per share and a market cap of about $8.2B.

Sources: [Dropbox IPO pricing release](https://dropbox.gcs-web.com/news-releases/news-release-details/dropbox-announces-pricing-initial-public-offering), [Nasdaq DBX quote](https://api.nasdaq.com/api/quote/DBX/info?assetclass=stocks), and [Nasdaq DBX summary](https://api.nasdaq.com/api/quote/DBX/summary?assetclass=stocks).

The BrandonM/Drew Houston thank-you is a historical anecdote, not a current valuation claim; it does not need to be folded into the August market-data refresh.

### GitHub — `data/posts.ts:58-59`

The **$7.5B acquisition** is historical and supported by Microsoft’s announcement. GitHub’s current About page now says **180M+ developers**, **4M+ organizations**, and **420M+ repositories**. Proposed replacement:

> Microsoft acquired GitHub in 2018 for $7.5B. GitHub now reports 180M+ developers, 4M+ organizations, and 420M+ repositories.

Sources: [Microsoft’s acquisition announcement](https://news.microsoft.com/en-my/2018/06/05/microsoft-to-acquire-github-for-7-5-billion/) and [GitHub About](https://github.com/about/). GitHub is a Microsoft-owned subsidiary; no standalone current market cap is disclosed on the official pages located, so no current valuation should be invented.

### Bitcoin and crypto — `data/posts.ts:80-83`

The `$3T` total-crypto-market-cap line is not a current August 2026 snapshot. Coinbase’s official market-stats page showed **$2.15T total crypto market cap** and **BTC at $64,490.38** at **August 6, 2026, 2:26:34 AM UTC** (August 5 evening Pacific Time). Proposed replacement:

> Bitcoin grew from fractions of a cent in 2009 into a six-figure asset in the 2020s. As a live August 2026 snapshot, Coinbase showed BTC at $64,490.38 and total crypto market cap at $2.15T on August 5, 2026 Pacific Time.

Source: [Coinbase market stats](https://www.coinbase.com/market-stats). This is a Coinbase venue snapshot, not a claim that one universal index defines global crypto market cap. The historical “over $100,000 by 2024” statement can remain only if it is explicitly labeled historical rather than current.

### DuckDuckGo — `data/posts.ts:113-114`

DuckDuckGo’s current press page reports **3B monthly searches**, **9M monthly downloads**, and a team of **more than 335**. Its official EU Digital Services Act report gives an estimated **22.2M ± 1.6M monthly active recipients** for search as of June 30, 2026. Proposed replacement:

> DuckDuckGo reports 3B monthly searches, 9M monthly downloads, and a team of more than 335. Its EU DSA report estimated 22.2M monthly active search recipients as of June 30, 2026.

Sources: [DuckDuckGo press page](https://duckduckgo.com/press) and [DuckDuckGo EU regulatory reporting](https://duckduckgo.com/duckduckgo-help-pages/r-legal/regulatory-reporting). No current company-announced valuation was located, so the old `$600M+` style valuation should be removed or labeled as an unsourced historical estimate.

### Uber — `data/posts.ts:146-149`

The IPO history is best stated using Uber’s official **$45 per share** pricing announcement. The current `$141B` snapshot in the working tree is stale relative to the official NYSE record. Proposed replacement:

> Uber IPO-priced at $45 per share in 2019 and had a market cap of about $138.8B at the August 5, 2026 NYSE snapshot.

Sources: [Uber IPO pricing announcement](https://investor.uber.com/news-events/news/press-release-details/2019/Uber-Announces-Pricing-of-Initial-Public-Offering/default.aspx) and [NYSE UBER quote data](https://www.nyse.com/api/nyseservice/v1/quotes?symbol=UBER). The taxi-medallion comparison is historical context and should retain its dates if kept.

### Airbnb — `data/posts.ts:177-180`

Airbnb’s official IPO announcement says it priced at **$68 per share** in December 2020. The `$93B` current snapshot should be replaced with the official Nasdaq figure. Proposed replacement:

> Airbnb IPO-priced at $68 per share in 2020 and had a market cap of about $91.9B at the August 5, 2026 Nasdaq snapshot.

Sources: [Airbnb IPO pricing announcement](https://investors.airbnb.com/press-releases/news-details/2020/Airbnb-Announces-Pricing-of-Initial-Public-Offering/default.aspx), [Nasdaq ABNB quote](https://api.nasdaq.com/api/quote/ABNB/info?assetclass=stocks), and [Nasdaq ABNB summary](https://api.nasdaq.com/api/quote/ABNB/summary?assetclass=stocks). The phrase “$100B+ valuation” should be labeled as an inferred historical market value or replaced with the official IPO price.

### Stripe — `data/posts.ts:208-211`

The current line is substantially correct. Stripe’s own release describes the event as a **tender offer**, values Stripe at **$159B**, and reports **$1.9T total volume in 2025**. Proposed wording:

> In February 2026, Stripe announced a tender offer valuing the private company at $159B and reported $1.9T in total volume for 2025.

Source: [Stripe’s 2025 update](https://stripe.com/in/newsroom/news/stripe-2025-update). Keep “private-company tender-offer valuation” distinct from public market cap.

### Instacart — `data/posts.ts:240-243`

Instacart’s official IPO announcement says it priced at **$30 per share** in September 2023. The current `$11.5B` snapshot is above the official Nasdaq August 5 figure. Proposed replacement:

> Instacart IPO-priced at $30 per share in 2023 and had a market cap of about $10.7B at the August 5, 2026 Nasdaq snapshot.

Sources: [Instacart IPO pricing announcement](https://investors.instacart.com/news-releases/news-release-details/instacart-announces-pricing-initial-public-offering), [Nasdaq CART quote](https://api.nasdaq.com/api/quote/CART/info?assetclass=stocks), and [Nasdaq CART summary](https://api.nasdaq.com/api/quote/CART/summary?assetclass=stocks).

### TypeScript — `data/posts.ts:299-302`

The “80%+ of JavaScript developers” figure was not supported by a current official primary source located. GitHub’s official Octoverse report says TypeScript became the **most-used language on GitHub in August 2025**. Proposed replacement:

> TypeScript became the most-used language on GitHub in August 2025, according to GitHub’s Octoverse report.

Source: [GitHub Octoverse](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/). This is a GitHub activity metric, not a claim about every JavaScript developer or every framework.

### React — `data/posts.ts:334-337`

The current ownership sentence is wrong in its present-tense framing: React was not simply “donated” by Meta. The React Foundation launched under the Linux Foundation in February 2026, and the React site says **two million developers visit the React docs each month**. Proposed replacement:

> React is now stewarded by the independent React Foundation under the Linux Foundation. The React site says two million developers visit its docs each month.

Sources: [React Foundation announcement](https://react.dev/blog/2026/02/24/the-react-foundation) and [React homepage](https://react.dev/). The official sources located support “millions of developers” and the docs-visitor metric, not the current `$20M developers` wording.

### Airtable — `data/posts.ts:397-400`

The current scale and funding figures are supported by Airtable’s official newsroom, but the `$11B Series F pre-money` claim was not found in an official Airtable source during this pass. Proposed replacement:

> Airtable reports 450,000+ organizations and $1.36B in total funding. Its latest company-announced valuation located was $5.77B post-money in the March 2021 Series E; a current valuation is not responsibly refreshable from the official sources located.

Sources: [Airtable newsroom](https://www.airtable.com/newsroom) and [Airtable Series E announcement](https://www.airtable.com/newsroom/series-e-funding-announcement).

### Figma — `data/posts.ts:432-435`

Adobe announced an approximately **$20B** definitive agreement in September 2022, but both companies mutually terminated it in December 2023 after concluding there was no clear path to regulatory approval. Figma later IPO-priced at **$33 per share** in July 2025. The August 5, 2026 NYSE snapshot was **$28.15 per share and $14.87B market cap**. Proposed replacement:

> Adobe agreed to acquire Figma for approximately $20B in 2022, but the companies terminated the deal in December 2023. Figma priced its IPO at $33 per share in 2025 and had a market cap of about $14.9B at the August 5, 2026 NYSE snapshot.

Sources: [Adobe’s acquisition announcement](https://news.adobe.com/news/news-details/2022/adobe-to-acquire-figma), [termination announcement](https://news.adobe.com/news/news-details/2023/adobe-and-figma-mutually-agree-to-terminate-merger-agreement), [Figma IPO pricing announcement](https://investor.figma.com/news-events/news/news-details/2025/Figma-Announces-Pricing-of-Initial-Public-Offering/default.aspx), and [NYSE FIG quote data](https://www.nyse.com/api/nyseservice/v1/quotes?symbol=FIG). The `$20B` must not be presented as Figma’s realized valuation because the transaction did not close.

### Tailwind CSS — `data/posts.ts:468-471`

The official Tailwind blog’s latest release entry located is **Tailwind CSS v4.3**, published May 8, 2026. The official npm downloads endpoint recorded **489,798,560 package downloads from July 6 through August 4, 2026**. Package downloads are not unique users and do not prove that Tailwind is the most-downloaded or default CSS framework. Proposed replacement:

> Tailwind CSS reached v4.3 in May 2026 and recorded 489.8M npm package downloads in the July 6–August 4, 2026 window.

Sources: [Tailwind CSS blog](https://tailwindcss.com/blog) and [npm’s official Tailwind download endpoint](https://api.npmjs.org/downloads/point/last-month/tailwindcss). Remove “most-downloaded,” “default,” and “period” unless a primary source with a defined comparison is added.

### Warp — `data/posts.ts:499-502`

Warp’s official sources support a **$50M Series B led by Sequoia** in 2023 and say Warp was used by **nearly one million active developers** in April 2026. They do not disclose a current valuation. Proposed replacement:

> Warp raised a $50M Series B led by Sequoia in 2023. By April 2026, Warp said it was used by nearly one million active developers; no current valuation was disclosed in the official sources located.

Sources: [Warp’s Series B announcement](https://www.warp.dev/blog/warp-drive-series-b) and [Warp’s April 2026 open-source announcement](https://www.warp.dev/blog/warp-is-now-open-source). The $50M is funding, not a valuation, and the current “500,000 engineers” figure should be replaced.

### Bun — `data/posts.ts:527-530`

The current outcome is supported by Anthropic’s official announcement: Anthropic acquired Bun in December 2025, and Claude Code reached **$1B in run-rate revenue** six months after public availability. Proposed replacement:

> Bun was acquired by Anthropic in December 2025 to support Claude Code and Anthropic’s AI coding infrastructure. Anthropic said Claude Code reached $1B in run-rate revenue six months after public availability.

Source: [Anthropic’s Bun announcement](https://www.anthropic.com/news/anthropic-acquires-bun-as-claude-code-reaches-usd1b-milestone). The official announcement does not disclose a purchase price, so none should be inferred.

### OpenAI / ChatGPT — `data/posts.ts:558-561`

The current line is supported by OpenAI’s March 31, 2026 announcement: **$122B committed capital at an $852B post-money valuation**, and ChatGPT with **more than 900M weekly active users**. Proposed wording is mostly a label correction:

> In March 2026, OpenAI closed a funding round with $122B in committed capital at an $852B post-money valuation. OpenAI said ChatGPT had more than 900M weekly active users.

Source: [OpenAI’s March 31, 2026 announcement](https://openai.com/index/accelerating-the-next-phase-ai/). Call $852B a private financing valuation, not a public market cap.

### Cursor / Anysphere — `data/posts.ts:585-588`

Cursor’s official Series D post supports **$2.3B raised at a $29.3B post-money valuation** and **more than $1B in annualized revenue**. It does not support the current “1B lines of code every day” sentence in a primary source located during this pass. Proposed replacement:

> In November 2025, Anysphere raised a $2.3B Series D at a $29.3B post-money valuation, and Cursor said it had surpassed $1B in annualized revenue.

Source: [Cursor’s Series D announcement](https://cursor.com/blog/series-d). Keep the date and use “annualized revenue,” as the company does.

### Windsurf — `data/posts.ts:616-619`

The `$2.4B acquisition` claim should be removed. The official Windsurf/Devin announcement says Google entered an agreement under which Varun Mohan, Douglas Chen, and some R&D employees joined Google, while most of the team continued building Windsurf. Three days later, Cognition announced a definitive agreement to acquire Windsurf’s remaining IP, product, brand, business, and talent. Neither official announcement discloses a purchase price. Proposed replacement:

> Windsurf entered an agreement with Google that moved its CEO, cofounder, and some R&D employees to Google. Cognition later agreed to acquire Windsurf’s remaining business and talent; the official announcements did not disclose financial terms.

Sources: [Windsurf/Devin announcement](https://devin.ai/blog/windsurfs-next-stage) and [Cognition’s acquisition announcement](https://cognition.com/blog/windsurf). Do not describe this as a Google acquisition or attach the unverified `$2.4B` figure.

### Claude Code — `data/posts.ts:651-654`

Anthropic’s official sources support **$1B in run-rate revenue** six months after public availability and **more than $2.5B in run-rate revenue** by February 2026. The current “faster than ChatGPT” comparison is not supported by those announcements, and “ARR” should be changed to the company’s term, “run-rate revenue.” Proposed replacement:

> Claude Code reached $1B in run-rate revenue six months after public availability and surpassed $2.5B in run-rate revenue by February 2026.

Sources: [Anthropic’s Bun announcement](https://www.anthropic.com/news/anthropic-acquires-bun-as-claude-code-reaches-usd1b-milestone) and [Anthropic’s February 2026 funding announcement](https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation). Anthropic’s later $965B Series H valuation is company-level context, not Claude Code’s value; see [Series H](https://www.anthropic.com/news/series-h).

### OpenClaw — `data/posts.ts:686-689`

The “OpenAI acquired the creator” framing is incorrect. Peter Steinberger’s official post says he joined OpenAI, while OpenClaw would move to a foundation and remain open and independent. The official GitHub repository currently shows approximately **385K stars**; the GitHub API returned **385,259 stars** on August 5, 2026. Proposed replacement:

> Creator Peter Steinberger joined OpenAI to work on AI agents. OpenClaw moved to a foundation and stayed open and independent; its GitHub repository had about 385K stars on August 5, 2026.

Sources: [Peter Steinberger’s announcement](https://steipete.me/posts/2026/openclaw), [OpenClaw on GitHub](https://github.com/openclaw/openclaw), and [GitHub’s repository API](https://api.github.com/repos/openclaw/openclaw). GitHub stars are an audience/interest signal, not users, revenue, funding, or valuation. No acquisition price or current valuation was disclosed.

## Claims that do not need an August valuation refresh

The Segment acquisition amount (`data/posts.ts:272-275`) and Product Hunt acquisition outcome (`data/posts.ts:365-368`) are historical statements rather than current market-cap or private-valuation claims. They can remain in the historical narrative, subject to the project’s normal source-review standards. The current research scope does not propose changing them solely because the calendar moved to August 2026.

## Recommended editorial rules for the production update

1. Put an explicit “as of” date beside every public-company market cap.
2. Use “post-money valuation,” “tender-offer valuation,” or “acquisition price” precisely for private-company events; do not call any of them a market cap.
3. Keep historical IPO/acquisition values dated and label values inferred from share counts or trading prices as inferred.
4. Remove unsupported superlatives and metrics—especially “most popular,” “default,” “1B lines of code per day,” and “faster than ChatGPT”—unless a primary source with a clear definition is added.
5. Treat live crypto market cap and GitHub stars as dated snapshots, not durable outcomes.
