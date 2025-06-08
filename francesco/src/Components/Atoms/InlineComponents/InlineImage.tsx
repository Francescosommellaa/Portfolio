import React, { forwardRef } from "react";

interface InlineImageProps {
  folder: string;
  name: string;
  size: "S" | "M" | "L" | "X";
  alt?: string;
  className?: string;
}

const InlineImage = forwardRef<HTMLImageElement, InlineImageProps>(
  ({ folder, name, size, className = "", alt = "" }, ref) => {
    const path = `assets/${folder}/Name=${name}, Dimension=${size}.png`;

    return (
      <img
        ref={ref}
        src={path}
        alt={alt}
        className={`inline-image ${className}`}
        loading="lazy"
        draggable={false}
        aria-hidden={!alt}
      />
    );
  }
);

export default InlineImage;
