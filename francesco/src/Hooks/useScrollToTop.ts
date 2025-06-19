import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = (): void => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, behavior: "auto" });

    return () => {
    };
  }, [pathname]);
};

export default useScrollToTop;
