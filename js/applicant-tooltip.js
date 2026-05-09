(function () {
  "use strict";

  var layer = null;
  var activeWrap = null;

  function getLayer() {
    if (!layer) {
      layer = document.createElement("div");
      layer.className = "applicant-tooltip-float-root";
      document.body.appendChild(layer);
    }
    return layer;
  }

  function hideTooltip() {
    if (layer) {
      layer.innerHTML = "";
    }
    activeWrap = null;
  }

  function readGapPx() {
    var raw = getComputedStyle(document.documentElement).getPropertyValue("--space-8");
    var n = parseFloat(raw);
    return isNaN(n) ? 8 : n;
  }

  function positionPanel(anchor, panel) {
    var rect = anchor.getBoundingClientRect();
    var gap = readGapPx();
    var tipRect = panel.getBoundingClientRect();
    var left = rect.left + rect.width / 2 - tipRect.width / 2;
    var top = rect.top - tipRect.height - gap;

    if (top < gap) {
      top = rect.bottom + gap;
    }

    left = Math.max(gap, Math.min(left, window.innerWidth - tipRect.width - gap));

    panel.style.left = Math.round(left) + "px";
    panel.style.top = Math.round(top) + "px";
  }

  function showForWrap(wrap) {
    var source = wrap.querySelector(".applicant-tooltip__panel");
    var anchor = wrap.querySelector(".applicant-tooltip__trigger");
    if (!source || !anchor) {
      return;
    }

    if (activeWrap === wrap && layer && layer.firstChild) {
      return;
    }

    activeWrap = wrap;
    var root = getLayer();
    root.innerHTML = "";

    var clone = source.cloneNode(true);
    clone.classList.add("applicant-tooltip__panel--floating");
    clone.removeAttribute("id");

    root.appendChild(clone);

    clone.style.position = "fixed";
    clone.style.zIndex = "10050";
    clone.style.pointerEvents = "none";
    clone.style.left = "0";
    clone.style.top = "0";

    positionPanel(anchor, clone);
    requestAnimationFrame(function () {
      positionPanel(anchor, clone);
    });
  }

  document.body.addEventListener(
    "mouseover",
    function (event) {
      var wrap = event.target.closest(".applicant-tooltip");
      if (!wrap) {
        return;
      }
      showForWrap(wrap);
    },
    true
  );

  document.body.addEventListener(
    "mouseout",
    function (event) {
      var wrap = event.target.closest(".applicant-tooltip");
      if (!wrap) {
        return;
      }
      var related = event.relatedTarget;
      if (related && wrap.contains(related)) {
        return;
      }
      hideTooltip();
    },
    true
  );

  window.addEventListener(
    "scroll",
    function () {
      hideTooltip();
    },
    true
  );

  window.addEventListener("resize", hideTooltip);
})();
