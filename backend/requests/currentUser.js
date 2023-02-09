function currentUserHandler(req, res) {
  const currentlyLoggedinUser = req.session?.user;
  if (currentlyLoggedinUser === undefined) {
    res.json(null);
  } else {
    res.json({
      username: currentlyLoggedinUser.username,
      id: currentlyLoggedinUser.id,
    });
  }
  return currentlyLoggedinUser;
}

module.exports = currentUserHandler;
