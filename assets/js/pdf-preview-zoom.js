document.addEventListener("DOMContentLoaded", () => {
  const triggers = [...document.querySelectorAll("[data-pdf-preview]")];
  if (!triggers.length) return;

  const modal = document.createElement("div");
  modal.className = "publication-pdf-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", "Expanded publication preview");
  modal.innerHTML = `
    <div class="publication-pdf-dialog">
      <button class="publication-pdf-close" type="button" aria-label="Close preview">&times;</button>
      <object type="application/pdf"></object>
    </div>
  `;
  const modalHost = document.querySelector(".publications") || document.body;
  modalHost.appendChild(modal);

  const dialog = modal.querySelector(".publication-pdf-dialog");
  const closeButton = modal.querySelector(".publication-pdf-close");
  const object = modal.querySelector("object");

  function closePreview() {
    modal.classList.remove("open");
    object.removeAttribute("data");
  }

  function openPreview(trigger) {
    const image = trigger.querySelector("img");
    const ratio = image?.naturalWidth && image?.naturalHeight ? image.naturalWidth / image.naturalHeight : 1.45;
    const maxHeight = window.innerHeight - 56;
    const maxWidth = Math.min(1280, window.innerWidth - 48);
    const width = Math.min(maxWidth, maxHeight * ratio);

    dialog.style.width = `${Math.max(280, width)}px`;
    dialog.style.height = `${Math.max(220, width / ratio)}px`;
    object.setAttribute("data", `${trigger.dataset.pdfPreview}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`);
    modal.classList.add("open");
    closeButton.focus();
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => openPreview(trigger));
    trigger.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openPreview(trigger);
    });
  });

  closeButton.addEventListener("click", closePreview);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closePreview();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) closePreview();
  });
});
