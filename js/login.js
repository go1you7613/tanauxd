(function () {
  "use strict";

  var button = document.getElementById("login-submit");
  var error = document.querySelector(".login-error");

  if (!button || !error) {
    return;
  }

  button.addEventListener("click", function () {
    error.classList.add("is-visible");
  });
})();
