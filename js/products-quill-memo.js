(function () {
  "use strict";

  var quillInstance = null;

  function syncHidden(quill, hiddenHtml) {
    if (hiddenHtml && quill) {
      hiddenHtml.value = quill.root.innerHTML;
    }
  }

  window.DAESIN_initProductQuillMemo = function () {
    var editorEl = document.querySelector("#pd-quill-editor");
    var hiddenHtml = document.querySelector("#pd-memo-html");

    if (!editorEl || typeof Quill === "undefined") {
      return null;
    }

    if (quillInstance) {
      syncHidden(quillInstance, hiddenHtml);
      return quillInstance;
    }

    var initial =
      hiddenHtml && hiddenHtml.value
        ? hiddenHtml.value
        : "<p><br></p>";

    var quill = new Quill("#pd-quill-editor", {
      theme: "snow",
      placeholder: "상품 상세정보를 입력하세요.",
      modules: {
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          [{ header: [1, 2, false] }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ align: [] }],
          ["link", "image"],
          ["clean"],
        ],
      },
    });

    try {
      quill.clipboard.dangerouslyPasteHTML(initial);
    } catch (e) {
      quill.setText("");
    }

    quill.on("text-change", function () {
      syncHidden(quill, hiddenHtml);
    });
    syncHidden(quill, hiddenHtml);

    quillInstance = quill;
    return quill;
  };

  window.DAESIN_getProductQuill = function () {
    return quillInstance;
  };

  window.DAESIN_syncQuillHidden = function () {
    var hiddenHtml = document.querySelector("#pd-memo-html");
    if (quillInstance && hiddenHtml) {
      syncHidden(quillInstance, hiddenHtml);
    }
  };
})();
