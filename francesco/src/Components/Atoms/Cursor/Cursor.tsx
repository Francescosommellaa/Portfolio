import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// SCSS
import "./Cursor.scss";

const Cursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isAbsorbed, setIsAbsorbed] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const location = useLocation();

  //-------------------
  // funzione per rilevare dispositivi touch
  //-------------------
  useEffect(() => {
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

  //-------------------
  // funzione per aggiornare posizione cursore e gestire visibilità
  //-------------------
  useEffect(() => {
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isTouch]);

  //-------------------
  // funzione per aggiungere eventi su link, button, input
  //-------------------
  useEffect(() => {
    if (isTouch) return;

    const handleLinkEnter = () => setIsAbsorbed(true);
    const handleLinkLeave = () => setIsAbsorbed(false);
    const handleClick = () => setTimeout(() => setIsAbsorbed(false), 200);

    const handleInputEnter = () => setIsInput(true);
    const handleInputLeave = () => setIsInput(false);

    const addListeners = () => {
      const interactiveElements = Array.from(
        document.querySelectorAll("a, button")
      );
      const inputElements = Array.from(
        document.querySelectorAll("input, textarea")
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleLinkEnter);
        el.addEventListener("mouseleave", handleLinkLeave);
        el.addEventListener("click", handleClick);
      });

      inputElements.forEach((el) => {
        el.addEventListener("mouseenter", handleInputEnter);
        el.addEventListener("mouseleave", handleInputLeave);
      });

      return { interactiveElements, inputElements };
    };

    // inizializza e osserva DOM dinamico
    const { interactiveElements, inputElements } = addListeners();
    const observer = new MutationObserver(() => {
      addListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // cleanup listeners
    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkEnter);
        el.removeEventListener("mouseleave", handleLinkLeave);
        el.removeEventListener("click", handleClick);
      });

      inputElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleInputEnter);
        el.removeEventListener("mouseleave", handleInputLeave);
      });

      observer.disconnect();
    };
  }, [isTouch]);

  //-------------------
  // reset iniziale stati cursore
  //-------------------
  useEffect(() => {
    setIsAbsorbed(false);
    setIsInput(false);
  }, []);

  //-------------------
  // reset cursore su cambio route
  //-------------------
  useEffect(() => {
    setIsVisible(true);
    setIsAbsorbed(false);
  }, [location]);

  if (isTouch) return null;

  return (
    <div
      className={`custom-cursor ${isVisible ? "visible" : "hidden"} ${
        isAbsorbed ? "absorbed" : ""
      } ${isInput ? "input-cursor" : ""}`}
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
      }}
    />
  );
};

export default Cursor;
