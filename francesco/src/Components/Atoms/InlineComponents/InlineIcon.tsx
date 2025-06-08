import React, { useEffect, useRef, forwardRef } from "react";

interface InlineIconProps {
  folder: string;
  name: string;
  size: "S" | "M" | "L" | "X";
  className?: string;
}

const InlineIcon = forwardRef<HTMLDivElement, InlineIconProps>(
  ({ folder, name, size, className }, forwardedRef) => {
    const localRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const path = `assets/${folder}/Name=${name}, Dimension=${size}.svg`;

      fetch(path)
        .then((res) =>
          res.ok ? res.text() : Promise.reject(`Icon not found: ${path}`)
        )
        .then((svg) => {
          const target =
            (forwardedRef as React.RefObject<HTMLDivElement>)?.current ||
            localRef.current;
          if (target) target.innerHTML = svg;
        })
        .catch((err) => console.error(err));
    }, [className, folder, name, size, forwardedRef]);

    return (
      <div
        ref={forwardedRef || localRef}
        className={`inline-icon ${className}`}
        aria-hidden="true"
      />
    );
  }
);
export default InlineIcon;
