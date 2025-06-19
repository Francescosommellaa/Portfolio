import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = (): void => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); // puoi usare "smooth" se preferisci
  }, [pathname]);
};

export default useScrollToTop;
