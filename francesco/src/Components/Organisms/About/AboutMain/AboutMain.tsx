import React from "react";

// Scss
import "./AboutMain.scss";

// Atoms
import InlineIcon from "../../../Atoms/InlineItems/InlineIcon";

// Hooks
import { useSize } from "../../../../Hooks/useSize";

// Data
import AboutContent from "../../../../Data/About";

// Animation
import { useAnimationAboutMain } from "./AnimationAboutMain";

const AboutMain: React.FC = () => {
  const Size = useSize();
  const { containerRef } = useAnimationAboutMain();

  return (
    <section className={`about-main`} ref={containerRef}>
      {/* Skills subtitle */}
      <div className="about-main__skills">
        <InlineIcon folder="Icons" size="X" name="Ellipse" />
        <span className={`subtitle-about-${Size}`}>
          {AboutContent.skillsSubtitle}
        </span>
      </div>

      {/* Design Philosophy */}
      <div className="about-main__philosophy">
        {AboutContent.designPhilosophy.map((step) => (
          <div key={step.title} className="step">
            <h3 className={`philosophy-title-X`}>{step.title}</h3>
            <p className={`philosophy-paragraph-X`}>{step.description}</p>
          </div>
        ))}
      </div>

      {/* Clienti */}
      <div className="about-main__clients">
        <InlineIcon folder="Icons" size="X" name="Ellipse" />
        <span className={`subtitle-about-${Size}`}>
          {AboutContent.clientsSubtitle}
        </span>
      </div>

      <ul className="about-main__client-list">
        {AboutContent.clients.map((client) => (
          <li className={`client-about-${Size}`} key={client}>
            {client}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutMain;
