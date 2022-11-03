const fs = require("fs");
const express = require("express");
const router = express.Router();

const projectsFile = fs.readFileSync("projects_db.json").toString();
const projects = projectsFile ? JSON.parse(projectsFile).projects : [];

router.post("/", (req, res) => {
  try {
    let newProject = `INSERT INTO projects(owner_id, name, type, grid_colors) VALUES (?,?,?,?)`;
    db.run(
      newUser,
      [req.body.owner_id, req.body.name, req.body.type, req.body.grid_colors],
      () => {
        req.session.project = {
          owner_id: req.body.owner_id,
          name: req.body.name,
          type: req.body.type,
          grid_colors: req.body.grid_colors,
        };
        res.redirect("/");
      }
    );
  } catch (e) {
    console.log(e);
    res.redirect("/");
  }
});

router
  .route("/:id")
  .get((req, res) => {
    const { id } = req.params;

    const foundProjects = projects.find(
      (projects) => projects.id === parseInt(id, 10)
    );
    console.log("get this project");
    res.send(foundProjects);
  })
  .put((req, res) => {
    const { id } = req.params;

    const foundProjects = projects.find(
      (projects) => projects.id === parseInt(id, 10)
    );
    console.log("update this project");
    res.send(foundProjects);
  })
  .delete((req, res) => {
    const { id } = req.params;

    const foundProjects = projects.find(
      (projects) => projects.id === parseInt(id, 10)
    );
    console.log("delete this project");
    res.send(foundProjects);
  });

module.exports = router;
