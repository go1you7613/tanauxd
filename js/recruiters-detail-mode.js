(function () {
  "use strict";

  var viewPanel = document.querySelector(".recruiter-detail-view");
  var editForm = document.querySelector(".recruiter-detail-edit");
  var editButton = document.getElementById("recruiter-btn-edit");
  var cancelButton = document.getElementById("recruiter-btn-cancel");

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
