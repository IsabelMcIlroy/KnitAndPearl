const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.json());

const usersFile = fs.readFileSync("users_db.json").toString();
const users = usersFile ? JSON.parse(usersFile).users : [];

app.post("/", (req, res) => {
  const { name, password } = req.body;

  const id = users.length + 1;

  users.push({ id, name, password });
  fs.writeFileSync("users_db.json", JSON.stringify({ users: users }));

  res.send({ id, name, password });
});

app.get("/:id", (req, res) => {
  const { id } = req.params;

  const { password: _, ...foundUser } = users.find(
    (user) => user.id === parseInt(id, 10)
  );

  res.send(foundUser);
});

module.exports = router;
