import React, { useEffect, useRef } from "react";

interface InlineIconProps {
  name: string;
  size: "S" | "M" | "L";
  className?: string;
}

const InlineIcon: React.FC<InlineIconProps> = ({
  name,
  size,
  className = "",
}) => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = `/Icon/Name=${name}, Dimension=${size}.svg`;

    fetch(path)
      .then((res) =>
        res.ok ? res.text() : Promise.reject(`Icon not found: ${path}`)
      )
      .then((svg) => {
        if (iconRef.current) iconRef.current.innerHTML = svg;
      })
      .catch((err) => console.error(err));
  }, [name, size]);

  return (
    <div
      ref={iconRef}
      className={`inline-icon ${className}`}
      aria-hidden="true"
    />
  );
};

export default InlineIcon;
