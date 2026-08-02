// ilugc-neubrutal — countdown, contribution graph, add-to-calendar, mode toggle
(function () {
  "use strict";

  // ---- dark / paper mode toggle (persisted) ----
  var root = document.documentElement;

  function setMode(mode) {
    root.setAttribute("data-mode", mode);
    var label = document.getElementById("mode-label");
    var btn = document.getElementById("mode-toggle");
    if (label) label.textContent = mode;
    if (btn) btn.setAttribute("aria-pressed", mode === "paper" ? "true" : "false");
    try { localStorage.setItem("ilugc-mode", mode); } catch (e) {}
  }
  try {
    var stored = localStorage.getItem("ilugc-mode");
    if (stored === "dark" || stored === "paper") setMode(stored);
  } catch (e) {}
  var modeToggle = document.getElementById("mode-toggle");
  if (modeToggle) {
    modeToggle.addEventListener("click", function () {
      var next = root.getAttribute("data-mode") === "paper" ? "dark" : "paper";
      setMode(next);
    });
  }

  // ---- accent (green / cyan) switcher (persisted) ----
  function setAccent(accent) {
    root.setAttribute("data-accent", accent);
    var label = document.getElementById("accent-label");
    var btn = document.getElementById("accent-toggle");
    if (label) label.textContent = accent;
    if (btn) btn.setAttribute("aria-pressed", accent === "cyan" ? "true" : "false");
    try { localStorage.setItem("ilugc-accent", accent); } catch (e) {}
  }
  try {
    var storedAccent = localStorage.getItem("ilugc-accent");
    if (storedAccent === "green" || storedAccent === "cyan") setAccent(storedAccent);
  } catch (e) {}
  var accentToggle = document.getElementById("accent-toggle");
  if (accentToggle) {
    accentToggle.addEventListener("click", function () {
      var next = root.getAttribute("data-accent") === "cyan" ? "green" : "cyan";
      setAccent(next);
    });
  }

  // ---- nav dropdown (keyboard + touch support) ----
  var toggles = document.querySelectorAll(".dropdown-toggle");
  for (var i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener("click", function () {
      var parent = this.closest("li");
      var open = parent ? parent.classList.toggle("open") : false;
      this.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // ---- live countdown to next meetup (15:00 IST = 09:30 UTC; India has no DST) ----
  function nextMeetTarget() {
    var countdown = document.querySelector(".countdown");
    var raw = countdown ? countdown.getAttribute("data-meet-date") : null;
    var parts = (raw || "").split("-");
    if (parts.length === 3) {
      return Date.UTC(+parts[0], +parts[1] - 1, +parts[2], 9, 30, 0);
    }
    // fall back to a reasonable next-meetup: next Saturday at 15:00 IST
    var d = new Date();
    var daysToSat = (6 - d.getDay() + 7) % 7;
    d.setDate(d.getDate() + (daysToSat || 7));
    return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), 9, 30, 0);
  }
  var meetDate = document.querySelector("[data-countdown-days]");
  if (meetDate) {
    var target = nextMeetTarget();
    function pad(n) { return String(n).padStart(2, "0"); }
    function tick() {
      var diff = target - Date.now();
      if (diff < 0) diff = 0;
      meetDate.textContent = pad(Math.floor(diff / 864e5));
      var h = document.querySelector("[data-countdown-hours]");
      var m = document.querySelector("[data-countdown-minutes]");
      var s = document.querySelector("[data-countdown-seconds]");
      if (h) h.textContent = pad(Math.floor(diff / 36e5) % 24);
      if (m) m.textContent = pad(Math.floor(diff / 6e4) % 60);
      if (s) s.textContent = pad(Math.floor(diff / 1e3) % 60);
    }
    tick();
    setInterval(tick, 1000);
  }

  // ---- contribution graph (real commit activity, falls back to placeholder) ----
  var grid = document.querySelector("[data-contrib-grid]");
  if (grid) {
    var repo = (grid.getAttribute("data-repo") || "ilugc/ilugc.in").replace(/^https?:\/\/github\.com\//, "");
    var since = new Date();
    since.setDate(since.getDate() - 90);
    var api = "https://api.github.com/repos/" + repo + "/commits?per_page=100&since=" + since.toISOString();
    fetch(api)
      .then(function (r) { return r.ok ? r.json() : Promise.reject(new Error("http " + r.status)); })
      .then(function (commits) {
        if (!commits || !commits.length) throw new Error("no commits");
        var byDay = {};
        commits.forEach(function (c) {
          if (!c.commit || !c.commit.author || !c.commit.author.date) return;
          var d = c.commit.author.date.slice(0, 10);
          byDay[d] = (byDay[d] || 0) + 1;
        });
        renderGrid(byDay);
      })
      .catch(function () { renderPlaceholder(); });

    function renderGrid(byDay) {
      var day = new Date();
      day.setHours(0, 0, 0, 0);
      var weeks = 13;
      var todayKey = day.toISOString().slice(0, 10);
      for (var c = weeks - 1; c >= 0; c--) {
        for (var r = 0; r < 7; r++) {
          var d = new Date(day);
          d.setDate(d.getDate() - (c * 7) - r);
          var key = d.toISOString().slice(0, 10);
          var cell = document.createElement("div");
          cell.className = "cell";
          var n = byDay[key] || 0;
          if (n === 1) cell.classList.add("l1");
          else if (n >= 2 && n <= 3) cell.classList.add("l2");
          else if (n >= 4) cell.classList.add("l3");
          if (key === todayKey) cell.classList.add("today");
          grid.appendChild(cell);
        }
      }
    }

    function renderPlaceholder() {
      var total = 52;
      var levels = [0, 0, 0, 1, 1, 2, 3, 1, 0, 2, 3, 3, 2, 0, 1];
      for (var c = 0; c < total; c++) {
        for (var r = 0; r < 7; r++) {
          var cell = document.createElement("div");
          cell.className = "cell";
          var idx = c - (total - levels.length);
          var level = 0;
          if (idx >= 0 && idx < levels.length) level = levels[idx];
          if (idx < 0) level = (c * 7 + r) % 11 < 4 ? [0, 1, 2][(c + r) % 3] : 0;
          if (idx === levels.length - 1 && r === 3) cell.classList.add("today");
          if (level === 1) cell.classList.add("l1");
          else if (level === 2) cell.classList.add("l2");
          else if (level === 3) cell.classList.add("l3");
          grid.appendChild(cell);
        }
      }
    }
  }

  // ---- add to calendar (.ics) ----
  var cal = document.getElementById("add-calendar");
  if (cal) {
    cal.addEventListener("click", function (e) {
      e.preventDefault();
      var rawDate = cal.getAttribute("data-meet-date");
      var rawTime = cal.getAttribute("data-meet-time") || "15:00";
      var venue = cal.getAttribute("data-meet-venue") || "";
      var reg = cal.getAttribute("data-meet-register") || "";
      var hm = rawTime.match(/(\d{1,2}):(\d{2})/);
      var parts = (rawDate || "").split("-");
      if (!hm || parts.length !== 3) return;
      var y = parts[0], m = parts[1], d = parts[2];
      var hh = String(hm[1]).padStart(2, "0"), mm = String(hm[2]).padStart(2, "0");
      var start = y + m + d + "T" + hh + mm + "00";
      var endH = String((+hm[1] + 3) % 24).padStart(2, "0");
      var end = y + m + d + "T" + endH + mm + "00";
      function icsEscape(s) { return String(s || "").replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;"); }
      var ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//ilugc//meetup//EN",
        "BEGIN:VEVENT", "UID:ilugc-meetup@ilugc.in", "DTSTART;TZID=Asia/Kolkata:" + start,
        "DTEND;TZID=Asia/Kolkata:" + end,
        "SUMMARY:ILUGC Monthly Meet",
        "LOCATION:" + icsEscape(venue),
        "DESCRIPTION:" + icsEscape(reg ? ("Register at " + reg) : ""), "END:VEVENT", "END:VCALENDAR"].join("\r\n");
      var blob = new Blob([ics], { type: "text/calendar" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "ilugc-meetup.ics";
      a.click();
      setTimeout(function () { try { URL.revokeObjectURL(a.href); } catch (e2) {} }, 1000);
    });
  }
})();
