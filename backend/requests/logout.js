function logoutHandler(req, res) {
  res.set("Access-Control-Allow-Origin", "https://knitandpearl.online/");
  req.session.user = null;
  req.session.regenerate(function (err) {
    if (err) next(err);
  });
  res.json({ message: "See ya later!" });
}

module.exports = logoutHandler;
