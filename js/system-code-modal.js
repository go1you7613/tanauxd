const codeModal = document.getElementById("code-modal");
const codeModalTitle = document.getElementById("code-modal-title");
const codeModalOpenButtons = document.querySelectorAll("[data-code-modal-open]");
const codeModalCloseButtons = document.querySelectorAll("[data-code-modal-close]");

const codeFields = {
  group: document.getElementById("code-form-group"),
  value: document.getElementById("code-form-value"),
  name: document.getElementById("code-form-name"),
  order: document.getElementById("code-form-order"),
  desc: document.getElementById("code-form-desc"),
};

function setCodeUse(value) {
  const radio = document.querySelector(`input[name="code-use-flag"][value="${value}"]`);
  if (radio) radio.checked = true;
}

function clearCodeModal() {
  codeModalTitle.textContent = "코드 등록";
  codeFields.group.value = "";
  codeFields.value.value = "";
  codeFields.name.value = "";
  codeFields.order.value = "";
  codeFields.desc.value = "";
  setCodeUse("사용");
}

function fillCodeModalFromRow(row) {
  const cells = row.querySelectorAll("td");
  codeModalTitle.textContent = "코드 수정";
  codeFields.group.value = cells[1]?.textContent.trim() || "";
  codeFields.value.value = cells[2]?.textContent.trim() || "";
  codeFields.name.value = cells[3]?.textContent.trim() || "";
  codeFields.order.value = cells[4]?.textContent.trim() || "";
  codeFields.desc.value = cells[6]?.textContent.trim() || "";
  setCodeUse(cells[5]?.textContent.trim() || "사용");
}

function openCodeModal(mode, row) {
  if (mode === "edit" && row) {
    fillCodeModalFromRow(row);
  } else {
    clearCodeModal();
  }
  codeModal?.classList.add("is-open");
  codeModal?.setAttribute("aria-hidden", "false");
}

function closeCodeModal() {
  codeModal?.classList.remove("is-open");
  codeModal?.setAttribute("aria-hidden", "true");
}

codeModalOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openCodeModal(button.dataset.codeModalOpen, button.closest("tr"));
  });
});

codeModalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeCodeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCodeModal();
  }
});
