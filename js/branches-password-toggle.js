(function () {
  "use strict";

  document.querySelectorAll("[data-password-toggle]").forEach(function (button) {
    var target = document.querySelector(button.getAttribute("data-password-toggle"));

    if (!target) {
      return;
    }

    function syncButton() {
      var isVisible = target.type === "text";

      button.classList.toggle("is-visible", isVisible);
      button.setAttribute("aria-pressed", isVisible ? "true" : "false");
      button.setAttribute("aria-label", isVisible ? "비밀번호 숨기기" : "비밀번호 보기");
    }

    button.addEventListener("click", function () {
      var shouldShow = target.type === "password";

      target.type = shouldShow ? "text" : "password";
      syncButton();
    });

    syncButton();
  });
})();
