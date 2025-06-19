import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTopUniversal } from "../Utils/scrollToTopUniversal";

export const useScrollReset = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToTopUniversal();
  }, [location.pathname]);
};
