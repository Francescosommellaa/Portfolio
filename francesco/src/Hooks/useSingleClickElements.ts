import { useEffect } from "react";

export const useSingleClickElements = ({
  selector = "a, button, [data-clickable], [role='button']",
  timeoutMs = 1500,
}: {
  selector?: string;
  timeoutMs?: number;
} = {}) => {
  useEffect(() => {
    const clickedElements = new WeakSet<Element>();

    const handleClick = (e: Event) => {
      let target = e.target as HTMLElement | null;

      while (target && !target.matches(selector)) {
        target = target.parentElement;
      }

      if (!target || !target.matches(selector)) return;

      if (clickedElements.has(target)) {
        e.stopImmediatePropagation();
        e.preventDefault();
        return;
      }

      clickedElements.add(target);

      setTimeout(() => {
        clickedElements.delete(target!);
      }, timeoutMs);
    };

    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [selector, timeoutMs]);
};
