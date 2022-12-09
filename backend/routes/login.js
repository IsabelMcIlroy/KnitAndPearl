const express = require("express");
const router = express.Router();
const { db } = require("../database");
const bcrypt = require("bcrypt");

router.post("/", async function (req, res) {
  try {
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
  } catch (e) {
    console.error(e);
    res.sendStatus(401);
  }
});

module.exports = router;