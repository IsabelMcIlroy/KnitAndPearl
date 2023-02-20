const mysql = require("mysql2/promise");
const pool = mysql.createPool(process.env.DATABASE_URL);
const bcrypt = require("bcrypt");

loginHandler = async (req, res) => {
  const username = req.body.username;
  try {
    const [rows, fields] = await pool.query(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );
    const user = rows[0];

    if (!user) {
      res.sendStatus(401);
      return;
    } else {
      const passwordMatches = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (passwordMatches) {
        req.session.user = { id: user.id, username: user.username };
        res.json({ message: "welcome!" });
      } else {
        res.sendStatus(401);
      }
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(401);
  }
};

module.exports = loginHandler;

// const mysql = require("mysql2/promise");
// const connection = mysql.createConnection(process.env.DATABASE_URL);
// const bcrypt = require("bcrypt");

// loginHandler = async (req, res) => {
//   username = req.body.username;
//   try {
//     const user = await connection.query(
//       "SELECT * FROM users WHERE username = ?",
//       [username]
//     );
//     // const user = await db.login(req.body.username);
//     const passwordMatches = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );

//     if (passwordMatches) {
//       console.log("welcome");
//       req.session.user = { id: user.id, username: user.username };
//       res.json({ message: "welcome!" });
//     } else {
//       console.log("check password");
//       console.error(e);
//       res.sendStatus(401);
//     }
//   } catch (e) {
//     console.log("error");
//     console.error(e);
//     res.sendStatus(401);
//   }
// };

// module.exports = loginHandler;
