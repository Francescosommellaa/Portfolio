import React, { useEffect, useRef } from "react";

// SCSS
import "./Button.scss";

interface ButtonProps {
  size: "S" | "M" | "L";
  iconName?: string;
  text?: string;
  light?: boolean;
  withBorder?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  size,
  text,
  iconName,
  light = false,
  withBorder = false,
  onClick = () => {},
}) => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (iconName) {
      const iconPath = `/Icon/Name=${iconName}, Dimension=${size}.svg`;

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
      className={`btn btn-${size} ${light ? "light" : ""} ${
        withBorder ? `border-${size}` : ""
      }`}
      onClick={onClick}
    >
      {text}
      {size && iconName && (
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
