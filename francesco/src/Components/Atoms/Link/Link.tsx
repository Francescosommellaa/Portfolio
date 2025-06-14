import React, { useEffect, useRef } from "react";

// Atoms
import InlineIcon from "../InlineItems/InlineIcon";

// Scss
import "./Link.scss";

// Animation
import { animateLinkHover } from "./AnimationLink";

interface LinkProps {
  label: string;
  onClick: () => void;
  size: string;
}

const Link: React.FC<LinkProps> = ({ label, onClick, size }) => {
  const linkRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (linkRef.current && iconRef.current) {
      tlRef.current = animateLinkHover(linkRef.current, iconRef.current);
    }
  }, []);

  const handleMouseEnter = () => {
    tlRef.current?.play();
  };

  const handleMouseLeave = () => {
    tlRef.current?.reverse();
  };

  return (
    <div
      className="link-element"
      ref={linkRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="link-wrapper">
        <a className={`sub-title-${size}`} onClick={onClick}>
          {label}
        </a>
        <div className="underline" />
        <div className="icon" ref={iconRef}>
          <InlineIcon folder="Icons" name="Top-Right-Arrow" size="X" />
        </div>
      </div>
    </div>
  );
};

export default Link;
