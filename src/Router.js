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
        <Route path="/KnitAndPearl/NewProject" element={<NewProject />} />
        <Route path="/KnitAndPearl/ViewProject" element={<ViewProject />} />
        <Route path="/KnitAndPearl/TreesProject" element={<TreesProject />} />
        <Route
          path="/KnitAndPearl/MountainsProject"
          element={<MountainsProject />}
        />
        <Route path="/KnitAndPearl/CatsProject" element={<CatsProject />} />
        <Route path="/KnitAndPearl/FishProject" element={<FishProject />} />
      </Route>
      <Route path="/KnitAndPearl/" element={<Home />} />
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
