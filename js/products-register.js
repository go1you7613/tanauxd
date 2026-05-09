(function () {
  "use strict";

  var registerForm = document.querySelector(".product-detail-edit");

  if (!registerForm) {
    return;
  }

  function updateFileHint(inputId, hintId) {
    var input = document.getElementById(inputId);
    var hint = document.getElementById(hintId);

    if (!input || !hint) {
      return;
    }

    input.addEventListener("change", function (e) {
      var file = e.target.files && e.target.files[0];
      hint.textContent = file ? file.name : "선택된 파일 없음";
    });
  }

  if (typeof window.DAESIN_initProductQuillMemo === "function") {
    window.DAESIN_initProductQuillMemo();
  }

  updateFileHint("pd-consent-file", "pd-consent-hint");
  updateFileHint("pd-condition-file", "pd-condition-hint");

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (window.DAESIN_syncQuillHidden) {
      window.DAESIN_syncQuillHidden();
    }
  });
})();
