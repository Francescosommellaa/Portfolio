import React from "react";

// SCSS
import "./Home.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";

// layout
import Topbar from "../../Components/Layouts/Topbar/Topbar";

const Home: React.FC = () => {
  const Size = useSize();

  return (
    <section>
      <Topbar />
      <h1 className={`h1-${Size}`}>
        <span className={`scriptT-${Size}`}>Fra</span> Sommella
      </h1>
    </section>
  );
};

export default Home;
