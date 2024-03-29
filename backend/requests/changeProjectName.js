const mysql = require("mysql2/promise");
const pool = mysql.createPool(process.env.DATABASE_URL);

changeProjectNameHandler = async (req, res) => {
  const currentProject = req.params.id;
  const currentUser = req.session.user.id;
  try {
    const [rows] = await pool.execute(
      `UPDATE projects SET name = ?, type = ? WHERE id = ? AND owner_id=?`,
      [req.body.projectName, req.body.projectType, currentProject, currentUser]
    );
    res.json("updated name");
  } catch (e) {
    console.error(e);
    res.sendStatus(401);
  }
};

module.exports = changeProjectNameHandler;
