// src/Providers/TransitionProvider.tsx
import React, { createContext, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Scss
import "./TransitionProvider.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";

// Animation
import { animateTransition } from "./AnimationTransitionProvider";

type TransitionContextType = {
  navigateWithTransition: (path: string) => void;
};

const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined
);

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context)
    throw new Error("useTransition must be used within a TransitionProvider");
  return context;
};

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const Size = useSize();
  const [target, setTarget] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const navigateWithTransition = (path: string) => {
    setTarget(path);
    const el = containerRef.current;
    if (!el) return;

    animateTransition(el, () => navigate(path));
  };

  const cleaned = target.replace("/", "");
  const firstLetter = cleaned.charAt(0).toUpperCase();
  const rest = cleaned.slice(1);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}
      <div className="transition" ref={containerRef}>
        <h1 className={`title h1-${Size}`}>
          <span className={`title scriptT-${Size}`}>{firstLetter}</span>
          {rest}
        </h1>
      </div>
    </TransitionContext.Provider>
  );
};
