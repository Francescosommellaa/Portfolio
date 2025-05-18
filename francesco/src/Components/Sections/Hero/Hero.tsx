import React from "react";

// SCSS
import "./Hero.scss";

// Hooks
import { useSize } from "../../../Hooks/useSize";
import InlineIcon from "../../Atoms/InlineIcon/InlineIcon";

//DB
import { heroContent } from "../../DB/Hero";
import SocialLinks from "../../DB/Social";

const Hero: React.FC = () => {
  const Size = useSize();

  return (
    <section className="hero-section">
      <InlineIcon
        className="bg-icon"
        folder="F-Icon"
        name="f-icon-transparent"
        size={`X`}
      />

      <div className="hero-header">
        <p className={`sommary title-h6-${Size}`}>{heroContent.role}</p>

        <h1 className={`title title-heroTitle-${Size}`}>
          <span className="name-first">{heroContent.name.first}</span>
          <span className="name-last">{heroContent.name.last}</span>
        </h1>
      </div>

      <div className={`hero-icons`}>
        {heroContent.icons.map((icon, idx) => (
          <InlineIcon key={idx} folder="Icon" name={icon} size={`${Size}`} />
        ))}
      </div>

      <div className="social-icons">
        {SocialLinks.map((social, idx) => (
          <a
            href={social.link}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InlineIcon folder="Icon" name={social.name} size={`${Size}`} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
