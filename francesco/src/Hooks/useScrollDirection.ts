import { useEffect, useState } from "react";

interface ScrollVisibilityOptions {
  hideOnTop?: boolean;
  hideOnBottom?: boolean;
  topThreshold?: number;
  bottomThreshold?: number;
  initiallyVisible?: boolean;
}

export const useSmartScrollVisibility = ({
  hideOnTop = false,
  hideOnBottom = false,
  topThreshold = 50,
  bottomThreshold = 100,
  initiallyVisible = true,
}: ScrollVisibilityOptions = {}) => {
  const [isVisible, setIsVisible] = useState(initiallyVisible);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const scrolledToTop = window.scrollY <= topThreshold;
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - bottomThreshold;

      if (hideOnTop && scrolledToTop) {
        setIsVisible(false);
        return;
      }

      if (hideOnBottom && scrolledToBottom) {
        setIsVisible(false);
        return;
      }

      if (scrolledToBottom) {
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
  }, [hideOnTop, hideOnBottom, topThreshold, bottomThreshold, initiallyVisible]);

  return isVisible;
};
