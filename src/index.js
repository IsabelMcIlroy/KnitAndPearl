import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NewProject } from "./NewProject";
import { ViewProject } from "./ViewProject";
import { App } from "./App";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
  <BrowserRouter>
    <Routes>
      <Route path="/NewProject" element={<NewProject />} />
      <Route path="/ViewProject" element={<ViewProject />} />
      <Route path="/KnittingProjectManager/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
