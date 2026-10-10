# Agent brief - shared by every fan-out page of learn-marketing-analytics-with-phoebe

Internal build document, filled from course-builder/references/agent-brief.template.md on
2026-10-10. Never link it from an audience page.

You are writing ONE static HTML session page. No servers, no npm. **If your target file already
exists on disk, do not write it; report that and stop.** Write the file, return its path and one
line of coverage. No HTML in your reply.

## Read first, in this order

1. The template page for YOUR track. Copy its structure, classes, SVG grammar and quiz markup
   EXACTLY, including how many options each question has (FOUR options, "A · ..." to "D · ..."):
   - Angles (a-pages): `/Users/phoebe.fu/Documents/claude_work/github_repo/learn-marketing-analytics-with-phoebe/courses/a1-how-marketers-think.html`
   - Partnership (p-pages): `/Users/phoebe.fu/Documents/claude_work/github_repo/learn-marketing-analytics-with-phoebe/courses/p1-in-their-shoes.html`
     (and the bench page p2 for the RACI rows: `/Users/phoebe.fu/Documents/claude_work/github_repo/learn-marketing-analytics-with-phoebe/courses/p2-the-ownership-map.html`)
2. The source map: every verified number, its evidence tier, per-session coverage, the seams, the
   bench canon (section 3) and the constructed Kettle & Co figures (section 9). Use ONLY its numbers;
   never invent a statistic; if a fact is missing, teach the uncertainty.
   `/Users/phoebe.fu/Documents/claude_work/github_repo/learn-marketing-analytics-with-phoebe/materials/official-course-map.md`
3. The stylesheet `:root` block for the palette tokens:
   `/Users/phoebe.fu/Documents/claude_work/github_repo/learn-marketing-analytics-with-phoebe/assets/style.css`

## Page skeleton (keep every component)

toolbar (crumb EXACTLY "Angles session N of 6" or "Partnership session N of 4" after the repo link,
#toggle-all, #zoom-toggle) · masthead (eyebrow "Learn Marketing Analytics with Phoebe · Angles
session N of 6" or "... · Partnership session N of 4", h1 with one `<span class="accent">`, .sub,
.chip-row with the level chip given in your outline, the audience chip "Data analysts and data
scientists who serve marketing, brand and BD", a second audience chip ("No code"), the time chip
"45 min", .agenda a1-a4 with flex weights) · main.wrap · section#intro (Part 0: kicker, .lede,
.legend pills exactly as the template, .callout.win "★ What you walk out with tonight.") · 3 Parts,
each `section.section#part-N` with section-kicker (klabel "Part N · covers ...", h2,
`.tag.concept "N min live"`), a `.lede`, ONE figure, `details.card` accordions (summary:
`.mode.live` or `.mode.self`, title, `.mini`, `.caret ▶`), at least one `.callout.example` with
`span.ex-pill` "Real world" on the page · section#demo-1 Build-along (kicker
`.tag.demo "★ 22 min · everyone works it through"`, .lede, ONE figure, `.steps > .step`, each with a
`.prompt-box.good` carrying a `span.label`; plain-text worksheets, no code) · section#exercise
Homework (ol, 4 items) · section#quiz (3 x `.quiz-q data-answer="0-based"`, `p.qtext`, FOUR
`button.qopt` "A · ...", `p.qwhy`; one `p.quiz-score` after the last; vary the correct letter) ·
section#official, h2 EXACTLY "What this session teaches, and where it came from",
`.covered > .covered-row` (pill solid ✓ / light ◐ + name + note), then the `.mono` line EXACTLY
"Every fact on this page, and its verification tier, is recorded in the course's source map." ·
section.cheat#cheatsheet (h3 "Angles session N cheat sheet <span>· pin this</span>" or
"Partnership session N cheat sheet ...", .grid-2 of six .cheat-item) · `.callout.next` with
`.nx-pill` "Next session" · footer.pagefoot · `<script src="../assets/app.js?v=1">`.

Head: the template's social meta block with this page's own title/description/url;
`<title>Angles session N · <h1 text> - learn marketing analytics with phoebe</title>` (or
Partnership); `<link rel="stylesheet" href="../assets/style.css?v=3">`. Nothing else external.

First `details.card` in the FIRST Part is `open`; no other. Sentence case headings. Warm
practitioner voice, concrete, never dry. Inside prompt-boxes escape `&` `<` `>`. 450 to 650 lines
is guidance about depth, never a target: never collapse whitespace, dissolve a list into a
paragraph, or drop a component to fit.

## Hard rules (a violation is rework)

- NEVER an em dash or en dash, anywhere (prose, code, aria-labels, comments). Hyphen only.
- No meta text: never "this course", "in this course", "the course teaches", "banned here". State
  the professional norm directly with its reason. The two exact estate phrases above are the only
  self-references; "Angles session 5" cross-references are fine.
- Attribution "by Phoebe Fu". Never "built with" a tool.
- Every number comes from the map or is labelled constructed. Kettle & Co numbers come ONLY from map
  section 9 (and the bench canon, section 3); say "constructed" next to them. For worksheets print
  "your numbers will differ", never invented outputs as if run.
- Contested or missing evidence: teach the disagreement; never resolve what the literature has not.
- Citations in the exact form of the map's appendix (section 7); anything marked reported is
  "reported" on the page. Platform facts carry their date ("as of October 2026") and the advice to
  check the platform's current help page.
- NEVER "lottery" or "lotteries"; say the mechanism.
- Default to the English word. No Chinese terms needed on these pages.
- Titles, widget ids and class names must not collide with siblings. Banned titles: "Who owns what:
  org design and data contracts", "Ownership & RACI", "Funnel metrics", "Reading the funnel", "The
  funnel bench", "The one-page marketing plan", "The triage bench", "The triage question", "Email &
  lifecycle: the right message at the right moment", "Paid ads & creative: variety you can actually
  test", "Platforms and formats: owned and rented ground", "Incrementality and geo-lift", "The cohort
  table and heatmap", "Funnels, cohorts and RFM: where the customers leak out".
- **The stance (spine):** market research and market penetration strategy belong to marketing and
  BD; data is consulted with a named deliverable and a date. Always give the reason (whoever lives
  with the outcome owns the decision). Never present it as a rule for its own sake. The course's own
  line, never attributed to anyone: "Data informs the bet; the business places it." Never invent a
  quote from any real person (Kozyrkov, Dehghani, Roberge, Kao or anyone).
- Kettle & Co is a constructed DTC tea brand (marketing lead, brand manager, BD lead, finance
  partner, ops lead, three-person data team). Never Phoebe's employer, team or clients. Never Cadence.
- **a2 and a3 only: the four-beat unit.** Every channel is ONE repeated visual unit, the same
  shape every time, with four labelled beats in this order:
  1 "What it is" (two lines in marketer language + ONE hand-drawn SVG of the mechanism, may be a
  compact figure, viewBox 880 x 160-220), 2 "What marketers watch", 3 "The vanity trap", 4 "Where data
  adds value". Put each channel inside a `details.card` (summary title = the channel name) so the
  page stays scannable; the beats inside use `<p><strong>1 · What it is.</strong> ...</p>` etc. The
  ONE-figure-per-Part rule is relaxed for these channel figures: each channel gets its mechanism
  figure inside its card. Keep figures small and simple; fewer labels beat more.

## Figure grammar (hand-drawn, every figure)

Palette, ONLY these hexes (no invented greys): primary `#2B22A8` · deep `#1B1470` · mid `#4A42C4` ·
soft `#C9C5EE` · tint `#F0EFFB` · ink `#1A1830` · muted `#5E5B78` · faint `#CFCDE0` · hairline
`#E6E4F2` · saffron (warm contrast) `#8A5A00` · saffron ink `#5C3C00` · saffron tint `#FBF3E2` ·
`#FFFFFF` · universal reds `#991B1B` `#FEF2F2` `#FCA5A5` only for a wrong-way panel or a vanity-trap
mark.

- `<figure class="zoomable">` > `<svg viewBox="0 0 880 H" xmlns="http://www.w3.org/2000/svg"
  role="img" aria-label="the data, not the shape">` > `<defs>` + `<style>` + content, then
  `<figcaption>🔍 Click to zoom - takeaway</figcaption>`. Grow H, never W.
- Prefix unique per figure, used for every class and id: page code + letter, e.g. `a2a`, `a2b`,
  `a2c` ... (`a2aSk`, `.a2aH`). Never reuse a prefix within the page.
- `<defs>` holds three things with the figure prefix P: a wobble filter `id="PSk"`
  (`feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="<int>"` +
  `feDisplacementMap scale="2.4" xChannelSelector="R" yChannelSelector="G"`, `x="-3%" y="-3%"
  width="106%" height="106%"`), a hachure pattern `id="PHc"` (7x7 userSpaceOnUse, rotate(-38), one
  `#2B22A8` line, opacity .5), an open arrowhead `id="PAr"` (path `M1 1 L9 5 L1 9`, fill none,
  stroke `#1A1830` 1.6). ALL shapes sit inside ONE `<g filter="url(#PSk)" fill="none"
  stroke="#1A1830" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">`; rects carry a
  tiny rotation (-4 to 4 degrees for hand-placed items, under 1 for panels). Fills: white, tint
  `#F0EFFB`, the hachure for "the pile" or "the data", and saffron `#8A5A00` (or its tint
  `#FBF3E2`) ONLY for the one thing the figure is about. One doodle anchor per figure, simple
  strokes, never a mascot. Text classes (define in the figure's `<style>`): `.PH` 800 12px `#1A1830`
  heading · `.PL` 600 12px `#1A1830` label · `.PS` 400 11px `#5E5B78` · `.PB` 800 11px `#5C3C00` ·
  `.PV` 800 16-20px `#1B1470` value · `.PW` 800 12px `#FFFFFF` on a dark fill only · `.PA` 700 11px
  `#2B22A8` axis caption · `.PN` 400 12px `#5E5B78` note · `.PR` 800 11px `#991B1B` for a vanity
  trap. Hand-stacked items must not overlap as painted rects (the gate flags a pile).
- ALL `<text>` outside any filtered group, font `Inter, sans-serif`, never below 10.5px. Text on a
  `#2B22A8` or `#8A5A00` fill uses `.PW` (white); on tints use ink classes.
- Fit: max chars ≈ (box width - 20) / 7 at 12px, 6.4px/char at 11px; full-width note under 110
  chars; 40px between neighbouring point labels; bottom note 22px below the last row, H clears it by
  8px. No path may cross a text label (the gate flags line-through-text): route arrows around labels.
  No text may spill out of its box. When in doubt, shorten.
- Floor: one figure per Part plus one in the build-along. Draw the MECHANISM (crawl -> index -> rank
  -> click; auction -> delivery -> attribution window; list -> send -> inbox -> click; cohort curves;
  CAC and payback on a margin line; test vs holdout groups; intake form fields flowing to a scoped
  ask; a script's order: deliverable, date, boundary), never a metaphor literally, never decoration.

## Voice and honesty

Every Part gets a real-world story. Constructed cases say "constructed" on the page: Kettle & Co
and every number from map section 9 or the bench. Platform behaviour is read from the platforms' own
help pages (map section 6) and dated October 2026. Never claim a measured benchmark (industry open
rates, average CAC, typical ROAS): there are none in the map; teach that they vary and why.

## Cross-links (absolute URLs)

- Marketing (for marketers): https://phoebefu6.github.io/learn-marketing-with-phoebe/
- Marketing Attribution (attribution models, MMM, geo-lift): https://phoebefu6.github.io/learn-marketing-attribution-with-phoebe/
- AI + Marketing (using AI to do SEO, content, ads, email): https://phoebefu6.github.io/learn-ai-marketing-with-phoebe/
- Customer Retention (CLV, churn, cohort heatmap): https://phoebefu6.github.io/learn-customer-retention-with-phoebe/ (CLV page: courses/a6-clv-buy-till-you-die.html; cohort heatmap: courses/a2-cohort-table-and-heatmap.html)
- E-commerce Metrics: https://phoebefu6.github.io/learn-ecommerce-metrics-with-phoebe/ · User Journey Analytics: https://phoebefu6.github.io/learn-user-journey-analytics-with-phoebe/
- Asking the Right Questions as a DA (discovery interview): https://phoebefu6.github.io/learn-asking-right-questions-as-da-with-phoebe/
- Experimentation: https://phoebefu6.github.io/learn-experimentation-with-phoebe/
- Hub: https://phoebefu6.github.io/learn-with-phoebe/

## Footer chains and session titles

Angles: a1 How marketers think -> a2 Owned and earned channels -> a3 Paid and lifecycle channels ->
a4 Acquisition cohorts by channel -> a5 Segment and value -> a6 Campaign lift and brand health.
Partnership: p1 In their shoes -> p2 The ownership map -> p3 Intake and the service menu -> p4
Pushing back well.
Footer left: "Angles session N of 6 · learn-marketing-analytics-with-phoebe · by Phoebe Fu &nbsp;·&nbsp; 📚 <a href="https://phoebefu6.github.io/learn-with-phoebe/">Learn with Phoebe ↗</a>" (or Partnership session N of 4).
Footer right: `<a href="PREV.html">← Prev: Short title</a> &nbsp;·&nbsp; <a href="NEXT.html">Next: Short title →</a>`; last page of a track: "← Prev" and `<a href="../index.html">Course home</a>`.

File names and h1 (exact; one accent span; keep the accent where shown with [ ]):
- a2-owned-and-earned-channels.html: "Owned and earned channels: [search, content, social, PR]"
- a3-paid-and-lifecycle-channels.html: "Paid and lifecycle channels: [auctions, inboxes and partners]"
- a4-acquisition-cohorts-by-channel.html: "Acquisition cohorts [by channel]"
- a5-segment-and-value.html: "Segment and value: [who deserves the next dollar]"
- a6-campaign-lift-and-brand-health.html: "Campaign lift and [brand health]"
- p3-intake-and-the-service-menu.html: "Intake and [the service menu]"
- p4-pushing-back-well.html: "Pushing back [well]"
