function currentUserHandler(req, res) {
  res.set("Access-Control-Allow-Origin", "https://knitandpearl.online/");
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
