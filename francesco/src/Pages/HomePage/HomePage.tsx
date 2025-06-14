import React from "react";

// Scss
import "./HomePage.scss";

// Atoms
import DesktopNav from "../../Components/Atoms/DesktopNav/DesktopNav";
import InlineIcon from "../../Components/Atoms/InlineItems/InlineIcon";

// Hooks
import { useSize } from "../../Hooks/useSize";

//Layout
import PageWrapper from "../../Components/Layouts/PageWrapper/PageWrapper";

const Home: React.FC = () => {
  const Size = useSize();
  const isDesktop = Size === "L";

  return (
    <PageWrapper className="home">
      <div className="title">
        <h1 className={`h1-${Size}`}>
          <span className={`h1-script-${Size}`}>Fra</span> Sommella
        </h1>
      </div>

      {isDesktop && <DesktopNav />}

      <div className="home__main">
        <div className="bottom">
          <div className="block-p">
            <InlineIcon name="Star" size={Size} folder="Icons" />
            <p className={`paragraph-${Size}`}>
              Sono Francesco Sommella, ho 23 anni, vivo a Napoli e lavoro come
              designer e front-end developer indipendente.
            </p>
          </div>

          <InlineIcon
            folder="Illustrations"
            name="Illustration-1"
            size={Size}
          />

          <div className="block-p">
            {isDesktop && <InlineIcon name="Star" size={Size} folder="Icons" />}
            <p className={`paragraph-${Size}`}>
              Progetto esperienze digitali chiare, coinvolgenti e memorabili —
              pensate per lasciare il segno e generare valore.
            </p>
          </div>
        </div>

        <div>
          <span className="paragraph-X">Un Designer ordinario.</span>
          <span className="paragraph-X"> Con amore da Napoli.</span>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
