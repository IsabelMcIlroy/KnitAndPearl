function logoutHandler(req, res) {
  req.session.user = null;
  req.session.regenerate(function (err) {
    if (err) next(err);
  });
  res.json({ message: "See ya later!" });
}

module.exports = logoutHandler;
