export const scrollToTopUniversal = () => {
  // Scrolla il window
  window.scrollTo({ top: 0, behavior: "auto" });

  // Scrolla il documento (fallback per Safari, Firefox, ecc.)
  const root = document.scrollingElement || document.documentElement;
  root.scrollTo({ top: 0, behavior: "auto" });

  // Scrolla anche il body (fallback legacy)
  document.body.scrollTo({ top: 0, behavior: "auto" });

  // Scrolla eventuali container scrollabili
  const scrollables = Array.from(document.querySelectorAll<HTMLElement>("*")).filter(
    (el) => {
      const overflowY = window.getComputedStyle(el).overflowY;
      return (
        (overflowY === "scroll" || overflowY === "auto") &&
        el.scrollHeight > el.clientHeight
      );
    }
  );

  scrollables.forEach((el) => {
    el.scrollTo({ top: 0, behavior: "auto" });
  });

  // Forza un altro scroll dopo 1 frame per sicurezza
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  });
};
