import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Main
import App from "./App";

// Scss
import "./styles/general.scss";

// Providers
import { TransitionProvider } from "./Providers/TransitionProvider/TransitionProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TransitionProvider>
        <App />
      </TransitionProvider>
    </BrowserRouter>
  </React.StrictMode>
);
