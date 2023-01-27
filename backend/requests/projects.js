const { db } = require("../database");
const isAuthenticated = require("../isAuthenticated");

const newProject = (app, url) => {
  app.post(url, isAuthenticated, async function (req, res) {
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
  });
};

const projectsList = (app, url) => {
  app.get(url, isAuthenticated, async function (req, res) {
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
  });
};

const getProject = (app, url) => {
  app.get(url, isAuthenticated, async function (req, res) {
    const currentProject = req.params.id;
    const project = await db
      .prepare(
        "SELECT projects.*, users.username FROM projects JOIN users ON projects.owner_id = users.id WHERE projects.id = ?"
      )
      .get(currentProject);
    res.json(project);
  });
};

const saveProject = (app, url) => {
  app.put(url, isAuthenticated, async function (req, res) {
    const currentProject = req.params.id;
    const currentUser = req.session.user.id;
    try {
      const updateProject = await db
        .prepare(
          `UPDATE projects SET grid_colours = ? WHERE id = ? AND owner_id = ? RETURNING *`
        )
        .get(JSON.stringify(req.body.gridArray), currentProject, currentUser);
      console.log(updateProject);
      res.json(updateProject);
    } catch (e) {
      console.error(e);
      res.sendStatus(401);
    }
  });
};

const changeProjectName = (app, url) => {
  app.put(url, isAuthenticated, async function (req, res) {
    const currentProject = req.params.id;
    const currentUser = req.session.user.id;
    try {
      const updateProject = await db
        .prepare(
          `UPDATE projects SET (name, type) = (?,?) WHERE id = ? AND owner_id=? RETURNING *`
        )
        .get(
          req.body.projectName,
          req.body.projectType,
          currentProject,
          currentUser
        );
      res.json(updateProject);
    } catch (e) {
      console.error(e);
      res.sendStatus(401);
    }
  });
};

module.exports = {
  newProject,
  projectsList,
  getProject,
  saveProject,
  changeProjectName,
};
