import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
