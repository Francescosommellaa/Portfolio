import { useState, useEffect } from "react";

// Atoms
import Cursor from "./Components/Atoms/Interaction/Cursor/Cursor";

// Molecules
import Footer from "./Components/Molecules/Footer/Footer";
import Navbar from "./Components/Molecules/Navbar/Navbar";

// Preloader
import Preloader from "./Components/Preloader/Preloader";

// Page
import Home from "./Home/Home";

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
      {showPreloader ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
