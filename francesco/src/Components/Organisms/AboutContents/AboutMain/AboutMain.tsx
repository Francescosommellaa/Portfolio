import React from "react";

// Scss
import "./AboutMain.scss";

// Atoms
import InlineIcon from "../../../Atoms/InlineComponents/InlineIcon";

// Hooks
import { useSize } from "../../../../Hooks/useSize";

// Data
import AboutContent from "../../../Data/About";

const AboutMain: React.FC = () => {
  const Size = useSize();

  return (
    <section className={`about-main`}>
      {/* Skills subtitle */}
      <div className="about-main__skills">
        <InlineIcon folder="Icons" size="X" name="Ellipse" />
        <p className={`subtitle-about-${Size}`}>
          {AboutContent.skillsSubtitle}
        </p>
      </div>

      {/* Design Philosophy */}
      <div className="about-main__philosophy">
        {AboutContent.designPhilosophy.map((step) => (
          <div key={step.title} className="about-main__step">
            <h3 className={`philosophy-title-X`}>{step.title}</h3>
            <p className={`philosophy-paragraph-X`}>{step.description}</p>
          </div>
        ))}
      </div>

      {/* Clienti */}
      <div className="about-main__clients">
        <InlineIcon folder="Icons" size="X" name="Ellipse" />
        <p className={`subtitle-about-${Size}`}>
          {AboutContent.clientsSubtitle}
        </p>
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
