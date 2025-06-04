import React from "react";

// SCSS
import "./Lavori.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";

const Lavori: React.FC = () => {
  const Size = useSize();

  return (
    <section id="lavori">
      <div className="title">
        <h1 className={`h1-${Size}`}>
          <span className={`scriptT-${Size}`}>L</span>avori
        </h1>
      </div>
    </section>
  );
};

export default Lavori;
