import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ToursProvider } from "./context/toursContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ToursProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ToursProvider>
);
