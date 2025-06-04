import React, { useEffect, useState } from "react";

// SCSS
import "./Cursor.scss";

const Cursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isAbsorbed, setIsAbsorbed] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const [isText, setIsText] = useState(false);
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

    const addEventListeners = () => {
      const interactiveElements = document.querySelectorAll("a, button");
      const inputElements = document.querySelectorAll("input, textarea");

      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", handleLinkHover);
        element.addEventListener("mouseleave", handleLinkLeave);
      });

      inputElements.forEach((element) => {
        element.addEventListener("mouseenter", handleInputHover);
        element.addEventListener("mouseleave", handleInputLeave);
      });
      return {
        interactiveElements,
        inputElements,
      };
    };

    const { interactiveElements, inputElements } = addEventListeners();

    const observer = new MutationObserver(addEventListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleLinkHover);
        element.removeEventListener("mouseleave", handleLinkLeave);
      });

      inputElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleInputHover);
        element.removeEventListener("mouseleave", handleInputLeave);
      });
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
      }}
    />
  );
};

export default Cursor;
