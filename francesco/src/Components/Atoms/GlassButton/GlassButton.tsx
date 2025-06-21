import React, { forwardRef } from "react";
import "./GlassButton.scss";
import { useAnimationGlassButton } from "./useAnimationGlassButton";

interface GlassButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ onClick, className = "", children }, ref) => {
    const animatedRef = useAnimationGlassButton(ref);

    return (
      <button
        ref={animatedRef}
        className={`glass-button ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);

export default GlassButton;
