import React from "react";

// SCSS
import "./Lavori.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";

const Lavori: React.FC = () => {
  const Size = useSize();

  return (
    <section className="lavori">
      <h2 className={`title-h2-${Size}`}>Lavori</h2>
    </section>
  );
};

export default Lavori;
