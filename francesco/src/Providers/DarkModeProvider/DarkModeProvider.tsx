import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { DarkModeContextType, DarkModeContext } from "../../Hooks/useDarkMode";

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isDarkSectionVisible, setIsDarkSectionVisible] = useState(false);

  const checkVisibility = useCallback(() => {
    const darkSections = document.querySelectorAll<HTMLElement>(
      "[data-theme='dark']"
    );
    let visible = false;

    darkSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const threshold = rect.height * 0.05;

      if (
        rect.top < window.innerHeight - threshold &&
        rect.bottom > threshold
      ) {
        visible = true;
      }
    });

    setIsDarkSectionVisible(visible);
  }, []);

  useEffect(() => {
    observerRef.current?.disconnect();

    const observer = new IntersectionObserver(
      () => {
        checkVisibility();
      },
      { threshold: 0.04 }
    );

    observerRef.current = observer;

    const rafId = requestAnimationFrame(() => {
      const sections = document.querySelectorAll("[data-theme='dark']");
      sections.forEach((section) => observer.observe(section));
      checkVisibility();
    });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [location.pathname, checkVisibility]);

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);
    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, [checkVisibility]);

  const value: DarkModeContextType = {
    isDarkSectionVisible,
    forceRecheck: checkVisibility,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};
