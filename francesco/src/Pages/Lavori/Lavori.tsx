import React from "react";

// Scss
import "./Lavori.scss";

// Atoms
import DesktopNav from "../../Components/Atoms/DesktopNav/DesktopNav";

// Hooks
import { useSize } from "../../Hooks/useSize";

const Lavori: React.FC = () => {
  const Size = useSize();
  const isDesktop = Size === "L";

  return (
    <section className="lavori">
      <div className="lavori__head">
        <span className={`sub-title-${Size}`}>
          TUTTI I MIEI LAVORI DAL 2022
        </span>
        <div className="title">
          <h1 className={`h1-${Size}`}>
            <span className={`h1-script-${Size}`}>L</span>avori
          </h1>
        </div>
        <span className={`sub-title-${Size}`}>
          SCORRI VERSO DESTRA PER VEDERLI TUTTI
        </span>
      </div>

      {isDesktop && <DesktopNav />}
    </section>
  );
};

export default Lavori;
