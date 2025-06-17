import React, { useRef, useEffect, useState } from "react";
import "./DesktopNav.scss";

// Hooks
import { useSize } from "../../../Hooks/useSize";
import { useSmartScrollVisibility } from "../../../Hooks/useScrollDirection";

// Data
import NavLinks from "../../Data/NavLinks";

// Providers
import { useTransition } from "../../../Providers/TransitionProvider/TransitionContext";

interface DesktopNavProps {
  hideOnTop?: boolean;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ hideOnTop = false }) => {
  const Size = useSize();
  const navRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);
  const [hovered, setHovered] = useState<string | null>(null);
  const { navigateWithTransition } = useTransition();
  const isVisible = useSmartScrollVisibility({ hideOnTop });

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
      className={`desktop-nav ${isVisible ? "visible" : "hidden"}`}
      data-hovered={hovered ? "true" : "false"}
    >
      {/* Overlay globale */}
      <div className={`desktop-nav__overlay ${hovered ? "active" : ""}`}>
        <h1 className={`h1-${Size}`}>
          {hovered && (
            <>
              <span className={`h1-script-${Size}`}>
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
            onClick={() => navigateWithTransition(link.link)}
          >
            <span className="desktop-nav__number">{link.number}</span>
            <a>
              <h2 className={`nav-${Size}`}>
                <span className={`nav-script-${Size}`}>{link.script}</span>
                {link.name}
              </h2>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
