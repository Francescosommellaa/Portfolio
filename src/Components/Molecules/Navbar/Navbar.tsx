import React, { useEffect, useState } from "react";
import { Events, scroller } from "react-scroll";

// SCSS
import "./Navbar.scss";

// Atoms
import Logo from "../../Atoms/Logo/Logo";
import Sidebar from "../../Molecules/Sidebar/Sidebar";

// DB
import PageNav from "../../DB/PageNav";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 70) {
          currentSection = section.getAttribute("id") || "";
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    Events.scrollEvent.register("end", (to: string) => {
      setActiveSection(to);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleScroll = (section: string) => {
    const scrollOptions = {
      smooth: true,
      duration: 500,
      offset: -60,
    };

    if (location.pathname !== "/") {
      setTimeout(() => scroller.scrollTo(section, scrollOptions), 100);
    } else {
      scroller.scrollTo(section, scrollOptions);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-header">
        <Logo size={"S"} />

        <div className="divider" />

        <ul className="nav-links">
          {PageNav.map((page) => (
            <li key={page.id}>
              <a
                className={`nav-link ${
                  activeSection === `${page.url}` ? "active" : ""
                }`}
                onClick={() => handleScroll(`${page.url}`)}
              >
                {page.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Sidebar />
    </nav>
  );
};

export default Navbar;