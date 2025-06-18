import React, { useEffect, useState, useRef } from "react";

// Atoms
import InlineIcon from "../../Atoms/InlineItems/InlineIcon";
import IframeModal from "../../Atoms/IframeModal/IframeModal";

// Scss
import "./Link.scss";

// Animation
import { animateLinkHover } from "./AnimationLink";

interface LinkProps {
  label: string;
  link: string;
  size: string;
  openInIframe?: boolean;
}

const Link: React.FC<LinkProps> = ({
  label,
  link,
  size,
  openInIframe = false,
}) => {
  const linkRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const [isOpen, setIsOpen] = useState(false);

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

  const handleClick = () => {
    if (openInIframe) {
      setIsOpen(true);
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <div
        className="link"
        ref={linkRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a className="link-wrapper" onClick={handleClick}>
          <div className={`link-${size}`}>{label}</div>
          <div className="underline" />
          <div className="icon" ref={iconRef}>
            <InlineIcon folder="Icons" name="TopRightArrow" size="X" />
          </div>
        </a>
      </div>

      {openInIframe && (
        <IframeModal
          url={link}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Link;
