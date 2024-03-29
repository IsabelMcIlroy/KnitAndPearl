const mysql = require("mysql2/promise");
const pool = mysql.createPool(process.env.DATABASE_URL);

viewProjectHandler = async (req, res) => {
  const currentProject = req.params.id;
  try {
    const [rows] = await pool.query(
      "SELECT projects.*, users.username FROM projects JOIN users ON projects.owner_id = users.id WHERE projects.id = ?",
      [currentProject]
    );
    const project = rows[0];
    res.json(project);
  } catch (error) {
    console.error(error);
    res.sendStatus(401);
  }
};

module.exports = viewProjectHandler;
