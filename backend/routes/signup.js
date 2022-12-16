const express = require("express");
const router = express.Router();
const { db } = require("../database");
const bcrypt = require("bcrypt");

router.post("/", async function (req, res) {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  // https://github.com/TryGhost/node-sqlite3/wiki/API
  try {
    const newUser = await db
      .prepare(
        `INSERT INTO users(username, password) VALUES (?,?) RETURNING id`
      )
      .run(req.body.username, hashedPassword);
    req.session.user = {
      id: newUser.lastInsertRowid,
      username: req.body.username,
    };
    res.json({ message: req.body.username });
  } catch (e) {
    console.error(e);
    res.sendStatus(401);
  }
});

module.exports = router;
