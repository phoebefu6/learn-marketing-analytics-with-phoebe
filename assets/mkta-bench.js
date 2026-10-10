/* mkta-bench.js - the request triage desk UI. Renders into #mkta-bench on Partnership session 2.
 * Every number is computed by mkta-live.js the moment a choice changes; nothing is stored.
 * Kettle & Co and its 24 asks are constructed; hours are modelled. */
(function () {
  "use strict";
  var rootEl, S, L, state, els = {};
  var LABEL = { own: "Data owns", consult: "Data consulted - deliver X", redirect: "Redirect (not data's)", all: "Data takes all of it" };
  var RUNGS = [
    { id: "yes", name: "1 · Say yes to everything", note: "Data takes every ask whole, strategy and research included. The helpful-looking failure.", anti: true },
    { id: "no", name: "2 · Say no to anything not ours", note: "Data owns the internal asks and redirects the rest, including the split ones. The tidy-looking failure.", anti: true },
    { id: "raci", name: "3 · Split by the RACI", note: "Own the internal asks, deliver a named piece of every split ask, redirect the purely external ones." }
  ];

  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function byId(id) { for (var i = 0; i < S.asks.length; i++) if (S.asks[i].id === id) return S.asks[i]; return null; }
  function list(ids) { return ids.length ? ids.map(function (i) { return "#" + i + " " + byId(i).area; }).join(", ") : "none"; }

  function render() {
    var r = L.simulate(S.asks, state.choices, S.config, state.leave);
    var v;
    if (r.used > r.capacity && r.starved.length) v = { cls: "is-bad", text: r.used + " hours asked of a " + r.capacity + "-hour month. " + r.starved.length + " of the asks only data can do now miss their date, because the team is busy writing other people's strategy." };
    else if (r.anecdote.length) v = { cls: "is-bad", text: "Hours look healthy at " + r.used + " of " + r.capacity + ", and " + r.anecdote.length + " decisions now get made on anecdote, because data refused the evidence half of asks it should have split." };
    else if (r.starved.length) v = { cls: "is-bad", text: r.used + " of " + r.capacity + " hours: no decision on anecdote, but " + r.starved.length + " data-owned asks miss their date. The split is right and the month is too small for it." };
    else v = { cls: "is-good", text: r.used + " of " + r.capacity + " hours, every data-owned ask on time, no decision on anecdote, " + r.match + " of " + r.total + " asks matched to the RACI." };
    els.verdict.className = "mb-verdict " + v.cls; els.verdict.textContent = v.text;
    setMetric("hours", r.used + " / " + r.capacity, "DA hours used / capacity" + (state.leave ? " (one analyst on leave)" : ""));
    setMetric("starved", String(r.starved.length), "data-owned asks that miss their date");
    setMetric("anec", String(r.anecdote.length), "decisions made on anecdote (wrong refusals)");
    setMetric("match", r.match + " / " + r.total, "ownership match against the RACI");
    var rowsById = {}; r.rows.forEach(function (x) { rowsById[x.id] = x; });
    S.asks.forEach(function (a) {
      var x = rowsById[a.id], st = els.status[a.id], hc = els.hours[a.id];
      hc.textContent = x.hours ? String(x.hours) : "0";
      if (x.choice === "redirect") { st.textContent = a.anecdote ? "decided on anecdote" : "redirected, fine"; st.className = "mk-st " + (a.anecdote ? "is-anec" : "is-none"); }
      else if (x.late) { st.textContent = "late: day " + x.finishDay + ", due " + a.due; st.className = "mk-st is-late"; }
      else { st.textContent = "on time: day " + x.finishDay; st.className = "mk-st is-ok"; }
      els.sel[a.id].value = x.choice;
      els.raci[a.id].style.display = state.showRaci ? "" : "none";
    });
    els.raciHead.style.display = state.showRaci ? "" : "none";
    if (state.leave) {
      els.leave.style.display = "";
      els.leave.innerHTML = "";
      els.leave.appendChild(el("b", null, "One analyst on leave: capacity " + L.capacityOf(S.config, true) + " hours. Data-owned asks that now miss their date, rung by rung:"));
      var ul = el("ul");
      RUNGS.forEach(function (g) {
        var rr = L.simulate(S.asks, L.preset(g.id, S.asks), S.config, true);
        ul.appendChild(el("li", null, g.name.replace(/^\d · /, "") + ": " + rr.starved.length + " (" + list(rr.starved) + "); " + rr.anecdote.length + " on anecdote"));
      });
      els.leave.appendChild(ul);
    } else els.leave.style.display = "none";
    els.rungInputs.forEach(function (inp) { inp.checked = inp.value === state.rung; inp.parentNode.classList.toggle("is-on", inp.checked); });
  }

  function setMetric(id, value, label) { var m = els.metrics[id]; m.value.textContent = value; m.label.textContent = label; }

  function applyPreset(id) { state.rung = id; state.choices = L.preset(id, S.asks); render(); }

  function build() {
    rootEl.innerHTML = "";
    var wrap = el("div", "mb-wrap");
    wrap.appendChild(el("h4", null, "The request triage desk: 24 asks, one month, three analysts"));
    wrap.appendChild(el("p", "mb-intro", "Kettle & Co is constructed and its hours are modelled: 3 analysts x " + S.config.hoursPerAnalyst + " request hours a month = " + L.capacityOf(S.config, false) + " hours, worked in the order asks land. Press a rung, then change any row yourself, then press the break button."));
    var presets = el("div", "mb-presets"); els.rungInputs = [];
    RUNGS.forEach(function (g) {
      var lab = el("label", "mb-preset" + (g.anti ? " is-anti" : "")); var inp = document.createElement("input"); inp.type = "radio"; inp.name = "mkta-rung"; inp.value = g.id; lab.appendChild(inp);
      var name = el("span", "mb-pname", g.name); lab.appendChild(name); if (g.anti) name.appendChild(el("em", "mb-anti", " · failure mode"));
      lab.appendChild(el("span", "mb-pnote", g.note));
      inp.addEventListener("change", function () { applyPreset(g.id); });
      presets.appendChild(lab); els.rungInputs.push(inp);
    });
    wrap.appendChild(presets);
    var ctls = el("div", "mb-ctls");
    var cbl = el("label", "mb-ctl"); var cb = document.createElement("input"); cb.type = "checkbox"; cb.id = "mkta-show-raci";
    cb.addEventListener("change", function () { state.showRaci = cb.checked; render(); }); cbl.appendChild(cb); cbl.appendChild(document.createTextNode(" Show the RACI column")); ctls.appendChild(cbl);
    els.breakBtn = el("button", "mb-break", "Break it: one analyst on leave"); els.breakBtn.type = "button";
    els.breakBtn.addEventListener("click", function () { state.leave = !state.leave; els.breakBtn.textContent = state.leave ? "Bring the analyst back" : "Break it: one analyst on leave"; render(); });
    ctls.appendChild(els.breakBtn);
    wrap.appendChild(ctls);
    els.verdict = el("div", "mb-verdict is-ok", ""); wrap.appendChild(els.verdict);
    var metrics = el("div", "mb-metrics"); els.metrics = {};
    ["hours", "starved", "anec", "match"].forEach(function (id) { var m = el("div", "mb-metric"); var value = el("span", "mb-mvalue", ""); var label = el("span", "mb-mlabel", ""); var kind = el("span", "mb-mkind is-heuristic", "modelled"); m.appendChild(value); m.appendChild(label); m.appendChild(kind); metrics.appendChild(m); els.metrics[id] = { value: value, label: label }; });
    wrap.appendChild(metrics);
    els.leave = el("div", "mk-leave"); els.leave.style.display = "none"; wrap.appendChild(els.leave);
    var tw = el("div", "mk-tablewrap"), t = el("table", "mk-table"), thead = el("thead"), hr = el("tr");
    ["#", "The ask", "Knowledge", "Your call", "DA hours", "Outcome"].forEach(function (h) { hr.appendChild(el("th", null, h)); });
    els.raciHead = el("th", null, "RACI"); hr.appendChild(els.raciHead);
    thead.appendChild(hr); t.appendChild(thead);
    var tb = el("tbody"); els.sel = {}; els.status = {}; els.hours = {}; els.raci = {};
    S.asks.forEach(function (a) {
      var tr = el("tr");
      tr.appendChild(el("td", "mk-n", String(a.id)));
      var td = el("td"); td.appendChild(document.createTextNode(a.ask)); td.appendChild(el("span", "mk-who", a.req + " · " + a.area + " · lands day " + a.arr + ", due day " + a.due)); tr.appendChild(td);
      var tg = el("td"); tg.appendChild(el("span", "mk-tag is-" + a.tag, a.tag)); tr.appendChild(tg);
      var sc = el("td"), sel = document.createElement("select"); sel.setAttribute("aria-label", "Your call on ask " + a.id);
      L.CHOICES.forEach(function (c) { var o = document.createElement("option"); o.value = c; o.textContent = LABEL[c]; sel.appendChild(o); });
      sel.addEventListener("change", function () { state.choices[a.id] = sel.value; state.rung = "custom"; render(); });
      sc.appendChild(sel); tr.appendChild(sc); els.sel[a.id] = sel;
      var hc = el("td", "mk-n", ""); tr.appendChild(hc); els.hours[a.id] = hc;
      var st = el("td"); var sp = el("span", "mk-st", ""); st.appendChild(sp); tr.appendChild(st); els.status[a.id] = sp;
      var rc = el("td", "mk-raci", (a.correct === "own" ? "Data owns" : a.correct === "consult" ? "Consulted: " : "Redirect: ") + (a.correct === "own" ? ": " + a.deliver : a.deliver) + " (" + a.raci + ")");
      tr.appendChild(rc); els.raci[a.id] = rc;
      tb.appendChild(tr);
    });
    t.appendChild(tb); tw.appendChild(t); wrap.appendChild(tw);
    wrap.appendChild(el("p", "mb-hint", "Outcome is modelled: an ask is late when the queue, worked in landing order at " + (L.capacityOf(S.config, false) / S.config.days) + " hours a working day, finishes it after its due day. A redirect counts as 'decided on anecdote' when the business needed internal evidence to decide. Your numbers will differ from the rungs as soon as you change a row."));
    rootEl.appendChild(wrap);
  }

  function init() {
    rootEl = document.getElementById("mkta-bench");
    if (!rootEl || !window.MKTA || !window.MKTA_SAMPLE) return;
    S = window.MKTA_SAMPLE; L = window.MKTA;
    state = { rung: "yes", choices: L.preset("yes", S.asks), leave: false, showRaci: false };
    build(); render();
    window.MKTA_BENCH = { preset: applyPreset, toggleLeave: function () { els.breakBtn.click(); }, read: function () { return L.simulate(S.asks, state.choices, S.config, state.leave); } };
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
