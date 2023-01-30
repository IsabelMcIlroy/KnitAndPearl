const { db } = require("../database");

projectsListHandler = async (req, res) => {
  const checked = req.params.checked;
  if (checked === "true") {
    const projectList = await db
      .prepare(
        "SELECT projects.*, users.username FROM projects JOIN users ON projects.owner_id = users.id WHERE owner_id = ?"
      )
      .all(req.session.user.id);

    if (projectList === undefined) {
      res.json({});
    } else {
      res.json(projectList);
    }
  } else {
    const projectList = await db
      .prepare(
        "SELECT projects.*, users.username FROM projects JOIN users ON projects.owner_id = users.id"
      )
      .all();

    if (projectList === undefined) {
      res.json({});
    } else {
      res.json(projectList);
    }
  }
};

module.exports = projectsListHandler;
