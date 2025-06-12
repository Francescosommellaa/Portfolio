import React from "react";

// Scss
import "./Playground.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";

const Playground: React.FC = () => {
  const Size = useSize();

  return (
    <section className="progetto">
      <div className="title">
        <h1 className={`h1-${Size}`}>
          <span className={`scriptT-${Size}`}>P</span>layground
        </h1>
      </div>
    </section>
  );
};

export default Playground;
