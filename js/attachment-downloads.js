(function () {
  "use strict";

  document.querySelectorAll("[data-download-file]").forEach(function (button) {
    button.addEventListener("click", function () {
      var fileName = button.getAttribute("data-download-file") || "attachment.txt";
      var body = "DAESINLOAN prototype attachment: " + fileName + "\n";
      var blob = new Blob([body], { type: "text/plain;charset=utf-8" });
      var url = URL.createObjectURL(blob);
      var link = document.createElement("a");

      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    });
  });
})();
