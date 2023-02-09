const { db } = require("../database");
const bcrypt = require("bcrypt");

loginHandler = async (req, res) => {
  try {
    const user = await db
      .prepare("SELECT * FROM users WHERE username = ?")
      .get(req.body.username);
    // const user = await db.login(req.body.username);
    const passwordMatches = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (passwordMatches) {
      req.session.user = { id: user.id, username: user.username };
      res.json({ message: "welcome!" });
    } else {
      console.error(e);
      res.sendStatus(401);
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(401);
  }
};

module.exports = loginHandler;
