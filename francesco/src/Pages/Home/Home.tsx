import React from "react";

// SCSS
import "./Home.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";

const Home: React.FC = () => {
  const Size = useSize();

  return (
    <section>
      <div className="top">
        <h1 className={`h1-${Size}`}>
          <span className={`scriptT-${Size}`}>Fra</span> Sommella
        </h1>
      </div>
    </section>
  );
};

export default Home;
