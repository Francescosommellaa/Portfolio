import React, { useEffect, useRef } from "react";

// SCSS
import "./Buttons.scss";

interface ButtonProps {
  size: "S" | "M" | "L";
  iconName?: string;
  text?: string;
  withIcon?: boolean;
  light?: boolean;
  withBorder?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  size,
  text,
  iconName,
  light = false,
  withIcon = true,
  withBorder = true,
  onClick = () => {},
}) => {
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (withIcon && size && iconName) {
      const svgPath = new URL(
        `/src/Assets/Icon/Name=${iconName}, Dimension=${size}.svg`,
        import.meta.url
      ).href;

      fetch(svgPath)
        .then((response) => response.text())
        .then((svgContent) => {
          if (svgRef.current) {
            svgRef.current.innerHTML = svgContent;
          }
        })
        .catch((error) =>
          console.error(`Errore nel caricamento dell'SVG: ${error}`)
        );
    }
  }, [size, withIcon, iconName]);
  return (
    <button
      className={`btn btn-${size} ${light ? "light" : ""} ${
        withBorder ? `border-${size}` : ""
      }`}
      onClick={onClick}
    >
      {text}
      {withIcon && size && iconName && (
        <div className="icon" ref={svgRef} aria-hidden="true" />
      )}
    </button>
  );
};

export default Button;
