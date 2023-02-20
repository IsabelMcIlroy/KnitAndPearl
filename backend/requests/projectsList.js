const mysql = require("mysql2/promise");
const pool = mysql.createPool(process.env.DATABASE_URL);

// projectsListHandler = async (req, res) => {
//   const checked = req.params.checked;
//   let projectList = [];
//   console.log(req.session.user.id);
//   try {
//     if (checked === "true") {
//       console.log("true");
//       const projectList = await pool.query(
//         "SELECT projects.*, users.username FROM projects JOIN users ON projects.owner_id = users.id WHERE owner_id = ?",
//         [req.session.user.id]
//       );
//       console.log(projectList);
//       if (projectList === undefined) {
//         res.json({});
//       } else {
//         res.json(projectList);
//       }
//     } else {
//       console.log(false);
//       const projectList = await pool.query(
//         "SELECT projects.*, users.username FROM projects JOIN users ON projects.owner_id = users.id"
//       );
//       console.log(projectList);
//       if (projectList === undefined) {
//         res.json({});
//       } else {
//         res.json(projectList);
//       }
//     }
//   } catch (e) {
//     console.error(e);
//     res.sendStatus(401);
//   }
// };

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
