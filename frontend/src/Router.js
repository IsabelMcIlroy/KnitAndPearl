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
import { PageNotFoundPage } from "./PageNotFoundPage/PageNotFoundPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route
        element={<NavBar />}
        loader={async () => {
          const resp = await fetch("/api/currentUser", {
            "Content-Type": "application/json",
          });
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
            const resp = await fetch("/api/currentUser", {
              "Content-Type": "application/json",
            });
            const user = await resp.json();
            return { user };
          }}
        />
        <Route
          path="/ViewProjects"
          element={<ViewProjects />}
          loader={async () => {
            const resp = await fetch("/api/currentUser", {
              "Content-Type": "application/json",
            });
            const user = await resp.json();
            return { user };
          }}
        />
        <Route
          path="/ViewProjects/:id"
          element={<ProjectPage />}
          loader={async () => {
            const resp = await fetch("/api/currentUser", {
              "Content-Type": "application/json",
            });
            const user = await resp.json();
            return { user };
          }}
        />
        <Route path="*" element={<PageNotFoundPage />} />
      </Route>
    </Route>
  )
);
