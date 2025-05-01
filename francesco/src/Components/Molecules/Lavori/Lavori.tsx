import React from "react";

// SCSS
import "./Lavori.scss";

// Hooks
import { useSize } from "../../../Hooks/useSize";

const Lavori: React.FC = () => {
  const Size = useSize();

  return (
    <>
      <h1 className={`title-h1-${Size} text`}>Lavori</h1>
    </>
  );
};

export default Lavori;
