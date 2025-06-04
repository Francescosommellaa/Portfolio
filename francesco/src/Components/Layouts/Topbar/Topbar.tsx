import React, { useEffect, useState } from "react";
import "./Topbar.scss";
import InlineIcon from "../../Atoms/InlineIcon/InlineIcon";
import { useSize } from "../../../Hooks/useSize";
import { Link } from "react-router-dom";

interface Props {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Topbar: React.FC<Props> = ({ isSidebarOpen, toggleSidebar }) => {
  const Size = useSize();
  const isCompact = Size === "S" || Size === "M";
  const [isDark, setIsDark] = useState(isSidebarOpen);

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
            collaborazioni e offerte di lavoro
          </p>
        </div>
      </div>

      <div className="center">
        {" "}
        <Link to="/" onClick={scrollToTop}>
          <span className="logo">
            FRA<sup>©</sup>
          </span>
        </Link>
      </div>

      <div className={`right topBar-${Size}`}>
        {isCompact ? (
          <div
            className={`menu-icon ${isSidebarOpen ? "open" : ""}`}
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
