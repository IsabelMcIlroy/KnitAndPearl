const express = require("express");
const router = express.Router();
const isAuthenticated = require("../isAuthenticated");

router.get("/", async function (req, res) {
  const currentlyLoggedinUser = req.session.user;
  if (currentlyLoggedinUser === undefined) {
    res.json(null);
  } else {
    res.json({ username: currentlyLoggedinUser.username });
  }
});

module.exports = router;
