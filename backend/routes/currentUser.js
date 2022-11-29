const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
  const currentlyLoggedinUser = req.session.user;
  if (currentlyLoggedinUser === undefined) {
    res.json({});
  } else {
    res.json({ username: currentlyLoggedinUser });
  }
});

module.exports = router;
