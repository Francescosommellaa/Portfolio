import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

export function useDarkSectionObserver(setIsDark: (v: boolean) => void) {
  const location = useLocation();

  const checkVisibility = useCallback(() => {
    const sections = document.querySelectorAll("[data-theme='dark']");
    let isVisible = false;

    for (const section of sections) {
      const rect = section.getBoundingClientRect();

      // Consideriamo visibile solo se almeno metà visibile
      const threshold = rect.height * 0.5;

      if (
        rect.top < window.innerHeight - threshold &&
        rect.bottom > threshold
      ) {
        isVisible = true;
        break;
      }
    }

    setIsDark(isVisible);
  }, [setIsDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleDark = entries.some((entry) => entry.isIntersecting);
        setIsDark(visibleDark);
      },
      { threshold: 0.5 } // ← qui ora richiediamo che almeno metà elemento sia visibile
    );

    const sections = document.querySelectorAll("[data-theme='dark']");
    sections.forEach((s) => observer.observe(s));

    // Fallback per sicurezza su cambio rotta
    const timeout = setTimeout(checkVisibility, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [location.pathname, checkVisibility]);

  return { checkVisibility };
}
