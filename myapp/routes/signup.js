const express = require("express");
const router = express.Router();
const { db } = require("../database");

router.post("/", express.urlencoded({ extended: false }), function (req, res) {
  req.session.regenerate(function (err) {
    if (err) next(err);

    // https://github.com/TryGhost/node-sqlite3/wiki/API
    db.run("UPDATE tbl SET name = ? WHERE id = ?", "bar", 2);

    req.session.user = req.body.user;

    req.session.save(function (err) {
      if (err) return next(err);
      res.redirect("/");
    });
  });
});

module.exports = router;
