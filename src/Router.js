import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/HelperComponents/NavBar";
import { Home } from "./components/PagesHome/Home";
import { NewProject } from "./components/PagesNewProject/NewProject";
import { ViewProject } from "./components/PagesViewProjects/ViewProject";

export const Router = () => {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/NewProject" element={<NewProject />} />
        <Route path="/ViewProject" element={<ViewProject />} />
      </Route>
      <Route path="/KnittingProjectManager/" element={<Home />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem", marginTop: "112px" }}>
            <p>404 No such page!</p>
          </main>
        }
      />
    </Routes>
  );
};
