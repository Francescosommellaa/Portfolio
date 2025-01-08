import React from "react";

// SCSS
import "./Footer.scss";

// Atoms
import Button from "../../Atoms/Button/Button";
import Logo from "../../Atoms/Logo/Logo";

// DB
import SocialLinks from "../../DB/Social";

// Hooks
import { useSize } from "../../../Hooks/useSize";

const Footer: React.FC = () => {
  const Size = useSize();

  return (
    <footer className="footer" aria-label="Footer">
      {/* Logo */}
      <Logo size="S" light={true} />

      {/* Titolo */}
      <div className="title">
        <h1>
          Lavoriamo <br /> Insieme
        </h1>
      </div>

      {/* Contatti */}
      <div className="contact-container">
        <a
          href="mailto:Info@francescosommella.it"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            text="Info@francescosommella.it"
            size={`${Size}`}
            withIcon={false}
            light={true}
          />
        </a>
        <a
          href="https://wa.me/393773711446"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            text="3773711446"
            size={`${Size}`}
            withIcon={false}
            light={true}
          />
        </a>
      </div>

      {/* Social & info */}
      <div className="info-container">
        <div>
          <span className="text-placeholder">Social</span>
          <div className="social-container">
            {SocialLinks.map((social, index) => (
              <a
                className="text-paragraph-S"
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

        <span className="text-placeholder">
          Ideato, <br /> progettato e <br />
          Sviluppato da me
        </span>
      </div>
    </footer>
  );
};

export default Footer;
