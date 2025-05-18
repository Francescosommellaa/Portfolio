import React from "react";

// SCSS
import "./Logo.scss";

interface LogoProps {
  light?: boolean;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ light = false, onClick }) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (onClick) onClick();
  };

  return (
    <a
      className={`logo-text ${light ? "light" : ""}`}
      onClick={handleClick}
      aria-label="Scroll to top"
      role="button"
    >
      © Francesco Sommella
    </a>
  );
};
export default Logo;
