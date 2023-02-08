const { db } = require("../database");
const bcrypt = require("bcrypt");

signupHandler = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://backend.knitandpearl.online");
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  try {
    const newUser = await db
      .prepare(
        `INSERT INTO users(username, password) VALUES (?,?) RETURNING id`
      )
      .run(req.body.username, hashedPassword);
    req.session.user = {
      id: newUser.lastInsertRowid,
      username: req.body.username,
    };
    res.json({ message: req.body.username });
  } catch (e) {
    console.error(e);
    res.sendStatus(401);
  }
};

module.exports = signupHandler;
