(function () {
  "use strict";

  var viewPanel = document.querySelector(".branch-detail-view");
  var editForm = document.querySelector(".branch-detail-edit");
  var editButton = document.getElementById("branch-btn-edit");
  var cancelButton = document.getElementById("branch-btn-cancel");

  if (!viewPanel || !editForm || !editButton) {
    return;
  }

  function setEditMode(isEdit) {
    viewPanel.hidden = isEdit;
    editForm.hidden = !isEdit;
    editButton.hidden = isEdit;
  }

  editButton.addEventListener("click", function () {
    setEditMode(true);
  });

  if (cancelButton) {
    cancelButton.addEventListener("click", function () {
      setEditMode(false);
    });
  }

  editForm.addEventListener("submit", function (event) {
    event.preventDefault();
    setEditMode(false);
  });
})();
