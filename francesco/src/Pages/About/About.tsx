import React from "react";

// Scss
import "./About.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";

const About: React.FC = () => {
  const Size = useSize();

  return (
    <section id="about">
      <div className="title">
        <h1 className={`h1-${Size}`}>
          <span className={`scriptT-${Size}`}>A</span>bout
        </h1>
      </div>
    </section>
  );
};

export default About;
