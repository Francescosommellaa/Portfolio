import React, { useEffect, useState } from "react";

//Atoms
import InlineIcon from "../../Atoms/InlineIcon/InlineIcon";

//Scss
import "./Topbar.scss";

//Hooks
import { useSize } from "../../../Hooks/useSize";

//Providers
import { useTransition } from "../../../Providers/TransitionProvider/TransitionProvider";

interface Props {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Topbar: React.FC<Props> = ({ isSidebarOpen, toggleSidebar }) => {
  const Size = useSize();
  const isCompact = Size === "S" || Size === "M";
  const [isDark, setIsDark] = useState(isSidebarOpen);
  const { navigateWithTransition } = useTransition();

  useEffect(() => {
    if (isSidebarOpen) {
      setIsDark(true);
    } else {
      const timeout = setTimeout(() => {
        setIsDark(false);
      }, 680);

      return () => clearTimeout(timeout);
    }
  }, [isSidebarOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`topbar ${isDark ? "on-dark" : ""}`}>
      <div className="left" onClick={scrollToTop}>
        <InlineIcon folder="Logo" name="Logo" size={`${Size}`} />
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
