// ilugc-neubrutal — countdown, contribution graph, add-to-calendar, mode toggle
(function () {
  "use strict";

  // ---- dark / paper mode toggle (persisted) ----
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem("ilugc-mode"); } catch (e) {}
  if (stored) root.setAttribute("data-mode", stored);
  var toggle = document.getElementById("mode-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-mode") === "paper" ? "dark" : "paper";
      root.setAttribute("data-mode", next);
      try { localStorage.setItem("ilugc-mode", next); } catch (e) {}
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

  // ---- contribution graph (decorative placeholder) ----
  var grid = document.querySelector("[data-contrib-grid]");
  if (grid) {
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
