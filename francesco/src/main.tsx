import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Main
import App from "./App";

// Scss
import "./styles/general.scss";

// Providers
import { TransitionProvider } from "./Providers/TransitionProvider/TransitionProvider";
import { DarkModeProvider } from "./Providers/DarkModeProvider/DarkModeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <TransitionProvider>
          <App />
        </TransitionProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
