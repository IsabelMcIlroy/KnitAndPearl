import "./index.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NewProject } from "./NewProject";
import { ViewProject } from "./ViewProject";
import { App } from "./App";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/NewProject" element={<NewProject />} />
      <Route path="/ViewProject" element={<ViewProject />} />
      <Route path="/KnittingProjectManager/" element={<App />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
