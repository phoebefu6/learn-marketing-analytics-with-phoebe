"""Writes index.html for learn-marketing-analytics-with-phoebe. MINDMAP_DATA via json.dumps.
Run: python3 materials/build-index.py"""
import json, os
here = os.path.dirname(os.path.abspath(__file__))
G, Y, O, R = "#34D399", "#FBBF24", "#FB923C", "#F87171"
A = [
 ("a1-how-marketers-think.html", "🧭", "How marketers think, and the question behind the ask", "The funnel as marketers draw it, brand against performance and the contested 60:40, and the habit of turning a vague ask into a decision question with an owner.", "the question behind the ask", G,
  "How marketers\nthink", ["The funnel, their way", "Brand vs performance", "Ask to decision"]),
 ("a2-owned-and-earned-channels.html", "🔎", "Owned and earned channels: search, content, social, PR", "SEO, content, organic social and creators, and PR, each in four beats: what it is, what marketers watch, the vanity trap, and where data adds value.", "four beats per channel", G,
  "Owned and\nearned channels", ["Crawl, index, rank", "Followers decide nothing", "Engagement vs sales content"]),
 ("a3-paid-and-lifecycle-channels.html", "💸", "Paid and lifecycle channels: auctions, inboxes and partners", "Paid search and paid social, email and CRM, affiliates and influencers, events. Platform ROAS is self-reported; opens broke in 2021; a scorecard where every metric names its decision.", "metric beside its decision", Y,
  "Paid and lifecycle\nchannels", ["Auction to attribution", "Opens after Apple MPP", "Holdouts over opens"]),
 ("a4-acquisition-cohorts-by-channel.html", "🪣", "Acquisition cohorts by channel", "Group customers by the month and channel that brought them, and read where each cohort leaks. The channel that wins the first order is often not the one that wins the second.", "cohort by channel", Y,
  "Acquisition cohorts\nby channel", ["Cohort by first channel", "Where it leaks", "First order vs second"]),
 ("a5-segment-and-value.html", "🎯", "Segment and value: who deserves the next dollar", "CAC, payback and margin by segment, CLV as an input, and the difference between the cheapest customer to win and the best one to keep.", "CAC and payback", O,
  "Segment and\nvalue", ["CAC with its base", "Payback month", "The next dollar"]),
 ("a6-campaign-lift-and-brand-health.html", "🧪", "Campaign lift and brand health", "Test against control, holdouts, and reading a lift test honestly, including the no-effect result; brand tracking waves and their intervals; and where attribution takes over.", "the honest no-effect read", O,
  "Campaign lift and\nbrand health", ["Test vs control", "No effect is a result", "Tracker waves"]),
]
P = [
 ("p1-in-their-shoes.html", "👟", "In their shoes: what marketing, brand and BD are measured on", "Three scoreboards on three clocks, a calendar fixed months ago, five words that mean two things, and a stakeholder map of Kettle &amp; Co.", "their scoreboard first", G,
  "In their\nshoes", ["Three scoreboards", "Their calendar", "Five words, two meanings"]),
 ("p2-the-ownership-map.html", "🗺️", "The ownership map: a request triage desk", "Tag every ask external, internal or both; a RACI for 24 asks; a desk where yes-to-everything starves the queue and no-to-everything feeds decisions on anecdote. Then the break button.", "★ the bench", R,
  "The ownership\nmap", ["External, internal, both", "The triage desk", "A real C"]),
 ("p3-intake-and-the-service-menu.html", "📥", "Intake and the service menu", "Turning \"can you do market research?\" into a scoped ask: the intake template, and a one-page menu of what data offers marketing, with turnaround times.", "the front door", Y,
  "Intake and the\nservice menu", ["The intake template", "The service menu", "Scope before start"]),
 ("p4-pushing-back-well.html", "🤝", "Pushing back well", "Scripts for the top complaints, each opening with a deliverable and a date before the boundary; the escalation path; and when the right answer is yes.", "deliverable, date, boundary", O,
  "Pushing back\nwell", ["Deliverable first", "Clear is kind", "When to say yes"]),
]

def cards(rows, track, n):
    out = []
    for i, (href, icon, title, desc, pill, col, *_ ) in enumerate(rows, 1):
        num = f"{track} session {i}" + (" · start here" if i == 1 else (" · bench night" if track == "Partnership" and i == 2 else ""))
        meta = '<span class="pill amber">▶ Start here</span>' if i == 1 else (f'<span class="pill amber">{pill}</span>' if pill.startswith("★") else f'<span class="pill">{pill}</span>')
        out.append(f'      <a class="course-card" href="courses/{href}" style="--diff:{col}"><span class="cicon">{icon}</span><span class="cnum">{num}</span><h3>{title}</h3><p>{desc}</p><span class="meta">{meta}</span></a>')
    return "\n".join(out)

mm = {"title": "Marketing\nanalytics", "centerColor": "#1B1470", "sessions": []}
for href, icon, title, desc, pill, col, label, concepts in A + P:
    mm["sessions"].append({"label": label, "href": "courses/" + href, "color": col,
                           "concepts": [{"label": c, "href": "courses/" + href} for c in concepts]})

def path(steps):
    return '<span class="parr">→</span>'.join(f'<a class="pstep" href="courses/{h}">{k}</a>' for k, h in steps)

ah = {f"A{i}": r[0] for i, r in enumerate(A, 1)}; ph = {f"P{i}": r[0] for i, r in enumerate(P, 1)}
allh = {**ah, **ph}

html = open(os.path.join(here, "index.template.html"), encoding="utf-8").read()
html = html.replace("{{ANGLES_CARDS}}", cards(A, "Angles", 6)).replace("{{PARTNERSHIP_CARDS}}", cards(P, "Partnership", 4))
html = html.replace("{{PATH_1}}", path([(k, allh[k]) for k in ["A1", "A2", "A3", "A4", "A5", "A6"]]))
html = html.replace("{{PATH_2}}", path([(k, allh[k]) for k in ["P1", "P2", "P3", "P4"]]))
html = html.replace("{{PATH_3}}", path([(k, allh[k]) for k in ["A1", "P1", "P2", "P3", "P4"]]))
html = html.replace("{{MINDMAP_JSON}}", json.dumps(mm, ensure_ascii=False, indent=2))
open(os.path.join(here, "..", "index.html"), "w", encoding="utf-8").write(html)
print("index.html written")
