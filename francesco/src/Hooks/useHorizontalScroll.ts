import { useRef, useEffect } from "react";


export const useHorizontalScroll = (setHasMoved?: (val: boolean) => void, forceDisable?: boolean) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch || forceDisable) return;

    const el = ref.current;
    if (!el) return;

    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;
    let lastX = 0;
    let lastTime = 0;
    let velocity = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setHasMoved?.(false);
      el.classList.add("dragging");
      document.body.style.userSelect = "none";

      startX = e.pageX;
      scrollStart = el.scrollLeft;
      lastX = e.pageX;
      lastTime = performance.now();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const dx = e.pageX - startX;
      el.scrollLeft = scrollStart - dx * 1.2;

      const now = performance.now();
      const dt = now - lastTime;
      velocity = dt > 0 ? (e.pageX - lastX) / dt : 0;

      lastX = e.pageX;
      lastTime = now;

      if (Math.abs(dx) > 1) setHasMoved?.(true);
      e.preventDefault();
    };

    const onMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      el.classList.remove("dragging");
      document.body.style.userSelect = "auto";

      let inertiaVelocity = velocity * 16;
      const friction = 0.93;

      const inertia = () => {
        if (Math.abs(inertiaVelocity) < 0.1) return;
        el.scrollLeft -= inertiaVelocity;
        inertiaVelocity *= friction;
        if (el.scrollLeft <= 0 || el.scrollLeft >= el.scrollWidth - el.clientWidth) return;
        requestAnimationFrame(inertia);
      };

      inertia();
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mouseleave", onMouseUp);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mouseleave", onMouseUp);
    };
  }, [setHasMoved, forceDisable]);

  return ref;
};
