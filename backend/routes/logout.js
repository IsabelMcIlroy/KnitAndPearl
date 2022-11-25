const express = require("express");
const router = express.Router();
const isAuthenticated = require("../isAuthenticated");

router.post("/", isAuthenticated, function (req, res) {
  req.session.user = null;
  res.json({ message: "See ya later!" });
});

module.exports = router;
