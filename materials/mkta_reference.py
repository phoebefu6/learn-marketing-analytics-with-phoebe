"""Python reference for the request triage desk (Partnership session 2).
Must print exactly the same integers as assets/mkta-live.js run in node (materials/run-ladder.js).
Usage: python3 materials/mkta_reference.py      (prints the ladder as JSON lines)
"""
import importlib.util, json, math, os

here = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location("bs", os.path.join(here, "build-sample.py"))
bs = importlib.util.module_from_spec(spec); spec.loader.exec_module(bs)
ASKS, CFG = bs.ASKS, bs.CONFIG

def hours_for(a, ch):
    return {"own": a["hOwn"], "consult": a["hC"], "all": a["hAll"]}.get(ch, 0)

def preset(name):
    if name == "yes": return {a["id"]: "all" for a in ASKS}
    if name == "no": return {a["id"]: ("own" if a["tag"] == "internal" else "redirect") for a in ASKS}
    return {a["id"]: a["correct"] for a in ASKS}

def simulate(choices, on_leave=False):
    cap = (CFG["analysts"] - (1 if on_leave else 0)) * CFG["hoursPerAnalyst"]
    rate = cap / CFG["days"]
    clock = used = 0
    starved, anecdote, late, match = [], [], [], 0
    for a in sorted(ASKS, key=lambda a: (a["arr"], a["id"])):
        ch = choices.get(a["id"], "redirect"); h = hours_for(a, ch)
        is_late = False
        if h > 0:
            start = max(clock, (a["arr"] - 1) * rate); finish = start + h
            clock = finish; used += h
            is_late = math.ceil(finish / rate) > a["due"]
        if ch == a["correct"]: match += 1
        if is_late: late.append(a["id"])
        if a["correct"] == "own" and h > 0 and is_late: starved.append(a["id"])
        if ch == "redirect" and a["anecdote"]: anecdote.append(a["id"])
    return dict(capacity=cap, used=used, over=max(0, used - cap), starved=sorted(starved),
                anecdote=sorted(anecdote), late=sorted(late), match=match, total=len(ASKS))

if __name__ == "__main__":
    for leave in (False, True):
        for rung in ("yes", "no", "raci"):
            r = simulate(preset(rung), leave)
            print(json.dumps(dict(rung=rung, onLeave=leave, **r), sort_keys=True))
