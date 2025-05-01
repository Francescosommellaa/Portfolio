import React from "react";

// SCSS
import "./Logo.scss";

interface LogoProps {
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ light = false }) => {
  const handleClick = () => {
    const container = document.getElementById("root");
    if (!container) return;

    container.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
