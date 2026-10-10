/* mkta-live.js - the request triage engine for Partnership session 2 (the ownership map).
 * Pure functions, no DOM: runs the same in the browser (window.MKTA) and in node (module.exports).
 * Every input is the constructed Kettle & Co stream in mkta-sample.js; every hour is modelled.
 * materials/mkta_reference.py must print the same integers for every rung.
 *
 * Queue model (modelled): the team works asks in the order they land (working day, then id).
 * Capacity is spread evenly over the month, rate = capacity / days hours per working day.
 * An ask cannot start before the morning it lands. It is late if it finishes after its due day.
 */
(function (root) {
  "use strict";
  var CHOICES = ["own", "consult", "redirect", "all"];

  function hoursFor(a, choice) {
    if (choice === "own") return a.hOwn;
    if (choice === "consult") return a.hC;
    if (choice === "all") return a.hAll;
    return 0;
  }

  function capacityOf(cfg, onLeave) {
    var analysts = cfg.analysts - (onLeave ? 1 : 0);
    return analysts * cfg.hoursPerAnalyst;
  }

  function preset(name, asks) {
    var c = {};
    asks.forEach(function (a) {
      if (name === "yes") c[a.id] = "all";
      else if (name === "no") c[a.id] = a.tag === "internal" ? "own" : "redirect";
      else c[a.id] = a.correct;
    });
    return c;
  }

  function simulate(asks, choices, cfg, onLeave) {
    var cap = capacityOf(cfg, onLeave), rate = cap / cfg.days;
    var order = asks.slice().sort(function (x, y) { return x.arr - y.arr || x.id - y.id; });
    var clock = 0, used = 0, rows = [];
    order.forEach(function (a) {
      var ch = choices[a.id] || "redirect", h = hoursFor(a, ch), r = { id: a.id, choice: ch, hours: h, finishDay: null, late: false };
      if (h > 0) {
        var start = Math.max(clock, (a.arr - 1) * rate), finish = start + h;
        clock = finish; used += h;
        r.finishDay = Math.ceil(finish / rate);
        r.late = r.finishDay > a.due;
      }
      rows.push(r);
    });
    var byId = {}; asks.forEach(function (a) { byId[a.id] = a; });
    var starved = [], anecdote = [], late = [], match = 0;
    rows.forEach(function (r) {
      var a = byId[r.id];
      if (r.choice === a.correct) match++;
      if (r.late) late.push(r.id);
      if (a.correct === "own" && r.hours > 0 && r.late) starved.push(r.id);
      if (r.choice === "redirect" && a.anecdote) anecdote.push(r.id);
    });
    var sortN = function (x, y) { return x - y; };
    return { capacity: cap, rate: rate, used: used, over: Math.max(0, used - cap), starved: starved.sort(sortN),
             anecdote: anecdote.sort(sortN), late: late.sort(sortN), match: match, total: asks.length, rows: rows };
  }

  var api = { CHOICES: CHOICES, preset: preset, simulate: simulate, hoursFor: hoursFor, capacityOf: capacityOf };
  if (typeof module !== "undefined" && module.exports) module.exports = api; else root.MKTA = api;
})(this);
