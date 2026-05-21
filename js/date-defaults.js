(function () {
  function getTodayDateValue() {
    var now = new Date();
    var year = now.getFullYear();
    var month = String(now.getMonth() + 1).padStart(2, "0");
    var day = String(now.getDate()).padStart(2, "0");
    return year + "-" + month + "-" + day;
  }

  var today = getTodayDateValue();

  document.querySelectorAll('input[type="date"]').forEach(function (input) {
    input.value = today;
  });
})();
