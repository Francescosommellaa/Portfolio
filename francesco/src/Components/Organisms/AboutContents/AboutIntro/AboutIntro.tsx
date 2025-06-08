import React from "react";

// Scss
import "./AboutIntro.scss";

// Atoms
import InlineImage from "../../../Atoms/InlineComponents/InlineImage";

// Hooks
import { useSize } from "../../../../Hooks/useSize";

// Dati
import AboutContent from "../../../Data/About";

const AboutIntro: React.FC = () => {
  const Size = useSize();

  return (
    <section className={`about-intro about-intro--${Size}`}>
      <div className="about-intro__container">
        <div className="about-intro__container__top">
          <p className={`paragraph-${Size}`}>{AboutContent.intro.paragraph}</p>
        </div>

        <div className="about-intro__container__image">
          <InlineImage folder="Me" name="About" size={Size} />
        </div>

        <div className="about-intro__container__bottom">
          <span className={`paragraph-${Size}`}>
            Mi appassiona creare idee, elementi visivi in movimento e tipografia
            in progetti memorabili.
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
