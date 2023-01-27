const user = (app, url) => {
  app.post(url, (req, res) => {
    const { name, password } = req.body;

    const id = users.length + 1;

    res.json({ id, name, password });
  });
};

const userID = (app, url) => {
  app.get(url, (req, res) => {
    const { id } = req.params;

    const { password: _, ...foundUser } = users.find(
      (user) => user.id === parseInt(id, 10)
    );

    res.json({ foundUser });
  });
};

module.exports = { user, userID };
