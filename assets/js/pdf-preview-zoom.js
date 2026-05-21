document.addEventListener("DOMContentLoaded", () => {
  const triggers = [...document.querySelectorAll("[data-pdf-zoom]")];
  if (!triggers.length) return;

  const modal = document.createElement("div");
  modal.className = "pdf-preview-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", "Expanded PDF preview");
  modal.innerHTML = `
    <div class="pdf-preview-dialog">
      <button class="pdf-preview-close" type="button" aria-label="Close PDF preview">&times;</button>
      <object type="application/pdf"></object>
    </div>
  `;
  const modalHost = document.querySelector(".publications") || document.body;
  modalHost.appendChild(modal);

  const closeButton = modal.querySelector(".pdf-preview-close");
  const object = modal.querySelector("object");

  function closePreview() {
    modal.classList.remove("open");
    object.removeAttribute("data");
    object.textContent = "";
  }

  function openPreview(trigger) {
    const pdf = trigger.dataset.pdfZoom;
    const fallback = trigger.dataset.pdfFallback;
    object.innerHTML = fallback ? `<img src="${fallback}" alt="">` : "";
    object.setAttribute("data", `${pdf}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=Fit`);
    modal.classList.add("open");
    closeButton.focus();
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => openPreview(trigger));
  });

  closeButton.addEventListener("click", closePreview);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closePreview();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) closePreview();
  });
});
