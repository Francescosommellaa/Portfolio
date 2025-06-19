import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Scss
import "./TransitionProvider.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";

// Animation
import { animateTransition } from "./AnimationTransitionProvider";

// Context
import { TransitionContext } from "./TransitionContext";

// Utils
import { scrollToTopUniversal } from "../../Utils/scrollToTopUniversal";

interface Props {
  children: React.ReactNode;
}

export const TransitionProvider: React.FC<Props> = ({ children }) => {
  const Size = useSize();
  const [target, setTarget] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const navigateWithTransition = (path: string) => {
    setTarget(path);
    const el = containerRef.current;
    if (!el) return;

    animateTransition(el, () => {
      navigate(path);

      requestAnimationFrame(() => {
        setTimeout(() => {
          scrollToTopUniversal();
        }, 0);
      });
    });
  };

  // Titolo animazione transizione
  const cleanedPath = target.startsWith("/") ? target.slice(1) : target;
  const parts = cleanedPath.split("/");

  let title = "";
  if (parts.length === 1) {
    title = parts[0];
  } else if (parts.length === 2 && parts[0].toLowerCase() === "lavori") {
    title = parts[1];
  } else {
    title = parts[parts.length - 1];
  }

  const words = title.split("-");
  const formattedTitle = words.map((word, index) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const rest = word.slice(1);
    return (
      <React.Fragment key={index}>
        <span className={`title h1-script-${Size}`}>{firstLetter}</span>
        {rest}{" "}
      </React.Fragment>
    );
  });

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}
      <div className="transition" ref={containerRef}>
        <h1 className={`title h1-${Size}`}>{formattedTitle}</h1>
      </div>
    </TransitionContext.Provider>
  );
};
