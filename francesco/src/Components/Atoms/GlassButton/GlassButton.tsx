import React, { forwardRef, useEffect } from "react";

// Scss
import "./GlassButton.scss";

interface GlassButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ onClick, className = "", children = true }, ref) => {
    useEffect(() => {
      const element = (ref as React.RefObject<HTMLButtonElement>)?.current;
      if (!element) return;
    }, [ref]);

    return (
      <button
        ref={ref}
        className={`glass-button ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);

export default GlassButton;
