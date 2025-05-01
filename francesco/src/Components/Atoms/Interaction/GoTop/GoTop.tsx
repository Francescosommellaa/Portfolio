import React, { useEffect, useState } from "react";

// SCSS
import "./GoTop.scss";

const GoTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button className="go-top-button" onClick={handleClick}>
        <img src="/Icon/Name=Arrow-top, Dimension=S.svg" alt="Go to top" />
      </button>
    )
  );
};

export default GoTop;
