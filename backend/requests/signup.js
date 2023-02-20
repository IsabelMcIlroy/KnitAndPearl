const mysql = require("mysql2/promise");
const pool = mysql.createPool(process.env.MYSQL_URL);
const bcrypt = require("bcrypt");

signupHandler = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  try {
    const [newUser] = await pool.execute(
      `INSERT INTO users(username, password) VALUES (?,?)`,
      [req.body.username, hashedPassword]
    );
    req.session.user = {
      id: newUser.insertId,
      username: req.body.username,
    };
    res.json({ message: req.body.username });
  } catch (error) {
    console.error(error);
    res.sendStatus(401);
  }
};

module.exports = signupHandler;

// signupHandler = async (req, res) => {
//   const hashedPassword = await bcrypt.hash(req.body.password, 10);
//   try {
//     const newUser = await connection
//       .prepare(
//         `INSERT INTO users(username, password) VALUES (?,?) RETURNING id`
//       )
//       .run(req.body.username, hashedPassword);
//     req.session.user = {
//       id: newUser.lastInsertRowid,
//       username: req.body.username,
//     };
//     res.json({ message: req.body.username });
//   } catch (e) {
//     console.error(e);
//     res.sendStatus(401);
//   }
// };

// module.exports = signupHandler;
