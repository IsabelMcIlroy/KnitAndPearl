const mysql = require("mysql2/promise");
const pool = mysql.createPool(process.env.DATABASE_URL);
const bcrypt = require("bcrypt");

loginHandler = async (req, res) => {
  const username = req.body.username;
  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE username = ?", [
      username,
    ]);
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
