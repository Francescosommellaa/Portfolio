import React from "react";

// SCSS
import "./Hero.scss";

// Hooks
import { useSize } from "../../../Hooks/useSize";

const Hero: React.FC = () => {
  const Size = useSize();

  return (
    <>
      <h1 className={`title-h1-${Size} text`}>Hero</h1>
    </>
  );
};

export default Hero;
