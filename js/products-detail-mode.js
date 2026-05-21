(function () {
  "use strict";

  var viewPanel = document.querySelector(".product-detail-view");
  var editForm = document.querySelector(".product-detail-edit");
  var btnEnterEdit = document.querySelector("#pd-btn-enter-edit");
  var btnFooterCancel = document.querySelector("#pd-btn-cancel-edit");

  if (!viewPanel || !editForm) {
    return;
  }

  var editSnapshot = null;

  function captureState() {
    var getVal = function (id) {
      var el = document.getElementById(id);
      if (!el) {
        return "";
      }
      return "value" in el ? el.value : el.textContent || "";
    };
    var progress =
      (document.querySelector('input[name="pd-progress"]:checked') || {}).value ||
      "on";

    return {
      name: getVal("pd-name"),
      bank: getVal("pd-bank-code"),
      categoryIndex: document.getElementById("pd-category")
        ? document.getElementById("pd-category").selectedIndex
        : 0,
      lenderIndex: document.getElementById("pd-lender")
        ? document.getElementById("pd-lender").selectedIndex
        : 0,
      progress: progress,
      urlCounsel: getVal("pd-url-counsel"),
      urlAuth: getVal("pd-url-auth"),
      urlSign: getVal("pd-url-sign"),
      line1: getVal("pd-line-memo1"),
      line2: getVal("pd-line-memo2"),
      memoHtml: document.getElementById("pd-memo-html")
        ? document.getElementById("pd-memo-html").value
        : "",
      consentHint: document.getElementById("pd-consent-hint")
        ? document.getElementById("pd-consent-hint").textContent
        : "선택된 파일 없음",
      conditionHint: document.getElementById("pd-condition-hint")
        ? document.getElementById("pd-condition-hint").textContent
        : "선택된 파일 없음",
    };
  }

  function applyState(state) {
    if (!state) {
      return;
    }
    var setVal = function (id, v) {
      var el = document.getElementById(id);
      if (el) {
        if ("value" in el) {
          el.value = v;
        } else {
          el.textContent = v;
        }
      }
    };
    setVal("pd-name", state.name);
    setVal("pd-bank-code", state.bank);
    var cat = document.getElementById("pd-category");
    if (cat && state.categoryIndex != null) {
      cat.selectedIndex = state.categoryIndex;
    }
    var len = document.getElementById("pd-lender");
    if (len && state.lenderIndex != null) {
      len.selectedIndex = state.lenderIndex;
    }
    var prOn = document.querySelector('input[name="pd-progress"][value="on"]');
    var prOff = document.querySelector('input[name="pd-progress"][value="off"]');
    if (state.progress === "off" && prOff) {
      prOff.checked = true;
    } else if (prOn) {
      prOn.checked = true;
    }
    setVal("pd-url-counsel", state.urlCounsel);
    setVal("pd-url-auth", state.urlAuth);
    setVal("pd-url-sign", state.urlSign);
    setVal("pd-line-memo1", state.line1);
    setVal("pd-line-memo2", state.line2);
    var mh = document.getElementById("pd-memo-html");
    if (mh) {
      mh.value = state.memoHtml || "";
    }
    var ch = document.getElementById("pd-consent-hint");
    if (ch && state.consentHint) {
      ch.textContent = state.consentHint;
    }
    var condh = document.getElementById("pd-condition-hint");
    if (condh && state.conditionHint) {
      condh.textContent = state.conditionHint;
    }

    var fileInputs = document.querySelectorAll(
      '.product-detail-edit input[type="file"]'
    );
    fileInputs.forEach(function (inp) {
      inp.value = "";
    });

    var quill = window.DAESIN_getProductQuill && window.DAESIN_getProductQuill();
    if (quill && state.memoHtml != null) {
      try {
        quill.clipboard.dangerouslyPasteHTML(state.memoHtml || "<p><br></p>");
      } catch (e) {
        quill.setText("");
      }
      if (window.DAESIN_syncQuillHidden) {
        window.DAESIN_syncQuillHidden();
      }
    }
  }

  function displayOrDash(v) {
    var s = v != null ? String(v).trim() : "";
    return s === "" ? "-" : s;
  }

  function syncViewFromForm() {
    var getVal = function (id) {
      var el = document.getElementById(id);
      if (!el) {
        return "";
      }
      var raw = "value" in el ? el.value : el.textContent || "";
      return raw.trim();
    };
    var setSpan = function (id, text) {
      var el = document.getElementById(id);
      if (el) {
        el.textContent = displayOrDash(text);
      }
    };

    setSpan("pd-view-name", getVal("pd-name"));
    setSpan("pd-view-bank", getVal("pd-bank-code"));

    var cat = document.getElementById("pd-category");
    if (cat) {
      var catDisp =
        cat.value === "" ? "" : cat.options[cat.selectedIndex].text;
      setSpan("pd-view-category", catDisp);
    }

    var lend = document.getElementById("pd-lender");
    if (lend) {
      var lendDisp =
        lend.value === "" ? "" : lend.options[lend.selectedIndex].text;
      setSpan("pd-view-lender", lendDisp);
    }

    var prog =
      (document.querySelector('input[name="pd-progress"]:checked') || {}).value ===
      "off"
        ? "중지"
        : "진행";
    setSpan("pd-view-progress", prog);

    var ch = document.getElementById("pd-consent-hint");
    setSpan("pd-view-consent", ch ? ch.textContent : "선택된 파일 없음");
    var condh = document.getElementById("pd-condition-hint");
    setSpan("pd-view-condition", condh ? condh.textContent : "선택된 파일 없음");

    setSpan("pd-view-url-counsel", getVal("pd-url-counsel"));
    setSpan("pd-view-url-auth", getVal("pd-url-auth"));
    setSpan("pd-view-url-sign", getVal("pd-url-sign"));
    setSpan("pd-view-line1", getVal("pd-line-memo1"));
    setSpan("pd-view-line2", getVal("pd-line-memo2"));

    var memoBody = document.getElementById("pd-view-memo-body");
    var memoHidden = document.getElementById("pd-memo-html");
    var html = memoHidden ? memoHidden.value.trim() : "";
    if (memoBody) {
      if (!html || html === "<p><br></p>") {
        memoBody.innerHTML = "";
        memoBody.textContent = "-";
      } else {
        memoBody.textContent = "";
        memoBody.innerHTML = html;
      }
    }
  }

  function setEditing(isEdit) {
    viewPanel.hidden = isEdit;
    editForm.hidden = !isEdit;
    if (btnEnterEdit) {
      btnEnterEdit.hidden = isEdit;
    }
  }

  function enterEdit() {
    editSnapshot = captureState();
    setEditing(true);
    if (typeof window.DAESIN_initProductQuillMemo === "function") {
      window.DAESIN_initProductQuillMemo();
    }
    if (window.DAESIN_syncQuillHidden) {
      window.DAESIN_syncQuillHidden();
    }
  }

  function cancelEdit() {
    if (editSnapshot) {
      applyState(editSnapshot);
    }
    setEditing(false);
    editSnapshot = null;
  }

  function saveEdit() {
    if (window.DAESIN_syncQuillHidden) {
      window.DAESIN_syncQuillHidden();
    }
    syncViewFromForm();
    editSnapshot = captureState();
    setEditing(false);
  }

  if (btnEnterEdit) {
    btnEnterEdit.addEventListener("click", enterEdit);
  }
  if (btnFooterCancel) {
    btnFooterCancel.addEventListener("click", cancelEdit);
  }

  editForm.addEventListener("submit", function (e) {
    e.preventDefault();
    saveEdit();
  });

  var consentIn = document.getElementById("pd-consent-file");
  if (consentIn) {
    consentIn.addEventListener("change", function (e) {
      var f = e.target.files && e.target.files[0];
      var hint = document.getElementById("pd-consent-hint");
      if (hint) {
        hint.textContent = f ? f.name : "선택된 파일 없음";
      }
    });
  }

  var conditionIn = document.getElementById("pd-condition-file");
  if (conditionIn) {
    conditionIn.addEventListener("change", function (e) {
      var f = e.target.files && e.target.files[0];
      var hint = document.getElementById("pd-condition-hint");
      if (hint) {
        hint.textContent = f ? f.name : "선택된 파일 없음";
      }
    });
  }

  syncViewFromForm();
  editSnapshot = captureState();
})();
