const express = require("express");
const router = express.Router();
const { db } = require("../database");
const bcrypt = require("bcrypt");

router.post("/", function (req, res) {
  console.log(req.body);
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
      if (!row) res.status(404).send();
      else {
        try {
          bcrypt.compare(req.body.password, row.password, (err, same) => {
            if (err) throw err;
            if (same) {
              req.session.user = { id: row.id, username: row.username };
              res.json({ message: "welcome!" });
            } else {
              res.send({ error: "incorrect password!" });
            }
          });
        } catch (e) {
          console.log(e);
          res.status(500).send();
        }
      }
    }
  );
});

module.exports = router;
