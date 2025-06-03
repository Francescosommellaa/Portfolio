import React from "react";

// SCSS
import "./Playground.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";

const Playground: React.FC = () => {
  const Size = useSize();

  return <h2 className={`title-h2-${Size}-SB`}>Playground</h2>;
};

export default Playground;
