const express = require("express");
const router = express.Router();
const isAuthenticated = require("../isAuthenticated");

router.get("/", isAuthenticated, async function (req, res) {
  const currentlyLoggedinUser = req.session.user;
  console.log(currentlyLoggedinUser);
  res.json({ username: currentlyLoggedinUser });
});

module.exports = router;
