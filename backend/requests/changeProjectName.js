const { db } = require("../database");

changeProjectNameHandler = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "https://knitandpearl.online/");
  const currentProject = req.params.id;
  const currentUser = req.session.user.id;
  try {
    const updateProject = await db
      .prepare(
        `UPDATE projects SET (name, type) = (?,?) WHERE id = ? AND owner_id=? RETURNING *`
      )
      .get(
        req.body.projectName,
        req.body.projectType,
        currentProject,
        currentUser
      );
    res.json(updateProject);
  } catch (e) {
    console.error(e);
    res.sendStatus(401);
  }
};

module.exports = changeProjectNameHandler;
