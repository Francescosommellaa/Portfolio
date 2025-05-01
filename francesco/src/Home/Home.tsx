import React, { useEffect } from "react";

// SCSS
import "./Home.scss";

// Atoms
import GoTop from "../Components/Atoms/Interaction/GoTop/GoTop";
import Button from "../Components/Atoms/Button/Button";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section aria-label="Home Page">
      <h1>FRANCESCO SOMMELLA</h1>
      <Button size="S" text="SCARICA CV" iconName="Download" />
      <GoTop />
    </section>
  );
};

export default Home;
