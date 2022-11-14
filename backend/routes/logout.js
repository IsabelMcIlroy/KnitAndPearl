const express = require("express");
const router = express.Router();
const isAuthenticated = require("../isAuthenticated");

router.get("/", isAuthenticated, function (req, res, next) {
  req.session.user = null;
  req.session.save(function (err) {
    if (err) next(err);

    req.session.regenerate(function (err) {
      if (err) next(err);
      res.redirect("/");
    });
  });
});

module.exports = router;
