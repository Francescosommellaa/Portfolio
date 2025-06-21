import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import AppLayout from "./Components/Layouts/AppLayout";

// Pages
import Home from "./Pages/HomePage/HomePage";
import Lavori from "./Pages/WorksPage/WorksPage";
import Progetto from "./Pages/ProjectPage/ProjectPage";
import About from "./Pages/AboutPage/AboutPage";
import Playground from "./Pages/PlaygroundPage/PlaygroundPage";
import Contatti from "./Pages/ContactsPage/ContactsPage";
import NotFound from "./Pages/404/404";

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Lavori" element={<Lavori />} />
        <Route path="/Lavori/:projectId" element={<Progetto />} />
        <Route path="/About" element={<About />} />
        <Route path="/Playground" element={<Playground />} />
        <Route path="/Contatti" element={<Contatti />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
