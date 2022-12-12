const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
  const currentlyLoggedinUser = req.session.user;
  if (currentlyLoggedinUser === undefined) {
    res.json(null);
  } else {
    res.json({ username: currentlyLoggedinUser.username });
  }
});

module.exports = router;
