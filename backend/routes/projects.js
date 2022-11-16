const fs = require("fs");
const express = require("express");
const { db } = require("../database");
const router = express.Router();
const isAuthenticated = require("../isAuthenticated");

router.post("/", isAuthenticated, async function (req, res) {
  try {
    let newProject = `INSERT INTO projects(owner_id, name, type) VALUES (?,?,?,?)`;
    db.run(
      newProject,
      [req.session.user.id, req.body.projectName, req.body.projectType],
      (err) => {
        if (err) throw err;
        else {
          res.status(200).json();
        }
      }
    );
  } catch (e) {
    console.log(e);
    res.status(500).json();
  }
});

router.get("/", isAuthenticated, async function (req, res) {
  db.get("SELECT * FROM projects WHERE owner_id = ?", req.session.owner_id);
});

router
  .route("/:id")
  .get(express.urlencoded({ extended: false }), async (req, res) => {
    db.get("SELECT * FROM projects WHERE name = ?", req.body.name);

    console.log("get this project");
  })
  .put(express.urlencoded({ extended: false }), async (req, res) => {
    db.get("SELECT * FROM projects WHERE name = ?", req.body.name);
    console.log("update this project");
  })
  .delete(express.urlencoded({ extended: false }), async (req, res) => {
    db.get("SELECT * FROM projects WHERE name = ?", req.body.name);
    console.log("delete this project");
  });

module.exports = router;
