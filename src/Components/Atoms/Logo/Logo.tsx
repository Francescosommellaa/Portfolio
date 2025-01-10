import React from "react";

// SCSS
import "./Logo.scss";

interface LogoProps {
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ light = false }) => {
  const handleClick = () => {
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 24);
      }
    };
    scrollToTop();
  };

  return (
    <div
      className={`logo-text ${light ? "light" : ""}`}
      onClick={handleClick}
      aria-label="Scroll to top"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
    >
      © Design by Fra
    </div>
  );
};
export default Logo;
