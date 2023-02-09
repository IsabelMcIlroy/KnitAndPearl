const { db } = require("../database");

newProjectHandler = async (req, res) => {
  let currentUser = req.session.user;
  req.session.projectName = req.body.projectName;
  const newProject = await db
    .prepare(
      `INSERT INTO projects(owner_id, name, type, rows, columns, grid_colours) VALUES (?,?,?,?,?,?) RETURNING *`
    )
    .get(
      currentUser.id,
      req.body.projectName,
      req.body.projectType,
      req.body.Row,
      req.body.Column,
      JSON.stringify(
        Array(parseInt(req.body.Row))
          .fill(0)
          .map(() =>
            new Array(parseInt(req.body.Column)).fill({
              r: 212,
              g: 196,
              b: 251,
              a: 1,
            })
          )
      )
    );
  res.json(newProject);
};

module.exports = newProjectHandler;
