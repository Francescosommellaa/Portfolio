import React from "react";

// Scss
import "./PageWrapper.scss";

// Hooks
import useScrollToTopOnRouteChange from "../../../Hooks/useScrollToTop";
import { useSingleClickElements } from "../../../Hooks/useSingleClickElements";

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
  useScrollToTopOnRouteChange();
  useSingleClickElements();

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
