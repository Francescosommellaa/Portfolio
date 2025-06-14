import { useEffect, useState } from "react";

export const useScrollDirection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const bottomReached =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (bottomReached) {
        setIsVisible(true);
      } else if (window.scrollY < lastScroll) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      lastScroll = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
};
