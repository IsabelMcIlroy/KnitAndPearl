const { db } = require("../database");
const bcrypt = require("bcrypt");

loginHandler = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://knitandpearl.online/");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  try {
    const user = await db
      .prepare("SELECT * FROM users WHERE username = ?")
      .get(req.body.username);
    const passwordMatches = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (passwordMatches) {
      req.session.user = { id: user.id, username: user.username };
      res.json({ message: "welcome!" });
    } else {
      res.json({ error: "incorrect password/username" });
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(401);
  }
};

module.exports = loginHandler;
