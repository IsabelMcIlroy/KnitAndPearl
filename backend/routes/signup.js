const express = require("express");
const router = express.Router();
const { db } = require("../database");
const bcrypt = require("bcrypt");

router.post("/", async function (req, res) {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  // https://github.com/TryGhost/node-sqlite3/wiki/API
  const newUser = await db
    .prepare(`INSERT INTO users(username, password) VALUES (?,?)`)
    .run(req.body.username, hashedPassword);

  req.session.user = { username: newUser.username };
  res.json({ message: req.body.username });
});

module.exports = router;
