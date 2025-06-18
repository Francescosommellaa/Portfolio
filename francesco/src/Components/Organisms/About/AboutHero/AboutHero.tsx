import React from "react";

// Scss
import "./AboutHero.scss";

// Atoms
import InlineImage from "../../../Atoms/InlineItems/InlineImage";

// Hooks
import { useSize } from "../../../../Hooks/useSize";

// Data
import AboutContent from "../../../../Data/About";

const AboutHero: React.FC = () => {
  const Size = useSize();

  return (
    <section className={`about-intro`} data-theme="dark">
      <div className="about-intro__container">
        <div className="about-intro__container__top">
          <p className={`intro-about-${Size}`}>
            {AboutContent.intro.paragraph}
          </p>
        </div>

        <div className="about-intro__container__image">
          <InlineImage folder="Me" name="About" size={Size} />
        </div>

        <div className="about-intro__container__bottom">
          <span className={`intro-about-${Size}`}>
            Mi appassiona creare idee, elementi visivi in movimento e tipografia
            in progetti memorabili.
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
