const mysql = require("mysql2/promise");
const pool = mysql.createPool(process.env.DATABASE_URL);

deleteProjectHandler = async (req, res) => {
  const currentProject = req.params.id;
  const currentUser = req.session.user.id;
  try {
    const [rows] = await pool.query(
      `DELETE FROM projects WHERE id = ? AND owner_id = ?`,
      [currentProject, currentUser]
    );
    res.json("deleted project");
  } catch (e) {
    console.error(e);
    res.sendStatus(401);
  }
};

module.exports = deleteProjectHandler;
