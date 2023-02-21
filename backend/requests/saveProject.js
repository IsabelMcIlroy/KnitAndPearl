const mysql = require("mysql2/promise");
const pool = mysql.createPool(process.env.DATABASE_URL);

saveProjectHandler = async (req, res) => {
  const currentProject = req.params.id;
  const currentUser = req.session.user.id;
  try {
    const [rows] = await pool.query(
      `UPDATE projects SET grid_colours = ? WHERE id = ? AND owner_id = ?`,
      [JSON.stringify(req.body.gridArray), currentProject, currentUser]
    );
    res.json("updated project");
  } catch (e) {
    console.error(e);
    res.sendStatus(401);
  }
};

// saveProjectHandler = async (req, res) => {
//   const currentProject = req.params.id;
//   const currentUser = req.session.user.id;
//   try {
//     const updateProject = await connection
//       .prepare(
//         `UPDATE projects SET grid_colours = ? WHERE id = ? AND owner_id = ? RETURNING *`
//       )
//       .get(JSON.stringify(req.body.gridArray), currentProject, currentUser);
//     console.log(updateProject);
//     res.json(updateProject);
//   } catch (e) {
//     console.error(e);
//     res.sendStatus(401);
//   }
// };

module.exports = saveProjectHandler;
