import { useEffect } from "react";

export const useSingleClickElements = ({
  selector = "a, button, [data-clickable]",
  timeoutMs = 1500,
}: {
  selector?: string;
  timeoutMs?: number;
} = {}) => {
  useEffect(() => {
    const clickedElements = new WeakSet<Element>();

    const handleClick = (e: Event) => {
      let target = e.target as HTMLElement | null;

      // Cerca l'elemento cliccabile nel DOM
      while (target && !target.matches(selector)) {
        target = target.parentElement;
      }

      if (!target || !target.matches(selector)) return;

      if (clickedElements.has(target)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return;
      }

      clickedElements.add(target);

      setTimeout(() => {
        clickedElements.delete(target!);
      }, timeoutMs);
    };

    // Aggiungiamo sia click che touchstart per mobile responsiveness
    document.addEventListener("click", handleClick, true);
    document.addEventListener("touchstart", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("touchstart", handleClick, true);
    };
  }, [selector, timeoutMs]);
};
