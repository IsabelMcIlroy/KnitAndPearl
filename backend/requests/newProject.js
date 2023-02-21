const mysql = require("mysql2/promise");
const pool = mysql.createPool(process.env.DATABASE_URL);

newProjectHandler = async (req, res) => {
  let currentUser = req.session.user;
  req.session.projectName = req.body.projectName;
  try {
    const [newProject] = await pool.query(
      "INSERT INTO projects(owner_id, name, type, grid_rows, grid_columns, grid_colours) VALUES (?,?,?,?,?,?)",
      [
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
        ),
      ]
    );
    console.log(newProject.insertId);
    const projectID = newProject.insertId;
    res.json(projectID);
  } catch (error) {
    console.error(error);
    res.sendStatus(401);
  }
};

module.exports = newProjectHandler;
