const isAuthenticated = require("../isAuthenticated");

const logout = (app, url) => {
  app.post(url, isAuthenticated, function (req, res) {
    req.session.user = null;
    req.session.regenerate(function (err) {
      if (err) next(err);
    });
    res.json({ message: "See ya later!" });
  });
};

module.exports = logout;
