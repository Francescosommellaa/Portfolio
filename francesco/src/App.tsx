import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import AppLayout from "./Components/Layouts/AppLayout";

// Pages
import Home from "./Pages/Home/Home";
import Lavori from "./Pages/Lavori/Lavori";
import About from "./Pages/About/About";
import Playground from "./Pages/Playground/Playground";
import Contatti from "./Pages/Contatti/Contatti";
import NotFound from "./Pages/404/404";

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Lavori" element={<Lavori />} />
        <Route path="/About" element={<About />} />
        <Route path="/Playground" element={<Playground />} />
        <Route path="/Contatti" element={<Contatti />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
