const express = require("express");
const router = express.Router();
const isAuthenticated = require("../isAuthenticated");

router.get("/", isAuthenticated, function (req, res, next) {
  req.session.user = null;
  res.json({ message: "See ya later!" });
});

module.exports = router;
