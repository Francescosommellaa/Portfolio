import { useState, useEffect } from "react";

// Atoms
import Cursor from "./Components/Atoms/Interaction/Cursor/Cursor";

// Preloader
import Preloader from "./Components/Preloader/Preloader";

// Page
import Home from "./Home/Home";

// SCSS
import "./styles/general.scss";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPreloader(false);
    }, 4800);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <Cursor />
      {showPreloader ? <Preloader /> : <Home />}
    </>
  );
}

export default App;
