import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContentProvider } from "./content/AuthContent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContentProvider>
      <App />
    </AuthContentProvider>
  </React.StrictMode>
);
