import React from "react";

// SCSS
import "./Topbar.scss";

// Molecules
import Sidebar from "../Sidebar/Sidebar";

// Atoms
import InlineIcon from "../../Atoms/InlineIcon/InlineIcon";

// Hooks
import { useSize } from "../../../Hooks/useSize";

const Topbar: React.FC = () => {
  const Size = useSize();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="topbar">
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

      <a href="/" className="center">
        <span className="logo">
          FRA<sup>©</sup>
        </span>
      </a>

      <p className={`right topBar-${Size}`}>
        Portfolio <br />
        v. 1.0
      </p>
    </header>
  );
};

export default Topbar;
