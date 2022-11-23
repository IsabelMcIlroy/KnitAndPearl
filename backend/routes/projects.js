const express = require("express");
const { db } = require("../database");
const router = express.Router();
const isAuthenticated = require("../isAuthenticated");

router.post("/", isAuthenticated, async function (req, res) {
  let currentUser = req.session.user;
  const newProject = await db
    .prepare(
      `INSERT INTO projects(owner_id, name, type, rows, columns) VALUES (?,?,?,?,?)`
    )
    .run(
      currentUser.id,
      req.body.projectName,
      req.body.projectType,
      req.body.Row,
      req.body.Column
    );
  res.json({ message: newProject.name });
});

router.get("/projectList", isAuthenticated, async function (req, res) {
  const project = await db
    .prepare("SELECT * FROM projects WHERE name = ?")
    .get(req.session.user.id);

  if (project === undefined) {
    res.json({
      projects: "you've got no projects",
    });
  } else {
    console.log(project);
    res.json({
      projects: "you've got some projects",
    });
  }
});

// router.get("/", isAuthenticated, async function (req, res) {
//   db.get("SELECT * FROM projects WHERE owner_id = ?", req.session.owner_id);
// });

// router
//   .route("/:id")
//   .get(express.urlencoded({ extended: false }), async (req, res) => {
//     db.get("SELECT * FROM projects WHERE name = ?", req.body.name);

//     console.log("get this project");
//   })
//   .put(express.urlencoded({ extended: false }), async (req, res) => {
//     db.get("SELECT * FROM projects WHERE name = ?", req.body.name);
//     console.log("update this project");
//   })
//   .delete(express.urlencoded({ extended: false }), async (req, res) => {
//     db.get("SELECT * FROM projects WHERE name = ?", req.body.name);
//     console.log("delete this project");
//   });

module.exports = router;
