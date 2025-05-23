import React, { useEffect, useRef } from "react";

// SCSS
import "./Button.scss";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "S" | "M" | "L" | "FULL";
  iconName?: string;
  text?: string;
  light?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  text,
  iconName,
  light = false,
  type = "button",
  onClick = () => {},
}) => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (iconName) {
      const iconPath = `assets/Icon/Name=${iconName}, Dimension=${size}.svg`;

      fetch(iconPath)
        .then((response) => {
          if (response.ok) {
            return response.text();
          } else {
            console.error(`Icon not found: ${iconPath}`);
            return null;
          }
        })
        .then((svgContent) => {
          if (svgContent && iconRef.current) {
            iconRef.current.innerHTML = svgContent;
          }
        })
        .catch((error) => {
          console.error("Error loading icon:", error);
        });
    } else if (iconRef.current) {
      iconRef.current.innerHTML = "";
    }
  }, [iconName, size]);
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        btn
        btn-${variant} 
        btn-${size || "M"}
        ${light ? "light" : "dark"}
        ${!text && iconName ? "only-icon" : ""}
      `}
    >
      {text}
      {iconName && (
        <div
          ref={iconRef}
          className={`icon ${light ? "light" : ""}`}
          aria-hidden="true"
        />
      )}
    </button>
  );
};

export default Button;
