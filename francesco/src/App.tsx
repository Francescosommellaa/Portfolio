// Atoms
import Cursor from "./Components/Atoms/Interaction/Cursor/Cursor";

// Molecules
import Footer from "./Components/Molecules/Footer/Footer";
import Navbar from "./Components/Molecules/Navbar/Navbar";

// Page
import Home from "./Home/Home";

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
