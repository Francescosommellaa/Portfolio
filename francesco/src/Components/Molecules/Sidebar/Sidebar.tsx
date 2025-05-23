import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll";

// SCSS
import "./Sidebar.scss";

// Atoms
import Logo from "../../Atoms/Logo/Logo";

// DB
import SocialLinks from "../../DB/Social";
import PageNav from "../../DB/PageNav";

// Hooks
import InlineIcon from "../../Atoms/InlineIcon/InlineIcon";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    if (isOpen) {
      setIsOpen(false);
    }
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
    closeSidebar();
  };

  return (
    <nav className="sidebar-container" aria-label="Sidebar">
      {/* Icona del menu e logo sempre visibili */}
      <div className="sidebar-header">
        <Logo onClick={closeSidebar} />
        <button className="menu-icon" onClick={toggleSidebar}>
          <InlineIcon
            folder="Icon"
            name={!isOpen ? "menu" : "close"}
            size="M"
          />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav className="sidebar-nav">
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
