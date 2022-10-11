const fs = require("fs");
const express = require("express");
const router = express.Router();

router.use(express.json());

const projectsFile = fs.readFileSync("projects_db.json").toString();
const projects = projectsFile ? JSON.parse(projectsFile).projects : [];

router.post("/", (req, res) => {
  const { owner, name, type, grid_colors, created_at } = req.body;

  const id = projects.length + 1;

  projects.push({ id, owner, name, type, grid_colors, created_at });
  fs.writeFileSync("projects_db.json", JSON.stringify({ projects: projects }));

  res.send({ id, owner, name, type, grid_colors, created_at });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundProjects = projects.find(
    (projects) => projects.id === parseInt(id, 10)
  );

  res.send(foundProjects);
});

module.exports = router;
