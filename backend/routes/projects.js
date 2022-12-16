const express = require("express");
const { db } = require("../database");
const router = express.Router();
const isAuthenticated = require("../isAuthenticated");

router.post("/", isAuthenticated, async function (req, res) {
  let currentUser = req.session.user;
  req.session.projectName = req.body.projectName;
  const newProject = await db
    .prepare(
      `INSERT INTO projects(owner_id, name, type, rows, columns, grid_colours) VALUES (?,?,?,?,?,?)`
    )
    .run(
      currentUser.id,
      req.body.projectName,
      req.body.projectType,
      req.body.Row,
      req.body.Column,
      JSON.stringify(
        Array(parseInt(req.body.Row))
          .fill(0)
          .map(() =>
            new Array(parseInt(req.body.Column)).fill({
              r: 212,
              g: 196,
              b: 251,
              a: 1,
            })
          )
      )
    );
  const projectID = newProject.lastInsertRowid;
  res.json({ projectID });
});

router.get("/", isAuthenticated, async function (req, res) {
  console.log(req.session.user.id);
  const projectList = await db
    .prepare("SELECT * FROM projects WHERE owner_id = ?")
    .all(req.session.user.id);

  if (projectList === undefined) {
    res.json({});
  } else {
    res.json(projectList);
  }
});

router.get("/project", isAuthenticated, async function (req, res) {
  const currentProject = req.params.id;
  console.log(currentProject);
  const project = await db
    .prepare("SELECT grid_colours FROM projects WHERE name = ?")
    .all(currentProject);
  res.json(project);
});

router.put("/:id", isAuthenticated, async function (req, res) {
  const currentProject = req.params.id;
  const updateProject = await db
    .prepare(`UPDATE projects SET grid_colours = ? WHERE id = ?`)
    .run(JSON.stringify(req.body.gridArray), currentProject);
  res.json(updateProject);
});

module.exports = router;
