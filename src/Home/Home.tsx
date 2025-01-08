import React, { useEffect } from "react";

// Atoms
import GoTop from "../Components/Atoms/Interaction/GoTop/GoTop";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section aria-label="Home Page">
      <div>Hello, World!</div>
      <GoTop />
    </section>
  );
};

export default Home;
