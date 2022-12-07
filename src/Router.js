import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavBar } from "./HelperComponents/NavBar";
import { Home } from "./PagesHome/Home";
import { NewProject } from "./PagesNewProject/NewProject";
import { ViewProjects } from "./PagesViewProjects/ViewProjects";
import { Project } from "./PagesViewProjects/Project";

export const Router = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    if (!user) {
      (async () => {
        const resp = await fetch("/currentUser", {
          "Content-Type": "application/json",
        });
        const user = await resp.json();
        setUser(user);
      })();
    }
  });
  return (
    <Routes>
      {user && (
        <Route element={<NavBar />}>
          <Route path="/KnitAndPearl/NewProject" element={<NewProject />} />
          <Route path="/KnitAndPearl/ViewProjects" element={<ViewProjects />} />
          <Route path="/KnitAndPearl/ViewProjects/:id" element={<Project />} />
        </Route>
      )}
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
