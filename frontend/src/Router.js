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
    <Route path="/">
      <Route index element={<Home />} />
      <Route
        element={<NavBar />}
        loader={async () => {
          const resp = await fetch(
            "https://backend.knitandpearl.online/currentUser",
            {
              "Content-Type": "application/json",
            }
          );
          const user = await resp.json();
          if (!user) {
            throw redirect("/");
          }
          return {};
        }}
      >
        <Route
          path="/NewProject/:id"
          element={<NewProjectPage />}
          loader={async () => {
            const resp = await fetch(
              "https://backend.knitandpearl.online/currentUser",
              {
                "Content-Type": "application/json",
              }
            );
            const user = await resp.json();
            return { user };
          }}
        />
        <Route path="/ViewProjects" element={<ViewProjects />} />
        <Route
          path="/ViewProjects/:id"
          element={<ProjectPage />}
          loader={async () => {
            const resp = await fetch(
              "https://backend.knitandpearl.online/currentUser",
              {
                "Content-Type": "application/json",
              }
            );
            const user = await resp.json();
            return { user };
          }}
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