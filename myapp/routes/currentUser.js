const express = require("express");
const router = express.Router();
const isAuthenticated = require("../isAuthenticated");

router.get("/", isAuthenticated, async function (req, res) {
  const currentlyLoggedinUser = req.session.user;
  if (err) throw err;
  else {
    res.send({ currentlyLoggedinUser });
  }
});

module.exports = router;
