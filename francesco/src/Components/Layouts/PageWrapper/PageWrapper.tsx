import React from "react";

// Scss
import "./PageWrapper.scss";

// Hooks
import { useScrollReset } from "../../../Hooks/useScrollReset";

interface PageWrapperProps {
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  className = "",
  children,
  fullWidth = false,
}) => {
  useScrollReset();
  return (
    <div
      className={`page-wrapper ${
        fullWidth ? "full-width-section" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
