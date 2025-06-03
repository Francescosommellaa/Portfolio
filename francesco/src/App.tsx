// src/App.tsx
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home";
import Lavori from "./Pages/Lavori/Lavori";
import About from "./Pages/About/About";
import Playground from "./Pages/Playground/Playground";
import Contatti from "./Pages/Contatti/Contatti";
import NotFound from "./Pages/NotFound/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Lavori" element={<Lavori />} />
      <Route path="/About" element={<About />} />
      <Route path="/Playground" element={<Playground />} />
      <Route path="/Contatti" element={<Contatti />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
