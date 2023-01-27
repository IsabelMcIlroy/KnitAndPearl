const currentUser = (app, url) => {
  app.get(url, async function (req, res) {
    const currentlyLoggedinUser = req.session.user;
    if (currentlyLoggedinUser === undefined) {
      res.json(null);
    } else {
      res.json({
        username: currentlyLoggedinUser.username,
        id: currentlyLoggedinUser.id,
      });
    }
  });
};

module.exports = currentUser;
