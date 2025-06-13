import React from "react";

// SCSS
import "./Works.scss";

// Atoms
import DesktopNav from "../../Components/Atoms/DesktopNav/DesktopNav";

// Organisms
import CarouselWorks from "../../Components/Organisms/CarouselWorks/CarouselWorks";

// Hooks
import { useSize } from "../../Hooks/useSize";
import InlineIcon from "../../Components/Atoms/InlineComponents/InlineIcon";

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

        {isDesktop && (
          <span className={`sub-title-${Size}`}>
            TIENI PREUTO E SCORRI VERSO DESTRA PER VEDERLI TUTTI
          </span>
        )}
      </div>

      {/* NAV */}
      {isDesktop && <DesktopNav />}

      {/* ARROW */}
      {!isDesktop && (
        <div className="icon-arrow">
          <InlineIcon folder="Icons" name="Down-Arrow" size={Size} />
        </div>
      )}

      {/* CAROSELLO LAVORI */}
      <CarouselWorks />
    </section>
  );
};

export default Works;
