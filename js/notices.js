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

  function bindAttachmentDownloads() {
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
  }

  bindFileHint("notice-files", "notice-files-hint");
  bindAttachmentDownloads();
})();
