// src/Providers/TransitionPage.tsx
import React, { createContext, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./TransitionProvider.scss";

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
  const [target, setTarget] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const navigateWithTransition = (path: string) => {
    setTarget(path);
    const el = containerRef.current;
    if (!el) return;

    gsap.set(el, { x: "100%", display: "flex" });
    gsap.to(el, {
      x: "0%",
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        navigate(path);
        gsap.to(el, {
          x: "-100%",
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(el, { display: "none", x: "100%" });
          },
        });
      },
    });
  };

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}
      <div className="transition" ref={containerRef}>
        <h1 className="transition__text">
          {target.replace("/", "").toUpperCase()}
        </h1>
      </div>
    </TransitionContext.Provider>
  );
};
