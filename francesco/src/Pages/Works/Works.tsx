import React from "react";

// SCSS
import "./Works.scss";

// Atoms
import DesktopNav from "../../Components/Atoms/DesktopNav/DesktopNav";

// Organisms
import CarouselWorks from "../../Components/Organisms/CarouselWorks/CarouselWorks";

// Hooks
import { useSize } from "../../Hooks/useSize";

const Works: React.FC = () => {
  const Size = useSize();
  const isDesktop = Size === "L";

  return (
    <section className="lavori">
      {/* HEAD */}
      <div className="lavori__head">
        <span className={`sub-title-${Size}`}>
          TUTTI I MIEI <br /> LAVORI DAL 2022
        </span>

        <div className="title">
          <h1 className={`h1-${Size}`}>
            <span className={`h1-script-${Size}`}>L</span>avori
          </h1>
        </div>

        <span className={`sub-title-${Size}`}>
          SCORRI VERSO DESTRA <br /> PER VEDERLI TUTTI
        </span>
      </div>

      {/* NAV */}
      {isDesktop && <DesktopNav />}

      {/* CAROSELLO LAVORI */}
      <CarouselWorks />
    </section>
  );
};

export default Works;
