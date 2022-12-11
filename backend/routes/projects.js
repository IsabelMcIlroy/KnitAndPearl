const express = require("express");
const { db } = require("../database");
const router = express.Router();
const isAuthenticated = require("../isAuthenticated");

router.post("/", isAuthenticated, async function (req, res) {
  let currentUser = req.session.user;
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
        Array(req.body.Row * req.body.Column).fill({
          r: 212,
          g: 196,
          b: 251,
          a: 1,
        })
      )
    );
  req.session.project = newProject;
  res.json({ message: newProject });
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

router.put("/:id", isAuthenticated, async function (req, res) {
  const currentProject = req.session.project.id;
  const updateProject = await db
    .prepare(`UPDATE projects SET grid_colours = ? WHERE id = ?`)
    .run(JSON.stringify(req.body.grid), currentProject);
  res.json(updateProject);
});

module.exports = router;
