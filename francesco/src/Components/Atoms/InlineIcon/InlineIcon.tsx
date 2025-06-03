import React, { useEffect, useRef } from "react";

interface InlineIconProps {
  folder: string;
  name: string;
  size: "S" | "M" | "L" | "X";
  className?: string;
}

const InlineIcon: React.FC<InlineIconProps> = ({
  folder,
  name,
  size,
  className,
}) => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = `assets/${folder}/Name=${name}, Dimension=${size}.svg`;

    fetch(path)
      .then((res) =>
        res.ok ? res.text() : Promise.reject(`Icon not found: ${path}`)
      )
      .then((svg) => {
        if (iconRef.current) iconRef.current.innerHTML = svg;
      })
      .catch((err) => console.error(err));
  }, [className, folder, name, size]);

  return (
    <div
      ref={iconRef}
      className={`inline-icon ${className}`}
      aria-hidden="true"
    />
  );
};

export default InlineIcon;
