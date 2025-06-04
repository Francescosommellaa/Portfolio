import React, { useRef, useEffect, useState } from "react";
import "./DesktopNav.scss";
import { useSize } from "../../../Hooks/useSize";
import NavLinks from "../../DB/NavLinks";
import { Link } from "react-router-dom";

const DesktopNav: React.FC = () => {
  const Size = useSize();
  const navRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    itemsRef.current.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(24px)";
    });

    const timeout = setTimeout(() => {
      itemsRef.current.forEach((item, i) => {
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, i * 100);
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <nav
      ref={navRef}
      className="desktop-nav"
      data-hovered={hovered ? "true" : "false"}
    >
      {/* Overlay globale */}
      <div className={`desktop-nav__overlay ${hovered ? "active" : ""}`}>
        <h1 className={`h1-${Size}`}>
          {hovered && (
            <>
              <span className={`scriptT-${Size}`}>
                {NavLinks.find((l) => l.name === hovered)?.script}
              </span>
              {hovered}
            </>
          )}
        </h1>
      </div>

      <ul className="desktop-nav__menu">
        {NavLinks.map((link, index) => (
          <li
            key={link.name}
            ref={(el) => (itemsRef.current[index] = el!)}
            className="desktop-nav__item"
            onMouseEnter={() => setHovered(link.name)}
            onMouseLeave={() => setHovered(null)}
            data-active={
              hovered === link.name ? "true" : hovered ? "false" : "neutral"
            }
          >
            <span className="desktop-nav__number">{link.number}</span>
            <Link to={link.link}>
              <h2 className={`nav-${Size}`}>
                <span className={`scriptN-${Size}`}>{link.script}</span>
                {link.name}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
