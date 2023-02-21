const mysql = require("mysql2/promise");
const pool = mysql.createPool(process.env.DATABASE_URL);

projectsListHandler = async (req, res) => {
  const checked = req.params.checked;
  if (checked === "true") {
    const [rows] = await pool.query(
      "SELECT projects.*, users.username FROM projects JOIN users ON projects.owner_id = users.id WHERE owner_id = ?",
      [req.session.user.id]
    );
    const projectList = rows;
    if (projectList === undefined) {
      res.json({});
    } else {
      res.json(projectList);
    }
  } else {
    const [rows] = await pool.query(
      "SELECT projects.*, users.username FROM projects JOIN users ON projects.owner_id = users.id"
    );
    const projectList = rows;
    if (projectList === undefined) {
      res.json({});
    } else {
      res.json(projectList);
    }
  }
};

module.exports = projectsListHandler;
