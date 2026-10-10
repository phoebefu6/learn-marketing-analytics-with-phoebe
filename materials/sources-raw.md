# Sources (raw) - Marketing Analytics for Data Teams

All fetched 2026-10-10. Tiers:
- **read-at-source** - I read the page text myself at this URL.
- **reported** - not readable at source; the secondary source that reported it is named.
- **vendor** - a vendor's own explanation (read at source, but it is a company with a view).

Quoted phrases are verbatim and under 15 words. No number below is invented; if a number is
not in a quote or a named secondary source, it is not here.

---

## 1. Google Search Central - how Search works + SEO starter guide

### 1a. In-depth guide to how Google Search works
- URL: https://developers.google.com/search/docs/fundamentals/how-search-works
- Fetched: 2026-10-10
- Tier: read-at-source
- Facts:
  - Three stages: crawling, indexing, serving search results. Evidence: "Google Search works in three stages, and not all pages make it through each stage"
  - Crawling = automated programs download pages. Evidence: "automated programs called crawlers"
  - No guarantee, even if you follow the rules. Evidence: "Google doesn't guarantee that it will crawl, index, or serve your page"
  - No pay-to-rank. Evidence: "Google doesn't accept payment to crawl a site more frequently, or rank it higher."

### 1b. SEO Starter Guide
- URL: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Fetched: 2026-10-10
- Tier: read-at-source
- Facts:
  - Definition. Evidence: "SEO ... is about helping search engines understand your content"
  - No guaranteed inclusion. Evidence: "there's no guarantee that any particular site will be added to Google's index"
  - Lag is real and variable (hours to months), which matters for any before/after read. Evidence: "Some changes might take effect in a few hours, others could take several months."
  - Note: the starter guide itself does not mention payment; the no-payment line is from 1a.

---

## 2. Apple Mail Privacy Protection (MPP)

### 2a. Apple Newsroom, 7 June 2021 (WWDC 2021)
- URL: https://www.apple.com/newsroom/2021/06/apple-advances-its-privacy-leadership-with-ios-15-ipados-15-macos-monterey-and-watchos-8/
- Fetched: 2026-10-10
- Tier: read-at-source
- Facts:
  - Blocks tracking pixels. Evidence: "stops senders from using invisible pixels to collect information about the user"
  - Hides whether/when you opened. Evidence: "prevent senders from knowing when they open an email"
  - Masks IP address. Evidence: "masks their IP address so it can't be linked to other online activity"

### 2b. Apple legal privacy page - Mail Privacy Protection & Privacy
- URL: https://www.apple.com/legal/privacy/data/en/mail-privacy-protection/
- Fetched: 2026-10-10
- Tier: read-at-source
- Facts:
  - The mechanism that inflates opens: remote content is fetched whether or not the user engages. Evidence: "downloads remote content in the background by default"; "regardless of whether you engage with the email"
  - Relay design. Evidence: "routes all remote content downloaded by Mail through two separate relays"

### 2c. Apple Support (Mail for Mac guide) - Protect Mail Activity
- URL: https://support.apple.com/guide/mail/mlhlae4a4fe6/ (also the iPhone guide https://support.apple.com/guide/iphone/use-mail-privacy-protection-iphf084865c7/ios)
- Fetched: 2026-10-10
- Tier: reported (the support page body did not render for me; wording reported by the WebSearch snippet of that Apple page)
- Facts (reported): IP hidden from senders, and remote content "privately downloaded in the background when you receive a message" rather than when viewed. Use 2b for the read-at-source version of the same mechanism.

### 2d. Vendor explanation of inflated opens - Litmus
- URL: https://www.litmus.com/blog/apple-mail-privacy-protection-for-marketers
- Title: "Apple's Mail Privacy Protection Is Here: What It Actually Means for Email Marketers and What to Do Now" (Litmus blog, Magan Le; published 8 June 2021, updated 20 September 2021)
- Fetched: 2026-10-10
- Tier: vendor (read at source; Litmus sells email testing/analytics)
- Facts:
  - Apple pre-fetches images, including the tracking pixel. Evidence: "This caching process requires Apple to request the images"
  - So the ESP logs an open. Evidence: "which makes the ESP think the email has been opened."
  - Even without a human read. Evidence: "Even if readers don't actually open those emails."
  - Litmus 2021 forecast (a prediction, not a measurement): "an inflated Apple Mail open rate of around 75% at peak adoption"

---

## 3. Meta Ads Help Center - attribution settings, modeling

### 3a. About attribution models and attribution settings
- URL: https://www.facebook.com/business/help/460276478298895 (redirects to ?id=561906377587030)
- Fetched: 2026-10-10 (read in a browser; plain fetch returns an error page)
- Tier: read-at-source
- Facts:
  - Three models: standard, incremental, custom. Evidence: "Meta supports the following attribution models: standard or incremental." (custom is listed separately on the same page)
  - Current standard windows for website/in-store: click-through 1 or 7 days; view-through 1 day; engage-through 1 day. Evidence: "Counts events that occurred within 1 day or 7 days after a link click"; "Counts events that occurred within 1 day after an impression"
  - Do not compare across models. Evidence: "comparing across different attribution models will lead to inaccurate conclusions"
  - The setting also steers delivery, not just reporting. Evidence: "attribution model, which inform ad delivery and determine how conversions can be credited"
  - DEFAULT 7-day click / 1-day view: NOT stated on this page as of 2026-10-10. The page lists the options only.

### 3b. Default "7-day click, 1-day view"
- Tier: reported
- Secondary source: Jon Loomer Digital, "Meta Ads Attribution Setting: A Complete Guide" https://www.jonloomer.com/meta-ads-attribution-setting-a-complete-guide/ and Enrich Labs https://www.enrichlabs.ai/blog/meta-ads-attribution-settings-best-practices (both via WebSearch snippets, not read in full). Loomer reports the default moved from 28-day click / 1-day view to 7-day click / 1-day view in a January change around iOS 14. Enrich Labs reports that from 12 January 2026 the Ads Insights API stops returning 7-day view and 28-day view windows. Treat both as reported; verify in Ads Manager before teaching a default.

### 3c. About actions attributed to your ad
- URL: https://www.facebook.com/business/help/458681590974355
- Fetched: 2026-10-10
- Tier: read-at-source
- Facts:
  - Off-ad actions are credited inside a window. Evidence: "attributed back to your ad if they happened within a certain number of days"
  - Reporting follows the ad set setting. Evidence: "By default, we show these actions based on the attribution setting"

### 3d. Understand how results are sometimes calculated differently (statistical modelling)
- URL: https://www.facebook.com/business/help/1329822420714248
- Fetched: 2026-10-10
- Tier: read-at-source
- Facts:
  - Meta models missing conversions. Evidence: "we may use statistical modelling where conversion data may be missing or partial"
  - Why. Evidence: "likely due to industry or regulatory changes"
  - Without modelling, results are incomplete. Evidence: "In cases where statistical modelling is not used, results may not include all conversions."

### 3e. About incremental attribution
- URL: https://www.facebook.com/business/help/2366718460372682
- Fetched: 2026-10-10
- Tier: read-at-source
- Fact: model-predicted causality, not a holdout. Evidence: "uses machine learning models that predict whether a conversion is caused by an ad"

---

## 4. Google Ads Help - conversion modeling, data-driven attribution

### 4a. Your guide to conversion modeling
- URL: https://support.google.com/google-ads/answer/12443859?hl=en
- Fetched: 2026-10-10
- Tier: read-at-source
- Facts:
  - Definition. Evidence: "Conversion modeling uses observed conversions to predict unobserved conversions"
  - Modeled conversions go into reported totals. Evidence: "only when there's a high confidence that your ad resulted in conversions"
  - Why needed. Evidence: "for cases where cookies and identifiers weren't available"

### 4b. About modeled online conversions
- URL: https://support.google.com/google-ads/answer/10081327?hl=en
- Tier: reported (WebSearch snippet only; not fetched in full). Snippet says modeling quantifies conversions Google cannot observe directly and that modeled conversions feed reporting and bidding.

### 4c. About data-driven attribution
- URL: https://support.google.com/google-ads/answer/6394265?hl=en
- Fetched: 2026-10-10
- Tier: read-at-source
- Facts:
  - Definition. Evidence: "gives credit for conversions based on how people engage with your various ads"
  - It is the default. Evidence: "the default attribution model for most conversion actions"
  - Can match last click. Evidence: "the last click and data-driven attribution models can have the same results"

---

## 5. Binet & Field - 60:40 and the disagreement

### 5a. The Long and the Short of It (IPA, 2013) - IPA product page
- URL: https://ipa.co.uk/knowledge/publications-reports/the-long-and-the-short-of-it-balancing-short-and-long-term-marketing-strategies
- Fetched: 2026-10-10
- Tier: read-at-source for the page; the page does NOT state 60:40, the year, or the sample size. The report itself is paid and was not read.
- Fact: positioned as an update of their earlier work. Evidence: "update of Marketing in the Era of Accountability"

### 5b. The 60:40 figure and the 996-campaign sample
- Tier: reported
- Secondary source: Alex Murrell summary, https://www.alexmurrell.co.uk/summaries/les-binet-and-peter-field-the-long-and-the-short-of-it (read at source as a summary)
- Facts (reported):
  - Sample: "Databank of 996 campaigns" from IPA Effectiveness Awards "between 1980 and 2010"
  - Ratio: "the optimum balance between brand building and sales activation is around 60:40"

### 5c. IPA blog - 2018 revision to 62:38
- URL: https://ipa.co.uk/knowledge/ipa-blog/the-next-chapter-for-the-long-and-the-short-of-it/
- Author/date: Alison Hoad (Publicis Poke), 13 September 2023. IPA states blog views are the author's.
- Fetched: 2026-10-10
- Tier: read-at-source (opinion piece hosted by IPA; reports Binet and Field's numbers)
- Facts:
  - Original 2013 ratio. Evidence: "the optimum budget ratio was 60:40 between brand building and activation"
  - Effectiveness in Context (2018) gave 62:38 (stated on the page).
  - Data age caveat: based on data "from before the COVID period"

### 5d. Effectiveness in Context (Binet & Field) - category dependence
- URL: https://thinkbox.tv/research/reports/effectiveness-in-context-free-download (posted 24 October 2019)
- Fetched: 2026-10-10
- Tier: read-at-source for the landing page; the report PDF was not read
- Facts:
  - The ratio is meant to vary. Evidence: "according to market category, business model, brand life stage and size"
  - Evidence: "three tables of values to help advertisers calculate their optimum" ratio
- Category-specific splits (e.g. 74:26 for online-researched categories, 56:44 for new brands, 76:24 for for-profit 2004-16) appear only in secondary summaries (System1 blog https://system1group.com/blog/saved-the-baby-binet-and-field-on-effectiveness-in-context, via WebSearch snippet). Tier: reported. Do not teach these without reading the report.

### 5e. B2B: The 5 Principles of Growth in B2B Marketing (Binet & Field, LinkedIn B2B Institute)
- URL: https://news.linkedin.com/content/dam/me/news/en-us/linkedin-pressroom-page/LIN_B2B-Marketing-Report-Digital.pdf
- Fetched: 2026-10-10 (PDF text extracted and read)
- Tier: read-at-source
- Facts:
  - B2B optimum is lower on brand than B2C. Evidence: "around 46% of the budget is allocated to brand"; "around 54% allocated to activation"
  - Authors call it rough. Evidence: "this ratio should not be followed too precisely, rather it is a guiding principle"
  - And small-sample. Evidence: "Our small sample only allows us to give a rough estimate"
  - Data: figure source "IPA Databank, 1998-2018 B2B cases"
  - B2C restated as context-dependent. Evidence: "the optimal mix varies by category, price point, brand size"
  - Note an internal inconsistency worth teaching: a pull-quote in the same PDF says "a 50/50 split" while the body text says 46:54.

### 5f. Critique - Byron Sharp on 60:40
- URL: https://www.mi-3.com.au/23-08-2022/byron-sharp-skewers-binet-and-fields-6040-rule-smashes-attention-metrics-bvod-ad
- Outlet/author/date: Mi3, Brendan Coyne, 23 August 2022 (report of Sharp's talk at the Mi3-LinkedIn B2B Next Summit; series sponsored by LinkedIn)
- Fetched: 2026-10-10 (read in browser)
- Tier: read-at-source (a trade-press report of a talk, so Sharp's words are as reported by Mi3)
- Facts:
  - Verdict. Evidence: "[the 60:40 rule] really is terrible, very misleading"
  - Undefined terms. Evidence: "people have no idea what activations really are"
  - Data objection: award submissions. Evidence: "they analysed a very weird data set, which is award submissions"
  - Demand for a number. Evidence: "People wanted a number."
- Other side (reported, not read): The FS Forum https://thefsforum.co.uk/knowledge-hub/tactic/linkedin-row-breaks-out-over-binet-and-fields-6040-rule/ reports James Hurman (Tracksuit) defending the rule's direction, and Peter Field calling Sharp's comments "tacky self-publicising". Tier: reported.

### How to teach the disagreement (summary of the sources above)
- Pro: 60:40 (2013, B2C-heavy IPA awards data) -> 62:38 (2018) -> 46:54 for B2B (2019 era). Binet and Field themselves say it varies by category and is a guide.
- Con: Sharp says the base data (award entries) is biased and "activation" is undefined, so the ratio is unfalsifiable.
- Shared ground: both sides say brands need long-term brand building plus activation; the fight is over whether a single number is meaningful.

---

## 6. Byron Sharp - How Brands Grow (2010), mental and physical availability

- Ehrenberg-Bass Institute site: https://marketingscience.info/ (fetched 2026-10-10). Tier: read-at-source for the existence of the book and "How Brands Grow Live!" courses only; the home page carries no definition.
- Ehrenberg-Bass article "Easy to Find: Being Where B2B Buying Happens": https://marketingscience.info/news-and-insights/easy-to-find-being-where-b2b-buying-happens. Tier: reported (WebSearch snippet). Snippet: physical availability has three pillars - "Presence", "Prominence", "Portfolio".
- Sharp in his own words, via Mi3 (5f URL, read-at-source, 23 Aug 2022):
  - Evidence: "Growth and maintenance largely depends on mental and physical availability"
  - Physical availability = being "easy to buy"
  - Mental availability = buyers "being able to notice you or even consider you"
  - Both must overlap. Evidence: "if people know you but you're too difficult to buy"
- The book itself (Oxford University Press, 2010) was not read. Tier for the book: reported.

---

## 7. RACI - PMI

- URL: https://www.pmi.org/blog/stakeholder-management-raci
- Title/date: "Stakeholder Management and RACI: Who Does What, and Who Answers for It", PMI Blog, by Project Management Institute, 29 July 2026
- Fetched: 2026-10-10 (read in browser; plain fetch returned 403)
- Tier: read-at-source (PMI's own blog; NOT the PMBOK Guide text)
- Facts:
  - The four roles. Evidence: "Responsible, Accountable, Consulted, Informed"
  - The rule. Evidence: "every task has exactly one Accountable person."
  - Responsible can be many. Evidence: "There may be multiple Responsible parties."
  - Accountable defined. Evidence: "The single person who owns the outcome and answers for it."
  - Consulted = input sought before work completes; Informed = kept up to date after.
- PMI Lexicon of Project Management Terms (v5.0, Jan 2026) https://www.pmi.org/-/media/pmi/documents/registered/pdf/pmbok-standards/pmi-lexicon-pm-terms.pdf - requires PMI login; not read. Tier: reported (WebSearch snippet: accountability "is an individual responsibility that is not shared").

---

## 8. Kohavi, Tang, Xu - Trustworthy Online Controlled Experiments (CUP, 2020)

- URL: https://www.cambridge.org/core/books/trustworthy-online-controlled-experiments/D97B26382EB0EB2DC2019A7A7B518F59
- DOI: 10.1017/9781108653985 ; paperback ISBN 9781108724265
- Fetched: 2026-10-10
- Tier: read-at-source for the publisher description and table of contents; the chapters were not read
- Facts:
  - Core line. Evidence: "Getting numbers is easy; getting numbers you can trust is hard."
  - Scale of experience. Evidence: "companies that each run more than 20,000 controlled experiments a year"
  - Authors listed as Ron Kohavi (Microsoft), Diane Tang (Google), Ya Xu (LinkedIn); published 13 March 2020 (online/hardback), 2 April 2020 (paperback)
  - Relevant chapters (from the contents): 10 Complementary Techniques; 11 Observational Causal Studies; 14 Choosing a Randomization Unit; 15 Ramping Experiment Exposure
- Holdouts specifically: chapter 23 "Measuring Long-Term Treatment Effects" (Part V) is listed by Cambridge (WebSearch snippet; chapter page returned an error). Its treatment of holdback/holdout groups was NOT read. Tier: reported. Do not quote the book on holdouts until the chapter is read.

---

## 9. Cassie Kozyrkov

### 9a. Article by her
- Title: "What Great Data Analysts Do - and Why Every Organization Needs Them"
- Outlet/year: Harvard Business Review, 4 December 2018
- URL: https://hbr.org/2018/12/what-great-data-analysts-do-and-why-every-organization-needs-them
- Fetched: 2026-10-10
- Tier: read-at-source for the opening only (rest is behind the HBR meter)
- Paraphrase: she argues the field over-prizes the "full-stack" unicorn and asks which of analytics, statistics and ML deserves the pedestal, making the case for analysts. Evidence: "a 'full-stack' data scientist has mastery of machine learning, statistics, and analytics."; "Which of those skills gets the pedestal?"
- Her detailed argument about analysts vs decision-makers was not visible; do not quote it.

### 9b. Interview (not authored by her)
- "The Science (and Art) of Making Good Decisions", Towards Data Science Author Spotlight, 23 August 2022: https://towardsdatascience.com/the-science-and-art-of-making-good-decisions-31e7ae2195d3/
- Tier: read-at-source (interview by TDS Editors)
- Evidence: "skilled decision-making is a must-have for effective data science."

---

## 10. Platform-run incrementality / lift (holdout-based)

### 10a. Meta - About Conversion Lift
- URL: https://www.facebook.com/business/help/221353413010930
- Fetched: 2026-10-10 (browser)
- Tier: read-at-source
- Facts:
  - Two randomized groups. Evidence: "Your control group: These are the people who don't see your ads."
  - Lift definition. Evidence: "Lift is the difference in conversions caused by the presence of your ads"
  - Method. Evidence: "Conversion Lift uses an intent-to-treat approach"
  - Eligibility guide: campaign in the past year with "a spend of USD 5,000 or more" and "a minimum of 500 conversions"
  - Cost. Evidence: "There's no additional cost for the test"
- Companion metric page https://www.facebook.com/business/help/706497096458016 (read-at-source): conversion lift is "the scaled difference between the number of conversions in the test group" and control; "This metric is estimated."

### 10b. Google Ads - About Conversion Lift
- URL: https://support.google.com/google-ads/answer/12003020?hl=en
- Fetched: 2026-10-10
- Tier: read-at-source
- Facts:
  - Measures conversions "directly driven by people seeing your ads"
  - Groups: "People who don't see your ads (control group)"
  - Lift. Evidence: "The difference in conversions between these 2 groups will tell you the" lift
  - Access limited. Evidence: "Conversion Lift isn't available for all Google Ads accounts."

### 10c. Google Ads - Comparing lift types
- URL: https://support.google.com/google-ads/answer/14097991?hl=en
- Fetched: 2026-10-10
- Tier: read-at-source
- Facts:
  - Users-based vs geography-based split. Evidence: "a regional-based group split"
  - Users-based caveat. Evidence: "relies mostly on opt-in traffic"
  - Shared holdback. Evidence: "The same holdback group is used for all users-based lift types."
- Reported only (WebSearch snippets of support.google.com/google-ads/answer/12005564 and 14102450, not fetched): user-based lift needs 1,000 observed conversions and a USD 5,000 minimum budget; holdouts up to 50 percent; Conversion Lift ignores standard attribution settings. Verify before quoting.

---

## Unreachable or not read (summary)
- Apple Support MPP guide body (2c) - did not render; used Apple legal page instead.
- Meta default 7-day click / 1-day view - not on Meta's current page; reported via Jon Loomer.
- The Long and the Short of It report text and Effectiveness in Context report text - paid/not read; numbers via IPA blog, Alex Murrell, System1.
- How Brands Grow book - not read; Sharp's definitions via Mi3 talk report.
- PMBOK Guide / PMI Lexicon - login required; PMI blog used.
- Kohavi chapter 23 on long-term effects / holdouts - chapter page errored; title only.
- Kozyrkov HBR full text - metered; opening only.
