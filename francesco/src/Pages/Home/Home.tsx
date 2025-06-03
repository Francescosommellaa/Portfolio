import React from "react";

// SCSS
import "./Home.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";

const Home: React.FC = () => {
  const Size = useSize();

  return <h2 className={`title-h2-${Size}-SB`}>Home</h2>;
};

export default Home;
