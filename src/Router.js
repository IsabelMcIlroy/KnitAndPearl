import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { NavBar } from "./HelperComponents/NavBar";
import { Home } from "./PagesHome/Home";
import { NewProject } from "./PagesNewProject/NewProject";
import { ViewProjects } from "./PagesViewProjects/ViewProjects";
import { Project } from "./PagesViewProjects/Project";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/KnitAndPearl/">
      <Route index element={<Home />} />
      <Route element={<NavBar />}>
        <Route path="/KnitAndPearl/NewProject" element={<NewProject />} />
        <Route path="/KnitAndPearl/ViewProjects" element={<ViewProjects />} />
        <Route path="/KnitAndPearl/ViewProjects/:id" element={<Project />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem", marginTop: "112px" }}>
            <p>404 No such page!</p>
          </main>
        }
      />
    </Route>
  )
);
