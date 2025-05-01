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
      <Button size="S" text="SCARICA CV" iconName="Download" />
      <GoTop />
    </section>
  );
};

export default Home;
