import React, { useEffect, useState } from "react";

// SCSS
import "./Cursor.scss";

const Cursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isAbsorbed, setIsAbsorbed] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const [isText, setIsText] = useState(false);
  const [textHeight, setTextHeight] = useState(24);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Rileva se il dispositivo è touch
    const checkTouchDevice = () => {
      const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
      setIsTouch(isTouchDevice);
    };

    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);

    return () => {
      window.removeEventListener("resize", checkTouchDevice);
    };
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleLinkHover = () => setIsAbsorbed(true);
    const handleLinkLeave = () => setIsAbsorbed(false);
    const handleInputHover = () => setIsInput(true);
    const handleInputLeave = () => setIsInput(false);
    const handleTextHover = (e: Event) => {
      setIsText(true);
      const element = e.target as HTMLElement;
      const computedStyle = window.getComputedStyle(element);
      const lineHeight = parseFloat(computedStyle.lineHeight);
      setTextHeight(lineHeight);
    };
    const handleTextLeave = () => setIsText(false);

    const addEventListeners = () => {
      const interactiveElements = document.querySelectorAll("a, button");
      const inputElements = document.querySelectorAll("input, textarea");
      const textElements = document.querySelectorAll("p, h5, h6");

      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", handleLinkHover);
        element.addEventListener("mouseleave", handleLinkLeave);
      });

      inputElements.forEach((element) => {
        element.addEventListener("mouseenter", handleInputHover);
        element.addEventListener("mouseleave", handleInputLeave);
      });

      textElements.forEach((element) => {
        element.addEventListener("mouseenter", handleTextHover);
        element.addEventListener("mouseleave", handleTextLeave);
      });
    };

    addEventListeners();

    const observer = new MutationObserver(addEventListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, [isTouch]);

  useEffect(() => {
    setIsAbsorbed(false);
    setIsInput(false);
    setIsText(false);
  }, []);

  if (isTouch) return null;

  return (
    <div
      className={`custom-cursor ${isVisible ? "visible" : "hidden"} ${
        isAbsorbed ? "absorbed" : ""
      } ${isInput ? "input-cursor" : ""} ${isText ? "text-cursor" : ""}`}
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        height: isText ? `${textHeight}px` : undefined,
      }}
    />
  );
};

export default Cursor;
