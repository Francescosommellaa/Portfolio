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
import { findProjectBySlug } from "../../Utils/projectUtils";
import { formatTitle } from "../../Utils/formatTitle";

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
        window.scrollTo({ top: 0, behavior: "auto" });
      });
    });
  };

  // Pulizia path e recupero slug
  const cleanedPath = target.startsWith("/") ? target.slice(1) : target;
  const parts = cleanedPath.split("/");

  let slug = "";
  if (parts.length === 1) {
    slug = parts[0];
  } else if (parts.length === 2 && parts[0].toLowerCase() === "lavori") {
    slug = parts[1];
  } else {
    slug = parts[parts.length - 1];
  }

  const project = findProjectBySlug(slug);

  const formattedTitle = formatTitle(
    project ? project.name : slug.replace(/-/g, " "),
    Size
  );

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}
      <div className="transition" ref={containerRef}>
        {formattedTitle}
      </div>
    </TransitionContext.Provider>
  );
};
