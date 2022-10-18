const express = require("express");
const router = express.Router();

router.post("/", express.urlencoded({ extended: false }), function (req, res) {
  req.session.regenerate(function (err) {
    if (err) next(err);

    req.session.user = req.body.user;

    req.session.save(function (err) {
      if (err) return next(err);
      res.redirect("/");
    });
  });
});

module.exports = router;
