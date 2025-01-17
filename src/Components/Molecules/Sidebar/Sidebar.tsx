import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll";

// SCSS
import "./Sidebar.scss";

// Atoms
import Logo from "../../Atoms/Logo/Logo";

// DB
import SocialLinks from "../../DB/Social";
import PageNav from "../../DB/PageNav";

const menuIcon = "public/Icon/Name=Menu, Dimension=M.svg";
const closeIcon = "/Icon/Name=Close, Dimension=M.svg";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

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
    toggleSidebar();
  };

  return (
    <nav className="sidebar-container" aria-label="Sidebar">
      {/* Icona del menu */}
      <button className="menu-icon" onClick={toggleSidebar}>
        <img src={!isOpen ? menuIcon : closeIcon} alt="Menu Icon" />
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header" onClick={toggleSidebar}>
          <Logo />
        </div>

        {/* Navigazione */}
        <nav className="sidebar-nav">
          <a onClick={() => handleScroll(`hero`)} role="button">
            <h4 className="title">HOME</h4>
          </a>

          {PageNav.map((page) => (
            <a
              key={page.id}
              onClick={() => handleScroll(`${page.section}`)}
              role="button"
            >
              <h4 className="title">{page.name}</h4>
            </a>
          ))}
        </nav>

        {/* Links sociali */}
        <footer className="sidebar-footer">
          {SocialLinks.map((social, index) => (
            <a
              className="text-paragraph-small"
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              {social.name}
            </a>
          ))}
        </footer>
      </div>
    </nav>
  );
};

export default Sidebar;
