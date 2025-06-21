import { useEffect } from "react";

export const useSingleClickElements = ({
  selector = "a, button, [data-clickable]",
  timeoutMs = 2000,
}: {
  selector?: string;
  timeoutMs?: number;
} = {}) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement | null;

      // Sali nella gerarchia DOM fino a trovare un elemento cliccabile
      while (target && !target.matches(selector)) {
        target = target.parentElement;
      }

      if (!target || !target.matches(selector)) return;

      if (target.dataset.clicked === "true") {
        e.preventDefault();
        e.stopImmediatePropagation();
        return;
      }

      target.dataset.clicked = "true";

      // Riabilita dopo X ms (opzionale)
      setTimeout(() => {
        target!.dataset.clicked = "false";
      }, timeoutMs);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [selector, timeoutMs]);
};
