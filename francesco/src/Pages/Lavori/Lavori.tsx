import React from "react";

// SCSS
import "./Lavori.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";

const Lavori: React.FC = () => {
  const Size = useSize();

  return <h2 className={`title-h2-${Size}-SB`}>Lavori</h2>;
};

export default Lavori;
