(function () {
  "use strict";

  function bindFileHint(inputId, hintId) {
    var input = document.getElementById(inputId);
    var hint = document.getElementById(hintId);

    if (!input || !hint) {
      return;
    }

    input.addEventListener("change", function (e) {
      var files = Array.prototype.slice.call(e.target.files || []);
      hint.textContent = files.length
        ? files.map(function (file) { return file.name; }).join(", ")
        : "선택된 파일 없음";
    });
  }

  bindFileHint("notice-files", "notice-files-hint");
})();
