const express = require("express");
const router = express.Router();
const { db } = require("../database");
const bcrypt = require("bcrypt");

router.post(
  "/",
  express.urlencoded({ extended: false }),
  async function (req, res) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      // https://github.com/TryGhost/node-sqlite3/wiki/API
      let newUser = `INSERT INTO users(username, password) VALUES (?,?)`;
      db.run(newUser, [req.body.username, hashedPassword], () => {
        res.redirect("/");
      });
    } catch (e) {
      console.log(e);
      res.redirect("/signup");
    }
  }
);

module.exports = router;
