(function () {
  "use strict";

  var summaryData = {
    hq: {
      total: {
        amount: "88,400만원",
        approved: "214건",
        rate: "12.1%",
        registered: "1,768건",
        received: "132건"
      },
      year: {
        amount: "35,800만원",
        approved: "91건",
        rate: "12.3%",
        registered: "739건",
        received: "48건"
      }
    },
    branch: {
      total: {
        amount: "12,600만원",
        approved: "28건",
        rate: "9.8%",
        registered: "312건",
        received: "63건"
      },
      year: {
        amount: "5,000만원",
        approved: "9건",
        rate: "9.5%",
        registered: "95건",
        received: "19건"
      }
    }
  };

  function updateSummary(card, mode) {
    var scope = card.getAttribute("data-dashboard-summary");
    var data = summaryData[scope] && summaryData[scope][mode];

    if (!data) {
      return;
    }

    card.querySelectorAll("[data-summary-field]").forEach(function (field) {
      var key = field.getAttribute("data-summary-field");
      if (data[key]) {
        field.textContent = data[key];
      }
    });

    card.querySelectorAll("[data-summary-mode]").forEach(function (button) {
      var isActive = button.getAttribute("data-summary-mode") === mode;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  document.querySelectorAll("[data-dashboard-summary]").forEach(function (card) {
    card.querySelectorAll("[data-summary-mode]").forEach(function (button) {
      button.addEventListener("click", function () {
        updateSummary(card, button.getAttribute("data-summary-mode"));
      });
    });
  });
})();
