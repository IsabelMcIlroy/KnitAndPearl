const express = require("express");
const router = express.Router();
const { db } = require("../database");
const bcrypt = require("bcrypt");

router.post("/", async function (req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // https://github.com/TryGhost/node-sqlite3/wiki/API
    let newUser = `INSERT INTO users(username, password) VALUES (?,?)`;
    db.run(newUser, [req.body.username, hashedPassword], () => {
      req.session.user = { username: req.body.username };
      res.status(200).json();
    });
  } catch (e) {
    console.log(e);
    res.status(200).json();
  }
});

module.exports = router;
