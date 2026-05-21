(function () {
  "use strict";

  var radios = document.querySelectorAll('input[name="fee-type"]');
  var sections = document.querySelectorAll("[data-fee-section]");

  if (!radios.length || !sections.length) {
    return;
  }

  function syncFeeSections() {
    var checked = document.querySelector('input[name="fee-type"]:checked');
    var selected = checked ? checked.value : "basic";

    sections.forEach(function (section) {
      section.hidden = section.getAttribute("data-fee-section") !== selected;
    });
  }

  radios.forEach(function (radio) {
    radio.addEventListener("change", syncFeeSections);
  });

  syncFeeSections();
})();
