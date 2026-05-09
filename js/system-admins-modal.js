const adminModal = document.getElementById("admin-modal");
const adminModalTitle = document.getElementById("admin-modal-title");
const adminModalOpenButtons = document.querySelectorAll("[data-admin-modal-open]");
const adminModalCloseButtons = document.querySelectorAll("[data-admin-modal-close]");

const adminFields = {
  name: document.getElementById("admin-form-name"),
  id: document.getElementById("admin-form-id"),
  role: document.getElementById("admin-form-role"),
  phone: document.getElementById("admin-form-phone"),
};

function setAdminUse(value) {
  const radio = document.querySelector(`input[name="admin-use-flag"][value="${value}"]`);
  if (radio) radio.checked = true;
}

function clearAdminModal() {
  adminModalTitle.textContent = "관리자 등록";
  adminFields.name.value = "";
  adminFields.id.value = "";
  adminFields.role.value = "관리자";
  adminFields.phone.value = "";
  setAdminUse("사용");
}

function fillAdminModalFromRow(row) {
  const cells = row.querySelectorAll("td");
  adminModalTitle.textContent = "관리자 수정";
  adminFields.name.value = cells[1]?.textContent.trim() || "";
  adminFields.id.value = cells[2]?.textContent.trim() || "";
  adminFields.role.value = cells[3]?.textContent.trim() || "관리자";
  adminFields.phone.value = cells[2]?.textContent.trim() === "admin01" ? "010-1111-2222" : "010-2222-3333";
  setAdminUse(cells[4]?.textContent.trim() || "사용");
}

function openAdminModal(mode, row) {
  if (mode === "edit" && row) {
    fillAdminModalFromRow(row);
  } else {
    clearAdminModal();
  }
  adminModal?.classList.add("is-open");
  adminModal?.setAttribute("aria-hidden", "false");
}

function closeAdminModal() {
  adminModal?.classList.remove("is-open");
  adminModal?.setAttribute("aria-hidden", "true");
}

adminModalOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openAdminModal(button.dataset.adminModalOpen, button.closest("tr"));
  });
});

adminModalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeAdminModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeAdminModal();
  }
});
