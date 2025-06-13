import React, { useState } from "react";

// SCSS
import "./Topbar.scss";

// Atoms
import InlineIcon from "../InlineComponents/InlineIcon";

// Hooks
import { useSize } from "../../../Hooks/useSize";
import { useDarkSectionObserver } from "../../../Hooks/useDarkSectionObserver";

// Providers
import { useTransition } from "../../../Providers/TransitionProvider/TransitionContext";

interface Props {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Topbar: React.FC<Props> = ({ isSidebarOpen, toggleSidebar }) => {
  const Size = useSize();
  const isCompact = Size === "S" || Size === "M";
  const [isDark, setIsDark] = useState(false);
  const { navigateWithTransition } = useTransition();

  // Attiva rilevamento sezioni scure
  useDarkSectionObserver(setIsDark);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`topbar ${isDark ? "on-dark" : ""}`}>
      <div className="left" onClick={scrollToTop}>
        <InlineIcon folder="Logo" name="Logo" size={Size} />
        <div className="topbar__text">
          <p className={`topBar-${Size}`}>
            Aperto a
            <br />
            collaborazioni e offerte
          </p>
        </div>
      </div>

      <div className="center">
        <a
          className="logo"
          onClick={() => {
            if (isCompact && isSidebarOpen) toggleSidebar();
            navigateWithTransition("/Home");
          }}
        >
          FRA<sup>©</sup>
        </a>
      </div>

      <div className={`right topBar-${Size}`}>
        {isCompact ? (
          <div
            className={`menu-icon ${isSidebarOpen ? "open" : "close"}`}
            onClick={toggleSidebar}
          >
            <InlineIcon
              folder="Icons"
              name={isSidebarOpen ? "Close" : "Menu"}
              size={Size}
            />
          </div>
        ) : (
          <>
            Portfolio <br />
            v. 1.0
          </>
        )}
      </div>
    </header>
  );
};

export default Topbar;
