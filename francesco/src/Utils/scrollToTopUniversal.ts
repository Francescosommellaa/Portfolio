// src/Utils/scrollToTopUniversal.ts
export const scrollToTopUniversal = () => {
  const allScrollableElements = Array.from(document.querySelectorAll("*")) as HTMLElement[];

  // Trova tutti gli elementi che hanno scrollTop > 0
  const scrolledElements = allScrollableElements.filter(
    (el) => el.scrollTop > 0 && el.scrollHeight > el.clientHeight
  );

  // Scrolla ogni elemento rilevante verso l'alto
  scrolledElements.forEach((el) => {
    el.scrollTo({ top: 0, behavior: "auto" });
  });

  // Esegui anche sul window/document come fallback
  const root = document.scrollingElement || document.documentElement;
  root.scrollTo({ top: 0, behavior: "auto" });
  window.scrollTo({ top: 0, behavior: "auto" });
};
