const fs = require("fs");
const express = require("express");
const router = express.Router();

const usersFile = fs.readFileSync("users_db.json").toString();
const users = usersFile ? JSON.parse(usersFile).users : [];

router.post("/", (req, res) => {
  const { name, password } = req.body;

  const id = users.length + 1;

  users.push({ id, name, password });
  fs.writeFileSync("users_db.json", JSON.stringify({ users: users }));

  res.send({ id, name, password });
});

router.get("/currentUser", (req, res) => {
  // Return req.user if you're logged in
  // If not, it will return 404
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const { password: _, ...foundUser } = users.find(
    (user) => user.id === parseInt(id, 10)
  );

  res.send(foundUser);
});

module.exports = router;
