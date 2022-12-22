const express = require("express");
const { db } = require("../database");
const router = express.Router();
const isAuthenticated = require("../isAuthenticated");

router.post("/", isAuthenticated, async function (req, res) {
  let currentUser = req.session.user;
  req.session.projectName = req.body.projectName;
  const newProject = await db
    .prepare(
      `INSERT INTO projects(owner_id, name, type, rows, columns, grid_colours) VALUES (?,?,?,?,?,?) RETURNING *`
    )
    .get(
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
  res.json(newProject);
});

router.get("/", isAuthenticated, async function (req, res) {
  const projectList = await db
    .prepare("SELECT * FROM projects WHERE owner_id = ?")
    .all(req.session.user.id);

  if (projectList === undefined) {
    res.json({});
  } else {
    res.json(projectList);
  }
});

router.get("/:id", isAuthenticated, async function (req, res) {
  const currentProject = req.params.id;
  const project = await db
    .prepare("SELECT * FROM projects WHERE id = ?")
    .get(currentProject);
  res.json(project);
});

router.put("/:id", isAuthenticated, async function (req, res) {
  const currentProject = req.params.id;
  const updateProject = await db
    .prepare(`UPDATE projects SET grid_colours = ? WHERE id = ? RETURNING *`)
    .get(JSON.stringify(req.body.gridArray), currentProject);
  console.log(updateProject);
  res.json(updateProject);
});

router.put("/editNames/:id", isAuthenticated, async function (req, res) {
  const currentProject = req.params.id;
  const updateProject = await db
    .prepare(
      `UPDATE projects SET (name, type) = (?,?) WHERE id = ? RETURNING *`
    )
    .get(req.body.projectName, req.body.projectType, currentProject);
  res.json(updateProject);
});

router.get("/checkUser/:id", async function (req, res) {
  const currentProject = req.params.id;
  const currentlyLoggedinUser = req.session.user.id;
  try {
    const checkUser = await db
      .prepare("SELECT * FROM projects WHERE owner_id=? AND id = ?")
      .get(currentlyLoggedinUser, currentProject);
    res.json(checkUser);
  } catch (e) {
    res.json({});
  }
});

module.exports = router;
