"""Constructed Kettle & Co figures shared by the Angles pages (a2-a6). CONSTRUCTED, not data.
One source of truth: pages quote only what this script prints. Run: python3 materials/kettle-figures.py
"""
import math

print("== a2: organic search, Search Console queries joined to orders (one quarter, constructed) ==")
Q = [("kettle and co (branded)", 4200, 610), ("tea subscription uk", 800, 74), ("earl grey loose leaf", 1300, 96),
     ("best loose leaf tea", 2900, 58), ("how to brew oolong", 3400, 12), ("matcha benefits", 5100, 21)]
tc = sum(c for _, c, _ in Q); to = sum(o for _, _, o in Q)
for q, c, o in Q: print(f"{q:28s} clicks {c:5d}  orders {o:4d}  orders per 100 clicks {100*o/c:4.1f}")
print(f"total clicks {tc}, orders {to}; non-branded clicks {tc-4200}, non-branded orders {to-610}")

print("\n== a2: organic social, four posts (constructed) ==")
P = [("cat knocks over the teapot (video)", 41000, 3900, 2), ("how to brew a perfect matcha (video, link)", 12000, 900, 47),
     ("autumn blend launch (photo, link)", 8000, 420, 63), ("staff picks carousel", 6000, 380, 9)]
for name, views, eng, orders in P: print(f"{name:44s} views {views:6d}  engagements {eng:5d}  orders {orders:3d}")
print("followers: 12,500 -> 17,500 over the quarter (+40 percent); social-referred orders 121 -> 128")

print("\n== a3/a5: acquisition by channel, Q3 2026 (constructed) ==")
FIRST, REPEAT = 14, 48   # gross margin on first order; extra 6-month margin per repeater
C = [("Paid search", 18000, 600, .38), ("Paid social", 24000, 800, .22), ("Creators", 9000, 250, .31),
     ("Affiliate", 6000, 400, .14), ("Organic search", 4000, 500, .41), ("PR", 3000, 120, .27)]
rows = []
for ch, spend, new, rr in C:
    cac = spend / new; m6 = FIRST + rr * REPEAT; monthly = rr * REPEAT / 6
    pay = 0 if FIRST >= cac else math.ceil((cac - FIRST) / monthly)
    pay_s = str(pay) if pay <= 6 else "not within 6"
    rows.append((ch, spend, new, cac, rr, m6, pay_s))
    print(f"{ch:15s} spend {spend:6d}  new {new:4d}  CAC {cac:5.1f}  6m repeat {rr*100:3.0f}%  6m margin/cust {m6:5.2f}  payback month {pay_s}  6m margin/CAC {m6/cac:4.2f}")
ts = sum(r[1] for r in rows); tn = sum(r[2] for r in rows)
print(f"blended: spend {ts}, new {tn}, blended CAC {ts/tn:.1f}  (Organic search 'spend' is content cost)")
print("marginal: next 6,000 on paid social buys 120 new customers in the constructed response curve -> marginal CAC 50.0")

print("\n== a4: cumulative share of a channel's new customers with a 2nd order, months 1-6 (constructed) ==")
p = 0.3
for ch, spend, new, rr in C:
    shares = [rr * (1 - (1 - p) ** m) / (1 - (1 - p) ** 6) for m in range(1, 7)]
    print(f"{ch:15s} " + "  ".join(f"m{m}:{s*100:4.1f}%" for m, s in enumerate(shares, 1)))

print("\n== a6: email holdout test, 4 weeks (constructed) ==")
nt, nh, mt, mh = 18000, 2000, 0.212, 0.205
d = mt - mh; se = math.sqrt(mt / nt + mh / nh)
print(f"treated {nt} orders/customer {mt}; held out {nh} orders/customer {mh}; diff {d:.3f} ({100*d/mh:.1f}% relative); 95% CI {d-1.96*se:+.3f} to {d+1.96*se:+.3f}  (Poisson approx)")

print("\n== a6: Meta campaign, platform ROAS vs a conversion lift test (constructed) ==")
spend, rev_plat = 24000, 98400
inc_share = 0.38
print(f"platform-reported revenue {rev_plat} on spend {spend}: ROAS {rev_plat/spend:.1f}; lift test says {inc_share*100:.0f}% of reported conversions incremental -> incremental revenue {rev_plat*inc_share:.0f}, incremental ROAS {rev_plat*inc_share/spend:.2f}")

print("\n== a6: brand tracker, aided awareness, two waves of n=500 (constructed) ==")
a, b, n = .34, .37, 500
se = math.sqrt(a*(1-a)/n + b*(1-b)/n)
print(f"wave 1 {a*100:.0f}%, wave 2 {b*100:.0f}%: change +{(b-a)*100:.0f} points, 95% CI {((b-a)-1.96*se)*100:+.1f} to {((b-a)+1.96*se)*100:+.1f} points")
