import React from "react";

// SCSS
import "./Faq.scss";

// Hooks
import { useSize } from "../../../Hooks/useSize";

const Faq: React.FC = () => {
  const Size = useSize();

  return (
    <>
      <h1 className={`title-h1-${Size} text`}>FAQ</h1>
    </>
  );
};

export default Faq;
