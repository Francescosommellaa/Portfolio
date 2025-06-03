import React from "react";

// SCSS
import "./Servizi.scss";

// Hooks
import { useSize } from "../../../Hooks/useSize";

const Servizi: React.FC = () => {
  const Size = useSize();

  return <h2 className={`title-h2-${Size}-SB`}>Servizi</h2>;
};

export default Servizi;
