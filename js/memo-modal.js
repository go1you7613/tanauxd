(function () {
  "use strict";

  function resolveModal(selectorOrId, fallbackModal) {
    if (!selectorOrId) {
      return fallbackModal;
    }

    if (selectorOrId.charAt(0) === "#") {
      return document.querySelector(selectorOrId);
    }

    return document.getElementById(selectorOrId);
  }

  function setModalOpen(modal, isOpen) {
    if (!modal) {
      return;
    }

    modal.classList.toggle("is-open", isOpen);
    modal.setAttribute("aria-hidden", isOpen ? "false" : "true");
  }

  function initMemoModal() {
    var defaultModal = document.getElementById("memoModal");
    var openButtons = document.querySelectorAll("[data-modal-target], [data-memo-open]");
    var closeButtons = document.querySelectorAll("[data-modal-close], [data-memo-close]");
    var initializedModals = [];

    if (!defaultModal && !openButtons.length) {
      return;
    }

    function registerOverlayClose(modal) {
      if (!modal || initializedModals.indexOf(modal) !== -1) {
        return;
      }

      initializedModals.push(modal);
      modal.addEventListener("click", function (event) {
        if (event.target === modal) {
          setModalOpen(modal, false);
        }
      });
    }

    function getModalFromTrigger(trigger) {
      var selector = trigger.getAttribute("data-modal-target") || trigger.getAttribute("data-memo-target");
      return resolveModal(selector, defaultModal);
    }

    function getModalFromCloseButton(button) {
      var selector = button.getAttribute("data-modal-close");
      var selectedModal = resolveModal(selector, null);
      if (selectedModal) {
        return selectedModal;
      }

      return button.closest(".memo-modal") || defaultModal;
    }

    openButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var modal = getModalFromTrigger(button);
        registerOverlayClose(modal);
        setModalOpen(modal, true);
      });
    });

    closeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var modal = getModalFromCloseButton(button);
        setModalOpen(modal, false);
      });
    });

    registerOverlayClose(defaultModal);

    document.addEventListener("keydown", function (event) {
      var openModals;
      if (event.key !== "Escape") {
        return;
      }

      openModals = document.querySelectorAll(".memo-modal.is-open");
      if (openModals.length) {
        setModalOpen(openModals[openModals.length - 1], false);
      }
    });
  }

  initMemoModal();
})();
