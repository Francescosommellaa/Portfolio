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
      if (onClick) {
        onClick();
      }
    };
    scrollToTop();
  };

  return <a className={`logo-text ${light ? "light" : ""}`}>© Design by Fra</a>;
};
export default Logo;
