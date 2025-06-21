import React, { useRef } from "react";
import "./Sidebar.scss";

// Hooks
import { useSize } from "../../../Hooks/useSize";

// Providers
import { useTransition } from "../../../Providers/TransitionProvider/TransitionContext";

// Data
import NavLinks from "../../../Data/NavLinks";

// Animation
import { useAnimateSidebar } from "./AnimationSidebar";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onCloseComplete?: () => void;
}

const Sidebar: React.FC<Props> = ({ isOpen, onClose, onCloseComplete }) => {
  const Size = useSize();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);
  const { navigateWithTransition } = useTransition();

  useAnimateSidebar({
    isOpen,
    sidebarRef,
    itemsRef,
    onCloseComplete,
  });

  return (
    <aside ref={sidebarRef} className="sidebar" data-theme="dark">
      <nav>
        <ul>
          {NavLinks.map((link, index) => (
            <li
              data-clickable
              key={link.name}
              ref={(el) => (itemsRef.current[index] = el!)}
              onClick={() => {
                onClose();
                navigateWithTransition(link.link);
              }}
            >
              <span className="paragraph-X">{link.number}</span>

              <h2 className={`nav-${Size}`}>
                <span className={`nav-script-${Size}`}>{link.script}</span>
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
