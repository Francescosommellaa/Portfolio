import React, { useRef } from "react";

// SCSS
import "./Hero.scss";

// Atoms
import Button from "../../Atoms/Button/Button";

// Hooks
import { useSize } from "../../../Hooks/useSize";
import InlineIcon from "../../Atoms/InlineIcon/InlineIcon";

// Animations
import { useHeroScrollAnimation } from "../../../Hooks/animation/useHeroScrollAnimation";

//DB
import { heroContent } from "../../DB/Hero";
import SocialLinks from "../../DB/Social";

const Hero: React.FC = () => {
  const Size = useSize();
  const containerRef = useRef(null);
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const imgRef = useRef(null);
  const textRightRef = useRef(null);
  const iconsRef = useRef(null);

  useHeroScrollAnimation({
    containerRef,
    firstRef,
    lastRef,
    imgRef,
    textRightRef,
    iconsRef,
  });

  return (
    <section className="hero-section" ref={containerRef}>
      <InlineIcon
        className="bg-icon"
        folder="F-Icon"
        name="f-icon-transparent"
        size={`X`}
      />

      <div className="hero-header">
        <p className={`sommary title-h6-${Size}`}>{heroContent.activity}</p>

        {/* Testo grande che si allarga */}
        <h1 className={`title title-h1-${Size}`}>
          <span className="name-first" ref={firstRef}>
            {heroContent.name.first}
          </span>

          {/* Immagine profilo */}
          <div className="hero-img" ref={imgRef}>
            <img src="../../../assets/Me/me.png" alt="Francesco Sommella" />
          </div>

          <span className="name-last" ref={lastRef}>
            {heroContent.name.last}
          </span>
        </h1>
      </div>

      {/* Icone strumenti */}
      <div className={`hero-icons`} ref={iconsRef}>
        {heroContent.icons.map((icon, idx) => (
          <InlineIcon key={idx} folder="Icon" name={icon} size={`${Size}`} />
        ))}
      </div>

      {/* Social Icons */}
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

      {/* Testo a destra */}
      <div className="hero-text-right" ref={textRightRef}>
        <p className="sommary title-h6-M">{heroContent.role}</p>
        <p className="paragraph">{heroContent.bio}</p>
        <Button size="M" text="SCARICA CV" variant="secondary" />
      </div>
    </section>
  );
};

export default Hero;
