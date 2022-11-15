const fs = require("fs");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, password } = req.body;

  const id = users.length + 1;

  res.json({ id, name, password });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const { password: _, ...foundUser } = users.find(
    (user) => user.id === parseInt(id, 10)
  );

  res.json({ foundUser });
});

module.exports = router;
