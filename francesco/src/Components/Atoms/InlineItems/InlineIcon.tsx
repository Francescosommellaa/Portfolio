import React, { useEffect, useRef, forwardRef } from "react";
import usePublicAsset from "../../../Hooks/usePublicAsset";

interface InlineIconProps {
  folder: string;
  name: string;
  size: "S" | "M" | "L" | "X";
  className?: string;
}

const InlineIcon = forwardRef<HTMLDivElement, InlineIconProps>(
  ({ folder, name, size, className }, forwardedRef) => {
    const localRef = useRef<HTMLDivElement>(null);
    const path = usePublicAsset(folder, `Name=${name}, Dimension=${size}.svg`);

    useEffect(() => {
      if (!path) return;

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
    }, [path, forwardedRef]);

    return (
      <div
        ref={forwardedRef || localRef}
        className={`inline-icon ${className || ""}`}
        aria-hidden="true"
      />
    );
  }
);

export default InlineIcon;
