const express = require("express");
const router = express.Router();
// Import like this:
// const {db} = require("../database");

router.post("/", express.urlencoded({ extended: false }), function (req, res) {
  req.session.regenerate(function (err) {
    if (err) next(err);

    // https://github.com/TryGhost/node-sqlite3/wiki/API
    // db.run("UPDATE tbl SET name = ? WHERE id = ?", "bar", 2);
    // Query : db.run("SELECT * FROM user WHERE username = ?", req.body.username)

    req.session.user = req.body.user;

    req.session.save(function (err) {
      if (err) return next(err);
      res.redirect("/");
    });
  });
});

module.exports = router;
