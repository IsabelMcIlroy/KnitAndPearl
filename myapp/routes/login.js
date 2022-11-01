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

    // const user = await db.prepare(SELECT * FROM users WHERE username = ?).get(req.body.username);
    // const passwordMatches = await bcrypt.compare(req.body.password, row.password);

    // if (passwordMatches) {
    //   res.send("welcome!");
    // } else {
    //   res.send("incorrect password/username");
    // }
    db.get(
      "SELECT * FROM users WHERE username = ?",
      req.body.username,
      (err, row) => {
        if (err) throw err;
        try {
          bcrypt.compare(req.body.password, row.password, (err, same) => {
            if (err) throw err;
            console.log(req.body.password, row.password);
            if (same) {
              res.send("welcome!");
              req.session.user = { username: row.username };
            } else {
              res.send("incorrect password/username");
            }
          });
        } catch (e) {
          console.log(e);
          res.status(500).send();
        }
      }
    );
  }
);

module.exports = router;
