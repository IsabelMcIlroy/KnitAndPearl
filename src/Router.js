import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/PagesHome/Home";
import { NewProject } from "./components/PagesNewProject/NewProject";
import { ViewProject } from "./components/PagesViewProjects/ViewProject";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/NewProject" element={<NewProject />} />
        <Route path="/ViewProject" element={<ViewProject />} />
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>404 No such page!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
