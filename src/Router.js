import { Routes, Route } from "react-router-dom";
import { NavBar } from "./HelperComponents/NavBar";
import { Home } from "./PagesHome/Home";
import { NewProject } from "./PagesNewProject/NewProject";
import { ViewProject } from "./PagesViewProjects/ViewProject";
import { TreesProject } from "./PagesViewProjects/ProjectData/TreesProject";
import { MountainsProject } from "./PagesViewProjects/ProjectData/MountainsProject";
import { CatsProject } from "./PagesViewProjects/ProjectData/CatsProject";
import { FishProject } from "./PagesViewProjects/ProjectData/FishProject";

export const Router = () => {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route
          path="/KnittingProjectManager/NewProject"
          element={<NewProject />}
        />
        <Route
          path="/KnittingProjectManager/ViewProject"
          element={<ViewProject />}
        />
        <Route
          path="/KnittingProjectManager/TreesProject"
          element={<TreesProject />}
        />
        <Route
          path="/KnittingProjectManager/MountainsProject"
          element={<MountainsProject />}
        />
        <Route
          path="/KnittingProjectManager/CatsProject"
          element={<CatsProject />}
        />
        <Route
          path="/KnittingProjectManager/FishProject"
          element={<FishProject />}
        />
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
