import React from "react";

// SCSS
import "./Footer.scss";

// Atoms
import Button from "../../Atoms/Button/Button";

// DB
import SocialLinks from "../../DB/Social";

// Hooks
import { useSize } from "../../../Hooks/useSize";

const Footer: React.FC = () => {
  const Size = useSize();

  return (
    <section>
      {/* Titolo */}
      <h1 className={`title-footerTitle-${Size} text`}>
        Lavoriamo <br /> Insieme
      </h1>

      {/* Contatti */}
      <div className="contact-container">
        {/* E-mail */}
        <a
          href="mailto:Info@francescosommella.it"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            text="Info@francescosommella.it"
            size={`${Size}`}
            light
            withBorder
          />
        </a>

        {/* Numero */}
        <a
          href="https://wa.me/393773711446"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text="3773711446" size={`${Size}`} light withBorder />
        </a>
      </div>

      {/* Social & info */}
      <div className="info-container">
        <div className="social-container">
          <span className={`text-placeholder-${Size}`}>Social</span>
          <div className="social">
            {SocialLinks.map((social, index) => (
              <a
                className={`title-socialLink-${Size}`}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <span className={`text-placeholder-${Size}`}>
          Tutti i diritti riservati <br /> © Francesco Sommella 2025
        </span>
      </div>
    </section>
  );
};

export default Footer;
