import React, { useRef } from "react";

// SCSS
import "./Topbar.scss";

// Atoms
import InlineIcon from "../../Atoms/InlineItems/InlineIcon";

// Hooks
import { useSize } from "../../../Hooks/useSize";
import { useDarkMode } from "../../../Hooks/useDarkMode";

// Providers
import { useTransition } from "../../../Providers/TransitionProvider/TransitionContext";

interface Props {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Topbar: React.FC<Props> = ({ isSidebarOpen, toggleSidebar }) => {
  const Size = useSize();
  const isCompact = Size === "S" || Size === "M";
  const { navigateWithTransition } = useTransition();
  const { isDarkSectionVisible } = useDarkMode();

  const isDark = isSidebarOpen || isDarkSectionVisible;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Debounce per evitare click multipli
  const isThrottling = useRef(false);
  const safeToggleSidebar = () => {
    if (isThrottling.current) return;
    isThrottling.current = true;

    toggleSidebar();

    setTimeout(() => {
      isThrottling.current = false;
    }, 600); // stesso tempo della tua animazione sidebar
  };

  return (
    <header className={`topbar ${isDark ? "on-dark" : ""}`}>
      <div data-clickable className="left" onClick={scrollToTop}>
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
        <div
          data-clickable
          className="logo"
          onClick={() => {
            if (isCompact && isSidebarOpen) toggleSidebar();
            navigateWithTransition("/");
          }}
        >
          FRA<sup>©</sup>
        </div>
      </div>

      <div className={`right topBar-${Size}`}>
        {isCompact ? (
          <div
            data-clickable
            className={`menu-icon ${isSidebarOpen ? "open" : "close"}`}
            onClick={safeToggleSidebar}
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
