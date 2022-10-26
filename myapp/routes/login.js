const express = require("express");
const router = express.Router();
const { db } = require("../database");
const bcrypt = require("bcrypt");

router.post(
  "/",
  express.urlencoded({ extended: false }),
  async function (req, res) {
    // https://github.com/TryGhost/node-sqlite3/wiki/API
    // Query
    db.run("SELECT * FROM user WHERE username = ?", req.body.username);
    try {
      if (await bcrypt.compare(req.body.password, user.password)) {
        res.send("welcome!");
      } else {
        res.send("incorrect password/username");
      }
    } catch {
      res.status(500).send();
    }
  }
);

module.exports = router;
