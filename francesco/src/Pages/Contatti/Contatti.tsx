import React from "react";

// SCSS
import "./Contatti.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";

const Contatti: React.FC = () => {
  const Size = useSize();

  return (
    <section id="contatti">
      <div className="title">
        <h1 className={`h1-${Size}`}>
          <span className={`scriptT-${Size}`}>C</span>ontatti
        </h1>
      </div>
    </section>
  );
};

export default Contatti;
