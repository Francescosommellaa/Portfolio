import React from "react";

// Scss
import "./AboutFooter.scss";

// Data
import AboutContent from "../../../Data/About";

// Atoms
import InlineIcon from "../../../Atoms/InlineComponents/InlineIcon";

// Hooks
import { useSize } from "../../../../Hooks/useSize";

const AboutFooter: React.FC = () => {
  const Size = useSize();

  return (
    <section className="intro">
      <p className={`paragraph-${Size}`}>{AboutContent.intro.paragraph}</p>
    </section>
  );
};

export default AboutFooter;
