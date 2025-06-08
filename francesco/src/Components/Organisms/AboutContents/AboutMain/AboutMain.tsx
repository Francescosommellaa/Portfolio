import React from "react";

// Scss
import "./AboutMain.scss";

// Data
import AboutContent from "../../../Data/About";

// Atoms
import InlineIcon from "../../../Atoms/InlineComponents/InlineIcon";

// Hooks
import { useSize } from "../../../../Hooks/useSize";

const AboutMain: React.FC = () => {
  const Size = useSize();

  return (
    <section className={`about-main about-main--${Size}`}>
      {/* Skills subtitle */}
      <div className="about-main__skills">
        <InlineIcon folder="Icons" size="X" name="Ellipse" />
        <p className={`paragraph-${Size}`}>{AboutContent.skillsSubtitle}</p>
      </div>

      {/* Design Philosophy */}
      <div className="about-main__philosophy">
        {AboutContent.designPhilosophy.map((step) => (
          <div key={step.title} className="about-main__step">
            <h3 className={`about-main__title scriptP-${Size}`}>
              {step.title}
            </h3>
            <p className={`paragraph-${Size}`}>{step.description}</p>
          </div>
        ))}
      </div>

      {/* Clienti */}
      <div className="about-main__clients">
        <InlineIcon folder="Icons" size="X" name="Ellipse" />
        <p className={`paragraph-${Size} about-main__clients-subtitle`}>
          {AboutContent.clientsSubtitle}
        </p>
      </div>
      <ul className="about-main__client-list">
        {AboutContent.clients.map((client) => (
          <li className={`paragraph-${Size}`} key={client}>
            {client}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutMain;
