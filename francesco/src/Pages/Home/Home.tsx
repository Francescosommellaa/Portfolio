import React from "react";

// SCSS
import "./Home.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";

// Organisms
import DesktopNav from "../../Components/Organism/DesktopNav/DesktopNav";
import InlineIcon from "../../Components/Atoms/InlineIcon/InlineIcon";

const Home: React.FC = () => {
  const Size = useSize();
  const isDesktop = Size === "L";

  return (
    <section className="home">
      <div className="title">
        <h1 className={`h1-${Size}`}>
          <span className={`scriptT-${Size}`}>Fra</span> Sommella
        </h1>
      </div>

      {isDesktop && <DesktopNav />}

      <div className="home__bottom">
        <div className="block-p">
          <InlineIcon name="Star" size={Size} folder="Icons" />
          <p className={`paragraph-${Size}`}>
            Creo esperienze digitali essenziali, pensate per coinvolgere,
            convertire e restare impresse nella mente di chi le vive.
          </p>
        </div>

        <InlineIcon folder="Illustrations" name="Illustration-1" size={Size} />

        <div className="block-p no-icon">
          <InlineIcon name="Star" size={Size} folder="Icons" />
          <p className={`paragraph-${Size}`}>
            Creo esperienze digitali essenziali, pensate per coinvolgere,
            convertire e restare impresse nella mente di chi le vive.
          </p>
        </div>
      </div>

      <div className="home__tagline">
        <span className="paragraph-X">Un Designer ordinario.</span>
        <span className="paragraph-X"> Con amore da Napoli.</span>
      </div>
    </section>
  );
};

export default Home;
