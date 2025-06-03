import { useEffect } from 'react';

export const useAutoHideScrollbar = () => {
  useEffect(() => {
    const html = document.documentElement;
    let timeout: ReturnType<typeof setTimeout>;
    let hoverTimeout: ReturnType<typeof setTimeout> | null = null;
    let isNearScrollbar = false;

    const hideScrollbar = () => {
      html.classList.remove('scrolling');
    };

    const showScrollbar = () => {
      html.classList.add('scrolling');
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        if (!isNearScrollbar) {
          hideScrollbar();
        }
      }, 1000);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const distanceFromRight = window.innerWidth - e.clientX;
      const wasNear = isNearScrollbar;
      isNearScrollbar = distanceFromRight <= 16;

      // Se era vicino e adesso non lo è più
      if (wasNear && !isNearScrollbar) {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => {
          hideScrollbar();
        }, 1000);
      }

      // Se è appena entrato vicino, mostriamo subito
      if (!wasNear && isNearScrollbar) {
        html.classList.add('scrolling');
        if (hoverTimeout) clearTimeout(hoverTimeout);
      }
    };

    window.addEventListener('scroll', showScrollbar);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', showScrollbar);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, []);
};
