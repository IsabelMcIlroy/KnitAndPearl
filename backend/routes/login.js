const express = require("express");
const router = express.Router();
const { db } = require("../database");
const bcrypt = require("bcrypt");

router.post("/", async function (req, res) {
  console.log(req.body);
  // https://github.com/TryGhost/node-sqlite3/wiki/API
  // Query

  const user = await db
    .prepare("SELECT * FROM users WHERE username = ?")
    .get(req.body.username);
  const passwordMatches = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (passwordMatches) {
    req.session.user = { id: user.id, username: user.username };
    res.json({ message: "welcome!" });
  } else {
    res.json({ error: "incorrect password/username" });
  }
});

module.exports = router;
