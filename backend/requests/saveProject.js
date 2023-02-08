const { db } = require("../database");

saveProjectHandler = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "https://knitandpearl.online/");
  const currentProject = req.params.id;
  const currentUser = req.session.user.id;
  try {
    const updateProject = await db
      .prepare(
        `UPDATE projects SET grid_colours = ? WHERE id = ? AND owner_id = ? RETURNING *`
      )
      .get(JSON.stringify(req.body.gridArray), currentProject, currentUser);
    console.log(updateProject);
    res.json(updateProject);
  } catch (e) {
    console.error(e);
    res.sendStatus(401);
  }
};

module.exports = saveProjectHandler;
