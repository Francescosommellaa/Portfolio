import React, { useState, useEffect } from "react";

// SCSS
import "./Navbar.scss";

// Atoms
import Logo from "../../Atoms/Logo/Logo";
import Button from "../../Atoms/Button/Button";

// Molecules
import Sidebar from "../../Molecules/Sidebar/Sidebar";

// DB
import PageNav from "../../DB/PageNav";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Funzione per gestire lo scroll alla sezione
  const handleScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(section);
    }
  };

  // Funzione per aggiornare la sezione attiva durante lo scroll
  const handleScrollSpy = () => {
    const sections = ["hero", ...PageNav.map((page) => page.section)];
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop - offsetHeight * 0.5 &&
          scrollPosition < offsetTop + offsetHeight * 0.5
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  // Aggiunge l'event listener allo scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScrollSpy);
    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-links-wrapper">
        <Logo />

        <ul className="nav-links">
          {PageNav.map((page) => (
            <li key={page.id}>
              <a
                className={`text-smallText-M nav-link ${
                  activeSection === page.section ? "active" : ""
                }`}
                onClick={() => handleScroll(page.section)}
              >
                {page.name}
              </a>
            </li>
          ))}
        </ul>

        <Button
          text="SCARICA CV"
          size="S"
          iconName="download"
          variant="primary"
          light={true}
        />
      </div>

      <Sidebar />
    </nav>
  );
};

export default Navbar;
