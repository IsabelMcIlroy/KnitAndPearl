const { db } = require("../database");

viewProjectHandler = async (req, res) => {
  const currentProject = req.params.id;
  const project = await db
    .prepare(
      "SELECT projects.*, users.username FROM projects JOIN users ON projects.owner_id = users.id WHERE projects.id = ?"
    )
    .get(currentProject);
  res.json(project);
};

module.exports = viewProjectHandler;
