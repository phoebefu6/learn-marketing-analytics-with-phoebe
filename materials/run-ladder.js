// node materials/run-ladder.js  - runs the real browser engine on the generated sample, prints JSON lines
const fs = require("fs"), path = require("path");
const M = require(path.join(__dirname, "..", "assets", "mkta-live.js"));
const src = fs.readFileSync(path.join(__dirname, "..", "assets", "mkta-sample.js"), "utf8");
const win = {}; new Function("window", src)(win);
const S = win.MKTA_SAMPLE;
for (const leave of [false, true]) for (const rung of ["yes", "no", "raci"]) {
  const r = M.simulate(S.asks, M.preset(rung, S.asks), S.config, leave);
  const o = { rung, onLeave: leave, capacity: r.capacity, used: r.used, over: r.over, starved: r.starved, anecdote: r.anecdote, late: r.late, match: r.match, total: r.total };
  console.log(JSON.stringify(Object.keys(o).sort().reduce((a, k) => (a[k] = o[k], a), {})));
}
