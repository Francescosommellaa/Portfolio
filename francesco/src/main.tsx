// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Interaction
import Cursor from "./Components/Atoms/Interaction/Cursor/Cursor";

import "./styles/general.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Cursor />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
