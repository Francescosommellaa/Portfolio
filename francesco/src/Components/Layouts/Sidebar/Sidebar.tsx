import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

//Scss
import "./Sidebar.scss";

//Hooks
import { useSize } from "../../../Hooks/useSize";

//Providers
import { useTransition } from "../../../Providers/TransitionProvider/TransitionProvider";

//DB
import NavLinks from "../../DB/NavLinks";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<Props> = ({ isOpen, onClose }) => {
  const Size = useSize();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);
  const { navigateWithTransition } = useTransition();

  useEffect(() => {
    const items = itemsRef.current;
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.3 },
    });

    if (isOpen) {
      gsap.set(items, { y: 30, opacity: 0 });
      tl.to(sidebarRef.current, { x: 0, duration: 0.3 });
      tl.to(items, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
      });
    } else {
      tl.to(items, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
      });
      tl.to(sidebarRef.current, { x: "-100%", duration: 0.3 }, "+=0.1");
    }
  }, [isOpen]);

  return (
    <aside ref={sidebarRef} className="sidebar">
      <nav>
        <ul>
          {NavLinks.map((link, index) => (
            <li
              key={link.name}
              ref={(el) => (itemsRef.current[index] = el!)}
              onClick={() => {
                onClose();
                navigateWithTransition(link.link);
              }}
            >
              <span className="paragraph-X">{link.number}</span>

              <h2 className={`nav-${Size}`}>
                <span className={`scriptN-${Size}`}>{link.script}</span>
                {link.name}
              </h2>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="sidebar__footer">
        Un Designer ordinario. Con amore da Napoli.
      </footer>
    </aside>
  );
};

export default Sidebar;
