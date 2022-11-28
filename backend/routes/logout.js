const express = require("express");
const router = express.Router();
const isAuthenticated = require("../isAuthenticated");

router.post("/", isAuthenticated, function (req, res) {
  req.session.user = null;
  req.session.regenerate(function (err) {
    if (err) next(err);
  });
  res.json({ message: "See ya later!" });
});

module.exports = router;
