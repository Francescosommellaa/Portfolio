import { useRef, useEffect } from 'react';

export const useHorizontalScroll = (setHasMoved?: (val: boolean) => void) => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let lastPosition = 0;
    let lastTime = 0;
    let velocity = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      setHasMoved?.(false);
      el.classList.add("active");
      document.body.style.userSelect = "none";

      startX = e.pageX;
      scrollLeft = el.scrollLeft;
      lastPosition = e.pageX;
      lastTime = performance.now();
      velocity = 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;

      const walk = e.pageX - startX;

      if (Math.abs(walk) > 1) {
        setHasMoved?.(true);
      }

      const now = performance.now();
      const deltaPos = e.pageX - lastPosition;
      const deltaTime = now - lastTime;

      velocity = deltaTime > 0 ? deltaPos / deltaTime : 0;

      lastPosition = e.pageX;
      lastTime = now;

      e.preventDefault();
      el.scrollLeft = scrollLeft - walk * 1.2;
    };

    const endDrag = () => {
      if (!isDown) return;

      isDown = false;
      el.classList.remove("active");
      document.body.style.userSelect = "auto";

      let inertiaVelocity = velocity * 16;
      const friction = 0.90;

      const inertia = () => {
        if (Math.abs(inertiaVelocity) < 0.1) return;

        el.scrollLeft -= inertiaVelocity;
        inertiaVelocity *= friction;

        if (el.scrollLeft <= 0) {
          el.scrollLeft = 0;
          return;
        }
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = el.scrollWidth - el.clientWidth;
          return;
        }

        requestAnimationFrame(inertia);
      };
      inertia();
    };

    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", endDrag);

    window.addEventListener("mouseup", endDrag);

    return () => {
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", endDrag);
      window.removeEventListener("mouseup", endDrag);
    };
  }, [setHasMoved]);

  return elRef;
};
