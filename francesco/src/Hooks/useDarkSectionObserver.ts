import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useDarkSectionObserver(setIsDark: (v: boolean) => void) {
  const location = useLocation();

  useEffect(() => {
    const checkVisibility = () => {
      const sections = document.querySelectorAll("[data-theme='dark'], .dark-section");

      let isVisible = false;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          isVisible = true;
          break;
        }
      }

      setIsDark(isVisible);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleDark = entries.some((entry) => entry.isIntersecting);
        setIsDark(visibleDark);
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("[data-theme='dark'], .dark-section");
    sections.forEach((s) => observer.observe(s));

    // 🔥 Fallback al cambio rotta
    const timeout = setTimeout(checkVisibility, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [location.pathname, setIsDark]);
}
