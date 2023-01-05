import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
} from "react-router-dom";
import { NavBar } from "./HelperComponents/NavBar";
import { Home } from "./PagesHome/Home";
import { NewProjectPage } from "./ProjectPages/NewProject/NewProjectPage";
import { ViewProjects } from "./ProjectPages/ViewAllProjects/ViewProjects";
import { ProjectPage } from "./ProjectPages/ViewProject/ProjectPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/KnitAndPearl/">
      <Route index element={<Home />} />
      <Route
        element={<NavBar />}
        loader={async () => {
          const resp = await fetch("/currentUser", {
            "Content-Type": "application/json",
          });
          const user = await resp.json();
          if (!user) {
            throw redirect("/KnitAndPearl/");
          }
          return {};
        }}
      >
        <Route
          path="/KnitAndPearl/NewProject/:id"
          element={<NewProjectPage />}
        />
        <Route path="/KnitAndPearl/ViewProjects" element={<ViewProjects />} />
        <Route
          path="/KnitAndPearl/ViewProjects/:id"
          element={<ProjectPage />}
        />
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
