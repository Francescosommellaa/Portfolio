import React from "react";
import "./PageWrapper.scss";

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
