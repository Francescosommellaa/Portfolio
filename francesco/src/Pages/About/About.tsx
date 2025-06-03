import React from "react";

// SCSS
import "./About.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";

const About: React.FC = () => {
  const Size = useSize();

  return <h2 className={`title-h2-${Size}-SB`}>About</h2>;
};

export default About;
