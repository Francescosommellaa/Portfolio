import { useCallback } from "react";

export function useCombinedRefs<T>(...refs: React.Ref<T>[]): React.RefCallback<T> {
  return useCallback((node: T) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") ref(node);
      else (ref as React.MutableRefObject<T | null>).current = node;
    });
  }, [refs]);
}
