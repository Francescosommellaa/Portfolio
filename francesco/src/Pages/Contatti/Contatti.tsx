import React from "react";

// SCSS
import "./Contatti.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";

const Contatti: React.FC = () => {
  const Size = useSize();

  return <h2 className={`title-h2-${Size}-SB`}>Contatti</h2>;
};

export default Contatti;
