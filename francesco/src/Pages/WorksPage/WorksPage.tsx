import React from "react";

// SCSS
import "./WorksPage.scss";

// Atoms
import DesktopNav from "../../Components/Organisms/DesktopNav/DesktopNav";

// Organisms
import CarouselWorks from "../../Components/Organisms/CarouselWorks/CarouselWorks";

// Hooks
import { useSize } from "../../Hooks/useSize";
import InlineIcon from "../../Components/Atoms/InlineItems/InlineIcon";

// Layout
import PageWrapper from "../../Components/Layouts/PageWrapper/PageWrapper";

const Works: React.FC = () => {
  const Size = useSize();
  const isDesktop = Size === "L";

  return (
    <PageWrapper className="lavori">
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
          <InlineIcon folder="Icons" name="DownArrow" size={Size} />
        </div>
      )}

      {/* CAROSELLO LAVORI */}
      <CarouselWorks />
    </PageWrapper>
  );
};

export default Works;
