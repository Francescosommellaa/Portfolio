import { useRef, useEffect } from 'react';

export const useHorizontalScroll = (setHasMoved?: (val: boolean) => void) => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let lastMove = 0;

    const handleDown = (e: MouseEvent | TouchEvent) => {
      if (!(e.target instanceof Node) || !el.contains(e.target)) return;

      isDown = true;
      setHasMoved?.(false);
      el.classList.add("active");
      document.body.style.userSelect = "none";

      const clientX = "touches" in e ? e.touches[0].clientX : e.pageX;
      startX = clientX;
      scrollLeft = el.scrollLeft;
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDown) return;

      const clientX = "touches" in e ? e.touches[0].clientX : e.pageX;
      const walk = clientX - startX;

      if (Math.abs(walk) > 1) {
        setHasMoved?.(true); // ✅ appena superiamo 1px
      }

      e.preventDefault();
      el.scrollLeft = scrollLeft - walk * 1.2;
      lastMove = walk * 1.2;
    };

    const handleUp = () => {
      isDown = false;
      el.classList.remove("active");
      document.body.style.userSelect = "auto";

      if (Math.abs(lastMove) > 10) {
        let velocity = lastMove * 0.3;
        const inertia = () => {
          if (Math.abs(velocity) < 0.5) return;

          const newScroll = el.scrollLeft - velocity;

          if (newScroll <= 0) {
            el.scrollLeft = 0;
            return;
          }
          if (newScroll >= el.scrollWidth - el.clientWidth) {
            el.scrollLeft = el.scrollWidth - el.clientWidth;
            return;
          }

          el.scrollLeft = newScroll;
          velocity *= 0.93;
          requestAnimationFrame(inertia);
        };
        inertia();
      }
    };

    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchstart", handleDown, { passive: false });
    window.addEventListener("touchmove", handleMove, { passive: false });
    window.addEventListener("touchend", handleUp);

    return () => {
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchstart", handleDown);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleUp);
    };
  }, [setHasMoved]);

  return elRef;
};
