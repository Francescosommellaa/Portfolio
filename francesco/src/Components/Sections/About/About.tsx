import React from "react";

// SCSS
import "./About.scss";

//Hooks
import { useSize } from "../../../Hooks/useSize";

const About: React.FC = () => {
  const Size = useSize();

  return (
    <section className="faq-section">
      <h2 className={`title-h1-${Size}`}>About</h2>
    </section>
  );
};

export default About;
