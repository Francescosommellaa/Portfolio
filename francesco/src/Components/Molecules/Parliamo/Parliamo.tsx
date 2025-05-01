import React from "react";

// SCSS
import "./Parliamo.scss";

// Hooks
import { useSize } from "../../../Hooks/useSize";

const Parliamo: React.FC = () => {
  const Size = useSize();

  return (
    <>
      <h1 className={`title-h1-${Size} text`}>Parliamo</h1>
    </>
  );
};

export default Parliamo;
