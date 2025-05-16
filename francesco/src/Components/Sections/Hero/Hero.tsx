import React from "react";

// SCSS
import "./Hero.scss";

// Hooks
import { useSize } from "../../../Hooks/useSize";
import InlineIcon from "../../../Hooks/InlineIcon";

//DB
import { heroContent } from "../../DB/Hero";

const Hero: React.FC = () => {
  const Size = useSize();

  return (
    <section className="hero-section">
      <div className="hero-header">
        <p className={`sommary title-h6-${Size}`}>{heroContent.role}</p>

        <h1 className={`title title-heroTitle-${Size}`}>
          <span className="name-first">{heroContent.name.first}</span>
          <span className="name-last">{heroContent.name.last}</span>
        </h1>
      </div>

      <div className={`hero-icons`}>
        {heroContent.icons.map((icon, idx) => (
          <InlineIcon key={idx} name={icon} size={`${Size}`} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
