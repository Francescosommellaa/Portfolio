import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll";

// SCSS
import "./Sidebar.scss";

// Atoms
import Logo from "../../Atoms/Logo/Logo";

// DB
import SocialLinks from "../../DB/Social";
import PageNav from "../../DB/PageNav";

const menuIcon = new URL(
  "/src/Assets/Icon/Name=menu, Dimension=M.svg",
  import.meta.url
).href;
const closeIcon = new URL(
  "/src/Assets/Icon/Name=Close, Dimension=M.svg",
  import.meta.url
).href;

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
        <img src={!isOpen ? menuIcon : closeIcon} alt="Close menu" />
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <Logo size={"S"} onClick={toggleSidebar} />
        </div>

        {/* Navigazione */}
        <nav className="sidebar-nav">
          <a onClick={() => handleScroll(`hero`)} role="button">
            <h4>Home</h4>
          </a>

          {PageNav.map((page) => (
            <a
              key={page.id}
              onClick={() => handleScroll(`${page.url}`)}
              role="button"
            >
              <h4>{page.name}</h4>
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
