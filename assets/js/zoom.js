// Initialize medium zoom.
$(document).ready(function () {
  const zoomableImages = [...document.querySelectorAll("[data-zoomable]")];
  medium_zoom = mediumZoom(zoomableImages, {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
  });

  const preloadedZoomSources = new Set();

  function preloadZoomSource(image) {
    const src = image.dataset.zoomSrc;
    if (!src || preloadedZoomSources.has(src)) return;
    preloadedZoomSources.add(src);

    const preloader = new Image();
    preloader.decoding = "async";
    preloader.src = src;
  }

  zoomableImages.forEach((image) => {
    image.addEventListener("pointerenter", () => preloadZoomSource(image), { once: true });
    image.addEventListener("focus", () => preloadZoomSource(image), { once: true });
    image.addEventListener("touchstart", () => preloadZoomSource(image), { once: true, passive: true });
  });

  const requestIdle = window.requestIdleCallback || ((callback) => window.setTimeout(callback, 1200));
  requestIdle(() => {
    let index = 0;
    function preloadNext() {
      if (index >= zoomableImages.length) return;
      preloadZoomSource(zoomableImages[index]);
      index += 1;
      window.setTimeout(preloadNext, 250);
    }
    preloadNext();
  });
});
